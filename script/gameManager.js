import { CONFIG, UNLOCK_THRESHOLDS, GEN_ENERGY_CONFIG, GENERATORS_DATA, CATEGORIES_CONFIG } from './config.js';
import { gameState, playerProfile, gameSettings } from './state.js';
import { DOMElements } from './dom.js';
import { addListeners } from './eventHandlers.js';
import { createGrid, updateUI, applyTheme, showToast, highlightHintItems, removeHintHighlights } from './ui.js';
import { restoreGeneratorsEnergy, regenerateEnergy, checkOrdersAvailability, shuffleArray, getEmptyGridCells, markItemAsDiscovered, generateOrder, findMergeablePair } from './gameLogic.js';
import { openTutorialModal } from './modals.js';
// --- Game Version Check ---
(function checkVersion() {
  const storedVersion = localStorage.getItem(CONFIG.VERSION_KEY);
  if (storedVersion !== CONFIG.GAME_VERSION) {
    console.warn(`Game version mismatch (was ${storedVersion}, now ${CONFIG.GAME_VERSION}). Resetting save.`);
    localStorage.removeItem(CONFIG.SAVE_KEY);
    localStorage.removeItem(CONFIG.LAST_LOGIN_KEY);
    localStorage.setItem(CONFIG.VERSION_KEY, CONFIG.GAME_VERSION);
    window.location.reload();
  }
})();

// --- Inactivity Hint Logic ---
const HINT_INACTIVITY_DELAY = 8000; // 8 seconds
let inactivityTimer = null;

function showHint() {
    const pair = findMergeablePair();
    if (pair) {
        highlightHintItems(pair);
    }
}

function resetInactivityTimer() {
    removeHintHighlights();
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showHint, HINT_INACTIVITY_DELAY);
}

export function startGameAndAudio() {
  if (gameSettings.musicVolume > 0 && DOMElements.bgMusic.paused) {
    DOMElements.bgMusic.play().catch(e => {
      console.warn("Background music playback failed even after initial user interaction.", e);
    });
  }
  DOMElements.startScreen.style.opacity = '0';
  setTimeout(() => { DOMElements.startScreen.style.display = 'none'; }, 500);
}

export function initGame() {
  createGrid();
  if (localStorage.getItem(CONFIG.SAVE_KEY)) {
    loadGame();
  } else {
    startNewGame();
  }
  DOMElements.bgMusic.volume = gameSettings.musicVolume;
  applyTheme();

  restoreGeneratorsEnergy();
  checkOrdersAvailability();
  updateUI();
  addListeners();

  // Показываем обучение для новых игроков
  if (!playerProfile.hasSeenTutorial) {
    openTutorialModal();
  }

  // Reset inactivity timer on any user interaction on the screen
  document.body.addEventListener('pointerdown', resetInactivityTimer, true);
  resetInactivityTimer(); // Start the first timer

  setInterval(() => {
    if (!document.hidden) {
      playerProfile.timePlayed += CONFIG.ENERGY_REGEN_INTERVAL;
    }
    regenerateEnergy();
    restoreGeneratorsEnergy();
    DOMElements.energy.value.innerText = gameState.energy;

    localStorage.setItem(CONFIG.LAST_LOGIN_KEY, Date.now());
  }, CONFIG.ENERGY_REGEN_INTERVAL);
}

export function saveGame() {
  const saveData = {
    gridData: gameState.gridData,
    score: gameState.score,
    coins: gameState.coins,
    energy: gameState.energy,
    orders: gameState.orders,
    orderIdCounter: gameState.orderIdCounter,
    rewardQueue: gameState.rewardQueue,
    activeCategories: gameState.activeCategories,
    newlyUnlockedCategories: gameState.newlyUnlockedCategories,
    unlockedItemGenCategories: gameState.unlockedItemGenCategories,
    lockedCategories: gameState.lockedCategories,
    discoveredItems: gameState.discoveredItems,
    claimedAchievements: gameState.claimedAchievements,
    profile: playerProfile,
    claimedCollectionBonuses: gameState.claimedCollectionBonuses,
    storyState: gameState.storyState,
    settings: gameSettings,
    thresholds: UNLOCK_THRESHOLDS.map(t => ({ score: t.score, unlocked: t.unlocked, level: t.level }))
  };
  localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(saveData));
}

export function loadGame() {
  try {
    const loaded = JSON.parse(localStorage.getItem(CONFIG.SAVE_KEY));
    if (!loaded) {
      startNewGame();
      return;
    }

    const lastTime = parseInt(localStorage.getItem(CONFIG.LAST_LOGIN_KEY)) || Date.now();
    const timePassed = Date.now() - lastTime;
    const energyToRestore = Math.floor(timePassed / CONFIG.OFFLINE_ENERGY_REGEN_RATE);

    gameState.gridData = loaded.gridData;
    gameState.score = loaded.score;
    gameState.coins = loaded.coins || 0;
    gameState.energy = loaded.energy || 0;
    gameState.orders = loaded.orders;
    gameState.orderIdCounter = loaded.orderIdCounter;
    gameState.rewardQueue = loaded.rewardQueue || [];
    gameState.activeCategories = loaded.activeCategories;
    gameState.lockedCategories = loaded.lockedCategories;
    gameState.newlyUnlockedCategories = loaded.newlyUnlockedCategories || [];
    gameState.unlockedItemGenCategories = loaded.unlockedItemGenCategories || [];
    gameState.discoveredItems = loaded.discoveredItems || {};
    gameState.claimedAchievements = loaded.claimedAchievements || {};
    gameState.claimedCollectionBonuses = loaded.claimedCollectionBonuses || {};
    gameState.storyState = loaded.storyState || { unlocked: false, currentChapter: 1, currentStep: 0, completed: false };

    // Делаем сюжет доступным по умолчанию для старых сохранений, где он мог быть заблокирован
    if (!gameState.storyState.unlocked) {
      gameState.storyState.unlocked = true;
      showToast("Вам доступна новая сюжетная глава!", "story");
    }

    const loadedSettings = loaded.settings || {};
    gameSettings.musicVolume = loadedSettings.musicVolume !== undefined ? loadedSettings.musicVolume : 0.2;
    gameSettings.sfxVolume = loadedSettings.sfxVolume !== undefined ? loadedSettings.sfxVolume : 0.5;
    gameSettings.theme = loadedSettings.theme || 'dark';

    const loadedProfile = loaded.profile || {};
    playerProfile.name = loadedProfile.name || 'Игрок';
    playerProfile.icon = loadedProfile.icon || 'assets/icons/profile.png';
    playerProfile.startDate = loadedProfile.startDate || Date.now();
    playerProfile.timePlayed = loadedProfile.timePlayed || 0;
    playerProfile.totalMerges = loadedProfile.totalMerges || 0;
    playerProfile.totalOrdersCompleted = loadedProfile.totalOrdersCompleted || 0;
    playerProfile.totalCoinsEarned = loadedProfile.totalCoinsEarned || 0;
    playerProfile.totalEnergySpent = loadedProfile.totalEnergySpent || 0;
    playerProfile.mergeCounts = loadedProfile.mergeCounts || {};

    // Для старых сохранений считаем, что обучение пройдено
    // Изменено: теперь для старых сохранений обучение будет показано один раз.
    if (loadedProfile.hasSeenTutorial === undefined) {
      playerProfile.hasSeenTutorial = false;
    } else {
      playerProfile.hasSeenTutorial = loadedProfile.hasSeenTutorial;
    }
    if (energyToRestore > 0) {
      gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + energyToRestore);
      showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Вы отсутствовали. Восстановлено ${energyToRestore <= 100 ? energyToRestore : 100} энергии!`, "success");
    }

    if (loaded.thresholds) {
      loaded.thresholds.forEach((t, i) => {
        if (UNLOCK_THRESHOLDS[i]) UNLOCK_THRESHOLDS[i].unlocked = t.unlocked;
      });
    }
  } catch (e) {
    console.error("Ошибка при чтении сохранения, начата новая игра", e);
    startNewGame();
  }
}

export function startNewGame() {
  gameState.gridData = Array(CONFIG.GRID_COLS * CONFIG.GRID_ROWS).fill(null);
  gameState.score = 0;
  gameState.coins = 0;
  gameState.energy = CONFIG.MAX_ENERGY;
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = false);
  gameState.rewardQueue = [];
  gameState.newlyUnlockedCategories = [];
  gameState.unlockedItemGenCategories = [];
  gameState.discoveredItems = {};
  gameState.claimedAchievements = {};
  gameState.claimedCollectionBonuses = {};
  gameState.storyState = {
    unlocked: true,
    activeStoryId: null,
    progress: {}
  };
  // Reset settings
  gameSettings.musicVolume = 0.2;
  gameSettings.sfxVolume = 0.5;
  gameSettings.theme = 'dark';
  DOMElements.bgMusic.volume = gameSettings.musicVolume;

  // Сброс профиля
  playerProfile.name = 'Игрок';
  playerProfile.icon = 'assets/icons/profile.png';
  playerProfile.startDate = Date.now();
  playerProfile.timePlayed = 0;
  playerProfile.totalMerges = 0;
  playerProfile.totalOrdersCompleted = 0;
  playerProfile.totalCoinsEarned = 0;
  playerProfile.totalEnergySpent = 0;
  playerProfile.mergeCounts = {};

  playerProfile.hasSeenTutorial = false;
  // --- Новая логика генерации стартовых генераторов ---
  const allGeneratorKeys = Object.keys(GENERATORS_DATA).filter(k => k !== 'bonus_chest' && !GENERATORS_DATA[k].isStoryOnly);
  const startingGenerators = [];
  const activeCategoriesSet = new Set();

  // Выбираем 2 уникальные случайные категории
  const shuffledGenKeys = [...allGeneratorKeys].sort(() => 0.5 - Math.random());
  const genKey1 = shuffledGenKeys[0];
  const genKey2 = shuffledGenKeys[1];

  // Создаем два генератора на основе этих категорий
  startingGenerators.push({ isGenerator: true, generatorKey: genKey1, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
  startingGenerators.push({ isGenerator: true, generatorKey: genKey2, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
  markItemAsDiscovered(genKey1, 'generator');
  markItemAsDiscovered(genKey2, 'generator');

  [genKey1, genKey2].forEach(key => GENERATORS_DATA[key].categories.forEach(cat => activeCategoriesSet.add(cat)));
  gameState.activeCategories = Array.from(activeCategoriesSet);
  gameState.lockedCategories = Object.keys(CATEGORIES_CONFIG).filter(cat => {
    const genKey = CATEGORIES_CONFIG[cat].generatorKey;
    const isStoryGenerator = genKey && GENERATORS_DATA[genKey] && GENERATORS_DATA[genKey].isStoryOnly;
    return !gameState.activeCategories.includes(cat) && !CATEGORIES_CONFIG[cat].isItemGenerated && !isStoryGenerator;
  });
  shuffleArray(gameState.lockedCategories);
  // --- Конец новой логики ---

  let availableIndices = Array.from({length: CONFIG.GRID_COLS * CONFIG.GRID_ROWS}, (_, i) => i);
  for (let i = 0; i < CONFIG.BLOCKED_ITEMS_AT_START; i++) {
    if (availableIndices.length > 5) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      // Теперь создаем реальный предмет, но заблокированный.
      // Предметы могут быть любой категории (кроме тех, что генерируются другими предметами) и любого уровня.
      const spawnableCategories = Object.keys(CATEGORIES_CONFIG).filter(cat => !CATEGORIES_CONFIG[cat].isItemGenerated);
      const randomCat = spawnableCategories[Math.floor(Math.random() * spawnableCategories.length)];
      // Уровень от 1 до предпоследнего (6), чтобы не блокировать предметы максимального уровня.
      const randomLevel = Math.floor(Math.random() * (CONFIG.MAX_ITEM_LEVEL - 1)) + 1;
      gameState.gridData[cellIndex] = { category: randomCat, level: randomLevel, isBlocked: true };
      // Заблокированные предметы не добавляются в коллекцию при старте.
      // markItemAsDiscovered(randomCat, randomLevel);
    }
  }

  // Размещаем стартовые генераторы
  startingGenerators.forEach(gen => {
    if (availableIndices.length > 0) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      gameState.gridData[cellIndex] = gen;
    }
  });


  for(let i = 0; i < CONFIG.STARTING_ITEMS_COUNT; i++) {
    let emptyCells = getEmptyGridCells();
    if(emptyCells.length > 0) {
      let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      gameState.gridData[randomCell] = { category: gameState.activeCategories[i % gameState.activeCategories.length], level: 1 };
      markItemAsDiscovered(gameState.activeCategories[i % gameState.activeCategories.length], 1);
    }
  }

  gameState.orders = [];
  for (let i = 0; i < CONFIG.MAX_ORDERS; i++) {
    generateOrder();
  }

  saveGame();
}
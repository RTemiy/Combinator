import { GENERATORS_DATA, CATEGORIES_CONFIG, STORY_DATA } from './config.js';
import { CONFIG, UNLOCK_THRESHOLDS, GEN_ENERGY_CONFIG } from './data/gameConfig.js';
import { gameState, playerProfile, gameSettings } from './state.js';
import { DOMElements } from './dom.js';
import { addListeners } from './eventHandlers.js';
import { createGrid, updateUI, applyTheme, showToast, highlightHintItems, removeHintHighlights } from './ui.js';
import { restoreGeneratorsEnergy, regenerateEnergy, checkOrdersAvailability, shuffleArray, getEmptyGridCells, markItemAsDiscovered, generateOrder, findMergeablePair } from './gameLogic.js';
import { openTutorialModal, openStoryModal, openStorySelectionModal } from './modals.js';
import { initAudio, playBackgroundMusic, pauseBackgroundMusic } from './audioManager.js';
import { energyIconUrl, profileIconUrl } from './data/assetUrls.js';

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
  // Инициализируем Web Audio API. Это нужно сделать после первого действия пользователя.
  initAudio(gameSettings.musicVolume, gameSettings.sfxVolume);

  // Если громкость музыки > 0, пытаемся запустить.
  // playBackgroundMusic() уже содержит логику resume AudioContext и обработки ошибок.
  if (gameSettings.musicVolume > 0) {
    playBackgroundMusic();
  } else {
    // Если музыка выключена, убедимся, что она не играет
    pauseBackgroundMusic();
  }

  DOMElements.startScreen.style.opacity = '0';
  setTimeout(() => { DOMElements.startScreen.style.display = 'none'; }, 500);
}

export function initGame() {
  createGrid();
  const isNewPlayer = !localStorage.getItem(CONFIG.SAVE_KEY);

  if (isNewPlayer) {
    startNewGame();
  } else {
    loadGame();
  }

  applyTheme();

  restoreGeneratorsEnergy();
  checkOrdersAvailability();
  updateUI();
  addListeners();

  // Показываем обучение для новых игроков или модал сюжета для вернувшихся
  if (!playerProfile.hasSeenTutorial) {
    openTutorialModal();
  } else if (!isNewPlayer) { // Если не новый игрок и обучение уже видел
    if (gameState.storyState.unlocked) {
      const activeStoryId = gameState.storyState.activeStoryId;
      const hasActiveStory = activeStoryId && STORY_DATA[activeStoryId];
      const progress = hasActiveStory ? gameState.storyState.progress[activeStoryId] : null;

      if (hasActiveStory && progress && !progress.completed) {
        openStoryModal();
      } else {
        openStorySelectionModal();
      }
    }
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
    thresholds: UNLOCK_THRESHOLDS.map(t => ({ level: t.level, unlocked: t.unlocked }))
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
    gameSettings.theme = loadedSettings.theme || 'light';

    const loadedProfile = loaded.profile || {};
    playerProfile.icon = loadedProfile.icon || profileIconUrl.href;
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
      showToast(`<img src="${energyIconUrl}" class="toast-icon" alt=""> Вы отсутствовали. Восстановлено ${energyToRestore <= 100 ? energyToRestore : 100} энергии!`, "success");
    }

    if (loaded.thresholds) {
      // Безопасная загрузка по уровню, а не по индексу, для совместимости со старыми сохранениями
      loaded.thresholds.forEach(savedThreshold => {
        const gameThreshold = UNLOCK_THRESHOLDS.find(t => t.level === savedThreshold.level);
        if (gameThreshold) gameThreshold.unlocked = savedThreshold.unlocked;
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
  // Сбрасываем прогресс уровней, оставляя разблокированным только 1-й уровень
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = (t.level === 1));
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
  gameSettings.theme = 'light';

  // Сброс профиля
  playerProfile.name = 'Ваше имя';
  playerProfile.icon = profileIconUrl.href;
  playerProfile.startDate = Date.now();
  playerProfile.timePlayed = 0;
  playerProfile.totalMerges = 0;
  playerProfile.totalOrdersCompleted = 0;
  playerProfile.totalCoinsEarned = 0;
  playerProfile.totalEnergySpent = 0;
  playerProfile.mergeCounts = {};

  playerProfile.hasSeenTutorial = false;
  const allGeneratorKeys = Object.keys(GENERATORS_DATA).filter(k => k !== 'bonus_chest' && !GENERATORS_DATA[k].isStoryOnly);
  const startingGenerators = [];
  const activeCategoriesSet = new Set();

  // Выбираем N уникальных случайных генераторов
  const shuffledGenKeys = [...allGeneratorKeys].sort(() => 0.5 - Math.random());
  const startingGenKeys = shuffledGenKeys.slice(0, CONFIG.STARTING_GENERATORS_COUNT);

  startingGenKeys.forEach(genKey => {
    startingGenerators.push({ isGenerator: true, generatorKey: genKey, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
    markItemAsDiscovered(genKey, 1);
    GENERATORS_DATA[genKey].categories.forEach(cat => activeCategoriesSet.add(cat));
  });

  gameState.activeCategories = Array.from(activeCategoriesSet);
  gameState.lockedCategories = Object.keys(CATEGORIES_CONFIG).filter(cat => {
    const genKey = CATEGORIES_CONFIG[cat].generatorKey;
    const isStoryGenerator = genKey && GENERATORS_DATA[genKey] && GENERATORS_DATA[genKey].isStoryOnly;
    return !gameState.activeCategories.includes(cat) && !CATEGORIES_CONFIG[cat].isItemGenerated && !isStoryGenerator;
  });
  shuffleArray(gameState.lockedCategories);

  let availableIndices = Array.from({length: CONFIG.GRID_COLS * CONFIG.GRID_ROWS}, (_, i) => i);

  // --- Новая логика генерации заблокированных предметов ---
  const blockedItemsToGenerate = [];
  const totalBlockedItems = CONFIG.BLOCKED_ITEMS_AT_START;
  const activeCategoryBlockedCount = Math.round(totalBlockedItems * CONFIG.BLOCKED_UNLOCKED_CATEGORY_ITEMS_AT_START);
  const lockedCategoryBlockedCount = totalBlockedItems - activeCategoryBlockedCount;

  // Фильтруем категории, которые могут быть сгенерированы (не являются результатом крафта другого предмета)
  const activeSpawnableCategories = gameState.activeCategories.filter(cat => !CATEGORIES_CONFIG[cat].isItemGenerated);
  const lockedSpawnableCategories = gameState.lockedCategories.filter(cat => !CATEGORIES_CONFIG[cat].isItemGenerated);

  // Функция для генерации случайного уровня от 3 до предпоследнего (6)
  const getRandomBlockedLevel = () => Math.floor(Math.random() * (CONFIG.MAX_ITEM_LEVEL - 3)) + 3;

  // Генерируем предметы из активных категорий
  for (let i = 0; i < activeCategoryBlockedCount; i++) {
    if (activeSpawnableCategories.length > 0) {
      const randomCat = activeSpawnableCategories[Math.floor(Math.random() * activeSpawnableCategories.length)];
      blockedItemsToGenerate.push({ category: randomCat, level: getRandomBlockedLevel(), isBlocked: true });
    }
  }

  // Генерируем предметы из заблокированных категорий
  for (let i = 0; i < lockedCategoryBlockedCount; i++) {
    if (lockedSpawnableCategories.length > 0) {
      const randomCat = lockedSpawnableCategories[Math.floor(Math.random() * lockedSpawnableCategories.length)];
      blockedItemsToGenerate.push({ category: randomCat, level: getRandomBlockedLevel(), isBlocked: true });
    }
  }

  // Перемешиваем и размещаем на поле
  shuffleArray(blockedItemsToGenerate);

  blockedItemsToGenerate.forEach(item => {
    if (availableIndices.length > 5) { // Оставляем немного места для стартовых предметов
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      gameState.gridData[cellIndex] = item;
    }
  });

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
const ITEM_CATEGORIES = {
  stationery: {
    name: 'Канцелярия',
    color: '#8a1b0b',
    items: [
      { level: 1, icon: '✏️', name: 'Простой карандаш', desc: 'Оставляет тонкий след на бумаге. Базовый инструмент художника.' },
      { level: 2, icon: '✒️', name: 'Гелевая ручка', desc: 'Пишет четко и ярко. Чернила сохнут мгновенно.' },
      { level: 3, icon: '✂️', name: 'Ножницы', desc: 'Острые стальные лезвия. Легко режут картон и бумагу.' },
      { level: 4, icon: '📔', name: 'Записная книжка', desc: 'Плотные листы в линейку. Хранит важные наброски сюжета.' },
      { level: 5, icon: '📚', name: 'Стопка учебников', desc: 'Сборник древних и современных знаний по всем наукам.' },
      { level: 6, icon: '🎒', name: 'Школьный рюкзак', desc: 'Вмещает в себя кучу тетрадей, учебников и пенал.' },
      { level: 7, icon: '🗄', name: 'Стеллаж с книгами', desc: 'Тут собраны все учебники, которые проходят в школе. ' }
    ]
  },
  flowers: {
    name: 'Растения',
    color: '#06d6a0',
    items: [
      { level: 1, icon: '🍃', name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: '🌱', name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек. Требует заботы, солнца и полива.' },
      { level: 3, icon: '🌿', name: 'Веточка мяты', desc: 'Свежие зеленые листочки. Источают приятный расслабляющий аромат.' },
      { level: 4, icon: '🪴', name: 'Растение в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: '🌹', name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: '💐', name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: '🌳', name: 'Раскидистое дерево', desc: 'Могучий вековой исполин. Высшая точка природного роста!' }
    ]
  },
  sweets: {
    name: 'Сладости',
    color: '#0353ff',
    items: [
      { level: 1, icon: '🍬', name: 'Мятная конфета', desc: 'Маленький леденец в шуршащей обертке.' },
      { level: 2, icon: '🍭', name: 'Леденец на палочке', desc: 'Сладкий карамельный кругляш.' },
      { level: 3, icon: '🍪', name: 'Овсяное печенье', desc: 'Ароматное печенье с кусочками шоколада.' },
      { level: 4, icon: '🍫', name: 'Плитка шоколада', desc: 'Настоящий темный шоколад.' },
      { level: 5, icon: '🍩', name: 'Глазированный пончик', desc: 'Пышное тесто с яркой посыпкой.' },
      { level: 6, icon: '🍰', name: 'Кусочек торта', desc: 'Бисквит с нежным ягодным кремом.' },
      { level: 7, icon: '🎂', name: 'Праздничный торт', desc: 'Шедевр со свечами — пик кондитерского искусства!' }
    ]
  },
  accessories: {
    name: 'Драгоценности',
    color: '#e0aaff',
    items: [
      { level: 1, icon: '🪨', name: 'Необработанный камень', desc: 'Простой булыжник, в котором скрыт потенциал.' },
      { level: 2, icon: '🗝', name: 'Серебряный ключ', desc: 'Изящный ключ от шкатулки с драгоценностями.' },
      { level: 3, icon: '💍', name: 'Драгоценное кольцо', desc: 'Базовая заготовка для ювелирного изделия.' },
      { level: 4, icon: '💎', name: 'Ограненный алмаз', desc: 'Драгоценный камень, засиявший после обработки.' },
      { level: 5, icon: '👑', name: 'Золотая корона', desc: 'Корона, украшенная вставками из драгоценных камней.' },
      { level: 6, icon: '💰', name: 'Сундук с сокровищами', desc: 'Полная коллекция богатств, собранная старателем.' },
      { level: 7, icon: '🏆', name: 'Артефакт власти', desc: 'Легендарная реликвия, венчающая мастерство создателя.' }
    ]
  },
  gadgets: {
    name: 'Гаджеты',
    color: '#4cc9f0',
    items: [
      { level: 1, icon: '📼', name: 'Видеокассета', desc: 'Старая магнитная лента с записью памятных моментов.' },
      { level: 2, icon: '💽', name: 'Компакт-диск', desc: 'Цифровой носитель информации начала эры технологий.' },
      { level: 3, icon: '🎧', name: 'Проводные наушники', desc: 'Классический аксессуар для погружения в мир музыки.' },
      { level: 4, icon: '⌚️', name: 'Смарт-часы', desc: 'Первый шаг в объединении стиля и умных технологий.' },
      { level: 5, icon: '📱', name: 'Смартфон', desc: 'Карманный центр управления всей вашей цифровой жизнью.' },
      { level: 6, icon: '🖥', name: 'Персональный компьютер', desc: 'Мощная рабочая станция для создания контента.' },
      { level: 7, icon: '💻', name: 'Ультрабук', desc: 'Вершина мобильных технологий и производительности.' }
    ]
  },
  fastfood: {
    name: 'Фастфуд',
    color: '#ff8a5c',
    items : [
      { level: 1, icon: '🥓', name: 'Хрустящий бекон', desc: 'Тонко нарезанный и хорошо прожаренные ломтики бекона.' },
      { level: 2, icon: '🍟', name: 'Картофель фри', desc: 'Хрустящие золотистые палочки.' },
      { level: 3, icon: '🌭', name: 'Хот-дог', desc: 'Сочная сосиска между двух булок.' },
      { level: 4, icon: '🍔', name: 'Двойной чизбургер', desc: 'Котлета с сыром в свежей булке.' },
      { level: 5, icon: '🫔', name: 'Сытный ролл', desc: 'Большая порция с овощами и мясом.' },
      { level: 6, icon: '🍗', name: 'Куриный сет', desc: 'Ведерко горячих крылышек.' },
      { level: 7, icon: '🍱', name: 'Комбо-обед', desc: 'Полный набор для идеального перекуса.' }
    ]
  },
  alcohol: {
    name: 'Алкоголь',
    color: '#ff5cf1',
    items : [
      { level: 1, icon: '🍺', name: 'Светлое пиво', desc: 'Классическое холодное пиво в кружке.' },
      { level: 2, icon: '🍻', name: 'Две кружки', desc: 'Пара бокалов для приятной компании.' },
      { level: 3, icon: '🍷', name: 'Бокал вина', desc: 'Изысканное красное вино.' },
      { level: 4, icon: '🥂', name: 'Игристое вино', desc: 'Бокалы с шампанским для тоста.' },
      { level: 5, icon: '🍾', name: 'Бутылка шампанского', desc: 'Праздничное игристое в охлажденной бутылке.' },
      { level: 6, icon: '🥃', name: 'Виски', desc: 'Крепкий благородный напиток в стакане.' },
      { level: 7, icon: '🍹', name: 'Авторский коктейль', desc: 'Сложный напиток с украшениями и зонтиком.' }
    ]
  },
  atelier: {
    name: 'Ателье',
    color: '#00ffd0',
    items: [
      { level: 1, icon: '🪡', name: 'Игла', desc: 'Острый инструмент для начала большой работы.' },
      { level: 2, icon: '🧵', name: 'Катушка ниток', desc: 'Прочная нить для соединения деталей.' },
      { level: 3, icon: '🧤', name: 'Вязаные перчатки', desc: 'Первый результат рукоделия для защиты от холода.' },
      { level: 4, icon: '🧣', name: 'Теплый шарф', desc: 'Мягкий аксессуар, связанный с любовью.' },
      { level: 5, icon: '👚', name: 'Блузка', desc: 'Элегантный предмет повседневного гардероба.' },
      { level: 6, icon: '👗', name: 'Вечернее платье', desc: 'Изысканный наряд для особого случая.' },
      { level: 7, icon: '🧥', name: 'Дизайнерское пальто', desc: 'Вершина портновского искусства и стиля.' }
    ]
  }
};

const GENERATOR_BOXES = {
  stationery: { icon: '✏️', name: 'Склад канцелярии', desc: 'Хранилище писчих принадлежностей.' },
  flowers: { icon: '🌱', name: 'Цветочная теплица', desc: 'Оазис для выращивания декоративной флоры.' },
  sweets: { icon: '🍬', name: 'Конфетный автомат', desc: 'Аппарат, выдающий кондитерские изделия.' },
  accessories: { icon: '✨', name: 'Сокровищница', desc: 'Кованый ларь с ценными украшениями.' },
  gadgets: { icon: '⚙️', name: 'Завод электроники', desc: 'Конвейер высокотехнологичных микросхем.' },
  fastfood: { icon: '🍔', name: 'Фастфуд-кафе', desc: 'Кухонный конвейер для быстрой и сытной еды.' },
  alcohol: { icon: '🍸', name: 'Барная стойка', desc: 'Место, где профессиональный бармен смешивает изысканные напитки.' },
  atelier: { icon: '🪡', name: 'Ателье', desc: 'Мастерская, где из ниток и ткани рождаются стильные наряды.' }
};

const CHARACTERS = [
  { icon: '🐱', name: 'Кот Том', desc: 'Местный пушистый сибарит. Обожает сладости и мягкие рюкзаки, в которых можно сладко вздремнуть.' },
  { icon: '🦊', name: 'Лиса Алиса', desc: 'Хитрая авантюристка. Собирает редкие аксессуары и гаджеты для своих тайных ночных вылазок.' },
  { icon: '🐻', name: 'Мишка По', desc: 'Добродушный любитель природы. Всегда рад свежим цветам и вкусным тортам на праздники.' },
  { icon: '🐸', name: 'Жабка Пепе', desc: 'Философ и ценитель мемов. Постоянно сидит в гаджетах и записывает свои умные мысли в блокноты.' },
  { icon: '🧙‍♂️', name: 'Маг Гендальф', desc: 'Древний волшебник. Ищет Энциклопедии магии и древние артефакты для защиты здешних земель.' },
  { icon: '🧝‍♀️', name: 'Эльфийка Лия', desc: 'Хранительница лесного спокойствия. Приходит за красивыми букетами цветов и редкими амулетами.' },
  { icon: '🧛‍♂️', name: 'Граф Влад', desc: 'Загадочный аристократ из замка неподалеку. Предпочитает алые розы и роскошные золотые короны.' },
  { icon: '🦝', name: 'Енот Рокки', desc: 'Завзятый изобретатель и мастер на все руки. Постоянно ищет провода, детали и канцелярию для новых чертежей.' },
  { icon: '🐼', name: 'Панда Мэй', desc: 'Милая любительница уюта и чаепитий. Всегда рада поднять настроение вкусной конфетой или сочным бургером.' },
  { icon: '🦉', name: 'Сова Оливия', desc: 'Мудрая исследовательница местной академии. Собирает старинные книги и обожает перекусить пиццей во время ночных чтений.' }
];

const STORY_CHARACTERS = [
  { icon: '🕵️‍♂️', name: 'Незнакомец', desc: 'Секретный агент под прикрытием. Его крупные запросы окутаны тайной государственной важности.' },
  { icon: '🦸‍♂️', name: 'Супергерой', desc: 'Защитник города. Ему экстренно требуются редкие ресурсы для борьбы со вселенским злом.' },
  { icon: '👽', name: 'Пришелец', desc: 'Гость с далеких звезд. Изучает земную культуру через самые неожиданные и огромные наборы предметов.' },
  { icon: '🤖', name: 'Киборг X-100', desc: 'Робот из будущего. Его алгоритмы требуют четких поставок высокоуровневых вещей.' }
];

const CONFIG = {
  GRID_COLS: 5,
  GRID_ROWS: 7,
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 10000,
  ENERGY_REGEN_AMOUNT: 1,
  ENERGY_PER_ORDER_COMPLETION: 3,
  ENERGY_PER_ORDER_CANCEL: 50,
  ITEM_DELETE_COST: 15,
  TRASH_CLEAR_COST: 25,
  TRASH_AT_START: 23,
  MAX_ITEM_LEVEL: 7,
  MAX_ORDERS: 4,
  MAX_GENERATOR_LEVEL: 5,
  SAVE_KEY: 'merge_game_save',
  LAST_LOGIN_KEY: 'last_login_time',
  OFFLINE_ENERGY_REGEN_RATE: 10000, // 1 energy per 10s
  ORDER_GENERATION_STORY_CHANCE: 0.15,
  ITEM_SCORE_MULTIPLIER: 50,
  ANIMATION_DURATION_FLY: 400,
  ANIMATION_DURATION_FADE: 400,
  ANIMATION_DURATION_PARTICLE: 500,
  DRAG_THRESHOLD: 5,
  ROMAN_NUMERALS: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' },
  TRASH_ICONS: ['🪨', '📦', '🪵', '🏺'],
  DOUBLE_CLICK_DELAY: 300, // ms
};

const GEN_ENERGY_CONFIG = {
  1: { max: 25, cooldown: 30000 },
  2: { max: 25, cooldown: 25000 },
  3: { max: 25, cooldown: 20000 },
  4: { max: 30, cooldown: 20000 },
  5: { max: 30, cooldown: 15000 }
};

const UNLOCK_THRESHOLDS = [
  { score: 500, unlocked: false, level: 2, prevLimit: 0, orderLevels: { min: 1, max: 2 } },
  { score: 1500, unlocked: false, level: 3, prevLimit: 500, orderLevels: { min: 1, max: 3 } },
  { score: 3000, unlocked: false, level: 4, prevLimit: 1500, orderLevels: { min: 1, max: 4 } },
  { score: 6000, unlocked: false, level: 5, prevLimit: 3000, orderLevels: { min: 2, max: 5 } },
  { score: 12000, unlocked: false, level: 6, prevLimit: 6000, orderLevels: { min: 2, max: 6 } },
  { score: 24000, unlocked: false, level: 7, prevLimit: 12000, orderLevels: { min: 3, max: 7 } }
];

// --- State ---

let gridData = [];
let score = 0;
let energy = 100;
let orders = [];
let orderIdCounter = 1;
let lockedCells = [];
let activeCategories = [];
let lockedCategories = [];

let dragElement = null;
let dragStartIndex = null;
let isMoved = false;
let isDragging = false;
let startX = 0;
let startY = 0;

let lastClick = {
  index: null,
  time: 0,
};

// --- DOM Elements ---
const DOMElements = {
  grid: document.getElementById('grid'),
  toastContainer: document.getElementById('toast-container'),
  infoModal: {
    overlay: document.getElementById('info-modal'),
    closeBtn: document.querySelector('#info-modal .modal-close'),
    icon: document.getElementById('m-icon'),
    title: document.getElementById('m-title'),
    subtitle: document.getElementById('m-subtitle'),
    desc: document.getElementById('m-desc'),
    actionBtn: document.getElementById('m-action-btn'),
    dangerGroup: document.getElementById('m-danger-group'),
    confirmBtn: document.getElementById('m-confirm-btn'),
    cancelBtn: document.querySelector('#m-danger-group .modal-btn-cancel'),
    infoBtn: document.getElementById('m-info-btn'),
  },
  level: {
    bar: document.getElementById('level-bar'),
    text: document.getElementById('player-level'),
    score: document.getElementById('score-text'),
    container: document.querySelector('.level-container'),
  },
  energy: {
    bar: document.getElementById('energy-bar'),
    value: document.getElementById('energy-val'),
    container: document.querySelector('.energy-container'),
  },
  resetBtn: document.querySelector('.reset-btn'),
  ordersList: document.getElementById('orders-list'),
};

function initGame() {
  createGrid();
  if (localStorage.getItem(CONFIG.SAVE_KEY)) {
    loadGame();
  } else {
    startNewGame();
  }
  restoreGeneratorsEnergy();
  updateUI();
  addListeners();

  setInterval(() => {
    regenerateEnergy();
    restoreGeneratorsEnergy();
    updateUI();
  }, CONFIG.ENERGY_REGEN_INTERVAL);
}

function addListeners() {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('blur', cleanDragState);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(CONFIG.LAST_LOGIN_KEY, Date.now());
    saveGame();
  });

  DOMElements.energy.container.addEventListener('click', () => {
    showModal({
      icon: '⚡️',
      title: 'Энергия',
      subtitle: 'Вечный движитель',
      desc: 'За каждое использование генератора тратится 1 ед. энергии. Каждые 10 сек. восстанавливается 1 ед. энергии. За каждый готовый заказ восстанавливается 3 ед. энергии.'
    })
  })

  DOMElements.level.container.addEventListener('click', () => {
    showModal({
      icon: '🚥',
      title: 'Уровень',
      subtitle: 'Главный показатель эффективности',
      desc: 'За сдачу заказов выдаются очки. Чем сложнее заказ, тем больше очков получается. При получении определенного количества очков, уровень повышается.'
    })
  })

  DOMElements.infoModal.closeBtn.addEventListener('click', closeModal);
  DOMElements.infoModal.cancelBtn.addEventListener('click', closeModal);
  DOMElements.resetBtn.addEventListener('click', confirmReset);

  // Event delegation for dynamic order cards
  DOMElements.ordersList.addEventListener('click', (e) => {
    const target = e.target;
    const card = target.closest('.order-card');
    if (!card) return;

    const orderId = parseInt(card.dataset.orderId);
    if (isNaN(orderId)) return;

    if (target.closest('.cancel-btn')) confirmCancelOrder(orderId);
    else if (target.closest('.complete-btn')) completeOrder(orderId);
    else if (target.closest('.order-header-info')) showCharacterById(orderId);
  });
}

function startNewGame() {
  gridData = Array(CONFIG.GRID_COLS * CONFIG.GRID_ROWS).fill(null);
  score = 0;
  energy = CONFIG.MAX_ENERGY;
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = false);

  let allCategories = Object.keys(ITEM_CATEGORIES);
  shuffleArray(allCategories);
  activeCategories = allCategories.slice(0, 2);
  lockedCategories = allCategories.slice(2);

  let availableIndices = Array.from({length: CONFIG.GRID_COLS * CONFIG.GRID_ROWS}, (_, i) => i);
  for (let i = 0; i < CONFIG.TRASH_AT_START; i++) {
    if (availableIndices.length > 5) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      const randomTrashIcon = CONFIG.TRASH_ICONS[Math.floor(Math.random() * CONFIG.TRASH_ICONS.length)];
      gridData[cellIndex] = { isTrash: true, icon: randomTrashIcon };
    }
  }

  activeCategories.forEach(cat => {
    const randIdx = Math.floor(Math.random() * availableIndices.length);
    const cellIndex = availableIndices.splice(randIdx, 1)[0];
    gridData[cellIndex] = {
      isGenerator: true,
      category: cat,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
  });

  for(let i = 0; i < 2; i++) {
    let emptyCells = getEmptyGridCells();
    if(emptyCells.length > 0) {
      let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      gridData[randomCell] = { category: activeCategories[i % activeCategories.length], level: 1 };
    }
  }

  orders = [];
  for (let i = 0; i < CONFIG.MAX_ORDERS; i++) {
    generateOrder();
  }

  saveGame();
}

function saveGame() {
  const saveData = {
    gridData: gridData,
    score: score,
    energy: energy,
    orders: orders,
    orderIdCounter: orderIdCounter,
    activeCategories: activeCategories,
    lockedCategories: lockedCategories,
    thresholds: UNLOCK_THRESHOLDS.map(t => ({ score: t.score, unlocked: t.unlocked, level: t.level }))
  };
  localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(saveData));
}

function loadGame() {
  try {
    const loaded = JSON.parse(localStorage.getItem(CONFIG.SAVE_KEY));
    if (!loaded) {
      startNewGame();
      return;
    }

    // Restore offline energy
    const lastTime = parseInt(localStorage.getItem(CONFIG.LAST_LOGIN_KEY)) || Date.now();
    const timePassed = Date.now() - lastTime;
    const energyToRestore = Math.floor(timePassed / CONFIG.OFFLINE_ENERGY_REGEN_RATE);

    gridData = loaded.gridData;
    score = loaded.score;
    energy = loaded.energy;
    orders = loaded.orders;
    orderIdCounter = loaded.orderIdCounter;
    activeCategories = loaded.activeCategories;
    lockedCategories = loaded.lockedCategories;

    if (energyToRestore > 0) {
      energy = Math.min(CONFIG.MAX_ENERGY, energy + energyToRestore);
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

function restoreGeneratorsEnergy() {
  let changed = false;
  const now = Date.now();
  gridData.forEach(item => {
    if (item && item.isGenerator) {
      const lvl = item.genLevel || 1;
      const config = GEN_ENERGY_CONFIG[lvl];
      if (item.genEnergy === undefined) item.genEnergy = config.max;
      if (!item.lastRegenTime) item.lastRegenTime = now;

      if (item.genEnergy < config.max) {
        const timePassed = now - item.lastRegenTime;
        const earnedCharges = Math.floor(timePassed / config.cooldown);
        if (earnedCharges > 0) {
          item.genEnergy = Math.min(config.max, item.genEnergy + earnedCharges);
          item.lastRegenTime = item.lastRegenTime + (earnedCharges * config.cooldown);
          changed = true;
        }
      } else {
        item.lastRegenTime = now;
      }
    }
  });
  if (changed) saveGame();
}

function createGrid() {
  DOMElements.grid.innerHTML = '';
  for (let i = 0; i < CONFIG.GRID_COLS * CONFIG.GRID_ROWS; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('mousedown', (e) => startDrag(e, i));
    cell.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDrag(e, i);
    }, { passive: false });
    DOMElements.grid.appendChild(cell);
  }
}

function getAvailableEmptyCells() {
  return gridData.map((val, idx) => (val === null && !lockedCells.includes(idx)) ? idx : null).filter(val => val !== null);
}

function getEmptyGridCells() {
  return gridData.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
}

function getCurrentPlayerLevel() {
  let currentLvl = 1;
  UNLOCK_THRESHOLDS.forEach(t => {
    if (score >= t.score) currentLvl = t.level;
  });
  return currentLvl;
}

function updateLevelProgressBar() {
  const currentLvl = getCurrentPlayerLevel();
  const barFill = DOMElements.level.bar;

  if (currentLvl >= CONFIG.MAX_ITEM_LEVEL) {
    barFill.style.width = '100%';
    DOMElements.level.score.innerText = score;
    return;
  }

  const currentThreshold = UNLOCK_THRESHOLDS.find(t => t.level === currentLvl + 1);
  if (currentThreshold) {
    const min = currentThreshold.prevLimit;
    const max = currentThreshold.score;
    const percentage = Math.max(0, ((score - min) / (max - min)) * 100);
    barFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  }
  DOMElements.level.score.innerText = score;
}

function regenerateEnergy() {
  if (energy < CONFIG.MAX_ENERGY) {
    energy += CONFIG.ENERGY_REGEN_AMOUNT;
    saveGame();
  }
}

function updateUI() {
  checkOrdersAvailability();
  renderGrid();
  renderOrders();
  DOMElements.energy.value.innerText = `${energy}/${CONFIG.MAX_ENERGY}`;
  DOMElements.level.text.innerText = getCurrentPlayerLevel();
  updateLevelProgressBar();

  const barFill = DOMElements.energy.bar;
  const percentage = (energy / CONFIG.MAX_ENERGY) * 100;
  barFill.style.width = `${percentage}%`;

  if (percentage <= 25) barFill.classList.add('low');
  else barFill.classList.remove('low');
}

function createParticleEffectHTML() {
  let html = '<div class="particle-container">';
  const directions = [
    {x: '30px', y: '0px'}, {x: '-25px', y: '15px'}, {x: '20px', y: '-25px'},
    {x: '-15px', y: '-30px'}, {x: '10px', y: '28px'}, {x: '-28px', y: '-5px'}
  ];
  for (let i = 1; i <= 6; i++) {
    const dir = directions[i-1];
    html += `<div class="particle p${i}" style="--x: ${dir.x}; --y: ${dir.y};"></div>`;
  }
  return html + '</div>';
}

function renderGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, idx) => {
    const item = gridData[idx];
    cell.innerHTML = '';
    cell.className = 'cell';

    if (item) {
      // Добавляем класс для ячеек с бустерами
      if (item.isUpgradePart || item.isMagicTool) {
        cell.classList.add('booster-cell');
      }

      if (item.isTrash) {
        cell.classList.add('trash-blocked');
        const trashSpan = document.createElement('span');
        trashSpan.classList.add('trash-icon');
        trashSpan.innerHTML = item.icon || '🪨';
        cell.appendChild(trashSpan);
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.classList.add('item-wrapper');

      if (item.isGenerator) {
        const lvl = item.genLevel || 1;
        if (item.genEnergy === undefined) item.genEnergy = GEN_ENERGY_CONFIG[lvl].max;
        cell.classList.add('generator-slot');

        const container = document.createElement('div');
        container.classList.add('generator-icon-container');

        const bgBox = document.createElement('span');
        bgBox.classList.add('generator-box-bg');
        bgBox.innerText = '📦';

        const fgItem = document.createElement('span');
        fgItem.classList.add('generator-item-fg');
        fgItem.innerText = GENERATOR_BOXES[item.category].icon;

        container.appendChild(bgBox);
        container.appendChild(fgItem);
        wrapper.appendChild(container);

        const energyBadge = document.createElement('span');
        energyBadge.classList.add('gen-energy-badge');
        energyBadge.innerText = `⚡${item.genEnergy}`;
        cell.appendChild(energyBadge);


        if (item.genEnergy <= 5 && item.genEnergy > 0) {
          cell.classList.add('generator-slot-low-energy');
          energyBadge.classList.add('gen-energy-badge-no-energy')
        } else if (item.genEnergy === 0) {
          cell.classList.add('generator-slot-no-energy');
          energyBadge.classList.add('gen-energy-badge-no-energy')
        } else {
          cell.classList.remove('generator-slot-no-energy');
          energyBadge.classList.remove('gen-energy-badge-no-energy')
          cell.classList.remove('generator-slot-low-energy');
        }

        const levelBadge = document.createElement('span');
        levelBadge.classList.add('gen-level-badge');
        levelBadge.innerText = CONFIG.ROMAN_NUMERALS[lvl];
        cell.appendChild(levelBadge);
      } else if (item.isUpgradePart) {
        cell.innerHTML += createParticleEffectHTML();
        wrapper.innerHTML = '🔩';
      } else if (item.isMagicTool) {
        cell.innerHTML += createParticleEffectHTML();
        wrapper.innerHTML = '⚒️';
      } else {
        wrapper.innerHTML = ITEM_CATEGORIES[item.category].items[item.level - 1].icon;
        const levelBadge = document.createElement('span');
        levelBadge.classList.add('item-level');
        levelBadge.innerText = item.level;

        // Добавляем эффект частиц для предметов максимального уровня
        if (item.level === CONFIG.MAX_ITEM_LEVEL) {
          levelBadge.style.background = 'linear-gradient(45deg, #ffb703, #ff8500)';
          levelBadge.style.color = '#000';
          cell.innerHTML += createParticleEffectHTML();
        }
        cell.appendChild(levelBadge);
      }
      cell.appendChild(wrapper);
    }
  });
}

function startDrag(e, index) {
  if (lockedCells.includes(index) || !gridData[index] || isDragging) return;

  // Исправление: удаляем "зависшие" призрачные элементы перед началом
  const ghost = document.querySelector('.item-wrapper.dragging');
  if (ghost) ghost.remove();

  isDragging = true; // Блокировка
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  dragStartIndex = index;
  isMoved = false;
  startX = clientX;
  startY = clientY;

  const cells = document.querySelectorAll('.cell');
  const targetCell = cells[index];
  const originalWrapper = targetCell.querySelector('.item-wrapper');
  if (!originalWrapper) {
    isDragging = false;
    return;
  }

  dragElement = originalWrapper.cloneNode(true);
  dragElement.classList.add('dragging');
  const rect = originalWrapper.getBoundingClientRect();
  dragElement.style.left = `${rect.left}px`;
  dragElement.style.top = `${rect.top}px`;
  document.body.appendChild(dragElement);

  originalWrapper.style.opacity = '0.3';
}

function handleMouseMove(e) {
  if (dragStartIndex === null || !dragElement) return;
  const clientX = e.clientX;
  const clientY = e.clientY;

  if (Math.abs(clientX - startX) > CONFIG.DRAG_THRESHOLD || Math.abs(clientY - startY) > CONFIG.DRAG_THRESHOLD) {
    isMoved = true;
  }

  dragElement.style.left = `${clientX - 27}px`;
  dragElement.style.top = `${clientY - 27}px`;
}

function handleTouchMove(e) {
  if (dragStartIndex === null || !dragElement) return;
  const clientX = e.touches[0].clientX;
  const clientY = e.touches[0].clientY;

  if (Math.abs(clientX - startX) > CONFIG.DRAG_THRESHOLD || Math.abs(clientY - startY) > CONFIG.DRAG_THRESHOLD) {
    isMoved = true;
  }

  dragElement.style.left = `${clientX - 27}px`;
  dragElement.style.top = `${clientY - 27}px`;
}

function handleMouseUp(e) {
  if (dragStartIndex === null) return;
  endDrag(e.clientX, e.clientY);
}

function handleTouchEnd(e) {
  if (dragStartIndex === null) return;
  const changedTouch = e.changedTouches[0];
  endDrag(changedTouch.clientX, changedTouch.clientY);
}

function endDrag(clientX, clientY) {
  if (dragElement) dragElement.remove();

  if (!isMoved) {
    const item = gridData[dragStartIndex];
    if (item) {
      if (item.isTrash) { // Click on trash
        confirmClearTrash(dragStartIndex);
      } else if (item.isGenerator) { // Click on generator
        const now = Date.now();
        if (lastClick.index === dragStartIndex && (now - lastClick.time) < CONFIG.DOUBLE_CLICK_DELAY) {
          // Double click: spawn item
          triggerGenerator(item, dragStartIndex);
          // Reset click tracker to prevent triple click action
          lastClick = { index: null, time: 0 };
        } else {
          // Single click: show info
          showItemInfoModal(item);
          // Record this click for double-click detection
          lastClick = { index: dragStartIndex, time: now };
        }
      } else { // Click on regular item or upgrade part
        showItemInfoModal(item, dragStartIndex);
      }
    }
    cleanDragState();
    return;
  }

  const elementUnder = document.elementFromPoint(clientX, clientY);
  if (!elementUnder) {
    cleanDragState();
    return;
  }

  const targetCell = elementUnder.closest('.cell');
  if (!targetCell) {
    cleanDragState();
    return;
  }

  const dragTargetIndex = parseInt(targetCell.dataset.index);
  if (dragStartIndex === dragTargetIndex || lockedCells.includes(dragTargetIndex) || (gridData[dragTargetIndex] && gridData[dragTargetIndex].isTrash)) {
    cleanDragState();
    return;
  }

  executeMergeOrSwap(dragStartIndex, dragTargetIndex);
  cleanDragState();
}

function cleanDragState() {
  isDragging = false;
  if (dragElement) {
    dragElement.remove();
    dragElement = null;
  }
  dragStartIndex = null;
  isMoved = false;
  renderGrid(); // Принудительный рендер восстановит все opacity
}

function executeMergeOrSwap(fromIdx, toIdx) {
  const source = gridData[fromIdx];
  const target = gridData[toIdx];

  // Определяем, какой из предметов - деталь, а какой - генератор
  const upgradePart = source.isUpgradePart ? source : (target && target.isUpgradePart ? target : null);
  const generator = source.isGenerator ? source : (target && target.isGenerator ? target : null);
  const partIdx = source.isUpgradePart ? fromIdx : (target && target.isUpgradePart ? toIdx : -1);
  const genIdx = source.isGenerator ? fromIdx : (target && target.isGenerator ? toIdx : -1);

  // Определяем, какой из предметов - магический инструмент, а какой - обычный предмет
  const magicTool = source.isMagicTool ? source : (target && target.isMagicTool ? target : null);
  const regularItem = (source && !source.isGenerator && !source.isTrash && !source.isUpgradePart && !source.isMagicTool) ? source :
    (target && !target.isGenerator && !target.isTrash && !target.isUpgradePart && !target.isMagicTool) ? target : null;
  const toolIdx = source.isMagicTool ? fromIdx : (target && target.isMagicTool ? toIdx : -1);
  const itemIdx = (source && !source.isGenerator && !source.isTrash && !source.isUpgradePart && !source.isMagicTool) ? fromIdx :
    (target && !target.isGenerator && !target.isTrash && !target.isUpgradePart && !target.isMagicTool) ? toIdx : -1;

  // 1. Логика улучшения генератора деталью
  if (upgradePart && generator && partIdx !== -1 && genIdx !== -1) {
    if (generator.genLevel < CONFIG.MAX_GENERATOR_LEVEL) {
      const nextLvl = generator.genLevel + 1;
      gridData[partIdx] = null; // Удаляем деталь
      gridData[genIdx] = { // Улучшаем генератор
        ...generator,
        genLevel: nextLvl,
        genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
        lastRegenTime: Date.now()
      };
      triggerMergeEffects(genIdx, generator.category);
      showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    }
    // 2. Логика улучшения предмета магическим инструментом
  } else if (magicTool && regularItem && toolIdx !== -1 && itemIdx !== -1) {
    if (regularItem.level < CONFIG.MAX_ITEM_LEVEL) {
      const nextLvl = regularItem.level + 1;
      gridData[toolIdx] = null; // Удаляем инструмент
      gridData[itemIdx] = { ...regularItem, level: nextLvl }; // Улучшаем предмет
      triggerMergeEffects(itemIdx, regularItem.category);
      showToast(`✨ Предмет улучшен до уровня ${nextLvl}!`, "success");
    }
    // 2. Логика слияния обычных предметов
  } else if (target && !source.isGenerator && !target.isGenerator && !source.isUpgradePart && !target.isUpgradePart && source.category === target.category && source.level === target.level) {
    if (source.level < CONFIG.MAX_ITEM_LEVEL) {
      gridData[fromIdx] = null;
      gridData[toIdx] = { category: source.category, level: source.level + 1 };
      triggerMergeEffects(toIdx, source.category);
    }
    // 3. Логика слияния генераторов
  } else if (target && source.isGenerator && target.isGenerator && source.category === target.category && source.genLevel === target.genLevel) {
    if (source.genLevel < CONFIG.MAX_GENERATOR_LEVEL) {
      const nextLvl = source.genLevel + 1;
      gridData[fromIdx] = null;
      gridData[toIdx] = {
        isGenerator: true,
        category: source.category,
        genLevel: nextLvl,
        genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
        lastRegenTime: Date.now()
      };
      triggerMergeEffects(toIdx, source.category);
      showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    }
    // 4. Стандартная логика перемещения
  } else {
    [gridData[fromIdx], gridData[toIdx]] = [target, source];
  }

  saveGame();
  updateUI();
}

function animateCellPop(index) {
  const cells = document.querySelectorAll('.cell');
  const wrapper = cells[index]?.querySelector('.item-wrapper');
  if (wrapper) {
    wrapper.classList.remove('merge-animate');
    void wrapper.offsetWidth; // Force reflow
    wrapper.classList.add('merge-animate');
  }
}

function triggerMergeEffects(idx, category) {
  // Оборачиваем в setTimeout, чтобы дать DOM возможность обновиться перед анимацией
  setTimeout(() => {
    animateCellPop(idx);

    const targetCell = DOMElements.grid.children[idx];
    if (targetCell) {
      const themeColor = ITEM_CATEGORIES[category] ? ITEM_CATEGORIES[category].color : '#ff477e';
      const flash = document.createElement('div');
      flash.classList.add('merge-flash');
      flash.style.setProperty('--flash-color', themeColor);
      targetCell.appendChild(flash);
      setTimeout(() => flash.remove(), CONFIG.ANIMATION_DURATION_FADE);

      const rect = targetCell.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('merge-particle');
        particle.style.backgroundColor = themeColor;
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;

        const angle = Math.random() * Math.PI * 2;
        const speed = 20 + Math.random() * 40;
        const pX = Math.cos(angle) * speed;
        const pY = Math.sin(angle) * speed;

        particle.style.setProperty('--x', `${pX}px`);
        particle.style.setProperty('--y', `${pY}px`);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), CONFIG.ANIMATION_DURATION_PARTICLE);
      }
    }
  }, 0);
}

function confirmClearTrash(index) {
  showModal({
    icon: gridData[index].icon || '🪨',
    title: 'Завал на участке',
    subtitle: 'Заблокировано',
    desc: 'Эта клетка покрыта паутиной и завалена старым мусором. Потратьте энергию, чтобы очистить поле и найти полезный предмет!',
    actionButton: {
      text: `Расчистить завал (⚡ ${CONFIG.TRASH_CLEAR_COST})`,
      onClick: () => clearTrash(index),
    },
    isBlocking: true,
  });
}

function clearTrash(index) {
  if (energy < CONFIG.TRASH_CLEAR_COST) {
    showToast(`⚡ Недостаточно энергии для расчистки (нужно ${CONFIG.TRASH_CLEAR_COST})!`, "error");
    closeModal();
    return;
  }
  energy -= CONFIG.TRASH_CLEAR_COST;
  const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
  gridData[index] = { category: randomCat, level: 1 };
  closeModal();
  saveGame();
  updateUI();
  showToast("Клетка успешно очищена!", "success");
  setTimeout(() => animateCellPop(index), 50);
}

function showItemInfoModal(item, index = -1) {
  let modalOptions = {};

  if (item.isGenerator) {
    const genInfo = GENERATOR_BOXES[item.category];
    const lvl = item.genLevel || 1;
    const config = GEN_ENERGY_CONFIG[lvl];
    if (item.genEnergy === undefined) item.genEnergy = config.max;

    let desc = `${genInfo.desc} `;
    const cdSec = config.cooldown / 1000;

    if (lvl === 1) {
      desc += `Базовый уровень. Создаёт предметы 1-го уровня. Восстанавливает 1 заряд каждые ${cdSec} сек.`;
    } else if (lvl === 2) {
      desc += `Продвинутый ранг. Шансы получения: 80% (ур. 1), 20% (ур. 2). Заряд каждые ${cdSec} сек.`;
    } else if (lvl === 3) {
      desc += `Профессиональный ранг. Шансы получения: 65% (ур. 1), 25% (ур. 2), 10% (ур. 3). Заряд каждые ${cdSec} сек.`;
    } else if (lvl === 4) {
      desc += `Элитный ранг. Шансы получения: 50% (ур. 1), 30% (ур. 2), 15% (ур. 3), 5% (ур. 4). Заряд каждые ${cdSec} сек.`;
    } else if (lvl === 5) {
      desc += `Легендарный ранг! Шансы: 30% (ур. 1), 30% (ур. 2), 25% (ур. 3), 10% (ур. 4), 5% (ур. 5). Самая быстрая перезарядка: ${cdSec} сек.`;
    }

    modalOptions = {
      icon: `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`,
      title: `${genInfo.name} [${CONFIG.ROMAN_NUMERALS[lvl]}]`,
      subtitle: `Генератор • Уровень ${CONFIG.ROMAN_NUMERALS[lvl]}`,
      desc: desc,
      infoButton: { onClick: () => showCategoryProgressionModal(item.category) }
    };
  } else if (item.isUpgradePart) {
    modalOptions = {
      icon: '🔩',
      title: 'Новая деталь',
      subtitle: 'Универсальный улучшитель',
      desc: 'Редкая деталь, полученная за выполнение особого заказа. Перетащите ее на любой генератор, чтобы повысить его уровень.',
      isBlocking: false
    };
  } else if (item.isMagicTool) {
    modalOptions = {
      icon: '⚒️',
      title: 'Магические инструменты',
      subtitle: 'Универсальный улучшитель',
      desc: 'Волшебные инструменты, способные улучшить любой предмет на один уровень. Перетащите их на предмет, который хотите улучшить.',
      isBlocking: false
    };
  } else {
    const info = ITEM_CATEGORIES[item.category].items[item.level - 1];
    modalOptions = {
      icon: info.icon,
      title: info.name,
      subtitle: `${ITEM_CATEGORIES[item.category].name} • Уровень ${item.level}`,
      desc: info.desc,
      dangerButtons: {
        confirmText: `Удалить (-${CONFIG.ITEM_DELETE_COST}⚡)`,
        onConfirm: () => deleteItem(index)
      },
      isBlocking: true
    };
  }

  showModal(modalOptions);
}

function deleteItem(index) {
  if (index === -1 || !gridData[index] || gridData[index].isGenerator || gridData[index].isTrash) return;

  if (energy < CONFIG.ITEM_DELETE_COST) {
    showToast(`⚡ Недостаточно энергии для удаления (нужно ${CONFIG.ITEM_DELETE_COST})!`, "error");
    closeModal();
    return;
  }

  energy -= CONFIG.ITEM_DELETE_COST;
  gridData[index] = null;
  closeModal();
  saveGame();
  updateUI();
  showToast("Предмет удален", "success");
}

function showCharacterModal(order) {
  showModal({
    icon: order.character.icon,
    title: order.character.name,
    subtitle: order.isStory ? "🔥 Важный гость (Сюжет)" : "Постоянный клиент",
    desc: order.character.desc || "Заглянул за покупками.",
  });
}

function showCategoryProgressionModal(categoryKey) {
  const category = ITEM_CATEGORIES[categoryKey];
  if (!category) return;

  let progressionHTML = '<div class="progression-container">';
  category.items.forEach((item, index) => {
    progressionHTML += `
      <div class="progression-item-square">
        <div class="progression-item-icon">${item.icon}</div>
        <div class="progression-item-level">${item.level}</div>
      </div>
    `;
    if (index < category.items.length - 1) {
      progressionHTML += '<div class="progression-arrow-h">→</div>';
    }
  });
  progressionHTML += '</div>';

  const genInfo = GENERATOR_BOXES[categoryKey];
  showModal({
    icon: `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`,
    title: `Цепочка: ${category.name}`,
    subtitle: 'Эволюция предметов',
    desc: progressionHTML
  });
}

/**
 * Shows a modal with the given options.
 * @param {object} options
 * @param {string} options.icon - HTML for the icon.
 * @param {string} options.title - The main title.
 * @param {string} options.subtitle - The subtitle.
 * @param {string} options.desc - The description text.
 * @param {object} [options.actionButton] - Optional action button.
 * @param {string} options.actionButton.text - Text for the button.
 * @param {function} options.actionButton.onClick - Click handler.
 * @param {object} [options.dangerButtons] - Optional confirmation buttons.
 * @param {string} options.dangerButtons.confirmText - Text for confirm button.
 * @param {function} options.dangerButtons.onConfirm - Confirm click handler.
 * @param {object} [options.infoButton] - Optional info button.
 * @param {boolean} [options.isBlocking=false] - If true, modal is blocking.
 */
function showModal(options) {
  const { icon, title, subtitle, desc, actionButton, dangerButtons, infoButton, isBlocking } = options;
  const modal = DOMElements.infoModal;

  modal.icon.innerHTML = icon;
  modal.title.innerText = title;
  modal.subtitle.innerText = subtitle;
  modal.desc.innerText = desc;

  // Если описание содержит HTML, используем innerHTML
  if (desc.startsWith('<div')) {
    modal.desc.innerHTML = desc;
  }

  modal.infoBtn.style.display = infoButton ? 'block' : 'none';
  if (infoButton) {
    modal.infoBtn.onclick = infoButton.onClick;
  }
  modal.actionBtn.style.display = actionButton ? 'block' : 'none';
  if (actionButton) {
    modal.actionBtn.innerText = actionButton.text;
    modal.actionBtn.onclick = actionButton.onClick;
  }

  modal.dangerGroup.style.display = dangerButtons ? 'flex' : 'none';
  if (dangerButtons) {
    modal.confirmBtn.innerText = dangerButtons.confirmText;
    modal.confirmBtn.onclick = dangerButtons.onConfirm;
  }

  modal.overlay.className = `modal-overlay active ${isBlocking ? 'blocking' : ''}`;
}

function closeModal() {
  DOMElements.infoModal.overlay.className = 'modal-overlay';
}

function triggerGenerator(generator, fromIndex) {
  restoreGeneratorsEnergy();
  const lvl = generator.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];
  if (generator.genEnergy === undefined) generator.genEnergy = config.max;

  if (generator.genEnergy <= 0) {
    showToast("📦 Генератор истощен! Подождите, пока накопятся заряды.", "error");
    return;
  }
  if (energy <= 0) {
    showToast("⚡ Упс! Недостаточно энергии игрока!", "error");
    return;
  }

  let emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) return;

  if (generator.genEnergy === config.max) {
    generator.lastRegenTime = Date.now();
  }
  generator.genEnergy--;
  energy--;

  let targetCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  lockedCells.push(targetCellIndex);

  let spawnLevel = 1;
  const rand = Math.random() * 100;
  if (lvl === 2) {
    if (rand < 20) spawnLevel = 2;
  } else if (lvl === 3) {
    if (rand < 10) spawnLevel = 3;
    else if (rand < 35) spawnLevel = 2;
  } else if (lvl === 4) {
    if (rand < 5) spawnLevel = 4;
    else if (rand < 20) spawnLevel = 3;
    else if (rand < 50) spawnLevel = 2;
  } else if (lvl === 5) {
    if (rand < 5) spawnLevel = 5;
    else if (rand < 15) spawnLevel = 4;
    else if (rand < 40) spawnLevel = 3;
    else if (rand < 70) spawnLevel = 2;
  }

  const cellElements = document.querySelectorAll('.cell');
  const fromCellElement = cellElements[fromIndex];
  const targetCellElement = cellElements[targetCellIndex];
  const itemInfo = ITEM_CATEGORIES[generator.category].items[spawnLevel - 1];

  moveItem3D(fromCellElement, targetCellElement, itemInfo.icon).then(() => {
    gridData[targetCellIndex] = { category: generator.category, level: spawnLevel };
    lockedCells = lockedCells.filter(idx => idx !== targetCellIndex);
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
  });
}

function moveItem3D(fromElem, toElem, icon) {
  return new Promise(resolve => {
    if (!fromElem || !toElem) {
      resolve();
      return;
    }

    const fromRect = fromElem.getBoundingClientRect();
    const toRect = toElem.getBoundingClientRect();

    const flyer = document.createElement('div');
    flyer.classList.add('flying-item');
    flyer.innerHTML = icon;

    const startX = fromRect.left + (fromRect.width - 40) / 2;
    const startY = fromRect.top + (fromRect.height - 40) / 2;
    const endX = toRect.left + (toRect.width - 40) / 2;
    const endY = toRect.top + (toRect.height - 40) / 2;

    flyer.style.left = `${startX}px`;
    flyer.style.top = `${startY}px`;
    document.body.appendChild(flyer);

    void flyer.offsetWidth;

    flyer.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(0.8)`;

    setTimeout(() => {
      flyer.remove();
      resolve();
    }, CONFIG.ANIMATION_DURATION_FLY);
  });
}

function confirmReset() {
  showModal({
    icon: '⚠️',
    title: 'Сбросить весь прогресс?',
    subtitle: 'Полное обнуление',
    desc: 'Вы потеряете все свои открытые предметы, генераторы, очки уровня и текущие заказы. Это действие нельзя отменить.',
    dangerButtons: {
      confirmText: 'Да, сбросить',
      onConfirm: () => {
        localStorage.removeItem(CONFIG.SAVE_KEY);
        closeModal();
        startNewGame();
        updateUI();
        showToast("Игра полностью перезапущена", "success");
      }
    },
    isBlocking: true,
  });
}

function checkProgressiveUnlocks() {
  UNLOCK_THRESHOLDS.forEach(threshold => {
    if (score >= threshold.score && !threshold.unlocked) {
      threshold.unlocked = true;
      if (lockedCategories.length > 0) {
        const newCat = lockedCategories.shift();
        activeCategories.push(newCat);

        let emptyCells = getEmptyGridCells();
        if (emptyCells.length > 0) {
          const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          gridData[targetCell] = {
            isGenerator: true,
            category: newCat,
            genLevel: 1,
            genEnergy: GEN_ENERGY_CONFIG[1].max,
            lastRegenTime: Date.now()
          };
          setTimeout(() => animateCellPop(targetCell), 50);
        }
        showToast(`🎉 Уровень ${threshold.level}! Новый генератор: ${GENERATOR_BOXES[newCat].name}!`, "success");
      } else {
        spawnUpgradePart();
        showToast(`🎉 Уровень ${threshold.level}! Бонус: получена Новая деталь 🔩!`, "success");
      }
    }
  });
}

function spawnBonusGenerator() {
  let emptyCells = getEmptyGridCells();
  if (emptyCells.length > 0) {
    const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const randomActiveCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    gridData[targetCell] = {
      isGenerator: true,
      category: randomActiveCat,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
    setTimeout(() => animateCellPop(targetCell), 50);
  }
}

function spawnUpgradePart() {
  let emptyCells = getEmptyGridCells();
  if (emptyCells.length > 0) {
    const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gridData[targetCell] = {
      isUpgradePart: true,
      icon: '🔩',
      name: 'Новая деталь'
    };
    setTimeout(() => animateCellPop(targetCell), 50);
  }
}

function spawnMagicTool() {
  let emptyCells = getEmptyGridCells();
  if (emptyCells.length > 0) {
    const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gridData[targetCell] = {
      isMagicTool: true,
      icon: '⚒️',
      name: 'Магические инструменты'
    };
    setTimeout(() => animateCellPop(targetCell), 50);
  }
}

function showToast(text, type = "success") {
  const toast = document.createElement('div');
  toast.classList.add('game-toast', type);
  toast.innerText = text;

  DOMElements.toastContainer.appendChild(toast);

  // Показываем уведомление
  setTimeout(() => {
    toast.classList.add('show');
  }, 10); // Небольшая задержка для срабатывания transition

  // Скрываем и удаляем уведомление через время
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300); // Удаляем после завершения анимации скрытия
  }, 2800);
}

function generateOrder() {
  const isStoryRoll = Math.random() < CONFIG.ORDER_GENERATION_STORY_CHANCE;
  const hasActiveStory = orders.some(o => o.isStory);

  if (isStoryRoll && !hasActiveStory) {
    generateStoryOrder(1);
    return;
  }

  const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  const itemsCount = Math.floor(Math.random() * 3) + 1;
  const requestedItems = [];

  // Determine item levels based on player's progress
  const playerLevel = getCurrentPlayerLevel();
  let orderLevelConfig = { min: 1, max: 2 }; // Default for level 1

  const threshold = UNLOCK_THRESHOLDS.find(t => t.level === playerLevel);
  if (threshold && threshold.orderLevels) {
    orderLevelConfig = threshold.orderLevels;
  } else if (playerLevel > UNLOCK_THRESHOLDS.length) { // Max level reached
    orderLevelConfig = { min: 4, max: CONFIG.MAX_ITEM_LEVEL };
  }

  const { min: minLevel, max: maxLevel } = orderLevelConfig;

  for (let i = 0; i < itemsCount; i++) {
    const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    requestedItems.push({ category: randomCat, level: randomLevel });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  orders.push({
    id: orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: false
  });
}

function generateStoryOrder(step, fixedChar = null) {
  const char = fixedChar || STORY_CHARACTERS[Math.floor(Math.random() * STORY_CHARACTERS.length)];
  const requestedItems = [];

  let targetLevel = Math.min(CONFIG.MAX_ITEM_LEVEL, step + 2);
  const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
  requestedItems.push({ category: randomCat, level: targetLevel });

  if (step >= 2) {
    const randomCat2 = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    requestedItems.push({ category: randomCat2, level: Math.max(1, targetLevel - 2) });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  orders.push({
    id: orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: true,
    storyStep: step
  });

  if (step === 1 && !fixedChar) {
    showToast(`🕵️‍♂️ Появился сюжетный персонаж с особым заказом!`, "story");
  }
}

function checkOrdersAvailability() {
  orders.forEach(order => {
    let tempGrid = [...gridData];
    let matchCount = 0;

    order.items.forEach(reqItem => {
      const foundIdx = tempGrid.findIndex((item, idx) =>
        item && !item.isGenerator && !item.isTrash && !item.isUpgradePart &&
        item.category === reqItem.category && item.level === reqItem.level &&
        !lockedCells.includes(idx)
      );
      if (foundIdx !== -1) {
        matchCount++;
        tempGrid[foundIdx] = null;
      }
    });
    order.canComplete = (matchCount === order.items.length);
  });

  // Автоматическое перемещение готовых к сдаче заказов влево
  orders.sort((a, b) => {
    if (a.canComplete && !b.canComplete) return -1;
    if (!a.canComplete && b.canComplete) return 1;
    return 0;
  });
}

function renderOrders() {
  const ordersList = DOMElements.ordersList;

  // Получаем список старых ID для сохранения структуры
  const currentCards = Array.from(ordersList.children);
  // eslint-disable-next-line no-unused-vars
  const currentIds = currentCards.map(c => c.id);

  // Создаем или обновляем карточки на основе отсортированного массива
  orders.forEach((order, index) => {
    const cardId = `order-card-${order.id}`;
    let card = document.getElementById(cardId);

    if (!card) {
      card = document.createElement('div');
      card.id = cardId;
      card.dataset.orderId = order.id;
      card.classList.add('order-card');
      if (order.isStory) card.classList.add('story-card');
      ordersList.appendChild(card);
    }

    // Перемещаем карточку в правильный индекс в DOM для CSS transition
    if (ordersList.children[index] !== card) {
      ordersList.insertBefore(card, ordersList.children[index]);
    }

    let itemsHTML = '<div class="order-items-list">';
    order.items.forEach(item => {
      const itemInfo = ITEM_CATEGORIES[item.category].items[item.level - 1];
      itemsHTML += `<div class="order-target" title="${itemInfo.name}"><span class="order-item-icon">${itemInfo.icon}</span></div>`;
    });
    itemsHTML += '</div>';

    card.innerHTML = `
                    <div class="order-header">
                        <div class="order-header-info" title="${order.character.name}">
                            <span class="character-avatar">${order.character.icon}</span>
                            <span style="font-weight:bold; overflow:hidden; text-overflow:ellipsis;">${order.character.name}</span>
                        </div>
                        ${!order.isStory ? `<button class="cancel-btn" title="Отменить заказ">&times;</button>` : `<span style="font-size:0.65rem; color:#ffb703; font-weight:bold;">⚡Сюжет ${order.storyStep}/3</span>`}
                    </div>
                    ${itemsHTML}
                    <button class="complete-btn ${order.canComplete ? 'visible' : ''}">Сдать заказ</button>
                `;
  });

  // Удаляем карточки, которых больше нет в логике игры
  const activeIds = orders.map(o => `order-card-${o.id}`);
  currentCards.forEach(c => {
    if (!activeIds.includes(c.id) && !c.classList.contains('fade-out')) {
      c.remove();
    }
  });
}

function showCharacterById(id) {
  const order = orders.find(o => o.id === id);
  if (order) showCharacterModal(order);
}

function confirmCancelOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order || order.isStory) return;

  showModal({
    icon: '❓',
    title: 'Отменить заказ?',
    subtitle: 'Подтверждение действия',
    desc: `Вы уверены, что хотите отменить этот заказ? Это будет стоить ${CONFIG.ENERGY_PER_ORDER_CANCEL} энергии.`,
    dangerButtons: {
      confirmText: `Да, отменить (-${CONFIG.ENERGY_PER_ORDER_CANCEL}⚡)`,
      onConfirm: () => {
        if (energy < CONFIG.ENERGY_PER_ORDER_CANCEL) {
          showToast(`⚡ Недостаточно энергии для отмены (нужно ${CONFIG.ENERGY_PER_ORDER_CANCEL})!`, "error");
          closeModal();
          return;
        }

        energy -= CONFIG.ENERGY_PER_ORDER_CANCEL;
        const idx = orders.findIndex(o => o.id === id);
        if (idx !== -1) {
          orders.splice(idx, 1);
          generateOrder();
          saveGame();
          updateUI();
          showToast("Заказ отменен", "error");
        }
        closeModal();
      }
    },
    isBlocking: true,
  });
}

function completeOrder(id) {
  checkOrdersAvailability();
  const orderIndex = orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return;

  const order = orders[orderIndex];
  if (!order.canComplete) {
    showToast("У вас нет необходимых предметов на поле!", "error");
    return;
  }

  // Находим карточку в DOM для запуска анимации испарения
  const cardElement = DOMElements.ordersList.querySelector(`#order-card-${id}`);
  if (cardElement) {
    cardElement.classList.add('fade-out');
  }

  const cellElements = document.querySelectorAll('.cell');
  const targetAvatarElement = cardElement ? cardElement.querySelector('.character-avatar') : null;

  let elementsToAnimate = [];
  let tempGrid = [...gridData];

  order.items.forEach(reqItem => {
    const foundIdx = tempGrid.findIndex((item, idx) =>
      item && !item.isGenerator && !item.isTrash && !item.isUpgradePart &&
      item.category === reqItem.category && item.level === reqItem.level &&
      !lockedCells.includes(idx)
    );
    if (foundIdx !== -1) {
      elementsToAnimate.push({
        idx: foundIdx,
        icon: ITEM_CATEGORIES[reqItem.category].items[reqItem.level - 1].icon,
        level: reqItem.level
      });
      tempGrid[foundIdx] = null;
    }
  });

  elementsToAnimate.forEach(el => {
    lockedCells.push(el.idx);
    gridData[el.idx] = null;
  });
  renderGrid();

  const animationPromises = elementsToAnimate.map(el => {
    score += el.level * CONFIG.ITEM_SCORE_MULTIPLIER;
    return moveItem3D(cellElements[el.idx], targetAvatarElement, el.icon).then(() => {
      lockedCells = lockedCells.filter(idx => idx !== el.idx);
    });
  });

  // After all items have flown to the card
  Promise.all(animationPromises).then(() => {
    // Wait for the card fade-out animation to complete
    setTimeout(() => {
      const wasStory = order.isStory;
      const currentStep = order.storyStep;
      const storyChar = order.character;

      orders.splice(orderIndex, 1);
      checkProgressiveUnlocks();

      if (wasStory) {
        energy = Math.min(CONFIG.MAX_ENERGY, energy + CONFIG.ENERGY_PER_ORDER_COMPLETION);
        if (currentStep < 3) {
          generateStoryOrder(currentStep + 1, storyChar);
          showToast(`🔮 Сюжет выполнен! Шаг ${currentStep + 1}/3 начался.`, "story");
        } else {
          const rand = Math.random();
          if (rand < 0.33) {
            spawnBonusGenerator();
            showToast(`🎁 Сюжет завершен! Вы получили новый генератор I уровня!`, "story");
          } else if (rand < 0.66) {
            spawnUpgradePart();
            showToast(`🎁 Сюжет завершен! Вы получили Новую деталь 🔩!`, "story");
          } else {
            spawnMagicTool();
            showToast(`🎁 Сюжет завершен! Вы получили Магические инструменты ⚒️!`, "story");
          }
          generateOrder();
        }
      } else {
        generateOrder();
      }

      saveGame();
      updateUI();
    }, CONFIG.ANIMATION_DURATION_FADE);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = initGame;
const GENERATORS_DATA = {
  'stationery': { icon: '✏️', name: 'Склад канцелярии', desc: 'Хранилище писчих принадлежностей.', categories: ['stationery'] },
  'flowers': { icon: '🌱', name: 'Цветочная теплица', desc: 'Оазис для выращивания декоративной флоры.', categories: ['flowers'] },
  'sweets': { icon: '🍬', name: 'Конфетный автомат', desc: 'Аппарат, выдающий кондитерские изделия.', categories: ['sweets'] },
  'accessories': { icon: '💎', name: 'Сокровищница', desc: 'Кованый ларь с ценными украшениями.', categories: ['accessories'] },
  'gadgets': { icon: '⚙️', name: 'Завод электроники', desc: 'Конвейер высокотехнологичных микросхем.', categories: ['gadgets'] },
  'alcohol': { icon: '🍸', name: 'Барная стойка', desc: 'Место, где профессиональный бармен смешивает изысканные напитки.', categories: ['alcohol'] },
  'atelier': { icon: '🪡', name: 'Ателье', desc: 'Мастерская, где из ниток и ткани рождаются стильные наряды.', categories: ['atelier'] },
  'household': { icon: '🧰', name: 'Хозяйственный склад', desc: 'Место, где хранятся инструменты и электроприборы.', categories: ['tools', 'electricity'], isHybrid: true },
  'transport': { icon: '🏠', name: 'Гараж', desc: 'Парк разнообразных транспортных средств.', categories: ['transport'] },
  'food_court': { icon: '🥙', name: 'Ресторанный дворик', desc: 'Место, где можно найти еду на любой вкус.', categories: ['fastfood', 'asian_food'], isHybrid: true },
};

const CATEGORIES_CONFIG = {
  stationery: {
    name: 'Канцелярия',
    color: '#8a1b0b',
    generatorKey: 'stationery',
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
    generatorKey: 'flowers',
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
    generatorKey: 'sweets',
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
    generatorKey: 'accessories',
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
    generatorKey: 'gadgets',
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
    generatorKey: 'food_court',
    items : [
      { level: 1, icon: '🥓', name: 'Хрустящий бекон', desc: 'Тонко нарезанные и хорошо прожаренные ломтики бекона.' },
      { level: 2, icon: '🍟', name: 'Картофель фри', desc: 'Хрустящие золотистые палочки.' },
      { level: 3, icon: '🥪', name: 'Сэндвич', desc: 'Классический сэндвич с ветчиной и сыром.' },
      { level: 4, icon: '🌭', name: 'Хот-дог', desc: 'Сочная сосиска в свежей булке.' },
      { level: 5, icon: '🍔', name: 'Двойной чизбургер', desc: 'Две котлеты с сыром в свежей булке.' },
      { level: 6, icon: '🫔', name: 'Сытный ролл', desc: 'Большая порция с овощами и мясом в лаваше.' },
      { level: 7, icon: '🍗', name: 'Куриный сет', desc: 'Целое ведерко горячих и хрустящих крылышек.' }
    ]
  },
  alcohol: {
    name: 'Алкоголь',
    color: '#ff5cf1',
    generatorKey: 'alcohol',
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
    generatorKey: 'atelier',
    items: [
      { level: 1, icon: '🪡', name: 'Игла', desc: 'Острый инструмент для начала большой работы.' },
      { level: 2, icon: '🧵', name: 'Катушка ниток', desc: 'Прочная нить для соединения деталей.' },
      { level: 3, icon: '🧤', name: 'Вязаные перчатки', desc: 'Первый результат рукоделия для защиты от холода.' },
      { level: 4, icon: '🧣', name: 'Теплый шарф', desc: 'Мягкий аксессуар, связанный с любовью.' },
      { level: 5, icon: '👚', name: 'Блузка', desc: 'Элегантный предмет повседневного гардероба.' },
      { level: 6, icon: '👗', name: 'Вечернее платье', desc: 'Изысканный наряд для особого случая.' },
      { level: 7, icon: '🧥', name: 'Дизайнерское пальто', desc: 'Вершина портновского искусства и стиля.' }
    ]
  },
  tools: {
    name: 'Инструменты',
    color: '#a9a9a9',
    generatorKey: 'household',
    items: [
      { level: 1, icon: '⚙️', name: 'Болт', desc: 'Простейший крепежный элемент.' },
      { level: 2, icon: '🔧', name: 'Гаечный ключ', desc: 'Инструмент для закручивания гаек.' },
      { level: 3, icon: '🔨', name: 'Молоток', desc: 'Надежный помощник для забивания гвоздей.' },
      { level: 4, icon: '🪚', name: 'Ручная пила', desc: 'Позволяет работать с деревом.' },
      { level: 5, icon: '🪓', name: 'Топор', desc: 'Тяжелый инструмент для рубки дров.' },
      { level: 6, icon: '🪏', name: 'Лопата', desc: 'Надежное приспособление для выкапывания земли.' },
      { level: 7, icon: '🧰', name: 'Ящик с инструментами', desc: 'Полный набор для любого ремонта.' }
    ]
  },
  electricity: {
    name: 'Электричество',
    color: '#ffc300',
    generatorKey: 'household',
    items: [
      { level: 1, icon: '⛓️‍💥', name: 'Провода', desc: 'Спутанные провода.' },
      { level: 2, icon: '🔌', name: 'Электрическая вилка', desc: 'Соединяет прибор с сетью.' },
      { level: 3, icon: '🔋', name: 'Батарейка', desc: 'Портативный источник энергии.' },
      { level: 4, icon: '🔦', name: 'Карманный фонарик', desc: 'Освещает путь в темноте.' },
      { level: 5, icon: '📻', name: 'Портативное радио', desc: 'Ловит сигналы из эфира.' },
      { level: 6, icon: '📺', name: 'Старый телевизор', desc: 'Показывает черно-белые фильмы.' },
      { level: 7, icon: '📡', name: 'Спутниковая тарелка', desc: 'Принимает сигналы из космоса.' }
    ]
  },
  transport: {
    name: 'Транспорт',
    color: '#74c69d', // Приятный зеленый цвет
    generatorKey: 'transport',
    items: [
      { level: 1, icon: '🛼', name: 'Ролики', desc: 'Простой способ быстро передвигаться по парку.' },
      { level: 2, icon: '🛴', name: 'Самокат', desc: 'Легкий и маневренный городской транспорт.' },
      { level: 3, icon: '🚲', name: 'Велосипед', desc: 'Экологичный транспорт для прогулок и поездок на работу.' },
      { level: 4, icon: '🛻', name: 'Пикап', desc: 'Небольшой грузовичок для перевозки малогабаритных грузов.' },
      { level: 5, icon: '🚗', name: 'Автомобиль', desc: 'Комфортное средство передвижения для всей семьи.' },
      { level: 6, icon: '🚚', name: 'Грузовик', desc: 'Мощная машина для транспортировки серьезных грузов.' },
      { level: 7, icon: '🚛', name: 'Фура', desc: 'Огромный автопоезд для междугородних перевозок.' }
    ]
  },
  asian_food: {
    name: 'Азиатская еда',
    color: '#e63946',
    generatorKey: 'food_court',
    items: [
      { level: 1, icon: '🥢', name: 'Палочки для еды', desc: 'Главный столовый прибор в Азии.' },
      { level: 2, icon: '🍚', name: 'Миска риса', desc: 'Основа для любого азиатского блюда.' },
      { level: 3, icon: '🍙', name: 'Онигири', desc: 'Треугольный рисовый шарик с начинкой.' },
      { level: 4, icon: '🍣', name: 'Суши', desc: 'Ломтик свежей рыбы на подушке из риса.' },
      { level: 5, icon: '🍛', name: 'Карри с рисом', desc: 'Пряное и сытное блюдо с густым соусом.' },
      { level: 6, icon: '🍲', name: 'Суп-лапша', desc: 'Насыщенный азиатский суп с лапшой и добавками.' },
      { level: 7, icon: '🍱', name: 'Бенто-бокс', desc: 'Коробочка с полноценным японским обедом.' }
    ]
  }
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
  // Grid and Board
  GRID_COLS: 5,
  GRID_ROWS: 7,
  MAX_ITEM_LEVEL: 7,
  MAX_GENERATOR_LEVEL: 5,
  STARTING_ITEMS_COUNT: 2,
  BLOCKED_ITEMS_AT_START: 23,

  // Energy
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 10000,
  ENERGY_REGEN_AMOUNT: 1,
  STORY_ORDER_ENERGY_REWARD: 3,
  ITEM_DELETE_COST: 15,
  OFFLINE_ENERGY_REGEN_RATE: 10000 / 1, // ms per 1 energy unit (Interval / Amount)

  // Coins
  COIN_MULTIPLIER: 5,
  COINS_PER_ORDER_CANCEL: 100,
  BLOCKED_CLEAR_COST_COINS: 75,

  // Orders
  MAX_ORDERS: 3,
  ORDER_GENERATION_STORY_CHANCE: 0.15,

  // Scoring and Progression
  ITEM_SCORE_MULTIPLIER: 50,

  // Timings and Animations
  ANIMATION: {
    FLY_DURATION: 400,
    FADE_DURATION: 400,
    PARTICLE_DURATION: 500,
    PARTICLE_COUNT: 12,
  },
  DOUBLE_CLICK_DELAY: 300, // ms
  DRAG_THRESHOLD: 5,

  // System
  SAVE_KEY: 'merge_game_save',
  LAST_LOGIN_KEY: 'last_login_time',
  ROMAN_NUMERALS: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' },
};

const GEN_ENERGY_CONFIG = {
  1: { max: 25, cooldown: 30000 },
  2: { max: 25, cooldown: 25000 },
  3: { max: 25, cooldown: 20000 },
  4: { max: 30, cooldown: 20000 },
  5: { max: 30, cooldown: 15000 }
};

const UNLOCK_THRESHOLDS = [
  { score: 500, unlocked: false, level: 2, prevLimit: 0, orderLevels: { min: 3, max: 4 } },
  { score: 1500, unlocked: false, level: 3, prevLimit: 500, orderLevels: { min: 4, max: 4 } },
  { score: 3000, unlocked: false, level: 4, prevLimit: 1500, orderLevels: { min: 4, max: 5 } },
  { score: 6000, unlocked: false, level: 5, prevLimit: 3000, orderLevels: { min: 5, max: 5 } },
  { score: 12000, unlocked: false, level: 6, prevLimit: 6000, orderLevels: { min: 5, max: 6 } },
  { score: 24000, unlocked: false, level: 7, prevLimit: 12000, orderLevels: { min: 6, max: 7 } }
];

// --- Game State ---
const gameState = {
  gridData: [],
  score: 0,
  coins: 0,
  energy: 100,
  orders: [],
  orderIdCounter: 1,
  lockedCells: [],
  activeCategories: [],
  lockedCategories: [],
  dragState: {
    element: null,
    startIndex: null,
    isMoved: false,
    isDragging: false,
    startX: 0,
    startY: 0,
  },
  lastClick: {
    index: null,
    time: 0,
  }
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
    value: document.getElementById('energy-val'),
    container: document.querySelector('.energy-container'),
  },
  coins: {
    value: document.getElementById('coins-val'),
    container: document.querySelector('.coins-container'),
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
    updateEnergyUI();
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
      desc: `За каждое использование генератора тратится 1 ед. энергии. Каждые ${CONFIG.ENERGY_REGEN_INTERVAL / 1000} сек. восстанавливается ${CONFIG.ENERGY_REGEN_AMOUNT} ед. энергии. За каждый выполненный сюжетный заказ вы получаете ${CONFIG.STORY_ORDER_ENERGY_REWARD} ед. энергии.`
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

  DOMElements.coins.container.addEventListener('click', () => {
    showModal({
      icon: '🪙',
      title: 'Монеты',
      subtitle: 'Игровая валюта',
      desc: `Монеты зарабатываются за выполнение заказов. Их можно потратить на пропуск нежелательных заказов, заплатив ${CONFIG.COINS_PER_ORDER_CANCEL} монет.`
    })
  })

  DOMElements.infoModal.closeBtn.addEventListener('click', closeModal);
  DOMElements.infoModal.cancelBtn.addEventListener('click', closeModal);
  DOMElements.resetBtn.addEventListener('click', confirmReset);
  // Если основной скрипт загрузился, он должен перехватить управление у аварийного сброса.
  // Сначала удаляем старый обработчик, чтобы избежать двойного срабатывания.
  // `fallbackResetHandler` должен быть доступен в глобальной области видимости из index.html.
  if (typeof fallbackResetHandler === 'function') DOMElements.resetBtn.removeEventListener('click', fallbackResetHandler);
  DOMElements.resetBtn.addEventListener('click', confirmReset);

  // Event delegation for dynamic order cards
  DOMElements.ordersList.addEventListener('click', (e) => {
    const target = e.target;
    const card = target.closest('.order-card');
    if (!card) return;

    const orderId = parseInt(card.dataset.orderId);
    if (isNaN(orderId)) return;

    const orderItemTarget = target.closest('.order-target');

    if (target.closest('.cancel-btn')) {
      confirmCancelOrder(orderId);
    } else if (target.closest('.complete-btn')) {
      completeOrder(orderId);
    } else if (target.closest('.order-header-info')) {
      showCharacterById(orderId);
    } else if (orderItemTarget) {
      const category = orderItemTarget.dataset.category;
      if (category) {
        showCategoryProgressionModal(category);
      }
    }
  });
}

function startNewGame() {
  gameState.gridData = Array(CONFIG.GRID_COLS * CONFIG.GRID_ROWS).fill(null);
  gameState.score = 0;
  gameState.coins = 0;
  gameState.energy = CONFIG.MAX_ENERGY;
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = false);

  // --- Новая логика генерации стартовых генераторов ---
  const allGeneratorKeys = Object.keys(GENERATORS_DATA);
  const startingGenerators = [];
  const activeCategoriesSet = new Set();

  // Выбираем 2 уникальные случайные категории
  const shuffledGenKeys = [...allGeneratorKeys].sort(() => 0.5 - Math.random());
  const genKey1 = shuffledGenKeys[0];
  const genKey2 = shuffledGenKeys[1];

  // Создаем два генератора на основе этих категорий
  startingGenerators.push({ isGenerator: true, generatorKey: genKey1, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });
  startingGenerators.push({ isGenerator: true, generatorKey: genKey2, genLevel: 1, genEnergy: GEN_ENERGY_CONFIG[1].max, lastRegenTime: Date.now() });

  [genKey1, genKey2].forEach(key => GENERATORS_DATA[key].categories.forEach(cat => activeCategoriesSet.add(cat)));
  gameState.activeCategories = Array.from(activeCategoriesSet);
  gameState.lockedCategories = Object.keys(CATEGORIES_CONFIG).filter(cat => !gameState.activeCategories.includes(cat));
  shuffleArray(gameState.lockedCategories);
  // --- Конец новой логики ---

  let availableIndices = Array.from({length: CONFIG.GRID_COLS * CONFIG.GRID_ROWS}, (_, i) => i);
  for (let i = 0; i < CONFIG.BLOCKED_ITEMS_AT_START; i++) {
    if (availableIndices.length > 5) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      // Теперь создаем реальный предмет, но заблокированный
      const randomCat = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
      const randomLevel = Math.floor(Math.random() * 3) + 1; // Блокируем предметы с 1 по 3 уровень
      gameState.gridData[cellIndex] = { category: randomCat, level: randomLevel, isBlocked: true };
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
    }
  }

  gameState.orders = [];
  for (let i = 0; i < CONFIG.MAX_ORDERS; i++) {
    generateOrder();
  }

  saveGame();
}

function saveGame() {
  const saveData = {
    gridData: gameState.gridData,
    score: gameState.score,
    coins: gameState.coins,
    energy: gameState.energy,
    orders: gameState.orders,
    orderIdCounter: gameState.orderIdCounter,
    activeCategories: gameState.activeCategories,
    lockedCategories: gameState.lockedCategories,
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

    gameState.gridData = loaded.gridData;
    gameState.score = loaded.score;
    gameState.coins = loaded.coins || 0;
    gameState.energy = loaded.energy;
    gameState.orders = loaded.orders;
    gameState.orderIdCounter = loaded.orderIdCounter;
    gameState.activeCategories = loaded.activeCategories;
    gameState.lockedCategories = loaded.lockedCategories;

    if (energyToRestore > 0) {
      gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + energyToRestore);
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
  gameState.gridData.forEach(item => {
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
  return gameState.gridData.map((val, idx) => (val === null && !gameState.lockedCells.includes(idx)) ? idx : null).filter(val => val !== null);
}

function getEmptyGridCells() {
  return gameState.gridData.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
}

function getCurrentPlayerLevel() {
  let currentLvl = 1;
  UNLOCK_THRESHOLDS.forEach(t => {
    if (gameState.score >= t.score) currentLvl = t.level;
  });
  return currentLvl;
}

function updateLevelProgressBar() {
  const currentLvl = getCurrentPlayerLevel();
  const barFill = DOMElements.level.bar;

  if (currentLvl >= CONFIG.MAX_ITEM_LEVEL) {
    barFill.style.width = '100%';
    DOMElements.level.score.innerText = gameState.score;
    return;
  }

  const currentThreshold = UNLOCK_THRESHOLDS.find(t => t.level === currentLvl + 1);
  if (currentThreshold) {
    const min = currentThreshold.prevLimit;
    const max = currentThreshold.score;
    const percentage = Math.max(0, ((gameState.score - min) / (max - min)) * 100);
    barFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  }
  DOMElements.level.score.innerText = gameState.score;
}

function regenerateEnergy() {
  if (gameState.energy < CONFIG.MAX_ENERGY) {
    gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + CONFIG.ENERGY_REGEN_AMOUNT);
    saveGame();
    // Обновляем только текстовое значение энергии, без перерисовки всего
    DOMElements.energy.value.innerText = gameState.energy;
  }
}

function updateUI() {
  checkOrdersAvailability();
  renderGrid();
  renderOrders();
  DOMElements.coins.value.innerText = gameState.coins;
  DOMElements.energy.value.innerText = gameState.energy;
  DOMElements.level.text.innerText = getCurrentPlayerLevel();
  updateLevelProgressBar();
}

function updateEnergyUI() {
  DOMElements.energy.value.innerText = gameState.energy;
  const cells = document.querySelectorAll('.cell');
  gameState.gridData.forEach((item, idx) => {
    if (item && item.isGenerator) {
      renderGeneratorBadges(cells[idx], item);
    }
  });
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
    const item = gameState.gridData[idx];
    cell.innerHTML = '';
    cell.className = 'cell';

    if (item) {
      if (item.isBlocked) {
        cell.classList.add('blocked');
      } else if (item.isUpgradePart || item.isMagicTool) {
        cell.classList.add('booster-cell');
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
        const genInfo = GENERATORS_DATA[item.generatorKey];
        fgItem.innerText = genInfo.icon;

        container.appendChild(bgBox);
        container.appendChild(fgItem);
        wrapper.appendChild(container);
        renderGeneratorBadges(cell, item);
      } else if (item.isUpgradePart) {
        cell.innerHTML += createParticleEffectHTML();
        wrapper.innerHTML = '🔩';
      } else if (item.isMagicTool) {
        cell.innerHTML += createParticleEffectHTML();
        wrapper.innerHTML = '⚒️';
      } else {
        wrapper.innerHTML = CATEGORIES_CONFIG[item.category].items[item.level - 1].icon;

        // Добавляем эффект частиц для предметов максимального уровня
        if (item.level === CONFIG.MAX_ITEM_LEVEL) {
          const starBadge = document.createElement('span');
          starBadge.classList.add('max-level-star');
          starBadge.innerText = '⭐';
          cell.appendChild(starBadge);
          cell.innerHTML += createParticleEffectHTML();
        } else {
          const levelBadge = document.createElement('span');
          levelBadge.classList.add('item-level');
          levelBadge.innerText = item.level;
          cell.appendChild(levelBadge);
        }

        // Подсветка для предметов, подходящих под заказ (не заблокированных)
        if (item.isAllocatedToOrder) {
          cell.classList.add('allocated-for-order');
          const checkmark = document.createElement('div');
          checkmark.classList.add('item-checkmark');
          cell.appendChild(checkmark);
        }
      }
      cell.appendChild(wrapper);
    }
  });
}

function renderGeneratorBadges(cell, item) {
  if (!cell || !item || !item.isGenerator) return;

  const lvl = item.genLevel || 1;

  // Удаляем старые значки, чтобы избежать дублирования
  cell.querySelector('.gen-energy-badge')?.remove();
  cell.querySelector('.gen-level-badge')?.remove();

  // Обновляем значок энергии
  const energyBadge = document.createElement('span');
  energyBadge.classList.add('gen-energy-badge');
  energyBadge.innerText = `⚡${item.genEnergy}`;
  cell.appendChild(energyBadge);

  // Обновляем классы ячейки в зависимости от энергии
  cell.classList.remove('generator-slot-no-energy', 'generator-slot-low-energy');
  energyBadge.classList.remove('gen-energy-badge-no-energy');

  if (item.genEnergy <= 5 && item.genEnergy > 0) {
    cell.classList.add('generator-slot-low-energy');
    energyBadge.classList.add('gen-energy-badge-no-energy');
  } else if (item.genEnergy === 0) {
    cell.classList.add('generator-slot-no-energy');
    energyBadge.classList.add('gen-energy-badge-no-energy');
  }

  // Обновляем значок уровня
  const levelBadge = document.createElement('span');
  levelBadge.classList.add('gen-level-badge');
  levelBadge.innerText = CONFIG.ROMAN_NUMERALS[lvl];
  cell.appendChild(levelBadge);

  // Добавляем звезду для генератора максимального уровня
  if (lvl === CONFIG.MAX_GENERATOR_LEVEL) {
    const starBadge = document.createElement('span');
    starBadge.classList.add('max-level-star');
    starBadge.innerText = '⭐';
    cell.appendChild(starBadge);
  }
}

function startDrag(e, index) {
  if (gameState.lockedCells.includes(index) || !gameState.gridData[index] || gameState.dragState.isDragging) return;

  gameState.dragState.isDragging = true; // Блокировка
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  gameState.dragState.startIndex = index;
  gameState.dragState.isMoved = false;
  gameState.dragState.startX = clientX;
  gameState.dragState.startY = clientY;
}

function handleDragMove(clientX, clientY) {
  const { startIndex, isMoved, startX, startY } = gameState.dragState;
  if (startIndex === null) return;

  if (!isMoved && (Math.abs(clientX - startX) > CONFIG.DRAG_THRESHOLD || Math.abs(clientY - startY) > CONFIG.DRAG_THRESHOLD)) {
    gameState.dragState.isMoved = true;
    if (!gameState.dragState.element) {
      // Запрещаем перетаскивание заблокированных предметов
      if (gameState.gridData[startIndex] && gameState.gridData[startIndex].isBlocked) { cleanDragState(); return; }

      // Создаем "призрак" только при реальном начале перетаскивания (когда курсор сдвинулся)
      const cells = document.querySelectorAll('.cell');
      const targetCell = cells[startIndex];
      const originalWrapper = targetCell.querySelector('.item-wrapper');
      if (!originalWrapper) {
        gameState.dragState.isDragging = false;
        return;
      }

      gameState.dragState.element = originalWrapper.cloneNode(true);
      gameState.dragState.element.classList.add('dragging');
      const rect = originalWrapper.getBoundingClientRect();
      gameState.dragState.element.style.left = `${rect.left}px`;
      gameState.dragState.element.style.top = `${rect.top}px`;
      document.body.appendChild(gameState.dragState.element);

      originalWrapper.style.opacity = '0.3';
    }
  }

  if (gameState.dragState.element) {
    gameState.dragState.element.style.left = `${clientX - 27}px`;
    gameState.dragState.element.style.top = `${clientY - 27}px`;
  }
}

function handleMouseMove(e) {
  handleDragMove(e.clientX, e.clientY);
}

function handleTouchMove(e) {
  handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
}

function handleMouseUp(e) {
  if (gameState.dragState.startIndex === null) return;
  endDrag(e.clientX, e.clientY);
}

function handleTouchEnd(e) {
  if (gameState.dragState.startIndex === null) return;
  const changedTouch = e.changedTouches[0];
  endDrag(changedTouch.clientX, changedTouch.clientY);
}

function endDrag(clientX, clientY) {
  const { element, isMoved, startIndex } = gameState.dragState;
  if (element) element.remove();

  if (!isMoved) {
    const item = gameState.gridData[startIndex]; // Получаем предмет, по которому кликнули
    if (item) { // Если в ячейке есть предмет
      if (item.isGenerator) { // Клик по генератору
        if (gameState.lastClick.index === startIndex) {
          // Второй клик по тому же генератору: спавним предмет
          triggerGenerator(item, startIndex);
        } else {
          // Первый клик: показываем информацию и запоминаем, что этот генератор был выбран
          showItemInfoModal(item);
          gameState.lastClick = { index: startIndex, time: Date.now() };
        }
      } else { // Клик по обычному предмету, бустеру или заблокированному
        showItemInfoModal(item, startIndex);
        gameState.lastClick = { index: null, time: 0 }; // Сбрасываем состояние
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
  if (startIndex === dragTargetIndex || gameState.lockedCells.includes(dragTargetIndex)) {
    cleanDragState();
    return;
  }

  executeMergeOrSwap(startIndex, dragTargetIndex);
  cleanDragState();
}

function cleanDragState() {
  gameState.dragState.isDragging = false;
  if (gameState.dragState.element) {
    gameState.dragState.element.remove();
    gameState.dragState.element = null;
  }
  gameState.dragState.startIndex = null;
  gameState.dragState.isMoved = false;
  renderGrid(); // Принудительный рендер восстановит все opacity
}

function executeMergeOrSwap(fromIdx, toIdx) {
  const source = gameState.gridData[fromIdx];
  const target = gameState.gridData[toIdx];

  // 0. Новая логика разблокировки
  if (target && target.isBlocked) {
    // Проверяем, что это слияние одинаковых предметов
    if (source.category === target.category && source.level === target.level && !source.isGenerator && !target.isGenerator) {
      if (source.level < CONFIG.MAX_ITEM_LEVEL) {
        gameState.gridData[fromIdx] = null; // Удаляем перетаскиваемый предмет
        gameState.gridData[toIdx] = { category: source.category, level: source.level + 1 }; // Разблокируем и улучшаем целевой
        triggerMergeEffects(toIdx, source.category);
        showToast("Паутина снята!", "success");
      }
    }
    // Если предметы не совпадают, ничего не делаем, предмет вернется на место
    saveGame();
    updateUI();
    return; // Завершаем функцию здесь
  }

  // Определяем, какой из предметов - деталь, а какой - генератор
  const upgradePart = source.isUpgradePart ? source : (target && target.isUpgradePart ? target : null);
  const generator = source.isGenerator ? source : (target && target.isGenerator ? target : null);
  const partIdx = source.isUpgradePart ? fromIdx : (target && target.isUpgradePart ? toIdx : -1);
  const genIdx = source.isGenerator ? fromIdx : (target && target.isGenerator ? toIdx : -1);

  // Определяем, какой из предметов - магический инструмент, а какой - обычный предмет
  const magicTool = source.isMagicTool ? source : (target && target.isMagicTool ? target : null);
  const regularItem = (source && !source.isGenerator && !source.isBlocked && !source.isUpgradePart && !source.isMagicTool) ? source :
    (target && !target.isGenerator && !target.isBlocked && !target.isUpgradePart && !target.isMagicTool) ? target : null;
  const toolIdx = source.isMagicTool ? fromIdx : (target && target.isMagicTool ? toIdx : -1);
  const itemIdx = (source && !source.isGenerator && !source.isBlocked && !source.isUpgradePart && !source.isMagicTool) ? fromIdx :
    (target && !target.isGenerator && !target.isBlocked && !target.isUpgradePart && !target.isMagicTool) ? toIdx : -1;

  // 1. Логика улучшения генератора деталью
  if (upgradePart && generator && partIdx !== -1 && genIdx !== -1) {
    if (generator.genLevel < CONFIG.MAX_GENERATOR_LEVEL) {
      const nextLvl = generator.genLevel + 1;
      gameState.gridData[partIdx] = null; // Удаляем деталь
      gameState.gridData[genIdx] = { // Улучшаем генератор
        ...generator,
        genLevel: nextLvl,
        genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
        lastRegenTime: Date.now()
      };
      triggerMergeEffects(genIdx, GENERATORS_DATA[generator.generatorKey].categories[0]);
      showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    }
    // 2. Логика улучшения предмета магическим инструментом
  } else if (magicTool && regularItem && toolIdx !== -1 && itemIdx !== -1) {
    if (regularItem.level < CONFIG.MAX_ITEM_LEVEL) {
      const nextLvl = regularItem.level + 1;
      gameState.gridData[toolIdx] = null; // Удаляем инструмент
      gameState.gridData[itemIdx] = { ...regularItem, level: nextLvl }; // Улучшаем предмет
      triggerMergeEffects(itemIdx, regularItem.category);
      showToast(`✨ Предмет улучшен до уровня ${nextLvl}!`, "success");
    }
    // 3. Логика слияния обычных предметов
  } else if (target && !source.isGenerator && !target.isGenerator && !source.isUpgradePart && !target.isUpgradePart && source.category === target.category && source.level === target.level) {
    if (source.level < CONFIG.MAX_ITEM_LEVEL) {
      gameState.gridData[fromIdx] = null;
      gameState.gridData[toIdx] = { category: source.category, level: source.level + 1 };
      triggerMergeEffects(toIdx, source.category);
    }
    // 4. Логика слияния генераторов
  } else if (target && source.isGenerator && target.isGenerator && source.generatorKey === target.generatorKey && source.genLevel === target.genLevel) {
    if (source.genLevel < CONFIG.MAX_GENERATOR_LEVEL) {
      const nextLvl = source.genLevel + 1;
      gameState.gridData[fromIdx] = null;
      gameState.gridData[toIdx] = {
        isGenerator: true,
        generatorKey: source.generatorKey,
        genLevel: nextLvl,
        genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
        lastRegenTime: Date.now()
      };
      triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
      showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    }
    // 5. Стандартная логика перемещения
  } else if (!target || (!target.isBlocked)) {
    [gameState.gridData[fromIdx], gameState.gridData[toIdx]] = [target, source];
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
      const themeColor = CATEGORIES_CONFIG[category] ? CATEGORIES_CONFIG[category].color : '#ff477e';
      const flash = document.createElement('div');
      flash.classList.add('merge-flash');
      flash.style.setProperty('--flash-color', themeColor);
      targetCell.appendChild(flash);
      setTimeout(() => flash.remove(), CONFIG.ANIMATION.FADE_DURATION);

      const rect = targetCell.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < CONFIG.ANIMATION.PARTICLE_COUNT; i++) {
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
        setTimeout(() => particle.remove(), CONFIG.ANIMATION.PARTICLE_DURATION);
      }
    }
  }, 0);
}

function clearBlockedItemWithCoins(index) {
  if (gameState.coins < CONFIG.BLOCKED_CLEAR_COST_COINS) {
    showToast(`🪙 Недостаточно монет для расчистки (нужно ${CONFIG.BLOCKED_CLEAR_COST_COINS})!`, "error");
    closeModal();
    return;
  }

  gameState.coins -= CONFIG.BLOCKED_CLEAR_COST_COINS;
  delete gameState.gridData[index].isBlocked; // Просто убираем флаг блокировки

  closeModal();
  saveGame();
  updateUI();
  showToast("Завал успешно расчищен!", "success");
  setTimeout(() => animateCellPop(index), 50);
}

function showItemInfoModal(item, index = -1) {
  let modalOptions = {};

  if (item.isBlocked) {
    const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
    modalOptions = {
      icon: '🕸️',
      title: `Заблокированный: ${info.name}`,
      subtitle: 'В паутине',
      desc: 'Этот предмет в паутине. Чтобы его освободить, перетащите на него точно такой же предмет с поля, либо расчистите завал за монеты.',
      actionButton: {
        text: `Расчистить завал (-${CONFIG.BLOCKED_CLEAR_COST_COINS}🪙)`,
        onClick: () => clearBlockedItemWithCoins(index)
      },
      isBlocking: false
    };
  } else if (item.isGenerator) {
    const genInfo = GENERATORS_DATA[item.generatorKey];
    const isHybrid = genInfo.isHybrid;
    const lvl = item.genLevel || 1;
    const config = GEN_ENERGY_CONFIG[lvl];
    if (item.genEnergy === undefined) item.genEnergy = config.max;

    let desc = `${genInfo.desc} `;
    if (isHybrid) {
      desc += `Производит предметы из категорий: ${genInfo.categories.map(c => CATEGORIES_CONFIG[c].name).join(' и ')}. `;
    }

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
      infoButton: { onClick: () => showCategoryProgressionModal(genInfo.categories) }
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
    const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
    modalOptions = {
      icon: info.icon,
      title: info.name,
      subtitle: `${CATEGORIES_CONFIG[item.category].name} • Уровень ${item.level}`,
      desc: info.desc,
      dangerButtons: {
        confirmButtonText: `Удалить (-${CONFIG.ITEM_DELETE_COST}⚡)`,
        onConfirm: () => deleteItem(index)
      },
      // Добавляем кнопку информации о родительском генераторе
      infoButton: {
        onClick: () => showCategoryProgressionModal(item.category)
      },
      isBlocking: false
    };
  }

  showModal(modalOptions);
}

function deleteItem(index) {
  if (index === -1 || !gameState.gridData[index] || gameState.gridData[index].isGenerator || gameState.gridData[index].isBlocked) return;

  if (gameState.energy < CONFIG.ITEM_DELETE_COST) {
    showToast(`⚡ Недостаточно энергии для удаления (нужно ${CONFIG.ITEM_DELETE_COST})!`, "error");
    closeModal();
    return;
  }

  gameState.energy -= CONFIG.ITEM_DELETE_COST;
  gameState.gridData[index] = null;
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

function showCategoryProgressionModal(categoryKeyOrKeys) {
  const categoryKeys = Array.isArray(categoryKeyOrKeys) ? categoryKeyOrKeys : [categoryKeyOrKeys];
  if (categoryKeys.length === 0) return;

  let progressionHTML = '';
  let modalTitle = 'Цепочка: ';
  let genInfo;

  categoryKeys.forEach((key, index) => {
    const category = CATEGORIES_CONFIG[key];
    if (!category) return;

    if (index > 0) {
      progressionHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
      modalTitle += ` & ${category.name}`;
    } else {
      modalTitle += category.name;
      genInfo = GENERATORS_DATA[category.generatorKey]; // Используем иконку первого генератора
    }

    progressionHTML += `<div class="progression-container">`;
    category.items.forEach((item, itemIndex) => {
      progressionHTML += `
        <div class="progression-item-square">
          <div class="progression-item-icon">${item.icon}</div>
          <div class="progression-item-level">${item.level}</div>
        </div>
      `;
      if (itemIndex < category.items.length - 1) {
        progressionHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    progressionHTML += '</div>';
  });

  showModal({
    icon: `<div class="generator-icon-container"><span class="generator-box-bg">📦</span><span class="generator-item-fg">${genInfo.icon}</span></div>`,
    title: modalTitle,
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
 * @param {string} options.dangerButtons.confirmButtonText - Text for confirm button.
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
  if (desc.startsWith('<div')) modal.desc.innerHTML = desc;

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
    modal.confirmBtn.innerText = dangerButtons.confirmButtonText;
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
  if (gameState.energy <= 0) {
    showToast("⚡ Упс! Недостаточно энергии игрока!", "error");
    return;
  }

  let emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  if (generator.genEnergy === config.max) {
    generator.lastRegenTime = Date.now();
  }
  generator.genEnergy--;
  gameState.energy--;

  // --- Новая логика: ищем ближайшую пустую ячейку ---
  const genX = fromIndex % CONFIG.GRID_COLS;
  const genY = Math.floor(fromIndex / CONFIG.GRID_COLS);

  let closestCells = [];
  let minDistance = Infinity;

  emptyCells.forEach(cellIndex => {
    const cellX = cellIndex % CONFIG.GRID_COLS;
    const cellY = Math.floor(cellIndex / CONFIG.GRID_COLS);
    const distance = Math.abs(genX - cellX) + Math.abs(genY - cellY);

    if (distance < minDistance) {
      minDistance = distance;
      closestCells = [cellIndex];
    } else if (distance === minDistance) {
      closestCells.push(cellIndex);
    }
  });

  // Выбираем случайную ячейку из самых близких
  const targetCellIndex = closestCells[Math.floor(Math.random() * closestCells.length)];
  // --- Конец новой логики ---

  gameState.lockedCells.push(targetCellIndex);

  // --- Логика для гибридных генераторов ---
  const genInfo = GENERATORS_DATA[generator.generatorKey];
  let spawnCategory;
  if (genInfo.isHybrid) {
    // 50/50 шанс выбрать одну из двух категорий
    spawnCategory = genInfo.categories[Math.random() < 0.5 ? 0 : 1];
  } else {
    spawnCategory = genInfo.categories[0];
  }
  // --- Конец логики для гибридных генераторов ---

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
  const itemInfo = CATEGORIES_CONFIG[spawnCategory].items[spawnLevel - 1];

  moveItem3D(fromCellElement, targetCellElement, itemInfo.icon).then(() => {
    gameState.gridData[targetCellIndex] = { category: spawnCategory, level: spawnLevel };
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
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
    }, CONFIG.ANIMATION.FLY_DURATION);
  });
}

function animateRewardFly(startElement, endElement, icon, count = 5, className = 'coin') {
  if (!startElement || !endElement) return;

  const endRect = endElement.getBoundingClientRect();
  const endX = endRect.left + endRect.width / 2;
  const endY = endRect.top + endRect.height / 2;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const startRect = startElement.getBoundingClientRect();
      const startX = startRect.left + startRect.width / 2 + (Math.random() - 0.5) * 40;
      const startY = startRect.top + startRect.height / 2 + (Math.random() - 0.5) * 20;

      const flyer = document.createElement('div');
      flyer.classList.add('flying-reward', className);
      flyer.innerHTML = icon;
      flyer.style.left = `${startX}px`;
      flyer.style.top = `${startY}px`;
      document.body.appendChild(flyer);

      void flyer.offsetWidth;

      const dX = endX - startX;
      const dY = endY - startY;

      flyer.style.transform = `translate(${dX}px, ${dY}px) scale(0.5)`;
      flyer.style.opacity = '0';

      setTimeout(() => {
        flyer.remove();
      }, 700);
    }, i * 60);
  }
}

function confirmReset() {
  showModal({
    icon: '⚠️',
    title: 'Сбросить весь прогресс?',
    subtitle: 'Полное обнуление',
    desc: 'Вы потеряете все свои открытые предметы, генераторы, очки уровня и текущие заказы. Это действие нельзя отменить.',
    dangerButtons: {
      confirmButtonText: 'Да, сбросить',
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
    if (gameState.score >= threshold.score && !threshold.unlocked) {
      threshold.unlocked = true;
      if (gameState.lockedCategories.length > 0) {
        const newCat = gameState.lockedCategories.shift();
        gameState.activeCategories.push(newCat);

        let emptyCells = getEmptyGridCells();
        if (emptyCells.length > 0) {
          const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          const genKey = CATEGORIES_CONFIG[newCat].generatorKey;
          gameState.gridData[targetCell] = {
            isGenerator: true,
            generatorKey: genKey,
            genLevel: 1,
            genEnergy: GEN_ENERGY_CONFIG[1].max,
            lastRegenTime: Date.now()
          };
          setTimeout(() => animateCellPop(targetCell), 50);
        }
        showToast(`🎉 Уровень ${threshold.level}! Новый генератор: ${GENERATORS_DATA[CATEGORIES_CONFIG[newCat].generatorKey].name}!`, "success");
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
    const randomActiveCat = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
    const genKey = CATEGORIES_CONFIG[randomActiveCat].generatorKey;
    gameState.gridData[targetCell] = {
      isGenerator: true,
      generatorKey: genKey,
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
    gameState.gridData[targetCell] = {
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
    gameState.gridData[targetCell] = {
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
  const hasActiveStory = gameState.orders.some(o => o.isStory);

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
    const randomCat = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
    const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    requestedItems.push({ category: randomCat, level: randomLevel });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  gameState.orders.push({
    id: gameState.orderIdCounter++,
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
  const randomCat = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
  requestedItems.push({ category: randomCat, level: targetLevel });

  if (step >= 2) {
    const randomCat2 = gameState.activeCategories[Math.floor(Math.random() * gameState.activeCategories.length)];
    requestedItems.push({ category: randomCat2, level: Math.max(1, targetLevel - 2) });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  gameState.orders.push({
    id: gameState.orderIdCounter++,
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
  // 1. Собираем все уникальные предметы, требуемые во всех заказах
  const allRequiredItems = new Map();
  gameState.orders.forEach(order => {
    order.items.forEach(reqItem => {
      const key = `${reqItem.category}-${reqItem.level}`;
      if (!allRequiredItems.has(key)) {
        allRequiredItems.set(key, reqItem);
      }
    });
  });

  // 2. Сбрасываем предыдущие выделения и помечаем нужные предметы
  gameState.gridData.forEach(item => {
    if (item) {
      const key = `${item.category}-${item.level}`;
      item.isAllocatedToOrder = allRequiredItems.has(key) && !item.isBlocked;
    }
  });

  // 3. Создаем полный список доступных для заказов предметов на поле
  const allAvailableItemIndices = gameState.gridData.map((item, idx) =>
    (item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !gameState.lockedCells.includes(idx)) ? idx : -1
  ).filter(idx => idx !== -1);

  let allAllocatedForAnyOrder = [];

  // 4. Проверяем, какие заказы можно выполнить ПОЛНОСТЬЮ, и помечаем их предметы галочками
  gameState.orders.forEach((order) => {
    let tempAvailableIndices = [...allAvailableItemIndices]; // Используем копию для каждого заказа
    let matchCount = 0;
    let allocatedForThisOrder = [];

    order.items.forEach(reqItem => {
      const foundItemGridIndex = tempAvailableIndices.find(gridIdx => {
        const item = gameState.gridData[gridIdx];
        return item && item.category === reqItem.category && item.level === reqItem.level;
      });

      if (foundItemGridIndex !== undefined) {
        matchCount++;
        allocatedForThisOrder.push(foundItemGridIndex);
        tempAvailableIndices.splice(tempAvailableIndices.indexOf(foundItemGridIndex), 1);
      }
    });

    order.canComplete = (matchCount === order.items.length);
    order.allocatedIndices = order.canComplete ? allocatedForThisOrder : [];
    if (order.canComplete) allAllocatedForAnyOrder.push(...order.allocatedIndices);
  });

  // Проверяем, появился ли новый готовый к сдаче заказ
  const hasNewlyCompletedOrder = gameState.orders.some(o => o.canComplete && !o.wasCompletableBefore);

  // Автоматическое перемещение готовых к сдаче заказов влево
  gameState.orders.sort((a, b) => {
    if (a.canComplete && !b.canComplete) return -1;
    if (!a.canComplete && b.canComplete) return 1;
    return 0;
  });

  // Если появился новый выполненный заказ, плавно прокручиваем панель влево
  if (hasNewlyCompletedOrder) {
    setTimeout(() => {
      DOMElements.ordersList.scrollTo({ left: 0, behavior: 'smooth' });
    }, 50); // Небольшая задержка, чтобы DOM успел обновиться перед прокруткой
  }

}


function renderOrders() {
  const ordersList = DOMElements.ordersList;

  // Сохраняем предыдущее состояние для отслеживания изменений
  gameState.orders.forEach(order => {
    order.wasCompletableBefore = order.canComplete;
  });

  // Получаем список старых ID для сохранения структуры
  const currentCards = Array.from(ordersList.children);
  // eslint-disable-next-line no-unused-vars
  const currentIds = currentCards.map(c => c.id);

  // Создаем временный список доступных на поле предметов для проверки
  const availableItemsOnGrid = gameState.gridData.filter(item =>
    item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart
  );

  // Создаем или обновляем карточки на основе отсортированного массива
  gameState.orders.forEach((order, index) => {
    const cardId = `order-card-${order.id}`;
    let card = document.getElementById(cardId);
    // Создаем копию доступных предметов для этого конкретного заказа, чтобы не влиять на другие
    let tempAvailable = [...availableItemsOnGrid];

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
      const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
      // Ищем, есть ли подходящий предмет на поле
      const foundItemIndex = tempAvailable.findIndex(gridItem =>
        gridItem.category === item.category && gridItem.level === item.level
      );

      let isFulfilled = foundItemIndex !== -1;
      if (isFulfilled) {
        // Если предмет найден, "удаляем" его из временного списка, чтобы он не засчитался дважды
        tempAvailable.splice(foundItemIndex, 1);
      }

      const fulfilledClass = isFulfilled ? 'fulfilled' : '';
      itemsHTML += `<div class="order-target ${fulfilledClass}" title="${itemInfo.name}" data-category="${item.category}"><span class="order-item-icon">${itemInfo.icon}</span></div>`;
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
  const activeIds = gameState.orders.map(o => `order-card-${o.id}`);
  currentCards.forEach(c => {
    if (!activeIds.includes(c.id) && !c.classList.contains('fade-out')) {
      c.remove();
    }
  });
}

function showCharacterById(id) {
  const order = gameState.orders.find(o => o.id === id);
  if (order) showCharacterModal(order);
}

function confirmCancelOrder(id) {
  const order = gameState.orders.find(o => o.id === id);
  if (!order || order.isStory) return;

  showModal({
    icon: '❓',
    title: 'Отменить заказ?',
    subtitle: 'Подтверждение действия',
    desc: `Вы уверены, что хотите отменить этот заказ? Это будет стоить ${CONFIG.COINS_PER_ORDER_CANCEL} монет.`,
    dangerButtons: {
      confirmButtonText: `Да, отменить (-${CONFIG.COINS_PER_ORDER_CANCEL}🪙)`,
      onConfirm: () => {
        if (gameState.coins < CONFIG.COINS_PER_ORDER_CANCEL) { showToast(`🪙 Недостаточно монет для отмены (нужно ${CONFIG.COINS_PER_ORDER_CANCEL})!`, "error"); closeModal(); return; }

        gameState.coins -= CONFIG.COINS_PER_ORDER_CANCEL;
        const idx = gameState.orders.findIndex(o => o.id === id);
        if (idx !== -1) {
          gameState.orders.splice(idx, 1);
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
  const orderIndex = gameState.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return;

  const order = gameState.orders[orderIndex];
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
  let tempGrid = [...gameState.gridData];

  order.items.forEach(reqItem => {
    const foundIdx = tempGrid.findIndex((item, idx) =>
      item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart &&
      item.category === reqItem.category && item.level === reqItem.level && // Убеждаемся, что предмет не заблокирован
      !gameState.lockedCells.includes(idx)
    );
    if (foundIdx !== -1) {
      elementsToAnimate.push({
        idx: foundIdx,
        icon: CATEGORIES_CONFIG[reqItem.category].items[reqItem.level - 1].icon,
        level: reqItem.level
      });
      tempGrid[foundIdx] = null;
    }
  });

  elementsToAnimate.forEach(el => {
    gameState.lockedCells.push(el.idx);
    gameState.gridData[el.idx] = null;
  });
  renderGrid();

  const animationPromises = elementsToAnimate.map(el => {
    gameState.score += el.level * CONFIG.ITEM_SCORE_MULTIPLIER;
    gameState.coins += el.level * CONFIG.COIN_MULTIPLIER;
    return moveItem3D(cellElements[el.idx], targetAvatarElement, el.icon).then(() => {
      gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== el.idx);
    });
  });

  // After all items have flown to the card
  Promise.all(animationPromises).then(() => {
    // Animate coins and energy flying to the top panel
    const coinsEarned = elementsToAnimate.reduce((sum, el) => sum + el.level * CONFIG.COIN_MULTIPLIER, 0);
    animateRewardFly(targetAvatarElement, DOMElements.coins.value, '🪙', Math.min(10, Math.ceil(coinsEarned / 5)), 'coin');
    if (order.isStory) {
      animateRewardFly(targetAvatarElement, DOMElements.energy.value, '⚡', CONFIG.STORY_ORDER_ENERGY_REWARD, 'energy');
    }

    // Wait for the card fade-out animation to complete
    setTimeout(() => {
      const wasStory = order.isStory;
      const currentStep = order.storyStep;
      const storyChar = order.character;

      gameState.orders.splice(orderIndex, 1);
      checkProgressiveUnlocks();

      if (wasStory) {
        gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + CONFIG.STORY_ORDER_ENERGY_REWARD);
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
    }, CONFIG.ANIMATION.FADE_DURATION);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = initGame;
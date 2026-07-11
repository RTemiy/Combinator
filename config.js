export const GENERATORS_DATA = {
  'flowers': {
    name: 'Цветочная теплица', desc: 'Оазис для выращивания декоративной флоры.', categories: ['flowers'],
    partIcons: [
      'assets/icons/categories/flowers/part_lvl_01.png',
      'assets/icons/categories/flowers/part_lvl_02.png',
      'assets/icons/categories/flowers/part_lvl_03.png',
    ],
    icons: [
      'assets/icons/categories/flowers/generator_lvl_01.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
      'assets/icons/categories/flowers/generator_lvl_02.png',
    ]
  },
  'coffee': {
    name: 'Кофейник', desc: 'Источник ароматного кофе. Чем выше уровень, тем сложнее и изысканнее напитки он может приготовить.', categories: ['coffee'],
    partIcons: [
      'assets/icons/categories/coffee/part_lvl_01.png',
      'assets/icons/categories/coffee/part_lvl_02.png',
      'assets/icons/categories/coffee/part_lvl_03.png',
    ],
    icons: [
      'assets/icons/categories/coffee/generator_lvl_01.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
      'assets/icons/categories/coffee/generator_lvl_02.png',
    ]
  },
  'stationery': {
    name: 'Канцелярский шкафчик', desc: 'Источник всего, что нужно для учебы и творчества. От простого карандаша до целой библиотеки.', categories: ['books', 'writings'], isHybrid: true,
    partIcons: [
      'assets/icons/categories/writings/part_lvl_01.png',
      'assets/icons/categories/writings/part_lvl_02.png',
      'assets/icons/categories/writings/part_lvl_03.png',
    ],
    icons: [
      'assets/icons/categories/writings/generator_lvl_01.png',
      'assets/icons/categories/writings/generator_lvl_02.png',
      'assets/icons/categories/writings/generator_lvl_02.png',
      'assets/icons/categories/writings/generator_lvl_02.png',
      'assets/icons/categories/writings/generator_lvl_02.png',
    ]
  },
  'bakery': {
    name: 'Пекарня-кондитерская', desc: 'Уютное место, где рождаются ароматная выпечка и сладкие лакомства. Смешивайте муку и сахар, чтобы создавать шедевры.', categories: ['bakery', 'pastry'], isHybrid: true,
    partIcons: [
      'assets/icons/categories/dough/part_lvl_01.png',
      'assets/icons/categories/dough/part_lvl_02.png',
      'assets/icons/categories/dough/part_lvl_03.png',
    ],
    icons: [
      'assets/icons/categories/dough/generator_lvl_01.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
      'assets/icons/categories/dough/generator_lvl_02.png',
    ]
  },
  'bonus_chest': {
    name: 'Подарочная коробка', desc: 'Коробка с сюрпризом. Содержит редкие предметы, но имеет ограниченное количество зарядов.', categories: [], isSpecial: true,
    icons: [
      'assets/icons/bonus_chest_lvl1.png',
      'assets/icons/bonus_chest_lvl2.png',
    ]
  },
};

export const CATEGORIES_CONFIG = {
  flowers: {
    name: 'Растения',
    color: '#06d6a0',
    generatorKey: 'flowers',
    items: [
      { level: 1, icon: 'assets/icons/categories/flowers/seeds.png', name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: 'assets/icons/categories/flowers/sprout.png', name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек, который только-только пробился из земли.' },
      { level: 3, icon: 'assets/icons/categories/flowers/mint.png', name: 'Небольшое растение', desc: 'Растение окрепло и обзавелось несколькими листочками.' },
      { level: 4, icon: 'assets/icons/categories/flowers/potted_plant.png', name: 'Большое в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: 'assets/icons/categories/flowers/rose.png', name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: 'assets/icons/categories/flowers/bouquet.png', name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: 'assets/icons/categories/flowers/tree.png', name: 'Раскидистое дерево', desc: 'Могучий вековой исполин. Может приносить плоды.', becomesGenerator: { category: 'berries', charges: 7 } }
    ]
  },
  berries: {
    name: 'Смородина',
    color: '#c9184a',
    generatorKey: null,
    isItemGenerated: true,
    items: [
      { level: 1, icon: 'assets/icons/categories/berries/single_berry.png', name: 'Ягодка смородины', desc: 'Одна-единственная спелая и блестящая ягодка.' },
      { level: 2, icon: 'assets/icons/categories/berries/bunch.png', name: 'Гроздь смородины', desc: 'Целая веточка, усыпанная кисло-сладкими ягодами.' },
      { level: 3, icon: 'assets/icons/categories/berries/handful.png', name: 'Горсть смородины', desc: 'Несколько ягод, которых хватит, чтобы распробовать вкус лета.' },
      { level: 4, icon: 'assets/icons/categories/berries/bowl.png', name: 'Миска со смородиной', desc: 'Полная миска свежесобранных ягод, посыпанных сахаром.' },
      { level: 5, icon: 'assets/icons/categories/berries/basket.png', name: 'Корзинка смородины', desc: 'Небольшая плетеная корзинка, доверху наполненная урожаем.' },
      { level: 6, icon: 'assets/icons/categories/berries/jam_jar.png', name: 'Банка варенья', desc: 'Густое и сладкое смородиновое варенье, заготовленное на зиму.' },
      { level: 7, icon: 'assets/icons/categories/berries/pie.png', name: 'Пирог со смородиной', desc: 'Домашний пирог с ароматной ягодной начинкой.' },
    ]
  },
  coffee: {
    name: 'Кофе',
    color: '#5e3b2b',
    generatorKey: 'coffee',
    items: [
      { level: 1, icon: 'assets/icons/categories/coffee/empty_cup.png', name: 'Пустой стаканчик', desc: 'Бумажный стаканчик, готовый к наполнению.' },
      { level: 2, icon: 'assets/icons/categories/coffee/cup_coffee.png', name: 'Стаканчик с кофе', desc: 'Горячий эспрессо в простом стаканчике.' },
      { level: 3, icon: 'assets/icons/categories/coffee/ready_cup.png', name: 'Стаканчик навынос', desc: 'Кофе с крышкой, который удобно взять с собой.' },
      { level: 4, icon: 'assets/icons/categories/coffee/ceramic.png', name: 'Пустая керамическая чашка', desc: 'Элегантная чашка для настоящих ценителей.' },
      { level: 5, icon: 'assets/icons/categories/coffee/ceramic_coffee.png', name: 'Чашка с кофе', desc: 'Ароматный американо в керамической чашке.' },
      { level: 6, icon: 'assets/icons/categories/coffee/cappuccino.png', name: 'Капучино', desc: 'Нежный кофе с пышной молочной пенкой.' },
      { level: 7, icon: 'assets/icons/categories/coffee/best_coffee.png', name: 'Сладкий кофе с допингами', desc: 'Авторский напиток с сиропом, сливками и маршмеллоу.' },
    ]
  },
  writings: {
    name: 'Письменные принадлежности',
    color: '#2b5e55',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: 'assets/icons/categories/writings/clip.png', name: 'Скрепка', desc: 'Маленький металлический помощник, удерживающий листы вместе.' },
      { level: 2, icon: 'assets/icons/categories/writings/eraser.png', name: 'Ластик', desc: 'Стирает ошибки и неудачные наброски, давая второй шанс.' },
      { level: 3, icon: 'assets/icons/categories/writings/pencil.png', name: 'Карандаш', desc: 'Простой инструмент для письма и рисования, основа творчества.' },
      { level: 4, icon: 'assets/icons/categories/writings/pen.png', name: 'Ручка', desc: 'Оставляет четкий и уверенный след, идеальна для важных записей.' },
      { level: 5, icon: 'assets/icons/categories/writings/scissors.png', name: 'Ножницы', desc: 'Острые лезвия для точной резки бумаги и картона.' },
      { level: 6, icon: 'assets/icons/categories/writings/pencil_case.png', name: 'Пенал', desc: 'Вместилище для всех письменных сокровищ, поддерживает порядок.' },
      { level: 7, icon: 'assets/icons/categories/writings/organizer.png', name: 'Подставка для письменных принадлежностей', desc: 'Органайзер, который собирает все инструменты в одном месте.' },
    ]
  },
  books: {
    name: 'Книги',
    color: '#5e562b',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: 'assets/icons/categories/books/sticker.png', name: 'Липучая наклейка', desc: 'Маленький листок для быстрых заметок и напоминаний.' },
      { level: 2, icon: 'assets/icons/categories/books/paper.png', name: 'Листок', desc: 'Чистый лист бумаги, готовый принять любые идеи.' },
      { level: 3, icon: 'assets/icons/categories/books/spiral_notebook.png', name: 'Блокнот на пружине', desc: 'Удобный блокнот для конспектов и зарисовок.' },
      { level: 4, icon: 'assets/icons/categories/books/notebook.png', name: 'Блокнот', desc: 'Надежный спутник для записи мыслей и планов в твердой обложке.' },
      { level: 5, icon: 'assets/icons/categories/books/book.png', name: 'Книжка', desc: 'Источник знаний или увлекательная история в переплете.' },
      { level: 6, icon: 'assets/icons/categories/books/books_stack.png', name: 'Стопка книг', desc: 'Коллекция мудрости и приключений, ожидающая своего читателя.' },
      { level: 7, icon: 'assets/icons/categories/books/bookshelf.png', name: 'Книжный шкаф', desc: 'Целая библиотека, хранящая в себе миры и эпохи.' },
    ]
  },
  bakery: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/dough/toast.png', name: 'Тост', desc: 'Поджаренный ломтик хлеба, хрустящий снаружи и мягкий внутри.' },
      { level: 2, icon: 'assets/icons/categories/dough/bagel.png', name: 'Бейгл', desc: 'Плотный бублик, который часто едят с начинкой.' },
      { level: 3, icon: 'assets/icons/categories/dough/brioche.png', name: 'Бриошь', desc: 'Сдобная булочка из воздушного теста, идеальна для завтрака.' },
      { level: 4, icon: 'assets/icons/categories/dough/ciabatta.png', name: 'Чиабатта', desc: 'Итальянский хлеб с пористой мякотью и хрустящей корочкой.' },
      { level: 5, icon: 'assets/icons/categories/dough/focaccia.png', name: 'Фокачча с оливками', desc: 'Пышная итальянская лепешка, сдобренная оливковым маслом и оливками.' },
      { level: 6, icon: 'assets/icons/categories/dough/baguette.png', name: 'Багет', desc: 'Длинный и тонкий французский хлеб с хрустящей корочкой.' },
      { level: 7, icon: 'assets/icons/categories/dough/karavai.png', name: 'Каравай', desc: 'Пышный и румяный праздничный хлеб, символ гостеприимства.' },
    ]
  },
  pastry: {
    name: 'Кондитерские изделия',
    color: '#ed08c7',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/candies/cacao.png', name: 'Какао', desc: 'Упаковка какао-порошка, основа для будущих шоколадных шедевров.' },
      { level: 2, icon: 'assets/icons/categories/candies/choco_candy.png', name: 'Шоколадная конфета', desc: 'Маленькое шоколадное удовольствие с нежной начинкой.' },
      { level: 3, icon: 'assets/icons/categories/candies/choco_bar.png', name: 'Плитка шоколада', desc: 'Классическая плитка темного шоколада.' },
      { level: 4, icon: 'assets/icons/categories/candies/muffin.png', name: 'Шоколадный маффин', desc: 'Воздушный кекс с кусочками тающего шоколада.' },
      { level: 5, icon: 'assets/icons/categories/candies/croissant.png', name: 'Круассан с фисташковой пастой', desc: 'Слоеный круассан с ароматной и сладкой фисташковой начинкой.' },
      { level: 6, icon: 'assets/icons/categories/candies/eclairs.png', name: 'Упаковка эклеров', desc: 'Набор изысканных заварных пирожных с нежным кремом.' },
      { level: 7, icon: 'assets/icons/categories/candies/bento_cake.png', name: 'Бенто-торт', desc: 'Миниатюрный торт в коробочке, модный и вкусный десерт.' },
    ]
  }
  /* Заготовка
  candies: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/dough/.png', name: '', desc: '' },
    ]
  }
  */
};

export const CHARACTERS = [
  { icon: 'assets/icons/characters/simple_man_01.png', name: 'Джентльмен', desc: 'Ценитель классики и хороших манер. Часто заказывает что-то для своей подруги.' },
  { icon: 'assets/icons/characters/simple_man_02.png', name: 'Офисный работник', desc: 'Его день состоит из отчетов и таблиц. Любит, когда все разложено по полочкам.' },
  { icon: 'assets/icons/characters/simple_man_03.png', name: 'Студент', desc: 'Вечно занят учебой, но всегда находит время для чашечки кофе.' },
  { icon: 'assets/icons/characters/simple_woman_01.png', name: 'Художница', desc: 'Ищет вдохновение в мелочах. Ей постоянно нужны новые материалы для творчества.' },
  { icon: 'assets/icons/characters/simple_woman_02.png', name: 'Молодая мама', desc: 'Вся в заботах, но не забывает радовать себя и близких небольшими подарками.' },
  { icon: 'assets/icons/characters/simple_woman_03.png', name: 'Фрилансер', desc: 'Постоянно в чем-то ищет вдохновение.' },
];

export const STORY_CHARACTERS = [
  { icon: 'assets/icons/characters/special_01.png', name: 'Маг', desc: 'Загадочный фокусник, которому постоянно требуются самые неожиданные предметы для его представлений. Никто не знает, что у него в шляпе.' },
  { icon: 'assets/icons/characters/special_02.png', name: 'Тигруля', desc: 'Энергичный аниматор в костюме тигра. Готовится к детскому празднику и ищет всё необходимое, чтобы сделать его незабываемым.' },
  { icon: 'assets/icons/characters/special_03.png', name: 'Русалочка', desc: 'Мечтательная девушка, готовящаяся к тематической вечеринке у бассейна. Ей нужны диковинные вещи, чтобы её образ русалки был безупречен.' }
];

export const ACHIEVEMENTS_DATA = {
  totalMerges: {
    id: 'totalMerges',
    name: 'Мастер комбинаций',
    desc: 'Совершите определенное количество слияний.',
    icon: 'assets/icons/achievements/merge_achievement.png',
    tiers: [
      { goal: 50, reward: 100 },
      { goal: 250, reward: 250 },
      { goal: 1000, reward: 500 },
      { goal: 5000, reward: 1000 },
    ]
  },
  totalOrdersCompleted: {
    id: 'totalOrdersCompleted',
    name: 'Надежный поставщик',
    desc: 'Выполните определенное количество заказов.',
    icon: 'assets/icons/achievements/order_achievement.png',
    tiers: [
      { goal: 10, reward: 150 },
      { goal: 50, reward: 300 },
      { goal: 100, reward: 600 },
      { goal: 250, reward: 1200 },
    ]
  },
  totalCoinsEarned: {
    id: 'totalCoinsEarned',
    name: 'Богач',
    desc: 'Заработайте определенное количество монет за все время.',
    icon: 'assets/icons/achievements/coins_achievement.png',
    tiers: [
      { goal: 1000, reward: 100 },
      { goal: 5000, reward: 250 },
      { goal: 20000, reward: 500 },
      { goal: 100000, reward: 1000 },
    ]
  },
  totalEnergySpent: {
    id: 'totalEnergySpent',
    name: 'Энерджайзер',
    desc: 'Потратьте определенное количество энергии.',
    icon: 'assets/icons/achievements/energy_achievement.png',
    tiers: [
      { goal: 500, reward: 50 },
      { goal: 2000, reward: 150 },
      { goal: 10000, reward: 400 },
      { goal: 50000, reward: 800 },
    ]
  }
};

export const CONFIG = {
  // Grid and Board
  GRID_COLS: 5,
  GRID_ROWS: 7,
  MAX_ITEM_LEVEL: 7,
  MAX_GENERATOR_LEVEL: 5,
  STARTING_ITEMS_COUNT: 2,
  BLOCKED_ITEMS_AT_START: 25,

  // Energy
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 15000,
  ENERGY_REGEN_AMOUNT: 1,
  STORY_ORDER_ENERGY_REWARD: 3,
  ORDER_ENERGY_REWARD: 1,
  OFFLINE_ENERGY_REGEN_RATE: 15000,

  // Coins
  COIN_MULTIPLIER: 5,
  COINS_PER_ORDER_CANCEL: 100,
  GENERATOR_RECHARGE_COST: 150,
  BLOCKED_CLEAR_COST_COINS: 200,
  ENERGY_RECHARGE_COST_COINS: 250,

  // Orders
  MAX_ORDERS: 3,
  ORDER_GENERATION_STORY_CHANCE: 0.1,

  // Scoring and Progression
  ITEM_SCORE_MULTIPLIER: 50,

  // Timings and Animations
  ANIMATION: {
    FLY_DURATION: 400,
    FADE_DURATION: 400,
    PARTICLE_DURATION: 500,
    PARTICLE_COUNT: 12,
  },
  DRAG_THRESHOLD: 5,

  // Collection
  COLLECTION_BONUS_BASE_VALUE: 15,

  // System
  VERSION_KEY: 'merge_game_version',
  GAME_VERSION: '1.2.0',
  SAVE_KEY: 'merge_game_save',
  LAST_LOGIN_KEY: 'last_login_time',
  ROMAN_NUMERALS: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' },
};

export const GEN_ENERGY_CONFIG = {
  1: { max: 25, cooldown: 30000 },
  2: { max: 25, cooldown: 25000 },
  3: { max: 25, cooldown: 20000 },
  4: { max: 30, cooldown: 20000 },
  5: { max: 30, cooldown: 15000 }
};

export const SPAWN_CHANCES = {
  2: [{ level: 2, chance: 20  }],
  3: [{ level: 3, chance: 10 }, { level: 2, chance: 35 }],
  4: [{ level: 4, chance: 5 }, { level: 3, chance: 20 }, { level: 2, chance: 50 }],
  5: [{ level: 5, chance: 5 }, { level: 4, chance: 15 }, { level: 3, chance: 40 }, { level: 2, chance: 70 }]
};

export const UNLOCK_THRESHOLDS = [
  { score: 1500, unlocked: false, level: 2, prevLimit: 0, orderLevels: { min: 3, max: 4 } },
  { score: 3000, unlocked: false, level: 3, prevLimit: 1500, orderLevels: { min: 4, max: 4 } },
  { score: 12000, unlocked: false, level: 4, prevLimit: 3000, orderLevels: { min: 4, max: 5 } },
  { score: 24000, unlocked: false, level: 5, prevLimit: 12000, orderLevels: { min: 5, max: 5 } },
  { score: 36000, unlocked: false, level: 6, prevLimit: 24000, orderLevels: { min: 5, max: 6 } },
  { score: 48000, unlocked: false, level: 7, prevLimit: 36000, orderLevels: { min: 6, max: 7 } }
];
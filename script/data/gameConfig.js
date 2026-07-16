export const CONFIG = {
  // Grid and Board
  GRID_COLS: 6,
  GRID_ROWS: 8,
  MAX_ITEM_LEVEL: 7,
  MAX_GENERATOR_LEVEL: 5,
  STARTING_ITEMS_COUNT: 2,
  BLOCKED_ITEMS_AT_START: 40,
  BLOCKED_UNLOCKED_CATEGORY_ITEMS_AT_START: 0.35,

  // Energy
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 20000, // Снижаем скорость регенерации
  ENERGY_REGEN_AMOUNT: 1,
  STORY_ORDER_ENERGY_REWARD: 7, // Увеличиваем награду за сюжетные заказы
  ORDER_ENERGY_REWARD: 1,
  OFFLINE_ENERGY_REGEN_RATE: 15000,

  // Coins
  COIN_MULTIPLIER: 5,
  COINS_PER_ORDER_CANCEL: 100,
  GENERATOR_RECHARGE_COST: 200, // Увеличиваем стоимость
  BLOCKED_CLEAR_COST_COINS: 250, // Увеличиваем стоимость
  ENERGY_RECHARGE_COST_COINS: 300,
  // Orders
  MAX_ORDERS: 3,
  ORDER_GENERATION_STORY_CHANCE: 0.1,

  // Scoring and Progression
  ITEM_SCORE_MULTIPLIER: 50,
  LEVEL_UP_COIN_MULTIPLIER: 50,

  // Timings and Animations
  ANIMATION: {
    FLY_DURATION: 400,
    FADE_DURATION: 400,
    PARTICLE_DURATION: 500,
    PARTICLE_COUNT: 12,
  },
  DRAG_THRESHOLD: 5,

  // Collection
  COLLECTION_BONUS_BASE_VALUE: 12,

  // System
  VERSION_KEY: 'merge_game_version',
  GAME_VERSION: '1.2.8',
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
  // Каждый объект описывает уровень, на котором находится игрок
  // level: номер уровня
  // scoreStart: количество очков для начала этого уровня
  // scoreEnd: количество очков для перехода на следующий уровень
  { level: 1, unlocked: true,  scoreStart: 0,     scoreEnd: 500,    orderLevels: { min: 2, max: 2 }, unlocksGenerator: false },
  { level: 2, unlocked: false, scoreStart: 500,   scoreEnd: 3000,   orderLevels: { min: 2, max: 3 }, unlocksGenerator: false },
  { level: 3, unlocked: false, scoreStart: 3000,  scoreEnd: 8000,  orderLevels: { min: 2, max: 7 }, unlocksGenerator: false },
  { level: 4, unlocked: false, scoreStart: 8000, scoreEnd: 13000,  orderLevels: { min: 2, max: 4 }, unlocksGenerator: true  },
  { level: 5, unlocked: false, scoreStart: 13000, scoreEnd: 18000,  orderLevels: { min: 3, max: 7 }, unlocksGenerator: false },
  { level: 6, unlocked: false, scoreStart: 18000, scoreEnd: 23000,  orderLevels: { min: 3, max: 5 }, unlocksGenerator: true  },
  { level: 7, unlocked: false, scoreStart: 23000, scoreEnd: 28000, orderLevels: { min: 3, max: 7 }, unlocksGenerator: false },
  { level: 8, unlocked: false, scoreStart: 28000, scoreEnd: 33000, orderLevels: { min: 3, max: 6 }, unlocksGenerator: true },
  { level: 9, unlocked: false, scoreStart: 33000, scoreEnd: 38000, orderLevels: { min: 4, max: 7 }, unlocksGenerator: false },
  { level: 10, unlocked: false, scoreStart: 38000, scoreEnd: 43000, orderLevels: { min: 4, max: 7 }, unlocksGenerator: true },
  { level: 11, unlocked: false, scoreStart: 43000, scoreEnd: 48000, orderLevels: { min: 5, max: 7 }, unlocksGenerator: false },
  { level: 12, unlocked: false, scoreStart: 48000, scoreEnd: 53000, orderLevels: { min: 6, max: 7 }, unlocksGenerator: true },
  { level: 13, unlocked: false, scoreStart: 53000, scoreEnd: 58000, orderLevels: { min: 7, max: 7 }, unlocksGenerator: false },
  { level: 14, unlocked: false, scoreStart: 58000, scoreEnd: Infinity, orderLevels: { min: 7, max: 7 }, unlocksGenerator: false },
];

export const STORY_ORDER_CONFIG = {
  1: { levels: [4, 3] },
  2: { levels: [2, 2] },
  3: { levels: [7, 2, 3] }
};
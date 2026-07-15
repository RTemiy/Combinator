export const CONFIG = {
  // Grid and Board
  GRID_COLS: 6,
  GRID_ROWS: 8,
  MAX_ITEM_LEVEL: 7,
  MAX_GENERATOR_LEVEL: 5,
  STARTING_ITEMS_COUNT: 2,
  BLOCKED_ITEMS_AT_START: 40,
  BLOCKED_UNLOCKED_CATEGORY_ITEMS_AT_START: 0.25,

  // Energy
  MAX_ENERGY: 100,
  ENERGY_REGEN_INTERVAL: 15000,
  ENERGY_REGEN_AMOUNT: 1,
  STORY_ORDER_ENERGY_REWARD: 5,
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
  COLLECTION_BONUS_BASE_VALUE: 12,

  // System
  VERSION_KEY: 'merge_game_version',
  GAME_VERSION: '1.2.6',
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
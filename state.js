export const gameState = {
  gridData: [],
  score: 0,
  coins: 0,
  energy: 100,
  orders: [],
  orderIdCounter: 1,
  lockedCells: [],
  newlyUnlockedCategories: [],
  activeCategories: [],
  rewardQueue: [],
  unlockedItemGenCategories: [],
  lockedCategories: [],
  discoveredItems: {},
  claimedAchievements: {},
  claimedCollectionBonuses: {},
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
  }
};

export const gameSettings = {
  musicVolume: 0.2,
  sfxVolume: 0.5,
};

export const playerProfile = {
  name: 'Игрок12345',
  icon: '👤',
  startDate: Date.now(),
  timePlayed: 0, // в миллисекундах
  totalMerges: 0,
  totalOrdersCompleted: 0,
  totalCoinsEarned: 0,
  totalEnergySpent: 0,
  mergeCounts: {},
};
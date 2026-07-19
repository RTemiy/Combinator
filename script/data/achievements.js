import {
  coinsAchievementIconUrl,
  energyAchievementIconUrl,
  mergeAchievementIconUrl,
  orderAchievementIconUrl
} from './assetUrls.js';

export const ACHIEVEMENTS_DATA = {
  totalMerges: {
    id: 'totalMerges',
    name: 'Мастер комбинаций',
    desc: 'Совершите определенное количество слияний.',
    icon: mergeAchievementIconUrl,
    tiers: [
      { goal: 50, reward: 75 },
      { goal: 250, reward: 250 },
      { goal: 1000, reward: 500 },
      { goal: 5000, reward: 1000 },
    ]
  },
  totalOrdersCompleted: {
    id: 'totalOrdersCompleted',
    name: 'Надежный поставщик',
    desc: 'Выполните определенное количество заказов.',
    icon: orderAchievementIconUrl,
    tiers: [
      { goal: 10, reward: 50 },
      { goal: 50, reward: 300 },
      { goal: 100, reward: 600 },
      { goal: 250, reward: 1200 },
    ]
  },
  totalCoinsEarned: {
    id: 'totalCoinsEarned',
    name: 'Богач',
    desc: 'Заработайте определенное количество монет за все время.',
    icon: coinsAchievementIconUrl,
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
    icon: energyAchievementIconUrl,
    tiers: [
      { goal: 500, reward: 50 },
      { goal: 2000, reward: 150 },
      { goal: 10000, reward: 400 },
      { goal: 50000, reward: 800 },
    ]
  }
};
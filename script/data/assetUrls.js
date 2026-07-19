// This file centralizes asset URLs to make them compatible with Parcel's bundling.
// By using `new URL(...)`, we tell Parcel to include these assets in the build
// and provide us with the final, correct path.

export const coinIconUrl = new URL('/assets/icons/coin.png', import.meta.url);
export const energyIconUrl = new URL('/assets/icons/energy.png', import.meta.url);
export const upgradePartIconUrl = new URL('/assets/icons/upgrade_part.png', import.meta.url);
export const magicToolIconUrl = new URL('/assets/icons/magic_tool.png', import.meta.url);
export const copyBubbleIconUrl = new URL('/assets/icons/copy_bubble.png', import.meta.url);
export const boxIconUrl = new URL('/assets/icons/box.png', import.meta.url);
export const checkmarkIconUrl = new URL('/assets/icons/checkmark.png', import.meta.url);

export const lockIconUrl = new URL('/assets/icons/lock.png', import.meta.url);
export const achievementsIconUrl = new URL('/assets/icons/achievements.png', import.meta.url);
export const chainIconUrl = new URL('/assets/icons/chain.png', import.meta.url);
export const storyScrollIconUrl = new URL('/assets/icons/story_scroll.png', import.meta.url);
export const questionIconUrl = new URL('/assets/icons/question.png', import.meta.url);
export const warningIconUrl = new URL('/assets/icons/warning.png', import.meta.url);
export const blockIconUrl = new URL('/assets/icons/block.png', import.meta.url);
export const bonusChestLvl1IconUrl = new URL('/assets/icons/bonus_chest_lvl1.png', import.meta.url);
export const levelIconUrl = new URL('/assets/icons/level.png', import.meta.url);
export const profileIconUrl = new URL('/assets/icons/profile.png', import.meta.url);
export const starIconUrl = new URL('/assets/icons/star.png', import.meta.url);

export const mergeAchievementIconUrl = new URL('/assets/icons/achievements/merge_achievement.png', import.meta.url);
export const orderAchievementIconUrl = new URL('/assets/icons/achievements/order_achievement.png', import.meta.url);
export const coinsAchievementIconUrl = new URL('/assets/icons/achievements/coins_achievement.png', import.meta.url);
export const energyAchievementIconUrl = new URL('/assets/icons/achievements/energy_achievement.png', import.meta.url);
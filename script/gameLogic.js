import { gameState, playerProfile } from './state.js';
import { DOMElements } from './dom.js';
import {
  CATEGORIES_CONFIG,
  GENERATORS_DATA,
  CHARACTERS,
  STORY_CHARACTERS,
  STORY_DATA,
  ACHIEVEMENTS_DATA,
} from './config.js';
import { CONFIG, GEN_ENERGY_CONFIG, SPAWN_CHANCES, UNLOCK_THRESHOLDS, STORY_ORDER_CONFIG } from './data/gameConfig.js';
import { playSound, playMergeSound } from './audio.js';
import {
  showToast,
  animateCellPop,
  triggerMergeEffects,
  moveItem3D,
  updateUI,
  animateRewardFly,
  renderGrid, updateMenuNotification
} from './ui.js';
import { saveGame } from './gameManager.js';
import { closeModal, openLevelUpModal, openStoryModal } from './modals.js';
import * as haptics from './haptics.js';

export function getEmptyGridCells() {
    return gameState.gridData.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
}

export function getAvailableEmptyCells() {
    return gameState.gridData.map((val, idx) => (val === null && !gameState.lockedCells.includes(idx)) ? idx : null).filter(val => val !== null);
}

export function getCurrentPlayerLevel() {
    // Итерируем в обратном порядке для эффективности
    for (let i = UNLOCK_THRESHOLDS.length - 1; i >= 0; i--) {
        const levelInfo = UNLOCK_THRESHOLDS[i];
        if (gameState.score >= levelInfo.scoreStart) {
            return levelInfo.level;
        }
    }
    return 1; // На случай, если что-то пойдет не так
}

export function isDiscovered(category, level) {
    const key = `${category}-${level}`;
    return !!gameState.discoveredItems[key];
}

export function markItemAsDiscovered(category, level) {
    const key = `${category}-${level}`;
    if (!gameState.discoveredItems[key]) {
        gameState.discoveredItems[key] = true;
    }
}

export function regenerateEnergy() {
    if (gameState.energy < CONFIG.MAX_ENERGY) {
        gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + CONFIG.ENERGY_REGEN_AMOUNT);
        saveGame();
        DOMElements.energy.value.innerText = gameState.energy;
    }
}

export function restoreGeneratorsEnergy() {
    let changed = false;
    const now = Date.now();
    gameState.gridData.forEach(item => {
        if (item && item.isGenerator && item.generatorKey !== 'bonus_chest') {
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

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function formatTimePlayed(ms) {
    if (!ms || ms < 1000) return "меньше минуты";
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let parts = [];
    if (days > 0) parts.push(`${days} д`);
    if (hours > 0) parts.push(`${hours} ч`);
    if (minutes > 0) parts.push(`${minutes} м`);
    if (parts.length === 0 && seconds > 0) return `${seconds} сек`;
    return parts.slice(0, 2).join(' ');
}

export function hasUnclaimedCollectionBonuses() {
    for (const catKey in CATEGORIES_CONFIG) {
        const category = CATEGORIES_CONFIG[catKey];
        for (const item of category.items) {
            const itemKey = `${catKey}-${item.level}`;
            const discovered = isDiscovered(catKey, item.level);
            const bonusClaimed = !!gameState.claimedCollectionBonuses[itemKey];
            if (discovered && !bonusClaimed) {
                return true;
            }
        }
    }
    return false;
}

export function hasUnclaimedAchievements() {
    for (const key in ACHIEVEMENTS_DATA) {
        const achievement = ACHIEVEMENTS_DATA[key];
        const progress = playerProfile[key] || 0;
        for (let i = 0; i < achievement.tiers.length; i++) {
            const tier = achievement.tiers[i];
            const isUnlocked = progress >= tier.goal;
            const isClaimed = gameState.claimedAchievements[`${achievement.id}_${i}`];
            if (isUnlocked && !isClaimed) {
                return true;
            }
        }
    }
    return false;
}

export function hasNewStoryUpdate() {
    /*if (!gameState.storyState.unlocked) return false;
    const playerLevel = getCurrentPlayerLevel();

    for (const storyId in STORY_DATA) {
        const story = STORY_DATA[storyId];
        const progress = gameState.storyState.progress[storyId] || { currentChapter: 1, currentStep: 0, completed: false };

        // Пропускаем сюжет, если уровень игрока недостаточен
        if (story.requiredLevel && playerLevel < story.requiredLevel) {
            continue;
        }

        if (progress.completed) continue;

        const chapter = story.chapters[progress.currentChapter];
        if (chapter && chapter.steps[progress.currentStep]) {
            return true; // Найдена доступная для продолжения история
        }
    }*/
    return false;
}

export function advanceStoryStep(fromModal = false) {
    const activeStoryId = gameState.storyState.activeStoryId;
    if (!gameState.storyState.unlocked || !activeStoryId) return;

    const story = STORY_DATA[activeStoryId];
    // Если прогресса для этой истории еще нет, создаем его "на лету"
    if (!gameState.storyState.progress[activeStoryId]) {
        gameState.storyState.progress[activeStoryId] = { currentChapter: 1, currentStep: 0, completed: false };
    }
    const progress = gameState.storyState.progress[activeStoryId];

    if (!story || progress.completed) return;

    const chapter = story.chapters[progress.currentChapter];
    if (!chapter) return;

    const step = chapter.steps[progress.currentStep];
    if (!step) return;

    // Обработка выполнения задач
    if (step.type === 'task') {
        if (step.task.type === 'spend_coins') {
            if (gameState.coins < step.task.amount) {
                showToast(`Недостаточно монет! Нужно ${step.task.amount}`, 'error');
                return;
            }
            gameState.coins -= step.task.amount;
            // В идеале, здесь должна быть отдельная статистика потраченных монет
            haptics.hapticSuccess();
            playSound(DOMElements.sfxCoin);
            playSound(DOMElements.sfxOrderComplete);
        }
        // Обработка награды
        if (step.reward) {
            if (step.reward.type === 'generator') {
                const generatorData = GENERATORS_DATA[step.reward.key];
                const rewardLevel = step.reward.level;

                if (generatorData && generatorData.isSpecial) {
                    // Специальный генератор (например, bonus_chest) с конечными зарядами
                    let charges = 1; // Значение по умолчанию
                    if (step.reward.key === 'bonus_chest') {
                        if (rewardLevel === 2) {
                            charges = 3;
                        } else if (rewardLevel === 3) {
                            charges = 5;
                        }
                    }

                    gameState.rewardQueue.push({
                        isGenerator: true,
                        generatorKey: step.reward.key,
                        genLevel: rewardLevel,
                        genCharges: charges
                    });
                } else {
                    // Обычный, перезаряжаемый генератор
                    gameState.rewardQueue.push({ isGenerator: true, generatorKey: step.reward.key, genLevel: rewardLevel, genEnergy: GEN_ENERGY_CONFIG[rewardLevel].max, lastRegenTime: Date.now() });
                }

                markItemAsDiscovered(step.reward.key, rewardLevel);
                // Если генератор сюжетный, сразу разблокируем его категории для заказов
                if (generatorData && generatorData.isStoryOnly) {
                    generatorData.categories.forEach(cat => {
                        if (!gameState.activeCategories.includes(cat)) {
                            gameState.activeCategories.push(cat);
                        }
                    });
                }
            } else if (step.reward.type === 'item') {
                gameState.rewardQueue.push({ category: step.reward.category, level: step.reward.level });
                markItemAsDiscovered(step.reward.category, step.reward.level);
            }
        }
    }

    // Переход к следующему шагу
    progress.currentStep++;
    if (progress.currentStep >= chapter.steps.length) {
        progress.currentChapter++;
        progress.currentStep = 0;
        // Если следующей главы нет, помечаем сюжет как завершенный
        if (!story.chapters[progress.currentChapter]) {
            progress.completed = true;
        }
    }

    // Перерисовываем модальное окно с новым шагом, если оно было открыто
    if (fromModal) openStoryModal();
    updateMenuNotification();
    updateUI();
    saveGame();
}

export function claimReward(rewardIndex, startElement) {
    const emptyCells = getEmptyGridCells();
    if (emptyCells.length === 0) {
        showToast("Нет свободного места на поле!", "error");
        return;
    }

    haptics.hapticMedium();
    // Немедленно удаляем элемент из UI, чтобы избежать двойного клика
    startElement.style.pointerEvents = 'none';
    startElement.style.opacity = '0.5';

    playSound(DOMElements.sfxClaimReward);

    const reward = gameState.rewardQueue[rewardIndex];
    const targetCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const targetCellElement = DOMElements.grid.children[targetCellIndex];

    let icon = '';
    if (reward.isGenerator) {
        const genInfo = GENERATORS_DATA[reward.generatorKey];
        const lvl = reward.genLevel || 1;
        const iconPath = genInfo.icons[lvl - 1];
        icon = `<img src="${iconPath}" alt="">`;
    } else if (reward.isUpgradePart) {
        icon = `<img src="assets/icons/upgrade_part.png" alt="">`;
    } else if (reward.isMagicTool) {
        icon = `<img src="assets/icons/magic_tool.png" alt="">`;
    } else if (reward.isCopyBubble) {
      icon = `<img src="assets/icons/copy_bubble.png" alt="">`;
    }
    else if (reward.isGeneratorPart) {
        const genInfo = GENERATORS_DATA[reward.generatorKey];
        const lvl = reward.level || 1;
        const partInfo = genInfo.parts[lvl - 1];
        icon = `<img src="${partInfo.icon}" alt="">`;
    } else if (reward.category && reward.level) {
        // Обычный предмет из категории
        const itemInfo = CATEGORIES_CONFIG[reward.category]?.items[reward.level - 1];
        if (itemInfo) {
            icon = `<img src="${itemInfo.icon}" alt="">`;
        }
    }

    moveItem3D(startElement, targetCellElement, icon).then(() => {
        // Удаляем награду из массива только после завершения анимации
        gameState.rewardQueue.splice(rewardIndex, 1);

        let finalItem = reward;
        // Проверяем, не должен ли предмет стать генератором предметов
        if (reward.category && reward.level) {
            const itemInfo = CATEGORIES_CONFIG[reward.category]?.items[reward.level - 1];
            if (itemInfo && itemInfo.becomesGenerator) {
                const genInfo = itemInfo.becomesGenerator;
                finalItem = {
                    isItemGenerator: true,
                    category: reward.category,
                    level: reward.level,
                    generatedCategory: genInfo.category,
                    charges: genInfo.charges,
                };

                // Разблокируем новую категорию для заказов, если это впервые
                if (!gameState.unlockedItemGenCategories.includes(genInfo.category)) {
                    gameState.unlockedItemGenCategories.push(genInfo.category);
                    showToast(`Новая категория "${CATEGORIES_CONFIG[genInfo.category].name}" теперь доступна в заказах!`, "success");
                }
            }
        }
        gameState.gridData[targetCellIndex] = finalItem;

        saveGame();
        updateUI(); // Перерисовывает и очередь, и поле
        animateCellPop(targetCellIndex);
        playSound(DOMElements.sfxSpawn);
    });
}

export function claimItemBonus(category, level, element) {
    const key = `${category}-${level}`;
    // Проверяем, что бонус еще не был получен
    if (gameState.claimedCollectionBonuses[key]) {
        return;
    }

    // Отмечаем бонус как полученный
    gameState.claimedCollectionBonuses[key] = true;

    // Добавляем монеты
    const bonusAmount = level * CONFIG.COLLECTION_BONUS_BASE_VALUE;
    gameState.coins += bonusAmount;
    haptics.hapticSuccess();
    playSound(DOMElements.sfxCoin);
    playerProfile.totalCoinsEarned += bonusAmount;

    // Анимация полета монетки
    animateRewardFly(element, DOMElements.coins.container, `<img src="assets/icons/coin.png" alt="монета">`, 1, 'coin');

    // Обновляем вид элемента в модалке и запускаем анимации
    element.classList.remove('bonus-unclaimed');
    element.classList.add('bonus-claiming'); // Добавляем класс для анимации пульсации
    element.onclick = null; // Убираем возможность повторного клика

    const bonusIcon = element.querySelector('.unclaimed-bonus-icon');
    if (bonusIcon) {
        bonusIcon.classList.add('exploding'); // Добавляем класс для анимации "взрыва"
    }

    // Обновляем счетчик монет (можно сделать чуть раньше, чем закончится полет)
    setTimeout(() => {
        DOMElements.coins.value.innerText = gameState.coins;
        updateMenuNotification();
        saveGame();
    }, 300);

    // Убираем иконку и класс пульсации после завершения их анимаций
    setTimeout(() => {
        if (bonusIcon) bonusIcon.remove();
        element.classList.remove('bonus-claiming');
    }, 400); // Должно совпадать с длительностью анимаций
}

export function claimAchievementReward(achievementId, tierIndex, buttonElement) {
  const achievement = ACHIEVEMENTS_DATA[achievementId];
  if (!achievement) return;

  const tier = achievement.tiers[tierIndex];
  const progress = playerProfile[achievementId] || 0;
  const key = `${achievementId}_${tierIndex}`;

  if (progress >= tier.goal && !gameState.claimedAchievements[key]) {
    // Добавляем награду
    gameState.coins += tier.reward;
    haptics.hapticSuccess();
    playSound(DOMElements.sfxCoin);
    // Отмечаем как полученную
    gameState.claimedAchievements[key] = true;

    // Анимация
    animateRewardFly(buttonElement, DOMElements.coins.container, `<img src="assets/icons/coin.png" alt="монета">`, 5, 'coin');

    // Обновляем UI
    buttonElement.classList.add('claimed');
    buttonElement.disabled = true;
    buttonElement.innerHTML = '<img src="assets/icons/checkmark.png" alt="Выполнено">';
    buttonElement.onclick = null;

    DOMElements.coins.value.innerText = gameState.coins;
    updateMenuNotification();
    saveGame();
  }
}

export function deleteItem(index) {
  const item = gameState.gridData[index];
  // Проверяем, что предмет существует и его можно продать (не генератор, не заблокирован)
  if (index === -1 || !item || item.isGenerator || item.isBlocked || item.isUpgradePart || item.isMagicTool || item.isCopyBubble) {
    closeModal();
    return;
  }

  // Получаем DOM-элемент ячейки ДО того, как UI обновится
  const cellElement = DOMElements.grid.children[index];

  // Цена продажи зависит от уровня предмета. Для деталей генератора тоже есть уровень.
  const sellPrice = (item.level || 1) * 3;

  // Запускаем анимацию полета монеток. Она возьмет координаты ячейки, пока предмет еще в ней.
  animateRewardFly(cellElement, DOMElements.coins.container, `<img src="assets/icons/coin.png" alt="монета">`, 5, 'coin');

  // Теперь обновляем состояние игры
  gameState.coins += sellPrice;
  haptics.hapticSuccess();
  playSound(DOMElements.sfxCoin);
  playerProfile.totalCoinsEarned += sellPrice;
  gameState.gridData[index] = null;

  closeModal();
  saveGame();
  // Обновляем UI. Это сотрет предмет с поля и обновит счетчик монет.
  // Анимация монеток будет продолжаться параллельно.
  updateUI();
}

export function clearBlockedItemWithCoins(index) {
  if (gameState.coins < CONFIG.BLOCKED_CLEAR_COST_COINS) {
    showToast(`<img src="assets/icons/coin.png" class="toast-icon" alt=""> Недостаточно монет для расчистки (нужно ${CONFIG.BLOCKED_CLEAR_COST_COINS})!`, "error");
    closeModal();
    return;
  }

  const item = gameState.gridData[index];
  gameState.coins -= CONFIG.BLOCKED_CLEAR_COST_COINS;
  delete item.isBlocked; // Просто убираем флаг блокировки
  // После снятия блокировки предмет считается открытым и добавляется в коллекцию.
  markItemAsDiscovered(item.category, item.level);
  closeModal();
  saveGame();
  updateUI();
  // showToast("Завал успешно расчищен!", "success");
  setTimeout(() => {
    animateCellPop(index);
    playSound(DOMElements.sfxSpawn);
  }, 50);
}
export function rechargeGeneratorWithCoins(index) {
  const item = gameState.gridData[index];
  if (!item || !item.isGenerator || item.generatorKey === 'bonus_chest') {
    closeModal();
    return;
  }

  if (gameState.coins < CONFIG.GENERATOR_RECHARGE_COST) {
    showToast(`<img src="assets/icons/coin.png" class="toast-icon" alt=""> Недостаточно монет (нужно ${CONFIG.GENERATOR_RECHARGE_COST})!`, "error");
    closeModal();
    return;
  }

  const lvl = item.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];

  gameState.coins -= CONFIG.GENERATOR_RECHARGE_COST;
  item.genEnergy = config.max;
  item.lastRegenTime = Date.now();
  haptics.hapticSuccess();
  playSound(DOMElements.sfxClaimReward);

  closeModal();
  saveGame();
  updateUI();
  showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Энергия генератора полностью восстановлена!`, "success");
}

export function rechargePlayerEnergyWithCoins() {
  if (gameState.coins < CONFIG.ENERGY_RECHARGE_COST_COINS) {
    showToast(`<img src="assets/icons/coin.png" class="toast-icon" alt=""> Недостаточно монет (нужно ${CONFIG.ENERGY_RECHARGE_COST_COINS})!`, "error");
    closeModal();
    return;
  }

  if (gameState.energy >= CONFIG.MAX_ENERGY) {
    showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Ваша энергия уже полная!`, "error");
    closeModal();
    return;
  }

  gameState.coins -= CONFIG.ENERGY_RECHARGE_COST_COINS;
  gameState.energy = CONFIG.MAX_ENERGY;
  haptics.hapticSuccess();
  playSound(DOMElements.sfxClaimReward);

  closeModal();
  saveGame();
  updateUI();
  showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Энергия полностью восстановлена!`, "success");
}

function createUpgradedItem(category, level) {
    markItemAsDiscovered(category, level);
    const newItemInfo = CATEGORIES_CONFIG[category]?.items[level - 1];

    if (newItemInfo && newItemInfo.becomesGenerator) {
        const genInfo = newItemInfo.becomesGenerator;

        // Разблокируем новую категорию для заказов, если это впервые
        if (!gameState.unlockedItemGenCategories.includes(genInfo.category)) {
            gameState.unlockedItemGenCategories.push(genInfo.category);
            showToast(`Новая категория "${CATEGORIES_CONFIG[genInfo.category].name}" теперь доступна в заказах!`, "success");
        }

        return {
            isItemGenerator: true,
            category: category,
            level: level,
            generatedCategory: genInfo.category,
            charges: genInfo.charges,
        };
    }

    return { category: category, level: level };
}

function handleUnblockMerge(fromIdx, toIdx, source) {
  if (source.level >= CONFIG.MAX_ITEM_LEVEL) return false;
  const nextLevel = source.level + 1;
  haptics.hapticSuccess();
  playMergeSound(nextLevel);
  gameState.gridData[fromIdx] = null;
  const newItem = createUpgradedItem(source.category, nextLevel);
  newItem.isBlocked = false; // Убедимся, что предмет разблокирован
  gameState.gridData[toIdx] = newItem;
  triggerMergeEffects(toIdx, source.category);
  // showToast("Паутина снята!", "success");
  return true;
}

function handleGeneratorUpgrade(partIdx, genIdx, generator) {
  const lvl = generator.genLevel || 1;
  if (lvl >= CONFIG.MAX_GENERATOR_LEVEL) return false;
  haptics.hapticSuccess();
  playSound(DOMElements.sfxMerge);
  const nextLvl = lvl + 1;
  gameState.gridData[partIdx] = null;
  gameState.gridData[genIdx] = {
    ...generator,
    genLevel: nextLvl,
    genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
    lastRegenTime: Date.now()
  };
  markItemAsDiscovered(generator.generatorKey, nextLvl);
  triggerMergeEffects(genIdx, GENERATORS_DATA[generator.generatorKey].categories[0]);
  // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
  return true;
}

function handleGeneratorPartMerge(fromIdx, toIdx, source) {
  haptics.hapticSuccess();
  playSound(DOMElements.sfxMerge);

  // Гарантируем, что исходная деталь, которую мы сливаем, будет добавлена в коллекцию.
  markItemAsDiscovered(`${source.generatorKey}_part`, source.level);

  if (source.level >= 3) { // Max level for parts is 3. Merging two L3 parts.
    gameState.gridData[fromIdx] = null;
    // Create a new L1 generator
    gameState.gridData[toIdx] = {
      isGenerator: true,
      generatorKey: source.generatorKey,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
    markItemAsDiscovered(source.generatorKey, 1);
    triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
    // showToast(`🛠️ Собран новый генератор!`, "success");
    return true;
  } else { // Levels 1 and 2 merge up
    gameState.gridData[fromIdx] = null;
    markItemAsDiscovered(`${source.generatorKey}_part`, source.level + 1);
    gameState.gridData[toIdx] = { isGeneratorPart: true, generatorKey: source.generatorKey, level: source.level + 1 };
    triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
    return true;
  }
}

function handleItemUpgradeWithTool(toolIdx, itemIdx, regularItem) {
  if (regularItem.level >= CONFIG.MAX_ITEM_LEVEL) return false;
  const nextLvl = regularItem.level + 1;
  haptics.hapticSuccess();
  playMergeSound(nextLvl);
  gameState.gridData[toolIdx] = null;
  gameState.gridData[itemIdx] = createUpgradedItem(regularItem.category, nextLvl);
  triggerMergeEffects(itemIdx, regularItem.category);
  // showToast(`✨ Предмет улучшен до уровня ${nextLvl}!`, "success");
  return true;
}

function handleItemMerge(fromIdx, toIdx, source) {
  if (source.level >= CONFIG.MAX_ITEM_LEVEL) return false;

  const nextLevel = source.level + 1;
  haptics.hapticSuccess();
  playMergeSound(nextLevel);

  // Стандартное слияние
  gameState.gridData[fromIdx] = null;
  gameState.gridData[toIdx] = createUpgradedItem(source.category, nextLevel);

  triggerMergeEffects(toIdx, source.category);
  return true;
}

function handleGeneratorMerge(fromIdx, toIdx, source) {
  haptics.hapticSuccess();
  playSound(DOMElements.sfxMerge);
  if (source.generatorKey === 'bonus_chest') {
    const currentLevel = source.genLevel || 1;
    if (currentLevel === 1) { // Слияние L1 -> L2
      gameState.gridData[fromIdx] = null;
      gameState.gridData[toIdx] = {
        isGenerator: true,
        generatorKey: 'bonus_chest',
        genLevel: 2,
        genCharges: 3,
      };
      triggerMergeEffects(toIdx, 'stationery');
      markItemAsDiscovered('bonus_chest', 2);
      return true;
    } else if (currentLevel === 2) { // Слияние L2 -> L3
      gameState.gridData[fromIdx] = null;
      gameState.gridData[toIdx] = {
        isGenerator: true,
        generatorKey: 'bonus_chest',
        genLevel: 3,
        genCharges: 5,
      };
      triggerMergeEffects(toIdx, 'stationery');
      markItemAsDiscovered('bonus_chest', 3);
      return true;
    }
    return false; // Нельзя объединять L3 и выше
  }

  const lvl = source.genLevel || 1;
  if (lvl >= CONFIG.MAX_GENERATOR_LEVEL) return false;
  const nextLvl = lvl + 1;
  gameState.gridData[fromIdx] = null;
  gameState.gridData[toIdx] = {
    isGenerator: true,
    generatorKey: source.generatorKey,
    genLevel: nextLvl,
    genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
    lastRegenTime: Date.now()
  };
  markItemAsDiscovered(source.generatorKey, nextLvl);
  triggerMergeEffects(toIdx, GENERATORS_DATA[source.generatorKey].categories[0]);
  // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
  return true;
}

function handleSwap(fromIdx, toIdx, source, target) {
  if (target && target.isBlocked) return false;
  haptics.hapticLight();
  [gameState.gridData[fromIdx], gameState.gridData[toIdx]] = [target, source];
  return true;
}

const MERGE_HANDLERS = [
  // Слияние с заблокированным предметом
  {
    canHandle: (s, t) => !s.isBlocked && t?.isBlocked && !s.isGenerator && !s.isItemGenerator && s.category === t.category && s.level === t.level && s.level < CONFIG.MAX_ITEM_LEVEL,
    execute: (from, to, src) => handleUnblockMerge(from, to, src)
  },
  {
    canHandle: (s, t) => t?.isMagicTool && s && !s.isGenerator && !s.isBlocked && !s.isUpgradePart && !s.isMagicTool && !s.isGeneratorPart && s.level < CONFIG.MAX_ITEM_LEVEL,
    execute: (from, to, src, trg) => handleItemUpgradeWithTool(to, from, src)
  },
  // Слияние двух деталей генератора
  {
    canHandle: (s, t) => t && s.isGeneratorPart && t.isGeneratorPart && s.generatorKey === t.generatorKey && s.level === t.level,
    execute: (from, to, src) => handleGeneratorPartMerge(from, to, src)
  },
  // Слияние двух генераторов
  {
    canHandle: (s, t) => {
      if (!t || !s.isGenerator || !t.isGenerator || s.generatorKey !== t.generatorKey || s.genLevel !== t.genLevel) {
        return false;
      }
      // Now check if they are mergeable based on level
      if (s.generatorKey === 'bonus_chest') {
        const level = s.genLevel || 1;
        return level === 1 || level === 2; // Можно объединять сундуки 1 и 2 уровней
      }
      return (s.genLevel || 1) < CONFIG.MAX_GENERATOR_LEVEL;
    },
    execute: (from, to, src) => handleGeneratorMerge(from, to, src)
  },
  // Улучшение генератора деталью (в обе стороны)
  {
    canHandle: (s, t) => s.isUpgradePart && t?.isGenerator && t.generatorKey !== 'bonus_chest' && (t.genLevel || 1) < CONFIG.MAX_GENERATOR_LEVEL,
    execute: (from, to, src, trg) => handleGeneratorUpgrade(from, to, trg)
  },
  {
    canHandle: (s, t) => t?.isUpgradePart && s.isGenerator && s.generatorKey !== 'bonus_chest' && (s.genLevel || 1) < CONFIG.MAX_GENERATOR_LEVEL,
    execute: (from, to, src, trg) => handleGeneratorUpgrade(to, from, src)
  },
  // Улучшение предмета магическим инструментом (в обе стороны)
  {
    canHandle: (s, t) => s.isMagicTool && t && !t.isGenerator && !t.isBlocked && !t.isUpgradePart && !t.isMagicTool && !t.isGeneratorPart && t.level < CONFIG.MAX_ITEM_LEVEL,
    execute: (from, to, src, trg) => handleItemUpgradeWithTool(from, to, trg)
  },
  // Копирование предмета пузырем (перетаскивание предмета НА пузырь)
  {
    canHandle: (s, t) => t?.isCopyBubble && s && !s.isGenerator && !s.isBlocked && !s.isGeneratorPart && !s.isUpgradePart && !s.isMagicTool && !s.isCopyBubble && (s.isItemGenerator || s.level < CONFIG.MAX_ITEM_LEVEL),
    execute: (from, to, src, trg) => {
      haptics.hapticSuccess();
      playSound(DOMElements.sfxMerge);
      // Пузырь в ячейке 'to' заменяется копией предмета из ячейки 'from'.
      // Предмет в 'from' НЕ удаляется, что приводит к дублированию.
      gameState.gridData[to] = {...src};
      triggerMergeEffects(to, src.category);
      return true;
    }
  },
  // Слияние двух обычных предметов (включая предметы-генераторы)
  {
    canHandle: (s, t) => t && !s.isBlocked && !t.isBlocked && !s.isGenerator && !t.isGenerator && !s.isUpgradePart && !t.isUpgradePart && !s.isGeneratorPart && !t.isGeneratorPart && !s.isMagicTool && !t.isMagicTool && !s.isCopyBubble && !t.isCopyBubble && s.category === t.category && s.level === t.level && s.level < CONFIG.MAX_ITEM_LEVEL,
    execute: (from, to, src) => handleItemMerge(from, to, src)
  },
];

export function isActionPossible(fromIdx, toIdx) {
    const source = gameState.gridData[fromIdx];
    const target = gameState.gridData[toIdx];

    if (!source) return false; // Нельзя перетаскивать пустую ячейку

    // Проверка на слияние
    for (const handler of MERGE_HANDLERS) {
        if (handler.canHandle(source, target)) {
            return true;
        }
    }

    // Проверка на обмен
    // Нельзя меняться местами с заблокированным предметом
    if (target && target.isBlocked) {
        return false;
    }

    // Можно меняться с пустой ячейкой или другим незаблокированным предметом
    return true;
}

export function executeMergeOrSwap(fromIdx, toIdx) {
  const source = gameState.gridData[fromIdx];
  const target = gameState.gridData[toIdx];

  for (const handler of MERGE_HANDLERS) {
    if (handler.canHandle(source, target)) {
      handler.execute(fromIdx, toIdx, source, target);
      playerProfile.totalMerges++;

      // --- NEW LOGIC FOR MERGE COUNTS ---
      let mergeCategory;
      // Case 1: Merging two regular items, or a regular item with a blocked one.
      if (source.category && !source.isGenerator && !source.isGeneratorPart && !source.isMagicTool && !source.isUpgradePart) {
        mergeCategory = source.category;
      }
      // Case 2: Merging two generators or two generator parts.
      else if ((source.isGenerator || source.isGeneratorPart) && target && (target.isGenerator || target.isGeneratorPart)) {
        mergeCategory = GENERATORS_DATA[source.generatorKey].categories[0];
      }
      // Case 3: Upgrading a generator with a part.
      else if (source.isUpgradePart && target && target.isGenerator) {
        mergeCategory = GENERATORS_DATA[target.generatorKey].categories[0];
      } else if (target && target.isUpgradePart && source.isGenerator) {
        mergeCategory = GENERATORS_DATA[source.generatorKey].categories[0];
      }
      // Case 4: Upgrading an item with a tool.
      else if (source.isMagicTool && target && target.category) {
        mergeCategory = target.category;
      } else if (target && target.isMagicTool && source.category) {
        mergeCategory = source.category;
      }

      if (mergeCategory) {
        playerProfile.mergeCounts[mergeCategory] = (playerProfile.mergeCounts[mergeCategory] || 0) + 1;
      }
      // --- END NEW LOGIC ---

      saveGame();
      updateUI();
      return;
    }
  }

  // Если ни один обработчик слияния не сработал, выполняем перемещение
  const wasSwapped = handleSwap(fromIdx, toIdx, source, target);
  if (wasSwapped) {
    playSound(DOMElements.sfxSwap);
  }
  saveGame();
  updateUI();

  if (wasSwapped) {
    setTimeout(() => {
      animateCellPop(toIdx);
      if (target) animateCellPop(fromIdx);
    }, 10); // Небольшая задержка, чтобы DOM успел обновиться
  }
}

export function getItemType(item) {
  if (item.isBlocked) return 'blocked';
  if (item.isGenerator) return 'generator';
  if (item.isItemGenerator) return 'itemGenerator';
  if (item.isGeneratorPart) return 'generatorPart';
  if (item.isUpgradePart || item.isMagicTool || item.isCopyBubble) return 'booster';
  return 'regular';
}

export function findClosestEmptyCell(fromIndex, emptyCells) {
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
  return closestCells[Math.floor(Math.random() * closestCells.length)];
}

export function triggerSpecialGenerator(generator, fromIndex) {
  if (generator.genCharges <= 0) {
    return;
  }

  const genData = GENERATORS_DATA[generator.generatorKey];
  if (!genData || !genData.drops || genData.drops.length === 0) {
    console.error(`No drops defined for special generator: ${generator.generatorKey}`);
    return;
  }

  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  haptics.hapticMedium();
  playSound(DOMElements.sfxGeneratorSpawn);
  generator.genCharges--;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  // --- NEW LOGIC: Weighted random drop ---
  const drops = genData.drops;
  const totalWeight = drops.reduce((sum, drop) => sum + drop.weight, 0);
  let random = Math.random() * totalWeight;
  let chosenDrop;

  for (const drop of drops) {
    if (random < drop.weight) {
      chosenDrop = drop;
      break;
    }
    random -= drop.weight;
  }
  if (!chosenDrop) { // Fallback
    chosenDrop = drops[drops.length - 1];
  }
  const newItem = { ...chosenDrop.item }; // Create a copy

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], `<img src="${newItem.icon}" alt="">`).then(() => {
    if (newItem.discoveryKey) {
      markItemAsDiscovered(newItem.discoveryKey, 1);
    }
    delete newItem.discoveryKey; // Clean up the object before placing it on the grid

    gameState.gridData[targetCellIndex] = newItem;
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    if (generator.genCharges <= 0) {
      gameState.gridData[fromIndex] = null;
    }
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
    playSound(DOMElements.sfxSpawn);
  });
}

export function triggerItemGenerator(generator, fromIndex) {
  if (generator.charges <= 0) {
    showToast("У этого предмета закончились заряды.", "error");
    return;
  }
  if (gameState.energy <= 0) {
    showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Упс! Недостаточно энергии игрока!`, "error");
    return;
  }
  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  haptics.hapticMedium();
  playSound(DOMElements.sfxGeneratorSpawn);
  gameState.energy--;
  playerProfile.totalEnergySpent++;
  generator.charges--;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  const newItemCategory = generator.generatedCategory;
  const itemInfo = CATEGORIES_CONFIG[newItemCategory].items[0]; // Всегда создаем 1-й уровень

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], `<img src="${itemInfo.icon}" alt="">`).then(() => {
    markItemAsDiscovered(newItemCategory, 1);
    gameState.gridData[targetCellIndex] = { category: newItemCategory, level: 1 };
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    if (generator.charges <= 0) {
      const generatorInfo = CATEGORIES_CONFIG[generator.category].items[generator.level - 1];
      gameState.gridData[fromIndex] = null; // Исчезает
      // showToast(`"${generatorInfo.name}" исчерпал себя и исчез.`, "success");
    }
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
    playSound(DOMElements.sfxSpawn);
  });
}

export function triggerRegularGenerator(generator, fromIndex) {
  restoreGeneratorsEnergy();
  const lvl = generator.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];

  if (generator.genEnergy === undefined) generator.genEnergy = config.max;

  if (generator.genEnergy <= 0) {
    showToast(`<img src="assets/icons/box.png" class="toast-icon" alt=""> Генератор истощен! Подождите, пока накопятся заряды.`, "error");
    return;
  }
  if (gameState.energy <= 0) {
    showToast(`<img src="assets/icons/energy.png" class="toast-icon" alt=""> Упс! Недостаточно энергии игрока!`, "error");
    return;
  }

  const emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) {
    showToast("Нет места для создания предмета!", "error");
    return;
  }

  haptics.hapticMedium();
  playSound(DOMElements.sfxGeneratorSpawn);
  if (generator.genEnergy === config.max) {
    generator.lastRegenTime = Date.now();
  }
  generator.genEnergy--;
  gameState.energy--;
  playerProfile.totalEnergySpent++;

  const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
  gameState.lockedCells.push(targetCellIndex);

  const genData = GENERATORS_DATA[generator.generatorKey];
  const spawnCategory = genData.isHybrid ? genData.categories[Math.random() < 0.5 ? 0 : 1] : genData.categories[0];

  const determineSpawnLevel = (generatorLevel, randomPercent) => {
    const chances = SPAWN_CHANCES[generatorLevel];
    if (!chances) return 1;
    for (const tier of chances) {
      if (randomPercent < tier.chance) return tier.level;
    }
    return 1;
  };
  const spawnLevel = determineSpawnLevel(lvl, Math.random() * 100);

  const itemInfo = CATEGORIES_CONFIG[spawnCategory].items[spawnLevel - 1];

  moveItem3D(DOMElements.grid.children[fromIndex], DOMElements.grid.children[targetCellIndex], `<img src="${itemInfo.icon}" alt="">`).then(() => {
    markItemAsDiscovered(spawnCategory, spawnLevel);
    gameState.gridData[targetCellIndex] = { category: spawnCategory, level: spawnLevel };
    gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== targetCellIndex);
    saveGame();
    updateUI();
    animateCellPop(targetCellIndex);
    playSound(DOMElements.sfxSpawn);
  });
}

export function triggerGenerator(generator, fromIndex) {
  const genData = GENERATORS_DATA[generator.generatorKey];
  if (genData.isSpecial) {
    triggerSpecialGenerator(generator, fromIndex);
  } else {
    triggerRegularGenerator(generator, fromIndex);
  }
}

export function checkProgressiveUnlocks() {
  UNLOCK_THRESHOLDS.forEach(threshold => {
    // Уровень считается достигнутым, если игрок набрал scoreStart этого уровня
    if (gameState.score >= threshold.scoreStart && !threshold.unlocked) {
      const previousLevel = threshold.level - 1;
      threshold.unlocked = true;

      // Воспроизводим звук, даем монеты и показываем тост при повышении уровня (кроме 1-го)
      if (threshold.level > 1) {
        playSound(DOMElements.sfxLevelUp); // Звук повышения уровня
        const coinReward = threshold.level * CONFIG.LEVEL_UP_COIN_MULTIPLIER;
        gameState.coins += coinReward;
        playerProfile.totalCoinsEarned += coinReward;

        let hasGiftBox = false;
        let hasNewGenerator = false;
        let newGeneratorName = '';
        let newGeneratorIcon = '';

        // Проверяем, должен ли этот уровень разблокировать генератор
        if (threshold.unlocksGenerator && gameState.lockedCategories.length > 0) {
          // Логика разблокировки нового генератора
          const newGenData = unlockNewGenerator(threshold);
          if (newGenData) {
            hasNewGenerator = true;
            newGeneratorName = newGenData.name;
            newGeneratorIcon = newGenData.icon;
          }
        } else {
          // Если генератор не выдается или все уже открыты, даем другую награду
          spawnLevelUpBonus(threshold.level);
          hasGiftBox = true;
        }

        openLevelUpModal(previousLevel, threshold.level, {
          coins: coinReward,
          giftBox: hasGiftBox,
          newGenerator: hasNewGenerator,
          newGeneratorName: newGeneratorName,
          newGeneratorIcon: newGeneratorIcon
        });

        animateRewardFly(DOMElements.level.container, DOMElements.coins.container, `<img src="assets/icons/coin.png" alt="монета">`, Math.min(10, Math.ceil(coinReward / 10)), 'coin');
      }
      updateUI(); // Обновляем UI, чтобы показать награду в очереди
    }
  });
}

function unlockNewGenerator(threshold) {
  // 1. Определяем, какой генератор будет разблокирован, по первой категории в списке.
  const representativeCategory = gameState.lockedCategories[0];
  const genKey = CATEGORIES_CONFIG[representativeCategory].generatorKey;
  const generatorData = GENERATORS_DATA[genKey];

  // 2. Находим ВСЕ категории, которые производит этот генератор.
  const categoriesToUnlock = generatorData.categories;

  // 3. Перемещаем все эти категории из locked в active.
  categoriesToUnlock.forEach(catToUnlock => {
    const indexInLocked = gameState.lockedCategories.indexOf(catToUnlock);
    if (indexInLocked > -1) {
      gameState.lockedCategories.splice(indexInLocked, 1);
    }
    if (!gameState.activeCategories.includes(catToUnlock)) {
      gameState.activeCategories.push(catToUnlock);
      gameState.newlyUnlockedCategories.push(catToUnlock);
    }
  });

  // 4. Добавляем сам генератор в очередь наград.
  gameState.rewardQueue.push({
    isGenerator: true,
    generatorKey: genKey,
    genLevel: 1,
    genEnergy: GEN_ENERGY_CONFIG[1].max,
    lastRegenTime: Date.now()
  });
  markItemAsDiscovered(genKey, 1);
  // showToast - убрали, теперь это в модальном окне
  return {
    name: generatorData.name,
    icon: generatorData.icons[0]
  };
}

export function spawnRandomExistingGenerator() {
  // 1. Получаем все уникальные ключи генераторов из активных категорий.
  const activeGeneratorKeys = [...new Set(gameState.activeCategories.map(cat => CATEGORIES_CONFIG[cat].generatorKey))];

  // 2. Фильтруем специальные генераторы, такие как bonus_chest.
  const regularGeneratorKeys = activeGeneratorKeys.filter(key => !GENERATORS_DATA[key].isSpecial && !GENERATORS_DATA[key].isStoryOnly);

  if (regularGeneratorKeys.length > 0) {
    // 3. Выбираем один случайным образом.
    const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
    const generatorData = GENERATORS_DATA[randomGenKey];

    // 4. Добавляем его в очередь наград.
    gameState.rewardQueue.push({
      isGenerator: true,
      generatorKey: randomGenKey,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    });
    markItemAsDiscovered(randomGenKey, 1);
    showToast(`<img src="assets/icons/box.png" class="toast-icon" alt=""> Серия завершена! Бонус: получен генератор "${generatorData.name}"!`, "story");
  } else {
    // Запасной вариант, если по какой-то причине нет активных обычных генераторов (маловероятно).
    spawnUpgradePart();
    showToast(`<img src="assets/icons/upgrade_part.png" class="toast-icon" alt=""> Серия завершена! Бонус: получена Новая деталь!`, "story");
  }
}

function spawnLevelUpBonus(level) {
    gameState.rewardQueue.push({
      isGenerator: true,
      generatorKey: 'bonus_chest',
      genLevel: 1,
      genCharges: 1
    });
    markItemAsDiscovered('bonus_chest', 1);
}

export function spawnUpgradePart() {
  gameState.rewardQueue.push({
    isUpgradePart: true,
    icon: 'assets/icons/upgrade_part.png',
    name: 'Новая деталь'
  });
  markItemAsDiscovered('upgrade_part', 1);
}

export function spawnMagicTool() {
  gameState.rewardQueue.push({
    isMagicTool: true,
    icon: 'assets/icons/magic_tool.png',
    name: 'Магические инструменты'
  });
  markItemAsDiscovered('magic_tool', 1);
}

export function spawnCopyBubble() {
  gameState.rewardQueue.push({
    isCopyBubble: true,
    icon: 'assets/icons/copy_bubble.png',
    name: 'Копирующий пузырь'
  });
  markItemAsDiscovered('copy_bubble', 1);
}

export function spawnGeneratorPart() {
  // 1. Get all unique generator keys from active categories.
  const activeGeneratorKeys = [...new Set(gameState.activeCategories.map(cat => CATEGORIES_CONFIG[cat].generatorKey))];

  // 2. Filter out special generators.
  const regularGeneratorKeys = activeGeneratorKeys.filter(key => !GENERATORS_DATA[key].isSpecial);

  if (regularGeneratorKeys.length > 0) {
    // 3. Pick one randomly.
    const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
    const generatorData = GENERATORS_DATA[randomGenKey];

    // 4. Add it to the reward queue.
    gameState.rewardQueue.push({
      isGeneratorPart: true,
      generatorKey: randomGenKey,
      level: 1
    });
    markItemAsDiscovered(`${randomGenKey}_part`, 1);
    // showToast(`⚙️ Получена деталь для "${generatorData.name}"!`, "success");
  }
}

export function generateOrder() {
  const isStoryRoll = Math.random() < CONFIG.ORDER_GENERATION_STORY_CHANCE;
  const hasActiveStory = gameState.orders.some(o => o.isStory);

  if (isStoryRoll && !hasActiveStory) {
    generateStoryOrder(1);
    return;
  }

  // --- Новая логика выбора персонажа ---
  // 1. Получаем имена персонажей, у которых уже есть заказы
  const activeCharacterNames = gameState.orders.map(o => o.character.name);
  // 2. Фильтруем список доступных персонажей, исключая уже активных
  const availableCharacters = CHARACTERS.filter(c => !activeCharacterNames.includes(c.name));
  // 3. Выбираем случайного персонажа из доступных. Если все заняты, выбираем из полного списка.
  const characterPool = availableCharacters.length > 0 ? availableCharacters : CHARACTERS;
  const char = characterPool[Math.floor(Math.random() * characterPool.length)];
  let baseCategory;
  if (gameState.newlyUnlockedCategories && gameState.newlyUnlockedCategories.length > 0) {
    baseCategory = gameState.newlyUnlockedCategories.shift();
  }

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
    const orderableCategories = [...gameState.activeCategories, ...gameState.unlockedItemGenCategories];
    const randomCat = (i === 0 && baseCategory)
      ? baseCategory
      : orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
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

export function generateStoryOrder(step, fixedChar = null) {
  let char;
  if (fixedChar) {
    char = fixedChar;
  } else {
    // --- Новая логика выбора персонажа ---
    const activeCharacterNames = gameState.orders.map(o => o.character.name);
    const availableCharacters = STORY_CHARACTERS.filter(c => !activeCharacterNames.includes(c.name));
    const characterPool = availableCharacters.length > 0 ? availableCharacters : STORY_CHARACTERS;
    char = characterPool[Math.floor(Math.random() * characterPool.length)];
    // --- Конец новой логики ---
  }

  const requestedItems = [];

  const orderConfig = STORY_ORDER_CONFIG[step];
  if (orderConfig && orderConfig.levels) {
    const orderableCategories = [...gameState.activeCategories, ...gameState.unlockedItemGenCategories];
    orderConfig.levels.forEach(level => {
      if (orderableCategories.length > 0) {
        const randomCat = orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
        requestedItems.push({ category: randomCat, level: level });
      }
    });
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
    showToast(`Появился персонаж с серийным заказом!`, "story");
  }
}

export function checkOrdersAvailability() {
  // 1. Сброс выделения и сбор всех требуемых предметов в Set для быстрой проверки
  const requiredItemsSet = new Set();
  gameState.orders.forEach(order => order.items.forEach(req => requiredItemsSet.add(`${req.category}-${req.level}`)));

  // 2. Создаем частотную карту доступных предметов на поле и одновременно подсвечиваем их
  const availableItemsMap = new Map();
  gameState.gridData.forEach((item, idx) => {
    if (!item) return;

    item.isAllocatedToOrder = false; // Сброс

    const isAvailableForOrder = item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isGeneratorPart && !item.isMagicTool && !item.isCopyBubble && !gameState.lockedCells.includes(idx);
    if (!isAvailableForOrder) return;

    const key = `${item.category}-${item.level}`;

    // Подсветка, если предмет нужен для любого из заказов
    if (requiredItemsSet.has(key)) {
      item.isAllocatedToOrder = true;
    }

    // Добавление в карту доступных предметов
    if (!availableItemsMap.has(key)) {
      availableItemsMap.set(key, []);
    }
    availableItemsMap.get(key).push(idx);
  });

  // 3. Проверяем каждый заказ на выполнимость
  gameState.orders.forEach((order) => {
    // Для каждого заказа создаем временную копию карты доступных предметов
    const tempAvailableMap = new Map(Array.from(availableItemsMap.entries()).map(([k, v]) => [k, [...v]]));
    let canComplete = true;
    const allocatedForThisOrder = [];

    for (const reqItem of order.items) {
      const key = `${reqItem.category}-${reqItem.level}`;
      const availableIndices = tempAvailableMap.get(key);

      if (availableIndices && availableIndices.length > 0) {
        const gridIndex = availableIndices.shift(); // "Берем" один предмет с поля
        allocatedForThisOrder.push(gridIndex);
      } else {
        canComplete = false; // Если нужного предмета нет, заказ невыполним
        break;
      }
    }

    order.canComplete = canComplete;
    order.allocatedIndices = order.canComplete ? allocatedForThisOrder : [];
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
    playSound(DOMElements.sfxOrderReady);
    setTimeout(() => {
      DOMElements.ordersList.scrollTo({ left: 0, behavior: 'smooth' });
    }, 50); // Небольшая задержка, чтобы DOM успел обновиться перед прокруткой
  }

}

export function completeOrder(id) {
  checkOrdersAvailability();
  const orderIndex = gameState.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return;

  const order = gameState.orders[orderIndex];
  if (!order.canComplete) {
    showToast("У вас нет необходимых предметов на поле!", "error");
    return;
  }

  // Находим карточку в DOM
  const cardElement = DOMElements.ordersList.querySelector(`#order-card-${id}`);
  const cellElements = document.querySelectorAll('.cell');
  const targetAvatarElement = cardElement ? cardElement.querySelector('.order-avatar-container') : null;

  // Используем предварительно рассчитанные индексы из checkOrdersAvailability
  const elementsToAnimate = order.allocatedIndices.map(idx => {
    const item = gameState.gridData[idx];
    return {
      idx: idx,
      icon: `<img src="${CATEGORIES_CONFIG[item.category].items[item.level - 1].icon}" alt="">`,
      level: item.level
    };
  });

  elementsToAnimate.forEach(el => {
    gameState.lockedCells.push(el.idx);
    gameState.gridData[el.idx] = null;
  });
  renderGrid();

  playSound(DOMElements.sfxFly);

  const animationPromises = elementsToAnimate.map(el => {
    gameState.score += el.level * CONFIG.ITEM_SCORE_MULTIPLIER;
    gameState.coins += el.level * CONFIG.COIN_MULTIPLIER;
    return moveItem3D(cellElements[el.idx], targetAvatarElement, el.icon).then(() => {
      gameState.lockedCells = gameState.lockedCells.filter(idx => idx !== el.idx);
    });
  });

  // After all items have flown to the card
  Promise.all(animationPromises).then(() => {
    // Теперь, когда предметы долетели, запускаем анимацию исчезновения карточки
    if (cardElement) {
      cardElement.classList.add('fade-out');
    }

    const coinsEarned = elementsToAnimate.reduce((sum, el) => sum + el.level * CONFIG.COIN_MULTIPLIER, 0);
    playerProfile.totalCoinsEarned += coinsEarned;
    playerProfile.totalOrdersCompleted++;
    const energyReward = order.isStory ? CONFIG.STORY_ORDER_ENERGY_REWARD : CONFIG.ORDER_ENERGY_REWARD;

    // Воспроизводим звук успешной сдачи заказа
    playSound(DOMElements.sfxOrderComplete);
    playSound(DOMElements.sfxCoin);
  haptics.hapticSuccess();

    // Анимация полета наград
    animateRewardFly(targetAvatarElement, DOMElements.coins.value, `<img src="assets/icons/coin.png" alt="монета">`, Math.min(10, Math.ceil(coinsEarned / 5)), 'coin');
    if (energyReward > 0) animateRewardFly(targetAvatarElement, DOMElements.energy.value, `<img src="assets/icons/energy.png" alt="энергия">`, energyReward, 'energy');

    // Wait for the card fade-out animation to complete
    setTimeout(() => {
      const wasStory = order.isStory;
      const currentStep = order.storyStep;
      const storyChar = order.character;
      gameState.orders.splice(orderIndex, 1);
      checkProgressiveUnlocks();
      gameState.energy = Math.min(CONFIG.MAX_ENERGY, gameState.energy + energyReward);

      if (wasStory) {
        if (currentStep < 3) {
          generateStoryOrder(currentStep + 1, storyChar);
          showToast(`Часть серии выполнена! Шаг ${currentStep + 1}/3 начался.`, "story");
        } else {
          const rand = Math.random();
          if (rand < 0.20) {
            // 20% шанс на подарочную коробку
            gameState.rewardQueue.push({
              isGenerator: true,
              generatorKey: 'bonus_chest',
              genLevel: 1, genCharges: 1
            });
            showToast(`<img src="assets/icons/box.png" class="toast-icon" alt=""> Серия завершена! Вы получили Подарочную коробку!`, "story");
          } else if (rand < 0.40) {
            // 20% шанс на деталь для улучшения
            spawnUpgradePart();
            showToast(`<img src="assets/icons/upgrade_part.png" class="toast-icon" alt=""> Серия завершена! Бонус: получена Новая деталь!`, "story");
          } else if (rand < 0.60) {
            // 20% шанс на магические инструменты
            spawnMagicTool();
            showToast(`<img src="assets/icons/magic_tool.png" class="toast-icon" alt=""> Серия завершена! Бонус: получены Магические инструменты!`, "story");
          } else if (rand < 0.80) {
            // 20% шанс на копирующий пузырь
            spawnCopyBubble();
            showToast(`<img src="assets/icons/copy_bubble.png" class="toast-icon" alt=""> Серия завершена! Бонус: получен Копирующий пузырь!`, "story");
          } else {
            // 20% шанс на случайный уже открытый генератор
            spawnRandomExistingGenerator();
          }
          generateOrder();
        }
      } else {
        generateOrder();
        spawnGeneratorPart();
      }

      saveGame();
      updateUI();
    }, CONFIG.ANIMATION.FADE_DURATION);
  });
}

export function findMergeablePair() {
    const grid = gameState.gridData;
    const mergeablePairs = [];

    for (let i = 0; i < grid.length; i++) {
        const source = grid[i];
        if (!source) continue;

        // Start j from i + 1 to avoid duplicate pairs and self-comparison
        for (let j = i + 1; j < grid.length; j++) {
            const target = grid[j];
            if (!target) continue;

            for (const handler of MERGE_HANDLERS) {
                // Check both directions as some handlers are not symmetrical
                if (handler.canHandle(source, target)) {
                    mergeablePairs.push([i, j]);
                    break;
                }
                if (handler.canHandle(target, source)) {
                    mergeablePairs.push([j, i]);
                    break;
                }
            }
        }
    }

    if (mergeablePairs.length > 0) {
        return mergeablePairs[Math.floor(Math.random() * mergeablePairs.length)];
    }

    return null; // No mergeable pair found
}

// --- DEBUG FUNCTIONS ---
// This function will be available in the browser console for development purposes.
function dev_addCoins(amount = 100000) {
    if (typeof amount !== 'number' || amount <= 0) {
        console.error("Please provide a positive number of coins to add.");
        return;
    }
    gameState.coins += amount;
    showToast(`✨ Добавлено ${amount.toLocaleString('ru-RU')} монет!`, 'success');
    updateUI();
    saveGame();
}

// Expose to console for debugging
window.dev_addCoins = dev_addCoins;
const levelContainerForCheat = document.querySelector('.menu-modal-title');
if (levelContainerForCheat) {
  levelContainerForCheat.addEventListener('click', () => {
    dev_addCoins(100000);
  });
}
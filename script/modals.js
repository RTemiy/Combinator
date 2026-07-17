import { DOMElements } from './dom.js';
import { gameState, playerProfile } from './state.js';
import { CONFIG, CATEGORIES_CONFIG, GENERATORS_DATA, GEN_ENERGY_CONFIG, STORY_DATA } from './config.js';
import {
  clearBlockedItemWithCoins,
  rechargeGeneratorWithCoins,
  deleteItem,
  isDiscovered,
  getItemType,
  hasUnclaimedAchievements,
  hasUnclaimedCollectionBonuses,
  generateOrder,
  getCurrentPlayerLevel
} from './gameLogic.js';
import { renderProfile, renderSettingsModal, renderAchievementsModal, renderCollectionModal } from './ui.js';
import { saveGame, startNewGame } from './gameManager.js';
import { showToast, updateUI } from './ui.js';

export function openStorySelectionModal() {
  if (!gameState.storyState.unlocked) {
    showToast("Сюжет пока недоступен.", "error");
    return;
  }

  const modal = DOMElements.storySelectionModal;
  let contentHTML = '';
  const playerLevel = getCurrentPlayerLevel();

  for (const storyId in STORY_DATA) {
    const story = STORY_DATA[storyId];
    const isLocked = story.requiredLevel && playerLevel < story.requiredLevel;

    if (isLocked) {
      contentHTML += `
        <div class="story-selection-card locked">
          <img src="${story.icon}" class="story-selection-icon" alt="${story.title}">
          <div class="story-selection-info">
            <h4>${story.title}</h4>
            <p>${story.description}</p>
            <div class="story-lock-reason">
              <img src="assets/icons/lock.png" alt="Замок">
              <span>Доступно с ${story.requiredLevel} уровня</span>
            </div>
          </div>
        </div>
      `;
    } else {
      const progress = gameState.storyState.progress[storyId] || { currentChapter: 1, currentStep: 0, completed: false };
      const status = progress.completed ? 'Завершено' : 'Продолжить';
      contentHTML += `
        <div class="story-selection-card" data-story-id="${story.id}">
          <img src="${story.icon}" class="story-selection-icon" alt="${story.title}">
          <div class="story-selection-info">
            <h4>${story.title}</h4>
            <p>${story.description}</p>
            <span class="story-status ${progress.completed ? 'completed' : ''}">${status}</span>
          </div>
        </div>
      `;
    }
  }

  modal.body.innerHTML = contentHTML;
  modal.overlay.classList.add('active', 'blocking');
}

export function closeStorySelectionModal() {
  DOMElements.storySelectionModal.overlay.classList.remove('active', 'blocking');
}

export function openStoryModal() {
  const activeStoryId = gameState.storyState.activeStoryId;
  if (!gameState.storyState.unlocked || !activeStoryId) {
    showToast("Сюжет пока недоступен.", "error");
    return;
  }

  const modal = DOMElements.storyModal;
  const story = STORY_DATA[activeStoryId];
  const progress = gameState.storyState.progress[activeStoryId];
  const chapter = story.chapters[progress.currentChapter];

  if (!chapter || progress.completed) {
    modal.title.textContent = story.title;
    modal.body.innerHTML = `<p style="text-align: center;">Вы завершили текущую сюжетную линию. Продолжение следует!</p>`;
    modal.actions.innerHTML = '';
    modal.overlay.classList.add('active', 'blocking');
    return;
  }
  
  const step = chapter.steps[progress.currentStep];
  if (!step) {
    closeStoryModal();
    return;
  }

  modal.title.textContent = 'Сюжет. ' + chapter.title;

  // Теперь мы берем иконку и имя прямо из объекта шага сюжета
  modal.body.innerHTML = `
        <div class="story-dialogue">
            <div class="story-char-container">
                <div class="story-char-avatar">
                    <img src="${step.character}" alt="${step.name}">
                </div>
                <div class="story-char-name">${step.name}</div>
            </div>
            <div class="story-text-bubble">
                <p>${step.text}</p>
            </div>
        </div>
    `;

  if (step.type === 'dialogue') {
    modal.actions.innerHTML = `<button id="story-continue-btn" class="modal-action-btn">Продолжить</button>`;
  } else if (step.type === 'task' && step.task.type === 'spend_coins') {
    modal.actions.innerHTML = `<button id="story-task-btn" class="modal-action-btn">${step.task.buttonText} (${step.task.amount} <img src="assets/icons/coin.png" class="inline-icon" />)</button>`;
  } else {
    modal.actions.innerHTML = '';
  }

  modal.overlay.classList.add('active', 'blocking');
}

export function closeStoryModal() {
  DOMElements.storyModal.overlay.classList.remove('active', 'blocking');
}

export function openTutorialModal() {
  const modal = DOMElements.tutorialModal;

  modal.body.innerHTML = `
    <div class="tutorial-section">
        <h4><img src="assets/icons/magic_tool.png" alt="Слияние">1. Объединяйте предметы</h4>
        <p>Перетаскивайте одинаковые предметы друг на друга, чтобы получить предмет более высокого уровня. Это основной способ получения новых вещей!</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/box.png" alt="Генераторы">2. Используйте генераторы</h4>
        <p>Нажимайте на генераторы (предметы с оранжевой/синей анимированной обводкой), чтобы создавать предметы. Это тратит энергию генератора и вашу личную энергию <img src="assets/icons/energy.png" class="inline-icon">.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/achievements.png" alt="Заказы">3. Выполняйте заказы</h4>
        <p>В верхней части экрана находятся заказы от клиентов. Собирайте нужные предметы и нажимайте "Сдать заказ", чтобы получить монеты и опыт.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/chain.png" alt="Информация">4. Узнайте больше о предметах</h4>
        <p>Нажмите на любой предмет на поле, чтобы открыть окно с информацией. В этом окне нажмите на иконку цепочки <img src="assets/icons/chain.png" class="inline-icon">, чтобы увидеть всю его линию эволюции.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/coin.png" alt="Ресурсы">5. Следите за ресурсами</h4>
        <p><b>Монеты</b> <img src="assets/icons/coin.png" class="inline-icon"> нужны для покупки улучшений и отмены заказов. <b>Энергия</b> <img src="assets/icons/energy.png" class="inline-icon"> нужна для использования генераторов. Оба ресурса восстанавливаются со временем.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/story_scroll.png" alt="Меню">6. Исследуйте игру</h4>
        <p>Нажмите на кнопку меню ☰, чтобы открыть <b>Сюжет</b>, посмотреть свою <b>Коллекцию</b> предметов и отследить <b>Достижения</b>. За их выполнение вы будете получать награды!</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="assets/icons/question.png" alt="Обучение">7. Возвращайтесь к обучению</h4>
        <p>Вы всегда можете вернуться к этому руководству, нажав на кнопку меню ☰ в правом верхнем углу и выбрав пункт "Обучение".</p>
    </div>
  `;

  modal.overlay.classList.add('active', 'blocking');
}

export function closeTutorialModal() {
  DOMElements.tutorialModal.overlay.classList.remove('active', 'blocking');
  playerProfile.hasSeenTutorial = true;
  saveGame();
}

export function showModal(options) {
  const { icon, title, subtitle, desc, actionButton, dangerButtons, infoButton, isBlocking } = options;
  const modal = DOMElements.infoModal;

  modal.icon.innerHTML = icon.startsWith('assets/') ? `<img src="${icon}" alt="">` : icon;
  modal.title.innerText = title;
  modal.subtitle.innerText = subtitle;
  modal.desc.innerHTML = desc; // Use innerHTML to support icons

  modal.infoBtn.style.display = infoButton ? 'block' : 'none';
  if (infoButton) {
    modal.infoBtn.onclick = infoButton.onClick;
  }

  modal.actionBtn.style.display = actionButton ? 'block' : 'none';
  if (actionButton) {
    modal.actionBtn.innerHTML = actionButton.text;
    modal.actionBtn.onclick = actionButton.onClick;
  }

  modal.dangerGroup.style.display = dangerButtons ? 'flex' : 'none';
  if (dangerButtons) {
    modal.confirmBtn.innerHTML = dangerButtons.confirmButtonText;
    modal.confirmBtn.onclick = dangerButtons.onConfirm;
  }

  modal.overlay.className = `modal-overlay active ${isBlocking ? 'blocking' : ''}`;
}

export function closeModal() {
  DOMElements.infoModal.overlay.className = 'modal-overlay';
}

export function openMenuModal() {
  closeAllModals();
  DOMElements.menuModal.achievementsNotificationDot.style.display = hasUnclaimedAchievements() ? 'block' : 'none';
  DOMElements.menuModal.collectionNotificationDot.style.display = hasUnclaimedCollectionBonuses() ? 'block' : 'none';
  DOMElements.menuModal.overlay.classList.add('active', 'blocking');
}

export function closeMenuModal() {
  DOMElements.menuModal.overlay.classList.remove('active', 'blocking');
}

export function openProfileModal() {
  renderProfile();
  DOMElements.profileModal.overlay.classList.add('active', 'blocking');
}

export function closeProfileModal() {
  DOMElements.profileModal.overlay.classList.remove('active', 'blocking');
}

export function openAchievementsModal() {
  renderAchievementsModal();
  DOMElements.achievementsModal.overlay.classList.add('active', 'blocking');
}

export function closeAchievementsModal() {
  DOMElements.achievementsModal.overlay.classList.remove('active', 'blocking');
}

export function openSettingsModal() {
  renderSettingsModal();
  DOMElements.settingsModal.overlay.classList.add('active', 'blocking');
}

export function closeSettingsModal() {
  DOMElements.settingsModal.overlay.classList.remove('active', 'blocking');
}

export function showCollectionModal() {
    renderCollectionModal();
    DOMElements.collectionModal.overlay.classList.add('active', 'blocking');
}

export function closeCollectionModal() {
  const modal = DOMElements.collectionModal;
  modal.overlay.classList.remove('active', 'blocking');
  setTimeout(() => {
    modal.body.innerHTML = '';
    modal.footer.innerHTML = '';
  }, 300);
}

export function closeDetailModal() {
  const modal = DOMElements.detailModal;
  modal.overlay.classList.remove('active', 'blocking');
  setTimeout(() => {
    modal.icon.innerHTML = '';
    modal.desc.innerHTML = '';
    modal.extraContent.innerHTML = '';
  }, 300);
}

function closeAllModals() {
    closeModal();
    closeDetailModal();
    closeCollectionModal();
    closeProfileModal();
    closeSettingsModal();
    closeAchievementsModal();
    closeStoryModal();
    closeStorySelectionModal();
    closeTutorialModal();
    closeMenuModal();
}

export function confirmReset() {
  showModal({
    icon: `<img src="assets/icons/warning.png" alt="Внимание">`,
    title: 'Сбросить весь прогресс?',
    subtitle: 'Полное обнуление',
    desc: 'Вы потеряете все свои открытые предметы, генераторы, очки уровня и текущие заказы. Это действие нельзя отменить.',
    dangerButtons: {
      confirmButtonText: 'Да, сбросить',
      onConfirm: () => {
        closeModal();
        setTimeout(() => {
          localStorage.removeItem(CONFIG.SAVE_KEY);
          startNewGame();
          updateUI();
          showToast("Игра полностью перезапущена", "success");
        }, 50);
      }
    },
    isBlocking: true,
  });
}

export function confirmCancelOrder(id) {
  const order = gameState.orders.find(o => o.id === id);
  if (!order || order.isStory) return;

  showModal({
    icon: `<img src="assets/icons/question.png" alt="Вопрос">`,
    title: 'Отменить заказ?',
    subtitle: 'Подтверждение действия',
    desc: `Вы уверены, что хотите отменить этот заказ? Это будет стоить ${CONFIG.COINS_PER_ORDER_CANCEL} монет.`,
    dangerButtons: {
      confirmButtonText: `Да, отменить (-${CONFIG.COINS_PER_ORDER_CANCEL}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
      onConfirm: () => {
        if (gameState.coins < CONFIG.COINS_PER_ORDER_CANCEL) {
          showToast(`<img src="assets/icons/coin.png" class="toast-icon" alt=""> Недостаточно монет для отмены (нужно ${CONFIG.COINS_PER_ORDER_CANCEL})!`, "error");
          closeModal();
          return;
        }
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

export function showCharacterById(id) {
    const order = gameState.orders.find(o => o.id === id);
    if (order) showCharacterModal(order);
}

export function showCharacterModal(order) {
  showModal({
    icon: `<img src="${order.character.icon}" alt="">`,
    title: order.character.name,
    subtitle: order.isStory ? `Важный гость (Серия)` : "Постоянный клиент",
    desc: order.character.desc || "Заглянул за покупками.",
  });
}

export function showItemInfoModal(item, index = -1) {
  const itemType = getItemType(item);
  const getOptions = MODAL_OPTIONS_GETTERS[itemType];
  if (getOptions) {
    const modalOptions = getOptions(item, index);
    showModal(modalOptions);
  }
}

function getBlockedItemModalOptions(item, index) {
  const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  return {
    icon: 'assets/icons/block.png',
    title: `Заблокированный: ${info.name}`,
    subtitle: 'Преграда',
    desc: 'Этот предмет за баррикадой. Чтобы его освободить, перетащите на него точно такой же предмет с поля, либо расчистите завал за монеты.',
    actionButton: {
      text: `Расчистить завал (-${CONFIG.BLOCKED_CLEAR_COST_COINS}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
      onClick: () => clearBlockedItemWithCoins(index)
    },
    isBlocking: false
  };
}

function getGeneratorModalOptions(item, index) {
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.genLevel || 1;

  if (item.generatorKey === 'bonus_chest') {
    const lvl = item.genLevel || 1;
    const iconPath = genInfo.icons[lvl - 1];
    return {
      icon: iconPath,
      title: `Подарочная коробка ${CONFIG.ROMAN_NUMERALS[lvl]}`,
      subtitle: 'Особый генератор',
      desc: `Этот генератор содержит редкие предметы. У него осталось ${item.genCharges} заряд(ов). Когда заряды закончатся, он исчезнет. Перетащите на него такую же коробку, чтобы улучшить и получить больше предметов.`,
      isBlocking: false,
    };
  }

  const config = GEN_ENERGY_CONFIG[lvl];
  const desc = `Создает предметы из своей категории.`;

  const iconPath = genInfo.icons[lvl - 1];
  const modalOptions = {
    icon: iconPath,
    title: `${genInfo.name} ${CONFIG.ROMAN_NUMERALS[lvl]}`,
    subtitle: `Генератор • Уровень ${CONFIG.ROMAN_NUMERALS[lvl]}`,
    desc: desc,
    infoButton: {
      onClick: () => showGeneratorDetailModal(item)
    }
  };

  if (item.genEnergy < config.max) {
    modalOptions.actionButton = {
      text: `Восстановить (-${CONFIG.GENERATOR_RECHARGE_COST}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
      onClick: () => rechargeGeneratorWithCoins(index),
    };
  }

  return modalOptions;
}

function getItemGeneratorModalOptions(item, index) {
  const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  const generatedCatInfo = CATEGORIES_CONFIG[item.generatedCategory];
  return {
    icon: itemInfo.icon,
    title: itemInfo.name,
    subtitle: `Предмет-генератор • ${item.charges} заряд(ов)`,
    desc: `Этот предмет может произвести предметы из категории "${generatedCatInfo.name}". После использования всех зарядов он исчезнет. Его также можно сдать в заказе.`,
    infoButton: {
      onClick: () => showItemDetailModal(item)
    },
    isBlocking: false
  };
}

function getBoosterModalOptions(item) {
  if (item.isUpgradePart) {
    return {
      icon: 'assets/icons/upgrade_part.png',
      title: 'Новая деталь',
      subtitle: 'Универсальный улучшитель',
      desc: 'Редкая деталь, полученная за выполнение особого заказа. Перетащите ее на любой генератор (кроме подарочных коробок), чтобы повысить его уровень.',
      isBlocking: false
    };
  }
  if (item.isMagicTool) {
    return {
      icon: 'assets/icons/magic_tool.png',
      title: 'Магические инструменты',
      subtitle: 'Универсальный улучшитель',
      desc: 'Волшебные инструменты, способные улучшить любой предмет на один уровень. Перетащите их на предмет, который хотите улучшить.',
      isBlocking: false
    };
  }
  if (item.isCopyBubble) {
    return {
      icon: 'assets/icons/copy_bubble.png',
      title: 'Копирующий пузырь',
      subtitle: 'Бустер-дубликатор',
      desc: 'Перетащите любой предмет (кроме генераторов и других бустеров) на этот пузырь, чтобы создать его точную копию. Пузырь при этом исчезнет.',
      isBlocking: false
    };
  }
  return {};
}

function getGeneratorPartModalOptions(item, index) {
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.level || 1;
  const partInfo = genInfo.parts[lvl - 1];
  const sellPrice = (item.level || 1) * 3;

  return {
    icon: partInfo.icon,
    title: partInfo.name,
    subtitle: `Деталь для сборки • Уровень ${item.level}`,
    desc: 'Часть для сборки нового генератора.',
    dangerButtons: {
      confirmButtonText: `Продать (+${sellPrice}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
      onConfirm: () => deleteItem(index)
    },
    infoButton: {
      onClick: () => showGeneratorPartDetailModal(item)
    },
    isBlocking: false
  };
}

function getRegularItemModalOptions(item, index) {
  const info = CATEGORIES_CONFIG[item.category].items[item.level - 1];
  const sellPrice = (item.level || 1) * 3;
  return {
    icon: info.icon,
    title: info.name,
    subtitle: `${CATEGORIES_CONFIG[item.category].name} • Уровень ${item.level}`,
    desc: 'Предмет для выполнения заказов и слияния.',
    dangerButtons: {
      confirmButtonText: `Продать (+${sellPrice}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
      onConfirm: () => deleteItem(index)
    },
    infoButton: {
      onClick: () => showItemDetailModal(item)
    },
    isBlocking: false
  };
}

const MODAL_OPTIONS_GETTERS = {
  blocked: getBlockedItemModalOptions,
  generator: getGeneratorModalOptions,
  itemGenerator: getItemGeneratorModalOptions,
  generatorPart: getGeneratorPartModalOptions,
  booster: getBoosterModalOptions,
  regular: getRegularItemModalOptions,
};

export function showCategoryProgressionModal(categoryKeyOrKeys, icon = 'assets/icons/chain.png') {
  const categoryKeys = Array.isArray(categoryKeyOrKeys) ? categoryKeyOrKeys : [categoryKeyOrKeys];
  if (categoryKeys.length === 0) return;
  const modal = DOMElements.detailModal; // Используем большой модал
  let progressionHTML = '';
  let modalTitle = 'Цепочка эволюции'; // Заголовок по умолчанию

  let itemDescription = '';
  let specificItemFound = false;

  // Если передан один ключ категории и иконка, пытаемся найти описание конкретного предмета
  if (categoryKeys.length === 1 && icon && icon !== 'assets/icons/chain.png') {
    const categoryKey = categoryKeys[0];
    const category = CATEGORIES_CONFIG[categoryKey];
    if (category) {
      // Иконка из DOM будет полным URL, а в конфиге - относительный путь.
      // Ищем предмет, чей путь к иконке совпадает с концом URL.
      const itemInfo = category.items.find(item => icon.endsWith(item.icon));
      if (itemInfo) {
        modalTitle = itemInfo.name;
        itemDescription = `<p class="modal-desc">${itemInfo.desc}</p>`;
        specificItemFound = true;
      }
    }
  }

  // Setup modal shell
  modal.title.innerText = modalTitle;
  modal.icon.innerHTML = `<img src="${icon}" alt="Иконка цепочки">`;
  if (specificItemFound) {
    modal.desc.innerHTML = itemDescription;
    modal.desc.style.display = 'block';
  } else {
    modal.desc.innerHTML = '';
    modal.desc.style.display = 'none';
  }
  modal.icon.style.display = 'flex';

  categoryKeys.forEach((key, index) => {
    const category = CATEGORIES_CONFIG[key];
    if (!category) return;

    if (index > 0) {
      progressionHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
    }

    // Если мы нашли конкретный предмет, заголовок для его цепочки будет другим, для консистентности
    const chainTitle = specificItemFound ? `Цепочка: ${category.name}` : category.name;
    progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${chainTitle}</h4>`;

    progressionHTML += `<div class="progression-container">`;
    category.items.forEach((item, itemIndex) => {
      const discovered = isDiscovered(key, item.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? `<img src="${item.icon}" alt="">` : `<img src="assets/icons/question.png" alt="Не открыто">`;
      progressionHTML += `
        <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : 'Не открыто'}">
          <div class="progression-item-icon">${itemIcon}</div>
          <div class="progression-item-level">${item.level}</div>
        </div>
      `;
      if (itemIndex < category.items.length - 1) {
        progressionHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    progressionHTML += '</div>';
  });

  modal.extraContent.innerHTML = progressionHTML;
  modal.overlay.classList.add('active', 'blocking');
}

export function showGeneratorDetailModal(item) {
  const modal = DOMElements.detailModal;
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.genLevel || 1;
  const iconPath = genInfo.icons[lvl - 1];

  // Setup modal shell
  modal.icon.innerHTML = `<img src="${iconPath}" alt="${genInfo.name}">`;
  modal.title.innerText = `${genInfo.name} ${CONFIG.ROMAN_NUMERALS[lvl]}`;
  modal.desc.style.display = 'block';
  modal.icon.style.display = 'flex';

  // 1. Description
  let desc = `<p class="modal-desc">${genInfo.desc} `;
  if (genInfo.isHybrid) {
    desc += `Производит предметы из категорий: ${genInfo.categories.map(c => CATEGORIES_CONFIG[c].name).join(' и ')}. `;
  }
  const cdSec = GEN_ENERGY_CONFIG[lvl].cooldown / 1000;
  const levelDescriptions = {
    1: `Базовый уровень. Создаёт предметы 1-го уровня. Восстанавливает 1 заряд каждые ${cdSec} сек.`,
    2: `Продвинутый ранг. Шансы получения: 80% (ур. 1), 20% (ур. 2). Заряд каждые ${cdSec} сек.`,
    3: `Профессиональный ранг. Шансы получения: 65% (ур. 1), 25% (ур. 2), 10% (ур. 3). Заряд каждые ${cdSec} сек.`,
    4: `Элитный ранг. Шансы получения: 50% (ур. 1), 30% (ур. 2), 15% (ур. 3), 5% (ур. 4). Заряд каждые ${cdSec} сек.`,
    5: `Легендарный ранг! Шансы: 30% (ур. 1), 30% (ур. 2), 25% (ур. 3), 10% (ур. 4), 5% (ур. 5). Самая быстрая перезарядка: ${cdSec} сек.`
  };
  desc += (levelDescriptions[lvl] || '') + '</p>';
  modal.desc.innerHTML = desc;

  // 2. Progression chain(s)
  let progressionHTML = '';
  const categoryKeys = genInfo.categories;
  categoryKeys.forEach((key, index) => {
    const category = CATEGORIES_CONFIG[key];
    if (!category) return;

    if (index > 0) {
      progressionHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
    }

    progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;

    progressionHTML += `<div class="progression-container">`;
    category.items.forEach((item, itemIndex) => {
      const discovered = isDiscovered(key, item.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? `<img src="${item.icon}" alt="">` : `<img src="assets/icons/question.png" alt="Не открыто">`;
      progressionHTML += `
              <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : 'Не открыто'}">
                  <div class="progression-item-icon">${itemIcon}</div>
                  <div class="progression-item-level">${item.level}</div>
              </div>
          `;
      if (itemIndex < category.items.length - 1) {
        progressionHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    progressionHTML += '</div>';
  });

  modal.extraContent.innerHTML = progressionHTML;
  modal.overlay.classList.add('active', 'blocking');
}

export function showItemDetailModal(item) {
  const modal = DOMElements.detailModal;
  const category = CATEGORIES_CONFIG[item.category];
  const itemInfo = category.items[item.level - 1];

  // Setup modal shell
  modal.icon.innerHTML = `<img src="${itemInfo.icon}" alt="">`;
  modal.title.innerText = itemInfo.name;
  modal.desc.style.display = 'block';
  modal.icon.style.display = 'flex';

  // 1. Description
  modal.desc.innerHTML = `<p class="modal-desc">${itemInfo.desc}</p>`;

  let progressionHTML = '';

  // --- Вспомогательная функция для отрисовки цепочки ---
  const renderProgressionChain = (cat, title, categoryKey) => {
    let chainHTML = `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${title}</h4>`;
    chainHTML += `<div class="progression-container">`;
    cat.items.forEach((progItem, itemIndex) => {
      const discovered = isDiscovered(categoryKey, progItem.level);
      const undiscoveredClass = discovered ? '' : 'undiscovered';
      const itemIcon = discovered ? `<img src="${progItem.icon}" alt="">` : `<img src="assets/icons/question.png" alt="Не открыто">`;
      chainHTML += `
          <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? progItem.name : 'Не открыто'}">
              <div class="progression-item-icon">${itemIcon}</div>
              <div class="progression-item-level">${progItem.level}</div>
          </div>
      `;
      if (itemIndex < cat.items.length - 1) {
        chainHTML += '<div class="progression-arrow-h">→</div>';
      }
    });
    chainHTML += '</div>';
    return chainHTML;
  };

  // progressionHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';

  // 2. Цепочка эволюции самого предмета
  progressionHTML += renderProgressionChain(category, `Цепочка: ${category.name}`, item.category);

  // 3. Цепочка производимых предметов (если применимо)
  if (item.isItemGenerator || itemInfo.becomesGenerator) {
    const genCategoryKey = item.generatedCategory || itemInfo.becomesGenerator.category;
    const genCategory = CATEGORIES_CONFIG[genCategoryKey];
    if (genCategory) {
      progressionHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';
      progressionHTML += renderProgressionChain(genCategory, `Производит: ${genCategory.name}`, genCategoryKey);
    }
  }

  modal.extraContent.innerHTML = progressionHTML;
  modal.overlay.classList.add('active', 'blocking');
}

export function showGeneratorPartDetailModal(item) {
  const modal = DOMElements.detailModal;
  const genInfo = GENERATORS_DATA[item.generatorKey];
  const lvl = item.level || 1;
  const partInfo = genInfo.parts[lvl - 1];
  
  // Setup modal shell
  modal.icon.innerHTML = `<img src="${partInfo.icon}" alt="${partInfo.name}">`;
  modal.title.innerText = `${partInfo.name} (Ур. ${lvl})`;
  modal.desc.style.display = 'block';
  modal.icon.style.display = 'flex';

  // Description
  modal.desc.innerHTML = `<p class="modal-desc">${partInfo.desc}</p>`;

  // Progression chain
  let progressionHTML = '';
  progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Цепочка сборки</h4>`;
  progressionHTML += `<div class="progression-container">`;

  const partHTML = (level) => {
    const currentPartInfo = genInfo.parts[level - 1];
    return `
        <div class="progression-item-square" title="${currentPartInfo.name}, Ур. ${level}">
            <div class="progression-item-icon">
                <img src="${currentPartInfo.icon}" alt="${currentPartInfo.name}">
            </div>
            <div class="progression-item-level">${level}</div>
        </div>
    `};

  const generatorHTML = `
        <div class="progression-item-square" title="${genInfo.name}, Ур. I">
            <div class="progression-item-icon">
                <img src="${genInfo.icons[0]}" alt="${genInfo.name}">
            </div>
            <div class="progression-item-level">I</div>
        </div>
    `;

  progressionHTML += partHTML(1);
  progressionHTML += '<div class="progression-arrow-h">→</div>';
  progressionHTML += partHTML(2);
  progressionHTML += '<div class="progression-arrow-h">→</div>';
  progressionHTML += partHTML(3);
  progressionHTML += '<div class="progression-arrow-h">→</div>';
  progressionHTML += generatorHTML;
  progressionHTML += '</div>';

  modal.extraContent.innerHTML = progressionHTML;
  modal.overlay.classList.add('active', 'blocking');
}
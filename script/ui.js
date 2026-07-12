import { DOMElements } from './dom.js';
import { gameState, playerProfile, gameSettings } from './state.js';
import { CONFIG, CATEGORIES_CONFIG, GENERATORS_DATA, ACHIEVEMENTS_DATA, UNLOCK_THRESHOLDS } from './config.js';
import {
  hasUnclaimedAchievements,
  hasUnclaimedCollectionBonuses,
  isDiscovered,
  getCurrentPlayerLevel,
  formatTimePlayed,
  checkOrdersAvailability
} from './gameLogic.js';
import { saveGame } from './gameManager.js';
import { playSound } from './audio.js';

export function applyTheme() {
  document.body.dataset.theme = gameSettings.theme;
}

export function updateUI() {
  checkOrdersAvailability();
  renderGrid();
  renderRewardQueue();
  renderOrders();
  DOMElements.coins.value.innerText = gameState.coins;
  DOMElements.energy.value.innerText = gameState.energy;
  DOMElements.level.text.innerText = getCurrentPlayerLevel();
  updateLevelProgressBar();
  updateMenuNotification();
}

export function createGrid() {
  DOMElements.grid.innerHTML = '';
  // Динамически устанавливаем количество строк и столбцов из конфига
  DOMElements.grid.style.gridTemplateColumns = `repeat(${CONFIG.GRID_COLS}, 1fr)`;
  DOMElements.grid.style.gridTemplateRows = `repeat(${CONFIG.GRID_ROWS}, 1fr)`;

  for (let i = 0; i < CONFIG.GRID_COLS * CONFIG.GRID_ROWS; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    DOMElements.grid.appendChild(cell);
  }
}

export function updateLevelProgressBar() {
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

export function updateMenuNotification() {
  const hasNotifications = hasUnclaimedAchievements() || hasUnclaimedCollectionBonuses();
  DOMElements.menuNotificationDot.style.display = hasNotifications ? 'block' : 'none';
}

export function renderRewardQueue() {
  const panel = DOMElements.rewardQueuePanel;
  panel.innerHTML = '';
  const queue = gameState.rewardQueue;
  const count = queue.length;

  for (let i = 0; i < count; i++) {
    const reward = queue[i];
    const indexInStack = count - 1 - i;
    const rewardElem = document.createElement('div');
    rewardElem.classList.add('reward-item');

    if (i === count - 1) {
      rewardElem.classList.add('claimable');
      rewardElem.dataset.action = 'claim-reward';
      rewardElem.dataset.index = i;
    }

    rewardElem.style.transform = `translateY(${indexInStack * 8}px) scale(${1 - indexInStack * 0.05})`;
    rewardElem.style.zIndex = 10 - indexInStack;

    let iconHTML = '';
    let title = '';
    if (reward.isGenerator) {
        const genInfo = GENERATORS_DATA[reward.generatorKey];
        const lvl = reward.genLevel || 1;
        iconHTML = `<img src="${genInfo.icons[lvl - 1]}" alt="${genInfo.name}" style="width: 2.5rem; height: 2.5rem;">`;
        title = `Забрать: ${genInfo.name}`;
    } else if (reward.isGeneratorPart) {
        const genInfo = GENERATORS_DATA[reward.generatorKey];
        const lvl = reward.level || 1;
        iconHTML = `<img src="${genInfo.partIcons[lvl - 1]}" alt="Деталь" style="width: 2.5rem; height: 2.5rem;">`;
        title = `Забрать: Деталь для "${genInfo.name}"`;
    } else if (reward.isUpgradePart) {
        iconHTML = `<img src="assets/icons/upgrade_part.png" alt="Новая деталь" style="width: 1.5rem; height: 1.5rem;">`;
        title = 'Забрать: Новая деталь';
    } else if (reward.isMagicTool) {
        iconHTML = `<img src="assets/icons/magic_tool.png" alt="Магические инструменты" style="width: 1.5rem; height: 1.5rem;">`;
        title = 'Забрать: Магические инструменты';
    }
    rewardElem.innerHTML = iconHTML;
    rewardElem.title = title;
    panel.appendChild(rewardElem);
  }
  panel.style.display = count > 0 ? 'flex' : 'none';
}

export function updateEnergyUI() {
  DOMElements.energy.value.innerText = gameState.energy;
  const cells = document.querySelectorAll('.cell');
  gameState.gridData.forEach((item, idx) => {
    if (item && item.isGenerator) {
      renderGeneratorBadges(cells[idx], item);
    }
  });
}

export function showToast(text, type = "success") {
  const toast = document.createElement('div');
  toast.classList.add('game-toast', type);
  toast.innerHTML = text;
  DOMElements.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

export function animateCellPop(index) {
  const cells = document.querySelectorAll('.cell');
  const wrapper = cells[index]?.querySelector('.item-wrapper');
  if (wrapper) {
    wrapper.classList.remove('merge-animate');
    void wrapper.offsetWidth;
    wrapper.classList.add('merge-animate');
  }
}

export function triggerMergeEffects(idx, category) {
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
        particle.style.setProperty('--x', `${Math.cos(angle) * speed}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * speed}px`);
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), CONFIG.ANIMATION.PARTICLE_DURATION);
      }
    }
  }, 0);
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

function renderGeneratorBadges(cell, item) {
  if (!cell || !item || !item.isGenerator) return;

  let lvl = item.genLevel || 1;

  // Удаляем старые значки, чтобы избежать дублирования
  cell.querySelector('.gen-energy-badge')?.remove();
  cell.querySelector('.gen-level-badge')?.remove();
  cell.querySelector('.max-level-star')?.remove();

  // Обновляем значок энергии/зарядов
  const energyBadge = document.createElement('span');
  energyBadge.classList.add('gen-energy-badge');

  if (item.generatorKey === 'bonus_chest') {
    energyBadge.innerHTML = `<img src="assets/icons/energy.png" class="badge-icon" alt=""> ${item.genCharges}`;
    energyBadge.classList.add('charges');
    if (item.genCharges === 0) {
      energyBadge.classList.add('gen-energy-badge-no-energy');
    }
  } else {
    energyBadge.innerHTML = `<img src="assets/icons/energy.png" class="badge-icon" alt="">${item.genEnergy}`;
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
  }
  cell.appendChild(energyBadge);

  // Обновляем значок уровня
  const levelBadge = document.createElement('span');
  levelBadge.classList.add('gen-level-badge');
  levelBadge.innerText = CONFIG.ROMAN_NUMERALS[lvl];
  cell.appendChild(levelBadge);

  // Для подарочной коробки уровень 2 - максимальный
  if (item.generatorKey === 'bonus_chest' && lvl === 2) {
    lvl = CONFIG.MAX_GENERATOR_LEVEL;
  }

  // Добавляем звезду для генератора максимального уровня
  if (lvl === CONFIG.MAX_GENERATOR_LEVEL) {
    const starBadge = document.createElement('span');
    starBadge.classList.add('max-level-star');
    starBadge.innerHTML = `<img src="assets/icons/star.png" alt="max level">`;
    cell.appendChild(starBadge);
  }
}

export function moveItem3D(fromElem, toElem, icon) {
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

export function animateRewardFly(startElement, endElement, icon, count = 5, className = 'coin') {
  if (!startElement || !endElement) return;

  // Получаем координаты ОДИН РАЗ в самом начале
  const startRect = startElement.getBoundingClientRect();
  const endRect = endElement.getBoundingClientRect();
  const startXInitial = startRect.left + startRect.width / 2;
  const startYInitial = startRect.top + startRect.height / 2;
  const endX = endRect.left + endRect.width / 2;
  const endY = endRect.top + endRect.height / 2;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const startX = startXInitial + (Math.random() - 0.5) * 40;
      const startY = startYInitial + (Math.random() - 0.5) * 20;

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

export function renderGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, idx) => {
    const item = gameState.gridData[idx];
    cell.innerHTML = '';
    cell.className = 'cell';

    if (item) {
      if (item.isBlocked) {
        cell.classList.add('blocked');
      } else if (item.isGeneratorPart) {
        cell.classList.add('generator-part-cell');
      } else if (item.isUpgradePart || item.isMagicTool) {
        cell.classList.add('booster-cell');
      }

      const wrapper = document.createElement('div');
      wrapper.classList.add('item-wrapper');

      if (item.isGenerator) {
        const lvl = item.genLevel || 1;
        cell.classList.add('generator-slot');

        const genInfo = GENERATORS_DATA[item.generatorKey];
        const iconPath = genInfo.icons[lvl - 1];
        wrapper.innerHTML = `<img src="${iconPath}" alt="${genInfo.name}">`;

        renderGeneratorBadges(cell, item);
      } else if (item.isItemGenerator) {
        const itemInfo = CATEGORIES_CONFIG[item.category].items[item.level - 1];
        wrapper.innerHTML = `<img src="${itemInfo.icon}" alt="">`;

        // Добавляем значок заряда
        const chargeBadge = document.createElement('span');
        chargeBadge.classList.add('gen-energy-badge', 'charges'); // Переиспользуем существующие стили
        chargeBadge.innerHTML = `<img src="assets/icons/energy.png" class="badge-icon" alt=""> ${item.charges}`; // Кастомная иконка
        if (item.charges === 0) {
          chargeBadge.classList.add('gen-energy-badge-no-energy');
        }
        cell.appendChild(chargeBadge);

        // Добавляем звезду и частицы, так как предмет достиг максимального уровня в своей ветке
        const starBadge = document.createElement('span');
        starBadge.classList.add('max-level-star');
        starBadge.innerHTML = `<img src="assets/icons/star.png" alt="max level">`;
        cell.appendChild(starBadge);
        // Вставляем частицы перед звездочкой, чтобы звезда была поверх
        starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());

        // Предмет-генератор может быть частью заказа
        if (item.isAllocatedToOrder) {
          cell.classList.add('allocated-for-order');
          const checkmark = document.createElement('div');
          checkmark.classList.add('item-checkmark');
          cell.appendChild(checkmark);
        }
      } else if (item.isGeneratorPart) {
        const genInfo = GENERATORS_DATA[item.generatorKey];
        const lvl = item.level || 1;
        const iconPath = genInfo.partIcons[lvl - 1];
        wrapper.innerHTML = `<img src="${iconPath}" alt="Деталь для ${genInfo.name}">`;

        const levelBadge = document.createElement('span');
        levelBadge.classList.add('item-level');
        levelBadge.innerText = item.level;
        cell.appendChild(levelBadge);
      } else if (item.isUpgradePart || item.isMagicTool) {
        // Общая логика для деталей и инструментов
        wrapper.innerHTML = item.isUpgradePart ? `<img src="assets/icons/upgrade_part.png" alt="">` : `<img src="assets/icons/magic_tool.png" alt="">`;

        // Добавляем звездочку, так как их нельзя улучшить
        const starBadge = document.createElement('span');
        starBadge.classList.add('max-level-star');
        starBadge.innerHTML = `<img src="assets/icons/star.png" alt="max level">`;
        cell.appendChild(starBadge);

        // Добавляем эффект частиц
        const particleHTML = createParticleEffectHTML();
        // Вставляем частицы перед звездочкой, чтобы звезда была поверх
        starBadge.insertAdjacentHTML('beforebegin', particleHTML);
      } else {
        wrapper.innerHTML = `<img src="${CATEGORIES_CONFIG[item.category].items[item.level - 1].icon}" alt="">`;

        // Добавляем эффект частиц для предметов максимального уровня
        if (item.level === CONFIG.MAX_ITEM_LEVEL) {
          const starBadge = document.createElement('span');
          starBadge.classList.add('max-level-star');
          starBadge.innerHTML = `<img src="assets/icons/star.png" alt="max level">`;
          cell.appendChild(starBadge);
          // Вставляем частицы перед звездочкой, чтобы звезда была поверх
          starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());
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

export function renderOrders() {
  const ordersList = DOMElements.ordersList;

  // Сохраняем предыдущее состояние для отслеживания изменений
  gameState.orders.forEach(order => {
    order.wasCompletableBefore = order.canComplete;
  });

  // Получаем список старых ID для сохранения структуры
  const currentCards = Array.from(ordersList.children);

  // Создаем временный список доступных на поле предметов для проверки
  const availableItemsOnGrid = gameState.gridData.filter(item =>
    item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isMagicTool
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
      const itemIconHTML = `<img src="${itemInfo.icon}" alt="${itemInfo.name}">`;
      itemsHTML += `<div class="order-target ${fulfilledClass}" title="${itemInfo.name}" data-category="${item.category}"><span class="order-item-icon">${itemIconHTML}</span></div>`;
    });
    itemsHTML += '</div>';

    const avatarHTML = `<div class="order-avatar-container" title="${order.character.name}"><img src="${order.character.icon}" alt="${order.character.name}"></div>`;

    card.innerHTML = `
      <div class="order-header">
          ${!order.isStory ? `<button class="cancel-btn" title="Отменить заказ">&times;</button>` : `<span class="story-badge">Сюжет ${order.storyStep}/3</span>`}
      </div>
      <div class="order-body">
          ${avatarHTML}
          <div class="order-content">
              ${itemsHTML}
              <button class="complete-btn ${order.canComplete ? 'visible' : ''}">Сдать заказ</button>
          </div>
      </div>
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

export function renderProfile() {
  const modal = DOMElements.profileModal;
  const profile = playerProfile;

  modal.icon.innerHTML = `<img src="${profile.icon}" alt="${profile.name}">`;

  // --- NEW LOGIC for favorite category ---
  let favoriteCategoryName = 'Нет';
  if (profile.mergeCounts && Object.keys(profile.mergeCounts).length > 0) {
    const favoriteCategoryKey = Object.keys(profile.mergeCounts).reduce((a, b) => profile.mergeCounts[a] > profile.mergeCounts[b] ? a : b);
    if (CATEGORIES_CONFIG[favoriteCategoryKey]) {
      favoriteCategoryName = CATEGORIES_CONFIG[favoriteCategoryKey].name;
    }
  }
  // --- END NEW LOGIC ---

  const timePlayedStr = formatTimePlayed(profile.timePlayed);
  const startDateStr = new Date(profile.startDate).toLocaleDateString('ru-RU');

  const profileIconHTML = `<img src="${profile.icon}" alt="${profile.name}">`;
  const energyIcon = `<img src="assets/icons/energy.png" class="inline-icon" alt="энергия">`;
  const coinIcon = `<img src="assets/icons/coin.png" class="inline-icon" alt="монета">`;

  modal.body.innerHTML = `
    <div class="profile-header">
        <div class="profile-avatar">${profileIconHTML}</div>
        <input type="text" class="profile-name-input" value="${profile.name}" id="profile-name-input" maxlength="20" placeholder="Введите имя">
    </div>
    <div class="profile-stats">
        <div class="stat-item"><span>Комбинаций сделано:</span> <strong>${profile.totalMerges.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>Заказов выполнено:</span> <strong>${profile.totalOrdersCompleted.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>Всего потрачено энергии:</span> <strong>${(profile.totalEnergySpent || 0).toLocaleString('ru-RU')} ${energyIcon}</strong></div>
        <div class="stat-item"><span>Всего заработано:</span> <strong>${(profile.totalCoinsEarned || 0).toLocaleString('ru-RU')} ${coinIcon}</strong></div>
        <div class="stat-item"><span>Любимая категория:</span> <strong>${favoriteCategoryName}</strong></div>
        <div class="stat-item"><span>Время в игре:</span> <strong>${timePlayedStr}</strong></div>
        <div class="stat-item"><span>Дата начала:</span> <strong>${startDateStr}</strong></div>
    </div>
  `;

  // Добавляем обработчик для сохранения имени при потере фокуса
  const nameInput = modal.body.querySelector('#profile-name-input');
  nameInput.addEventListener('blur', () => {
    playerProfile.name = nameInput.value.trim() || 'Игрок';
    saveGame(); // Сохраняем игру после изменения имени
  });
}

export function renderSettingsModal() {
  const body = DOMElements.settingsModal.body;
  body.innerHTML = `
    <div class="settings-item">
      <label for="music-volume-slider" class="settings-label">Громкость музыки</label>
      <div class="settings-control">
        <input type="range" id="music-volume-slider" min="0" max="1" step="0.05" value="${gameSettings.musicVolume}">
      </div>
    </div>
    <div class="settings-item">
      <label for="sfx-volume-slider" class="settings-label">Громкость звуков</label>
      <div class="settings-control">
        <input type="range" id="sfx-volume-slider" min="0" max="1" step="0.05" value="${gameSettings.sfxVolume}">
      </div>
    </div>
    <div class="settings-item">
      <label for="theme-switch" class="settings-label">Светлая тема</label>
      <div class="settings-control">
        <label class="switch">
          <input type="checkbox" id="theme-switch" ${gameSettings.theme === 'light' ? 'checked' : ''}>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <!-- Future settings can go here -->
  `;

  const musicSlider = body.querySelector('#music-volume-slider');
  musicSlider.addEventListener('input', (e) => {
    const volume = parseFloat(e.target.value);
    gameSettings.musicVolume = volume;
    DOMElements.bgMusic.volume = volume;

    if (volume > 0 && DOMElements.bgMusic.paused && !document.hidden) {
      // Взаимодействие с ползунком — это пользовательская активность,
      // поэтому мы можем запустить музыку.
      DOMElements.bgMusic.play().catch(() => {});
    } else if (volume === 0) {
      DOMElements.bgMusic.pause();
    }
  });

  // Save when user stops sliding
  musicSlider.addEventListener('change', () => {
    saveGame();
  });

  const sfxSlider = body.querySelector('#sfx-volume-slider');
  sfxSlider.addEventListener('input', (e) => {
    gameSettings.sfxVolume = parseFloat(e.target.value);
  });

  // Save when user stops sliding
  sfxSlider.addEventListener('change', () => {
    // Play a sample sound to give feedback
    playSound(DOMElements.sfxSwap);
    saveGame();
  });

  const themeSwitch = body.querySelector('#theme-switch');
  themeSwitch.addEventListener('change', (e) => {
    gameSettings.theme = e.target.checked ? 'light' : 'dark';
    applyTheme();
    saveGame();
  });
}

export function renderAchievementsModal() {
  const body = DOMElements.achievementsModal.body;
  let contentHTML = '';

  for (const key in ACHIEVEMENTS_DATA) {
    const achievement = ACHIEVEMENTS_DATA[key];
    const progress = playerProfile[key] || 0;

    contentHTML += `
      <div class="achievement-item">
        <div class="achievement-icon"><img src="${achievement.icon}" alt="${achievement.name}"></div>
        <div class="achievement-details">
          <h4 class="achievement-title">${achievement.name}</h4>
          <p class="achievement-desc">${achievement.desc}</p>
          <div class="achievement-tiers">
    `;

    achievement.tiers.forEach((tier, index) => {
      const isClaimed = !!gameState.claimedAchievements[`${achievement.id}_${index}`];
      const canClaim = progress >= tier.goal && !isClaimed;
      const percentage = Math.min(100, (progress / tier.goal) * 100);
      const coinIcon = `<img src="assets/icons/coin.png" class="inline-icon" alt="монета">`;

      let btnHTML;
      if (isClaimed) {
        btnHTML = `<button class="achievement-claim-btn claimed" disabled><img src="assets/icons/checkmark.png" alt="Выполнено"></button>`;
      } else {
        btnHTML = `<button class="achievement-claim-btn" ${!canClaim ? 'disabled' : ''} data-action="claim-achievement" data-id="${achievement.id}" data-index="${index}">+${tier.reward}${coinIcon}</button>`;
      }

      contentHTML += `
        <div class="achievement-tier">
          <div class="achievement-progress-container">
            <div class="achievement-progress-text">${progress.toLocaleString('ru-RU')} / ${tier.goal.toLocaleString('ru-RU')}</div>
            <div class="achievement-progress-bar-bg">
              <div class="achievement-progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
          </div>
          ${btnHTML}
        </div>
      `;
    });

    contentHTML += `
          </div>
        </div>
      </div>
    `;
  }
  body.innerHTML = contentHTML;
}

export function renderCollectionModal() {
  const modal = DOMElements.collectionModal;
  let contentHTML = '';

  const allCategories = Object.keys(CATEGORIES_CONFIG);

  allCategories.forEach(key => {
    const category = CATEGORIES_CONFIG[key];
    // Проверяем, открыт ли хоть один предмет в этой категории
    const isCategoryVisible = category.items.some(item => isDiscovered(key, item.level));

    if (isCategoryVisible) {
      contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;
      contentHTML += `<div class="progression-container">`;
      category.items.forEach((item, itemIndex) => {
        const itemKey = `${key}-${item.level}`;
        const discovered = isDiscovered(key, item.level);
        const bonusClaimed = !!gameState.claimedCollectionBonuses[itemKey];

        let itemClasses = 'progression-item-square';
        let clickHandler = '';
        let title = 'Не открыто';
        let bonusIconHTML = '';

        if (discovered) {
          title = item.name;
          // Если бонус еще не собран, добавляем соответствующий класс, иконку и обработчик
          if (!bonusClaimed) {
            itemClasses += ' bonus-unclaimed';
            const bonusAmount = item.level * CONFIG.COLLECTION_BONUS_BASE_VALUE;
            const coinIcon = `<img src="assets/icons/coin.png" class="inline-icon" alt="монета">`;
            clickHandler = `data-action="claim-bonus" data-category="${key}" data-level="${item.level}"`;

            bonusIconHTML = `<div class="unclaimed-bonus-icon" title="Собрать бонус">+${bonusAmount}${coinIcon}</div>`;
          }
        } else {
          itemClasses += ' undiscovered';
        }

        const itemIcon = discovered ? `<img src="${item.icon}" alt="${item.name}">` : `<img src="assets/icons/question.png" alt="Не открыто">`;

        contentHTML += `
          <div class="${itemClasses}" title="${title}" ${clickHandler}>
            <div class="progression-item-icon">${itemIcon}</div>
            <div class="progression-item-level">${item.level}</div>
            ${bonusIconHTML}
          </div>
        `;
        if (itemIndex < category.items.length - 1) {
          contentHTML += '<div class="progression-arrow-h">→</div>';
        }
      });
      contentHTML += `</div><hr style="border-color: #333; margin: 15px 0 10px;">`;
    }
  });

  modal.body.innerHTML = contentHTML;
  modal.footer.innerHTML = ''; // Очищаем футер, кнопка больше не нужна
}
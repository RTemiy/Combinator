import { DOMElements } from './dom.js';
import { gameSettings, gameState } from './state.js';
import { CONFIG } from './config.js';
import { saveGame, startGameAndAudio } from './gameManager.js';
import {
  showModal,
  closeModal,
  openMenuModal,
  closeMenuModal,
  confirmReset,
  showCollectionModal,
  openProfileModal,
  openAchievementsModal,
  openSettingsModal,
  closeProfileModal,
  closeDetailModal,
  closeAchievementsModal,
  closeCollectionModal,
  closeSettingsModal,
  confirmCancelOrder,
  showCharacterById,
  showCategoryProgressionModal,
  showItemInfoModal
} from './modals.js';
import {
  rechargePlayerEnergyWithCoins,
  claimItemBonus,
  claimAchievementReward,
  completeOrder,
  executeMergeOrSwap,
  triggerGenerator,
  triggerItemGenerator,
  claimReward
} from './gameLogic.js';
import { playSound } from './audio.js';
import { renderGrid } from './ui.js';

let dragStartAttached = false;

export function addListeners() {
  DOMElements.startScreen.addEventListener('click', startGameAndAudio, { once: true });

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('blur', cleanDragState);
  document.body.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('touchcancel', handleTouchCancel);

  window.addEventListener('beforeunload', () => {
    localStorage.setItem(CONFIG.LAST_LOGIN_KEY, Date.now());
    saveGame();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      saveGame();
      DOMElements.bgMusic.pause();
    } else {
      if (gameSettings.musicVolume > 0) {
        DOMElements.bgMusic.play().catch(() => {});
      }
    }
  });

  DOMElements.energy.container.addEventListener('click', () => {
    const modalOptions = {
      icon: 'assets/icons/energy.png',
      title: 'Энергия',
      subtitle: 'Вечный движитель',
      desc: `За каждое использование генератора тратится 1 ед. энергии. Каждые ${CONFIG.ENERGY_REGEN_INTERVAL / 1000} сек. восстанавливается ${CONFIG.ENERGY_REGEN_AMOUNT} ед. энергии. За каждый выполненный сюжетный заказ вы получаете ${CONFIG.STORY_ORDER_ENERGY_REWARD} ед. энергии.`
    };
    if (gameState.energy < CONFIG.MAX_ENERGY) {
      modalOptions.actionButton = {
        text: `Восстановить энергию (-${CONFIG.ENERGY_RECHARGE_COST_COINS}<img src="assets/icons/coin.png" class="inline-icon" alt="монета">)`,
        onClick: rechargePlayerEnergyWithCoins
      };
    }
    showModal(modalOptions);
  });

  DOMElements.level.container.addEventListener('click', () => showModal({ icon: 'assets/icons/level.png', title: 'Уровень', subtitle: 'Главный показатель эффективности', desc: 'За сдачу заказов выдаются очки. Чем сложнее заказ, тем больше очков получается. При получении определенного количества очков, уровень повышается.' }));
  DOMElements.coins.container.addEventListener('click', () => showModal({ icon: 'assets/icons/coin.png', title: 'Монеты', subtitle: 'Игровая валюта', desc: `Монеты зарабатываются за выполнение заказов.` }));

  DOMElements.infoModal.closeBtn.addEventListener('click', closeModal);
  DOMElements.infoModal.cancelBtn.addEventListener('click', closeModal);
  DOMElements.menuBtn.addEventListener('click', openMenuModal);
  DOMElements.menuModal.closeBtn.addEventListener('click', closeMenuModal);
  DOMElements.menuModal.resetBtn.addEventListener('click', () => { closeMenuModal(); confirmReset(); });
  DOMElements.menuModal.collectionBtn.addEventListener('click', () => { closeMenuModal(); showCollectionModal(); });
  DOMElements.menuModal.profileBtn.addEventListener('click', () => { closeMenuModal(); openProfileModal(); });
  DOMElements.menuModal.achievementsBtn.addEventListener('click', () => { closeMenuModal(); openAchievementsModal(); });
  DOMElements.menuModal.settingsBtn.addEventListener('click', () => { closeMenuModal(); openSettingsModal(); });
  DOMElements.profileModal.closeBtn.addEventListener('click', closeProfileModal);
  DOMElements.detailModal.closeBtn.addEventListener('click', closeDetailModal);
  DOMElements.achievementsModal.closeBtn.addEventListener('click', closeAchievementsModal);
  DOMElements.collectionModal.closeBtn.addEventListener('click', closeCollectionModal);
  DOMElements.settingsModal.closeBtn.addEventListener('click', closeSettingsModal);

  DOMElements.collectionModal.body.addEventListener('click', e => {
    const claimButton = e.target.closest('[data-action="claim-bonus"]');
    if (claimButton) {
      const { category, level } = claimButton.dataset;
      claimItemBonus(category, parseInt(level, 10), claimButton);
    }
  });

  DOMElements.achievementsModal.body.addEventListener('click', e => {
    const claimButton = e.target.closest('[data-action="claim-achievement"]');
    if (claimButton) {
      const { id, index } = claimButton.dataset;
      claimAchievementReward(id, parseInt(index, 10), claimButton);
    }
  });

  DOMElements.rewardQueuePanel.addEventListener('click', e => {
    const claimButton = e.target.closest('[data-action="claim-reward"]');
    if (claimButton) {
        claimReward(parseInt(claimButton.dataset.index, 10), claimButton);
    }
  });

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
    } else if (target.closest('.order-avatar-container')) {
      showCharacterById(orderId);
    } else if (orderItemTarget) {
      const category = orderItemTarget.dataset.category;
      const icon = orderItemTarget.querySelector('.order-item-icon img')?.src;
      if (category) {
        showCategoryProgressionModal(category, icon);
      }
    }
  });

  if (!dragStartAttached) {
    DOMElements.grid.addEventListener('mousedown', (e) => {
        const cell = e.target.closest('.cell');
        if (cell) {
            e.preventDefault();
            startDrag(e, parseInt(cell.dataset.index));
        }
    });
    DOMElements.grid.addEventListener('touchstart', (e) => {
        const cell = e.target.closest('.cell');
        if (cell) {
            e.preventDefault();
            startDrag(e, parseInt(cell.dataset.index));
        }
    }, { passive: false });
    dragStartAttached = true;
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
    playSound(DOMElements.sfxDragStart);
    document.body.classList.add('is-dragging');
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
  if (!gameState.dragState.isDragging) return;
  handleDragMove(e.clientX, e.clientY);
}

function handleTouchMove(e) {
  handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
}

function handleMouseLeave() {
  // Если мышь покидает окно во время перетаскивания, отменяем его,
  // чтобы избежать "залипания" предмета, если mouseup произойдет вне окна.
  if (gameState.dragState.isDragging) {
    endDrag(-1, -1);
  }
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

function handleTouchCancel() {
  // Событие touchcancel может произойти, если палец уходит за пределы экрана.
  // Отменяем перетаскивание, чтобы избежать "залипания".
  if (gameState.dragState.isDragging) {
    endDrag(-1, -1);
  }
}

function endDrag(clientX, clientY) {
  const { element, isMoved, startIndex } = gameState.dragState;

  // Если это был клик, а не перетаскивание
  if (!isMoved) {
    handleCellClick(startIndex);
    cleanDragState();
    return;
  }

  // Если это было перетаскивание, но что-то пошло не так (нет "призрака")
  if (!element) {
    cleanDragState();
    return;
  }

  const elementUnder = document.elementFromPoint(clientX, clientY);
  const targetCell = elementUnder ? elementUnder.closest('.cell') : null;
  const dragTargetIndex = targetCell ? parseInt(targetCell.dataset.index) : -1;

  // Условие для невалидного броска (за пределы поля, на себя, на заблокированную ячейку)
  const isInvalidDrop = !targetCell || startIndex === dragTargetIndex || gameState.lockedCells.includes(dragTargetIndex);

  if (isInvalidDrop) {
    // Анимируем "призрак" обратно на исходную позицию
    const originalCell = DOMElements.grid.children[startIndex];
    const rect = originalCell.getBoundingClientRect();

    element.classList.add('returning');
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.transform = 'scale(1)';

    // После анимации очищаем состояние. Это перерисует поле и вернет видимость исходному предмету.
    setTimeout(() => {
      cleanDragState(true); // Перерисовать, чтобы восстановить opacity
    }, 200); // Должно совпадать с длительностью transition в CSS
    return;
  }

  // Валидный бросок: анимируем "призрак" в целевую ячейку
  const targetRect = targetCell.getBoundingClientRect();
  element.classList.add('dropping');
  element.style.left = `${targetRect.left}px`;
  element.style.top = `${targetRect.top}px`;
  element.style.transform = 'scale(1)';

  // После анимации выполняем логику игры и очищаем состояние
  setTimeout(() => {
    executeMergeOrSwap(startIndex, dragTargetIndex); // Эта функция вызывает updateUI() -> renderGrid()
    cleanDragState(false); // Очищаем состояние перетаскивания без лишней перерисовки
  }, 150); // Должно совпадать с длительностью transition в CSS
}

export function cleanDragState(shouldRender = true) {
  document.body.classList.remove('is-dragging');
  gameState.dragState.isDragging = false;
  if (gameState.dragState.element) {
    gameState.dragState.element.remove();
    gameState.dragState.element = null;
  }
  gameState.dragState.startIndex = null;
  gameState.dragState.isMoved = false;
  if (shouldRender) {
    renderGrid(); // Принудительный рендер восстановит все opacity
  }
}

function handleCellClick(index) {
  const item = gameState.gridData[index];
  if (!item) return;

  if (item.isGenerator) {
    // Логика двойного клика для генераторов
    if (gameState.lastClick.index === index) {
      closeModal();
      triggerGenerator(item, index);
    } else {
      showItemInfoModal(item, index);
      gameState.lastClick = { index: index };
    }
  } else if (item.isItemGenerator) {
    if (gameState.lastClick.index === index) {
      closeModal();
      triggerItemGenerator(item, index);
    } else {
      showItemInfoModal(item, index);
      gameState.lastClick = { index: index };
    }
  } else {
    // Одиночный клик для любого другого предмета показывает информацию
    showItemInfoModal(item, index);
    gameState.lastClick = { index: null }; // Сбрасываем состояние двойного клика
  }
}
const ITEM_CATEGORIES = {
  stationery: {
    name: 'Канцелярия',
    color: '#8a1b0b',
    items: [
      { level: 1, icon: '✏️', name: 'Простой карандаш', desc: 'Оставляет тонкий след на бумаге. Базовый инструмент художника.' },
      { level: 2, icon: '✒️', name: 'Гелевая ручка', desc: 'Пишет четко и ярко. Чернила сохнут мгновенно.' },
      { level: 3, icon: '✂️', name: 'Ножницы', desc: 'Острые стальные лезвия. Легко режут картон и бумагу.' },
      { level: 4, icon: '📔', name: 'Записная книжка', desc: 'Плотные листы в линейку. Хранит важные наброски сюжета.' },
      { level: 5, icon: '📚', name: 'Стопка учебников', desc: 'Сборник древних и современных знаний по всем наукам.' },
      { level: 6, icon: '🎒', name: 'Школьный рюкзак', desc: 'Вмещает в себя кучу тетрадей, учебников и пенал.' },
      { level: 7, icon: '🗄', name: 'Стеллаж с книгами', desc: 'Тут собраны все учебники, которые проходят в школе. ' }
    ]
  },
  flowers: {
    name: 'Растения',
    color: '#06d6a0',
    items: [
      { level: 1, icon: '🍃', name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: '🌱', name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек. Требует заботы, солнца и полива.' },
      { level: 3, icon: '🌿', name: 'Веточка мяты', desc: 'Свежие зеленые листочки. Источают приятный расслабляющий аромат.' },
      { level: 4, icon: '🪴', name: 'Растение в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: '🌹', name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: '💐', name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: '🌳', name: 'Раскидистое дерево', desc: 'Могучий вековой исполин. Высшая точка природного роста!' }
    ]
  },
  sweets: {
    name: 'Сладости',
    color: '#0353ff',
    items: [
      { level: 1, icon: '🍬', name: 'Мятная конфета', desc: 'Маленький леденец в шуршащей обертке.' },
      { level: 2, icon: '🍭', name: 'Леденец на палочке', desc: 'Сладкий карамельный кругляш.' },
      { level: 3, icon: '🍪', name: 'Овсяное печенье', desc: 'Ароматное печенье с кусочками шоколада.' },
      { level: 4, icon: '🍫', name: 'Плитка шоколада', desc: 'Настоящий темный шоколад.' },
      { level: 5, icon: '🍩', name: 'Глазированный пончик', desc: 'Пышное тесто с яркой посыпкой.' },
      { level: 6, icon: '🍰', name: 'Кусочек торта', desc: 'Бисквит с нежным ягодным кремом.' },
      { level: 7, icon: '🎂', name: 'Праздничный торт', desc: 'Шедевр со свечами — пик кондитерского искусства!' }
    ]
  },
  accessories: {
    name: 'Драгоценности',
    color: '#e0aaff',
    items: [
      { level: 1, icon: '🪨', name: 'Необработанный камень', desc: 'Простой булыжник, в котором скрыт потенциал.' },
      { level: 2, icon: '🗝', name: 'Серебряный ключ', desc: 'Изящный ключ от шкатулки с драгоценностями.' },
      { level: 3, icon: '💍', name: 'Драгоценное кольцо', desc: 'Базовая заготовка для ювелирного изделия.' },
      { level: 4, icon: '💎', name: 'Ограненный алмаз', desc: 'Драгоценный камень, засиявший после обработки.' },
      { level: 5, icon: '👑', name: 'Золотая корона', desc: 'Корона, украшенная вставками из драгоценных камней.' },
      { level: 6, icon: '💰', name: 'Сундук с сокровищами', desc: 'Полная коллекция богатств, собранная старателем.' },
      { level: 7, icon: '🏆', name: 'Артефакт власти', desc: 'Легендарная реликвия, венчающая мастерство создателя.' }
    ]
  },
  gadgets: {
    name: 'Гаджеты',
    color: '#4cc9f0',
    items: [
      { level: 1, icon: '📼', name: 'Видеокассета', desc: 'Старая магнитная лента с записью памятных моментов.' },
      { level: 2, icon: '💽', name: 'Компакт-диск', desc: 'Цифровой носитель информации начала эры технологий.' },
      { level: 3, icon: '🎧', name: 'Проводные наушники', desc: 'Классический аксессуар для погружения в мир музыки.' },
      { level: 4, icon: '⌚️', name: 'Смарт-часы', desc: 'Первый шаг в объединении стиля и умных технологий.' },
      { level: 5, icon: '📱', name: 'Смартфон', desc: 'Карманный центр управления всей вашей цифровой жизнью.' },
      { level: 6, icon: '🖥', name: 'Персональный компьютер', desc: 'Мощная рабочая станция для создания контента.' },
      { level: 7, icon: '💻', name: 'Ультрабук', desc: 'Вершина мобильных технологий и производительности.' }
    ]
  },
  fastfood: {
    name: 'Фастфуд',
    color: '#ff8a5c',
    items : [
      { level: 1, icon: '🥓', name: 'Хрустящий бекон', desc: 'Тонко нарезанный и хорошо прожаренные ломтики бекона.' },
      { level: 2, icon: '🍟', name: 'Картофель фри', desc: 'Хрустящие золотистые палочки.' },
      { level: 3, icon: '🌭', name: 'Хот-дог', desc: 'Сочная сосиска между двух булок.' },
      { level: 4, icon: '🍔', name: 'Двойной чизбургер', desc: 'Котлета с сыром в свежей булке.' },
      { level: 5, icon: '🫔', name: 'Сытный ролл', desc: 'Большая порция с овощами и мясом.' },
      { level: 6, icon: '🍗', name: 'Куриный сет', desc: 'Ведерко горячих крылышек.' },
      { level: 7, icon: '🍱', name: 'Комбо-обед', desc: 'Полный набор для идеального перекуса.' }
    ]
  },
  alcohol: {
    name: 'Алкоголь',
    color: '#ff5cf1',
    items : [
      { level: 1, icon: '🍺', name: 'Светлое пиво', desc: 'Классическое холодное пиво в кружке.' },
      { level: 2, icon: '🍻', name: 'Две кружки', desc: 'Пара бокалов для приятной компании.' },
      { level: 3, icon: '🍷', name: 'Бокал вина', desc: 'Изысканное красное вино.' },
      { level: 4, icon: '🥂', name: 'Игристое вино', desc: 'Бокалы с шампанским для тоста.' },
      { level: 5, icon: '🍾', name: 'Бутылка шампанского', desc: 'Праздничное игристое в охлажденной бутылке.' },
      { level: 6, icon: '🥃', name: 'Виски', desc: 'Крепкий благородный напиток в стакане.' },
      { level: 7, icon: '🍹', name: 'Авторский коктейль', desc: 'Сложный напиток с украшениями и зонтиком.' }
    ]
  }
};

const GENERATOR_BOXES = {
  stationery: { icon: '✏️', name: 'Склад канцелярии', desc: 'Хранилище писчих принадлежностей.' },
  flowers: { icon: '🌱', name: 'Цветочная теплица', desc: 'Оазис для выращивания декоративной флоры.' },
  sweets: { icon: '🍬', name: 'Конфетный автомат', desc: 'Аппарат, выдающий кондитерские изделия.' },
  accessories: { icon: '✨', name: 'Сокровищница', desc: 'Кованый ларь с ценными украшениями.' },
  gadgets: { icon: '⚙️', name: 'Завод электроники', desc: 'Конвейер высокотехнологичных микросхем.' },
  fastfood: { icon: '🍔', name: 'Фастфуд-кафе', desc: 'Кухонный конвейер для быстрой и сытной еды.' },
  alcohol: { icon: '🍸', name: 'Барная стойка', desc: 'Место, где профессиональный бармен смешивает изысканные напитки.' }
};

const GEN_ENERGY_CONFIG = {
  1: { max: 25, cooldown: 30000 },
  2: { max: 25, cooldown: 25000 },
  3: { max: 25, cooldown: 20000 }
};

const CHARACTERS = [
  { icon: '🐱', name: 'Кот Том', desc: 'Местный пушистый сибарит. Обожает сладости и мягкие рюкзаки, в которых можно сладко вздремнуть.' },
  { icon: '🦊', name: 'Лиса Алиса', desc: 'Хитрая авантюристка. Собирает редкие аксессуары и гаджеты для своих тайных ночных вылазок.' },
  { icon: '🐻', name: 'Мишка По', desc: 'Добродушный любитель природы. Всегда рад свежим цветам и вкусным тортам на праздники.' },
  { icon: '🐸', name: 'Жабка Пепе', desc: 'Философ и ценитель мемов. Постоянно сидит в гаджетах и записывает свои умные мысли в блокноты.' },
  { icon: '🧙‍♂️', name: 'Маг Гендальф', desc: 'Древний волшебник. Ищет Энциклопедии магии и древние артефакты для защиты здешних земель.' },
  { icon: '🧝‍♀️', name: 'Эльфийка Лия', desc: 'Хранительница лесного спокойствия. Приходит за красивыми букетами цветов и редкими амулетами.' },
  { icon: '🧛‍♂️', name: 'Граф Влад', desc: 'Загадочный аристократ из замка неподалеку. Предпочитает алые розы и роскошные золотые короны.' },
  { icon: '🦝', name: 'Енот Рокки', desc: 'Завзятый изобретатель и мастер на все руки. Постоянно ищет провода, детали и канцелярию для новых чертежей.' },
  { icon: '🐼', name: 'Панда Мэй', desc: 'Милая любительница уюта и чаепитий. Всегда рада поднять настроение вкусной конфетой или сочным бургером.' },
  { icon: '🦉', name: 'Сова Оливия', desc: 'Мудрая исследовательница местной академии. Собирает старинные книги и обожает перекусить пиццей во время ночных чтений.' }
];

const STORY_CHARACTERS = [
  { icon: '🕵️‍♂️', name: 'Незнакомец', desc: 'Секретный агент под прикрытием. Его крупные запросы окутаны тайной государственной важности.' },
  { icon: '🦸‍♂️', name: 'Супергерой', desc: 'Защитник города. Ему экстренно требуются редкие ресурсы для борьбы со вселенским злом.' },
  { icon: '👽', name: 'Пришелец', desc: 'Гость с далеких звезд. Изучает земную культуру через самые неожиданные и огромные наборы предметов.' },
  { icon: '🤖', name: 'Киборг X-100', desc: 'Робот из будущего. Его алгоритмы требуют четких поставок высокоуровневых вещей.' }
];

const UNLOCK_THRESHOLDS = [
  { score: 500, unlocked: false, level: 2, prevLimit: 0 },
  { score: 1500, unlocked: false, level: 3, prevLimit: 500 },
  { score: 3000, unlocked: false, level: 4, prevLimit: 1500 },
  { score: 6000, unlocked: false, level: 5, prevLimit: 3000 },
  { score: 12000, unlocked: false, level: 6, prevLimit: 6000 },
  { score: 24000, unlocked: false, level: 7, prevLimit: 12000 }
];

const GRID_COLS = 5;
const GRID_ROWS = 7;

let gridData = [];
let score = 0;
let energy = 100;
const MAX_ENERGY = 100;
let orders = [];
let orderIdCounter = 1;
let lockedCells = [];
let activeCategories = [];
let lockedCategories = [];

let dragElement = null;
let dragStartIndex = null;
let isMoved = false;
let isDragging = false;
let startX = 0;
let startY = 0;

const ROMAN_NUMERALS = { 1: 'I', 2: 'II', 3: 'III' };
const TRASH_ICONS = ['🪨', '📦', '🪵', '🏺'];

function initGame() {
  createGrid();
  if (localStorage.getItem('merge_game_save')) {
    loadGame();
    // --- ПРАВКА: Восстановление энергии при входе ---
    const lastTime = parseInt(localStorage.getItem('last_login_time')) || Date.now();
    const timePassed = Date.now() - lastTime;

    // Например, 1 энергия в 10 секунд (10000 мс)
    const energyToRestore = Math.floor(timePassed / 10000);
    if (energyToRestore > 0) {
      energy = Math.min(MAX_ENERGY, energy + energyToRestore);
      saveGame();
    }
  } else {
    startNewGame();
  }
  restoreGeneratorsEnergy();
  updateUI();

  setInterval(() => {
    regenerateEnergy();
    restoreGeneratorsEnergy();
    updateUI();
  }, 10000);

  addListeners()

}

function addListeners() {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('blur', cleanDragState);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  window.addEventListener('beforeunload', () => {
    // Сохраняем метку времени выхода
    localStorage.setItem('last_login_time', Date.now());
    saveGame();
  });

  document.querySelector('.energy-container').addEventListener('click', () => {
    showInfoModal({
      icon: '⚡️',
      name: 'Энергия',
      subtitle: 'Вечный движитель',
      desc: 'За каждое использование генератора тратится 1 ед. энергии. Каждые 10 сек. восстанавливается 1 ед. энергии. За каждый готовый заказ восстанавливается 3 ед. энергии.'
    })
  })

  document.querySelector('.level-container').addEventListener('click', () => {
    showInfoModal({
      icon: '🚥',
      name: 'Уровень',
      subtitle: 'Главный показатель эффективности',
      desc: 'За сдачу заказов выдаются очки. Чем сложнее заказ, тем больше очков получается. При получении определенного количества очков, уровень повышается.'
    })
  })

}

function startNewGame() {
  gridData = Array(GRID_COLS * GRID_ROWS).fill(null);
  score = 0;
  energy = 100;
  TRASH_AT_START = 23
  UNLOCK_THRESHOLDS.forEach(t => t.unlocked = false);

  let allCategories = Object.keys(ITEM_CATEGORIES);
  shuffleArray(allCategories);
  activeCategories = allCategories.slice(0, 2);
  lockedCategories = allCategories.slice(2);

  let availableIndices = Array.from({length: GRID_COLS * GRID_ROWS}, (_, i) => i);
  for (let i = 0; i < TRASH_AT_START; i++) {
    if (availableIndices.length > 5) {
      const randIdx = Math.floor(Math.random() * availableIndices.length);
      const cellIndex = availableIndices.splice(randIdx, 1)[0];
      const randomTrashIcon = TRASH_ICONS[Math.floor(Math.random() * TRASH_ICONS.length)];
      gridData[cellIndex] = { isTrash: true, icon: randomTrashIcon };
    }
  }

  activeCategories.forEach(cat => {
    const randIdx = Math.floor(Math.random() * availableIndices.length);
    const cellIndex = availableIndices.splice(randIdx, 1)[0];
    gridData[cellIndex] = {
      isGenerator: true,
      category: cat,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
  });

  for(let i = 0; i < 2; i++) {
    let emptyCells = getEmptyGridCells();
    if(emptyCells.length > 0) {
      let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      gridData[randomCell] = { category: activeCategories[i % activeCategories.length], level: 1 };
    }
  }

  orders = [];
  generateOrder();
  generateOrder();
  generateOrder();

  saveGame();
}

function saveGame() {
  const saveData = {
    gridData: gridData,
    score: score,
    energy: energy,
    orders: orders,
    orderIdCounter: orderIdCounter,
    activeCategories: activeCategories,
    lockedCategories: lockedCategories,
    thresholds: UNLOCK_THRESHOLDS.map(t => ({ score: t.score, unlocked: t.unlocked, level: t.level }))
  };
  localStorage.setItem('merge_game_save', JSON.stringify(saveData));
}

function loadGame() {
  try {
    const loaded = JSON.parse(localStorage.getItem('merge_game_save'));
    gridData = loaded.gridData;
    score = loaded.score;
    energy = loaded.energy;
    orders = loaded.orders;
    orderIdCounter = loaded.orderIdCounter;
    activeCategories = loaded.activeCategories;
    lockedCategories = loaded.lockedCategories;

    if (loaded.thresholds) {
      loaded.thresholds.forEach((t, i) => {
        if (UNLOCK_THRESHOLDS[i]) UNLOCK_THRESHOLDS[i].unlocked = t.unlocked;
      });
    }
  } catch (e) {
    console.error("Ошибка при чтении сохранения, начата новая игра", e);
    startNewGame();
  }
}

function restoreGeneratorsEnergy() {
  let changed = false;
  const now = Date.now();
  gridData.forEach(item => {
    if (item && item.isGenerator) {
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

function createGrid() {
  const gridElement = document.getElementById('grid');
  gridElement.innerHTML = '';
  for (let i = 0; i < GRID_COLS * GRID_ROWS; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('mousedown', (e) => startDrag(e, i));
    cell.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDrag(e, i);
    }, { passive: false });
    gridElement.appendChild(cell);
  }
}

function getAvailableEmptyCells() {
  return gridData.map((val, idx) => (val === null && !lockedCells.includes(idx)) ? idx : null).filter(val => val !== null);
}

function getEmptyGridCells() {
  return gridData.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
}

function getCurrentPlayerLevel() {
  let currentLvl = 1;
  UNLOCK_THRESHOLDS.forEach(t => {
    if (score >= t.score) currentLvl = t.level;
  });
  return currentLvl;
}

function updateLevelProgressBar() {
  const currentLvl = getCurrentPlayerLevel();
  const barFill = document.getElementById('level-bar');

  if (currentLvl === UNLOCK_THRESHOLDS.length + 1) {
    barFill.style.width = '100%';
    document.getElementById('score-text').innerText = score;
    return;
  }

  const currentThreshold = UNLOCK_THRESHOLDS.find(t => t.level === currentLvl + 1);
  if (currentThreshold) {
    const min = currentThreshold.prevLimit;
    const max = currentThreshold.score;
    const percentage = ((score - min) / (max - min)) * 100;
    barFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
  }
  document.getElementById('score-text').innerText = score;
}

function regenerateEnergy() {
  if (energy < MAX_ENERGY) {
    energy++;
    saveGame();
  }
}

function updateUI() {
  checkOrdersAvailability();
  renderGrid();
  renderOrders();
  document.getElementById('energy-val').innerText = energy;
  document.getElementById('player-level').innerText = getCurrentPlayerLevel();
  updateLevelProgressBar();

  const barFill = document.getElementById('energy-bar');
  const percentage = (energy / MAX_ENERGY) * 100;
  barFill.style.width = `${percentage}%`;

  if (percentage <= 25) barFill.classList.add('low');
  else barFill.classList.remove('low');
}

function renderGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, idx) => {
    const item = gridData[idx];
    cell.innerHTML = '';
    cell.className = 'cell';

    if (item) {
      if (item.isTrash) {
        cell.classList.add('trash-blocked');
        const trashSpan = document.createElement('span');
        trashSpan.classList.add('trash-icon');
        trashSpan.innerHTML = item.icon || '🪨';
        cell.appendChild(trashSpan);
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.classList.add('item-wrapper');

      if (item.isGenerator) {
        const lvl = item.genLevel || 1;
        if (item.genEnergy === undefined) item.genEnergy = GEN_ENERGY_CONFIG[lvl].max;
        cell.classList.add('generator-slot');

        const container = document.createElement('div');
        container.classList.add('generator-icon-container');

        const bgBox = document.createElement('span');
        bgBox.classList.add('generator-box-bg');
        bgBox.innerText = '📦';

        const fgItem = document.createElement('span');
        fgItem.classList.add('generator-item-fg');
        fgItem.innerText = GENERATOR_BOXES[item.category].icon;

        container.appendChild(bgBox);
        container.appendChild(fgItem);
        wrapper.appendChild(container);

        const energyBadge = document.createElement('span');
        energyBadge.classList.add('gen-energy-badge');
        energyBadge.innerText = `⚡${item.genEnergy}`;
        cell.appendChild(energyBadge);

        if (item.genEnergy === 0) {
          cell.classList.add('generator-slot-no-energy');
          energyBadge.classList.add('gen-energy-badge-no-energy')
        } else {
          cell.classList.remove('generator-slot-no-energy');
          energyBadge.classList.remove('gen-energy-badge-no-energy')
        }

        const levelBadge = document.createElement('span');
        levelBadge.classList.add('gen-level-badge');
        levelBadge.innerText = ROMAN_NUMERALS[lvl];
        cell.appendChild(levelBadge);
      } else {
        wrapper.innerHTML = ITEM_CATEGORIES[item.category].items[item.level - 1].icon;
        const levelBadge = document.createElement('span');
        levelBadge.classList.add('item-level');
        levelBadge.innerText = item.level;
        cell.appendChild(levelBadge);
      }
      cell.appendChild(wrapper);
    }
  });
}

function startDrag(e, index) {
  if (lockedCells.includes(index) || !gridData[index] || isDragging) return;

  // Исправление: удаляем "зависшие" призрачные элементы перед началом
  const ghost = document.querySelector('.item-wrapper.dragging');
  if (ghost) ghost.remove();

  isDragging = true; // Блокировка
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  dragStartIndex = index;
  isMoved = false;
  startX = clientX;
  startY = clientY;

  const cells = document.querySelectorAll('.cell');
  const targetCell = cells[index];
  const originalWrapper = targetCell.querySelector('.item-wrapper');
  if (!originalWrapper) {
    isDragging = false;
    return;
  }

  dragElement = originalWrapper.cloneNode(true);
  dragElement.classList.add('dragging');
  const rect = originalWrapper.getBoundingClientRect();
  dragElement.style.left = `${rect.left}px`;
  dragElement.style.top = `${rect.top}px`;
  document.body.appendChild(dragElement);

  originalWrapper.style.opacity = '0.3';
}

function handleMouseMove(e) {
  if (dragStartIndex === null || !dragElement) return;
  const clientX = e.clientX;
  const clientY = e.clientY;

  if (Math.abs(clientX - startX) > 5 || Math.abs(clientY - startY) > 5) {
    isMoved = true;
  }

  dragElement.style.left = `${clientX - 27}px`;
  dragElement.style.top = `${clientY - 27}px`;
}

function handleTouchMove(e) {
  if (dragStartIndex === null || !dragElement) return;
  const clientX = e.touches[0].clientX;
  const clientY = e.touches[0].clientY;

  if (Math.abs(clientX - startX) > 5 || Math.abs(clientY - startY) > 5) {
    isMoved = true;
  }

  dragElement.style.left = `${clientX - 27}px`;
  dragElement.style.top = `${clientY - 27}px`;
}

function handleMouseUp(e) {
  if (dragStartIndex === null) return;
  endDrag(e.clientX, e.clientY);
}

function handleTouchEnd(e) {
  if (dragStartIndex === null) return;
  const changedTouch = e.changedTouches[0];
  endDrag(changedTouch.clientX, changedTouch.clientY);
}

function endDrag(clientX, clientY) {
  if (dragElement) dragElement.remove();

  if (!isMoved) {
    const item = gridData[dragStartIndex];
    if (item) {
      if (item.isTrash) {
        showTrashModal(dragStartIndex);
      } else if (item.isGenerator) {
        triggerGenerator(item, dragStartIndex);
        showItemModal(item);
      } else {
        showItemModal(item);
      }
    }
    cleanDragState();
    return;
  }

  const elementUnder = document.elementFromPoint(clientX, clientY);
  if (!elementUnder) {
    cleanDragState();
    return;
  }

  const targetCell = elementUnder.closest('.cell');
  if (!targetCell) {
    cleanDragState();
    return;
  }

  const dragTargetIndex = parseInt(targetCell.dataset.index);
  if (dragStartIndex === dragTargetIndex || lockedCells.includes(dragTargetIndex) || (gridData[dragTargetIndex] && gridData[dragTargetIndex].isTrash)) {
    cleanDragState();
    return;
  }

  executeMergeOrSwap(dragStartIndex, dragTargetIndex);
  cleanDragState();
}

function cleanDragState() {
  isDragging = false;
  if (dragElement) {
    dragElement.remove();
    dragElement = null;
  }
  dragStartIndex = null;
  isMoved = false;
  renderGrid(); // Принудительный рендер восстановит все opacity
}

function executeMergeOrSwap(fromIdx, toIdx) {
  const source = gridData[fromIdx];
  const target = gridData[toIdx];

  if (target && !source.isGenerator && !target.isGenerator && source.category === target.category && source.level === target.level) {
    if (source.level < 7) {
      gridData[fromIdx] = null;
      gridData[toIdx] = { category: source.category, level: source.level + 1 };
      saveGame();
      updateUI();
      triggerMergeEffects(toIdx, source.category);
    }
  } else if (target && source.isGenerator && target.isGenerator && source.category === target.category && source.genLevel === target.genLevel) {
    if (source.genLevel < 3) {
      const nextLvl = source.genLevel + 1;
      gridData[fromIdx] = null;
      gridData[toIdx] = {
        isGenerator: true,
        category: source.category,
        genLevel: nextLvl,
        genEnergy: GEN_ENERGY_CONFIG[nextLvl].max,
        lastRegenTime: Date.now()
      };
      saveGame();
      updateUI();
      triggerMergeEffects(toIdx, source.category);
      showToast(`🎉 Генератор улучшен до уровня ${ROMAN_NUMERALS[nextLvl]}!`, "success");
    }
  } else {
    gridData[fromIdx] = target;
    gridData[toIdx] = source;
    saveGame();
    updateUI();
  }
}

function triggerMergeEffects(idx, category) {
  setTimeout(() => {
    const cells = document.querySelectorAll('.cell');
    const targetCell = cells[idx];
    if (!targetCell) return;

    const wrapper = targetCell.querySelector('.item-wrapper');
    if (wrapper) {
      wrapper.classList.remove('merge-animate');
      void wrapper.offsetWidth;
      wrapper.classList.add('merge-animate');
    }

    const themeColor = ITEM_CATEGORIES[category] ? ITEM_CATEGORIES[category].color : '#ff477e';
    const flash = document.createElement('div');
    flash.classList.add('merge-flash');
    flash.style.setProperty('--flash-color', themeColor);
    targetCell.appendChild(flash);
    setTimeout(() => flash.remove(), 400);

    const rect = targetCell.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('merge-particle');
      particle.style.backgroundColor = themeColor;
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;

      const angle = Math.random() * Math.PI * 2;
      const speed = 20 + Math.random() * 40;
      const pX = Math.cos(angle) * speed;
      const pY = Math.sin(angle) * speed;

      particle.style.setProperty('--x', `${pX}px`);
      particle.style.setProperty('--y', `${pY}px`);

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 500);
    }
  }, 20);
}

function showTrashModal(index) {
  const overlay = document.getElementById('info-modal');
  const mIcon = document.getElementById('m-icon');
  const mTitle = document.getElementById('m-title');
  const mSubtitle = document.getElementById('m-subtitle');
  const mDesc = document.getElementById('m-desc');
  const actionBtn = document.getElementById('m-action-btn');
  document.getElementById('m-danger-group').style.display = 'none';

  mIcon.innerHTML = gridData[index].icon || '🪨';
  mTitle.innerText = 'Завал на участке';
  mSubtitle.innerText = 'Заблокировано';
  mDesc.innerText = 'Эта клетка покрыта паутиной и завалена старым мусором. Потратьте энергию, чтобы очистить поле и найти полезный предмет!';

  actionBtn.style.display = 'block';
  actionBtn.innerText = 'Расчистить завал (⚡ 25)';
  actionBtn.onclick = () => clearTrash(index);

  overlay.className = 'modal-overlay active blocking';
}

function clearTrash(index) {
  if (energy < 25) {
    showToast("⚡ Недостаточно энергии для расчистки (нужно 25)!", "error");
    closeModal();
    return;
  }
  energy -= 25;
  const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
  gridData[index] = { category: randomCat, level: 1 };
  closeModal();
  saveGame();
  updateUI();
  showToast("Клетка успешно очищена!", "success");

  setTimeout(() => {
    const cells = document.querySelectorAll('.cell');
    const wrapper = cells[index].querySelector('.item-wrapper');
    if (wrapper) {
      wrapper.classList.add('merge-animate');
    }
  }, 50);
}

function showItemModal(item) {
  const overlay = document.getElementById('info-modal');
  const mIcon = document.getElementById('m-icon');
  const mTitle = document.getElementById('m-title');
  const mSubtitle = document.getElementById('m-subtitle');
  const mDesc = document.getElementById('m-desc');
  const actionBtn = document.getElementById('m-action-btn');
  document.getElementById('m-danger-group').style.display = 'none';
  actionBtn.style.display = 'none';

  if (item.isGenerator) {
    const genInfo = GENERATOR_BOXES[item.category];
    const lvl = item.genLevel || 1;
    const config = GEN_ENERGY_CONFIG[lvl];
    if (item.genEnergy === undefined) item.genEnergy = config.max;

    mIcon.innerHTML = `
                    <div class="generator-icon-container">
                        <span class="generator-box-bg">📦</span>
                        <span class="generator-item-fg">${genInfo.icon}</span>
                    </div>
                `;
    mTitle.innerText = `${genInfo.name} [${ROMAN_NUMERALS[lvl]}]`;
    mSubtitle.innerText = `Генератор • Уровень ${ROMAN_NUMERALS[lvl]}`;

    let cdSec = config.cooldown / 1000;
    if (lvl === 1) {
      mDesc.innerText = `${genInfo.desc} Базовый уровень. Создаёт предметы Ур.1. Восстанавливает 1 заряд каждые ${cdSec} сек.`;
    } else if (lvl === 2) {
      mDesc.innerText = `${genInfo.desc} Улучшенный ранг. Шансы дропа: Ур.1 — 80%, Ур.2 — 20%. Заряд каждые ${cdSec} сек.`;
    } else if (lvl === 3) {
      mDesc.innerText = `${genInfo.desc} Максимальный ранг! Дропает предметы вплоть до Ур.3. Регенерация заряда всего за ${cdSec} сек.`;
    }
  } else {
    const info = ITEM_CATEGORIES[item.category].items[item.level - 1];
    mIcon.innerHTML = info.icon;
    mTitle.innerText = info.name;
    mSubtitle.innerText = `${ITEM_CATEGORIES[item.category].name} • Уровень ${item.level}`;
    mDesc.innerText = info.desc;
  }
  overlay.className = 'modal-overlay active';
}

function showCharacterModal(order) {
  const overlay = document.getElementById('info-modal');
  const mIcon = document.getElementById('m-icon');
  const mTitle = document.getElementById('m-title');
  const mSubtitle = document.getElementById('m-subtitle');
  const mDesc = document.getElementById('m-desc');
  const actionBtn = document.getElementById('m-action-btn');
  document.getElementById('m-danger-group').style.display = 'none';
  actionBtn.style.display = 'none';

  mIcon.innerHTML = order.character.icon;
  mTitle.innerText = order.character.name;
  mSubtitle.innerText = order.isStory ? "🔥 Важный гость (Сюжет)" : "Постоянный клиент";
  mDesc.innerText = order.character.desc || "Заглянул за покупками.";

  overlay.className = 'modal-overlay active';
}

function showInfoModal(info) {
  const overlay = document.getElementById('info-modal');
  const mIcon = document.getElementById('m-icon');
  const mTitle = document.getElementById('m-title');
  const mSubtitle = document.getElementById('m-subtitle');
  const mDesc = document.getElementById('m-desc');
  const actionBtn = document.getElementById('m-action-btn');
  document.getElementById('m-danger-group').style.display = 'none';
  actionBtn.style.display = 'none';

  mIcon.innerHTML = info.icon;
  mTitle.innerText = info.name;
  mSubtitle.innerText = info.subtitle;
  mDesc.innerText = info.desc;

  overlay.className = 'modal-overlay active';
}

function closeModal() {
  document.getElementById('info-modal').className = 'modal-overlay';
}

function triggerGenerator(generator, fromIndex) {
  restoreGeneratorsEnergy();
  const lvl = generator.genLevel || 1;
  const config = GEN_ENERGY_CONFIG[lvl];
  if (generator.genEnergy === undefined) generator.genEnergy = config.max;

  if (generator.genEnergy <= 0) {
    showToast("📦 Генератор истощен! Подождите, пока накопятся заряды.", "error");
    return;
  }
  if (energy <= 0) {
    showToast("⚡ Упс! Недостаточно энергии игрока!", "error");
    return;
  }

  let emptyCells = getAvailableEmptyCells();
  if (emptyCells.length === 0) return;

  if (generator.genEnergy === config.max) {
    generator.lastRegenTime = Date.now();
  }
  generator.genEnergy--;
  energy--;

  let targetCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  lockedCells.push(targetCellIndex);

  let spawnLevel = 1;
  const rand = Math.random() * 100;
  if (lvl === 2) {
    if (rand < 20) spawnLevel = 2;
  } else if (lvl === 3) {
    if (rand < 10) spawnLevel = 3;
    else if (rand < 35) spawnLevel = 2;
  }

  const cellElements = document.querySelectorAll('.cell');
  const fromCellElement = cellElements[fromIndex];
  const targetCellElement = cellElements[targetCellIndex];
  const icon = ITEM_CATEGORIES[generator.category].items[spawnLevel - 1].icon;

  moveItem3D(fromCellElement, targetCellElement, icon, () => {
    gridData[targetCellIndex] = { category: generator.category, level: spawnLevel };
    lockedCells = lockedCells.filter(idx => idx !== targetCellIndex);
    saveGame();
    updateUI();

    const placedCellWrapper = cellElements[targetCellIndex].querySelector('.item-wrapper');
    if (placedCellWrapper) {
      placedCellWrapper.classList.remove('merge-animate');
      void placedCellWrapper.offsetWidth;
      placedCellWrapper.classList.add('merge-animate');
    }
  });
}

function moveItem3D(fromElem, toElem, icon, callback) {
  if (!fromElem || !toElem) return callback();
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
    callback();
  }, 400);
}

function confirmReset() {
  const overlay = document.getElementById('info-modal');
  document.getElementById('m-icon').innerHTML = '⚠️';
  document.getElementById('m-title').innerText = 'Сбросить весь прогресс?';
  document.getElementById('m-subtitle').innerText = 'Полное обнуление';
  document.getElementById('m-desc').innerText = 'Вы потеряете все свои открытые предметы, генераторы, очки уровня и текущие заказы. Это действие нельзя отменить.';
  document.getElementById('m-action-btn').style.display = 'none';
  document.getElementById('m-danger-group').style.display = 'flex';

  document.getElementById('m-confirm-btn').onclick = () => {
    localStorage.removeItem('merge_game_save');
    closeModal();
    startNewGame();
    updateUI();
    showToast("Игра полностью перезапущена", "success");
  };
  overlay.className = 'modal-overlay active blocking';
}

function checkProgressiveUnlocks() {
  UNLOCK_THRESHOLDS.forEach(threshold => {
    if (score >= threshold.score && !threshold.unlocked) {
      threshold.unlocked = true;
      if (lockedCategories.length > 0) {
        const newCat = lockedCategories.shift();
        activeCategories.push(newCat);

        let emptyCells = getEmptyGridCells();
        if (emptyCells.length > 0) {
          const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          gridData[targetCell] = {
            isGenerator: true,
            category: newCat,
            genLevel: 1,
            genEnergy: GEN_ENERGY_CONFIG[1].max,
            lastRegenTime: Date.now()
          };
          setTimeout(() => {
            const cells = document.querySelectorAll('.cell');
            const wrapper = cells[targetCell].querySelector('.item-wrapper');
            if (wrapper) {
              wrapper.classList.remove('merge-animate');
              void wrapper.offsetWidth;
              wrapper.classList.add('merge-animate');
            }
          }, 50);
        }
        showToast(`🎉 Уровень ${threshold.level}! Новый генератор: ${GENERATOR_BOXES[newCat].name}!`, "success");
      } else {
        spawnBonusGenerator();
        showToast(`🎉 Уровень ${threshold.level}! Бонус: Новый генератор [I] уровня!`, "success");
      }
    }
  });
}

function spawnBonusGenerator() {
  let emptyCells = getEmptyGridCells();
  if (emptyCells.length > 0) {
    const targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const randomActiveCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    gridData[targetCell] = {
      isGenerator: true,
      category: randomActiveCat,
      genLevel: 1,
      genEnergy: GEN_ENERGY_CONFIG[1].max,
      lastRegenTime: Date.now()
    };
    setTimeout(() => {
      const cells = document.querySelectorAll('.cell');
      const wrapper = cells[targetCell].querySelector('.item-wrapper');
      if (wrapper) {
        wrapper.classList.remove('merge-animate');
        void wrapper.offsetWidth;
        wrapper.classList.add('merge-animate');
      }
    }, 50);
  }
}

function showToast(text, type = "success") {
  const toast = document.getElementById('game-toast');
  toast.innerText = text;
  toast.className = '';
  toast.classList.add(type, 'show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function generateOrder() {
  const isStoryRoll = Math.random() < 0.15;
  const hasActiveStory = orders.some(o => o.isStory);

  if (isStoryRoll && !hasActiveStory) {
    generateStoryOrder(1);
    return;
  }

  const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  const itemsCount = Math.floor(Math.random() * 3) + 1;
  const requestedItems = [];

  let minLevel = 1;
  let maxLevel = 2;

  UNLOCK_THRESHOLDS.forEach(level => {
    if(score > level.prevLimit && score <= level.score ) {
      if (level.level === 2) {
        minLevel = 1
        maxLevel = 2
      } else if (level.level === 3) {
        minLevel = 1
        maxLevel = 3
      } else if (level.level === 4) {
        minLevel = 1
        maxLevel = 5
      } else if (level.level === 5) {
        minLevel = 2
        maxLevel = 6
      } else if (level.level === 6) {
        minLevel = 3
        maxLevel = 7
      } else if (level.level === 7) {
        minLevel = 4
        maxLevel = 7
      } else if (level.level > 7) {
        minLevel = 1
        maxLevel = 7
      }
    }
  })

  for (let i = 0; i < itemsCount; i++) {
    const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
    requestedItems.push({ category: randomCat, level: randomLevel });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  orders.push({
    id: orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: false
  });
}

function generateStoryOrder(step, fixedChar = null) {
  const char = fixedChar || STORY_CHARACTERS[Math.floor(Math.random() * STORY_CHARACTERS.length)];
  const requestedItems = [];

  let targetLevel = Math.min(7, step + 2);
  const randomCat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
  requestedItems.push({ category: randomCat, level: targetLevel });

  if (step >= 2) {
    const randomCat2 = activeCategories[Math.floor(Math.random() * activeCategories.length)];
    requestedItems.push({ category: randomCat2, level: Math.max(1, targetLevel - 2) });
  }

  requestedItems.sort((a, b) => a.level - b.level);

  orders.push({
    id: orderIdCounter++,
    character: char,
    items: requestedItems,
    canComplete: false,
    isStory: true,
    storyStep: step
  });

  if (step === 1 && !fixedChar) {
    showToast(`🕵️‍♂️ Появился сюжетный персонаж с особым заказом!`, "story");
  }
}

function checkOrdersAvailability() {
  orders.forEach(order => {
    let tempGrid = [...gridData];
    let matchCount = 0;

    order.items.forEach(reqItem => {
      const foundIdx = tempGrid.findIndex((item, idx) =>
        item && !item.isGenerator && !item.isTrash &&
        item.category === reqItem.category && item.level === reqItem.level &&
        !lockedCells.includes(idx)
      );
      if (foundIdx !== -1) {
        matchCount++;
        tempGrid[foundIdx] = null;
      }
    });
    order.canComplete = (matchCount === order.items.length);
  });

  // Автоматическое перемещение готовых к сдаче заказов влево
  orders.sort((a, b) => {
    if (a.canComplete && !b.canComplete) return -1;
    if (!a.canComplete && b.canComplete) return 1;
    return 0;
  });
}

function renderOrders() {
  const ordersList = document.getElementById('orders-list');

  // Получаем список старых ID для сохранения структуры
  const currentCards = Array.from(ordersList.children);
  const currentIds = currentCards.map(c => c.id);

  // Создаем или обновляем карточки на основе отсортированного массива
  orders.forEach((order, index) => {
    const cardId = `order-card-${order.id}`;
    let card = document.getElementById(cardId);

    if (!card) {
      card = document.createElement('div');
      card.id = cardId;
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
      const itemInfo = ITEM_CATEGORIES[item.category].items[item.level - 1];
      itemsHTML += `<div class="order-target" title="${itemInfo.name}"><span class="order-item-icon">${itemInfo.icon}</span></div>`;
    });
    itemsHTML += '</div>';

    card.innerHTML = `
                    <div class="order-header">
                        <div class="order-header-info" onclick='showCharacterById(${order.id})'>
                            <span class="character-avatar">${order.character.icon}</span>
                            <span style="font-weight:bold; overflow:hidden; text-overflow:ellipsis;">${order.character.name}</span>
                        </div>
                        ${!order.isStory ? `<button class="cancel-btn" onclick="cancelOrder(${order.id})">&times;</button>` : `<span style="font-size:0.65rem; color:#ffb703; font-weight:bold;">⚡Сюжет ${order.storyStep}/3</span>`}
                    </div>
                    ${itemsHTML}
                    <button class="complete-btn ${order.canComplete ? 'visible' : ''}" onclick="completeOrder(${order.id})">Сдать заказ</button>
                `;
  });

  // Удаляем карточки, которых больше нет в логике игры
  const activeIds = orders.map(o => `order-card-${o.id}`);
  currentCards.forEach(c => {
    if (!activeIds.includes(c.id) && !c.classList.contains('fade-out')) {
      c.remove();
    }
  });
}

function showCharacterById(id) {
  const order = orders.find(o => o.id === id);
  if (order) showCharacterModal(order);
}

function cancelOrder(id) {
  const idx = orders.findIndex(o => o.id === id);
  if (idx !== -1 && !orders[idx].isStory) {
    orders.splice(idx, 1);
    generateOrder();
    saveGame();
    updateUI();
    showToast("Заказ отменен клиентом", "error");
  }
}

function completeOrder(id) {
  checkOrdersAvailability();
  const orderIndex = orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return;

  const order = orders[orderIndex];
  if (!order.canComplete) {
    showToast("У вас нет необходимых предметов на поле!", "error");
    return;
  }

  // Находим карточку в DOM для запуска анимации испарения
  const cardElement = document.getElementById(`order-card-${id}`);
  if (cardElement) {
    cardElement.classList.add('fade-out');
  }

  // Запускаем 3D-анимации полета предметов с поля к аватару заказа
  const cellElements = document.querySelectorAll('.cell');
  const targetAvatarElement = cardElement ? cardElement.querySelector('.character-avatar') : null;

  let elementsToAnimate = [];
  let tempGrid = [...gridData];

  order.items.forEach(reqItem => {
    const foundIdx = tempGrid.findIndex((item, idx) =>
      item && !item.isGenerator && !item.isTrash &&
      item.category === reqItem.category && item.level === reqItem.level &&
      !lockedCells.includes(idx)
    );
    if (foundIdx !== -1) {
      elementsToAnimate.push({
        idx: foundIdx,
        icon: ITEM_CATEGORIES[reqItem.category].items[reqItem.level - 1].icon,
        level: reqItem.level
      });
      tempGrid[foundIdx] = null;
    }
  });

  elementsToAnimate.forEach(el => {
    lockedCells.push(el.idx);
    gridData[el.idx] = null;
  });
  renderGrid();

  let completedAnimations = 0;
  elementsToAnimate.forEach(el => {
    moveItem3D(cellElements[el.idx], targetAvatarElement, el.icon, () => {
      lockedCells = lockedCells.filter(idx => idx !== el.idx);
      score += el.level * 50;
      completedAnimations++;

      if (completedAnimations === elementsToAnimate.length) {
        // Ждём завершения CSS-анимации таяния карточки (.fade-out длится 400мс)
        setTimeout(() => {
          const wasStory = order.isStory;
          const currentStep = order.storyStep;
          const storyChar = order.character;

          orders.splice(orderIndex, 1);
          checkProgressiveUnlocks();

          if (wasStory) {
            energy += 3
            if (currentStep < 3) {
              generateStoryOrder(currentStep + 1, storyChar);
              showToast(`🔮 Сюжет выполнен! Шаг ${currentStep + 1}/3 начался.`, "story");
            } else {
              spawnBonusGenerator();
              generateOrder();
              showToast(`🎁 Сюжет завершен! Получен новый генератор 1-го уровня!`, "story");
            }
          } else {
            generateOrder();
          }

          saveGame();
          updateUI();
        }, 400);
      }
    });
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

window.onload = initGame;
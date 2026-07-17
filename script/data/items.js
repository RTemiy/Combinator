export const CATEGORIES_CONFIG = {
  flowers: {
    name: 'Растения',
    color: '#04c30e',
    generatorKey: 'flowers',
    items: [
      { level: 1, icon: 'assets/icons/categories/flowers/seeds.png', name: 'Семена растений', desc: 'Маленькие спящие зерна. Посадите их в землю, чтобы дать жизнь.' },
      { level: 2, icon: 'assets/icons/categories/flowers/sprout.png', name: 'Зеленый росток', desc: 'Юный и хрупкий стебелек, который только-только пробился из земли.' },
      { level: 3, icon: 'assets/icons/categories/flowers/mint.png', name: 'Небольшое растение', desc: 'Растение окрепло и обзавелось несколькими листочками.' },
      { level: 4, icon: 'assets/icons/categories/flowers/potted_plant.png', name: 'Большое в горшке', desc: 'Ухоженный цветок в керамике. Идеально подходит для украшения интерьера.' },
      { level: 5, icon: 'assets/icons/categories/flowers/rose.png', name: 'Алая роза', desc: 'Прекрасный и гордый цветок с острыми защитными шипами.' },
      { level: 6, icon: 'assets/icons/categories/flowers/bouquet.png', name: 'Праздничный букет', desc: 'Красивая композиция из лучших цветов в подарочной упаковке.' },
      { level: 7, icon: 'assets/icons/categories/flowers/tree.png', name: 'Яблоня', desc: 'Могучее дерево, которое весной цветет, а осенью дарит сочные яблоки. Начало яблочного производства.', becomesGenerator: { category: 'apples', charges: 7 } }
    ]
  },
  apples: {
    name: 'Яблочное производство',
    color: '#ff0000',
    generatorKey: 'apples',
    items: [
      { level: 1, icon: 'assets/icons/categories/apples/slice.png', name: 'Долька яблока', desc: 'Сочный кусочек яблока, идеален для быстрого перекуса.' },
      { level: 2, icon: 'assets/icons/categories/apples/apple.png', name: 'Целое яблоко', desc: 'Спелое и хрустящее яблоко, полное витаминов.' },
      { level: 3, icon: 'assets/icons/categories/apples/box.png', name: 'Ящик яблок', desc: 'Полный ящик отборных яблок, готовых к переработке.' },
      { level: 4, icon: 'assets/icons/categories/apples/juice_glass.png', name: 'Стакан яблочного сока', desc: 'Свежевыжатый сок, сохранивший весь вкус и аромат яблок.' },
      { level: 5, icon: 'assets/icons/categories/apples/juice_bottle.png', name: 'Бутылка яблочного сока', desc: 'Удобная бутылка с натуральным соком, чтобы поделиться с друзьями.' },
      { level: 6, icon: 'assets/icons/categories/apples/pie.png', name: 'Шарлотка', desc: 'Классический яблочный пирог с нежным бисквитом и корицей.' },
      { level: 7, icon: 'assets/icons/categories/apples/jelly_cake.png', name: 'Желе-торт из яблок', desc: 'Легкий и освежающий десерт из яблочного желе и кусочков фруктов.' },
    ]
  },
  coffee: {
    name: 'Кофе',
    color: '#c5420d',
    generatorKey: 'coffee',
    items: [
      { level: 1, icon: 'assets/icons/categories/coffee/empty_cup.png', name: 'Пустой стаканчик', desc: 'Бумажный стаканчик, готовый к наполнению.' },
      { level: 2, icon: 'assets/icons/categories/coffee/cup_coffee.png', name: 'Стаканчик с кофе', desc: 'Горячий эспрессо в простом стаканчике.' },
      { level: 3, icon: 'assets/icons/categories/coffee/ready_cup.png', name: 'Стаканчик навынос', desc: 'Кофе с крышкой, который удобно взять с собой.' },
      { level: 4, icon: 'assets/icons/categories/coffee/ceramic.png', name: 'Пустая керамическая чашка', desc: 'Элегантная чашка для настоящих ценителей.' },
      { level: 5, icon: 'assets/icons/categories/coffee/ceramic_coffee.png', name: 'Чашка с кофе', desc: 'Ароматный американо в керамической чашке.' },
      { level: 6, icon: 'assets/icons/categories/coffee/cappuccino.png', name: 'Капучино', desc: 'Нежный кофе с пышной молочной пенкой.' },
      { level: 7, icon: 'assets/icons/categories/coffee/best_coffee.png', name: 'Сладкий кофе с допингами', desc: 'Авторский напиток с сиропом, сливками и маршмеллоу.' },
    ]
  },
  stationery: {
    name: 'Письменные принадлежности',
    color: '#0fffd4',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: 'assets/icons/categories/writings/clip.png', name: 'Скрепка', desc: 'Маленький металлический помощник, удерживающий листы вместе.' },
      { level: 2, icon: 'assets/icons/categories/writings/eraser.png', name: 'Ластик', desc: 'Стирает ошибки и неудачные наброски, давая второй шанс.' },
      { level: 3, icon: 'assets/icons/categories/writings/pencil.png', name: 'Карандаш', desc: 'Простой инструмент для письма и рисования, основа творчества.' },
      { level: 4, icon: 'assets/icons/categories/writings/pen.png', name: 'Ручка', desc: 'Оставляет четкий и уверенный след, идеальна для важных записей.' },
      { level: 5, icon: 'assets/icons/categories/writings/scissors.png', name: 'Ножницы', desc: 'Острые лезвия для точной резки бумаги и картона.' },
      { level: 6, icon: 'assets/icons/categories/writings/pencil_case.png', name: 'Пенал', desc: 'Вместилище для всех письменных сокровищ, поддерживает порядок.' },
      { level: 7, icon: 'assets/icons/categories/writings/organizer.png', name: 'Подставка для письменных принадлежностей', desc: 'Органайзер, который собирает все инструменты в одном месте.' },
    ]
  },
  books: {
    name: 'Книги',
    color: '#0f1eff',
    generatorKey: 'stationery',
    items: [
      { level: 1, icon: 'assets/icons/categories/books/sticker.png', name: 'Липучая наклейка', desc: 'Маленький листок для быстрых заметок и напоминаний.' },
      { level: 2, icon: 'assets/icons/categories/books/paper.png', name: 'Упаковка наклеек', desc: 'Свежая упаковка наклеек, прямо из типографии. Все готово для мощного брейншторма.' },
      { level: 3, icon: 'assets/icons/categories/books/spiral_notebook.png', name: 'Блокнот на пружине', desc: 'Удобный блокнот для конспектов и зарисовок.' },
      { level: 4, icon: 'assets/icons/categories/books/notebook.png', name: 'Блокнот', desc: 'Надежный спутник для записи мыслей и планов в твердой обложке.' },
      { level: 5, icon: 'assets/icons/categories/books/book.png', name: 'Книжка', desc: 'Источник знаний или увлекательная история в переплете.' },
      { level: 6, icon: 'assets/icons/categories/books/books_stack.png', name: 'Стопка книг', desc: 'Коллекция мудрости и приключений, ожидающая своего читателя.' },
      { level: 7, icon: 'assets/icons/categories/books/bookshelf.png', name: 'Книжный шкаф', desc: 'Целая библиотека, хранящая в себе миры и эпохи.' },
    ]
  },
  bakery: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/dough/toast.png', name: 'Тост', desc: 'Поджаренный ломтик хлеба, хрустящий снаружи и мягкий внутри.' },
      { level: 2, icon: 'assets/icons/categories/dough/bagel.png', name: 'Бейгл', desc: 'Плотный бублик, который часто едят с начинкой.' },
      { level: 3, icon: 'assets/icons/categories/dough/brioche.png', name: 'Бриошь', desc: 'Сдобная булочка из воздушного теста, идеальна для завтрака.' },
      { level: 4, icon: 'assets/icons/categories/dough/ciabatta.png', name: 'Чиабатта', desc: 'Итальянский хлеб с пористой мякотью и хрустящей корочкой.' },
      { level: 5, icon: 'assets/icons/categories/dough/focaccia.png', name: 'Фокачча с оливками', desc: 'Пышная итальянская лепешка, сдобренная оливковым маслом и оливками.' },
      { level: 6, icon: 'assets/icons/categories/dough/baguette.png', name: 'Багет', desc: 'Длинный и тонкий французский хлеб с хрустящей корочкой.' },
      { level: 7, icon: 'assets/icons/categories/dough/karavai.png', name: 'Каравай', desc: 'Пышный и румяный праздничный хлеб, символ гостеприимства.' },
    ]
  },
  pastry: {
    name: 'Кондитерские изделия',
    color: '#ed08c7',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/candies/cacao.png', name: 'Какао', desc: 'Упаковка какао-порошка, основа для будущих шоколадных шедевров.' },
      { level: 2, icon: 'assets/icons/categories/candies/choco_candy.png', name: 'Шоколадная конфета', desc: 'Маленькое шоколадное удовольствие с нежной начинкой.' },
      { level: 3, icon: 'assets/icons/categories/candies/choco_bar.png', name: 'Плитка шоколада', desc: 'Классическая плитка темного шоколада.' },
      { level: 4, icon: 'assets/icons/categories/candies/muffin.png', name: 'Шоколадный маффин', desc: 'Воздушный кекс с кусочками тающего шоколада.' },
      { level: 5, icon: 'assets/icons/categories/candies/croissant.png', name: 'Круассан с фисташковой пастой', desc: 'Слоеный круассан с ароматной и сладкой фисташковой начинкой.' },
      { level: 6, icon: 'assets/icons/categories/candies/eclairs.png', name: 'Упаковка эклеров', desc: 'Набор изысканных заварных пирожных с нежным кремом.' },
      { level: 7, icon: 'assets/icons/categories/candies/bento_cake.png', name: 'Бенто-торт', desc: 'Миниатюрный торт в коробочке, модный и вкусный десерт.' },
    ]
  },
  currant: {
    name: 'Смородина',
    color: '#8c00ff',
    generatorKey: 'currant',
    items: [
      { level: 1, icon: 'assets/icons/categories/berries/single_berry.png', name: 'Ягодка смородины', desc: 'Одна-единственная спелая и блестящая ягодка.' },
      { level: 2, icon: 'assets/icons/categories/berries/bunch.png', name: 'Гроздь смородины', desc: 'Целая веточка, усыпанная кисло-сладкими ягодами.' },
      { level: 3, icon: 'assets/icons/categories/berries/handful.png', name: 'Горсть смородины', desc: 'Несколько ягод, которых хватит, чтобы распробовать вкус лета.' },
      { level: 4, icon: 'assets/icons/categories/berries/bowl.png', name: 'Миска со смородиной', desc: 'Полная миска свежесобранных ягод, посыпанных сахаром.' },
      { level: 5, icon: 'assets/icons/categories/berries/basket.png', name: 'Корзинка смородины', desc: 'Небольшая плетеная корзинка, доверху наполненная урожаем.' },
      { level: 6, icon: 'assets/icons/categories/berries/jam_jar.png', name: 'Банка варенья', desc: 'Густое и сладкое смородиновое варенье, заготовленное на зиму.' },
      { level: 7, icon: 'assets/icons/categories/berries/pie.png', name: 'Пирог со смородиной', desc: 'Домашний пирог с ароматной ягодной начинкой.' },
    ]
  },
  honey: {
    name: 'Мёд',
    color: '#ffb703',
    generatorKey: 'beehive',
    items: [
      { level: 1, icon: 'assets/icons/categories/honey/nectar.png', name: 'Цветочный нектар', desc: 'Сладкая жидкость, собранная пчелами. Основа будущего мёда.' },
      { level: 2, icon: 'assets/icons/categories/honey/honey_cell.png', name: 'Ячейка сот', desc: 'Одна восковая ячейка, доверху наполненная свежим мёдом.' },
      { level: 3, icon: 'assets/icons/categories/honey/honeycomb.png', name: 'Кусочек сот', desc: 'Ароматный кусочек сот. Можно жевать прямо так!' },
      { level: 4, icon: 'assets/icons/categories/honey/honey_jar.png', name: 'Баночка жидкого мёда', desc: 'Классический цветочный мёд, прозрачный и тягучий.' },
      { level: 5, icon: 'assets/icons/categories/honey/creamed_honey.png', name: 'Крем-мёд', desc: 'Нежный взбитый мёд, который тает во рту. Идеально для тостов.' },
      { level: 6, icon: 'assets/icons/categories/honey/honey_with_nuts.png', name: 'Мёд с орехами', desc: 'Питательное лакомство: отборные орехи в цветочном мёде.' },
      { level: 7, icon: 'assets/icons/categories/honey/honey_barrel.png', name: 'Бочонок выдержанного мёда', desc: 'Большой бочонок редкого, выдержанного годами мёда. Настоящее сокровище.' },
    ]
  },
  wax: {
    name: 'Воск',
    color: '#fca311',
    generatorKey: 'beehive',
    items: [
      { level: 1, icon: 'assets/icons/categories/wax/propolis.png', name: 'Пчелиный клей (Прополис)', desc: 'Клейкое смолистое вещество, которое пчелы используют для дезинфекции улья.' },
      { level: 2, icon: 'assets/icons/categories/wax/wax_piece.png', name: 'Кусочек воска', desc: 'Небольшой комочек натурального пчелиного воска.' },
      { level: 3, icon: 'assets/icons/categories/wax/wax_sheet.png', name: 'Лист вощины', desc: 'Тонкий рифленый лист воска, основа для сот и свечей.' },
      { level: 4, icon: 'assets/icons/categories/wax/wax_candle.png', name: 'Свеча из вощины', desc: 'Скрученная вручную свеча с приятным медовым ароматом.' },
      { level: 5, icon: 'assets/icons/categories/wax/shaped_candle.png', name: 'Фигурная свеча', desc: 'Восковая свеча в форме цветка.' },
      { level: 6, icon: 'assets/icons/categories/wax/sachet.png', name: 'Флорентийское саше', desc: 'Ароматная восковая плитка с сухоцветами и эфирными маслами для ароматизации белья или небольших помещений.' },
      { level: 7, icon: 'assets/icons/categories/wax/candle_set.png', name: 'Набор свечей', desc: 'Коллекция декоративных свечей для уюта в доме.' },
    ]
  }
  /* Заготовка
  candies: {
    name: 'Выпечка',
    color: '#edca08',
    generatorKey: 'bakery',
    items: [
      { level: 1, icon: 'assets/icons/categories/dough/.png', name: '', desc: '' },
    ]
  }
  */
};
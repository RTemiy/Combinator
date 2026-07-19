export const STORY_DATA = {
  'neighbor_arc': {
    id: 'neighbor_arc',
    title: "Соседские сплетни",
    description: "Познакомьтесь с вашей новой соседкой. Кто знает, к чему приведёт это знакомство?",
    requiredLevel: 3,
    icon: new URL('/assets/icons/characters/neighbor.png', import.meta.url),
    chapters: {
      1: {
        title: "Приглашение на ужин",
        steps: [
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Ой, здравствуйте! А я вас и не заметила. Вы, должно быть, новый владелец этой чудесной лавочки? Я ваша соседка, живу прямо за углом. Так приятно познакомиться!' },
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Слушайте, а раз уж мы теперь соседи, может, как-нибудь поужинаем вместе? Я бы с удовольствием рассказала вам все местные сплетни... то есть, новости! Я могу принести что-нибудь к чаю, а вы организуете основное блюдо?' },
          {
            type: 'task',
            character: new URL('/assets/icons/characters/neighbor.png', import.meta.url),
            name: 'Соседка',
            text: 'Правда? Замечательно! Чтобы произвести впечатление, нужно как следует подготовиться. Думаю, 1000 монет хватит на закупку лучших продуктов для нашего ужина.',
            task: { type: 'spend_coins', amount: 1000, buttonText: 'Подготовиться к ужину' },
            reward: { type: 'generator', key: 'bonus_chest', level: 1 }
          },
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Договорились! Я так рада! Не волнуйтесь, с пустыми руками я не приду. Захвачу для вас небольшой, но очень полезный подарочек в знак нашей дружбы. До вечера!' },
        ]
      },
      2: {
        title: "Щедрое предложение",
        steps: [
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Снова здравствуйте! Наш прошлый ужин был просто восхитителен! Вы настоящий мастер своего дела.' },
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Знаете, я тут на одной ярмарке видела просто потрясающую вещь... Она идеально впишется в ваш магазинчик. Я могу ее достать, но мне снова нужна ваша помощь с финансами.' },
          {
            type: 'task',
            character: new URL('/assets/icons/characters/neighbor.png', import.meta.url),
            name: 'Соседка',
            text: 'Это будет стоить немного дороже, около 1250 монет. Но поверьте, оно того стоит! Вы получите кое-что действительно редкое и полезное. Ну что, поможете старой знакомой?',
            task: { type: 'spend_coins', amount: 1250, buttonText: 'Помочь соседке' },
            reward: { type: 'generator', key: 'bonus_chest', level: 2 }
          },
          { type: 'dialogue', character: new URL('/assets/icons/characters/neighbor.png', import.meta.url), name: 'Соседка', text: 'Я знала, что на вас можно положиться! Вот, держите. Это улучшенная версия моего прошлого подарка. Уверена, вы найдете ему применение. Обращайтесь, если что!' },
        ]
      }
    }
  },
  'gardener_arc': {
    id: 'gardener_arc',
    title: "Ветвь Садоводства",
    description: "Помогите местному садовнику вырастить редкий куст черной смородины и откройте для себя новую категорию предметов.",
    requiredLevel: 5,
    icon: new URL('/assets/icons/characters/gardener.png', import.meta.url),
    chapters: {
      1: {
        title: "Предложение садовника",
        steps: [
          { type: 'dialogue', character: new URL('/assets/icons/characters/gardener.png', import.meta.url), name: 'Садовник', text: 'Приветствую, коллега! Я вижу, у тебя тут своя лавочка. А я вот знаю способ, как можно расширить твой... ассортимент. И заработок, само собой.' },
          { type: 'dialogue', character: new URL('/assets/icons/characters/gardener.png', import.meta.url), name: 'Садовник', text: 'У меня есть семена одного очень редкого куста — черной смородины. Он не просто красивый, но и плодоносит! Правда, чтобы его вырастить до нужного состояния, нужны особые условия и, скажем так, первоначальные инвестиции.' },
          {
            type: 'task',
            character: new URL('/assets/icons/characters/gardener.png', import.meta.url),
            name: 'Садовник',
            text: 'Если вложишь 875 монет в наше общее дело, я подготовлю для тебя саженец черной смородины, который быстро вырастет в плодоносящий куст. С него и начнется твой новый бизнес!',
            task: { type: 'spend_coins', amount: 875, buttonText: 'Вложиться в саженец смородины' },
            reward: { type: 'generator', key: 'currant', level: 1 }
          },
          { type: 'dialogue', character: new URL('/assets/icons/characters/gardener.png', import.meta.url), name: 'Садовник', text: 'Отличный выбор! Вот, держи. Это не просто куст, а настоящий генератор ягод! Ухаживай за ним, и он принесет тебе немало выгоды. Удачи в новом начинании!' },
        ]
      }
    }
  },
  'beekeeper_arc': {
    id: 'beekeeper_arc',
    title: "Ветка Пчеловода",
    description: "Помогите старому пчеловоду основать новую пасеку и получите в награду свой собственный улей.",
    requiredLevel: 8,
    icon: new URL('/assets/icons/characters/beekeeper.png', import.meta.url),
    chapters: {
      1: {
        title: "Сладкое дело",
        steps: [
          { type: 'dialogue', character: new URL('/assets/icons/characters/beekeeper.png', import.meta.url), name: 'Пчеловод', text: 'Добрый день! Я вижу, у вас тут процветающий бизнес. А я вот всю жизнь пчёлами занимаюсь. Душа поёт, когда они жужжат.' },
          { type: 'dialogue', character: new URL('/assets/icons/characters/beekeeper.png', import.meta.url), name: 'Пчеловод', text: 'Хочу расширить свою пасеку, да вот средств не хватает на закупку нового оборудования и хорошей матки. Не хотите ли стать моим партнёром в этом сладком деле?' },
          {
            type: 'task',
            character: new URL('/assets/icons/characters/beekeeper.png', import.meta.url),
            name: 'Пчеловод',
            text: 'Нужно всего 2000 монет. За это я не только пасеку расширю, но и вам один из своих лучших ульев отдам. Он будет давать вам и мёд, и воск. Что скажете?',
            task: { type: 'spend_coins', amount: 2000, buttonText: 'Вложиться в пасеку' },
            reward: { type: 'generator', key: 'beehive', level: 1 }
          },
          { type: 'dialogue', character: new URL('/assets/icons/characters/beekeeper.png', import.meta.url), name: 'Пчеловод', text: 'Вот это по-нашему! Спасибо за помощь! Держите обещанный улей. Ухаживайте за ним, и он вас щедро отблагодарит. Теперь можете ждать заказы на мёд и свечи!' },
        ]
      }
    }
  },
};
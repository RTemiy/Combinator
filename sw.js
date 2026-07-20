import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { clientsClaim } from 'workbox-core';

// Эта команда заставляет SW немедленно брать под контроль страницу после активации.
clientsClaim();

// 1. Предварительное кэширование всех статических ассетов (JS, CSS, картинки и т.д.).
// self.__WB_MANIFEST — это массив файлов, который Parcel автоматически подставит сюда при сборке.
precacheAndRoute(self.__WB_MANIFEST || []);

// 2. Настройка кэширования для HTML-страницы (навигационных запросов).
// Мы используем стратегию NetworkFirst:
// - Сначала пытаемся загрузить страницу из сети.
// - Если сеть недоступна, отдаем последнюю сохраненную версию из кэша.
const navigationStrategy = new NetworkFirst({
  cacheName: 'pages', // Кэш для хранения HTML-страниц
  plugins: [
    // Кэшируем только успешные ответы (статус 200)
    new CacheableResponsePlugin({
      statuses: [200],
    }),
  ],
});

// Создаем маршрут, который будет применять эту стратегию ко всем навигационным запросам.
const navigationRoute = new NavigationRoute(navigationStrategy, {
  // denylist по-прежнему полезен, чтобы этот маршрут не срабатывал для прямых запросов к файлам (например, style.css)
  denylist: [new RegExp('/[^/?]+\\.[^/]+$')],
});

// Регистрируем маршрут в Workbox.
registerRoute(navigationRoute);

// 3. Новая стратегия для кэширования изображений во время выполнения (runtime caching).
// Эта стратегия будет "ловить" запросы к изображениям по мере их появления.
registerRoute(
  // Функция, которая проверяет, является ли запрос запросом на изображение.
  ({ request }) => request.destination === 'image',
  // Используем стратегию "Cache First":
  // - Сначала ищем ответ в кэше.
  // - Если в кэше нет, идем в сеть, получаем ответ, кладем его в кэш и отдаем приложению.
  new CacheFirst({
    cacheName: 'images', // Отдельный кэш для всех изображений
    plugins: [
      // Кэшируем только успешные ответы (статус 200 OK).
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Ограничиваем время жизни и количество кэшированных изображений.
      new ExpirationPlugin({
        maxEntries: 300, // Хранить до 300 изображений (с запасом)
        maxAgeSeconds: 30 * 24 * 60 * 60, // Хранить 30 дней
      }),
    ],
  })
);

// 4. Стратегия для кэширования аудиофайлов во время выполнения.
registerRoute(
  // Функция, которая проверяет, является ли запрос запросом на аудио.
  // Мы проверяем и destination, и расширение файла, т.к. при вызове fetch()
  // из скрипта-предзагрузчика destination может быть пустым.
  ({ request, url }) => {
    if (request.destination === 'audio') {
      return true;
    }
    return /\.(?:mp3|ogg|wav)$/.test(url.pathname);
  },
  // Используем стратегию "Cache First".
  new CacheFirst({
    cacheName: 'audio', // Отдельный кэш для аудио
    plugins: [
      // Кэшируем только успешные ответы.
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Ограничиваем время жизни и количество файлов.
      new ExpirationPlugin({
        maxEntries: 50, // Хранить до 50 аудиофайлов
        maxAgeSeconds: 30 * 24 * 60 * 60, // Хранить 30 дней
      }),
    ],
  })
);

// 5. Логика для обновления Service Worker по команде от пользователя.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
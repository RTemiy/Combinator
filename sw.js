importScripts('./asset-list.js');

const CACHE_VERSION = '1.3.12'; // 1.3.11
const CACHE_NAME = `combinator-cache-${CACHE_VERSION}`;

// 1. Установка Service Worker: кэширование всех ресурсов
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log(`[SW] Кэширование файлов для версии ${CACHE_VERSION}`);
      const totalFiles = URLS_TO_CACHE.length;

      // Функция для отправки прогресса всем клиентам
      const sendProgress = async (progress) => {
        const clients = await self.clients.matchAll({ includeUncontrolled: true });
        clients.forEach(client => {
          client.postMessage({
            type: 'caching-progress',
            progress: progress
          });
        });
      };

      // Отправляем начальный прогресс
      await sendProgress(0);

      for (let i = 0; i < totalFiles; i++) {
        const url = URLS_TO_CACHE[i];
        try {
          await cache.add(url);
          const progress = (i + 1) / totalFiles;
          await sendProgress(progress);
        } catch (error) {
          console.error(`[SW] Не удалось закэшировать ${url}`, error);
          throw error; // Прерываем установку, если файл не закэшировался
        }
      }
      console.log('[SW] Все файлы успешно закэшированы.');
    })()
  );
});

// Слушаем сообщение от клиента, чтобы активировать новый SW по команде
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// 2. Активация Service Worker: удаление старых кэшей (когда он становится активным)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          // Если имя кэша не совпадает с текущим, удаляем его.
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
      // Захватываем контроль над открытыми страницами.
      await self.clients.claim();
      // Сообщаем клиентам, что можно перезагружаться
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => {
        client.postMessage({ type: 'SW_ACTIVATED' });
      });
    })()
  );
});

// 3. Обработка запросов (стратегия "Cache First")
self.addEventListener('fetch', (event) => {
  // Отвечаем на запрос из кэша, если он там есть. Иначе - идем в сеть.
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
  );
});
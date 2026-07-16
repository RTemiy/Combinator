importScripts('./asset-list.js');

const CACHE_VERSION = '1.3.0'; // 1.2.95
const CACHE_NAME = `combinator-cache-${CACHE_VERSION}`;

// 1. Установка Service Worker: кэширование всех ресурсов
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log(`[SW] Кэширование файлов для версии ${CACHE_VERSION}`);
        // addAll атомарна: если хоть один файл не загрузится, установка SW провалится.
        return cache.addAll(URLS_TO_CACHE);
      })
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
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Если имя кэша не совпадает с текущим, удаляем его.
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        // Захватываем контроль над открытыми страницами.
        return self.clients.claim();
    })
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
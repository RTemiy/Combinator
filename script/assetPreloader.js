import { CATEGORIES_CONFIG, GENERATORS_DATA, CHARACTERS, STORY_CHARACTERS, STORY_DATA } from './config.js';
import * as assetUrls from './data/assetUrls.js';

// Используем Set, чтобы хранить только уникальные URL и избежать дубликатов
const allAssetUrls = new Set();

function addUrl(url) {
    // Убеждаемся, что работаем со строковым представлением URL
    if (url instanceof URL) {
        allAssetUrls.add(url.href);
    } else if (typeof url === 'string' && url.startsWith('http')) {
        allAssetUrls.add(url);
    }
}

// 1. Собираем URL из центрального файла ассетов
Object.values(assetUrls).forEach(addUrl);

// 2. Собираем иконки предметов
Object.values(CATEGORIES_CONFIG).forEach(category => {
    category.items.forEach(item => addUrl(item.icon));
});

// 3. Собираем иконки генераторов, их частей и дропов
Object.values(GENERATORS_DATA).forEach(generator => {
    if (generator.parts) {
        generator.parts.forEach(part => addUrl(part.icon));
    }
    if (generator.icons) {
        generator.icons.forEach(icon => addUrl(icon));
    }
    if (generator.drops) {
        generator.drops.forEach(drop => addUrl(drop.item.icon));
    }
});

// 4. Собираем иконки персонажей
CHARACTERS.forEach(char => addUrl(char.icon));
STORY_CHARACTERS.forEach(char => addUrl(char.icon));

// 5. Собираем иконки из сюжетов
Object.values(STORY_DATA).forEach(story => {
    addUrl(story.icon);
    Object.values(story.chapters).forEach(chapter => {
        chapter.steps.forEach(step => {
            if (step.character) {
                addUrl(step.character);
            }
        });
    });
});

/**
 * Запускает постепенную фоновую загрузку всех игровых ассетов для кэширования.
 * Использует requestIdleCallback, чтобы не мешать основному потоку выполнения.
 */
export function precacheGameAssets() {
    // Проверяем, что Service Worker активен
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
        console.log('Service Worker не активен, фоновое кэширование пропущено.');
        return;
    }

    console.log(`[Asset Preloader] Запуск фонового кэширования ${allAssetUrls.size} ассетов.`);

    const urlsToCache = Array.from(allAssetUrls);
    let i = 0;

    function fetchNext() {
        if (i >= urlsToCache.length) {
            console.log('[Asset Preloader] Все игровые ассеты были запрошены для кэширования.');
            return;
        }

        // Этот запрос будет перехвачен Service Worker'ом,
        // который положит ответ в кэш согласно стратегии CacheFirst.
        fetch(urlsToCache[i]);
        i++;

        // Планируем следующий запрос, когда браузер будет свободен
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fetchNext);
        } else {
            setTimeout(fetchNext, 100); // Fallback для старых браузеров
        }
    }

    // Даем игре "продышаться" и запускаем процесс с небольшой задержкой
    setTimeout(() => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fetchNext);
        } else {
            setTimeout(fetchNext, 1000);
        }
    }, 2000); // Запускаем через 2 секунды после старта игры
}
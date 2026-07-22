/**
 * @file Этот модуль управляет всеми звуками в игре с помощью Web Audio API.
 * Это позволяет воспроизводить звуки без задержек и без отображения системного плеера.
 * Зависит от gameSettings для начальной громкости музыки.
 */

let audioContext;
const soundBuffers = new Map();
let sfxGainNode;
let musicGainNode;

let bgMusicElement; // HTMLAudioElement для фоновой музыки

// Список всех звуковых эффектов для предзагрузки
const SFX_FILES = {
    'merge': 'assets/sfx/merge.mp3',
    'merge_lvl2': 'assets/sfx/merge_lvl2.mp3',
    'merge_lvl3': 'assets/sfx/merge_lvl3.mp3',
    'merge_lvl4': 'assets/sfx/merge_lvl4.mp3',
    'merge_lvl5': 'assets/sfx/merge_lvl5.mp3',
    'merge_lvl6': 'assets/sfx/merge_lvl6.mp3',
    'merge_lvl7': 'assets/sfx/merge_lvl7.mp3',
    'swap': 'assets/sfx/swap.mp3',
    'level-up': 'assets/sfx/level-up.mp3',
    'spawn': 'assets/sfx/spawn.mp3',
    'generator-spawn': 'assets/sfx/generator-spawn.mp3',
    'order-complete': 'assets/sfx/order-complete.mp3',
    'coin': 'assets/sfx/coin.mp3',
    'drag-start': 'assets/sfx/drag-start.mp3',
    'order-ready': 'assets/sfx/order-ready.mp3',
    'claim-reward': 'assets/sfx/claim-reward.mp3',
    'fly': 'assets/sfx/fly.mp3',
};

/**
 * Инициализирует Web Audio API.
 * Должна вызываться после первого взаимодействия пользователя с игрой.
 */
export function initAudio(initialMusicVolume = 0.2, initialSfxVolume = 0.5) {
    if (audioContext) return;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Узел для управления громкостью эффектов
        sfxGainNode = audioContext.createGain();
        sfxGainNode.gain.setValueAtTime(initialSfxVolume, audioContext.currentTime);
        sfxGainNode.connect(audioContext.destination);

        // Подключаем фоновую музыку к Web Audio API для централизованного управления громкостью
        bgMusicElement = document.getElementById('bg-music');
        if (bgMusicElement) {
            const musicSource = audioContext.createMediaElementSource(bgMusicElement);
            musicGainNode = audioContext.createGain();
            musicGainNode.gain.setValueAtTime(initialMusicVolume, audioContext.currentTime);
            musicSource.connect(musicGainNode).connect(audioContext.destination);
        }

        // Начинаем загрузку всех звуковых эффектов в фоновом режиме
        Object.keys(SFX_FILES).forEach(key => {
            loadSound(key, SFX_FILES[key]);
        });

    } catch (e) {
        console.error("Web Audio API не поддерживается в этом браузере.", e);
    }
}

/**
 * Асинхронно загружает и декодирует звуковой файл.
 * @param {string} name - Ключ для сохранения звука.
 * @param {string} url - Путь к файлу.
 */
async function loadSound(name, url) {
    if (!audioContext) return;
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        soundBuffers.set(name, audioBuffer);
    } catch (e) {
        console.error(`Ошибка загрузки звука: ${name}`, e);
    }
}

/**
 * Воспроизводит предзагруженный звук.
 * @param {string} name - Ключ звука для воспроизведения.
 */
export function playSound(name) {
    if (!audioContext || !sfxGainNode) return;

    if (!soundBuffers.has(name)) {
        console.warn(`Audio > Sound "${name}" not found in buffer. Was it loaded correctly?`);
        return;
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const source = audioContext.createBufferSource();
    source.buffer = soundBuffers.get(name);
    source.connect(sfxGainNode);
    source.start(0);
}

/**
 * Воспроизводит звук слияния в зависимости от уровня.
 * @param {number} level - Уровень созданного предмета.
 */
export function playMergeSound(level) {
    if (level >= 7) {
        playSound('merge_lvl7');
    } else if (level >= 6) {
        playSound('merge_lvl6');
    } else if (level >= 5) {
        playSound('merge_lvl5');
    } else if (level >= 4) {
        playSound('merge_lvl4');
    } else if (level >= 3) {
        playSound('merge_lvl3');
    } else if (level >= 2) {
        playSound('merge_lvl2');
    } else {
        playSound('merge');
    }
}

export function playBackgroundMusic() {
    if (!bgMusicElement) {
        console.warn("Background music element not found.");
        return;
    }
    // Ensure AudioContext is running
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // Play the HTMLAudioElement directly. Its volume is controlled by musicGainNode.
    bgMusicElement.play().catch(e => {
        console.warn("Background music HTMLMediaElement playback failed:", e);
    });
}

export function pauseBackgroundMusic() {
    if (bgMusicElement && !bgMusicElement.paused) {
        bgMusicElement.pause();
    }
}

export function setSfxVolume(volume) {
    if (sfxGainNode) {
        sfxGainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    }
}

export function setMusicVolume(volume) {
    if (musicGainNode) {
        musicGainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    }
    if (bgMusicElement) bgMusicElement.volume = volume; // Also set HTML element volume for robustness
}
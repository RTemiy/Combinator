import { DOMElements } from './dom.js';
import { gameSettings } from './state.js';

export function playSound(soundElement) {
  if (!soundElement || gameSettings.sfxVolume === 0) return;
  soundElement.volume = gameSettings.sfxVolume;
  soundElement.currentTime = 0; // Rewind to start to allow for rapid playback
  soundElement.play().catch(e => {
    // This can happen if the user hasn't interacted with the page yet.
    // It's less of an issue for SFX which are triggered by user actions.
  });
}

export function playMergeSound(level) {
  const soundElement = DOMElements.sfxMergeLevels[level];
  if (soundElement) {
    playSound(soundElement);
  } else {
    playSound(DOMElements.sfxMerge); // Fallback to default
  }
}
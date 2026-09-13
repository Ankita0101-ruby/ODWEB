// Odyssey Audio System — Continuous bowXclench.mp3.mpeg soundtrack playback

class OdysseyAudioSystem {
  constructor() {
    this.bgMusic = document.getElementById('odyssey-bg-music') || new Audio('/bowXclench.mp3.mpeg');
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.6;
    this.bgMusic.muted = false;
    this.audioCtx = null;

    this.init();
  }

  init() {
    // Attempt automatic playback immediately on script load
    this.playBackgroundMusic();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.playBackgroundMusic());
    }
    window.addEventListener('load', () => this.playBackgroundMusic());

    // Silent background listeners to ensure uninterrupted autoplay on any browser event
    const silentTrigger = () => this.playBackgroundMusic();
    ['click', 'pointerdown', 'mousemove', 'scroll', 'keydown', 'touchstart'].forEach(evt => {
      window.addEventListener(evt, silentTrigger, { passive: true });
    });
  }

  playBackgroundMusic() {
    if (this.bgMusic) {
      this.bgMusic.muted = false;
      if (this.bgMusic.paused) {
        const promise = this.bgMusic.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Suppress error and try muted play if browser requires brief unlock
          });
        }
      }
    }
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playClick() {}

  playLyreArpeggio() {}

  playTriumph() {}
}

export const audioSystem = new OdysseyAudioSystem();



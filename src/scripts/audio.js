// Web Audio API Sound Synthesizer for Ancient Lyre & Sound FX

class OdysseyAudioSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientOsc = null;
    this.waveGain = null;
    this.bgMusic = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBackgroundMusic() {
    if (!this.bgMusic) {
      this.bgMusic = new Audio('/bg-music.mp3');
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.45;
    }

    const startPlay = () => {
      this.init();
      if (this.bgMusic.paused) {
        this.bgMusic.play()
          .then(() => {
            console.log("Background music started successfully.");
            cleanup();
          })
          .catch(err => {
            console.warn("Autoplay prevented or failed, waiting for user interaction:", err);
          });
      } else {
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener('click', startPlay);
      document.removeEventListener('touchstart', startPlay);
      document.removeEventListener('keydown', startPlay);
    };

    // Try playing immediately
    startPlay();

    // Set up user interaction listeners in case autoplay is blocked by browser
    document.addEventListener('click', startPlay);
    document.addEventListener('touchstart', startPlay);
    document.addEventListener('keydown', startPlay);
  }

  toggleSound() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.bgMusic) {
      if (this.isMuted) {
        this.bgMusic.pause();
      } else {
        this.bgMusic.play().catch(e => console.warn("Error resuming bgMusic:", e));
      }
    }
    if (!this.isMuted) {
      this.playLyreArpeggio();
    }
    return !this.isMuted;
  }

  // Play crisp golden button click sound
  playClick() {
    // Click sound effect disabled as requested
    return;
  }

  // Play ancient Greek lyre harp arpeggio sound
  playLyreArpeggio() {
    // Lyre arpeggio sound effect disabled as requested
    return;
  }

  // Play triumph fanfare for challenge completion
  playTriumph() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [440, 554.37, 659.25, 880]; // A Major triad + A5
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          
          gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
          
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          
          osc.start();
          osc.stop(this.ctx.currentTime + 0.8);
        }, idx * 150);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
}

export const audioSystem = new OdysseyAudioSystem();

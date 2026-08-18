// Web Audio API Sound Synthesizer for Ancient Lyre & Sound FX

class OdysseyAudioSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientOsc = null;
    this.waveGain = null;
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

  toggleSound() {
    this.init();
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.playLyreArpeggio();
    }
    return !this.isMuted;
  }

  // Play crisp golden button click sound
  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.08); // A6
      
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play ancient Greek lyre harp arpeggio sound
  playLyreArpeggio() {
    if (this.isMuted || !this.ctx) return;
    try {
      // Pentatonic ancient Greek mode frequencies (D Dorian: D4, F4, G4, A4, C5, D5)
      const freqs = [293.66, 349.23, 392.00, 440.00, 523.25, 587.33];
      freqs.forEach((freq, index) => {
        setTimeout(() => {
          if (this.isMuted) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = 'triangle'; // Warmer harp-like tone
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          
          gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
          
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          
          osc.start();
          osc.stop(this.ctx.currentTime + 1.2);
        }, index * 120);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
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

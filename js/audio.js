// ===== AUDIO =====
// Web Audio API with a shared, lazily-initialized AudioContext.
// Creating the context on first use (instead of on page load) avoids browser
// autoplay policy violations that silently block audio before a user gesture.

let _audioContext = null;

function getAudioContext() {
    const Constructor = window.AudioContext || window.webkitAudioContext;
    if (!Constructor) return null;

    if (!_audioContext) {
        _audioContext = new Constructor();
    }

    // Some browsers suspend the context if created before a user gesture.
    if (_audioContext.state === 'suspended') {
        _audioContext.resume();
    }

    return _audioContext;
}

function playSound(type) {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        switch (type) {
            case 'correct':
                oscillator.frequency.value = 523.25; // C5
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.3);
                break;

            case 'incorrect':
                oscillator.frequency.value = 200;
                oscillator.type = 'sawtooth';
                gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.2);
                break;

            case 'complete':
                [523.25, 587.33, 659.25].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.15);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
                    osc.start(ctx.currentTime + i * 0.15);
                    osc.stop(ctx.currentTime + i * 0.15 + 0.3);
                });
                break;
        }
    } catch (e) {
        // Audio failure is non-critical; continue silently.
    }
}

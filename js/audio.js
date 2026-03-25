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

// ===== UI SOUND EFFECTS =====

function playSound(type) {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gainNode   = ctx.createGain();
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
                    const osc  = ctx.createOscillator();
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

// ===== AMBIENT SOUND =====
// Procedurally generated per-civilization atmosphere using Web Audio API only.
// Each civilization has:
//   - A sustained drone (sine wave at a characteristic pitch)
//   - A slow melody sequence (scheduled notes in a culturally-appropriate scale)
//   - A subtle tremolo on the drone for organic movement

// Scale definitions: frequencies in Hz for short melodic phrases
const AMBIENT_PROFILES = {
    roman: {
        // Dorian mode on D — martial, ordered
        drone:    { freq: 146.83, type: 'sine' }, // D3
        melody:   [293.66, 329.63, 369.99, 329.63, 293.66, 246.94], // D4 E4 F#4 ...
        interval: 1800,
        gain:     0.035
    },
    egyptian: {
        // Phrygian mode on E — ancient, mysterious
        drone:    { freq: 130.81, type: 'sine' }, // C3
        melody:   [261.63, 277.18, 311.13, 349.23, 311.13, 277.18], // C4 C#4 Eb4 F4 ...
        interval: 2400,
        gain:     0.03
    },
    greek: {
        // Ancient Greek Dorian tetrachord: E F G A — noble, philosophical
        drone:    { freq: 164.81, type: 'sine' }, // E3
        melody:   [329.63, 349.23, 392.00, 440.00, 392.00, 349.23, 329.63],
        interval: 2000,
        gain:     0.032
    },
    babylonian: {
        // Tritone-heavy — complex, otherworldly; reflects base-60 complexity
        drone:    { freq: 110.00, type: 'sine' }, // A2
        melody:   [220.00, 246.94, 311.13, 369.99, 311.13, 246.94],
        interval: 2200,
        gain:     0.03
    },
    chinese: {
        // Pentatonic scale — graceful, meditative
        drone:    { freq: 146.83, type: 'sine' }, // D3
        melody:   [293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63],
        interval: 1600,
        gain:     0.03
    },
    mayan: {
        // Minor pentatonic — rhythmic, tropical
        drone:    { freq: 123.47, type: 'sine' }, // B2
        melody:   [246.94, 293.66, 329.63, 369.99, 440.00, 369.99, 329.63],
        interval: 1900,
        gain:     0.032
    },
    'hindu-arabic': {
        // Maqam Rast — flattened 3rd, raised 7th; evokes 9th-century Baghdad
        drone:    { freq: 130.81, type: 'sine' }, // C3
        melody:   [261.63, 293.66, 311.13, 349.23, 392.00, 440.00, 466.16, 523.25],
        interval: 1700,
        gain:     0.033
    }
};

// Module-level ambient state
let _ambientNodes    = [];
let _ambientGain     = null;
let _ambientTimeout  = null;
let _ambientCivId    = null;
let _ambientEnabled  = getStorage('mathematikos_ambient_enabled') !== 'false'; // default on

function isAmbientEnabled() {
    return _ambientEnabled;
}

function setAmbientEnabled(enabled) {
    _ambientEnabled = enabled;
    setStorage('mathematikos_ambient_enabled', enabled ? 'true' : 'false');
    if (!enabled) stopAmbient();
    return enabled;
}

function startAmbient(civId) {
    if (!_ambientEnabled) return;
    if (civId === _ambientCivId) return; // already playing this civ

    stopAmbient();

    const profile = AMBIENT_PROFILES[civId];
    if (!profile) return;

    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        _ambientCivId = civId;

        // Master gain (very low to stay unobtrusive)
        _ambientGain = ctx.createGain();
        _ambientGain.gain.setValueAtTime(0, ctx.currentTime);
        _ambientGain.gain.linearRampToValueAtTime(profile.gain, ctx.currentTime + 3);
        _ambientGain.connect(ctx.destination);

        // Drone oscillator
        const droneOsc  = ctx.createOscillator();
        const droneGain = ctx.createGain();
        droneOsc.type          = profile.drone.type || 'sine';
        droneOsc.frequency.value = profile.drone.freq;
        droneGain.gain.value   = 0.7;
        droneOsc.connect(droneGain);
        droneGain.connect(_ambientGain);
        droneOsc.start();
        _ambientNodes.push(droneOsc);

        // Slow tremolo LFO on the drone gain
        const lfoOsc  = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfoOsc.frequency.value = 0.25; // 0.25 Hz — slow, breathing pulse
        lfoGain.gain.value     = 0.15;
        lfoOsc.connect(lfoGain);
        lfoGain.connect(droneGain.gain);
        lfoOsc.start();
        _ambientNodes.push(lfoOsc);

        // Schedule repeating melody using Web Audio clock for accurate timing
        _scheduleMelodyNote(civId, 0, ctx.currentTime + 1.5);
    } catch (e) {
        // Ambient failure is non-critical.
    }
}

function _scheduleMelodyNote(civId, noteIdx, startTime) {
    if (civId !== _ambientCivId || !_ambientEnabled) return;

    const profile = AMBIENT_PROFILES[civId];
    if (!profile) return;

    try {
        const ctx = getAudioContext();
        if (!ctx || !_ambientGain) return;

        const freq     = profile.melody[noteIdx % profile.melody.length];
        const osc      = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;
        noteGain.gain.setValueAtTime(0, startTime);
        noteGain.gain.linearRampToValueAtTime(0.4, startTime + 0.06);
        noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);

        osc.connect(noteGain);
        noteGain.connect(_ambientGain);
        osc.start(startTime);
        osc.stop(startTime + 0.9);

        const intervalSec  = profile.interval / 1000;
        const lookahead    = 0.1; // seconds ahead to schedule
        const delay        = Math.max(0, (startTime + intervalSec - ctx.currentTime - lookahead) * 1000);

        _ambientTimeout = setTimeout(() => {
            _scheduleMelodyNote(civId, noteIdx + 1, startTime + intervalSec);
        }, delay);
    } catch (e) {
        // Ignore scheduling errors.
    }
}

function stopAmbient() {
    _ambientCivId = null;

    if (_ambientTimeout) {
        clearTimeout(_ambientTimeout);
        _ambientTimeout = null;
    }

    if (_ambientGain) {
        try {
            const ctx = getAudioContext();
            if (ctx) {
                _ambientGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
            }
        } catch (e) { /* ignore */ }
        // Disconnect after fade
        setTimeout(() => {
            try { _ambientGain.disconnect(); } catch (e) { /* ignore */ }
            _ambientGain = null;
        }, 1300);
    }

    _ambientNodes.forEach(node => {
        try {
            const ctx = getAudioContext();
            node.stop(ctx ? ctx.currentTime + 1.2 : 0);
        } catch (e) { /* already stopped */ }
    });
    _ambientNodes = [];
}

// ===== GAME ORCHESTRATION =====

function startGame(mode) {
    gameState.mode         = mode;
    gameState.score        = 0;
    gameState.oraclePieces = [];
    renderCivilizationSelect();
    showScreen('civilization-select');
}

function nextCivilization() {
    // After a daily challenge, return to the daily screen
    if (gameState.mode === 'daily') {
        showDailyChallenge();
        return;
    }
    const civIds     = Object.keys(civilizations);
    const currentIdx = civIds.indexOf(gameState.currentCivilization);
    if (currentIdx < civIds.length - 1 && civilizations[civIds[currentIdx + 1]].unlocked) {
        selectCivilization(civIds[currentIdx + 1]);
    } else {
        showScreen('civilization-select');
    }
}

function closeHelp() {
    document.getElementById('help-modal').classList.remove('show');
}

function openCodexCurrent() {
    openCodex(gameState.currentCivilization);
}

function toggleChip(name) {
    const allChips = ['scene', 'guide'];
    const isAlreadyOpen = document.getElementById(`chip-panel-${name}`)?.classList.contains('open');

    allChips.forEach(n => {
        document.getElementById(`chip-panel-${n}`)?.classList.remove('open');
        document.getElementById(`chip-btn-${n}`)?.classList.remove('active');
    });

    if (!isAlreadyOpen) {
        document.getElementById(`chip-panel-${name}`)?.classList.add('open');
        document.getElementById(`chip-btn-${name}`)?.classList.add('active');
    }
}

function toggleAmbient() {
    const enabled = setAmbientEnabled(!isAmbientEnabled());
    const btn = document.getElementById('sound-toggle');
    if (btn) btn.innerHTML = icon(enabled ? 'sound-on' : 'sound-off');
}

function updateProgress() {
    const civIds    = Object.keys(civilizations);
    const completed = civIds.filter(id => isCivilizationComplete(id)).length;
    return {
        completed,
        total:      civIds.length,
        percentage: (completed / civIds.length) * 100
    };
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Restore unlocked civilizations from storage
    Object.keys(civilizations).forEach(civId => {
        if (getStorage(`mathematikos_${civId}_unlocked`) === 'true') {
            civilizations[civId].unlocked = true;
        }
    });

    const progress = updateProgress();
    if (progress.completed > 0) {
        console.log(`Progress: ${progress.completed}/${progress.total} civilizations completed!`);
    }

    // Scene artwork: one sprite the story screen's <use> elements point at
    injectIconSprite();
    // Settings first: it resolves the stored language that the catalog binds to.
    initSettings();
    initI18n();
    injectSceneSprite();

    // Restore ambient preference
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) soundBtn.innerHTML = icon(isAmbientEnabled() ? 'sound-on' : 'sound-off');

    // Keyboard shortcuts (game screen only)
    document.addEventListener('keydown', e => {
        if (!document.getElementById('game-play').classList.contains('active')) return;

        if (e.key === 'Backspace' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            backspaceAnswer();
        } else if (e.key === 'Escape') {
            clearAnswer();
        }
    });

    // Submit on Enter from text input
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') submitAnswer();
        });
    }

    console.log('Mathematikos loaded! Travel through time and explore ancient number systems.');
});

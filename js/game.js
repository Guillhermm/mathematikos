// ===== GAME ORCHESTRATION =====

function startGame(mode) {
    gameState.mode         = mode;
    gameState.score        = 0;
    gameState.oraclePieces = [];
    renderCivilizationSelect();
    showScreen('civilization-select');
}

function nextCivilization() {
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
        console.log(`📊 Progress: ${progress.completed}/${progress.total} civilizations completed!`);
    }

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

    console.log('🎮 Mathematikos loaded! Travel through time and explore ancient number systems.');
});

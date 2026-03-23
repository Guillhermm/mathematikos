// ===== TIMER =====

function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerEl = document.getElementById('timer');

    if (gameState.mode === 'practice') {
        timerEl.textContent = '∞';
        return;
    }

    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);

    if (gameState.mode === 'temporal') {
        const remaining = gameState.timeLimit - elapsed;

        if (remaining <= 0) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
            endChallenge(false);
            return;
        }

        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerEl.style.color = remaining <= 30 ? 'red' : '';
    } else {
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

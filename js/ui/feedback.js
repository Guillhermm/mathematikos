// ===== FEEDBACK & VISUAL EFFECTS =====

function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;

    if (type === 'incorrect') {
        setTimeout(() => feedback.classList.remove('show'), 2000);
    }
}

function showHint() {
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.textContent = gameState.currentProblem.hint;
    hintDisplay.classList.add('show');
    gameState.hintsUsed++;
}

function updateOraclePiecesDisplay() {
    const container = document.getElementById('pieces-display');
    container.innerHTML = '';

    for (let i = 0; i < gameState.totalChallenges; i++) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        if (i < gameState.oraclePieces.length) {
            piece.classList.add('collected');
            piece.textContent = '✨';
        } else {
            piece.textContent = '❓';
        }
        container.appendChild(piece);
    }
}

function showAchievement(title, message) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
        <h4 style="margin: 0 0 10px 0;">🏆 ${title}</h4>
        <p style="margin: 0; font-size: 0.9rem;">${message}</p>
    `;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

function celebrateSuccess(element) {
    element.classList.add('celebrating');
    setTimeout(() => element.classList.remove('celebrating'), 500);
}

function shakeElement(element) {
    if (!element) return;
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 300);
}

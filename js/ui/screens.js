// ===== SCREEN MANAGEMENT =====

function showScreen(screenId) {
    // Stop timer when leaving the game screen
    if (!document.getElementById('game-play').classList.contains('active') === false) {
        if (screenId !== 'game-play' && gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }
    }
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function renderCivilizationSelect() {
    const container = document.getElementById('civilization-list');
    container.innerHTML = '';

    Object.values(civilizations).forEach(civ => {
        const card = document.createElement('div');
        card.className = `civilization-card ${!civ.unlocked ? 'locked' : ''}`;

        const isCompleted = isCivilizationComplete(civ.id);
        const stats = getCivilizationStats(civ.id);

        if (civ.unlocked) {
            card.onclick = () => selectCivilization(civ.id);
        }

        card.innerHTML = `
            <div class="icon">${civ.icon}</div>
            <div class="name">${civ.name}</div>
            <div class="difficulty">${civ.difficulty}</div>
            ${isCompleted ? '<div class="completion-badge">✓ Completed</div>' : ''}
            ${!civ.unlocked ? '<p style="margin-top: 10px; font-size: 0.9rem;">🔒 Complete previous civilization first</p>' : ''}
            ${stats && civ.unlocked ? `<p style="margin-top: 8px; font-size: 0.85rem; color: #666;">Best Score: ${stats.score}</p>` : ''}
        `;

        container.appendChild(card);
    });
}

function selectCivilization(civId) {
    gameState.currentCivilization = civId;
    showStoryIntro();
}

function showStoryIntro() {
    const civ   = civilizations[gameState.currentCivilization];
    const mode  = gameState.mode;
    const story = stories[mode][gameState.currentCivilization];

    document.getElementById('story-content').innerHTML = `
        ${mode === 'thematic' && gameState.oraclePieces.length === 0 ? stories[mode].intro : ''}

        <h3>${story.title}</h3>

        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📍 Setting:</strong>
            <p>${story.setting}</p>
        </div>

        <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>🎯 Objective:</strong>
            <p>${story.objective}</p>
        </div>

        <div style="background: #fff9e6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            ${story.character}
        </div>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📚 Number System:</strong> ${civ.numberSystem}
        </div>
    `;

    showScreen('story-intro');
}

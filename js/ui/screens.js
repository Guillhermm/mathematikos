// ===== SCREEN MANAGEMENT =====

function showScreen(screenId) {
    // Stop timer when leaving the game screen
    if (document.getElementById('game-play').classList.contains('active')) {
        if (screenId !== 'game-play' && gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }
    }

    // Clear civilization theme when returning to root screens
    if (screenId === 'main-menu' || screenId === 'about-screen' || screenId === 'daily-screen') {
        clearTheme();
        stopAmbient();
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
            ${isCompleted ? `
                <div class="completion-badge">✓ Completed</div>
                <button class="btn-codex-card" onclick="event.stopPropagation(); openCodex('${civ.id}')">📚 Codex</button>
            ` : ''}
            ${!civ.unlocked ? '<p class="civ-locked-hint">🔒 Complete previous civilization first</p>' : ''}
            ${stats && civ.unlocked ? `<p class="civ-best-score">Best Score: ${stats.score}</p>` : ''}
        `;

        container.appendChild(card);
    });
}

function selectCivilization(civId) {
    gameState.currentCivilization = civId;
    applyTheme(civId);
    startAmbient(civId);
    showStoryIntro();
}

function showStoryIntro() {
    const civ   = civilizations[gameState.currentCivilization];
    const mode  = gameState.mode;
    // Daily challenge uses the thematic story content
    const storyMode = mode === 'daily' ? 'thematic' : mode;
    const story = stories[storyMode][gameState.currentCivilization];

    // Hypatia guide block — shown in thematic and daily modes
    const hypatiaBlock = (mode === 'thematic' || mode === 'daily') && story.hypatia ? `
        <div class="hypatia-guide">
            <div class="hypatia-header">
                <span class="hypatia-avatar">🔭</span>
                <strong class="hypatia-name">Hypatia of Alexandria</strong>
            </div>
            <blockquote class="hypatia-quote">"${story.hypatia.quote}"</blockquote>
            <p class="hypatia-guidance">${story.hypatia.guidance}</p>
        </div>
    ` : '';

    document.getElementById('story-content').innerHTML = `
        ${mode === 'thematic' && gameState.oraclePieces.length === 0 ? stories['thematic'].intro : ''}

        ${hypatiaBlock}

        <h3>${story.title}</h3>

        <div class="story-box story-setting-box">
            <strong>📍 Setting:</strong>
            <p>${story.setting}</p>
        </div>

        <div class="story-box story-objective-box">
            <strong>🎯 Objective:</strong>
            <p>${story.objective}</p>
        </div>

        <div class="story-box story-character-box">
            ${story.character}
        </div>

        <div class="story-box story-numsystem-box">
            <strong>📚 Number System:</strong> ${civ.numberSystem}
        </div>
    `;

    showScreen('story-intro');
}

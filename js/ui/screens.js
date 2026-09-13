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

// Keyed by the difficulty identifier on each civilization record. The label
// shown to the player is a separate, translated string.
const DIFFICULTY_CLASS = {
    easy:         'diff-easy',
    intermediate: 'diff-intermediate',
    advanced:     'diff-advanced',
    expert:       'diff-expert'
};

// The scene box above the problem: which challenge you are on, and the word
// problem itself. Shared by all seven civilization display functions.
function renderSceneDescription(contextText) {
    const box = document.getElementById('scene-description');
    if (!box) return;
    box.innerHTML = '<strong class="scene-counter"></strong><p class="scene-context"></p>';
    box.querySelector('.scene-counter').textContent = t('ui.game.sceneCounter', {
        current: gameState.currentChallenge,
        total:   gameState.totalChallenges
    });
    box.querySelector('.scene-context').textContent = contextText;
}

function renderCivilizationSelect() {
    const container = document.getElementById('civilization-list');
    container.innerHTML = '';

    Object.values(civilizations).forEach(civ => {
        const isCompleted  = isCivilizationComplete(civ.id);
        const stats        = getCivilizationStats(civ.id);
        const diffClass    = DIFFICULTY_CLASS[civ.difficulty] || 'diff-intermediate';

        const card = document.createElement('div');
        card.className = `civilization-card ${!civ.unlocked ? 'locked' : ''}`;

        if (civ.unlocked) {
            card.onclick = () => selectCivilization(civ.id);
        }

        const lockedOverlay = !civ.unlocked ? `
            <div class="civ-locked-overlay">
                ${icon('lock', 'icon-locked')}
            </div>` : '';

        const completionRow = isCompleted ? `
            <div class="civ-completion-badge">
                ${icon('check')}<span class="civ-best-text"></span>
            </div>` : (stats && civ.unlocked ? `
            <p class="civ-best-score civ-best-text"></p>` : '');

        const codexBtn = isCompleted ? `
            <button class="btn-codex-card" onclick="event.stopPropagation(); openCodex('${civ.id}')" title="${t('ui.story.openCodex')}">${icon('book')}</button>` : '';

        card.innerHTML = `
            ${lockedOverlay}
            ${codexBtn}
            <div class="civ-card-art" data-civ="${civ.id}">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="400" height="200" fill="var(--scene-sky)"/>
                    <use href="#${sceneBackdropId(civ.id)}" width="400" height="200"/>
                    <rect y="168" width="400" height="32" fill="var(--scene-ground)"/>
                </svg>
            </div>
            <div class="civ-card-name"></div>
            <span class="civ-difficulty-badge ${diffClass}"></span>
            ${completionRow}
        `;

        // Names and labels change with the language, so they go in as text.
        card.querySelector('.civ-card-name').textContent = civ.name;
        card.querySelector('.civ-difficulty-badge').textContent =
            t(`ui.difficulty.${civ.difficulty}`);
        const best = card.querySelector('.civ-best-text');
        if (best) {
            best.textContent = t('ui.civSelect.best', { score: stats ? stats.score : 0 });
        }

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

    const civTitleEl = document.getElementById('story-intro-civ-title');
    if (civTitleEl) civTitleEl.textContent = civ.name;

    // Briefing: the Oracle narrates the frame story on first arrival, Hypatia
    // always closes with the guidance for this civilization.
    const showIntro = mode !== 'practice' && gameState.oraclePieces.length === 0;
    const slides = buildBriefingSlides(mode, gameState.currentCivilization, showIntro);

    // What you are doing, the facts you might check, and the flavor you can
    // open if you want it. The scene text is closed by default because the
    // briefing above already showed you the place.
    const mission = {
        objective: story.objective,
        scene: story.setting,
        facts: [
            { icon: 'book',   text: civ.numberSystem },
            { icon: null,     text: t(`ui.difficulty.${civ.difficulty}`) },
            { icon: null,     text: t('ui.story.challengeCount', { count: gameState.totalChallenges }) }
        ],
        alert: story.note ? `${story.note.label}: ${story.note.text}` : null
    };

    document.getElementById('story-content').innerHTML = `
        ${briefingMarkup(slides)}

        <h3 class="story-title"></h3>

        ${missionMarkup(mission)}
    `;

    // Authored copy goes in as text, never through innerHTML.
    const titleEl = document.querySelector('.story-title');
    if (titleEl) titleEl.textContent = story.title;

    fillMission(mission);
    fillBriefingText(slides);

    // The screen has to be visible before the briefing measures its slides;
    // a hidden element reports zero height and the card collapses.
    showScreen('story-intro');
    initBriefing();
}

// ===== MISSION PANEL =====
// The objective is the one thing you act on, so it leads. The rest are facts
// you glance at, as chips. The scene prose sits behind a disclosure because the
// briefing already established where you are, and four stacked cards of it cost
// more height than the whole briefing did.

function missionMarkup(mission) {
    const facts = mission.facts.map(fact => `
            <li class="fact">${fact.icon ? icon(fact.icon) : ''}<span></span></li>`).join('');

    const alert = mission.alert
        ? `<p class="mission-alert">${icon('clock')}<span></span></p>`
        : '';

    return `
        <section class="mission">
            <p class="mission-objective">${icon('target')}<span></span></p>
            <ul class="mission-facts">${facts}</ul>
            ${alert}
            <details class="mission-scene">
                <summary class="mission-scene-summary"></summary>
                <p class="mission-scene-text"></p>
            </details>
        </section>
    `;
}

function fillMission(mission) {
    const objective = document.querySelector('.mission-objective span');
    if (objective) objective.textContent = mission.objective;

    document.querySelectorAll('.mission-facts .fact span').forEach((node, i) => {
        if (mission.facts[i]) node.textContent = mission.facts[i].text;
    });

    const alert = document.querySelector('.mission-alert span');
    if (alert && mission.alert) alert.textContent = mission.alert;

    const summary = document.querySelector('.mission-scene-summary');
    if (summary) summary.textContent = t('ui.story.scene');

    const scene = document.querySelector('.mission-scene-text');
    if (scene) scene.textContent = mission.scene;
}

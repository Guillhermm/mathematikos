// ===== DAILY CHALLENGE SCREEN =====

function showDailyChallenge() {
    const civId      = getDailyCivId();
    const civ        = civilizations[civId];
    const completed  = isDailyCompleted();
    const streak     = getDailyStreak();
    const today      = getTodayKey();

    const content = document.getElementById('daily-content');
    content.innerHTML = `
        <div class="daily-info">
            <div class="daily-date"></div>
            <div class="daily-streak">
                ${streak > 0
                    ? `${icon('flame')}<strong class="daily-streak-text"></strong>`
                    : '<span class="daily-streak-text"></span>'}
            </div>
        </div>

        <div class="daily-civ-card">
            <div class="civ-card-art daily-civ-art" data-civ="${civId}">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="400" height="200" fill="var(--scene-sky)"/>
                    <use href="#${sceneBackdropId(civId)}" width="400" height="200"/>
                    <rect y="168" width="400" height="32" fill="var(--scene-ground)"/>
                </svg>
            </div>
            <div class="daily-civ-name"></div>
            <div class="daily-civ-system"></div>
            <div class="daily-civ-difficulty"></div>
        </div>

        ${completed ? `
            <div class="daily-completed-msg">
                <p>${icon('check')}<span class="daily-completed-title"></span></p>
                <p class="daily-completed-text"></p>
            </div>
        ` : `
            <p class="daily-description"></p>
        `}
    `;

    const setText = (selector, value) => {
        const node = content.querySelector(selector);
        if (node) node.textContent = value;
    };

    setText('.daily-date', formatDate(today));
    setText('.daily-streak-text', streak > 0
        ? t('ui.daily.streak', { count: streak })
        : t('ui.daily.startStreak'));
    setText('.daily-civ-name', civ.name);
    setText('.daily-civ-system', civ.numberSystem);
    setText('.daily-civ-difficulty', t(`ui.difficulty.${civ.difficulty}`));

    if (completed) {
        setText('.daily-completed-title', t('ui.daily.completedTitle'));
        setText('.daily-completed-text', t('ui.daily.completedText'));
    } else {
        setText('.daily-description', t('ui.daily.description', { civ: civ.name }));
    }

    const actions = document.getElementById('daily-actions');
    if (completed) {
        actions.innerHTML = '';
    } else {
        actions.innerHTML = '<button class="btn btn-primary" onclick="startDailyChallenge()"></button>';
        actions.querySelector('button').textContent = t('ui.daily.play');
    }

    showScreen('daily-screen');
}

function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    // The player's chosen language, not the browser's: someone playing the game
    // in French should not get an English date above a French screen.
    return d.toLocaleDateString(getLanguage(), {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

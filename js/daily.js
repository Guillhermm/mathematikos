// ===== DAILY CHALLENGE =====
// Deterministic daily challenge using a seeded LCG random number generator.
// No login or server required. Same challenge for every player on a given date.

// ---- Seeded RNG (Mulberry32) ----
function mulberry32(seed) {
    return function () {
        seed |= 0;
        seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function dateSeed() {
    // Use today's YYYYMMDD as an integer seed
    const d = new Date();
    return parseInt(
        `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
    );
}

function seededRandInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
}

// ---- Storage helpers ----
function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function isDailyCompleted() {
    return getStorage(`mathematikos_daily_${getTodayKey()}`) === 'true';
}

function recordDailyComplete() {
    const today = getTodayKey();
    setStorage(`mathematikos_daily_${today}`, 'true');

    const lastDate = getStorage('mathematikos_daily_last_date');
    const yesterday = (() => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    })();

    let streak = parseInt(getStorage('mathematikos_daily_streak') || '0', 10);
    if (lastDate === yesterday) {
        streak += 1;
    } else if (lastDate !== today) {
        streak = 1;
    }

    setStorage('mathematikos_daily_streak', String(streak));
    setStorage('mathematikos_daily_last_date', today);
    return streak;
}

function getDailyStreak() {
    return parseInt(getStorage('mathematikos_daily_streak') || '0', 10);
}

// ---- Daily challenge state ----
// Injected into gameState when starting a daily run.
const DAILY_CIV_ORDER = ['roman', 'egyptian', 'greek', 'babylonian', 'chinese', 'mayan', 'hindu-arabic'];

function getDailyCivId() {
    const rng  = mulberry32(dateSeed());
    const idx  = Math.floor(rng() * DAILY_CIV_ORDER.length);
    return DAILY_CIV_ORDER[idx];
}

function startDailyChallenge() {
    const civId = getDailyCivId();

    // Force the civilization to be unlocked for daily play
    if (!civilizations[civId].unlocked) {
        civilizations[civId].unlocked = true;
    }

    gameState.mode                = 'daily';
    gameState.score               = 0;
    gameState.oraclePieces        = [];
    gameState.currentCivilization = civId;
    gameState.dailySeed           = dateSeed();

    applyTheme(civId);
    startAmbient(civId);
    startChallenge();
}

// Override rand() for daily mode using the seeded generator.
// We patch gameState with a daily RNG instance so problem generators can opt in.
const _originalRand = rand;

function getDailyRng() {
    if (!gameState._dailyRng) {
        gameState._dailyRng = mulberry32(gameState.dailySeed + gameState.currentChallenge * 1000);
    }
    return gameState._dailyRng;
}

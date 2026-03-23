// ===== STORAGE =====
// Safe wrappers for localStorage to handle private browsing and storage quota errors.

function getStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function setStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // Storage unavailable: private browsing, quota exceeded, etc.
    }
}

function getCivilizationStats(civId) {
    const raw = getStorage(`mathematikos_${civId}_stats`);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function saveCivilizationStats(civId, stats) {
    setStorage(`mathematikos_${civId}_stats`, JSON.stringify(stats));
}

function markCivilizationComplete(civId) {
    setStorage(`mathematikos_${civId}_completed`, 'true');
}

function isCivilizationComplete(civId) {
    return getStorage(`mathematikos_${civId}_completed`) === 'true';
}

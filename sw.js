// ===== SERVICE WORKER =====
// Cache-first strategy for offline play.

const CACHE_NAME = 'mathematikos-v2';

const SHELL_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './manifest.json',
    './favicon.ico',
    './icons/icon.svg',
    './icons/astrolabe.svg',
    './icons/favicon-16x16.png',
    './icons/favicon-32x32.png',
    './icons/apple-touch-icon.png',
    './icons/icon-192.png',
    './icons/icon-512.png',
    // Core
    './js/state.js',
    './js/storage.js',
    './js/audio.js',
    './js/symbols.js',
    './js/themes.js',
    './js/codex.js',
    './js/daily.js',
    // Civilizations
    './js/civilizations/roman.js',
    './js/civilizations/egyptian.js',
    './js/civilizations/greek.js',
    './js/civilizations/babylonian.js',
    './js/civilizations/chinese.js',
    './js/civilizations/mayan.js',
    './js/civilizations/hindu-arabic.js',
    // UI
    './js/ui/screens.js',
    './js/ui/symbol-pad.js',
    './js/ui/feedback.js',
    './js/ui/timer.js',
    './js/ui/about.js',
    './js/ui/daily-screen.js',
    // Game
    './js/challenges/cross-civ.js',
    './js/challenges.js',
    './js/game.js',
    // Screenshots
    './screenshots/screenshot-chatgpt-2024-october.png',
    './screenshots/screenshot-github-mathematikos-proto-readme-history.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(SHELL_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Only handle same-origin GET requests.
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                });
            })
    );
});

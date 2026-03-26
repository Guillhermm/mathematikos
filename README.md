# Mathematikos — Journey Through Ancient Numbers

**Mathematikos** is an educational browser game that takes players on a journey through time, exploring the great civilizations of antiquity by solving mathematical challenges using their unique number systems. Travel through history, meet Hypatia as your guide, and master seven ancient numeral systems in a rich, narrative-driven experience.

## Play

> Live at **[guillhermm.github.io/mathematikos](https://guillhermm.github.io/mathematikos)** — no install required. Also installable as a Progressive Web App (PWA) for offline play.

## Features

### Seven Civilizations

| Civilization | System | Difficulty |
|---|---|---|
| Romans | Base 10, additive (I V X L C D M) | Easy |
| Egyptians | Base 10, hieroglyphic symbols | Intermediate |
| Greeks | Base 10, alphabetic (Ionic) | Intermediate |
| Babylonians | Base 60 (sexagesimal) | Advanced |
| Chinese | Decimal rod numerals, vertical notation | Advanced |
| Mayans | Base 20 (vigesimal), dots and bars | Advanced |
| Hindu-Arabic | Origin of our modern numeral system | Intermediate |

Plus **Cross-Civilization** challenges that mix systems in a single round.

### Game Modes

- **Timed mode** — Solve challenges against the clock; wrong answers cost time.
- **Practice mode** — No timer, no pressure. Hints available for learning.
- **Daily Challenge** — One fixed challenge per day across civilizations. Returns daily for a persistent habit.

### Challenge Types

- **Classic** — Read the ancient numeral and enter the Arabic answer.
- **Reverse** — Given an Arabic number, write it in the ancient system using the symbol pad.

### Codex

Unlock historical fact cards as you play. Each civilization reveals its mathematical legacy, cultural context, and notation rules.

### Hypatia

Your guide through time. Hypatia provides contextual hints, celebrates streaks, and appears at key moments in your journey.

### Themes

Supports light and dark modes, with per-civilization color themes that adapt the UI to each culture's aesthetic.

### Audio

Ambient audio per civilization. Each historical setting has its own soundscape.

## Technical

- Pure HTML, CSS, and ES6 JavaScript — no build step, no dependencies.
- Progressive Web App (PWA): installable, offline-capable via service worker.
- 542 automated tests covering all conversion functions across all seven civilizations.
- CI/CD via GitHub Actions: tests run on every push, deploy to GitHub Pages on version tags.

## Project Structure

```
mathematikos/
├── index.html
├── styles.css
├── manifest.json
├── sw.js                  # Service worker (PWA)
├── js/
│   ├── game.js            # Core game loop
│   ├── state.js           # Application state
│   ├── challenges.js      # Challenge generation
│   ├── symbols.js         # Symbol rendering
│   ├── codex.js           # Codex/fact cards
│   ├── daily.js           # Daily challenge logic
│   ├── audio.js           # Ambient audio
│   ├── themes.js          # Theme management
│   ├── storage.js         # Local persistence
│   ├── civilizations/     # One module per civilization
│   └── ui/                # Screen, timer, symbol-pad, feedback
├── tests/                 # Test suite
├── screenshots/           # Provenance screenshots
└── icons/                 # PWA icons (SVG, PNG, favicon)
```

## Development

No build step required. Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

### Running Tests

```bash
cd tests
node run_tests.js
```

## Origin

Mathematikos was conceived in 2024 through discussions about combining mathematics education with historical civilizations in an engaging game format. The About screen in the game includes a full provenance timeline and the creator's background.

Created by **Guilherme Zeni** — senior software engineer and lifelong math enthusiast.

## Roadmap

- Streak multiplier system
- Leaderboard
- Teacher / classroom dashboard
- Additional civilizations (Inca Quipu, Binary)
- Multiplayer mode

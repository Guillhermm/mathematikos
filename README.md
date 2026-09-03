# Mathematikos: Journey Through Ancient Numbers

**Mathematikos** is an educational browser game that takes players on a journey through time, exploring the great civilizations of antiquity by solving mathematical challenges using their unique number systems. Travel through history, meet Hypatia as your guide, and master seven ancient numeral systems in a rich, narrative-driven experience.

## Play

> Live at **[guillhermm.github.io/mathematikos](https://guillhermm.github.io/mathematikos)**, no install required. Also installable as a Progressive Web App (PWA) for offline play.

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

- **Timed mode**: Solve challenges against the clock; wrong answers cost time.
- **Practice mode**: No timer, no pressure. Hints available for learning.
- **Daily Challenge**: One fixed challenge per day across civilizations. Returns daily for a persistent habit.

### Challenge Types

- **Classic**: Read the ancient numeral and enter the Arabic answer.
- **Reverse**: Given an Arabic number, write it in the ancient system using the symbol pad.

### Codex

Unlock historical fact cards as you play. Each civilization reveals its mathematical legacy, cultural context, and notation rules.

### The briefing

Every story screen opens with one speaking card rather than a stack of text blocks. On a first run
the Oracle of Numbers narrates the frame story across three slides, hands over to Hypatia for the
guidance specific to that civilization, and closes on the person you are actually there to help.
Once you hold a fragment the intro drops away. The card sizes itself to the slide you are reading,
and supports arrows, dots and swipe.

Each speaker gets their own register: the Oracle in brass because it stands outside any
civilization, Hypatia in her constant violet, and the local character in the color of the place
they belong to.

### The dossier

Below the briefing, the run's facts sit in one panel with hairline-separated rows: setting,
objective, numerals, and any mode note such as the time limit. It replaced four stacked cards that
spent most of their height on padding and borders, which cut the story screen from roughly 1700 px
of scroll to about 700 px on a phone.

### The two characters

**The Oracle of Numbers** is the artifact you are reassembling, drawn as a broken astrolabe with an
eye at its center, suspended in the dark between eras. It speaks from outside any civilization, in
brass.

**Hypatia of Alexandria** is your guide inside them. She appears in an illustrated scene standing in
front of that culture's architecture, and again on the results screen holding the fragments you
recovered. The figure is one authored SVG reused everywhere, so she looks the same in Rome and in
Baghdad; only the backdrop and the palette change. Her violet stays constant across all seven
civilizations and in dark mode, because it is her identity rather than a theme color.

### Artwork

All artwork is inline SVG drawn against CSS custom properties: seven civilization backdrops, the
Hypatia figure, the Oracle character and disc, and a line-icon set. Nothing is a raster image, so every asset
recolors itself for each civilization and for dark mode without a second copy, and the complete
offline install stays around 445 KB, most of which is the PWA icons and the provenance screenshots
rather than the artwork.

### The Oracle of Numbers

The artifact you are reassembling is drawn as one disc with a wedge per challenge. Each correct
answer locks a fragment into place, so a run visibly rebuilds it.

### Themes

Supports light and dark modes, with per-civilization color themes that adapt the UI to each culture's aesthetic.

### Audio

Ambient audio per civilization. Each historical setting has its own soundscape.

## Technical

- Pure HTML, CSS, and ES6 JavaScript, with no build step and no dependencies.
- Progressive Web App (PWA): installable, offline-capable via service worker.
- 646 automated tests covering the conversion functions, the scene system, the briefing slider, and a style contract that guards the artwork's CSS.
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
│   └── ui/                # Screens, briefing, scenes, icons, timer, symbol-pad, feedback
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

Created by **Guilherme Zeni**, senior software engineer and lifelong math enthusiast.

## Roadmap

- Streak multiplier system
- Leaderboard
- Teacher / classroom dashboard
- Additional civilizations (Inca Quipu, Binary)
- Multiplayer mode

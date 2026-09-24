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

The artwork and the words are separate layers. Slides that show the same image share one layer, so
the Oracle's three slides move only the text while the instrument holds still; the image crossfades
only when the speaker actually changes.

### The mission panel

Below the briefing sits the objective, the one line you act on, then the facts you might glance at
as chips (numerals, difficulty, challenge count, and the time limit in timed mode). The scene prose
is folded behind a disclosure, since the briefing has already shown you the place. It replaced four
stacked cards and cut the story screen from roughly 1700 px of scroll to under 800 px on a phone.

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

### The equation

The answer slot sits inside the equation, where the answer belongs, rather than in a separate
labelled box below it: you complete the sum instead of restating it. Operands, operator, equals and
slot are siblings in one wrapping flex line, so a long additive numeral wraps rather than each
operand taking a row of its own. Each operand keeps a faint ground so the two numbers stay separate
when a line wraps.

That cut the space above the symbol pad from 241 to 412 px down to 102 to 246 px on a phone,
depending on civilization and problem size. Reverse challenges drop the equals sign, since a value
to transcribe is not a sum to complete, and conversion challenges name the target system on the
slot itself.

### The Oracle of Numbers

The artifact you are reassembling is drawn as one disc with a wedge per challenge. Each correct
answer locks a fragment into place, so a run visibly rebuilds it.

### Settings

A gear on the main menu opens appearance and language. Appearance is System, Light or Dark, and the
choice is stored, so it survives a reload and overrides the operating system. Language offers
English, Spanish, French, German and Brazilian Portuguese, and the choice applies immediately to
every screen.

Dark styling hangs off `html[data-dark]` rather than a `prefers-color-scheme` media query, because
CSS gives a page no way to override that query. `js/ui/settings.js` owns the attribute, and an
inline script in the document head sets it before first paint so a stored dark preference does not
flash light.

### Languages

The game is fully translated into English, Spanish, French, German and Brazilian Portuguese. Every
authored string lives in `js/locales/<tag>.js`; the code holds identifiers, numbers and runtime
state, never sentences. That covers the interface, the stories, the word problems, the quick
reference guides, the codex and the about page.

`js/i18n.js` is the runtime. `t('ui.game.submit')` returns one string and substitutes `{named}`
parameters; `tData` returns a list or object whole; `tPick` chooses one of a civilization's word
problems at random and fills in the operands. Bulk content (stories, codex, timeline, civilization
names) is bound onto the globals the rest of the game already reads, so those call sites did not
change. Static markup carries its key on the element as `data-i18n`, with `data-i18n-title`,
`data-i18n-label`, `data-i18n-placeholder` and `data-i18n-slot` for the attributes that hold copy.
Everything is written with `textContent`, so authored text never becomes markup.

Word problems are held as separate lists per operation rather than one sentence with a verb spliced
in, because addition and subtraction do not share a frame in every language.

Translation drift is silent by nature, so `tests/i18n.test.js` makes it loud: each catalog must
define exactly the English key set, with no empty values, the same `{placeholders}` and the same
deliberate nulls. It also checks the other direction, that every key the code and the markup ask for
actually exists, and that each locale file is loaded by `index.html` and precached by the service
worker.

### Layout

Phone first. A second layout at 769 px gives tablets a two-column game screen, and a third at
1024 px is desktop only: the story screen puts the briefing beside the mission panel instead of
stretching the artwork to the full window, the play screen pins to the viewport so Submit is always
on screen, and the results stats sit in one row.

The story and challenge screens are pinned to the viewport at every width, so their top and bottom
bars run edge to edge and stay put while only the middle scrolls. The bars are full bleed while
their contents stay aligned with the body's column, using padding rather than a capped bar width.

Screens are vertically centered at every width. The centering uses auto block margins rather than
`justify-content`, because auto margins resolve to zero when free space runs out: a screen taller
than the viewport falls back to top-aligned and stays fully reachable, where `justify-content` would
clip its top out of the scroll range.

### Themes

Supports light and dark modes, with per-civilization color themes that adapt the UI to each culture's
aesthetic. Each civilization defines a full palette in both themes: surfaces, foreground colors, and
its own ink, so a blue screen has blue-grey text and hairlines rather than the warm brown that used
to run through every theme. Borders and shadows derive from that ink, so nothing has to be restated
per civilization.

Both characters take the civilization's palette too, so a blue screen is blue throughout: Hypatia's
robe, the Oracle's night sky and instrument, and every speech panel derive from the active primary.
They stay recognizable by their artwork rather than their hue, one a figure and one a broken
astrolabe. Skin and hair are the only exception, since those belong to a person rather than a place.

The derived tokens are declared on `body`, not `:root`, because a `var()` inside a custom property
resolves against the element that declares it: deriving them at `:root` would pin them to the root
palette whichever civilization is active.

Every text pairing in the game meets WCAG AA contrast (4.5:1 for body text, 3:1 for large). Touch
targets clear the 24 px WCAG floor, with 44 px on everything but the slider dots.

### Audio

Ambient audio per civilization. Each historical setting has its own soundscape.

## Technical

- Pure HTML, CSS, and ES6 JavaScript, with no build step and no dependencies.
- Progressive Web App (PWA): installable, offline-capable via service worker.
- 767 automated tests covering the conversion functions, the scene system, the briefing slider, a style contract that guards the artwork's CSS, and the link-preview tags.
- CI/CD via GitHub Actions: tests run on every push, deploy to GitHub Pages on version tags.

## Project Structure

```
mathematikos/
├── index.html
├── styles.css
├── manifest.json
├── sw.js                  # Service worker (PWA)
├── js/
│   ├── i18n.js            # Translation runtime: t(), tData(), tPick()
│   ├── locales/           # One catalog per language: en, es, fr, de, pt-BR
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
│   └── ui/                # Screens, briefing, scenes, icons, settings, timer, symbol-pad, feedback
├── tests/                 # Test suite
├── screenshots/           # Provenance screenshots
└── icons/                 # PWA icons (SVG, PNG, favicon) and og-image.png, the link-preview card rendered from og-image.svg
```

## Development

No build step required. Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

### Running Tests

```bash
node tests/run-tests.js
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

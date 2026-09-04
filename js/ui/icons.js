// ===== ICON SET =====
// Line icons drawn on a 24x24 grid, stroked in currentColor so they take the
// surrounding text color in every civilization theme and in dark mode. They
// replace the emoji that previously stood in for section markers and controls.
// Injected once, like the scene sprite; <use> cannot reach an external file.

const ICON_SPRITE_ID = 'icon-sprite';

const ICON_SPRITE = `
<svg id="${ICON_SPRITE_ID}" width="0" height="0" aria-hidden="true" focusable="false">
  <defs>
    <symbol id="i-pin" viewBox="0 0 24 24">
      <path d="M12 21c4-5 6.5-8.3 6.5-11a6.5 6.5 0 10-13 0c0 2.7 2.5 6 6.5 11z"/>
      <circle cx="12" cy="10" r="2.4"/>
    </symbol>
    <symbol id="i-target" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
    </symbol>
    <symbol id="i-book" viewBox="0 0 24 24">
      <path d="M4 5.5h5.5A2.5 2.5 0 0112 8v11a2 2 0 00-2-2H4z"/>
      <path d="M20 5.5h-5.5A2.5 2.5 0 0012 8v11a2 2 0 012-2h6z"/>
    </symbol>
    <symbol id="i-scroll" viewBox="0 0 24 24">
      <path d="M6.5 4h11v14a2.5 2.5 0 01-2.5 2.5H7"/>
      <path d="M6.5 4a2.5 2.5 0 000 5H9"/>
      <path d="M17.5 20.5a2.5 2.5 0 002.5-2.5v-2.5h-5"/>
      <path d="M10 11.5h5M10 15h4"/>
    </symbol>
    <symbol id="i-lamp" viewBox="0 0 24 24">
      <path d="M9 16.5a6 6 0 116 0v1.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 18z"/>
      <path d="M10 21.5h4"/>
    </symbol>
    <symbol id="i-oracle" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5"/>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>
      <path d="M12 12l4-3.5"/>
    </symbol>
    <symbol id="i-coin" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5"/>
      <path d="M12 7.5v9M9.8 9.8h3.4a1.9 1.9 0 010 3.8h-2.6a1.9 1.9 0 000 3.8h3.6"/>
    </symbol>
    <symbol id="i-sound-on" viewBox="0 0 24 24">
      <path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/>
      <path d="M16 9a4 4 0 010 6M18.5 6.5a7.5 7.5 0 010 11"/>
    </symbol>
    <symbol id="i-sound-off" viewBox="0 0 24 24">
      <path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/>
      <path d="M16 10l4.5 4.5M20.5 10L16 14.5"/>
    </symbol>
    <symbol id="i-lock" viewBox="0 0 24 24">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2"/>
      <path d="M8 10.5V8a4 4 0 018 0v2.5"/>
    </symbol>
    <symbol id="i-check" viewBox="0 0 24 24">
      <path d="M5 12.5l4.5 4.5L19 7.5"/>
    </symbol>
    <symbol id="i-cross" viewBox="0 0 24 24">
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>
    </symbol>
    <symbol id="i-trophy" viewBox="0 0 24 24">
      <path d="M7.5 4h9v5a4.5 4.5 0 01-9 0z"/>
      <path d="M7.5 5.5H5a2.5 2.5 0 002.5 2.5M16.5 5.5H19a2.5 2.5 0 01-2.5 2.5"/>
      <path d="M12 13.5v3M8.5 20.5h7M9.5 20.5c0-2 1-4 2.5-4s2.5 2 2.5 4"/>
    </symbol>
    <symbol id="i-flame" viewBox="0 0 24 24">
      <path d="M12 21c3.6 0 6-2.4 6-5.5 0-4-4-5.5-3.5-11C11 6 8 9 8 12.5c0-1-.5-2-1.2-2.6A6.6 6.6 0 006 15.5C6 18.6 8.4 21 12 21z"/>
    </symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24">
      <rect x="4" y="5.5" width="16" height="15" rx="2"/>
      <path d="M4 10h16M9 3.5v4M15 3.5v4"/>
    </symbol>
    <symbol id="i-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5"/>
      <path d="M12 7v5.3l3.4 2"/>
    </symbol>
    <symbol id="i-gear" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.4"/>
      <path d="M19.4 14a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5v.2a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 010-4h.1a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 014 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1h.2a2 2 0 010 4h-.1a1.6 1.6 0 00-1.5 1z"/>
    </symbol>
    <symbol id="i-spark" viewBox="0 0 24 24">
      <path d="M12 3.5l2.1 5.3 5.4 2.2-5.4 2.2L12 18.5l-2.1-5.3-5.4-2.2 5.4-2.2z"/>
    </symbol>
  </defs>
</svg>`;

// Returns inline SVG markup for one icon. Decorative by default: the label it
// sits beside carries the meaning, so screen readers should skip the glyph.
function icon(name, extraClass) {
    const cls = extraClass ? `icon ${extraClass}` : 'icon';
    return `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;
}

function injectIconSprite() {
    if (document.getElementById(ICON_SPRITE_ID)) return;
    const holder = document.createElement('div');
    holder.className = 'scene-sprite-holder';
    holder.innerHTML = ICON_SPRITE;
    document.body.appendChild(holder);
}

// ===== HYPATIA SCENES =====
// One authored figure, reused in every civilization, standing in front of a
// per-civilization backdrop. Every fill reads a CSS custom property, so the
// same markup recolors under body[data-civ] and in dark mode without a second
// copy of the art. Injected once into the document; <use> cannot reference an
// external SVG file in any shipping browser.

const SCENE_BACKDROPS = {
    roman:          'bd-roman',
    egyptian:       'bd-egyptian',
    greek:          'bd-greek',
    babylonian:     'bd-babylonian',
    chinese:        'bd-chinese',
    mayan:          'bd-mayan',
    'hindu-arabic': 'bd-hindu-arabic'
};

const SCENE_SPRITE_ID = 'scene-sprite';

const SCENE_SPRITE = `
<svg id="${SCENE_SPRITE_ID}" width="0" height="0" aria-hidden="true" focusable="false">
  <defs>
    <symbol id="hypatia" viewBox="0 0 200 240">
      <defs>
        <clipPath id="hyp-robe"><path d="M100 76c-19 0-30 10-32 21L56 208h88L136 97c-2-11-13-21-36-21z"/></clipPath>
      </defs>

      <!-- rear hair mass, sits behind the head -->
      <circle cx="83" cy="30" r="11.5" fill="var(--hair)"/>
      <ellipse cx="100" cy="46" rx="21" ry="22.5" fill="var(--hair)"/>

      <!-- neck -->
      <path d="M93 62h14v18H93z" fill="var(--skin-shade)"/>

      <!-- chiton -->
      <path d="M100 76c-19 0-30 10-32 21L56 208h88L136 97c-2-11-13-21-36-21z" fill="var(--robe)"/>

      <!-- everything inside the drapery is clipped to the robe silhouette -->
      <g clip-path="url(#hyp-robe)">
        <!-- folds first, so the himation lies over them -->
        <g stroke="var(--robe-shade)" stroke-width="2.2" fill="none" opacity=".4" stroke-linecap="round">
          <path d="M82 116l-8 88"/>
          <path d="M101 120v86"/>
          <path d="M120 116l8 88"/>
        </g>
        <!-- himation: tapered and curved, shoulder to opposite hip -->
        <path d="M66 95L86 86c18 24 34 44 45 65-9 8-19 9-25 6C92 134 78 114 66 95z"
              fill="var(--sash)"/>
        <path d="M66 95L86 86l3 4-20 8z" fill="var(--robe-shade)" opacity=".28"/>
        <!-- hem line, thin enough not to read as a plinth -->
        <path d="M50 199h100v6H50z" fill="var(--robe-shade)" opacity=".5"/>
      </g>

      <!-- her right arm, lowered: bowed outside the robe edge so it reads as an arm -->
      <path d="M75 99q-17 21-15 47" stroke="var(--robe-light)" stroke-width="13"
            stroke-linecap="round" fill="none"/>
      <path d="M75 99q-17 21-15 47" stroke="var(--robe-shade)" stroke-width="13"
            stroke-linecap="round" fill="none" opacity=".22"/>

      <!-- astrolabe, sized to be held rather than carried like a shield -->
      <g transform="translate(47 164)">
        <circle r="14.5" fill="var(--scene-sky)"/>
        <circle r="14.5" fill="none" stroke="var(--brass)" stroke-width="2.8"/>
        <circle r="9" fill="none" stroke="var(--brass-lt)" stroke-width="1.1" opacity=".75"/>
        <g stroke="var(--brass-lt)" stroke-width=".9" opacity=".55">
          <path d="M0-12.5V12.5"/><path d="M-12.5 0H12.5"/>
        </g>
        <path d="M0 0l9-8" stroke="var(--brass-lt)" stroke-width="2" stroke-linecap="round"/>
        <circle r="2" fill="var(--brass-lt)"/>
        <g stroke="var(--brass)" stroke-width="1.6" stroke-linecap="round">
          <path d="M0-14.5v-3"/><path d="M14.5 0h3"/><path d="M0 14.5v3"/><path d="M-14.5 0h-3"/>
        </g>
      </g>
      <!-- hand over the rim, so she grips it -->
      <path d="M59 145q7.5 0 7.5 7.5T59 160q-4 0-6.2-3l2.2-11.8z" fill="var(--skin)"/>

      <!-- her left arm, raised: the teaching gesture -->
      <path d="M130 96q20-8 24-34" stroke="var(--robe-light)" stroke-width="13.5"
            stroke-linecap="round" fill="none"/>
      <g fill="var(--skin)">
        <!-- three fingers and a thumb, attached to the palm -->
        <rect x="148.6" y="33" width="4.6" height="14" rx="2.3" transform="rotate(-11 150.9 47)"/>
        <rect x="153.9" y="31" width="4.6" height="16" rx="2.3"/>
        <rect x="159.2" y="34" width="4.6" height="13" rx="2.3" transform="rotate(11 161.5 47)"/>
        <rect x="145" y="46" width="4.2" height="10" rx="2.1" transform="rotate(-52 147.1 46)"/>
        <ellipse cx="156" cy="52" rx="8.6" ry="7.8"/>
      </g>

      <!-- face -->
      <ellipse cx="100" cy="53" rx="16.5" ry="18.5" fill="var(--skin)"/>
      <path d="M83.5 43q-4 15 1.5 26l5-2.5q-4.5-11-1.5-22z" fill="var(--hair)"/>
      <path d="M116.5 43q4 15-1.5 26l-5-2.5q4.5-11 1.5-22z" fill="var(--hair)"/>
      <rect x="83" y="34" width="34" height="4.6" rx="2.3" fill="var(--brass)"/>
      <rect x="83" y="34" width="34" height="1.8" rx=".9" fill="var(--brass-lt)" opacity=".8"/>
      <g stroke="var(--hair)" stroke-width="1.5" stroke-linecap="round" opacity=".7" fill="none">
        <path d="M90 48q4-2.4 7.5 0"/>
        <path d="M102.5 48q3.5-2.4 7.5 0"/>
      </g>
      <g fill="var(--hair)">
        <ellipse cx="94" cy="54" rx="1.8" ry="2.2"/>
        <ellipse cx="106" cy="54" rx="1.8" ry="2.2"/>
      </g>
      <path d="M100 56.5v5.5" stroke="var(--skin-shade)" stroke-width="1.5"
            stroke-linecap="round" fill="none" opacity=".8"/>
      <!-- mouth, caught mid-sentence -->
      <path d="M96.5 65.5q3.5 4.5 7 0q-3.5 1.6-7 0z" fill="var(--skin-shade)"/>
    </symbol>


    <symbol id="oracle-character" viewBox="0 0 200 200">
      <!-- halo -->
      <circle cx="100" cy="100" r="78" fill="var(--oracle-glow)" opacity=".14"/>
      <circle cx="100" cy="100" r="60" fill="var(--oracle-glow)" opacity=".12"/>

      <!-- detached fragments, still in orbit -->
      <g fill="none" stroke="var(--brass)" stroke-width="2.4" opacity=".55">
        <path d="M158 62a72 72 0 018 26"/>
        <path d="M44 148a72 72 0 01-8-26"/>
        <path d="M74 168a72 72 0 0032 6"/>
      </g>

      <!-- outer ring, with a gap where a piece is missing -->
      <circle cx="100" cy="100" r="52" fill="none" stroke="var(--brass)"
              stroke-width="5" stroke-dasharray="196 30" stroke-linecap="round"
              transform="rotate(-24 100 100)"/>

      <!-- graduation ticks -->
      <g stroke="var(--brass-lt)" stroke-width="2" stroke-linecap="round" opacity=".75">
        <path d="M100 44v-8"/><path d="M156 100h8"/><path d="M100 156v8"/><path d="M44 100h-8"/>
        <path d="M139 61l6-6"/><path d="M139 139l6 6"/><path d="M61 139l-6 6"/><path d="M61 61l-6-6"/>
      </g>

      <!-- inner plate -->
      <circle cx="100" cy="100" r="40" fill="var(--oracle-plate)"/>
      <circle cx="100" cy="100" r="40" fill="none" stroke="var(--brass)" stroke-width="2.5"/>
      <circle cx="100" cy="100" r="29" fill="none" stroke="var(--brass-lt)"
              stroke-width="1.4" opacity=".6"/>

      <!-- alidade -->
      <path d="M100 100l30-22" stroke="var(--brass-lt)" stroke-width="3.5"
            stroke-linecap="round" fill="none"/>

      <!-- the eye: this is what makes it a character and not a dial -->
      <ellipse cx="100" cy="100" rx="24" ry="15" fill="var(--oracle-void)"/>
      <ellipse cx="100" cy="100" rx="24" ry="15" fill="none"
               stroke="var(--brass)" stroke-width="2.2"/>
      <circle cx="100" cy="100" r="10" fill="var(--brass)"/>
      <circle cx="100" cy="100" r="4.5" fill="var(--oracle-void)"/>
      <circle cx="96" cy="96" r="2.6" fill="var(--brass-lt)"/>
    </symbol>

    <symbol id="bd-roman" viewBox="0 0 400 200">
      <circle cx="258" cy="50" r="24" fill="var(--secondary-color)" opacity=".22"/>
      <g fill="var(--primary-color)" opacity=".22">
        <path d="M36 168V86h84v82h-20v-56a22 22 0 00-44 0v56z"/>
        <rect x="28" y="76" width="100" height="10"/>
        <rect x="28" y="168" width="100" height="9"/>
      </g>
      <g fill="var(--primary-color)" opacity=".13">
        <rect x="292" y="96" width="15" height="72"/>
        <rect x="322" y="96" width="15" height="72"/>
        <rect x="352" y="96" width="15" height="72"/>
        <rect x="284" y="86" width="91" height="10"/>
        <rect x="284" y="168" width="91" height="8"/>
      </g>
    </symbol>

    <symbol id="bd-egyptian" viewBox="0 0 400 200">
      <circle cx="318" cy="56" r="30" fill="var(--secondary-color)" opacity=".3"/>
      <g fill="var(--primary-color)">
        <path d="M56 168L136 44l80 124z" opacity=".24"/>
        <path d="M196 168l58-90 58 90z" opacity=".15"/>
      </g>
      <g fill="var(--primary-color)" opacity=".2">
        <rect x="330" y="118" width="14" height="50"/>
        <rect x="352" y="130" width="14" height="38"/>
      </g>
    </symbol>

    <symbol id="bd-greek" viewBox="0 0 400 200">
      <circle cx="252" cy="52" r="26" fill="var(--secondary-color)" opacity=".22"/>
      <g fill="var(--primary-color)" opacity=".22">
        <path d="M46 44l60-30 60 30z"/>
        <rect x="40" y="44" width="132" height="10"/>
        <rect x="52" y="54" width="18" height="106"/>
        <rect x="97" y="54" width="18" height="106"/>
        <rect x="142" y="54" width="18" height="106"/>
        <rect x="40" y="160" width="132" height="9"/>
      </g>
      <g fill="var(--primary-color)" opacity=".13">
        <rect x="300" y="70" width="16" height="90"/>
        <rect x="336" y="70" width="16" height="90"/>
        <rect x="292" y="60" width="68" height="10"/>
        <rect x="292" y="160" width="68" height="8"/>
      </g>
    </symbol>

    <symbol id="bd-babylonian" viewBox="0 0 400 200">
      <circle cx="300" cy="48" r="22" fill="var(--secondary-color)" opacity=".26"/>
      <g fill="var(--primary-color)" opacity=".22">
        <rect x="40" y="146" width="168" height="22"/>
        <rect x="58" y="120" width="132" height="26"/>
        <rect x="78" y="94" width="92" height="26"/>
        <rect x="98" y="70" width="52" height="24"/>
      </g>
      <g fill="var(--secondary-color)" opacity=".34">
        <circle cx="52" cy="146" r="9"/><circle cx="76" cy="146" r="7"/>
        <circle cx="196" cy="146" r="8"/><circle cx="172" cy="146" r="6"/>
        <circle cx="70" cy="120" r="8"/><circle cx="178" cy="120" r="7"/>
        <circle cx="90" cy="94" r="7"/><circle cx="158" cy="94" r="6"/>
      </g>
      <g fill="var(--primary-color)" opacity=".12">
        <rect x="290" y="132" width="88" height="36"/>
        <rect x="306" y="112" width="56" height="20"/>
      </g>
    </symbol>

    <symbol id="bd-chinese" viewBox="0 0 400 200">
      <circle cx="296" cy="46" r="23" fill="var(--secondary-color)" opacity=".24"/>
      <g fill="var(--primary-color)" opacity=".22">
        <path d="M52 84l72-26 72 26-14 10H66z"/>
        <rect x="86" y="94" width="76" height="24"/>
        <path d="M62 122l62-20 62 20-12 10H74z"/>
        <rect x="94" y="132" width="60" height="20"/>
        <path d="M72 156l52-16 52 16-10 8H82z"/>
        <rect x="46" y="164" width="156" height="8"/>
      </g>
      <g fill="var(--primary-color)" opacity=".12">
        <path d="M286 112l52-18 52 18-10 8h-84z"/>
        <rect x="308" y="120" width="56" height="44"/>
        <rect x="282" y="164" width="108" height="8"/>
      </g>
    </symbol>

    <symbol id="bd-mayan" viewBox="0 0 400 200">
      <g fill="var(--secondary-color)" opacity=".55">
        <circle cx="326" cy="36" r="2.6"/><circle cx="356" cy="58" r="2"/>
        <circle cx="298" cy="62" r="1.8"/><circle cx="372" cy="26" r="2.2"/>
        <circle cx="340" cy="82" r="1.6"/>
      </g>
      <g fill="var(--primary-color)" opacity=".22">
        <rect x="44" y="146" width="164" height="22"/>
        <rect x="60" y="124" width="132" height="22"/>
        <rect x="76" y="102" width="100" height="22"/>
        <rect x="92" y="80" width="68" height="22"/>
        <rect x="108" y="58" width="36" height="22"/>
        <rect x="116" y="46" width="20" height="12"/>
      </g>
      <g fill="var(--primary-color)" opacity=".13">
        <rect x="286" y="140" width="88" height="28"/>
        <rect x="302" y="120" width="56" height="20"/>
      </g>
    </symbol>

    <symbol id="bd-hindu-arabic" viewBox="0 0 400 200">
      <g fill="var(--secondary-color)" opacity=".3">
        <path d="M312 30l4.6 11.4L328 46l-11.4 4.6L312 62l-4.6-11.4L296 46l11.4-4.6z"/>
        <circle cx="352" cy="72" r="2.4"/><circle cx="286" cy="76" r="2"/>
      </g>
      <g fill="var(--primary-color)" opacity=".22">
        <path d="M84 116a40 40 0 0180 0z"/>
        <rect x="122" y="60" width="4" height="18" rx="2"/>
        <rect x="80" y="116" width="88" height="52"/>
        <path d="M104 168v-28a14 14 0 0128 0v28z" fill="var(--scene-sky)"/>
        <rect x="72" y="164" width="104" height="8"/>
      </g>
      <g fill="var(--primary-color)" opacity=".13">
        <path d="M286 128a22 22 0 0144 0z"/>
        <rect x="284" y="128" width="48" height="40"/>
        <path d="M344 140a16 16 0 0132 0z"/>
        <rect x="342" y="140" width="36" height="28"/>
        <rect x="278" y="168" width="104" height="7"/>
      </g>
    </symbol>
  </defs>
</svg>`;

// Returns the backdrop symbol id for a civilization, falling back to Greek so
// an unknown id renders a scene rather than an empty frame.
function sceneBackdropId(civId) {
    return Object.prototype.hasOwnProperty.call(SCENE_BACKDROPS, civId)
        ? SCENE_BACKDROPS[civId]
        : SCENE_BACKDROPS.greek;
}

// Just the artwork: Hypatia standing in the civilization she is introducing.
// The caller supplies whatever speech panel goes with it.
function hypatiaSceneArtMarkup(civId) {
    return `
        <svg class="briefing-art-svg" viewBox="0 0 400 200" role="img"
             aria-label="Hypatia of Alexandria, speaking">
            <rect width="400" height="200" fill="var(--scene-sky)"/>
            <use href="#${sceneBackdropId(civId)}" width="400" height="200"/>
            <rect y="168" width="400" height="32" fill="var(--scene-ground)"/>
            <ellipse cx="204" cy="189" rx="54" ry="6"
                     fill="var(--scene-shadow)" opacity=".2"/>
            <use href="#hypatia" x="120" y="12" width="168" height="202"/>
        </svg>
    `;
}

// ===== ORACLE OF NUMBERS =====
// The Oracle is one artifact broken into fragments, so it is drawn as one disc
// whose wedges fill in as pieces are recovered, rather than as separate tiles.

const ORACLE_OUTER = 46;
const ORACLE_INNER = 17;
const ORACLE_GAP_DEGREES = 5;

function oracleWedgePath(index, total) {
    const step = 360 / total;
    const start = -90 + index * step + ORACLE_GAP_DEGREES / 2;
    const end = -90 + (index + 1) * step - ORACLE_GAP_DEGREES / 2;
    const rad = deg => (deg * Math.PI) / 180;
    const pt = (r, deg) => `${(60 + r * Math.cos(rad(deg))).toFixed(2)} ${(60 + r * Math.sin(rad(deg))).toFixed(2)}`;
    const large = end - start > 180 ? 1 : 0;
    return `M${pt(ORACLE_OUTER, start)}`
         + `A${ORACLE_OUTER} ${ORACLE_OUTER} 0 ${large} 1 ${pt(ORACLE_OUTER, end)}`
         + `L${pt(ORACLE_INNER, end)}`
         + `A${ORACLE_INNER} ${ORACLE_INNER} 0 ${large} 0 ${pt(ORACLE_INNER, start)}Z`;
}

// The disc's shapes on their own 120x120 grid, with no <svg> wrapper, so they
// can be dropped straight into a larger scene without nesting viewports.
function oracleDiscShapes(collected, total) {
    const wedges = [];
    for (let i = 0; i < total; i++) {
        const isFilled = i < collected;
        wedges.push(
            `<path class="oracle-wedge${isFilled ? ' filled' : ''}" d="${oracleWedgePath(i, total)}"/>`
        );
    }
    return `<circle class="oracle-rim" cx="60" cy="60" r="54"/>`
         + wedges.join('')
         + `<circle class="oracle-hub" cx="60" cy="60" r="9"/>`
         + `<circle class="oracle-pin" cx="60" cy="60" r="3"/>`;
}

function oracleProgressLabel(collected, total) {
    return `Oracle of Numbers: ${collected} of ${total} fragments recovered`;
}

// Standalone disc, for the game screen.
function oracleDiscMarkup(collected, total) {
    return `
        <svg class="oracle-disc" viewBox="0 0 120 120" role="img"
             aria-label="${oracleProgressLabel(collected, total)}">
            ${oracleDiscShapes(collected, total)}
        </svg>
    `;
}

// Closes the loop the story screen opens: the same figure, the same place,
// now with the fragment she sent you for.
function oracleResultSceneMarkup(civId, collected, total) {
    return `
        <div class="result-scene">
            <svg class="result-scene-art" viewBox="0 0 400 200" role="img"
                 aria-label="Hypatia with ${collected} of ${total} Oracle fragments recovered">
                <rect width="400" height="200" fill="var(--scene-sky)"/>
                <use href="#${sceneBackdropId(civId)}" width="400" height="200"/>
                <rect y="168" width="400" height="32" fill="var(--scene-ground)"/>
                <ellipse cx="128" cy="189" rx="52" ry="6"
                         fill="var(--scene-shadow)" opacity=".2"/>
                <use href="#hypatia" x="44" y="12" width="168" height="202"/>
                <g transform="translate(286 96) scale(0.86)">
                    <circle class="result-oracle-halo" cx="0" cy="0" r="62"/>
                    <g transform="translate(-60 -60)">
                        ${oracleDiscShapes(collected, total)}
                    </g>
                </g>
            </svg>
        </div>
    `;
}

// The Oracle speaks from outside any civilization: no backdrop, just the
// instrument suspended in the dark between eras.
function oracleSceneMarkup() {
    return `
        <svg class="briefing-art-svg" viewBox="0 0 400 200" role="img"
             aria-label="The Oracle of Numbers, a broken astrolabe">
            <rect width="400" height="200" fill="var(--oracle-void)"/>
            <g fill="var(--brass-lt)" opacity=".5">
                <circle cx="52" cy="42" r="1.8"/><circle cx="330" cy="54" r="2.2"/>
                <circle cx="86" cy="150" r="1.5"/><circle cx="352" cy="146" r="1.7"/>
                <circle cx="286" cy="30" r="1.4"/><circle cx="126" cy="36" r="1.6"/>
            </g>
            <use href="#oracle-character" x="100" y="0" width="200" height="200"/>
        </svg>
    `;
}

// Adds the sprite to the document once. Safe to call repeatedly.
function injectSceneSprite() {
    if (document.getElementById(SCENE_SPRITE_ID)) return;
    const holder = document.createElement('div');
    holder.className = 'scene-sprite-holder';
    holder.innerHTML = SCENE_SPRITE;
    document.body.appendChild(holder);
}

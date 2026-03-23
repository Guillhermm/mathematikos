// ===== SYMBOL PAD & ANSWER BUILDER =====

let builtAnswer = '';

const CIVILIZATION_SYMBOLS = {
    roman: [
        { symbol: 'I', label: '1' },
        { symbol: 'V', label: '5' },
        { symbol: 'X', label: '10' },
        { symbol: 'L', label: '50' },
        { symbol: 'C', label: '100' },
        { symbol: 'D', label: '500' },
        { symbol: 'M', label: '1000' }
    ],
    egyptian: [
        { symbol: '𓏺', label: '1' },
        { symbol: '𓎆', label: '10' },
        { symbol: '𓍢', label: '100' },
        { symbol: '𓆼', label: '1,000' },
        { symbol: '𓂭', label: '10K' },
        { symbol: '𓆏', label: '100K' }
    ],
    greek: [
        { symbol: 'α', label: '1' },
        { symbol: 'β', label: '2' },
        { symbol: 'γ', label: '3' },
        { symbol: 'δ', label: '4' },
        { symbol: 'ε', label: '5' },
        { symbol: 'ϛ', label: '6' },
        { symbol: 'ζ', label: '7' },
        { symbol: 'η', label: '8' },
        { symbol: 'θ', label: '9' },
        { symbol: 'ι', label: '10' },
        { symbol: 'κ', label: '20' },
        { symbol: 'λ', label: '30' },
        { symbol: 'μ', label: '40' },
        { symbol: 'ν', label: '50' },
        { symbol: 'ξ', label: '60' },
        { symbol: 'ο', label: '70' },
        { symbol: 'π', label: '80' },
        { symbol: 'ϙ', label: '90' },
        { symbol: 'ρ', label: '100' },
        { symbol: 'σ', label: '200' },
        { symbol: 'τ', label: '300' },
        { symbol: 'υ', label: '400' },
        { symbol: 'φ', label: '500' },
        { symbol: 'χ', label: '600' },
        { symbol: 'ψ', label: '700' },
        { symbol: 'ω', label: '800' },
        { symbol: 'ϡ', label: '900' }
    ],
    babylonian: [
        { symbol: '𒐕', label: '1' },
        { symbol: '𒌋', label: '10' },
        { symbol: '⊙', label: '0' },
        { symbol: ' ', label: 'sep' }  // group separator for positional notation
    ],
    mayan: [
        { symbol: '●', label: '1' },
        { symbol: '━', label: '5' },
        { symbol: '○', label: '0' },
        { symbol: '|', label: 'pos' }
    ],
    chinese: [
        { symbol: '〇', label: '0' },
        { symbol: '一', label: '1' },
        { symbol: '二', label: '2' },
        { symbol: '三', label: '3' },
        { symbol: '四', label: '4' },
        { symbol: '五', label: '5' },
        { symbol: '六', label: '6' },
        { symbol: '七', label: '7' },
        { symbol: '八', label: '8' },
        { symbol: '九', label: '9' },
        { symbol: '十', label: '10' },
        { symbol: '百', label: '100' },
        { symbol: '千', label: '1K' },
        { symbol: '萬', label: '10K' }
    ]
};

function renderSymbolPad() {
    const pad = document.getElementById('symbol-pad');
    pad.innerHTML = '';
    const civ = gameState.currentCivilization;
    const symbols = CIVILIZATION_SYMBOLS[civ] || [];

    symbols.forEach(({ symbol, label }) => {
        const button = document.createElement('div');
        button.className = 'symbol-button';
        button.setAttribute('role', 'button');
        button.setAttribute('aria-label', label);
        button.onclick = () => addSymbol(symbol);

        // Space (Babylonian) and '|' (Maya) are positional group separators — show a visual dash.
        const isSeparator = symbol === ' ' || symbol === '|';
        const iconHtml = isSeparator
            ? '<span class="sep-icon">╌</span>'
            : symbolButtonHtml(civ, symbol);
        button.innerHTML = `${iconHtml}<span class="symbol-label">${label}</span>`;
        pad.appendChild(button);
    });
}

function addSymbol(symbol) {
    builtAnswer += symbol;
    updateBuiltAnswer();
}

function clearAnswer() {
    builtAnswer = '';
    updateBuiltAnswer();
}

function backspaceAnswer() {
    // Slice by Unicode code point to correctly remove multi-byte characters.
    builtAnswer = [...builtAnswer].slice(0, -1).join('');
    updateBuiltAnswer();
}

function updateBuiltAnswer() {
    const display = document.getElementById('built-answer');
    display.classList.toggle('empty', !builtAnswer);

    if (!builtAnswer) {
        display.innerHTML = '';
        return;
    }

    // Render via SVG helpers so supplementary-plane characters (Egyptian, Babylonian)
    // display correctly instead of falling back to unsupported font glyphs.
    const civ = gameState.currentCivilization;
    let html;
    switch (civ) {
        case 'egyptian':   html = egyptianToSVGHtml(builtAnswer);   break;
        case 'babylonian': html = babylonianToSVGHtml(builtAnswer); break;
        case 'greek':      html = greekToSVGHtml(builtAnswer);      break;
        case 'chinese':    html = chineseToHtml(builtAnswer);       break;
        case 'mayan':      html = mayanToSVGHtml(builtAnswer);      break;
        default:           html = builtAnswer; // roman: plain ASCII renders everywhere
    }

    display.innerHTML = html;
}

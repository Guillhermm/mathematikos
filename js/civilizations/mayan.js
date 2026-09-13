// ===== MAYAN VIGESIMAL NUMERAL SYSTEM (Base 20) =====
// Uses dots (●=1), bars (━=5), and a shell (○=0).
// Positions separated by '|', most-significant first.
// Practical range: 1–399 (two positional digits).

function numberToMayan(num) {
    if (num === 0) return '○';
    if (!Number.isInteger(num) || num < 0 || num > 399) return 'Invalid';
    const digits = [];
    let remaining = num;
    while (remaining > 0) {
        digits.unshift(remaining % 20);
        remaining = Math.floor(remaining / 20);
    }
    return digits.map(d => {
        if (d === 0) return '○';
        return '━'.repeat(Math.floor(d / 5)) + '●'.repeat(d % 5);
    }).join('|');
}

function mayanToNumber(str) {
    if (!str || !str.trim()) return NaN;
    const trimmed = str.trim();
    if (trimmed === '○') return 0;
    const groups = trimmed.split('|');
    let total = 0;
    const n = groups.length;
    for (let i = 0; i < n; i++) {
        const group = groups[i].trim();
        let digit;
        if (group === '○' || group === '') {
            digit = 0;
        } else {
            const bars = (group.match(/━/g) || []).length;
            const dots = (group.match(/●/g) || []).length;
            digit = bars * 5 + dots;
        }
        if (digit > 19) return NaN;
        total += digit * Math.pow(20, n - 1 - i);
    }
    return total;
}

function mayanDigitSvg(digit) {
    const bars = Math.floor(digit / 5);
    const dots = digit % 5;
    const W = 90;
    const dotR = 9, dotStep = 22, barH = 12, barStep = 18, pad = 8, gap = 8;

    if (digit === 0) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 48" aria-hidden="true"><ellipse cx="45" cy="24" rx="36" ry="16" stroke="currentColor" stroke-width="5" fill="none"/><ellipse cx="45" cy="24" rx="20" ry="8" stroke="currentColor" stroke-width="3" fill="none"/></svg>`;
    }

    const dotAreaH = dots > 0 ? dotR * 2 : 0;
    const gapH     = dots > 0 && bars > 0 ? gap : 0;
    const barAreaH = bars > 0 ? (bars - 1) * barStep + barH : 0;
    const totalH   = pad + dotAreaH + gapH + barAreaH + pad;

    let inner = '';
    let y = pad;

    if (dots > 0) {
        const startX = (W - (dots - 1) * dotStep) / 2;
        for (let i = 0; i < dots; i++) {
            inner += `<circle cx="${startX + i * dotStep}" cy="${y + dotR}" r="${dotR}" fill="currentColor"/>`;
        }
        y += dotAreaH + gapH;
    }
    for (let b = 0; b < bars; b++) {
        inner += `<rect x="8" y="${y}" width="${W - 16}" height="${barH}" rx="3" fill="currentColor"/>`;
        y += barStep;
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${totalH}" aria-hidden="true">${inner}</svg>`;
}

function mayanToSVGHtml(str) {
    if (!str || !str.trim()) return '';
    const groups = str.split('|');
    // Drop trailing empty groups (separator pressed but position not yet filled)
    while (groups.length > 1 && groups[groups.length - 1].trim() === '') groups.pop();

    const parts = groups.map(group => {
        let digit;
        if (group.trim() === '○' || group.trim() === '') {
            digit = 0;
        } else {
            const bars = (group.match(/━/g) || []).length;
            const dots = (group.match(/●/g) || []).length;
            digit = Math.min(19, bars * 5 + dots);
        }
        return `<span class="numeral-svg mayan-digit">${mayanDigitSvg(digit)}</span>`;
    });
    return `<span class="mayan-number">${parts.join('<span class="mayan-pos-sep"></span>')}</span>`;
}

function generateMayanProblem(difficulty) {
    let num1, num2;
    switch (difficulty) {
        case 1:  num1 = rand(5, 15);    num2 = rand(3, 12);   break;
        case 2:  num1 = rand(10, 35);   num2 = rand(5, 25);   break;
        case 3:  num1 = rand(20, 80);   num2 = rand(10, 50);  break;
        case 4:  num1 = rand(60, 200);  num2 = rand(30, 120); break;
        case 5:  num1 = rand(150, 300); num2 = rand(80, 180); break;
        default: num1 = rand(10, 40);   num2 = rand(5, 25);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';
    if (operation === '+' && num1 + num2 > 399) operation = '-';
    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 = Math.min(num1 + 1, 399);

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const mayan1 = numberToMayan(num1);
    const mayan2 = numberToMayan(num2);

    const context = tPick(
        `challenge.mayan.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        mayan1, mayan2,
        mayanAnswer: numberToMayan(answer),
        context,
        hint: t('challenge.mayan.hint', { sym1: mayan1, sym2: mayan2, num1, num2, operation, answer })
    };
}

// ----- Display (browser only) -----

function displayMayanChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.mayan.title')}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-top: 10px; align-items: center;">
            <div class="symbol-ref"><span class="numeral-svg mayan-ref">${mayanDigitSvg(1)}</span><span>● = 1 (${t('guide.mayan.dot')})</span></div>
            <div class="symbol-ref"><span class="numeral-svg mayan-ref">${mayanDigitSvg(5)}</span><span>━ = 5 (${t('guide.mayan.bar')})</span></div>
            <div class="symbol-ref"><span class="numeral-svg mayan-ref">${mayanDigitSvg(0)}</span><span>○ = 0 (${t('guide.mayan.shell')})</span></div>
            <div class="symbol-ref"><span class="numeral-svg mayan-ref">${mayanDigitSvg(19)}</span><span>${t('guide.mayan.max')}</span></div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">${icon('lamp')} ${t('guide.mayan.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals mayan-problem">
            <span class="operand">${mayanToSVGHtml(problem.mayan1)}</span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand">${mayanToSVGHtml(problem.mayan2)}</span>
        </div>
    `;
}

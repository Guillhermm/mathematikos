// ===== GAME STATE =====
const gameState = {
    mode: null, // 'thematic' or 'temporal'
    currentCivilization: null,
    score: 0,
    currentChallenge: 0,
    totalChallenges: 5,
    startTime: null,
    timerInterval: null,
    hintsUsed: 0,
    correctAnswers: 0,
    oraclePieces: [],
    currentProblem: null,
    timeLimit: null // For temporal mode
};

// ===== CIVILIZATIONS DATA =====
const civilizations = {
    roman: {
        id: 'roman',
        name: 'Roman Empire',
        icon: '🏛️',
        difficulty: 'Easy',
        unlocked: true,
        description: 'Help merchants in the Roman Forum calculate prices using Roman numerals.',
        numberSystem: 'Roman Numerals (I, V, X, L, C, D, M)',
        base: 10
    },
    egyptian: {
        id: 'egyptian',
        name: 'Ancient Egypt',
        icon: '🔺',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Decipher hieroglyphic numbers in the pyramids.',
        numberSystem: 'Egyptian Hieroglyphic Numerals',
        base: 10
    },
    greek: {
        id: 'greek',
        name: 'Ancient Greece',
        icon: '⚱️',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Calculate proportions for building temples.',
        numberSystem: 'Greek Alphabetic Numerals',
        base: 10
    },
    babylonian: {
        id: 'babylonian',
        name: 'Babylon',
        icon: '🌴',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Use the sexagesimal system to restore the Hanging Gardens.',
        numberSystem: 'Babylonian Base-60 System',
        base: 60
    },
    chinese: {
        id: 'chinese',
        name: 'Han Dynasty',
        icon: '🏯',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Calculate with counting rods in the imperial market.',
        numberSystem: 'Chinese Counting Rods',
        base: 10
    }
};

// ===== STORY CONTENT =====
const stories = {
    thematic: {
        intro: `<h3>🌟 The Oracle of Numbers</h3>
        <p>You are a young mathematician who has discovered a secret time machine hidden in an ancient temple. Upon activation, you are transported through time to different civilizations.</p>
        <p>Your mission: Help people solve mathematical challenges using their unique number systems while collecting fragments of the mysterious <strong>Oracle of Numbers</strong> - an artifact broken and scattered through time.</p>
        <p>Each civilization holds a piece of the Oracle. Only by completing all challenges can you unlock the ancient wisdom that reveals the true nature of numbers.</p>`,
        
        roman: {
            title: '🏛️ Romans - Helping in the Roman Forum',
            setting: 'You arrive at the bustling Roman Forum, surrounded by marble columns, statues of emperors, and market stalls filled with goods. A merchant calls out to you for help.',
            objective: 'Assist Marcus, a cloth merchant, in calculating prices and performing transactions using Roman numerals.',
            character: '<strong>Marcus the Merchant:</strong> "Welcome, traveler! The Forum is busy today, and I need help with my calculations. Can you assist me with these transactions?"'
        },
        
        egyptian: {
            title: '🔺 Ancient Egypt - Deciphering the Pyramids',
            setting: 'You materialize inside the Great Pyramid of Giza. Torches flicker on ancient walls covered in mysterious hieroglyphs. The air is thick with the scent of incense. A royal scribe greets you with urgency.',
            objective: 'Help the royal scribe prepare for the pharaoh\'s grand banquet by calculating quantities using Egyptian hieroglyphic numerals.',
            character: '<strong>Imhotep the Scribe:</strong> "Great mathematician! The pharaoh\'s banquet approaches, and I must ensure our calculations are perfect. The hieroglyphs hold the answers - can you decipher them?"'
        },
        
        greek: {
            title: '⚱️ Ancient Greece - Building with Proportions',
            setting: 'You arrive at the construction site of the magnificent Parthenon in Athens. Philosophers and architects surround you, discussing the divine proportions and mathematical harmonies that will make this temple eternal.',
            objective: 'Help the master architect calculate proportions and measurements using Greek alphabetic numerals to ensure perfect geometric harmony.',
            character: '<strong>Archimedes:</strong> "Ah, a fellow lover of mathematics! The golden ratio must guide our construction. These calculations require precision - will you help me solve them using our sacred numerals?"'
        },
        
        babylonian: {
            title: '🌴 Babylon - Restoring the Hanging Gardens',
            setting: 'You arrive in ancient Babylon at the legendary Hanging Gardens, one of the Seven Wonders. The complex irrigation system needs recalculation, and the royal engineers turn to you for help.',
            objective: 'Use the sophisticated Babylonian base-60 (sexagesimal) system to calculate water distribution and resources for maintaining the gardens.',
            character: '<strong>Chief Engineer Nabu-rimanni:</strong> "Welcome, mathematician! Our ancestors developed the most advanced number system - base 60! Help us calculate the precise measurements needed for the gardens\' irrigation."'
        },
        
        chinese: {
            title: '🏯 Han Dynasty - Calculating in the Imperial Market',
            setting: 'You arrive in the bustling marketplace of Chang\'an during the Han Dynasty. Merchants crowd the streets, selling silk, spices, jade, and countless treasures. An abacus master beckons you to his stall.',
            objective: 'Perform calculations using Chinese counting rod numerals or the suanpan (abacus) to help merchants with their trades and ensure fair exchanges.',
            character: '<strong>Master Liu the Abacus Expert:</strong> "Welcome, honored calculator! Our markets are alive with commerce. Use the ancient art of rod numerals to solve these merchant\'s calculations. Every transaction must be precise!"'
        }
    },
    
    temporal: {
        intro: `<h3>⚡ Guardian of Numbers</h3>
        <p>You are a Guardian of Numbers, and you've discovered a terrible truth: a secret organization called "The Children of Time" is attempting to erase the knowledge of ancient number systems from history.</p>
        <p>Your mission: Race against time to save the mathematical knowledge of ancient civilizations by solving numerical operations before the records are destroyed forever.</p>
        <p>Time is running out. Every second counts!</p>`,
        
        roman: {
            title: '🔥 Romans - Emergency at the Forum',
            setting: 'The Roman Forum is engulfed in flames! Citizens are fleeing in panic. You must help organize the evacuation by quickly calculating necessary supplies.',
            objective: 'Solve addition and subtraction problems to save valuable records and supplies before they are lost to the fire.',
            character: '<strong>Time Remaining:</strong> You have 3 minutes to complete all challenges!'
        },
        
        egyptian: {
            title: '📚 Ancient Egypt - Destruction of the Library',
            setting: 'The great Library of Alexandria is crumbling! Ancient papyrus scrolls containing mathematical knowledge are about to be lost forever. You must work quickly to save them.',
            objective: 'Decipher hieroglyphic calculations and save the precious mathematical records before they turn to dust!',
            character: '<strong>Time Remaining:</strong> You have 2.5 minutes to save the ancient knowledge!'
        },
        
        greek: {
            title: '🔥 Ancient Greece - Threat to Knowledge',
            setting: 'Plato\'s Academy is under attack! A fire threatens to destroy centuries of mathematical philosophy and knowledge. Scrolls containing the wisdom of Pythagoras, Euclid, and Archimedes are turning to ash!',
            objective: 'Solve mathematical problems to save the most precious texts before they are lost to history forever!',
            character: '<strong>Time Remaining:</strong> You have 2.5 minutes before the knowledge is lost!'
        },
        
        babylonian: {
            title: '💧 Babylon - Agricultural Crisis',
            setting: 'A devastating drought threatens Babylon! The ancient irrigation systems are failing, and crops are dying. The knowledge of water distribution calculations is fading - you must save it!',
            objective: 'Solve base-60 calculations to restore the irrigation system and save the city from starvation!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save Babylon\'s agriculture!'
        },
        
        chinese: {
            title: '🎊 Han Dynasty - Chaos in the Imperial Court',
            setting: 'The Emperor\'s New Year celebration is in jeopardy! A catastrophic miscalculation in the imperial budget threatens to collapse the festivities. Ancient accounting records are being destroyed by rivals!',
            objective: 'Use Chinese numerals to solve financial calculations and save the most important celebration of the year!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save the imperial celebration!'
        }
    }
};

// ===== ROMAN NUMERAL CONVERSION =====
function numberToRoman(num) {
    if (num <= 0 || num > 3999) return "Invalid";
    
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    
    let result = '';
    let remaining = num;
    
    for (let i = 0; i < romanNumerals.length; i++) {
        while (remaining >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            remaining -= romanNumerals[i].value;
        }
    }
    
    return result;
}

function romanToNumber(roman) {
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    let prevValue = 0;
    
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanValues[roman[i]];
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
    }
    
    return result;
}

// ===== EGYPTIAN NUMERAL SYSTEM =====
const egyptianSymbols = {
    1: '𓏺',        // Staff/Stroke
    10: '𓎆',       // Heel Bone/Hobble
    100: '𓍢',      // Coil of rope
    1000: '𓆼',     // Lotus flower
    10000: '𓂭',    // Finger
    100000: '𓆏',   // Tadpole
    1000000: '𓁏'   // Astonished man
};

function numberToEgyptian(num) {
    if (num <= 0 || num > 999999) return "Invalid";
    
    const powers = [1000000, 100000, 10000, 1000, 100, 10, 1];
    let result = '';
    let remaining = num;
    
    for (const power of powers) {
        const count = Math.floor(remaining / power);
        if (count > 0) {
            result += egyptianSymbols[power].repeat(count);
            remaining %= power;
        }
    }
    
    return result || '𓏺'; // Return at least one stroke for zero
}

function egyptianToNumber(egyptian) {
    let total = 0;
    
    for (const [value, symbol] of Object.entries(egyptianSymbols)) {
        const count = (egyptian.match(new RegExp(symbol, 'g')) || []).length;
        total += parseInt(value) * count;
    }
    
    return total;
}

// ===== GREEK NUMERAL SYSTEM =====
const greekNumerals = {
    // Units (1-9)
    1: 'α', 2: 'β', 3: 'γ', 4: 'δ', 5: 'ε',
    6: 'ϛ', 7: 'ζ', 8: 'η', 9: 'θ',
    // Tens (10-90)
    10: 'ι', 20: 'κ', 30: 'λ', 40: 'μ', 50: 'ν',
    60: 'ξ', 70: 'ο', 80: 'π', 90: 'ϙ',
    // Hundreds (100-900)
    100: 'ρ', 200: 'σ', 300: 'τ', 400: 'υ', 500: 'φ',
    600: 'χ', 700: 'ψ', 800: 'ω', 900: 'ϡ'
};

const greekValues = {};
Object.entries(greekNumerals).forEach(([num, letter]) => {
    greekValues[letter] = parseInt(num);
});

function numberToGreek(num) {
    if (num <= 0 || num > 999) return "Invalid";
    
    let result = '';
    const hundreds = Math.floor(num / 100) * 100;
    const tens = Math.floor((num % 100) / 10) * 10;
    const units = num % 10;
    
    if (hundreds > 0) result += greekNumerals[hundreds];
    if (tens > 0) result += greekNumerals[tens];
    if (units > 0) result += greekNumerals[units];
    
    return result || 'α'; // Return at least alpha for very small numbers
}

function greekToNumber(greek) {
    let total = 0;
    
    for (const char of greek) {
        if (greekValues[char]) {
            total += greekValues[char];
        }
    }
    
    return total;
}

// ===== BABYLONIAN NUMERAL SYSTEM (Base 60) =====
// Simplified representation using symbols
const babylonianSymbols = {
    1: '𒐕',   // Vertical wedge (1)
    10: '𒌋'   // Horizontal wedge (10)
};

function numberToBabylonian(num) {
    if (num <= 0 || num >= 3600) return "Invalid"; // Limit to 0-3599 (60^2)
    
    // Convert to base 60
    const sixties = Math.floor(num / 60);
    const ones = num % 60;
    
    let result = '';
    
    // First position (60s place)
    if (sixties > 0) {
        result += convertBabylonianDigit(sixties) + ' ';
    }
    
    // Second position (1s place)
    result += convertBabylonianDigit(ones);
    
    return result.trim();
}

function convertBabylonianDigit(n) {
    if (n === 0) return '⊙'; // Zero/empty
    if (n >= 60) return '?'; // Invalid
    
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    
    let digit = '';
    if (tens > 0) digit += babylonianSymbols[10].repeat(tens);
    if (ones > 0) digit += babylonianSymbols[1].repeat(ones);
    
    return digit || '⊙';
}

function babylonianToNumber(babylonian) {
    // Split by spaces to get positions
    const positions = babylonian.trim().split(/\s+/);
    let total = 0;
    
    for (let i = 0; i < positions.length; i++) {
        const place = positions.length - 1 - i; // Position from right
        const digit = parseBabylonianDigit(positions[i]);
        total += digit * Math.pow(60, place);
    }
    
    return total;
}

function parseBabylonianDigit(digit) {
    if (digit === '⊙') return 0;
    
    const tens = (digit.match(/𒌋/g) || []).length;
    const ones = (digit.match(/𒐕/g) || []).length;
    
    return tens * 10 + ones;
}

// ===== CHINESE ROD NUMERAL SYSTEM =====
// Using Suzhou numerals (simplified representation)
const chineseNumerals = {
    0: '〇',
    1: '一', 2: '二', 3: '三', 4: '四', 5: '五',
    6: '六', 7: '七', 8: '八', 9: '九',
    10: '十', 100: '百', 1000: '千', 10000: '萬'
};

function numberToChinese(num) {
    if (num === 0) return chineseNumerals[0];
    if (num < 0 || num > 99999) return "Invalid";
    
    let result = '';
    let remaining = num;
    
    // Ten thousands
    if (remaining >= 10000) {
        const wan = Math.floor(remaining / 10000);
        if (wan > 1) result += chineseNumerals[wan];
        result += chineseNumerals[10000];
        remaining %= 10000;
    }
    
    // Thousands
    if (remaining >= 1000) {
        const qian = Math.floor(remaining / 1000);
        if (qian > 1) result += chineseNumerals[qian];
        result += chineseNumerals[1000];
        remaining %= 1000;
    } else if (result && remaining > 0) {
        // Add zero placeholder if we have higher places but gap here
        if (remaining < 100) result += chineseNumerals[0];
    }
    
    // Hundreds
    if (remaining >= 100) {
        const bai = Math.floor(remaining / 100);
        if (bai > 1) result += chineseNumerals[bai];
        result += chineseNumerals[100];
        remaining %= 100;
    } else if (result && remaining > 0 && remaining < 10) {
        result += chineseNumerals[0];
    }
    
    // Tens
    if (remaining >= 10) {
        const shi = Math.floor(remaining / 10);
        if (shi > 1 || result) result += chineseNumerals[shi];
        result += chineseNumerals[10];
        remaining %= 10;
    }
    
    // Ones
    if (remaining > 0) {
        result += chineseNumerals[remaining];
    }
    
    return result || chineseNumerals[0];
}

function chineseToNumber(chinese) {
    if (chinese === chineseNumerals[0]) return 0;
    
    let total = 0;
    let current = 0;
    
    for (let i = 0; i < chinese.length; i++) {
        const char = chinese[i];
        
        if (char === chineseNumerals[10000]) {
            current = current === 0 ? 1 : current;
            total += current * 10000;
            current = 0;
        } else if (char === chineseNumerals[1000]) {
            current = current === 0 ? 1 : current;
            total += current * 1000;
            current = 0;
        } else if (char === chineseNumerals[100]) {
            current = current === 0 ? 1 : current;
            total += current * 100;
            current = 0;
        } else if (char === chineseNumerals[10]) {
            current = current === 0 ? 1 : current;
            total += current * 10;
            current = 0;
        } else if (char === chineseNumerals[0]) {
            // Zero placeholder, continue
            continue;
        } else {
            // It's a digit 1-9
            for (let [num, symbol] of Object.entries(chineseNumerals)) {
                if (symbol === char && parseInt(num) < 10) {
                    current = parseInt(num);
                    break;
                }
            }
        }
    }
    
    total += current;
    return total;
}

// ===== PROBLEM GENERATION =====
function generateRomanProblem(difficulty) {
    let num1, num2, operation, answer;
    
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 50) + 10;
            num2 = Math.floor(Math.random() * 30) + 5;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 100) + 20;
            num2 = Math.floor(Math.random() * 50) + 10;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 200) + 50;
            num2 = Math.floor(Math.random() * 100) + 20;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 500) + 100;
            num2 = Math.floor(Math.random() * 200) + 50;
            break;
        default:
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 30) + 1;
    }
    
    // Randomly choose addition or subtraction
    operation = Math.random() > 0.5 ? '+' : '-';
    
    // For subtraction, ensure num1 > num2
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const roman1 = numberToRoman(num1);
    const roman2 = numberToRoman(num2);
    const romanAnswer = numberToRoman(answer);
    
    // Generate context story
    const contexts = [
        `Marcus needs to calculate the total cost of ${num1} yards of silk and ${num2} yards of linen.`,
        `A customer wants to buy ${num1} amphorae of wine, but returns ${num2} amphorae. How many does Marcus sell?`,
        `The stall has ${num1} loaves of bread. Marcus ${operation === '+' ? 'receives' : 'sells'} ${num2} more. How many remain?`,
        `Calculate the ${operation === '+' ? 'sum' : 'difference'} of these transactions: ${num1} denarii and ${num2} denarii.`,
        `Marcus counts ${num1} customers in the morning and ${num2} in the afternoon. Total customers?`
    ];
    
    const contextIndex = operation === '-' ? 1 : Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        roman1,
        roman2,
        romanAnswer,
        context: contexts[contextIndex] || contexts[0],
        hint: `Break down the numerals: ${roman1} = ${num1}, ${roman2} = ${num2}. Then calculate: ${num1} ${operation} ${num2} = ${answer}`
    };
}

function generateEgyptianProblem(difficulty) {
    let num1, num2, operation, answer;
    
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 15) + 5;
            num2 = Math.floor(Math.random() * 15) + 5;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 40) + 10;
            num2 = Math.floor(Math.random() * 30) + 10;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 100) + 30;
            num2 = Math.floor(Math.random() * 60) + 20;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 300) + 100;
            num2 = Math.floor(Math.random() * 150) + 50;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 1000) + 200;
            num2 = Math.floor(Math.random() * 500) + 100;
            break;
        default:
            num1 = Math.floor(Math.random() * 50) + 10;
            num2 = Math.floor(Math.random() * 30) + 10;
    }
    
    operation = Math.random() > 0.5 ? '+' : '-';
    
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const egyptian1 = numberToEgyptian(num1);
    const egyptian2 = numberToEgyptian(num2);
    const egyptianAnswer = numberToEgyptian(answer);
    
    const contexts = [
        `The royal scribe needs to count offerings: ${num1} loaves of bread and ${num2} jars of honey for the temple.`,
        `Calculate the number of stone blocks: ${num1} blocks ${operation === '+' ? 'plus' : 'minus'} ${num2} blocks for the pyramid construction.`,
        `The pharaoh's treasury has ${num1} gold pieces. ${operation === '+' ? 'Add' : 'Remove'} ${num2} pieces. What remains?`,
        `Count the papyrus scrolls in the library: ${num1} scrolls on one shelf, ${operation === '+' ? 'add' : 'subtract'} ${num2} from another.`,
        `Calculate provisions for the banquet: ${num1} portions ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} portions.`
    ];
    
    const contextIndex = Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        egyptian1,
        egyptian2,
        egyptianAnswer,
        context: contexts[contextIndex],
        hint: `Count the symbols: ${egyptian1} = ${num1}, ${egyptian2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer}. Each symbol represents a power of 10!`
    };
}

function generateGreekProblem(difficulty) {
    let num1, num2, operation, answer;
    
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 20) + 5;
            num2 = Math.floor(Math.random() * 20) + 5;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 50) + 20;
            num2 = Math.floor(Math.random() * 40) + 10;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 100) + 50;
            num2 = Math.floor(Math.random() * 80) + 20;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 300) + 100;
            num2 = Math.floor(Math.random() * 200) + 50;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 600) + 200;
            num2 = Math.floor(Math.random() * 400) + 100;
            break;
        default:
            num1 = Math.floor(Math.random() * 50) + 10;
            num2 = Math.floor(Math.random() * 30) + 10;
    }
    
    operation = Math.random() > 0.5 ? '+' : '-';
    
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const greek1 = numberToGreek(num1);
    const greek2 = numberToGreek(num2);
    const greekAnswer = numberToGreek(answer);
    
    const contexts = [
        `The architect needs to calculate the golden ratio for ${num1} columns ${operation === '+' ? 'plus' : 'minus'} ${num2} columns for the Parthenon.`,
        `Pythagoras asks you to solve: if one side measures ${num1} units, ${operation === '+' ? 'and we add' : 'and we subtract'} ${num2} units, what is the result?`,
        `Calculate the proportion: ${num1} marble blocks ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} blocks for the temple construction.`,
        `The philosopher's scroll shows: ${num1} students ${operation === '+' ? 'join' : 'leave'} the academy, ${operation === '+' ? 'and' : 'leaving'} ${num2} ${operation === '+' ? 'more arrive' : 'remaining'}. Calculate the ${operation === '+' ? 'total' : 'difference'}.`,
        `Mathematical harmony: balance the equation of ${num1} lyres ${operation === '+' ? 'and' : 'minus'} ${num2} flutes in the amphitheater.`
    ];
    
    const contextIndex = Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        greek1,
        greek2,
        greekAnswer,
        context: contexts[contextIndex],
        hint: `Decode the letters: ${greek1} = ${num1}, ${greek2} = ${num2}. Then: ${num1} ${operation} ${num2} = ${answer}. Remember: each Greek letter represents a specific number!`
    };
}

function generateBabylonianProblem(difficulty) {
    let num1, num2, operation, answer;
    
    // Keep numbers reasonable for base-60 system
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 30) + 10;
            num2 = Math.floor(Math.random() * 20) + 5;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 50) + 20;
            num2 = Math.floor(Math.random() * 30) + 10;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 100) + 40;
            num2 = Math.floor(Math.random() * 60) + 20;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 180) + 60;
            num2 = Math.floor(Math.random() * 100) + 30;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 300) + 100;
            num2 = Math.floor(Math.random() * 200) + 60;
            break;
        default:
            num1 = Math.floor(Math.random() * 50) + 10;
            num2 = Math.floor(Math.random() * 30) + 10;
    }
    
    operation = Math.random() > 0.5 ? '+' : '-';
    
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const babylonian1 = numberToBabylonian(num1);
    const babylonian2 = numberToBabylonian(num2);
    const babylonianAnswer = numberToBabylonian(answer);
    
    const contexts = [
        `The royal engineer calculates water distribution: ${num1} measures ${operation === '+' ? 'plus' : 'minus'} ${num2} measures for the irrigation canals.`,
        `Calculate the resources for the Hanging Gardens: ${num1} palm trees ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} cedar trees.`,
        `The astronomer's calculation: ${num1} celestial observations ${operation === '+' ? 'and' : 'minus'} ${num2} star positions. Compute the result.`,
        `Water allocation for agriculture: ${num1} units ${operation === '+' ? 'added to' : 'removed from'} ${num2} units for the fields.`,
        `Temple construction needs: ${num1} clay bricks ${operation === '+' ? 'plus' : 'minus'} ${num2} stone blocks. Calculate the total.`
    ];
    
    const contextIndex = Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        babylonian1,
        babylonian2,
        babylonianAnswer,
        context: contexts[contextIndex],
        hint: `Base-60 system! Each position is 60× the previous. ${babylonian1} = ${num1}, ${babylonian2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer}. 𒐕=1, 𒌋=10`
    };
}

function generateChineseProblem(difficulty) {
    let num1, num2, operation, answer;
    
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 30) + 10;
            num2 = Math.floor(Math.random() * 20) + 5;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 80) + 30;
            num2 = Math.floor(Math.random() * 50) + 20;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 200) + 80;
            num2 = Math.floor(Math.random() * 150) + 50;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 800) + 300;
            num2 = Math.floor(Math.random() * 500) + 200;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 3000) + 1000;
            num2 = Math.floor(Math.random() * 2000) + 500;
            break;
        default:
            num1 = Math.floor(Math.random() * 80) + 20;
            num2 = Math.floor(Math.random() * 50) + 10;
    }
    
    operation = Math.random() > 0.5 ? '+' : '-';
    
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const chinese1 = numberToChinese(num1);
    const chinese2 = numberToChinese(num2);
    const chineseAnswer = numberToChinese(answer);
    
    const contexts = [
        `The merchant calculates: ${num1} bolts of silk ${operation === '+' ? 'plus' : 'minus'} ${num2} bolts of cotton in the Han Dynasty market.`,
        `Calculate the imperial treasury: ${num1} taels of silver ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} taels of gold.`,
        `The abacus master asks: ${num1} bags of rice ${operation === '+' ? 'and' : 'minus'} ${num2} bags of wheat. What is the result?`,
        `Festival preparations: ${num1} lanterns ${operation === '+' ? 'added to' : 'removed from'} ${num2} paper dragons. Calculate the total.`,
        `Counting rods show: ${num1} jade pieces ${operation === '+' ? 'plus' : 'minus'} ${num2} bronze coins at the marketplace.`
    ];
    
    const contextIndex = Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        chinese1,
        chinese2,
        chineseAnswer,
        context: contexts[contextIndex],
        hint: `Chinese system! ${chinese1} = ${num1}, ${chinese2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000`
    };
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== GAME START =====
function startGame(mode) {
    gameState.mode = mode;
    gameState.score = 0;
    gameState.oraclePieces = [];
    
    // Show civilization selection
    renderCivilizationSelect();
    showScreen('civilization-select');
}

function renderCivilizationSelect() {
    const container = document.getElementById('civilization-list');
    container.innerHTML = '';
    
    Object.values(civilizations).forEach(civ => {
        const card = document.createElement('div');
        card.className = `civilization-card ${!civ.unlocked ? 'locked' : ''}`;
        
        const isCompleted = localStorage.getItem(`mathematikos_${civ.id}_completed`) === 'true';
        const stats = getCivilizationStats(civ.id);
        
        if (civ.unlocked) {
            card.onclick = () => selectCivilization(civ.id);
        }
        
        card.innerHTML = `
            <div class="icon">${civ.icon}</div>
            <div class="name">${civ.name}</div>
            <div class="difficulty">${civ.difficulty}</div>
            ${isCompleted ? '<div class="completion-badge">✓ Completed</div>' : ''}
            ${!civ.unlocked ? '<p style="margin-top: 10px; font-size: 0.9rem;">🔒 Complete previous civilization first</p>' : ''}
            ${stats && civ.unlocked ? `<p style="margin-top: 8px; font-size: 0.85rem; color: #666;">Best Score: ${stats.score}</p>` : ''}
        `;
        
        container.appendChild(card);
    });
}

function selectCivilization(civId) {
    gameState.currentCivilization = civId;
    showStoryIntro();
}

// ===== STORY INTRODUCTION =====
function showStoryIntro() {
    const civ = civilizations[gameState.currentCivilization];
    const mode = gameState.mode;
    const story = stories[mode][gameState.currentCivilization];
    
    const content = document.getElementById('story-content');
    content.innerHTML = `
        ${mode === 'thematic' && gameState.oraclePieces.length === 0 ? stories[mode].intro : ''}
        
        <h3>${story.title}</h3>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📍 Setting:</strong>
            <p>${story.setting}</p>
        </div>
        
        <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>🎯 Objective:</strong>
            <p>${story.objective}</p>
        </div>
        
        <div style="background: #fff9e6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            ${story.character}
        </div>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📚 Number System:</strong> ${civ.numberSystem}
        </div>
    `;
    
    showScreen('story-intro');
}

// ===== START CHALLENGE =====
function startChallenge() {
    gameState.currentChallenge = 0;
    gameState.correctAnswers = 0;
    gameState.hintsUsed = 0;
    gameState.startTime = Date.now();
    
    // Set time limit for temporal mode
    if (gameState.mode === 'temporal') {
        // Different time limits per civilization
        const timeLimits = {
            roman: 180,      // 3 minutes
            egyptian: 150,   // 2.5 minutes
            greek: 150,      // 2.5 minutes
            babylonian: 120, // 2 minutes
            chinese: 120     // 2 minutes
        };
        gameState.timeLimit = timeLimits[gameState.currentCivilization] || 180;
    }
    
    // Start timer
    startTimer();
    
    // Load first challenge
    loadNextChallenge();
    
    showScreen('game-play');
}

// ===== TIMER =====
function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    
    if (gameState.mode === 'temporal') {
        const remaining = gameState.timeLimit - elapsed;
        
        if (remaining <= 0) {
            clearInterval(gameState.timerInterval);
            endChallenge(false); // Time's up!
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Warning color when time is running out
        if (remaining <= 30) {
            document.getElementById('timer').style.color = 'red';
        }
    } else {
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

// ===== LOAD CHALLENGE =====
function loadNextChallenge() {
    gameState.currentChallenge++;
    
    if (gameState.currentChallenge > gameState.totalChallenges) {
        endChallenge(true);
        return;
    }
    
    // Update header
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('challenge-number').textContent = 
        `${gameState.currentChallenge}/${gameState.totalChallenges}`;
    
    // Generate problem based on civilization
    if (gameState.currentCivilization === 'roman') {
        gameState.currentProblem = generateRomanProblem(gameState.currentChallenge);
        displayRomanChallenge();
    } else if (gameState.currentCivilization === 'egyptian') {
        gameState.currentProblem = generateEgyptianProblem(gameState.currentChallenge);
        displayEgyptianChallenge();
    } else if (gameState.currentCivilization === 'greek') {
        gameState.currentProblem = generateGreekProblem(gameState.currentChallenge);
        displayGreekChallenge();
    } else if (gameState.currentCivilization === 'babylonian') {
        gameState.currentProblem = generateBabylonianProblem(gameState.currentChallenge);
        displayBabylonianChallenge();
    } else if (gameState.currentCivilization === 'chinese') {
        gameState.currentProblem = generateChineseProblem(gameState.currentChallenge);
        displayChineseChallenge();
    }
    
    // Clear previous feedback and hint
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('hint-display').classList.remove('show');
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();
    
    // Update oracle pieces display
    updateOraclePiecesDisplay();
}

function displayRomanChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Roman Numerals Quick Reference</h4>
        <p><strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10, <strong>L</strong> = 50, 
        <strong>C</strong> = 100, <strong>D</strong> = 500, <strong>M</strong> = 1000</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: When a smaller numeral comes before a larger one, subtract it (e.g., IV = 4, IX = 9)</p>
    `;
    
    // Display problem
    document.getElementById('problem').innerHTML = `
        ${problem.roman1} ${problem.operation} ${problem.roman2} = <span style="color: #CD853F;">?</span>
    `;
}

function displayEgyptianChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Egyptian Hieroglyphic Numerals</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-top: 10px;">
            <div><strong>𓏺</strong> = 1</div>
            <div><strong>𓎆</strong> = 10</div>
            <div><strong>𓍢</strong> = 100</div>
            <div><strong>𓆼</strong> = 1,000</div>
            <div><strong>𓂭</strong> = 10,000</div>
            <div><strong>𓆏</strong> = 100,000</div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Count each symbol and multiply by its value, then add them all together!</p>
    `;
    
    // Display problem with larger font for hieroglyphs
    document.getElementById('problem').innerHTML = `
        <div style="font-size: 2.5rem; line-height: 1.4;">
            ${problem.egyptian1}<br>
            ${problem.operation}<br>
            ${problem.egyptian2}<br>
            = <span style="color: #CD853F;">?</span>
        </div>
    `;
}

function displayGreekChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Greek Alphabetic Numerals</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; font-size: 0.9rem;">
            <div><strong>α</strong>=1 <strong>β</strong>=2 <strong>γ</strong>=3</div>
            <div><strong>δ</strong>=4 <strong>ε</strong>=5 <strong>ϛ</strong>=6</div>
            <div><strong>ζ</strong>=7 <strong>η</strong>=8 <strong>θ</strong>=9</div>
            <div><strong>ι</strong>=10 <strong>κ</strong>=20 <strong>λ</strong>=30</div>
            <div><strong>μ</strong>=40 <strong>ν</strong>=50 <strong>ξ</strong>=60</div>
            <div><strong>ο</strong>=70 <strong>π</strong>=80 <strong>ϙ</strong>=90</div>
            <div><strong>ρ</strong>=100 <strong>σ</strong>=200 <strong>τ</strong>=300</div>
            <div><strong>υ</strong>=400 <strong>φ</strong>=500 <strong>χ</strong>=600</div>
            <div><strong>ψ</strong>=700 <strong>ω</strong>=800 <strong>ϡ</strong>=900</div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Letters are combined to form numbers. ρκγ = 100 + 20 + 3 = 123</p>
    `;
    
    // Display problem
    document.getElementById('problem').innerHTML = `
        <div style="font-size: 2.2rem;">
            ${problem.greek1} ${problem.operation} ${problem.greek2} = <span style="color: #CD853F;">?</span>
        </div>
    `;
}

function displayBabylonianChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Babylonian Sexagesimal (Base-60) System</h4>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px;">
            <p><strong>Symbols:</strong></p>
            <div style="font-size: 1.5rem; margin: 10px 0;">
                <strong>𒐕</strong> = 1 (vertical wedge)<br>
                <strong>𒌋</strong> = 10 (horizontal wedge)<br>
                <strong>⊙</strong> = 0 or empty position
            </div>
            <p style="margin-top: 10px;"><strong>How it works:</strong> Numbers are written in positions. Each position to the left is worth 60× more (like our base-10, but base-60!).</p>
            <p style="font-size: 0.9rem; margin-top: 8px;">Example: <strong>𒐕 𒌋𒌋</strong> = (1 × 60) + 20 = 80</p>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Count the wedges in each position, then multiply by powers of 60!</p>
    `;
    
    // Display problem
    document.getElementById('problem').innerHTML = `
        <div style="font-size: 2rem; line-height: 1.6;">
            ${problem.babylonian1}<br>
            ${problem.operation}<br>
            ${problem.babylonian2}<br>
            = <span style="color: #CD853F;">?</span>
        </div>
    `;
}

function displayChineseChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Chinese Rod Numerals / Suanpan System</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                <strong>Basic Digits:</strong><br>
                〇=0, 一=1, 二=2, 三=3, 四=4<br>
                五=5, 六=6, 七=7, 八=8, 九=9
            </div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                <strong>Place Values:</strong><br>
                十 = 10 (ten)<br>
                百 = 100 (hundred)<br>
                千 = 1,000 (thousand)<br>
                萬 = 10,000 (ten thousand)
            </div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Read from left to right. 三百五十二 = 3×100 + 5×10 + 2 = 352</p>
    `;
    
    // Display problem
    document.getElementById('problem').innerHTML = `
        <div style="font-size: 2.2rem; line-height: 1.5;">
            ${problem.chinese1} ${problem.operation} ${problem.chinese2} = <span style="color: #CD853F;">?</span>
        </div>
    `;
}

// ===== SUBMIT ANSWER =====
function submitAnswer() {
    const input = document.getElementById('answer-input').value.trim().toUpperCase();
    
    if (!input) {
        showFeedback('Please enter an answer!', 'incorrect');
        return;
    }
    
    const problem = gameState.currentProblem;
    const correctNumber = problem.answer;
    
    // Accept civilization-specific numeral or Arabic number
    let isCorrect = false;
    
    if (gameState.currentCivilization === 'roman') {
        const correctRoman = problem.romanAnswer;
        if (input === correctRoman) {
            isCorrect = true;
        } else if (!isNaN(input) && parseInt(input) === correctNumber) {
            isCorrect = true;
        } else if (romanToNumber(input) === correctNumber) {
            isCorrect = true;
        }
    } else if (gameState.currentCivilization === 'egyptian') {
        const correctEgyptian = problem.egyptianAnswer;
        if (input === correctEgyptian) {
            isCorrect = true;
        } else if (!isNaN(input) && parseInt(input) === correctNumber) {
            isCorrect = true;
        } else if (egyptianToNumber(input) === correctNumber) {
            isCorrect = true;
        }
    } else if (gameState.currentCivilization === 'greek') {
        const correctGreek = problem.greekAnswer;
        if (input === correctGreek) {
            isCorrect = true;
        } else if (!isNaN(input) && parseInt(input) === correctNumber) {
            isCorrect = true;
        } else if (greekToNumber(input) === correctNumber) {
            isCorrect = true;
        }
    } else if (gameState.currentCivilization === 'babylonian') {
        const correctBabylonian = problem.babylonianAnswer;
        if (input === correctBabylonian) {
            isCorrect = true;
        } else if (!isNaN(input) && parseInt(input) === correctNumber) {
            isCorrect = true;
        } else {
            try {
                if (babylonianToNumber(input) === correctNumber) {
                    isCorrect = true;
                }
            } catch (e) {
                // Invalid Babylonian format
            }
        }
    } else if (gameState.currentCivilization === 'chinese') {
        const correctChinese = problem.chineseAnswer;
        if (input === correctChinese) {
            isCorrect = true;
        } else if (!isNaN(input) && parseInt(input) === correctNumber) {
            isCorrect = true;
        } else {
            try {
                if (chineseToNumber(input) === correctNumber) {
                    isCorrect = true;
                }
            } catch (e) {
                // Invalid Chinese format
            }
        }
    }
    
    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

function handleCorrectAnswer() {
    gameState.correctAnswers++;
    
    // Calculate points (bonus for speed and no hints)
    let points = 100;
    if (gameState.hintsUsed === 0) points += 50; // Bonus for no hints
    
    gameState.score += points;
    
    showFeedback(`🎉 Correct! +${points} points`, 'correct');
    
    // Play success sound
    try {
        playSound('correct');
    } catch (e) {
        // Sound failed, that's ok
    }
    
    // Celebrate animation
    const scoreElement = document.getElementById('score');
    celebrateSuccess(scoreElement);
    
    // Collect oracle piece
    gameState.oraclePieces.push({
        civilization: gameState.currentCivilization,
        challenge: gameState.currentChallenge
    });
    
    // Update display
    document.getElementById('score').textContent = gameState.score;
    
    // Show milestone achievements
    if (gameState.correctAnswers === 3) {
        showAchievement('On a Roll!', 'Three correct answers in a row!');
    } else if (gameState.correctAnswers === 5) {
        showAchievement('Master Calculator!', 'All challenges completed!');
    }
    
    // Move to next challenge after delay
    setTimeout(() => {
        loadNextChallenge();
    }, 1500);
}

function handleIncorrectAnswer() {
    showFeedback('❌ Incorrect. Try again!', 'incorrect');
    
    // Play error sound
    try {
        playSound('incorrect');
    } catch (e) {
        // Sound failed, that's ok
    }
    
    // Shake animation
    const problemDisplay = document.querySelector('.problem-display');
    shakeElement(problemDisplay);
    
    // Penalty in temporal mode
    if (gameState.mode === 'temporal') {
        gameState.timeLimit -= 10; // Lose 10 seconds
        showAchievement('Time Penalty!', '-10 seconds');
    }
}

function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
    
    if (type === 'incorrect') {
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }
}

// ===== HINTS =====
function showHint() {
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.textContent = gameState.currentProblem.hint;
    hintDisplay.classList.add('show');
    gameState.hintsUsed++;
}

// ===== ORACLE PIECES DISPLAY =====
function updateOraclePiecesDisplay() {
    const container = document.getElementById('pieces-display');
    container.innerHTML = '';
    
    for (let i = 0; i < gameState.totalChallenges; i++) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        
        if (i < gameState.oraclePieces.length) {
            piece.classList.add('collected');
            piece.textContent = '✨';
        } else {
            piece.textContent = '❓';
        }
        
        container.appendChild(piece);
    }
}

// ===== END CHALLENGE =====
function endChallenge(completed) {
    clearInterval(gameState.timerInterval);
    
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const resultsTitle = document.getElementById('results-title');
    const resultsContent = document.getElementById('results-content');
    
    if (completed) {
        resultsTitle.textContent = '🎊 Challenge Complete!';
        
        // Play completion sound
        try {
            playSound('complete');
        } catch (e) {
            // Sound failed, that's ok
        }
        
        // Save stats
        const stats = {
            score: gameState.score,
            time: elapsed,
            correctAnswers: gameState.correctAnswers,
            hintsUsed: gameState.hintsUsed,
            mode: gameState.mode,
            completedAt: new Date().toISOString()
        };
        saveCivilizationStats(gameState.currentCivilization, stats);
        markCivilizationComplete(gameState.currentCivilization);
        
        // Unlock next civilization
        const civs = Object.keys(civilizations);
        const currentIndex = civs.indexOf(gameState.currentCivilization);
        if (currentIndex < civs.length - 1) {
            civilizations[civs[currentIndex + 1]].unlocked = true;
            showAchievement('New Civilization Unlocked!', 
                `You can now explore ${civilizations[civs[currentIndex + 1]].name}!`);
        } else {
            showAchievement('🏆 Master of Numbers!', 
                'You have completed all civilizations! You are a true Guardian of Numbers!');
        }
        
        resultsContent.innerHTML = `
            <div class="final-score">${gameState.score}</div>
            <p style="font-size: 1.2rem; margin-bottom: 20px;">Total Score</p>
            
            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p>Correct Answers</p>
                </div>
                <div class="stat-item">
                    <strong>${minutes}:${String(seconds).padStart(2, '0')}</strong>
                    <p>Time Taken</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.oraclePieces.length}</strong>
                    <p>Oracle Pieces</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.hintsUsed}</strong>
                    <p>Hints Used</p>
                </div>
            </div>
            
            ${gameState.mode === 'thematic' ? `
                <div style="background: #FFF9E6; padding: 20px; border-radius: 10px; margin-top: 20px; border: 2px solid #DAA520;">
                    <h3>✨ Oracle Piece Collected!</h3>
                    <p>You have collected a fragment of the Oracle of Numbers from the ${civilizations[gameState.currentCivilization].name}!</p>
                    <p style="margin-top: 10px;"><em>"The wisdom of numbers transcends time..."</em></p>
                </div>
            ` : ''}
        `;
    } else {
        resultsTitle.textContent = '⏰ Time\'s Up!';
        resultsContent.innerHTML = `
            <p style="font-size: 1.2rem; margin: 20px 0;">The Children of Time have destroyed the records!</p>
            
            <div class="final-score">${gameState.score}</div>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">Score Achieved</p>
            
            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p>Challenges Completed</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.currentChallenge - 1}/${gameState.totalChallenges}</strong>
                    <p>Progress</p>
                </div>
            </div>
            
            <p style="margin-top: 20px;">Don't give up! Try again to save the knowledge of ancient civilizations!</p>
        `;
    }
    
    showScreen('results');
}

// ===== NAVIGATION =====
function nextCivilization() {
    const civs = Object.keys(civilizations);
    const currentIndex = civs.indexOf(gameState.currentCivilization);
    
    if (currentIndex < civs.length - 1 && civilizations[civs[currentIndex + 1]].unlocked) {
        selectCivilization(civs[currentIndex + 1]);
    } else {
        showScreen('civilization-select');
    }
}

// ===== HELP MODAL =====
function closeHelp() {
    document.getElementById('help-modal').classList.remove('show');
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('DOMContentLoaded', () => {
    const answerInput = document.getElementById('answer-input');
    
    if (answerInput) {
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitAnswer();
            }
        });
    }
});

// ===== ACHIEVEMENTS =====
function showAchievement(title, message) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
        <h4 style="margin: 0 0 10px 0;">🏆 ${title}</h4>
        <p style="margin: 0; font-size: 0.9rem;">${message}</p>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

// ===== VISUAL FEEDBACK HELPERS =====
function celebrateSuccess(element) {
    element.classList.add('celebrating');
    setTimeout(() => element.classList.remove('celebrating'), 500);
}

function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 300);
}

// ===== PROGRESS TRACKING =====
function updateProgress() {
    const civilizations = Object.keys(civilizations);
    const completed = civilizations.filter(civ => 
        localStorage.getItem(`mathematikos_${civ}_completed`) === 'true'
    ).length;
    
    return {
        completed,
        total: civilizations.length,
        percentage: (completed / civilizations.length) * 100
    };
}

function markCivilizationComplete(civId) {
    localStorage.setItem(`mathematikos_${civId}_completed`, 'true');
}

function getCivilizationStats(civId) {
    const stats = localStorage.getItem(`mathematikos_${civId}_stats`);
    return stats ? JSON.parse(stats) : null;
}

function saveCivilizationStats(civId, stats) {
    localStorage.setItem(`mathematikos_${civId}_stats`, JSON.stringify(stats));
}

// ===== SOUND EFFECTS (Optional) =====
function playSound(type) {
    // Web Audio API simple sounds
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            oscillator.frequency.value = 523.25; // C5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'incorrect':
            oscillator.frequency.value = 200;
            oscillator.type = 'sawtooth';
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'complete':
            // Play a little melody
            [523.25, 587.33, 659.25].forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
                osc.start(audioContext.currentTime + i * 0.15);
                osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
            });
            break;
    }
}

// Initialize game
console.log('🎮 Mathematikos Game Loaded!');
console.log('Travel through time and explore ancient number systems!');

// Check for saved progress
const progress = updateProgress();
if (progress.completed > 0) {
    console.log(`📊 Progress: ${progress.completed}/${progress.total} civilizations completed!`);
}

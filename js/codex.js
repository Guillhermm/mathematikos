// ===== CIVILIZATION CODEX =====
// Per-civilization encyclopedia, unlocked after completing each civilization.

const CODEX = {
    roman: {
        title: 'Roman Numerals',
        period: 'c. 900 BCE – 400 CE',
        region: 'Italian Peninsula, Roman Empire',
        sections: [
            {
                heading: 'Origins',
                text: 'Roman numerals evolved from a simple tally system used by Etruscan and early Latin peoples. The symbols I, V, X likely derive from notches cut in bones or wood: I is a single stroke, V resembles a hand, and X is two V shapes crossed.'
            },
            {
                heading: 'Subtractive Notation',
                text: 'The rule that a smaller numeral placed before a larger one means subtraction (IV = 4, IX = 9) was a late refinement. Earlier Romans often wrote IIII instead of IV, and this "older" form still appears on many clock faces today.'
            },
            {
                heading: 'Limitations',
                text: 'Roman numerals have no zero and no concept of place value. Multiplication and division were extraordinarily difficult — a likely reason why the Romans adopted the abacus for serious calculation. Large numbers like 1,000,000 required invented symbols not in common use.'
            },
            {
                heading: 'Legacy',
                text: 'Roman numerals persist in chapter headings, clock faces, film credits, and the names of monarchs and popes. Super Bowl numbers, Olympic Games, and building cornerstones still use them — a 2,000-year presence in daily life.'
            }
        ]
    },

    egyptian: {
        title: 'Egyptian Hieroglyphic Numerals',
        period: 'c. 3000 BCE – 400 CE',
        region: 'Nile Valley, North Africa',
        sections: [
            {
                heading: 'A Purely Additive System',
                text: 'Egyptian numerals used distinct hieroglyphs for each power of ten: a stroke (1), heel bone (10), coil of rope (100), lotus flower (1,000), bent finger (10,000), tadpole (100,000), and a god with raised arms (1,000,000). Numbers were formed by repeating and combining these — purely additive, no subtraction or positional value.'
            },
            {
                heading: 'The Rhind Papyrus',
                text: 'The Rhind Mathematical Papyrus (c. 1550 BCE) is one of the oldest mathematical documents in existence. It contains 84 problems in arithmetic and geometry, including unit fractions, area calculations, and volume estimation. The Egyptians worked entirely in unit fractions (1/n), except for 2/3.'
            },
            {
                heading: 'Pi and the Pyramid',
                text: 'Egyptian engineers approximated π as (16/9)² ≈ 3.16 — accurate to within 0.6%. The dimensions of the Great Pyramid of Giza encode this value, though whether this was deliberate or coincidental has been debated for centuries.'
            },
            {
                heading: 'Hieratic Script',
                text: 'For everyday writing, Egyptians used "hieratic" numerals — a cursive shorthand version of the hieroglyphs that allowed faster writing on papyrus. The hieratic system used different symbols for 1–9 (not just repeated strokes), making it significantly more compact.'
            }
        ]
    },

    greek: {
        title: 'Greek Alphabetic Numerals',
        period: 'c. 5th century BCE – Byzantine era',
        region: 'Greece, Alexandria, Eastern Mediterranean',
        sections: [
            {
                heading: 'The Milesian System',
                text: 'Greek alphabetic numerals (also called Milesian or Ionic numerals) assigned numerical values to the 24 letters of the Greek alphabet, plus three archaic letters: stigma/digamma (6), koppa (90), and sampi (900). The full alphabet thus represented 1–9, 10–90, and 100–900.'
            },
            {
                heading: 'Hypatia of Alexandria',
                text: 'Hypatia (c. 360–415 CE) was a Neoplatonist philosopher and mathematician who edited and taught from the works of Diophantus, Ptolemy, and Apollonius. She was the last major mathematician of the ancient Alexandrian tradition. Her murder by a Christian mob marked a symbolic end to ancient pagan scholarship in Alexandria.'
            },
            {
                heading: 'Diophantus and Algebra',
                text: 'Diophantus of Alexandria (c. 3rd century CE) wrote the Arithmetica — 13 books of algebraic problems that laid the foundation for what Al-Khwarizmi would later formalize. His notation used Greek alphabetic numerals and proto-algebraic symbols, making him one of the first algebraists in history.'
            },
            {
                heading: 'The Antikythera Mechanism',
                text: 'The Antikythera mechanism (c. 100 BCE), an ancient Greek astronomical calculator, used geared wheels to predict celestial events. Its inscriptions use alphabetic numerals for degrees and calendar divisions — demonstrating how these symbols were embedded in sophisticated scientific instruments.'
            }
        ]
    },

    babylonian: {
        title: 'Babylonian Cuneiform Numerals',
        period: 'c. 2000–500 BCE',
        region: 'Mesopotamia (modern Iraq)',
        sections: [
            {
                heading: 'Base-60: The Sexagesimal System',
                text: 'The Babylonians used a base-60 (sexagesimal) positional system — the most sophisticated numerical system in the ancient world. Why 60? It divides evenly by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — more divisors than any smaller number. This made fractions simpler in daily life.'
            },
            {
                heading: 'The Legacy You Use Every Day',
                text: 'The 60-second minute, 60-minute hour, 360-degree circle, and 24-hour day all descend directly from Babylonian mathematics. Every time you look at a clock or compass, you are using a number system 4,000 years old.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 is a clay tablet dated to c. 1800 BCE that lists Pythagorean triples — integer solutions to a² + b² = c² — over 1,000 years before Pythagoras. Babylonian mathematicians had a deep understanding of right triangles and quadratic equations.'
            },
            {
                heading: 'Positional Notation and Zero',
                text: 'The Babylonians invented positional notation — meaning the value of a symbol depends on its position. They also invented a placeholder symbol (⊙) to indicate an empty positional group, making it the earliest precursor to zero. However, they never used zero as a number in calculations — only as a separator.'
            }
        ]
    },

    chinese: {
        title: 'Chinese Rod Numerals',
        period: 'c. 400 BCE – present (traditional forms)',
        region: 'China, East Asia',
        sections: [
            {
                heading: 'Counting Rods',
                text: 'Chinese mathematicians used physical bamboo or ivory rods laid on a counting board to represent numbers. Vertical rods (⌶) represented units 1–5; a single horizontal rod (一) lay perpendicular for 6. Alternating orientations between columns (vertical, then horizontal) prevented confusion between adjacent digits — a precursor to binary thinking.'
            },
            {
                heading: 'The Suanpan (Abacus)',
                text: 'The Chinese suanpan (算盤), developed around the 2nd century BCE, could perform addition, subtraction, multiplication, division, and square roots faster than European pen-and-paper arithmetic for centuries. Skilled operators could match electronic calculators for basic operations in competitions held as late as 1946.'
            },
            {
                heading: 'Negative Numbers',
                text: 'Chinese mathematicians used red rods for positive numbers and black rods for negative numbers — the earliest known use of negative numbers in calculation. The Nine Chapters on the Mathematical Art (c. 1st century CE) contains rules for arithmetic with negative quantities, over a thousand years before European mathematics accepted them.'
            },
            {
                heading: 'The Nine Chapters',
                text: 'The Jiuzhang Suanshu (Nine Chapters on the Mathematical Art) is a foundational Chinese mathematical text covering practical problems: land measurement, crop distribution, civil engineering, and taxation. It describes Gaussian elimination (row reduction) for solving systems of equations — 1,800 years before Gauss.'
            }
        ]
    },

    mayan: {
        title: 'Maya Vigesimal Numerals',
        period: 'c. 300 BCE – Spanish conquest (1500s CE)',
        region: 'Mesoamerica (Mexico, Guatemala, Belize)',
        sections: [
            {
                heading: 'Base-20 and an Independent Zero',
                text: 'The Maya developed a vigesimal (base-20) positional number system, written vertically from bottom to top. Their zero — a shell symbol — was one of only two independent inventions of zero in history (the other being in South Asia). The Maya zero was not just a placeholder; it was a number used in calculations.'
            },
            {
                heading: 'The Maya Calendar System',
                text: 'The Maya Long Count calendar could specify any date within a 5,125-year cycle (approximately 3114 BCE to 2012 CE) with a five-digit notation. Their astronomical calculations — particularly for Venus cycles (584 days) and lunar months — were accurate to within minutes of arc, without telescopes.'
            },
            {
                heading: 'The Dresden Codex',
                text: 'The Dresden Codex (c. 900–1000 CE) is a pre-Columbian Maya book containing Venus tables that predict the morning and evening star appearances of Venus across 104 years with extraordinary accuracy. It is one of only four surviving Maya codices; the rest were burned by Spanish missionaries.'
            },
            {
                heading: 'Dots, Bars, and Shells',
                text: 'Three symbols encode all Maya numbers: a dot (●) for 1, a bar (━) for 5, and a shell (○) for 0. The elegance of this system — three symbols for any number, arranged positionally — is a mathematical achievement of the highest order, and it emerged completely independently of Old World mathematics.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Hindu-Arabic Numerals',
        period: 'c. 6th century CE (India) → 9th century CE (Baghdad) → 12th century CE (Europe)',
        region: 'India → Persia → Baghdad → Mediterranean → Global',
        sections: [
            {
                heading: 'The Greatest Mathematical Invention',
                text: 'The Hindu-Arabic numeral system — ten symbols (0–9) in a positional base-10 system with a true zero — is arguably the single most impactful invention in the history of mathematics. Every number in science, finance, engineering, and computing today uses this system, directly descended from the Brahmi numerals of ancient India.'
            },
            {
                heading: 'Al-Khwarizmi and the House of Wisdom',
                text: 'Muhammad ibn Musa al-Khwarizmi (c. 780–850 CE) was a Persian mathematician working at the Bayt al-Hikma (House of Wisdom) in Baghdad under the Abbasid Caliphate. His book Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (The Compendious Book on Calculation by Completion and Balancing) gave us the word "algebra" (al-jabr). A later work on Indian numerals introduced the Hindu-Arabic system to the Islamic world and, through Latin translations, to Europe.'
            },
            {
                heading: 'The Word "Algorithm"',
                text: 'The word "algorithm" derives from "Algoritmi" — the Latinized form of Al-Khwarizmi\'s name. When Latin translators described his methods for arithmetic using Indian numerals, they titled their works "Algoritmi dixit..." ("Al-Khwarizmi said..."). His name became a term for any step-by-step calculation procedure — and eventually the foundation concept of computer science.'
            },
            {
                heading: 'Europe\'s Long Resistance',
                text: 'The Hindu-Arabic numerals reached Europe via Spain and Italy in the 12th–13th centuries. Merchants loved them; officials feared them. Florence banned the numerals in 1299, fearing that the ease of modifying the symbol 0 into a 6 or 9 enabled fraud. Despite official resistance, the system\'s practical superiority was undeniable, and it replaced Roman numerals for calculation by the Renaissance.'
            }
        ]
    }
};

function openCodex(civId) {
    const entry = CODEX[civId];
    if (!entry) return;

    const civ = civilizations[civId];

    document.getElementById('codex-content').innerHTML = `
        <div class="codex-header">
            <span class="codex-icon">${civ.icon}</span>
            <div>
                <h2 class="codex-title">${entry.title}</h2>
                <p class="codex-meta">${entry.period} · ${entry.region}</p>
            </div>
        </div>

        ${entry.sections.map(sec => `
            <div class="codex-section">
                <h4 class="codex-section-heading">${sec.heading}</h4>
                <p>${sec.text}</p>
            </div>
        `).join('')}
    `;

    document.getElementById('codex-modal').classList.add('show');
}

function closeCodex() {
    document.getElementById('codex-modal').classList.remove('show');
}

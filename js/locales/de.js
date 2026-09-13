// ===== DEUTSCH =====
// Mirrors the key set of en.js exactly. tests/i18n.test.js fails on any key
// that is missing, extra, empty, or that drops a {placeholder}.

I18N_CATALOGS.de = {

ui: {
    document: {
        title: 'Mathematikos - Eine Reise durch die Zahlen der Antike',
        description: 'Reise durch die Zeit und löse mathematische Aufgaben mit antiken Zahlensystemen.'
    },

    common: {
        backToMenu: '← Zurück zum Menü',
        close: 'Schließen'
    },

    // The two constant voices. A local speaker is named by the story.
    speakers: {
        oracle: 'Das Orakel der Zahlen',
        hypatia: 'Hypatia von Alexandria'
    },

    menu: {
        settings: 'Einstellungen',
        subtitle: 'Eine Reise durch die antiken Zahlensysteme',
        thematic: 'Thematische Szenen',
        temporal: 'Zeitliche Herausforderungen',
        practice: 'Übungsmodus',
        daily: 'Tägliche Aufgabe',
        about: 'Über das Spiel und seine Entstehung →'
    },

    civSelect: {
        title: 'Wähle deine Zivilisation',
        subtitle: 'Entdecke die mathematischen Geheimnisse der Alten.',
        best: 'Bestwert: {score}'
    },

    difficulty: {
        easy: 'Leicht',
        intermediate: 'Mittel',
        advanced: 'Fortgeschritten',
        expert: 'Experte'
    },

    story: {
        back: 'Zurück',
        openCodex: 'Kodex öffnen',
        begin: 'Aufgabe beginnen →',
        scene: 'Die Szene',
        challengeCount: '{count} Aufgaben'
    },

    game: {
        backToStory: 'Zurück zur Geschichte',
        toggleSound: 'Hintergrundgeräusche ein- oder ausschalten',
        answerLabel: 'Deine Antwort',
        answerPlaceholder: 'Tippe auf die Zeichen unten',
        storyChip: 'Geschichte',
        guideChip: 'Hilfe',
        oraclePieces: 'Gesammelte Orakel-Fragmente:',
        hint: 'Tipp anzeigen',
        clear: 'Löschen',
        backspace: 'Zurück',
        submit: 'Antworten',
        counter: 'Aufgabe {current}/{total}',
        sceneCounter: 'Aufgabe {current} von {total}',
        reversePrompt: 'Schreibe in {civ} Zahlzeichen',
        reverseSlot: 'Baue in {civ} Zahlzeichen',
        reverseInput: 'Baue das Zahlzeichen mit dem Zeichenfeld oben'
    },

    symbolPad: {
        separator: 'Trenn',
        position: 'Pos'
    },

    feedback: {
        empty: 'Bitte baue eine Antwort oder tippe eine Zahl ein!',
        correct: 'Richtig! +{points} Punkte',
        incorrect: 'Falsch. Versuch es noch einmal!',
        incorrectTimed: 'Falsch. Versuch es noch einmal! (-10 s)',
        incorrectReveal: 'Fast! Antwort: {answer} = {civAnswer}'
    },

    achievement: {
        rollTitle: 'Gut in Fahrt!',
        rollText: 'Drei richtige Antworten hintereinander!',
        masterTitle: 'Meister im Rechnen!',
        masterText: 'Alle Aufgaben geschafft!',
        penaltyTitle: 'Zeitstrafe!',
        penaltyText: '-10 Sekunden',
        streakTitle: '{count} Tage in Folge!',
        streakText: 'Komm morgen wieder, damit die Serie hält!',
        dailyTitle: 'Tägliche Aufgabe geschafft!',
        dailyText: 'Komm morgen wieder für eine neue Zivilisation!',
        unlockedTitle: 'Neue Zivilisation freigeschaltet!',
        unlockedText: 'Du kannst jetzt {civ} erkunden!',
        allCompleteTitle: 'Meister der Zahlen!',
        allCompleteText: 'Du hast alle Zivilisationen abgeschlossen! Du bist ein wahrer Hüter der Zahlen!'
    },

    results: {
        title: 'Aufgabe geschafft!',
        continue: 'Reise fortsetzen →',
        openCodex: 'Kodex öffnen',
        chooseAnother: 'Andere wählen',
        mainMenu: 'Hauptmenü',
        totalScore: 'Gesamtpunktzahl',
        correctAnswers: 'Richtige Antworten',
        timeTaken: 'Benötigte Zeit',
        oraclePieces: 'Orakel-Fragmente',
        hintsUsed: 'Genutzte Tipps',
        collectedTitle: 'Orakel-Fragment geborgen!',
        collectedText: 'Du hast ein Fragment des Orakels der Zahlen von {civ} geborgen!',
        collectedQuote: '"Die Weisheit der Zahlen überdauert die Zeit ..."',
        timeUpTitle: 'Zeit abgelaufen!',
        timeoutMessage: 'Die Kinder der Zeit haben die Aufzeichnungen zerstört!',
        scoreAchieved: 'Erreichte Punktzahl',
        challengesCompleted: 'Geschaffte Aufgaben',
        progress: 'Fortschritt',
        retryMessage: 'Gib nicht auf! Versuch es noch einmal und rette das Wissen der antiken Zivilisationen.'
    },

    daily: {
        title: 'Tägliche Aufgabe',
        streak: '{count} Tage in Folge!',
        startStreak: 'Starte heute deine Serie!',
        completedTitle: 'Du hast die heutige Aufgabe schon geschafft!',
        completedText: 'Komm morgen wieder für eine neue Zivilisation.',
        description: 'Die heutige Aufgabe nutzt das Zahlensystem von {civ}. 5 Fragen, kein Zeitlimit. Zeig, was du gelernt hast!',
        play: '▶ Heutige Aufgabe spielen'
    },

    help: {
        title: 'So wird gespielt'
    },

    settings: {
        title: 'Einstellungen',
        appearance: 'Darstellung',
        language: 'Sprache',
        system: 'System',
        light: 'Hell',
        dark: 'Dunkel',
        note: 'Ein Sprachwechsel gilt sofort im ganzen Spiel.'
    },

    crossCiv: {
        sceneTitle: 'Umrechnung zwischen den Epochen',
        context: 'Rechne dieses {source} Zahlzeichen in das System {target} um.',
        hint: 'Der Wert ist {value}. In {target}: {answer}',
        guideTitle: 'Von {source} → Zu {target}',
        guideText: 'Nutze das Zeichenfeld {target} unten, um deine Antwort zu schreiben.',
        slot: 'Baue in {target}',
        input: 'Baue das Zahlzeichen {target} mit dem Zeichenfeld oben'
    },

    about: {
        title: 'Über Mathematikos'
    }
},

// ── Zivilisationen ───────────────────────────────────────────────────────────

civ: {
    roman: {
        name: 'Römisches Reich',
        description: 'Hilf den Händlern auf dem Forum Romanum, Preise mit römischen Zahlen zu berechnen.',
        numberSystem: 'Römische Zahlen (I, V, X, L, C, D, M)'
    },
    egyptian: {
        name: 'Altes Ägypten',
        description: 'Entziffere die Hieroglyphenzahlen in den Pyramiden.',
        numberSystem: 'Ägyptische Hieroglyphenzahlen'
    },
    greek: {
        name: 'Antikes Griechenland',
        description: 'Berechne Proportionen für den Bau von Tempeln.',
        numberSystem: 'Griechische Buchstabenzahlen'
    },
    babylonian: {
        name: 'Babylon',
        description: 'Nutze das Sexagesimalsystem, um die Hängenden Gärten wiederherzustellen.',
        numberSystem: 'Babylonisches System zur Basis 60'
    },
    chinese: {
        name: 'Han-Dynastie',
        description: 'Rechne mit Zählstäbchen auf dem kaiserlichen Markt.',
        numberSystem: 'Chinesische Zählstäbchen'
    },
    mayan: {
        name: 'Maya-Zivilisation',
        description: 'Entziffere das vigesimale Zwanzigersystem der alten Maya.',
        numberSystem: 'Maya-Vigesimalsystem (Basis 20)'
    },
    'hindu-arabic': {
        name: 'Haus der Weisheit',
        description: 'Entdecke das Zahlensystem, das alle anderen vereinte, im Bagdad des 9. Jahrhunderts.',
        numberSystem: 'Indisch-arabische Ziffern (٠١٢٣٤٥٦٧٨٩)'
    }
},

// ── Geschichten ──────────────────────────────────────────────────────────────

stories: {
    thematic: {
        intro: [
            {
                quote: 'Du hast die Maschine im Tempel gefunden. Gut. Ich habe lange darauf gewartet, dass jemand sie einschaltet.',
                text: 'Ich bin das Orakel der Zahlen. Einst war ich vollständig und trug jede Art in mir, auf die die Menschheit je gezählt hat.'
            },
            {
                quote: 'Dann zerbrach ich, und meine Bruchstücke fielen rückwärts durch die Zeit.',
                text: 'Jede Zivilisation, die du besuchst, hütet eines meiner Fragmente, ohne es zu wissen. Sie kennen nur ihre eigenen Zahlzeichen und brauchen jemanden, der richtig damit rechnet.'
            },
            {
                quote: 'Hilf ihnen, und das Fragment löst sich.',
                text: 'Berge jedes Stück, und ich werde wieder ganz sein, und du wirst verstehen, was ich verstehe: dass all diese Systeme eine einzige Frage sind, gestellt in sieben Sprachen.'
            }
        ],

        roman: {
            title: 'Römer - Hilfe auf dem Forum Romanum',
            setting: 'Du kommst auf dem geschäftigen Forum Romanum an, umgeben von Marmorsäulen, Kaiserstatuen und Marktständen voller Waren. Ein Händler ruft dich um Hilfe.',
            objective: 'Hilf Marcus, einem Tuchhändler, Preise zu berechnen und Geschäfte mit römischen Zahlen abzuwickeln.',
            speaker: {
                name: 'Marcus der Händler',
                line: 'Willkommen, Reisender! Auf dem Forum ist heute viel los, und ich brauche Hilfe beim Rechnen. Kannst du mir bei diesen Geschäften helfen?'
            },
            hypatia: {
                guidance: 'Die Römer bauten ihr Reich auf Ordnung, und Ordnung beginnt beim Zählen. Sieh, wie ihre Zahlzeichen ihre Werte spiegeln: Wiederholung zum Anhäufen, Subtraktion für die Eleganz. Beginne hier, und der Rest der Geschichte öffnet sich dir.'
            }
        },

        egyptian: {
            title: 'Altes Ägypten - Die Pyramiden entziffern',
            setting: 'Du materialisierst dich in der Cheops-Pyramide von Gizeh. Fackeln flackern an alten Wänden voller rätselhafter Hieroglyphen. Die Luft ist schwer von Weihrauch. Ein königlicher Schreiber begrüßt dich voller Dringlichkeit.',
            objective: 'Hilf dem königlichen Schreiber, das große Bankett des Pharaos vorzubereiten, indem du Mengen mit ägyptischen Hieroglyphenzahlen berechnest.',
            speaker: {
                name: 'Imhotep der Schreiber',
                line: 'Großer Mathematiker! Das Bankett des Pharaos steht bevor, und unsere Berechnungen müssen stimmen. Die Hieroglyphen bergen die Antworten: Kannst du sie entziffern?'
            },
            hypatia: {
                guidance: 'Ägyptens Zahlensystem ist Jahrtausende älter als Rom. Jedes Zeichen ist eine Zehnerpotenz: Zähle die Hieroglyphen und addiere ihre Werte. Die Ägypter schrieben als Erste Zahlen groß genug, um Weltwunder zu bauen. Geh ehrfürchtig durch ihre Zeichen.'
            }
        },

        greek: {
            title: 'Antikes Griechenland - Bauen mit Proportionen',
            setting: 'Du kommst auf der Baustelle des prächtigen Parthenon in Athen an. Philosophen und Architekten umringen dich und diskutieren die göttlichen Proportionen und mathematischen Harmonien, die diesen Tempel unsterblich machen sollen.',
            objective: 'Hilf dem Baumeister, Proportionen und Maße mit griechischen Buchstabenzahlen zu berechnen, damit die geometrische Harmonie perfekt wird.',
            speaker: {
                name: 'Archimedes',
                line: 'Ah, noch ein Liebhaber der Mathematik! Der Goldene Schnitt muss unseren Bau leiten. Diese Berechnungen verlangen Genauigkeit. Hilfst du mir, sie mit unseren heiligen Zahlzeichen zu lösen?'
            },
            hypatia: {
                guidance: 'Ich wurde in diese griechische Tradition der Buchstabenzahlen hineingeboren, in der jeder Buchstabe eine zahlenhafte Seele trägt. Meine eigene Arbeit baute auf Diophant, Ptolemäus und Euklid auf. In dieser Zivilisation wirst du denken wie die Griechen: Jedes Zeichen ist auch ein Buchstabe, und jede Rechnung eine Art Dichtung.'
            }
        },

        babylonian: {
            title: 'Babylon - Die Hängenden Gärten retten',
            setting: 'Du kommst im alten Babylon an, bei den sagenhaften Hängenden Gärten, einem der Sieben Weltwunder. Die aufwendige Bewässerung muss neu berechnet werden, und die königlichen Ingenieure wenden sich an dich.',
            objective: 'Nutze das ausgefeilte babylonische System zur Basis 60 (sexagesimal), um Wasserverteilung und Ressourcen für die Pflege der Gärten zu berechnen.',
            speaker: {
                name: 'Oberingenieur Nabu-rimanni',
                line: 'Willkommen, Mathematiker! Unsere Vorfahren schufen das fortschrittlichste Zahlensystem, die Basis 60! Hilf uns, die genauen Maße für die Bewässerung der Gärten zu berechnen.'
            },
            hypatia: {
                guidance: 'Babylon schenkte uns die Minute aus sechzig Sekunden und den Kreis aus dreihundertsechzig Grad. Wenn du auf eine Uhr oder einen Kompass schaust, denkst du babylonisch. Ihre Basis 60 entspringt der teilbarsten Zahl, die die antike Welt kannte. Achte auf Gruppen von sechzig. Sie sind das Skelett des Denkens dieser Zivilisation.'
            }
        },

        chinese: {
            title: 'Han-Dynastie - Rechnen auf dem kaiserlichen Markt',
            setting: 'Du kommst auf dem geschäftigen Markt von Chang\'an zur Zeit der Han-Dynastie an. Händler drängen sich in den Gassen und verkaufen Seide, Gewürze, Jade und unzählige Kostbarkeiten. Ein Meister des Abakus winkt dich an seinen Stand.',
            objective: 'Rechne mit chinesischen Zählstäbchen oder dem Suanpan (Abakus), um Händlern bei ihren Geschäften zu helfen und faire Tauschgeschäfte zu sichern.',
            speaker: {
                name: 'Meister Liu, der Abakus-Experte',
                line: 'Willkommen, ehrenwerter Rechner! Unsere Märkte sprühen vor Handel. Nutze die alte Kunst der Zählstäbchen, um die Rechnungen dieser Händler zu lösen. Jedes Geschäft muss genau stimmen!'
            },
            hypatia: {
                guidance: 'Die Chinesen entwickelten ein dezimales Stellenwertsystem völlig unabhängig vom Westen, und ihr Suanpan (Abakus) übertraf die europäische Papierrechnung über Jahrhunderte. Lies die Zeichen von links nach rechts: Jede benannte Einheit (zehn, hundert, tausend) verankert die Ziffer davor. Die Struktur ist streng, aber schön.'
            }
        },

        mayan: {
            title: 'Maya-Zivilisation - Geheimnisse der Pyramide',
            setting: 'Du kommst im Morgengrauen an der prächtigen Pyramide von Chichén Itzá an. Ein Maya-Astronom studiert die Sterne und verfolgt mit seinem bemerkenswerten Zwanzigersystem die Himmelszyklen mit außergewöhnlicher Genauigkeit.',
            objective: 'Hilf dem Astronomen Itzamná, Opfergaben und astronomische Zyklen mit dem Maya-System zur Basis 20 aus Punkten, Balken und Muscheln zu berechnen.',
            speaker: {
                name: 'Astronom Itzamná',
                line: 'Willkommen, Sucher des Wissens! Unser Vigesimalsystem zur Basis 20 birgt Geheimnisse des Kosmos. Punkte stehen für eins, Balken für fünf und die Muschel für null. Kannst du unsere Zahlen meistern?'
            },
            hypatia: {
                guidance: 'Von allen Zahlensystemen, denen du begegnet bist, steht das der Maya für sich. Sie erfanden die Null eigenständig, nicht als Platzhalter, sondern als Zahl. Ihre Kalenderberechnungen halten mit unserer besten Astronomiesoftware mit. Lies von oben nach unten; jede Ebene multipliziert mit zwanzig. Die Muschel ist nicht nichts. Sie ist alles.'
            }
        },

        'hindu-arabic': {
            title: 'Haus der Weisheit - Der Ursprung unserer Zahlen',
            setting: 'Du kommst im Bayt al-Hikma an, dem Haus der Weisheit, im Bagdad des 9. Jahrhunderts. Gelehrte aus aller bekannten Welt füllen die Säle: griechische, persische, indische und arabische Mathematiker arbeiten Seite an Seite, übersetzen und erweitern das Wissen der Menschheit. Al-Chwarizmi selbst bittet dich an seinen Schreibtisch.',
            objective: 'Arbeite an der Seite Al-Chwarizmis und prüfe Berechnungen mit dem indisch-arabischen Stellenwertsystem, jenem System, das eines Tages zur Weltsprache der Mathematik wird.',
            speaker: {
                name: 'Al-Chwarizmi',
                line: 'Willkommen im Haus der Weisheit. Die indischen Gelehrten brachten uns ein Geschenk: neun Zeichen und eine Null. Zusammen können sie jede Zahl des Universums darstellen. Das ist nicht bloß Rechnen. Es ist eine neue Art zu denken. Kannst du diese Zeichen meistern?'
            },
            hypatia: {
                guidance: 'Du bist weit gereist, junger Mathematiker. Du hast Wiederholung in Ägypten gesehen, Subtraktion in Rom, die Basis 60 in Babylon, Buchstaben als Zahlen in Griechenland, Stäbchen in China und Muscheln in Amerika. Alle sind Antworten auf dieselbe Frage: Wie stellen wir das Unendliche mit dem Endlichen dar? Hier in Bagdad fand die Menschheit ihre eleganteste Antwort. Diese neun Zeichen und die Null: Du kennst sie längst. Aber jetzt wirst du verstehen, woher sie kommen.'
            }
        }
    },

    temporal: {
        intro: [
            {
                quote: 'Etwas frisst die Aufzeichnungen, und es arbeitet sich von heute aus rückwärts vor.',
                text: 'Sie nennen sich die Kinder der Zeit. Sie tilgen die antiken Zahlensysteme aus der Geschichte, eine Zivilisation nach der anderen, beginnend mit der ältesten.'
            },
            {
                quote: 'Ein System, das niemand mehr lesen kann, ist ein System, das nie erfunden wurde.',
                text: 'So funktioniert das Auslöschen. Es verbrennt nichts. Es wartet nur, bis die letzte Person fort ist, die die Schreibweise verstand.'
            },
            {
                quote: 'Also lies sie mir zurück, bevor die Aufzeichnung sich schließt.',
                text: 'Jede richtige Antwort holt eine Berechnung zurück, die sie sich schon genommen hatten. Du arbeitest gegen die Uhr, denn sie tun es auch.'
            }
        ],

        roman: {
            title: 'Römer - Notfall auf dem Forum',
            setting: 'Das Forum Romanum steht in Flammen! Die Bürger fliehen in Panik. Du musst helfen, die Evakuierung zu organisieren, indem du rasch die nötigen Vorräte berechnest.',
            objective: 'Löse Additions- und Subtraktionsaufgaben, um wertvolle Aufzeichnungen und Vorräte vor dem Feuer zu retten.',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 3 Minuten, um alle Aufgaben zu schaffen!' }
        },

        egyptian: {
            title: 'Altes Ägypten - Zerstörung der Bibliothek',
            setting: 'Die große Bibliothek von Alexandria stürzt ein! Alte Papyrusrollen mit mathematischem Wissen drohen für immer verloren zu gehen. Du musst schnell handeln, um sie zu retten.',
            objective: 'Entziffere Hieroglyphenrechnungen und rette die kostbaren mathematischen Aufzeichnungen, bevor sie zu Staub zerfallen!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2,5 Minuten, um das alte Wissen zu retten!' }
        },

        greek: {
            title: 'Antikes Griechenland - Das Wissen in Gefahr',
            setting: 'Platons Akademie wird angegriffen! Ein Feuer droht Jahrhunderte mathematischer Philosophie und Wissenschaft zu vernichten. Rollen mit der Weisheit von Pythagoras, Euklid und Archimedes werden zu Asche!',
            objective: 'Löse mathematische Aufgaben, um die kostbarsten Texte zu retten, bevor sie für immer verloren sind!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2,5 Minuten, bevor das Wissen verloren ist!' }
        },

        babylonian: {
            title: 'Babylon - Landwirtschaftskrise',
            setting: 'Eine verheerende Dürre bedroht Babylon! Die alten Bewässerungsanlagen versagen, und die Ernten sterben. Das Wissen über die Berechnung der Wasserverteilung verblasst: Du musst es retten!',
            objective: 'Löse Rechnungen zur Basis 60, um die Bewässerung wiederherzustellen und die Stadt vor dem Hunger zu bewahren!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2 Minuten, um Babylons Landwirtschaft zu retten!' }
        },

        chinese: {
            title: 'Han-Dynastie - Chaos am Kaiserhof',
            setting: 'Das Neujahrsfest des Kaisers steht auf dem Spiel! Ein katastrophaler Rechenfehler im kaiserlichen Haushalt droht die Feierlichkeiten platzen zu lassen. Rivalen vernichten alte Rechnungsbücher!',
            objective: 'Nutze chinesische Zahlen, um Finanzrechnungen zu lösen und das wichtigste Fest des Jahres zu retten!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2 Minuten, um das kaiserliche Fest zu retten!' }
        },

        mayan: {
            title: 'Maya - Vulkanausbruch bei Chichén Itzá',
            setting: 'Ein Vulkanausbruch bedroht die große Maya-Stadt Chichén Itzá! Kostbare Steintafeln mit Jahrhunderten mathematischen und astronomischen Wissens drohen unter Asche und Lava zu vergehen!',
            objective: 'Löse Rechnungen zur Basis 20, um die mathematischen Aufzeichnungen der Maya zu retten, bevor der Ausbruch alles zerstört!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2 Minuten, um das Wissen der Maya zu retten!' }
        },

        'hindu-arabic': {
            title: 'Haus der Weisheit - Die belagerte Bibliothek',
            setting: 'Der mongolische Vormarsch bedroht Bagdad! Gelehrte kopieren fieberhaft Handschriften, bevor die Stadt fällt. Das indisch-arabische Zahlensystem, das mächtigste mathematische Werkzeug der Menschheit, muss bewahrt werden.',
            objective: 'Löse Rechnungen mit indisch-arabischen Ziffern, um die wichtigsten mathematischen Handschriften zu prüfen und zu retten, bevor die Zeit abläuft!',
            note: { label: 'Verbleibende Zeit', text: 'Du hast 2 Minuten, um das Wissen des Hauses der Weisheit zu retten!' }
        }
    },

    practice: {
        roman: {
            title: 'Übung - Römische Zahlen',
            setting: 'Übe die römischen Zahlen in deinem eigenen Tempo. Kein Zeitlimit, damit du dich aufs Verstehen konzentrieren kannst.',
            objective: 'Löse Aufgaben mit römischen Zahlen. Tipps stehen bereit, und Fehler zeigen die richtige Antwort.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        egyptian: {
            title: 'Übung - Ägyptische Hieroglyphen',
            setting: 'Erkunde die ägyptischen Hieroglyphenzahlen ganz ohne Druck.',
            objective: 'Löse Aufgaben mit ägyptischen Zahlen. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        greek: {
            title: 'Übung - Griechische Buchstabenzahlen',
            setting: 'Studiere das griechische Buchstabensystem ohne Zeitdruck.',
            objective: 'Löse Aufgaben mit griechischen Zahlen. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        babylonian: {
            title: 'Übung - Babylonische Basis 60',
            setting: 'Erkunde das babylonische Sexagesimalsystem in deinem eigenen Tempo.',
            objective: 'Löse Aufgaben zur Basis 60. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        chinese: {
            title: 'Übung - Chinesische Zahlen',
            setting: 'Studiere die chinesischen Zählstäbchen ganz ohne Druck.',
            objective: 'Löse Aufgaben mit chinesischen Zahlen. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        mayan: {
            title: 'Übung - Maya-Vigesimalsystem',
            setting: 'Erkunde das Maya-System zur Basis 20 in deinem eigenen Tempo.',
            objective: 'Löse Aufgaben zur Basis 20. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        },
        'hindu-arabic': {
            title: 'Übung - Indisch-arabische Ziffern',
            setting: 'Erkunde die ostarabisch-indischen Ziffernformen in deinem eigenen Tempo.',
            objective: 'Löse Aufgaben mit ostarabischen Ziffern. Kein Zeitlimit.',
            note: { label: 'Übungsmodus', text: 'Lass dir Zeit. Tipps sind kostenlos, und Fehler zeigen die richtige Antwort.' },
            hypatia: null
        }
    }
},

// ── Aufgaben ─────────────────────────────────────────────────────────────────

challenge: {
    roman: {
        contexts: {
            plus: [
                'Marcus muss den Gesamtpreis für {num1} Ellen Seide und {num2} Ellen Leinen berechnen.',
                'Ein Kunde kauft {num1} Amphoren Wein und bestellt dann {num2} weitere. Wie viele sind es insgesamt?',
                'Am Stand liegen {num1} Brote. Marcus bekommt {num2} dazu. Wie viele sind es jetzt?',
                'Berechne die Summe dieser Geschäfte: {num1} Denare und {num2} Denare.',
                'Marcus zählt am Morgen {num1} Kunden und am Nachmittag {num2}. Wie viele insgesamt?'
            ],
            minus: [
                'Marcus hatte {num1} Ellen Stoff und verkaufte heute {num2} Ellen. Wie viel bleibt übrig?',
                'Ein Kunde will {num1} Amphoren Wein kaufen, gibt aber {num2} zurück. Wie viele verkauft Marcus?',
                'Am Stand liegen {num1} Brote. Marcus verkauft {num2}. Wie viele bleiben übrig?',
                'Berechne die Differenz dieser Geschäfte: {num1} Denare und {num2} Denare.',
                'Marcus zählte heute {num1} Kunden, und {num2} davon haben nur geschaut. Wie viele haben gekauft?'
            ]
        },
        hint: 'Zerlege die Zahlzeichen: {sym1} = {num1}, {sym2} = {num2}. Dann rechne: {num1} {operation} {num2} = {answer}'
    },

    egyptian: {
        contexts: {
            plus: [
                'Der königliche Schreiber zählt die Opfergaben: {num1} Brote und {num2} Krüge Honig für den Tempel.',
                'Berechne die Zahl der Steinblöcke: {num1} Blöcke plus {num2} Blöcke für den Pyramidenbau.',
                'Die Schatzkammer des Pharaos hat {num1} Goldstücke. Lege {num2} Stücke dazu. Wie viele sind es?',
                'Zähle die Papyrusrollen der Bibliothek: {num1} Rollen in einem Regal, dazu {num2} aus einem anderen.',
                'Berechne die Vorräte für das Bankett: {num1} Portionen zusammen mit {num2} Portionen.'
            ],
            minus: [
                'Der königliche Schreiber zählt {num1} Brote und schickt {num2} zum Tempel. Wie viele bleiben?',
                'Berechne die Zahl der Steinblöcke: {num1} Blöcke minus {num2} Blöcke für den Pyramidenbau.',
                'Die Schatzkammer des Pharaos hat {num1} Goldstücke. Nimm {num2} Stücke heraus. Was bleibt?',
                'Zähle die Papyrusrollen der Bibliothek: {num1} Rollen in einem Regal, davon {num2} anderswohin gebracht.',
                'Berechne die Vorräte für das Bankett: {num1} Portionen vermindert um {num2} Portionen.'
            ]
        },
        hint: 'Zähle die Zeichen: {sym1} = {num1}, {sym2} = {num2}. Rechne: {num1} {operation} {num2} = {answer}. Jedes Zeichen steht für eine Zehnerpotenz!'
    },

    greek: {
        contexts: {
            plus: [
                'Der Architekt berechnet den Goldenen Schnitt für {num1} Säulen plus {num2} Säulen des Parthenon.',
                'Pythagoras bittet dich zu lösen: Wenn eine Seite {num1} Einheiten misst und wir {num2} Einheiten hinzufügen, was ergibt das?',
                'Berechne das Verhältnis: {num1} Marmorblöcke zusammen mit {num2} Blöcken für den Tempelbau.',
                'Die Rolle des Philosophen zeigt {num1} Schüler an der Akademie, und {num2} weitere kommen dazu. Berechne die Summe.',
                'Mathematische Harmonie: Bringe die Gleichung aus {num1} Lyren und {num2} Flöten im Amphitheater ins Gleichgewicht.'
            ],
            minus: [
                'Der Architekt berechnet den Goldenen Schnitt für {num1} Säulen minus {num2} Säulen des Parthenon.',
                'Pythagoras bittet dich zu lösen: Wenn eine Seite {num1} Einheiten misst und wir {num2} Einheiten abziehen, was ergibt das?',
                'Berechne das Verhältnis: {num1} Marmorblöcke vermindert um {num2} Blöcke für den Tempelbau.',
                'Die Rolle des Philosophen zeigt {num1} Schüler an der Akademie, und {num2} davon gehen fort. Berechne die Differenz.',
                'Mathematische Harmonie: Bringe die Gleichung aus {num1} Lyren minus {num2} Flöten im Amphitheater ins Gleichgewicht.'
            ]
        },
        hint: 'Entschlüssele die Buchstaben: {sym1} = {num1}, {sym2} = {num2}. Dann: {num1} {operation} {num2} = {answer}. Denk daran: Jeder griechische Buchstabe steht für eine bestimmte Zahl!'
    },

    babylonian: {
        contexts: {
            plus: [
                'Der königliche Ingenieur berechnet die Wasserverteilung: {num1} Maße plus {num2} Maße für die Bewässerungskanäle.',
                'Berechne die Ressourcen der Hängenden Gärten: {num1} Palmen zusammen mit {num2} Zedern.',
                'Die Rechnung des Astronomen: {num1} Himmelsbeobachtungen und {num2} Sternpositionen. Berechne das Ergebnis.',
                'Wasserzuteilung für die Landwirtschaft: {num1} Einheiten zu {num2} Einheiten für die Felder hinzugefügt.',
                'Der Tempelbau braucht {num1} Lehmziegel plus {num2} Steinblöcke. Berechne die Summe.'
            ],
            minus: [
                'Der königliche Ingenieur berechnet die Wasserverteilung: {num1} Maße minus {num2} Maße für die Bewässerungskanäle.',
                'Berechne die Ressourcen der Hängenden Gärten: {num1} Palmen minus {num2} gefällte Zedern.',
                'Die Rechnung des Astronomen: {num1} Himmelsbeobachtungen minus {num2} bewölkte Nächte. Berechne das Ergebnis.',
                'Wasserzuteilung für die Landwirtschaft: {num1} Einheiten, davon {num2} Einheiten von den Feldern abgezogen.',
                'Der Tempelbau braucht {num1} Lehmziegel minus {num2} zerbrochene. Berechne, wie viele brauchbar sind.'
            ]
        },
        hint: 'System zur Basis 60! Jede Position ist 60x so viel wert wie die vorige. {sym1} = {num1}, {sym2} = {num2}. Rechne: {num1} {operation} {num2} = {answer}. 𒐕=1, 𒌋=10'
    },

    chinese: {
        contexts: {
            plus: [
                'Der Händler rechnet: {num1} Ballen Seide plus {num2} Ballen Baumwolle auf dem Markt der Han-Dynastie.',
                'Berechne die kaiserliche Schatzkammer: {num1} Tael Silber zusammen mit {num2} Tael Gold.',
                'Der Abakus-Meister fragt: {num1} Säcke Reis und {num2} Säcke Weizen. Was ergibt das?',
                'Vorbereitungen für das Fest: {num1} Laternen zu {num2} Papierdrachen hinzugefügt. Berechne die Summe.',
                'Die Zählstäbchen zeigen: {num1} Jadestücke plus {num2} Bronzemünzen auf dem Marktplatz.'
            ],
            minus: [
                'Der Händler rechnet: {num1} Ballen Seide minus {num2} verkaufte Ballen auf dem Markt der Han-Dynastie.',
                'Berechne die kaiserliche Schatzkammer: {num1} Tael Silber vermindert um {num2} ausgegebene Tael.',
                'Der Abakus-Meister fragt: {num1} Säcke Reis minus {num2} Säcke Weizen. Was ergibt das?',
                'Vorbereitungen für das Fest: {num1} Laternen, davon {num2} zur Reparatur entfernt. Berechne die Summe.',
                'Die Zählstäbchen zeigen: {num1} Jadestücke minus {num2} auf dem Marktplatz eingetauschte.'
            ]
        },
        hint: 'Chinesisches System! {sym1} = {num1}, {sym2} = {num2}. Rechne: {num1} {operation} {num2} = {answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000'
    },

    mayan: {
        contexts: {
            plus: [
                'Der Maya-Astronom rechnet: {num1} Tage plus {num2} Tage im heiligen Tzolk\'in-Kalender.',
                'Bereite Opfergaben für Kukulcán vor: {num1} Kakaobohnen zusammen mit {num2} Jadestücken.',
                'Der Schreiber verzeichnet die Ernte: {num1} Maiskolben und {num2} Kürbisse vom Milpa-Feld.',
                'Berechne die Pyramidenstufen: {num1} Steine plus {num2} Steine für die nächste Ebene von Chichén Itzá.',
                'Der Händler zählt auf dem Markt von Tikal: {num1} Quetzalfedern und {num2} Obsidianklingen.'
            ],
            minus: [
                'Der Maya-Astronom rechnet: {num1} Tage minus {num2} Tage im heiligen Tzolk\'in-Kalender.',
                'Bereite Opfergaben für Kukulcán vor: {num1} Kakaobohnen minus {num2} verschenkte.',
                'Der Schreiber verzeichnet die Ernte: {num1} Maiskolben minus {num2} eingetauschte Kürbisse vom Milpa-Feld.',
                'Berechne die Pyramidenstufen: {num1} Steine minus {num2} beim Transport zersprungene.',
                'Der Händler zählt auf dem Markt von Tikal: {num1} Quetzalfedern minus {num2} verkaufte.'
            ]
        },
        hint: 'Maya-Vigesimalsystem (Basis 20)! Punkt = 1, Balken = 5, Muschel = 0. {sym1} = {num1}, {sym2} = {num2}. Rechne: {num1} {operation} {num2} = {answer}.'
    },

    'hindu-arabic': {
        contexts: {
            plus: [
                'Al-Chwarizmi notiert zwei Messwerte aus der Sternwarte: {num1} und {num2}. Wie lautet ihre Summe?',
                'Ein Händler auf dem Basar von Bagdad hat {num1} Dirham und erhält {num2} dazu. Wie viele sind es jetzt?',
                'Das Haus der Weisheit verzeichnet {num1} griechische Handschriften und {num2} persische Rollen. Wie viele sind es insgesamt?',
                'Ein Astronom berechnet {num1} Grad für einen Bogen und {num2} für einen anderen. Wie groß ist der Gesamtbogen?',
                'Ein Übersetzer schafft am Morgen {num1} Seiten und am Abend {num2}. Wie viele sind es an diesem Tag?'
            ],
            minus: [
                'Al-Chwarizmi notiert zwei Messwerte aus der Sternwarte: {num1} und {num2}. Wie groß ist ihre Differenz?',
                'Ein Händler auf dem Basar von Bagdad hat {num1} Dirham und gibt {num2} aus. Wie viele bleiben?',
                'Das Haus der Weisheit verzeichnet {num1} griechische Handschriften und {num2} persische Rollen. Wie viele griechische Handschriften sind es mehr?',
                'Ein Astronom berechnet {num1} Grad für einen Bogen und {num2} für einen anderen. Wie groß ist die Differenz?',
                'Ein Übersetzer schafft am Morgen {num1} Seiten und am Abend {num2}. Wie groß ist die Differenz?'
            ]
        },
        hint: 'Das sind ostarabisch-indische Ziffern: {sym1} = {num1}, {sym2} = {num2}. Rechne: {num1} {operation} {num2} = {answer} → {answerNumeral}'
    }
},

// ── Kurzhilfen ───────────────────────────────────────────────────────────────

guide: {
    roman: {
        title: 'Römische Zahlen auf einen Blick',
        tip: 'Tipp: Steht ein kleineres Zeichen vor einem größeren, wird es abgezogen (zum Beispiel IV = 4, IX = 9)'
    },
    egyptian: {
        title: 'Ägyptische Hieroglyphenzahlen',
        tip: 'Tipp: Zähle jedes Zeichen, multipliziere es mit seinem Wert und addiere am Ende alles zusammen.'
    },
    greek: {
        title: 'Griechische Buchstabenzahlen',
        tip: 'Tipp: Buchstaben werden zu Zahlen zusammengesetzt. ρκγ = 100 + 20 + 3 = 123'
    },
    babylonian: {
        title: 'Babylonisches Sexagesimalsystem (Basis 60)',
        symbols: 'Zeichen:',
        wedgeOne: '1 (senkrechter Keil)',
        wedgeTen: '10 (waagerechter Keil)',
        wedgeZero: '0 oder leere Position',
        howItWorks: 'So funktioniert es:',
        howItWorksText: 'Zahlen werden in Positionen geschrieben. Jede Position weiter links ist 60x so viel wert (wie unsere Basis 10, nur eben Basis 60!).',
        example: 'Beispiel:',
        tip: 'Tipp: Zähle die Keile in jeder Position und multipliziere mit Potenzen von 60.'
    },
    chinese: {
        title: 'Chinesische Zählstäbchen / Suanpan-System',
        basicDigits: 'Grundziffern:',
        placeValues: 'Stellenwerte:',
        ten: 'zehn',
        hundred: 'hundert',
        thousand: 'tausend',
        tenThousand: 'zehntausend',
        tip: 'Tipp: Lies von links nach rechts. 三百五十二 = 3x100 + 5x10 + 2 = 352'
    },
    mayan: {
        title: 'Maya-Vigesimalsystem (Basis 20)',
        dot: 'Punkt',
        bar: 'Balken',
        shell: 'Muschel',
        max: 'Maximum = 19',
        tip: 'Tipp: Jede Position ist 20x so viel wert wie die darunter. Die Positionen stapeln sich senkrecht, die oberste ist die bedeutendste.'
    },
    'hindu-arabic': {
        title: 'Indisch-arabische Ziffern auf einen Blick',
        tip: 'Dieses Stellenwertsystem mit einer echten Null ist der Vorfahr der Zahlen, die wir heute benutzen.'
    }
},

// ── Kodex ────────────────────────────────────────────────────────────────────

codex: {
    roman: {
        title: 'Römische Zahlen',
        period: 'ca. 900 v. Chr. – 400 n. Chr.',
        region: 'Italienische Halbinsel, Römisches Reich',
        sections: [
            {
                heading: 'Ursprünge',
                text: 'Die römischen Zahlen entwickelten sich aus einem einfachen Kerbsystem der Etrusker und frühen Latiner. Die Zeichen I, V und X gehen vermutlich auf Kerben in Knochen oder Holz zurück: I ist ein einzelner Strich, V erinnert an eine Hand, und X sind zwei gekreuzte V.'
            },
            {
                heading: 'Subtraktive Schreibweise',
                text: 'Die Regel, dass ein kleineres Zeichen vor einem größeren Subtraktion bedeutet (IV = 4, IX = 9), war eine späte Verfeinerung. Frühere Römer schrieben oft IIII statt IV, und diese "ältere" Form findet sich bis heute auf vielen Zifferblättern.'
            },
            {
                heading: 'Grenzen',
                text: 'Römische Zahlen kennen weder die Null noch einen Stellenwert. Multiplikation und Division waren außerordentlich mühsam, was wohl erklärt, warum die Römer für ernsthaftes Rechnen den Abakus übernahmen. Große Zahlen wie 1.000.000 verlangten erfundene Zeichen, die kaum gebräuchlich waren.'
            },
            {
                heading: 'Nachleben',
                text: 'Römische Zahlen halten sich in Kapitelüberschriften, auf Zifferblättern, im Filmabspann und in den Namen von Monarchen und Päpsten. Super-Bowl-Ausgaben, Olympische Spiele und Grundsteine von Gebäuden nutzen sie weiterhin: 2.000 Jahre Präsenz im Alltag.'
            }
        ]
    },

    egyptian: {
        title: 'Ägyptische Hieroglyphenzahlen',
        period: 'ca. 3000 v. Chr. – 400 n. Chr.',
        region: 'Niltal, Nordafrika',
        sections: [
            {
                heading: 'Ein rein additives System',
                text: 'Die ägyptischen Zahlen nutzten für jede Zehnerpotenz eine eigene Hieroglyphe: einen Strich (1), einen Fersenknochen (10), ein aufgerolltes Seil (100), eine Lotosblüte (1.000), einen gekrümmten Finger (10.000), eine Kaulquappe (100.000) und einen Gott mit erhobenen Armen (1.000.000). Zahlen entstanden durch Wiederholen und Kombinieren dieser Zeichen: rein additiv, ohne Subtraktion und ohne Stellenwert.'
            },
            {
                heading: 'Der Papyrus Rhind',
                text: 'Der mathematische Papyrus Rhind (ca. 1550 v. Chr.) gehört zu den ältesten erhaltenen mathematischen Dokumenten. Er enthält 84 Aufgaben aus Arithmetik und Geometrie, darunter Stammbrüche, Flächenberechnungen und Volumenschätzungen. Die Ägypter rechneten ausschließlich mit Stammbrüchen (1/n), mit Ausnahme von 2/3.'
            },
            {
                heading: 'Pi und die Pyramide',
                text: 'Ägyptische Baumeister näherten π mit (16/9)² ≈ 3,16 an, mit einer Abweichung von weniger als 0,6 %. Die Maße der Cheops-Pyramide von Gizeh enthalten diesen Wert, wobei seit Jahrhunderten umstritten ist, ob das Absicht oder Zufall war.'
            },
            {
                heading: 'Die hieratische Schrift',
                text: 'Für den Alltag verwendeten die Ägypter "hieratische" Zahlzeichen, eine kursive Kurzform der Hieroglyphen, die schnelleres Schreiben auf Papyrus erlaubte. Das hieratische System nutzte eigene Zeichen für 1 bis 9 (nicht nur wiederholte Striche) und war dadurch deutlich kompakter.'
            }
        ]
    },

    greek: {
        title: 'Griechische Buchstabenzahlen',
        period: 'ca. 5. Jh. v. Chr. – byzantinische Zeit',
        region: 'Griechenland, Alexandria, östliches Mittelmeer',
        sections: [
            {
                heading: 'Das milesische System',
                text: 'Die griechischen Buchstabenzahlen (auch milesische oder ionische Zahlen genannt) ordneten den 24 Buchstaben des griechischen Alphabets Zahlenwerte zu, dazu drei altertümliche Buchstaben: Stigma/Digamma (6), Koppa (90) und Sampi (900). Das vollständige Alphabet stellte damit 1 bis 9, 10 bis 90 und 100 bis 900 dar.'
            },
            {
                heading: 'Hypatia von Alexandria',
                text: 'Hypatia (ca. 360–415 n. Chr.) war eine neuplatonische Philosophin und Mathematikerin, die die Werke von Diophant, Ptolemäus und Apollonios herausgab und lehrte. Sie war die letzte große Mathematikerin der antiken alexandrinischen Tradition. Ihre Ermordung durch einen christlichen Mob markierte das symbolische Ende der heidnischen Gelehrsamkeit in Alexandria.'
            },
            {
                heading: 'Diophant und die Algebra',
                text: 'Diophant von Alexandria (ca. 3. Jh. n. Chr.) verfasste die Arithmetika, 13 Bücher algebraischer Aufgaben, die den Grund legten für das, was Al-Chwarizmi später formalisierte. Seine Notation nutzte griechische Buchstabenzahlen und proto-algebraische Zeichen, was ihn zu einem der ersten Algebraiker der Geschichte macht.'
            },
            {
                heading: 'Der Mechanismus von Antikythera',
                text: 'Der Mechanismus von Antikythera (ca. 100 v. Chr.), ein antiker griechischer Himmelsrechner, sagte mit Zahnrädern Himmelsereignisse voraus. Seine Inschriften verwenden Buchstabenzahlen für Grade und Kalenderabschnitte und zeigen, wie fest diese Zeichen in anspruchsvollen wissenschaftlichen Geräten verankert waren.'
            }
        ]
    },

    babylonian: {
        title: 'Babylonische Keilschriftzahlen',
        period: 'ca. 2000–500 v. Chr.',
        region: 'Mesopotamien (heutiger Irak)',
        sections: [
            {
                heading: 'Basis 60: das Sexagesimalsystem',
                text: 'Die Babylonier nutzten ein Stellenwertsystem zur Basis 60 (sexagesimal), das ausgefeilteste Zahlensystem der antiken Welt. Warum 60? Weil es sich glatt durch 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 und 30 teilen lässt: mehr Teiler als jede kleinere Zahl. Das vereinfachte Brüche im Alltag.'
            },
            {
                heading: 'Das Erbe, das du täglich nutzt',
                text: 'Die Minute mit 60 Sekunden, die Stunde mit 60 Minuten, der Kreis mit 360 Grad und der Tag mit 24 Stunden stammen unmittelbar aus der babylonischen Mathematik. Jedes Mal, wenn du auf eine Uhr oder einen Kompass blickst, benutzt du ein 4.000 Jahre altes Zahlensystem.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 ist eine Tontafel aus der Zeit um 1800 v. Chr., die pythagoreische Tripel (ganzzahlige Lösungen von a² + b² = c²) auflistet, mehr als 1.000 Jahre vor Pythagoras. Die babylonischen Mathematiker verstanden rechtwinklige Dreiecke und quadratische Gleichungen gründlich.'
            },
            {
                heading: 'Stellenwert und die Null',
                text: 'Die Babylonier erfanden die Stellenwertschreibweise, bei der der Wert eines Zeichens von seiner Position abhängt. Sie schufen auch ein Platzhalterzeichen (⊙) für eine leere Stelle, den frühesten Vorläufer der Null. Als Zahl im Rechnen verwendeten sie die Null jedoch nie, nur als Trenner.'
            }
        ]
    },

    chinese: {
        title: 'Chinesische Stäbchenzahlen',
        period: 'ca. 400 v. Chr. – heute (traditionelle Formen)',
        region: 'China, Ostasien',
        sections: [
            {
                heading: 'Zählstäbchen',
                text: 'Chinesische Mathematiker legten Stäbchen aus Bambus oder Elfenbein auf ein Rechenbrett, um Zahlen darzustellen. Senkrechte Stäbchen (⌶) standen für die Einer 1 bis 5; für die 6 kam ein einzelnes waagerechtes Stäbchen (一) quer dazu. Der Wechsel der Ausrichtung von Spalte zu Spalte (senkrecht, dann waagerecht) verhinderte Verwechslungen benachbarter Ziffern, ein Vorläufer binären Denkens.'
            },
            {
                heading: 'Der Suanpan (Abakus)',
                text: 'Der chinesische Suanpan (算盤), entwickelt um das 2. Jh. v. Chr., beherrschte Addition, Subtraktion, Multiplikation, Division und Quadratwurzeln jahrhundertelang schneller als die europäische Rechnung mit Papier und Feder. Geübte Bediener hielten bei Grundrechenarten noch bei Wettbewerben bis 1946 mit elektronischen Rechnern mit.'
            },
            {
                heading: 'Negative Zahlen',
                text: 'Chinesische Mathematiker nutzten rote Stäbchen für positive und schwarze für negative Zahlen, der früheste bekannte Gebrauch negativer Zahlen beim Rechnen. Die Neun Kapitel der Rechenkunst (ca. 1. Jh. n. Chr.) enthalten Regeln für das Rechnen mit negativen Größen, über tausend Jahre bevor die europäische Mathematik sie akzeptierte.'
            },
            {
                heading: 'Die Neun Kapitel',
                text: 'Das Jiuzhang Suanshu (Neun Kapitel der Rechenkunst) ist ein grundlegender chinesischer Mathematiktext über praktische Aufgaben: Landvermessung, Verteilung von Ernten, Bauwesen und Steuern. Es beschreibt das gaußsche Eliminationsverfahren (Zeilenreduktion) zum Lösen von Gleichungssystemen, 1.800 Jahre vor Gauß.'
            }
        ]
    },

    mayan: {
        title: 'Vigesimale Maya-Zahlen',
        period: 'ca. 300 v. Chr. – spanische Eroberung (16. Jh.)',
        region: 'Mesoamerika (Mexiko, Guatemala, Belize)',
        sections: [
            {
                heading: 'Basis 20 und eine eigenständige Null',
                text: 'Die Maya entwickelten ein vigesimales Stellenwertsystem (Basis 20), senkrecht von unten nach oben geschrieben. Ihre Null, ein Muschelzeichen, war eine von nur zwei eigenständigen Erfindungen der Null in der Geschichte (die andere in Südasien). Die Maya-Null war nicht bloß ein Platzhalter, sondern eine Zahl, mit der gerechnet wurde.'
            },
            {
                heading: 'Das Kalendersystem der Maya',
                text: 'Der Maya-Kalender der Langen Zählung konnte jedes Datum in einem Zyklus von 5.125 Jahren (etwa 3114 v. Chr. bis 2012 n. Chr.) mit fünf Stellen angeben. Ihre astronomischen Berechnungen, vor allem zu den Venuszyklen (584 Tage) und den Mondmonaten, waren ohne Fernrohr auf Bogenminuten genau.'
            },
            {
                heading: 'Der Dresdner Kodex',
                text: 'Der Dresdner Kodex (ca. 900–1000 n. Chr.) ist ein vorkolumbisches Maya-Buch mit Venustafeln, die das Erscheinen des Planeten als Morgen- und Abendstern über 104 Jahre hinweg mit außergewöhnlicher Genauigkeit vorhersagen. Er ist einer von nur vier erhaltenen Maya-Kodizes; die übrigen wurden von spanischen Missionaren verbrannt.'
            },
            {
                heading: 'Punkte, Balken und Muscheln',
                text: 'Drei Zeichen kodieren alle Maya-Zahlen: ein Punkt (●) für 1, ein Balken (━) für 5 und eine Muschel (○) für 0. Die Eleganz dieses Systems, drei Zeichen für jede Zahl in Stellenwertordnung, ist eine mathematische Leistung höchsten Ranges, und sie entstand völlig unabhängig von der Mathematik der Alten Welt.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Indisch-arabische Ziffern',
        period: 'ca. 6. Jh. n. Chr. (Indien) → 9. Jh. n. Chr. (Bagdad) → 12. Jh. n. Chr. (Europa)',
        region: 'Indien → Persien → Bagdad → Mittelmeerraum → weltweit',
        sections: [
            {
                heading: 'Die größte mathematische Erfindung',
                text: 'Das indisch-arabische Zahlensystem, zehn Zeichen (0–9) in einem Stellenwertsystem zur Basis 10 mit einer echten Null, ist wohl die folgenreichste Erfindung der Mathematikgeschichte. Jede Zahl in Wissenschaft, Finanzwesen, Technik und Informatik nutzt heute dieses System, das direkt von den Brahmi-Ziffern des alten Indien abstammt.'
            },
            {
                heading: 'Al-Chwarizmi und das Haus der Weisheit',
                text: 'Muhammad ibn Musa al-Chwarizmi (ca. 780–850 n. Chr.) war ein persischer Mathematiker am Bayt al-Hikma (Haus der Weisheit) in Bagdad unter dem Abbasiden-Kalifat. Sein Buch Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (Das kurzgefasste Buch über das Rechnen durch Ergänzung und Ausgleich) schenkte uns das Wort "Algebra" (al-dschabr). Ein späteres Werk über indische Ziffern brachte das indisch-arabische System in die islamische Welt und über lateinische Übersetzungen nach Europa.'
            },
            {
                heading: 'Das Wort "Algorithmus"',
                text: 'Das Wort "Algorithmus" geht auf "Algoritmi" zurück, die latinisierte Form von Al-Chwarizmis Namen. Als lateinische Übersetzer seine Rechenverfahren mit indischen Ziffern beschrieben, betitelten sie ihre Werke mit "Algoritmi dixit ..." ("Al-Chwarizmi sagte ..."). Sein Name wurde zum Begriff für jedes schrittweise Rechenverfahren und schließlich zum Grundbegriff der Informatik.'
            },
            {
                heading: 'Europas langer Widerstand',
                text: 'Die indisch-arabischen Ziffern erreichten Europa im 12. und 13. Jahrhundert über Spanien und Italien. Händler liebten sie; Behörden fürchteten sie. Florenz verbot die Ziffern 1299, aus Sorge, die leichte Verwandlung der 0 in eine 6 oder 9 begünstige Betrug. Trotz des amtlichen Widerstands war die praktische Überlegenheit des Systems unbestreitbar, und es verdrängte die römischen Zahlen im Rechnen bereits in der Renaissance.'
            }
        ]
    }
},

// ── Über das Spiel ───────────────────────────────────────────────────────────

about: {
    intro: 'Mathematikos ist ein kostenloses, offenes Lernspiel von Guilherme Almeida Zeni. Diese Seite dokumentiert die Entstehung des Projekts (samt Zeitstempeln, die allen bekannten ähnlichen Produkten vorausgehen) und die Haltung dahinter.',

    creatorHeading: 'Der Entwickler',
    creatorText1: 'Guilherme ist Senior Software Engineer mit über 10 Jahren Erfahrung. Mathematikos entstand aus einer persönlichen Leidenschaft für Geschichte und Mathematik und aus der Überzeugung, dass es kein gutes kostenloses Browserspiel gibt, das antike Zahlensysteme als echtes Spielerlebnis vermittelt.',
    creatorText2: 'Das Spiel ist und bleibt kostenlos. Wenn es dir hilft, kannst du es freiwillig unterstützen.',

    whyHeading: 'Warum diese Zivilisationen?',
    whyLead: 'Jede Zivilisation wurde wegen ihrer mathematischen Eigenart und ihrer kulturellen Bedeutung gewählt:',
    whyItems: [
        { name: 'Römisch', text: 'Das vertrauteste antike System; ein sanfter Einstieg' },
        { name: 'Ägyptisch', text: 'Basis 10, aber völlig additiv; die bildhaften Hieroglyphen prägen sich ein' },
        { name: 'Griechisch', text: 'Buchstabenzahlen; eine einzigartige Brücke zwischen Sprache und Zahl' },
        { name: 'Babylonisch', text: 'Basis 60, sexagesimal; der Ursprung unserer Minute aus 60 Sekunden und des Kreises aus 360 Grad' },
        { name: 'Chinesisch', text: 'Zählstäbchen und Suanpan (Abakus); ein ausgefeiltes Stellenwertsystem' },
        { name: 'Maya', text: 'Basis 20, vigesimal; eine der wenigen eigenständigen Erfindungen der Null' },
        { name: 'Indisch-arabisch', text: 'Das große Finale, das System, das alle anderen vereinte und zu unseren heutigen Ziffern wurde' }
    ],

    timelineHeading: 'Zeitleiste der Entwicklung',
    timeline: [
        {
            date: 'Ende 2024',
            title: 'Die Idee entsteht',
            text: 'In einem ChatGPT-Gespräch mit dem Titel "Jogo de adição histórica" (portugiesisch für "Historisches Additionsspiel") nimmt das Konzept von Mathematikos Gestalt an: ein Browserspiel, das antike Zahlensysteme über Zeitreise-Aufgaben vermittelt. Der Name, die Liste der Zivilisationen und die beiden Spielmodi (Thematische Szenen und Zeitliche Herausforderungen) werden alle in dieser Sitzung festgelegt.'
        },
        {
            date: '19. Oktober 2024',
            title: 'Prototyp-Repository angelegt',
            text: 'Der erste Commit im Prototyp-Repository erfolgt um 22:21 Uhr (UTC-3). Achtzehn Minuten später wird ein umfassendes Konzeptdokument eingecheckt und am Folgetag veröffentlicht; es umfasst das vollständige Spielkonzept, die Erzählung, die Zivilisationen, die Mechaniken und den Technikplan. Dieses Dokument ist im Git-Verlauf kryptografisch mit Zeitstempel versehen.',
            proof: 'Erster Commit des Prototyps: e78660e, 19. Oktober 2024, 22:21 Uhr UTC-3'
        },
        {
            date: '21. Oktober bis 6. November 2024',
            title: 'Erster Prototyp gebaut',
            text: 'Ein lauffähiger Prototyp entsteht mit React, TypeScript, Vite und Phaser 3. Die Themenauswahl, WebGL-Shader je Zivilisation und die Einführungsszene werden umgesetzt. Die Entwicklung erstreckt sich über 19 Tage im Prototyp-Repository.'
        },
        {
            date: '2025',
            title: 'Brettspiel Mathematicus erscheint',
            text: 'Ein physisches Brettspiel namens Mathematicus erscheint und deckt das babylonische, ägyptische, chinesische, römische, Maya-, arabische und binäre Zahlensystem ab: ein unabhängig entstandenes, verwandtes Konzept. Mathematikos liegt mehr als ein Jahr davor, wie der Git-Verlauf von 2024 belegt. Die beiden Produkte ergänzen einander, statt zu konkurrieren: Mathematikos ist digital und kostenlos, Mathematicus physisch und kostenpflichtig.'
        },
        {
            date: '2025',
            title: 'Masterstudium in Angewandter Mathematik beginnt',
            text: 'Die Entwicklung von Mathematikos pausiert zugunsten der akademischen Arbeit. Das Projekt ruht, aber die Idee verschwindet nicht.'
        },
        {
            date: '15. Februar 2026',
            title: 'Neu gebaut in reinem HTML/CSS/JS',
            text: 'Mathematikos wird von Grund auf neu gebaut, als abhängigkeitsfreies Browserspiel in reinem HTML, CSS und ES6-JavaScript. Das Ziel: sofort spielbar, ohne Build-Schritt, auch offline. Die römische, ägyptische, griechische, babylonische und chinesische Zivilisation entstehen an einem einzigen Abend.'
        },
        {
            date: '23. März 2026',
            title: 'Maya-Zivilisation und große Erweiterung',
            text: 'Das vigesimale Maya-System (Basis 20) kommt hinzu, dazu vollständige SVG-Darstellung aller Zahlensysteme, eine Testsuite je Zivilisation, der Übungsmodus und umgekehrte Aufgaben (antike Zahlzeichen aus arabischen Zahlen schreiben). Der Code wird in eine klare Dateistruktur gegliedert.'
        },
        {
            date: '25. März 2026',
            title: 'Dunkelmodus und visueller Feinschliff',
            text: 'Der Dunkelmodus wird vollständig unterstützt, alle fest verdrahteten hellen Farben werden korrigiert. Inline-Stile werden in CSS-Klassen überführt. Das Spiel sieht nun in hellem wie in dunklem Design gut aus.'
        },
        {
            date: '25. März 2026',
            title: 'Indisch-arabische Zivilisation und volle Ausbaustufe',
            text: 'Die siebte und letzte Zivilisation kommt hinzu: die indisch-arabischen Ziffern aus dem Bagdad des 9. Jahrhunderts, die Ursprungsgeschichte des Zahlensystems, das wir heute nutzen. Die Tägliche Aufgabe, der Kodex (Enzyklopädie der Zivilisationen), die visuellen Themen je Zivilisation, Hintergrundgeräusche, Umrechnungsaufgaben zwischen Zivilisationen und die PWA (Offline-Spiel) erscheinen alle in einer einzigen Version.'
        }
    ],

    evidenceHeading: 'Belege und Herkunft',
    evidenceText: 'Das ursprüngliche ChatGPT-Gespräch von 2024 und der Commit-Verlauf des Prototyp-Repositorys belegen die unabhängige Entstehung. Das Prototyp-Repository wurde inzwischen archiviert.',
    evidenceAlt1: 'ChatGPT-Gespräch mit dem Titel "Jogo de adição histórica", Oktober 2024',
    evidenceCaption1: 'ChatGPT-Gespräch, "Jogo de adição histórica", Oktober 2024',
    evidenceAlt2: 'Prototyp-Repository mit dem ersten Commit vom 19. Oktober 2024',
    evidenceCaption2: 'Prototyp-Repository, erster Commit vom 19. Oktober 2024'
}

};

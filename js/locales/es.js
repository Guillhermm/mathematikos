// ===== ESPAÑOL =====
// Mirrors the key set of en.js exactly. tests/i18n.test.js fails on any key
// that is missing, extra, empty, or that drops a {placeholder}.

I18N_CATALOGS.es = {

ui: {
    document: {
        title: 'Mathematikos - Un viaje por los números antiguos',
        description: 'Viaja en el tiempo y resuelve desafíos matemáticos con sistemas numéricos antiguos.'
    },

    common: {
        backToMenu: '← Volver al menú',
        close: 'Cerrar'
    },

    // The two constant voices. A local speaker is named by the story.
    speakers: {
        oracle: 'El Oráculo de los Números',
        hypatia: 'Hipatia de Alejandría'
    },

    menu: {
        settings: 'Ajustes',
        subtitle: 'Un viaje por los sistemas numéricos antiguos',
        thematic: 'Escenas temáticas',
        temporal: 'Desafíos temporales',
        practice: 'Modo práctica',
        daily: 'Desafío diario',
        about: 'Acerca de y origen →'
    },

    civSelect: {
        title: 'Elige tu civilización',
        subtitle: 'Descubre los secretos matemáticos de los antiguos.',
        best: 'Récord: {score}'
    },

    difficulty: {
        easy: 'Fácil',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto'
    },

    story: {
        back: 'Atrás',
        openCodex: 'Abrir el códice',
        begin: 'Comenzar el desafío →',
        scene: 'La escena',
        challengeCount: '{count} desafíos'
    },

    game: {
        backToStory: 'Volver a la historia',
        toggleSound: 'Activar o desactivar el sonido ambiente',
        answerLabel: 'Tu respuesta',
        answerPlaceholder: 'Toca los símbolos de abajo',
        storyChip: 'Historia',
        guideChip: 'Guía',
        oraclePieces: 'Fragmentos del Oráculo reunidos:',
        hint: 'Ver pista',
        clear: 'Borrar',
        backspace: 'Atrás',
        submit: 'Responder',
        counter: 'Desafío {current}/{total}',
        sceneCounter: 'Desafío {current} de {total}',
        reversePrompt: 'Escribe en números {civ}',
        reverseSlot: 'Construye en números {civ}',
        reverseInput: 'Construye el número con el teclado de símbolos de arriba'
    },

    symbolPad: {
        separator: 'sep',
        position: 'pos'
    },

    feedback: {
        empty: '¡Construye una respuesta o escribe un número!',
        correct: '¡Correcto! +{points} puntos',
        incorrect: 'Incorrecto. ¡Inténtalo de nuevo!',
        incorrectTimed: 'Incorrecto. ¡Inténtalo de nuevo! (-10s)',
        incorrectReveal: '¡Casi! Respuesta: {answer} = {civAnswer}'
    },

    achievement: {
        rollTitle: '¡En racha!',
        rollText: '¡Tres respuestas correctas seguidas!',
        masterTitle: '¡Calculista maestro!',
        masterText: '¡Todos los desafíos completados!',
        penaltyTitle: '¡Penalización de tiempo!',
        penaltyText: '-10 segundos',
        streakTitle: '¡Racha de {count} días!',
        streakText: '¡Vuelve mañana para mantenerla!',
        dailyTitle: '¡Desafío diario completado!',
        dailyText: '¡Vuelve mañana para una nueva civilización!',
        unlockedTitle: '¡Nueva civilización desbloqueada!',
        unlockedText: '¡Ya puedes explorar {civ}!',
        allCompleteTitle: '¡Maestro de los números!',
        allCompleteText: '¡Has completado todas las civilizaciones! ¡Eres un verdadero Guardián de los Números!'
    },

    results: {
        title: '¡Desafío completado!',
        continue: 'Continuar el viaje →',
        openCodex: 'Abrir el códice',
        chooseAnother: 'Elegir otra',
        mainMenu: 'Menú principal',
        totalScore: 'Puntuación total',
        correctAnswers: 'Respuestas correctas',
        timeTaken: 'Tiempo empleado',
        oraclePieces: 'Fragmentos del Oráculo',
        hintsUsed: 'Pistas usadas',
        collectedTitle: '¡Fragmento del Oráculo recuperado!',
        collectedText: '¡Has recuperado un fragmento del Oráculo de los Números de {civ}!',
        collectedQuote: '"La sabiduría de los números trasciende el tiempo..."',
        timeUpTitle: '¡Se acabó el tiempo!',
        timeoutMessage: '¡Los Hijos del Tiempo han destruido los registros!',
        scoreAchieved: 'Puntuación obtenida',
        challengesCompleted: 'Desafíos completados',
        progress: 'Progreso',
        retryMessage: '¡No te rindas! Inténtalo otra vez para salvar el conocimiento de las civilizaciones antiguas.'
    },

    daily: {
        title: 'Desafío diario',
        streak: '¡Racha de {count} días!',
        startStreak: '¡Empieza tu racha hoy!',
        completedTitle: '¡Ya completaste el desafío de hoy!',
        completedText: 'Vuelve mañana para una nueva civilización.',
        description: 'El desafío de hoy usa el sistema numérico de {civ}. 5 preguntas, sin límite de tiempo. ¡Demuestra lo que has aprendido!',
        play: '▶ Jugar el desafío de hoy'
    },

    help: {
        title: 'Cómo jugar'
    },

    settings: {
        title: 'Ajustes',
        appearance: 'Apariencia',
        language: 'Idioma',
        system: 'Sistema',
        light: 'Claro',
        dark: 'Oscuro',
        note: 'El cambio de idioma se aplica de inmediato en todo el juego.'
    },

    crossCiv: {
        sceneTitle: 'Desafío de conversión entre épocas',
        context: 'Convierte este número {source} al sistema {target}.',
        hint: 'El valor es {value}. En {target}: {answer}',
        guideTitle: 'De {source} → A {target}',
        guideText: 'Usa el teclado de símbolos {target} de abajo para escribir tu respuesta.',
        slot: 'Construye en {target}',
        input: 'Construye el número {target} con el teclado de símbolos de arriba'
    },

    about: {
        title: 'Acerca de Mathematikos'
    }
},

// ── Civilizaciones ───────────────────────────────────────────────────────────

civ: {
    roman: {
        name: 'Imperio romano',
        description: 'Ayuda a los mercaderes del Foro Romano a calcular precios con números romanos.',
        numberSystem: 'Números romanos (I, V, X, L, C, D, M)'
    },
    egyptian: {
        name: 'Antiguo Egipto',
        description: 'Descifra los números jeroglíficos de las pirámides.',
        numberSystem: 'Números jeroglíficos egipcios'
    },
    greek: {
        name: 'Antigua Grecia',
        description: 'Calcula proporciones para construir templos.',
        numberSystem: 'Números alfabéticos griegos'
    },
    babylonian: {
        name: 'Babilonia',
        description: 'Usa el sistema sexagesimal para restaurar los Jardines Colgantes.',
        numberSystem: 'Sistema babilónico de base 60'
    },
    chinese: {
        name: 'Dinastía Han',
        description: 'Calcula con varillas de conteo en el mercado imperial.',
        numberSystem: 'Varillas de conteo chinas'
    },
    mayan: {
        name: 'Civilización maya',
        description: 'Descifra el sistema vigesimal de base 20 de los antiguos mayas.',
        numberSystem: 'Vigesimal maya (base 20)'
    },
    'hindu-arabic': {
        name: 'Casa de la Sabiduría',
        description: 'Descubre el sistema numérico que unificó a todos los demás, en el Bagdad del siglo IX.',
        numberSystem: 'Números indoarábigos (٠١٢٣٤٥٦٧٨٩)'
    }
},

// ── Historias ────────────────────────────────────────────────────────────────

stories: {
    thematic: {
        intro: [
            {
                quote: 'Encontraste la máquina en el templo. Bien. Llevaba mucho tiempo esperando a que alguien la encendiera.',
                text: 'Soy el Oráculo de los Números. Una vez fui completo y guardaba todas las formas en que la humanidad ha contado.'
            },
            {
                quote: 'Entonces me rompí, y mis fragmentos cayeron hacia atrás en el tiempo.',
                text: 'Cada civilización que visites guarda uno de mis fragmentos, aunque ninguna lo sabe. Solo conocen sus propios números, y necesitan que se cuenten correctamente.'
            },
            {
                quote: 'Ayúdalas, y el fragmento se soltará.',
                text: 'Recupera cada pieza y volveré a estar completo, y entenderás lo que yo entiendo: que todos estos sistemas son una misma pregunta formulada en siete idiomas.'
            }
        ],

        roman: {
            title: 'Romanos - Ayudando en el Foro Romano',
            setting: 'Llegas al bullicioso Foro Romano, rodeado de columnas de mármol, estatuas de emperadores y puestos de mercado llenos de mercancías. Un mercader te llama para pedirte ayuda.',
            objective: 'Ayuda a Marcus, un mercader de telas, a calcular precios y realizar transacciones con números romanos.',
            speaker: {
                name: 'Marcus el mercader',
                line: '¡Bienvenido, viajero! El Foro está muy concurrido hoy y necesito ayuda con mis cuentas. ¿Puedes ayudarme con estas transacciones?'
            },
            hypatia: {
                guidance: 'Los romanos construyeron su imperio sobre el orden, y el orden empieza por contar. Fíjate en cómo sus números reflejan sus valores: repetición para acumular, resta para dar elegancia. Empieza aquí, y el resto de la historia se abrirá ante ti.'
            }
        },

        egyptian: {
            title: 'Antiguo Egipto - Descifrando las pirámides',
            setting: 'Te materializas dentro de la Gran Pirámide de Guiza. Las antorchas parpadean sobre muros antiguos cubiertos de jeroglíficos misteriosos. El aire está cargado de incienso. Un escriba real te saluda con urgencia.',
            objective: 'Ayuda al escriba real a preparar el gran banquete del faraón calculando cantidades con números jeroglíficos egipcios.',
            speaker: {
                name: 'Imhotep el escriba',
                line: '¡Gran matemático! El banquete del faraón se acerca y debo asegurarme de que nuestras cuentas sean perfectas. Los jeroglíficos guardan las respuestas: ¿puedes descifrarlos?'
            },
            hypatia: {
                guidance: 'El sistema numérico de Egipto es milenios más antiguo que el de Roma. Cada símbolo es una potencia de diez: cuenta los jeroglíficos y suma sus valores. Los egipcios fueron los primeros en escribir números lo bastante grandes como para levantar maravillas. Camina entre sus símbolos con reverencia.'
            }
        },

        greek: {
            title: 'Antigua Grecia - Construyendo con proporciones',
            setting: 'Llegas a las obras del magnífico Partenón, en Atenas. Filósofos y arquitectos te rodean, discutiendo las proporciones divinas y las armonías matemáticas que harán eterno este templo.',
            objective: 'Ayuda al arquitecto maestro a calcular proporciones y medidas con números alfabéticos griegos para lograr una armonía geométrica perfecta.',
            speaker: {
                name: 'Arquímedes',
                line: '¡Ah, otro amante de las matemáticas! La proporción áurea debe guiar nuestra construcción. Estos cálculos exigen precisión. ¿Me ayudarás a resolverlos con nuestros números sagrados?'
            },
            hypatia: {
                guidance: 'Nací dentro de esta tradición griega de números alfabéticos, donde cada letra lleva un alma numérica. Mi propio trabajo partió de Diofanto, Ptolomeo y Euclides. En esta civilización pensarás como pensaban los griegos: cada símbolo es también una letra, y cada cálculo, una forma de poesía.'
            }
        },

        babylonian: {
            title: 'Babilonia - Restaurando los Jardines Colgantes',
            setting: 'Llegas a la antigua Babilonia, a los legendarios Jardines Colgantes, una de las Siete Maravillas. El complejo sistema de riego necesita un nuevo cálculo, y los ingenieros reales acuden a ti.',
            objective: 'Usa el sofisticado sistema babilónico de base 60 (sexagesimal) para calcular la distribución del agua y los recursos necesarios para mantener los jardines.',
            speaker: {
                name: 'Ingeniero jefe Nabu-rimanni',
                line: '¡Bienvenido, matemático! Nuestros antepasados crearon el sistema numérico más avanzado, ¡la base 60! Ayúdanos a calcular las medidas exactas para el riego de los jardines.'
            },
            hypatia: {
                guidance: 'Babilonia nos dio el minuto de sesenta segundos y el círculo de trescientos sesenta grados. Cuando miras un reloj o una brújula, piensas en babilonio. Su base 60 nace del número más divisible que conocía el mundo antiguo. Fíjate en los grupos de sesenta. Son el esqueleto del pensamiento de esta civilización.'
            }
        },

        chinese: {
            title: 'Dinastía Han - Calculando en el mercado imperial',
            setting: 'Llegas al bullicioso mercado de Chang\'an durante la dinastía Han. Los mercaderes llenan las calles vendiendo seda, especias, jade e incontables tesoros. Un maestro del ábaco te llama desde su puesto.',
            objective: 'Haz cálculos con las varillas de conteo chinas o con el suanpan (ábaco) para ayudar a los mercaderes en sus negocios y garantizar intercambios justos.',
            speaker: {
                name: 'Maestro Liu, experto en el ábaco',
                line: '¡Bienvenido, honorable calculista! Nuestros mercados rebosan de comercio. Usa el antiguo arte de las varillas para resolver las cuentas de estos mercaderes. ¡Cada transacción debe ser exacta!'
            },
            hypatia: {
                guidance: 'Los chinos desarrollaron un sistema decimal posicional de forma totalmente independiente de Occidente, y su suanpan (ábaco) superó durante siglos a la aritmética europea de papel y pluma. Lee los caracteres de izquierda a derecha: cada unidad nombrada (diez, cien, mil) ancla al dígito que la precede. La estructura es estricta, pero hermosa.'
            }
        },

        mayan: {
            title: 'Civilización maya - Secretos de la pirámide',
            setting: 'Llegas al amanecer a la magnífica pirámide de Chichén Itzá. Un astrónomo maya estudia las estrellas y usa su notable sistema numérico vigesimal para seguir los ciclos celestes con extraordinaria precisión.',
            objective: 'Ayuda al astrónomo Itzamná a calcular ofrendas y ciclos astronómicos con el sistema maya de base 20, hecho de puntos, barras y conchas.',
            speaker: {
                name: 'Astrónomo Itzamná',
                line: '¡Bienvenido, buscador del conocimiento! Nuestro sistema vigesimal, de base 20, guarda secretos del cosmos. Los puntos valen uno, las barras valen cinco y la concha representa el cero. ¿Puedes dominar nuestros números?'
            },
            hypatia: {
                guidance: 'De todos los sistemas numéricos que has encontrado, el maya es único. Inventaron el cero de forma independiente, no como marcador de posición, sino como número. Sus cálculos de calendario rivalizan con nuestros mejores programas astronómicos. Lee de arriba abajo; cada capa multiplica por veinte. La concha no es nada. Es todo.'
            }
        },

        'hindu-arabic': {
            title: 'Casa de la Sabiduría - El origen de nuestros números',
            setting: 'Llegas a la Bayt al-Hikma, la Casa de la Sabiduría, en el Bagdad del siglo IX. Eruditos de todo el mundo conocido llenan sus salas: matemáticos griegos, persas, indios y árabes trabajando codo con codo, traduciendo y ampliando el conocimiento humano. El propio Al-Juarismi te invita a su mesa de escritura.',
            objective: 'Trabaja junto a Al-Juarismi para verificar cálculos con el sistema posicional indoarábigo, el sistema que un día será el lenguaje universal de las matemáticas.',
            speaker: {
                name: 'Al-Juarismi',
                line: 'Bienvenido a la Casa de la Sabiduría. Los eruditos indios nos trajeron un regalo: nueve símbolos y un cero. Juntos pueden representar cualquier número del universo. Esto no es solo aritmética. Es una nueva forma de pensar. ¿Puedes dominar estos símbolos?'
            },
            hypatia: {
                guidance: 'Has viajado lejos, joven matemático. Has visto repetición en Egipto, resta en Roma, base 60 en Babilonia, alfabetos como números en Grecia, varillas en China y conchas en América. Todos son respuestas a la misma pregunta: ¿cómo representamos lo infinito con lo finito? Aquí, en Bagdad, la civilización humana encontró su respuesta más elegante. Estos nueve símbolos y un cero: ya los conoces. Pero ahora entenderás de dónde vienen.'
            }
        }
    },

    temporal: {
        intro: [
            {
                quote: 'Algo se está comiendo el registro, y avanza hacia atrás desde hoy.',
                text: 'Se hacen llamar los Hijos del Tiempo. Están borrando de la historia los sistemas numéricos antiguos, una civilización cada vez, empezando por la más vieja.'
            },
            {
                quote: 'Un sistema que ya nadie sabe leer es un sistema que nunca se inventó.',
                text: 'Así funciona el borrado. No quema nada. Solo espera a que desaparezca la última persona que entendía la notación.'
            },
            {
                quote: 'Así que léemelo de vuelta antes de que el registro se cierre.',
                text: 'Cada respuesta correcta devuelve un cálculo que ya se habían llevado. Trabajarás contra el reloj, porque ellos también lo hacen.'
            }
        ],

        roman: {
            title: 'Romanos - Emergencia en el Foro',
            setting: '¡El Foro Romano está en llamas! Los ciudadanos huyen presa del pánico. Debes ayudar a organizar la evacuación calculando rápidamente los suministros necesarios.',
            objective: 'Resuelve problemas de suma y resta para salvar registros y suministros valiosos antes de que el fuego los consuma.',
            note: { label: 'Tiempo restante', text: '¡Tienes 3 minutos para completar todos los desafíos!' }
        },

        egyptian: {
            title: 'Antiguo Egipto - Destrucción de la biblioteca',
            setting: '¡La gran Biblioteca de Alejandría se derrumba! Antiguos rollos de papiro con conocimiento matemático están a punto de perderse para siempre. Debes actuar rápido para salvarlos.',
            objective: '¡Descifra cálculos jeroglíficos y salva los preciosos registros matemáticos antes de que se conviertan en polvo!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2,5 minutos para salvar el conocimiento antiguo!' }
        },

        greek: {
            title: 'Antigua Grecia - Amenaza al conocimiento',
            setting: '¡La Academia de Platón está bajo ataque! Un incendio amenaza con destruir siglos de filosofía y conocimiento matemático. ¡Los rollos con la sabiduría de Pitágoras, Euclides y Arquímedes se están convirtiendo en cenizas!',
            objective: '¡Resuelve problemas matemáticos para salvar los textos más valiosos antes de que se pierdan para siempre!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2,5 minutos antes de que el conocimiento se pierda!' }
        },

        babylonian: {
            title: 'Babilonia - Crisis agrícola',
            setting: '¡Una sequía devastadora amenaza a Babilonia! Los antiguos sistemas de riego están fallando y los cultivos mueren. El conocimiento de los cálculos de distribución de agua se está apagando: ¡debes salvarlo!',
            objective: '¡Resuelve cálculos en base 60 para restaurar el riego y salvar a la ciudad del hambre!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2 minutos para salvar la agricultura de Babilonia!' }
        },

        chinese: {
            title: 'Dinastía Han - Caos en la corte imperial',
            setting: '¡La celebración de Año Nuevo del emperador está en peligro! Un error catastrófico en el presupuesto imperial amenaza con hundir las festividades. ¡Rivales están destruyendo antiguos registros contables!',
            objective: '¡Usa números chinos para resolver cálculos financieros y salvar la celebración más importante del año!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2 minutos para salvar la celebración imperial!' }
        },

        mayan: {
            title: 'Mayas - Erupción en Chichén Itzá',
            setting: '¡Una erupción volcánica amenaza la gran ciudad maya de Chichén Itzá! ¡Valiosas tablas de piedra con siglos de conocimiento matemático y astronómico están a punto de ser destruidas por la ceniza y la lava!',
            objective: '¡Resuelve cálculos en base 20 para salvar los registros matemáticos mayas antes de que la erupción lo destruya todo!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2 minutos para salvar el conocimiento maya!' }
        },

        'hindu-arabic': {
            title: 'Casa de la Sabiduría - La biblioteca sitiada',
            setting: '¡El avance mongol amenaza Bagdad! Los eruditos copian manuscritos frenéticamente antes de que caiga la ciudad. El sistema numérico indoarábigo, la herramienta matemática más poderosa que ha creado la humanidad, debe preservarse.',
            objective: '¡Resuelve cálculos con números indoarábigos para verificar y salvar los manuscritos matemáticos más importantes antes de que se acabe el tiempo!',
            note: { label: 'Tiempo restante', text: '¡Tienes 2 minutos para salvar el conocimiento de la Casa de la Sabiduría!' }
        }
    },

    practice: {
        roman: {
            title: 'Práctica - Números romanos',
            setting: 'Practica el sistema de números romanos a tu ritmo. Sin límite de tiempo, para que te centres en entender.',
            objective: 'Resuelve problemas con números romanos. Hay pistas disponibles y los errores muestran la respuesta correcta.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        egyptian: {
            title: 'Práctica - Jeroglíficos egipcios',
            setting: 'Explora los números jeroglíficos egipcios sin presión.',
            objective: 'Resuelve problemas con números egipcios. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        greek: {
            title: 'Práctica - Números alfabéticos griegos',
            setting: 'Estudia el sistema alfabético griego sin presión de tiempo.',
            objective: 'Resuelve problemas con números griegos. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        babylonian: {
            title: 'Práctica - Base 60 babilónica',
            setting: 'Explora el sistema sexagesimal babilónico a tu ritmo.',
            objective: 'Resuelve problemas en base 60. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        chinese: {
            title: 'Práctica - Números chinos',
            setting: 'Estudia las varillas de conteo chinas sin presión.',
            objective: 'Resuelve problemas con números chinos. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        mayan: {
            title: 'Práctica - Vigesimal maya',
            setting: 'Explora el sistema maya de base 20 a tu ritmo.',
            objective: 'Resuelve problemas en base 20. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        },
        'hindu-arabic': {
            title: 'Práctica - Números indoarábigos',
            setting: 'Explora las formas orientales de los números arábigo-índicos a tu ritmo.',
            objective: 'Resuelve problemas con dígitos arábigos orientales. Sin límite de tiempo.',
            note: { label: 'Modo práctica', text: 'Tómate tu tiempo. Las pistas son gratis y los errores muestran la respuesta correcta.' },
            hypatia: null
        }
    }
},

// ── Problemas ────────────────────────────────────────────────────────────────

challenge: {
    roman: {
        contexts: {
            plus: [
                'Marcus necesita calcular el coste total de {num1} codos de seda y {num2} codos de lino.',
                'Un cliente compra {num1} ánforas de vino y luego encarga {num2} más. ¿Cuántas son en total?',
                'El puesto tiene {num1} panes. Marcus recibe {num2} más. ¿Cuántos hay ahora?',
                'Calcula la suma de estas transacciones: {num1} denarios y {num2} denarios.',
                'Marcus cuenta {num1} clientes por la mañana y {num2} por la tarde. ¿Total de clientes?'
            ],
            minus: [
                'Marcus tenía {num1} codos de tela y hoy vendió {num2}. ¿Cuánto le queda?',
                'Un cliente quiere comprar {num1} ánforas de vino, pero devuelve {num2}. ¿Cuántas vende Marcus?',
                'El puesto tiene {num1} panes. Marcus vende {num2}. ¿Cuántos quedan?',
                'Calcula la diferencia de estas transacciones: {num1} denarios y {num2} denarios.',
                'Marcus contó {num1} clientes hoy, y {num2} de ellos solo miraron. ¿Cuántos compraron algo?'
            ]
        },
        hint: 'Descompón los números: {sym1} = {num1}, {sym2} = {num2}. Luego calcula: {num1} {operation} {num2} = {answer}'
    },

    egyptian: {
        contexts: {
            plus: [
                'El escriba real debe contar las ofrendas: {num1} panes y {num2} tarros de miel para el templo.',
                'Calcula el número de bloques de piedra: {num1} bloques más {num2} bloques para la construcción de la pirámide.',
                'El tesoro del faraón tiene {num1} piezas de oro. Añade {num2} piezas. ¿Cuál es el total?',
                'Cuenta los rollos de papiro de la biblioteca: {num1} rollos en un estante, suma {num2} de otro.',
                'Calcula las provisiones del banquete: {num1} raciones combinadas con {num2} raciones.'
            ],
            minus: [
                'El escriba real cuenta {num1} panes y envía {num2} al templo. ¿Cuántos quedan?',
                'Calcula el número de bloques de piedra: {num1} bloques menos {num2} bloques para la construcción de la pirámide.',
                'El tesoro del faraón tiene {num1} piezas de oro. Retira {num2} piezas. ¿Qué queda?',
                'Cuenta los rollos de papiro de la biblioteca: {num1} rollos en un estante, resta {num2} llevados a otro sitio.',
                'Calcula las provisiones del banquete: {num1} raciones reducidas en {num2} raciones.'
            ]
        },
        hint: 'Cuenta los símbolos: {sym1} = {num1}, {sym2} = {num2}. Calcula: {num1} {operation} {num2} = {answer}. ¡Cada símbolo representa una potencia de 10!'
    },

    greek: {
        contexts: {
            plus: [
                'El arquitecto debe calcular la proporción áurea para {num1} columnas más {num2} columnas del Partenón.',
                'Pitágoras te pide que resuelvas: si un lado mide {num1} unidades y añadimos {num2} unidades, ¿cuál es el resultado?',
                'Calcula la proporción: {num1} bloques de mármol combinados con {num2} bloques para la construcción del templo.',
                'El pergamino del filósofo muestra {num1} alumnos en la academia, y llegan {num2} más. Calcula el total.',
                'Armonía matemática: equilibra la ecuación de {num1} liras y {num2} flautas en el anfiteatro.'
            ],
            minus: [
                'El arquitecto debe calcular la proporción áurea para {num1} columnas menos {num2} columnas del Partenón.',
                'Pitágoras te pide que resuelvas: si un lado mide {num1} unidades y restamos {num2} unidades, ¿cuál es el resultado?',
                'Calcula la proporción: {num1} bloques de mármol reducidos en {num2} bloques para la construcción del templo.',
                'El pergamino del filósofo muestra {num1} alumnos en la academia, y {num2} de ellos se van. Calcula la diferencia.',
                'Armonía matemática: equilibra la ecuación de {num1} liras menos {num2} flautas en el anfiteatro.'
            ]
        },
        hint: 'Descifra las letras: {sym1} = {num1}, {sym2} = {num2}. Entonces: {num1} {operation} {num2} = {answer}. Recuerda: ¡cada letra griega representa un número concreto!'
    },

    babylonian: {
        contexts: {
            plus: [
                'El ingeniero real calcula la distribución del agua: {num1} medidas más {num2} medidas para los canales de riego.',
                'Calcula los recursos de los Jardines Colgantes: {num1} palmeras combinadas con {num2} cedros.',
                'El cálculo del astrónomo: {num1} observaciones celestes y {num2} posiciones de estrellas. Calcula el resultado.',
                'Reparto de agua para la agricultura: {num1} unidades sumadas a {num2} unidades para los campos.',
                'La construcción del templo necesita {num1} ladrillos de barro más {num2} bloques de piedra. Calcula el total.'
            ],
            minus: [
                'El ingeniero real calcula la distribución del agua: {num1} medidas menos {num2} medidas para los canales de riego.',
                'Calcula los recursos de los Jardines Colgantes: {num1} palmeras menos {num2} cedros talados.',
                'El cálculo del astrónomo: {num1} observaciones celestes menos {num2} noches nubladas. Calcula el resultado.',
                'Reparto de agua para la agricultura: {num1} unidades con {num2} unidades retiradas de los campos.',
                'La construcción del templo necesita {num1} ladrillos de barro menos {num2} rotos. Calcula cuántos sirven.'
            ]
        },
        hint: '¡Sistema de base 60! Cada posición vale 60x la anterior. {sym1} = {num1}, {sym2} = {num2}. Calcula: {num1} {operation} {num2} = {answer}. 𒐕=1, 𒌋=10'
    },

    chinese: {
        contexts: {
            plus: [
                'El mercader calcula: {num1} piezas de seda más {num2} piezas de algodón en el mercado de la dinastía Han.',
                'Calcula el tesoro imperial: {num1} taeles de plata combinados con {num2} taeles de oro.',
                'El maestro del ábaco pregunta: {num1} sacos de arroz y {num2} sacos de trigo. ¿Cuál es el resultado?',
                'Preparativos de la fiesta: {num1} farolillos sumados a {num2} dragones de papel. Calcula el total.',
                'Las varillas de conteo muestran: {num1} piezas de jade más {num2} monedas de bronce en el mercado.'
            ],
            minus: [
                'El mercader calcula: {num1} piezas de seda menos {num2} piezas vendidas en el mercado de la dinastía Han.',
                'Calcula el tesoro imperial: {num1} taeles de plata reducidos en {num2} taeles gastados.',
                'El maestro del ábaco pregunta: {num1} sacos de arroz menos {num2} sacos de trigo. ¿Cuál es el resultado?',
                'Preparativos de la fiesta: {num1} farolillos con {num2} retirados para repararlos. Calcula el total.',
                'Las varillas de conteo muestran: {num1} piezas de jade menos {num2} intercambiadas en el mercado.'
            ]
        },
        hint: '¡Sistema chino! {sym1} = {num1}, {sym2} = {num2}. Calcula: {num1} {operation} {num2} = {answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000'
    },

    mayan: {
        contexts: {
            plus: [
                'El astrónomo maya calcula: {num1} días más {num2} días en el sagrado calendario Tzolk\'in.',
                'Prepara ofrendas para Kukulcán: {num1} granos de cacao combinados con {num2} piezas de jade.',
                'El escriba registra la cosecha: {num1} mazorcas de maíz sumadas a {num2} calabazas de la milpa.',
                'Calcula los escalones de la pirámide: {num1} piedras más {num2} piedras para el siguiente nivel de Chichén Itzá.',
                'El mercader cuenta en el mercado de Tikal: {num1} plumas de quetzal y {num2} hojas de obsidiana.'
            ],
            minus: [
                'El astrónomo maya calcula: {num1} días menos {num2} días en el sagrado calendario Tzolk\'in.',
                'Prepara ofrendas para Kukulcán: {num1} granos de cacao menos {num2} que se regalaron.',
                'El escriba registra la cosecha: {num1} mazorcas de maíz menos {num2} calabazas intercambiadas de la milpa.',
                'Calcula los escalones de la pirámide: {num1} piedras menos {num2} piedras agrietadas en el transporte.',
                'El mercader cuenta en el mercado de Tikal: {num1} plumas de quetzal menos {num2} vendidas.'
            ]
        },
        hint: '¡Vigesimal maya (base 20)! Punto = 1, barra = 5, concha = 0. {sym1} = {num1}, {sym2} = {num2}. Calcula: {num1} {operation} {num2} = {answer}.'
    },

    'hindu-arabic': {
        contexts: {
            plus: [
                'Al-Juarismi anota dos medidas del observatorio: {num1} y {num2}. ¿Cuál es su suma?',
                'Un mercader del bazar de Bagdad tiene {num1} dírhams y recibe {num2} más. ¿Cuántos tiene ahora?',
                'La Casa de la Sabiduría cataloga {num1} manuscritos griegos y {num2} rollos persas. ¿Cuántos hay en total?',
                'Un astrónomo calcula {num1} grados para un arco y {num2} para otro. ¿Cuál es el arco total?',
                'Un traductor termina {num1} páginas por la mañana y {num2} por la noche. ¿Cuál es el total del día?'
            ],
            minus: [
                'Al-Juarismi anota dos medidas del observatorio: {num1} y {num2}. ¿Cuál es su diferencia?',
                'Un mercader del bazar de Bagdad tiene {num1} dírhams y gasta {num2}. ¿Cuántos quedan?',
                'La Casa de la Sabiduría cataloga {num1} manuscritos griegos y {num2} rollos persas. ¿Cuántos manuscritos griegos hay de más?',
                'Un astrónomo calcula {num1} grados para un arco y {num2} para otro. ¿Cuál es la diferencia?',
                'Un traductor termina {num1} páginas por la mañana y {num2} por la noche. ¿Cuál es la diferencia?'
            ]
        },
        hint: 'Estos son números arábigo-índicos orientales: {sym1} = {num1}, {sym2} = {num2}. Calcula: {num1} {operation} {num2} = {answer} → {answerNumeral}'
    }
},

// ── Guías rápidas ────────────────────────────────────────────────────────────

guide: {
    roman: {
        title: 'Referencia rápida de los números romanos',
        tip: 'Consejo: cuando un número menor va antes de uno mayor, se resta (por ejemplo, IV = 4, IX = 9)'
    },
    egyptian: {
        title: 'Números jeroglíficos egipcios',
        tip: 'Consejo: cuenta cada símbolo, multiplícalo por su valor y súmalo todo al final.'
    },
    greek: {
        title: 'Números alfabéticos griegos',
        tip: 'Consejo: las letras se combinan para formar números. ρκγ = 100 + 20 + 3 = 123'
    },
    babylonian: {
        title: 'Sistema sexagesimal babilónico (base 60)',
        symbols: 'Símbolos:',
        wedgeOne: '1 (cuña vertical)',
        wedgeTen: '10 (cuña horizontal)',
        wedgeZero: '0 o posición vacía',
        howItWorks: 'Cómo funciona:',
        howItWorksText: 'Los números se escriben en posiciones. Cada posición a la izquierda vale 60x más (como nuestra base 10, ¡pero en base 60!).',
        example: 'Ejemplo:',
        tip: 'Consejo: cuenta las cuñas de cada posición y multiplica por potencias de 60.'
    },
    chinese: {
        title: 'Varillas de conteo chinas / sistema suanpan',
        basicDigits: 'Dígitos básicos:',
        placeValues: 'Valores posicionales:',
        ten: 'diez',
        hundred: 'cien',
        thousand: 'mil',
        tenThousand: 'diez mil',
        tip: 'Consejo: lee de izquierda a derecha. 三百五十二 = 3x100 + 5x10 + 2 = 352'
    },
    mayan: {
        title: 'Sistema vigesimal maya (base 20)',
        dot: 'punto',
        bar: 'barra',
        shell: 'concha',
        max: 'máximo = 19',
        tip: 'Consejo: cada posición vale 20x la de abajo. Las posiciones se apilan en vertical, y la de arriba es la más significativa.'
    },
    'hindu-arabic': {
        title: 'Referencia rápida de los números indoarábigos',
        tip: 'Este sistema posicional, con un cero verdadero, es el antepasado de los números que usamos hoy.'
    }
},

// ── Códice ───────────────────────────────────────────────────────────────────

codex: {
    roman: {
        title: 'Números romanos',
        period: 'c. 900 a. C. – 400 d. C.',
        region: 'Península itálica, Imperio romano',
        sections: [
            {
                heading: 'Orígenes',
                text: 'Los números romanos evolucionaron a partir de un sencillo sistema de muescas usado por los etruscos y los primeros pueblos latinos. Los símbolos I, V y X derivan probablemente de marcas talladas en huesos o madera: I es un solo trazo, V recuerda a una mano y X son dos V cruzadas.'
            },
            {
                heading: 'Notación sustractiva',
                text: 'La regla de que un número menor colocado antes de uno mayor significa resta (IV = 4, IX = 9) fue un refinamiento tardío. Los romanos más antiguos escribían a menudo IIII en lugar de IV, y esa forma "antigua" sigue apareciendo hoy en muchas esferas de reloj.'
            },
            {
                heading: 'Limitaciones',
                text: 'Los números romanos no tienen cero ni noción de valor posicional. Multiplicar y dividir era extraordinariamente difícil, probablemente por eso los romanos adoptaron el ábaco para los cálculos serios. Números grandes como 1.000.000 requerían símbolos inventados, poco usados.'
            },
            {
                heading: 'Legado',
                text: 'Los números romanos siguen presentes en títulos de capítulos, esferas de reloj, créditos de películas y nombres de monarcas y papas. Las ediciones de la Super Bowl, los Juegos Olímpicos y las primeras piedras de los edificios aún los usan: una presencia de 2.000 años en la vida diaria.'
            }
        ]
    },

    egyptian: {
        title: 'Números jeroglíficos egipcios',
        period: 'c. 3000 a. C. – 400 d. C.',
        region: 'Valle del Nilo, norte de África',
        sections: [
            {
                heading: 'Un sistema puramente aditivo',
                text: 'Los números egipcios usaban jeroglíficos distintos para cada potencia de diez: un trazo (1), un hueso de talón (10), una cuerda enrollada (100), una flor de loto (1.000), un dedo doblado (10.000), un renacuajo (100.000) y un dios con los brazos alzados (1.000.000). Los números se formaban repitiendo y combinando estos símbolos: puramente aditivo, sin resta ni valor posicional.'
            },
            {
                heading: 'El papiro de Rhind',
                text: 'El papiro matemático de Rhind (c. 1550 a. C.) es uno de los documentos matemáticos más antiguos que existen. Contiene 84 problemas de aritmética y geometría, incluidas fracciones unitarias, cálculos de áreas y estimación de volúmenes. Los egipcios trabajaban exclusivamente con fracciones unitarias (1/n), salvo 2/3.'
            },
            {
                heading: 'Pi y la pirámide',
                text: 'Los ingenieros egipcios aproximaban π como (16/9)² ≈ 3,16, con un error inferior al 0,6%. Las dimensiones de la Gran Pirámide de Guiza codifican ese valor, aunque se lleva siglos debatiendo si fue deliberado o casual.'
            },
            {
                heading: 'Escritura hierática',
                text: 'Para la escritura cotidiana, los egipcios usaban números "hieráticos", una versión cursiva y abreviada de los jeroglíficos que permitía escribir más rápido sobre papiro. El sistema hierático usaba símbolos distintos para el 1 al 9 (no solo trazos repetidos), lo que lo hacía mucho más compacto.'
            }
        ]
    },

    greek: {
        title: 'Números alfabéticos griegos',
        period: 'c. siglo V a. C. – época bizantina',
        region: 'Grecia, Alejandría, Mediterráneo oriental',
        sections: [
            {
                heading: 'El sistema milesio',
                text: 'Los números alfabéticos griegos (también llamados milesios o jónicos) asignaban valores numéricos a las 24 letras del alfabeto griego, más tres letras arcaicas: estigma/digamma (6), qoppa (90) y sampi (900). El alfabeto completo representaba así del 1 al 9, del 10 al 90 y del 100 al 900.'
            },
            {
                heading: 'Hipatia de Alejandría',
                text: 'Hipatia (c. 360–415 d. C.) fue una filósofa neoplatónica y matemática que editó y enseñó a partir de las obras de Diofanto, Ptolomeo y Apolonio. Fue la última gran matemática de la tradición alejandrina antigua. Su asesinato a manos de una turba cristiana marcó el final simbólico de la erudición pagana en Alejandría.'
            },
            {
                heading: 'Diofanto y el álgebra',
                text: 'Diofanto de Alejandría (c. siglo III d. C.) escribió la Aritmética, 13 libros de problemas algebraicos que sentaron las bases de lo que Al-Juarismi formalizaría después. Su notación usaba números alfabéticos griegos y símbolos protoalgebraicos, lo que lo convierte en uno de los primeros algebristas de la historia.'
            },
            {
                heading: 'El mecanismo de Anticitera',
                text: 'El mecanismo de Anticitera (c. 100 a. C.), una calculadora astronómica griega antigua, usaba ruedas dentadas para predecir fenómenos celestes. Sus inscripciones emplean números alfabéticos para grados y divisiones de calendario, prueba de cómo estos símbolos estaban integrados en instrumentos científicos sofisticados.'
            }
        ]
    },

    babylonian: {
        title: 'Números cuneiformes babilónicos',
        period: 'c. 2000–500 a. C.',
        region: 'Mesopotamia (actual Irak)',
        sections: [
            {
                heading: 'Base 60: el sistema sexagesimal',
                text: 'Los babilonios usaban un sistema posicional de base 60 (sexagesimal), el más sofisticado del mundo antiguo. ¿Por qué 60? Porque se divide exactamente entre 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 y 30: más divisores que cualquier número menor. Eso simplificaba las fracciones en la vida diaria.'
            },
            {
                heading: 'El legado que usas cada día',
                text: 'El minuto de 60 segundos, la hora de 60 minutos, el círculo de 360 grados y el día de 24 horas descienden directamente de las matemáticas babilónicas. Cada vez que miras un reloj o una brújula, usas un sistema numérico de 4.000 años.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 es una tablilla de arcilla fechada hacia el 1800 a. C. que enumera ternas pitagóricas (soluciones enteras de a² + b² = c²) más de 1.000 años antes de Pitágoras. Los matemáticos babilónicos comprendían a fondo los triángulos rectángulos y las ecuaciones cuadráticas.'
            },
            {
                heading: 'Notación posicional y el cero',
                text: 'Los babilonios inventaron la notación posicional, en la que el valor de un símbolo depende de su posición. También crearon un símbolo marcador (⊙) para indicar un grupo posicional vacío, el precursor más antiguo del cero. Aun así, nunca usaron el cero como número en los cálculos, solo como separador.'
            }
        ]
    },

    chinese: {
        title: 'Varillas de conteo chinas',
        period: 'c. 400 a. C. – actualidad (formas tradicionales)',
        region: 'China, Asia oriental',
        sections: [
            {
                heading: 'Varillas de conteo',
                text: 'Los matemáticos chinos usaban varillas físicas de bambú o marfil dispuestas sobre un tablero para representar números. Las varillas verticales (⌶) representaban las unidades del 1 al 5; una sola varilla horizontal (一) se colocaba perpendicular para el 6. Alternar las orientaciones entre columnas (vertical, luego horizontal) evitaba confundir dígitos contiguos, un precursor del pensamiento binario.'
            },
            {
                heading: 'El suanpan (ábaco)',
                text: 'El suanpan chino (算盤), desarrollado hacia el siglo II a. C., podía sumar, restar, multiplicar, dividir y extraer raíces cuadradas más rápido que la aritmética europea de papel y pluma durante siglos. Los operadores expertos igualaban a las calculadoras electrónicas en operaciones básicas, en competiciones celebradas hasta 1946.'
            },
            {
                heading: 'Números negativos',
                text: 'Los matemáticos chinos usaban varillas rojas para los números positivos y negras para los negativos: el primer uso conocido de números negativos en el cálculo. Los Nueve capítulos sobre el arte matemático (c. siglo I d. C.) contienen reglas de aritmética con cantidades negativas, más de mil años antes de que las matemáticas europeas las aceptaran.'
            },
            {
                heading: 'Los Nueve capítulos',
                text: 'El Jiuzhang Suanshu (Nueve capítulos sobre el arte matemático) es un texto matemático chino fundamental que aborda problemas prácticos: medición de tierras, reparto de cosechas, ingeniería civil e impuestos. Describe la eliminación gaussiana (reducción por filas) para resolver sistemas de ecuaciones, 1.800 años antes de Gauss.'
            }
        ]
    },

    mayan: {
        title: 'Números vigesimales mayas',
        period: 'c. 300 a. C. – conquista española (siglo XVI)',
        region: 'Mesoamérica (México, Guatemala, Belice)',
        sections: [
            {
                heading: 'Base 20 y un cero independiente',
                text: 'Los mayas desarrollaron un sistema numérico posicional vigesimal (base 20), escrito en vertical de abajo arriba. Su cero, un símbolo de concha, fue una de las dos únicas invenciones independientes del cero en la historia (la otra se produjo en el sur de Asia). El cero maya no era solo un marcador de posición: era un número usado en los cálculos.'
            },
            {
                heading: 'El sistema calendárico maya',
                text: 'El calendario maya de Cuenta Larga podía especificar cualquier fecha dentro de un ciclo de 5.125 años (aproximadamente del 3114 a. C. al 2012 d. C.) con una notación de cinco dígitos. Sus cálculos astronómicos, en especial los ciclos de Venus (584 días) y los meses lunares, tenían una precisión de minutos de arco, sin telescopios.'
            },
            {
                heading: 'El Códice de Dresde',
                text: 'El Códice de Dresde (c. 900–1000 d. C.) es un libro maya precolombino con tablas de Venus que predicen las apariciones del planeta como lucero del alba y del atardecer a lo largo de 104 años con una precisión extraordinaria. Es uno de los cuatro únicos códices mayas que se conservan; el resto fue quemado por misioneros españoles.'
            },
            {
                heading: 'Puntos, barras y conchas',
                text: 'Tres símbolos codifican todos los números mayas: un punto (●) para el 1, una barra (━) para el 5 y una concha (○) para el 0. La elegancia de este sistema, tres símbolos para cualquier número dispuestos posicionalmente, es un logro matemático del más alto nivel, y surgió de forma completamente independiente de las matemáticas del Viejo Mundo.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Números indoarábigos',
        period: 'c. siglo VI d. C. (India) → siglo IX d. C. (Bagdad) → siglo XII d. C. (Europa)',
        region: 'India → Persia → Bagdad → Mediterráneo → Mundo',
        sections: [
            {
                heading: 'La mayor invención matemática',
                text: 'El sistema numérico indoarábigo, diez símbolos (0–9) en un sistema posicional de base 10 con un cero verdadero, es probablemente la invención de mayor impacto en la historia de las matemáticas. Todos los números de la ciencia, las finanzas, la ingeniería y la informática de hoy usan este sistema, descendiente directo de los números brahmi de la India antigua.'
            },
            {
                heading: 'Al-Juarismi y la Casa de la Sabiduría',
                text: 'Muhammad ibn Musa al-Juarismi (c. 780–850 d. C.) fue un matemático persa que trabajó en la Bayt al-Hikma (Casa de la Sabiduría) de Bagdad, bajo el califato abasí. Su libro Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (Compendio de cálculo por compleción y balanceo) nos dio la palabra "álgebra" (al-jabr). Una obra posterior sobre los números indios introdujo el sistema indoarábigo en el mundo islámico y, mediante traducciones latinas, en Europa.'
            },
            {
                heading: 'La palabra "algoritmo"',
                text: 'La palabra "algoritmo" deriva de "Algoritmi", la forma latinizada del nombre de Al-Juarismi. Cuando los traductores latinos describieron sus métodos de aritmética con números indios, titularon sus obras "Algoritmi dixit..." ("Al-Juarismi dijo..."). Su nombre pasó a designar cualquier procedimiento de cálculo paso a paso y, con el tiempo, el concepto fundacional de la informática.'
            },
            {
                heading: 'La larga resistencia de Europa',
                text: 'Los números indoarábigos llegaron a Europa por España e Italia en los siglos XII y XIII. A los mercaderes les encantaron; a las autoridades les dieron miedo. Florencia prohibió estos números en 1299, temiendo que la facilidad para convertir el símbolo 0 en un 6 o un 9 facilitara el fraude. Pese a la resistencia oficial, la superioridad práctica del sistema era innegable, y sustituyó a los números romanos en el cálculo ya en el Renacimiento.'
            }
        ]
    }
},

// ── Acerca de ────────────────────────────────────────────────────────────────

about: {
    intro: 'Mathematikos es un juego educativo gratuito y abierto creado por Guilherme Almeida Zeni. Esta página documenta el origen del proyecto (incluidas marcas de tiempo anteriores a todos los productos similares conocidos) y la filosofía que hay detrás.',

    creatorHeading: 'El creador',
    creatorText1: 'Guilherme es ingeniero de software sénior, con más de 10 años de experiencia. Mathematikos nació de una pasión personal por la historia y las matemáticas, y de la convicción de que no existe un buen juego de navegador gratuito que enseñe sistemas numéricos antiguos como una experiencia de juego de verdad.',
    creatorText2: 'El juego es y seguirá siendo gratuito. Si te resulta útil, considera apoyarlo voluntariamente.',

    whyHeading: '¿Por qué estas civilizaciones?',
    whyLead: 'Cada civilización fue elegida por su singularidad matemática y su importancia cultural:',
    whyItems: [
        { name: 'Romana', text: 'El sistema antiguo más conocido; un punto de partida suave' },
        { name: 'Egipcia', text: 'Base 10 pero totalmente aditivo; los jeroglíficos visuales lo hacen memorable' },
        { name: 'Griega', text: 'Números alfabéticos; un puente único entre lengua y número' },
        { name: 'Babilónica', text: 'Base 60, sexagesimal; el origen de nuestro minuto de 60 segundos y del círculo de 360 grados' },
        { name: 'China', text: 'Varillas de conteo y suanpan (ábaco); un sistema posicional sofisticado' },
        { name: 'Maya', text: 'Base 20, vigesimal; una de las pocas invenciones independientes del cero' },
        { name: 'Indoarábiga', text: 'El gran final, el sistema que unificó a todos los demás y se convirtió en nuestros números modernos' }
    ],

    timelineHeading: 'Cronología del desarrollo',
    timeline: [
        {
            date: 'Finales de 2024',
            title: 'Nace la idea',
            text: 'Durante una conversación en ChatGPT titulada "Jogo de adição histórica" (en portugués: "Juego de suma histórica"), toma forma el concepto de Mathematikos: un juego de navegador que enseña sistemas numéricos antiguos mediante desafíos de viaje en el tiempo. El nombre, la lista de civilizaciones y los dos modos de juego (Escenas temáticas y Desafíos temporales) se definen todos en esa sesión.'
        },
        {
            date: '19 de octubre de 2024',
            title: 'Se crea el repositorio del prototipo',
            text: 'El primer commit del repositorio del prototipo se hace a las 22:21 (UTC-3). Dieciocho minutos después se registra un documento de diseño completo, publicado al día siguiente, que cubre el concepto integral del juego, la narrativa, las civilizaciones, las mecánicas y el plan tecnológico. Ese documento tiene una marca de tiempo criptográfica en el historial de Git.',
            proof: 'Primer commit del prototipo: e78660e, 19 de octubre de 2024, 22:21 UTC-3'
        },
        {
            date: '21 de octubre a 6 de noviembre de 2024',
            title: 'Se construye el primer prototipo',
            text: 'Se desarrolla un prototipo funcional con React, TypeScript, Vite y Phaser 3. Se implementan el sistema de selección de temas, los shaders WebGL por civilización y la escena de introducción. El desarrollo abarca 19 días en el repositorio del prototipo.'
        },
        {
            date: '2025',
            title: 'Se publica el juego de mesa Mathematicus',
            text: 'Se publica un juego de mesa físico llamado Mathematicus, que cubre los sistemas numéricos babilónico, egipcio, chino, romano, maya, árabe y binario: un concepto convergente desarrollado de forma independiente. Mathematikos es más de un año anterior a esa publicación, como demuestra el historial de Git de 2024. Los dos productos son complementarios, no competidores: Mathematikos es digital y gratuito; Mathematicus es físico y de pago.'
        },
        {
            date: '2025',
            title: 'Comienza el máster en Matemática Aplicada',
            text: 'El desarrollo de Mathematikos se pausa para dar espacio al trabajo académico. El proyecto descansa, pero la idea no desaparece.'
        },
        {
            date: '15 de febrero de 2026',
            title: 'Reconstruido en HTML/CSS/JS puros',
            text: 'Mathematikos se reconstruye desde cero como un juego de navegador sin dependencias, en HTML, CSS y JavaScript ES6 puros. El objetivo: jugar al instante, sin paso de compilación, funcionando sin conexión. Las civilizaciones romana, egipcia, griega, babilónica y china se implementan en una sola noche.'
        },
        {
            date: '23 de marzo de 2026',
            title: 'Civilización maya y gran expansión',
            text: 'Se añade el sistema vigesimal maya (base 20), junto con renderizado completo en SVG para todos los sistemas numéricos, una batería de pruebas por civilización, el Modo práctica y los desafíos inversos (escribir números antiguos a partir de cifras arábigas). El código se modulariza en una estructura de archivos limpia.'
        },
        {
            date: '25 de marzo de 2026',
            title: 'Modo oscuro y pulido visual',
            text: 'Se añade soporte completo para el modo oscuro, corrigiendo todos los colores claros fijados en el código. Los estilos en línea se reescriben como clases CSS. El juego luce bien tanto en tema claro como oscuro.'
        },
        {
            date: '25 de marzo de 2026',
            title: 'Civilización indoarábiga y expansión completa',
            text: 'Se añade la séptima y última civilización: los números indoarábigos del Bagdad del siglo IX, la historia de origen del sistema numérico que usamos hoy. El Desafío diario, el Códice (enciclopedia de civilizaciones), los temas visuales por civilización, el sonido ambiente, los desafíos de conversión entre civilizaciones y la PWA (juego sin conexión) se publican todos en una sola versión.'
        }
    ],

    evidenceHeading: 'Pruebas y procedencia',
    evidenceText: 'La conversación original de 2024 en ChatGPT y el historial de commits del repositorio del prototipo documentan un origen independiente. El repositorio del prototipo se ha archivado desde entonces.',
    evidenceAlt1: 'Conversación de ChatGPT titulada "Jogo de adição histórica", octubre de 2024',
    evidenceCaption1: 'Conversación de ChatGPT, "Jogo de adição histórica", octubre de 2024',
    evidenceAlt2: 'Repositorio del prototipo mostrando el primer commit del 19 de octubre de 2024',
    evidenceCaption2: 'Repositorio del prototipo, primer commit del 19 de octubre de 2024'
}

};

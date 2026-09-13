import { AIPower } from './powers';

export interface PowerLocaleData {
  title: string;
  originalTitleLabel?: string;
  objective: string;
  applicationContext?: string;
  practicalExample?: string;
  expectedBenefits?: string[];
  input?: string;
  process?: string;
  output?: string;
  timeNeeded?: string;
  groupSize?: string;
  cases?: string[];
}

export const CATEGORY_TRANSLATIONS: Record<string, { en: string; es: string }> = {
  'Gerar Ideias & Inovação': {
    en: 'Generate Ideas & Innovation',
    es: 'Generar Ideas e Innovación'
  },
  'Revelar & Diagnosticar': {
    en: 'Reveal & Diagnose',
    es: 'Revelar y Diagnosticar'
  },
  'Estratégia & Propósito': {
    en: 'Strategy & Purpose',
    es: 'Estrategia y Propósito'
  },
  'Colaboração & Ajuda': {
    en: 'Collaboration & Help',
    es: 'Colaboración y Ayuda'
  },
  'Ação & Convergência': {
    en: 'Action & Convergence',
    es: 'Acción y Convergencia'
  },
  'Conectar & Aquecer': {
    en: 'Connect & Warm-up',
    es: 'Conectar y Calentar'
  }
};

export const POWERS_LOCALIZATION: Record<string, { en: PowerLocaleData; es: PowerLocaleData }> = {
  '1': {
    en: {
      title: '1-2-4-All',
      objective: 'Simultaneously engage 100% of participants in generating ideas, questions, and suggestions in rapid, inclusive cycles.',
      applicationContext: 'Use whenever you need to hear every voice in a group without letting leaders or extroverts monopolize the conversation.',
      practicalExample: 'When mapping initiatives onto the Ecocycle, each person reflects in silence for 1 min, compares in pairs for 2 min, gathers in fours for 4 min, and shares insights in plenary.',
      expectedBenefits: ['100% active participation.', 'Equal weight given to quiet voices and leaders.', 'Rapid convergence without endless debates.'],
      input: 'A focused, provocative question.',
      process: '1 min individual silence ➔ 2 min in pairs ➔ 4 min in groups of four ➔ 5 min plenary harvesting.',
      output: 'Validated, resilient ideas ready for the next facilitation step.',
      timeNeeded: '12-15 min',
      groupSize: 'Any group size (from 4 to 500+ people)',
      cases: ['Ecocycle portfolio brainstorming', 'Retrospective problem exploration', 'Post-presentation Q&A']
    },
    es: {
      title: '1-2-4-Todos (1-2-4-All)',
      objective: 'Involucrar simultáneamente al 100% de los participantes en la generación de ideas, preguntas y sugerencias en ciclos rápidos e inclusivos.',
      applicationContext: 'Úselo siempre que necesite escuchar todas las voces de un grupo sin permitir que los líderes o extrovertidos monopolicen la palabra.',
      practicalExample: 'Al ubicar iniciativas en el Ecociclo, cada uno reflexiona en silencio durante 1 min, compara en parejas durante 2 min, agrupa en cuartetos durante 4 min y comparte en plenario.',
      expectedBenefits: ['Participación activa del 100% de los asistentes.', 'Mismo peso para voces tímidas y directivos.', 'Rápida convergencia sin debates agotadores.'],
      input: 'Una pregunta disparadora clara y enfocada.',
      process: '1 min reflexión individual ➔ 2 min en parejas ➔ 4 min en cuartetos ➔ 5 min cosecha colectiva.',
      output: 'Ideas robustas y consensuadas listas para la siguiente estructura.',
      timeNeeded: '12-15 min',
      groupSize: 'Cualquier tamaño (de 4 a 500+ personas)',
      cases: ['Lluvia de ideas para el Ecociclo', 'Diagnóstico en retrospectivas', 'Rondas de preguntas post-presentación']
    }
  },
  '2': {
    en: {
      title: 'Impromptu Networking',
      objective: 'Rapidly connect participants, align expectations, and foster empathy in 3 dynamic rounds of paired conversations.',
      applicationContext: 'Ideal for opening sessions, breaking silos between departments, and raising collective physical and emotional energy.',
      practicalExample: 'Before starting Ecocycle Planning, invite 50 leaders to meet 3 different colleagues in 5-minute rounds to share their greatest hope and concern for the year.',
      expectedBenefits: ['Builds rapid psychological safety.', 'Connects people who rarely interact.', 'Aligns focus and common purpose.'],
      input: 'Two prompt questions (e.g. an aspiration and a challenge).',
      process: '3 consecutive rounds of 4-5 minutes each in pairs with different partners.',
      output: 'High engagement, reduced formal barriers, and shared expectations.',
      timeNeeded: '15-20 min',
      groupSize: '8 to hundreds of participants',
      cases: ['Kick-offs and strategic alignments', 'Cross-departmental summits', 'Pre-Ecocycle icebreaker']
    },
    es: {
      title: 'Networking Espontáneo (Impromptu Networking)',
      objective: 'Conectar rápidamente a los participantes, alinear expectativas y crear empatía en 3 rondas dinámicas de conversaciones en parejas.',
      applicationContext: 'Ideal para abrir talleres, derribar silos departamentales y elevar la energía física y emocional colectiva.',
      practicalExample: 'Antes de iniciar el Ecocycle Planning, invite a 50 líderes a dialogar en 3 rondas de 5 minutos en parejas sobre sus mayores anhelos y temores del año.',
      expectedBenefits: ['Genera seguridad psicológica inmediata.', 'Conecta a personas que rara vez interactúan.', 'Alinea el foco y el propósito común.'],
      input: 'Dos preguntas guía (ej. una aspiración y un desafío inmediato).',
      process: '3 rondas sucesivas de 4-5 minutos en parejas con diferentes personas.',
      output: 'Alta energía, barreras jerárquicas reducidas y expectativas claras.',
      timeNeeded: '15-20 min',
      groupSize: 'De 8 a cientos de participantes',
      cases: ['Apertura de talleres estratégicos', 'Integración de equipos multidisciplinarios', 'Calentamiento antes del Ecociclo']
    }
  },
  '3': {
    en: {
      title: '9 Whys',
      objective: 'Uncover the core, non-negotiable purpose of an initiative, team, or organization through successive progressive questioning.',
      applicationContext: 'Essential when teams disagree on priorities or when projects lack clear strategic anchorage on the Ecocycle.',
      practicalExample: 'Ask in pairs: "Why is our portfolio review important to you?" Repeat "Why?" 5 to 9 times until touching the vital reason for existing.',
      expectedBenefits: ['Unambiguous clarity on mission.', 'Unifies disparate agendas into common ground.', 'Guides hard decisions on what to keep or discard.'],
      input: 'An opening statement of what the team currently does.',
      process: 'Pairs interview each other with sequential "Why does that matter?" questions (5-10 min each), followed by group consolidation.',
      output: 'A concise core purpose statement guiding all strategic choices.',
      timeNeeded: '20-30 min',
      groupSize: 'Any size',
      cases: ['Strategic planning foundation', 'Prioritizing initiatives on the Ecocycle', 'Resolving conflicting team visions']
    },
    es: {
      title: '9 Porqués (9 Whys)',
      objective: 'Descubrir el propósito esencial e innegociable de una iniciativa, equipo u organización mediante preguntas sucesivas en profundidad.',
      applicationContext: 'Fundamental cuando el equipo no coincide en prioridades o cuando los proyectos carecen de anclaje estratégico claro en el Ecociclo.',
      practicalExample: 'En parejas pregunte: "¿Por qué es importante para ti esta revisión de proyectos?" Repita "¿Por qué?" hasta llegar a la razón vital de existir.',
      expectedBenefits: ['Claridad absoluta sobre la misión común.', 'Unifica agendas dispares en un propósito compartido.', 'Guía decisiones difíciles sobre qué conservar o podar.'],
      input: 'Una declaración inicial de lo que el equipo hace hoy.',
      process: 'Entrevistas en parejas preguntando sucesivamente "¿Por qué eso importa?" (5-10 min cada uno), seguido de consolidación.',
      output: 'Una declaración concisa de propósito que guía las elecciones del Ecociclo.',
      timeNeeded: '20-30 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Alineación de visión estratégica', 'Definición de criterios para el Ecociclo', 'Resolución de conflictos de objetivos']
    }
  },
  '4': {
    en: {
      title: 'Wicked Questions',
      objective: 'Articulate paradoxes and contradictory demands that cannot be solved by simple either/or decisions.',
      applicationContext: 'Use when teams are polarized between two seemingly irreconcilable realities (e.g. innovation vs. standard governance).',
      practicalExample: '"How can we foster aggressive experimental agility on the Ecocycle while maintaining strict regulatory compliance?"',
      expectedBenefits: ['Dismantles false dichotomies.', 'Replaces blame with creative tension.', 'Deepens strategic maturity.'],
      input: 'Two opposing organizational realities.',
      process: 'Generate paradoxes in 1-2-4-All using the formula: "How is it that we are... and at the same time we must...?"',
      output: 'Wicked questions that sharpen debate without creating conflict.',
      timeNeeded: '25-35 min',
      groupSize: 'Any size',
      cases: ['Navigating centralization vs. local autonomy', 'Balancing speed and quality', 'Addressing cultural dilemmas']
    },
    es: {
      title: 'Preguntas Paradójicas (Wicked Questions)',
      objective: 'Articular paradojas y demandas contradictorias que no admiten soluciones simplistas de "o esto o aquello".',
      applicationContext: 'Úselo cuando los equipos estén polarizados entre dos realidades legítimas pero opuestas (ej. agilidad vs. control).',
      practicalExample: '"¿Cómo podemos impulsar la experimentación ágil en el Ecociclo y al mismo tiempo mantener un estricto cumplimiento regulatorio?"',
      expectedBenefits: ['Supera falsas dicotomías.', 'Transforma culpas en tensión creativa productiva.', 'Eleva la madurez estratégica del grupo.'],
      input: 'Dos realidades organizacionales en tensión.',
      process: 'Generación con 1-2-4-Todos bajo la fórmula: "¿Cómo podemos ser... y al mismo tiempo ser...?"',
      output: 'Preguntas paradójicas que profundizan el análisis del Ecociclo.',
      timeNeeded: '25-35 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Tensión entre autonomía local y control central', 'Equilibrio entre velocidad y precisión', 'Dilemas de asignación de recursos']
    }
  },
  '5': {
    en: {
      title: '15% Solutions',
      objective: 'Focus attention immediately on what each individual has the freedom, authority, and resources to do without needing external approval.',
      applicationContext: 'Crucial for rescuing initiatives stuck in the Poverty Trap, eliminating helplessness, and reawakening agency.',
      practicalExample: 'After positioning stuck projects, each person writes down: "What can I do tomorrow with my 15% discretionary freedom to move this needle?"',
      expectedBenefits: ['Restores immediate agency.', 'Bypasses budget and bureaucratic excuses.', 'Generates quick momentum.'],
      input: 'A stuck project or complex challenge.',
      process: 'Individual writing of 15% actions (5 min) ➔ Sharing and enriching in small groups or Troika Consulting.',
      output: 'A concrete list of immediate personal commitments.',
      timeNeeded: '15-20 min',
      groupSize: 'Individuals in groups of 2 to 4',
      cases: ['Rescuing projects from the Poverty Trap', 'Post-Ecocycle action planning', 'Overcoming organizational inertia']
    },
    es: {
      title: 'Soluciones al 15% (15% Solutions)',
      objective: 'Enfocar la atención inmediatamente en lo que cada persona tiene libertad, autoridad y recursos propios para hacer sin pedir permiso.',
      applicationContext: 'Fundamental para rescatar iniciativas atrapadas en la Trampa de la Pobreza, eliminando excusas y recuperando protagonismo.',
      practicalExample: 'Luego de mapear proyectos trabados, cada uno escribe: "¿Qué puedo hacer mañana con mi 15% de autonomía para destrabar esto?"',
      expectedBenefits: ['Devuelve el sentido de agencia individual.', 'Elimina la parálisis por falta de presupuesto.', 'Crea impulso y tracción inmediata.'],
      input: 'Un proyecto trabado o desafío complejo.',
      process: 'Reflexión y redacción individual (5 min) ➔ Compartir y enriquecer en grupos pequeños o Troika.',
      output: 'Compromisos de acción inmediata sin dependencia de terceros.',
      timeNeeded: '15-20 min',
      groupSize: 'Individual en grupos de 2 a 4',
      cases: ['Salida de la Trampa de la Pobreza', 'Compromisos post-Ecociclo', 'Superación de burocracia paralizante']
    }
  },
  '6': {
    en: {
      title: 'Troika Consulting',
      objective: 'Give and receive practical, rapid peer consultation in trios where the client listens with their back turned to prevent defensiveness.',
      applicationContext: 'Ideal for leaders with projects trapped in the Poverty Trap who need fresh perspectives from colleagues in short cycles.',
      practicalExample: 'In trios, each person takes turns as Client (1 min pitch, 1 min clarifying questions, 4 min listening to peers discuss, 1 min recap).',
      expectedBenefits: ['Deep, non-defensive listening.', 'Taps collective intelligence rapidly.', 'Fosters mutual coaching culture.'],
      input: 'A personal challenge formulated with clarity.',
      process: '3 rounds of 10 min each, rotating roles so all three participants act as client and consultants.',
      output: 'Actionable recommendations and reinforced peer collaboration.',
      timeNeeded: '30-35 min',
      groupSize: 'Trios (any total group size divisible by 3)',
      cases: ['Refining 15% Solutions', 'Troubleshooting bottlenecked initiatives', 'Peer coaching and leadership mentoring']
    },
    es: {
      title: 'Consultoría Troika (Troika Consulting)',
      objective: 'Dar y recibir asesoramiento práctico y rápido en tríos donde el cliente escucha de espaldas para evitar respuestas defensivas.',
      applicationContext: 'Ideal para líderes con iniciativas atascadas en la Trampa de la Pobreza que necesitan la mirada fresca de sus pares.',
      practicalExample: 'En tríos, cada integrante toma turno como Cliente (1 min expone, 1 min preguntas de claridad, 4 min escucha a colegas conversar, 1 min agradece).',
      expectedBenefits: ['Escucha empática y cero reactividad.', 'Aprovechamiento inmediato del saber colectivo.', 'Cultura de apoyo mutuo entre colegas.'],
      input: 'Un desafío personal concreto.',
      process: '3 rondas de 10 min en tríos, rotando roles para que todos sean clientes.',
      output: 'Nuevas opciones de acción y fortalecimiento de alianzas entre pares.',
      timeNeeded: '30-35 min',
      groupSize: 'Tríos (grupos de cualquier tamaño divisible por 3)',
      cases: ['Enriquecer Soluciones al 15%', 'Destrabar proyectos del Ecociclo', 'Coaching entre pares sin jerarquías']
    }
  },
  '7': {
    en: {
      title: 'Wise Crowds',
      objective: 'Tap the wisdom of a larger group (4-8 peers) to consult a client on a systemic, complex challenge.',
      applicationContext: 'Used when a project faces multifaceted hurdles across tech, finance, and operations that require a diverse advisory council.',
      practicalExample: 'A project leader presents their challenge to a group of 6 peers, then turns around while the group consults and generates options.',
      expectedBenefits: ['Multidisciplinary consultation.', 'Broad perspective on systemic risks.', 'Structured advice without endless meetings.'],
      input: 'A complex, cross-functional challenge statement.',
      process: 'Client presentation (2 min) ➔ Clarifying questions (3 min) ➔ Crowd discussion with client listening (7 min) ➔ Client takeaway (2 min).',
      output: 'Rich, multi-angle advisory recommendations.',
      timeNeeded: '20-30 min per client',
      groupSize: 'Groups of 5 to 9 people',
      cases: ['Complex cross-team project review', 'Portfolio pivot advisory', 'Executive strategic dilemma consultation']
    },
    es: {
      title: 'Multitudes Sabias (Wise Crowds)',
      objective: 'Aprovechar la sabiduría de un grupo consultivo mayor (4 a 8 colegas) para asesorar a un cliente en un desafío sistémico.',
      applicationContext: 'Útil cuando un proyecto enfrenta trabas multifacéticas que involucran tecnología, operaciones y negocio a la vez.',
      practicalExample: 'Un líder expone su dilema a 6 colegas, luego se da vuelta y escucha cómo el grupo debate alternativas sin poder intervenir.',
      expectedBenefits: ['Consultoría multidisciplinaria amplia.', 'Visión sistémica de riesgos e impactos.', 'Ahorro de meses de reuniones de comité.'],
      input: 'Un dilema complejo con múltiples frentes.',
      process: 'Presentación (2 min) ➔ Preguntas de aclaración (3 min) ➔ Debate del grupo con cliente de espaldas (7 min) ➔ Cierre del cliente (2 min).',
      output: 'Recomendaciones diversas y complementarias listas para ejecutar.',
      timeNeeded: '20-30 min por cliente',
      groupSize: 'Grupos de 5 a 9 personas',
      cases: ['Revisión de proyectos sistémicos', 'Validación de giros de portafolio', 'Desafíos de integración institucional']
    }
  },
  '8': {
    en: {
      title: 'TRIZ (Creative Destruction / Stop Contraproductive Behaviors)',
      objective: 'Make space for innovation and creative destruction by daring to design the worst possible outcome, confronting counterproductive habits with humor.',
      applicationContext: 'Essential for breaking the Rigidity Trap before Ecocycle Planning, clearing out obsolete rituals and sacred cows without defensiveness.',
      practicalExample: '1. "How can we guarantee our portfolio review completely fails?" 2. "What are we currently doing that resembles this list?" 3. "What will we stop doing tomorrow?"',
      expectedBenefits: ['Dismantles denial through shared laughter.', 'Identifies taboos and wasteful habits.', 'Legitimizes Creative Destruction.'],
      input: 'A process, service, or routine that needs radical renewal.',
      process: 'Design worst outcome in 1-2-4-All ➔ Check against current reality ➔ Decide what to stop doing.',
      output: 'A firm list of stop-doing commitments that frees immediate capacity.',
      timeNeeded: '35-45 min',
      groupSize: 'Any size',
      cases: ['Breaking out of the Rigidity Trap', 'Pruning obsolete corporate reporting', 'Opening honest conversations before Ecocycle']
    },
    es: {
      title: 'TRIZ (Destrucción Creativa / Parar lo Contraproducente)',
      objective: 'Abrir espacio a la innovación mediante el diseño del peor resultado posible, enfrentando hábitos contraproducentes con humor y franqueza.',
      applicationContext: 'Esencial para romper la Trampa de la Rigidez antes del Ecociclo, eliminando vacas sagradas y ritos obsoletos sin resentimientos.',
      practicalExample: '1. "¿Cómo asegurar que nuestra revisión de portafolio sea un fracaso total?" 2. "¿Qué de esto hacemos hoy?" 3. "¿Qué dejaremos de hacer?"',
      expectedBenefits: ['Rompe la negación mediante la risa compartida.', 'Identifica tabúes y desperdicios de energía.', 'Legitima la Destrucción Creativa.'],
      input: 'Un proceso o rutina que requiere renovación profunda.',
      process: 'Diseñar el peor resultado ➔ Confrontar con la práctica actual ➔ Decidir qué suspender.',
      output: 'Lista explícita de cosas que dejar de hacer de inmediato.',
      timeNeeded: '35-45 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Salida de la Trampa de la Rigidez', 'Poda de reportes y comités obsoletos', 'Preparación para el Ecocycle Planning']
    }
  },
  '9': {
    en: {
      title: 'Discovery & Action Dialogue (DAD)',
      objective: 'Discover and spread positive deviance practices that already work in the frontline despite system constraints.',
      applicationContext: 'When a challenge seems intractable and formal guidelines fail, discover what frontline staff do differently to succeed.',
      practicalExample: 'Convene nurses and assistants to answer 7 guiding questions about how they avoid infections without waiting for new budgets.',
      expectedBenefits: ['Surfaces invisible local solutions.', 'Validates frontline expertise.', 'Avoids top-down impositions.'],
      input: 'A persistent, stubborn challenge.',
      process: 'Facilitate the 7 DAD questions in small groups to map existing ingenious workarounds and commit to scaling them.',
      output: 'Locally tested practices adopted organically by peers.',
      timeNeeded: '45-60 min',
      groupSize: '10 to 30 participants',
      cases: ['Infection control & safety protocols', 'Customer service breakthroughs', 'Field sales best practices']
    },
    es: {
      title: 'Diálogo de Descubrimiento y Acción (DAD)',
      objective: 'Descubrir y difundir prácticas de desviación positiva que ya funcionan en la línea de frente a pesar de las limitaciones del sistema.',
      applicationContext: 'Cuando un problema parece intratable y los manuales fallan, identifique qué hacen diferente quienes ya logran el éxito en el terreno.',
      practicalExample: 'Reúna al equipo operativo para responder 7 preguntas sobre cómo resuelven cuellos de botella sin esperar aprobaciones.',
      expectedBenefits: ['Saca a la luz soluciones locales invisibles.', 'Empodera a los colaboradores operativos.', 'Evita soluciones forzadas de arriba hacia abajo.'],
      input: 'Un problema recurrente y complejo.',
      process: '7 preguntas estructuradas en grupos pequeños para identificar prácticas ingeniosas y adoptarlas.',
      output: 'Soluciones reales y probadas en la práctica diaria.',
      timeNeeded: '45-60 min',
      groupSize: '10 a 30 participantes',
      cases: ['Mejora continua en operaciones', 'Atención al cliente en primera línea', 'Optimización de procesos de campo']
    }
  },
  '10': {
    en: {
      title: 'Shift & Share',
      objective: 'Quickly share several innovations, skills, or portfolio initiatives across a large group without boring sequential presentations.',
      applicationContext: 'Perfect for rotating participants through multiple Ecocycle initiatives to build cross-functional understanding in parallel.',
      practicalExample: 'Set up 6 stations in the room. Groups rotate every 10 minutes, receiving a 5-min demo and 5-min Q&A at each stop.',
      expectedBenefits: ['Replaces long PowerPoint sessions.', 'Enables dialogue with every presenter.', 'Equal exposure for all projects.'],
      input: 'Multiple projects, tools, or ideas to showcase.',
      process: 'Station set up ➔ Groups rotate simultaneously every 10-12 min across all stations.',
      output: 'High information density, cross-pollination, and shared organizational context.',
      timeNeeded: '45-90 min',
      groupSize: '20 to 100+ participants',
      cases: ['Portfolio showcase of Ecocycle initiatives', 'Tool onboarding and tech showcases', 'Internal demo days']
    },
    es: {
      title: 'Rotar y Compartir (Shift & Share)',
      objective: 'Compartir rápidamente diversas innovaciones o iniciativas de portafolio sin aburridas presentaciones secuenciales en podio.',
      applicationContext: 'Ideal para que los participantes conozcan múltiples iniciativas del Ecociclo de forma ágil y en paralelo.',
      practicalExample: 'Instale 6 estaciones en la sala. Los grupos rotan cada 10 min, recibiendo 5 min de explicación y 5 min de diálogo en cada parada.',
      expectedBenefits: ['Elimina presentaciones monótonas.', 'Permite interactuar directamente con los creadores.', 'Misma visibilidad para todas las iniciativas.'],
      input: 'Varias iniciativas o innovaciones a divulgar.',
      process: 'Grupos pequeños rotan de manera sincronizada por todas las mesas de presentación.',
      output: 'Comprensión holística del portafolio en tiempo récord.',
      timeNeeded: '45-90 min',
      groupSize: '20 a 100+ participantes',
      cases: ['Feria de proyectos del Ecociclo', 'Intercambio de mejores prácticas', 'Capacitación en nuevas herramientas']
    }
  },
  '11': {
    en: {
      title: 'What, So What, Now What? (W3)',
      objective: 'Debrief events, data, and Ecocycle maps rigorously in three sequential stages: observed facts (What?), meanings (So What?), and action decisions (Now What?).',
      applicationContext: 'The ideal closing structure for Ecocycle Planning to prevent jumping to shallow conclusions without shared sensemaking.',
      practicalExample: '1. "What did we see on our Ecocycle map?" 2. "So what does this mean for our strategy?" 3. "Now what concrete steps will we take?"',
      expectedBenefits: ['Prevents premature decisions.', 'Separates objective evidence from assumptions.', 'Creates disciplined collective intelligence.'],
      input: 'A completed experience, map, or crisis data.',
      process: 'Step 1 (What?) in 1-2-4-All ➔ Step 2 (So What?) in 1-2-4-All ➔ Step 3 (Now What?) in 1-2-4-All.',
      output: 'A shared debrief and validated action plan.',
      timeNeeded: '30-45 min',
      groupSize: 'Any size',
      cases: ['Post-Ecocycle Planning sensemaking', 'Sprint retrospectives', 'Post-incident analysis']
    },
    es: {
      title: '¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3)',
      objective: 'Procesar experiencias y mapas del Ecociclo en tres etapas rigurosas: hechos observables (¿Qué?), interpretaciones (¿Y entonces qué?) y decisiones de acción (¿Ahora qué?).',
      applicationContext: 'La estructura ideal para cerrar sesiones de Ecocycle Planning, evitando sacar conclusiones apresuradas sin análisis compartido.',
      practicalExample: '1. "¿Qué observamos en el mapa del Ecociclo?" 2. "¿Y entonces qué implicaciones tiene esto?" 3. "¿Ahora qué acciones concretas tomaremos?"',
      expectedBenefits: ['Evita decisiones precipitadas.', 'Distingue hechos objetivos de opiniones personales.', 'Genera planes de acción compartidos y sólidos.'],
      input: 'Una experiencia vivida, datos o un mapa de Ecociclo.',
      process: 'Paso 1 (¿Qué?) con 1-2-4-Todos ➔ Paso 2 (¿Y entonces qué?) ➔ Paso 3 (¿Ahora qué?).',
      output: 'Diagnóstico compartido y compromisos claros de ejecución.',
      timeNeeded: '30-45 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Cierre reflexivo del Ecocycle Planning', 'Retrospectivas de equipo', 'Evaluación de proyectos y crisis']
    }
  },
  '12': {
    en: {
      title: 'Ecocycle Planning',
      objective: 'Map and balance a portfolio of initiatives across developmental phases (Gestation, Birth, Maturity, Creative Destruction) and identify the Poverty and Rigidity Traps.',
      applicationContext: 'The central backbone for holistic portfolio management, avoiding stagnation in outdated success and nurturing new growth.',
      practicalExample: 'Position 40 company initiatives on the infinity diagram, diagnosing projects starved of resources (Poverty Trap) or stuck in bureaucratic habits (Rigidity Trap).',
      expectedBenefits: ['Reveals systemic portfolio imbalances.', 'Destigmatizes sunsetting outdated initiatives.', 'Identifies where to channel organizational energy.'],
      input: 'A comprehensive list of activities, projects, and products.',
      process: 'Individual placement ➔ Small group consensus ➔ Plenary mapping on infinity loop ➔ Targeted String interventions.',
      output: 'A transparent, living strategic roadmap.',
      timeNeeded: '60-120 min',
      groupSize: '8 to 100+ participants',
      cases: ['Strategic portfolio review', 'Resource reallocation', 'Continuous organizational renewal']
    },
    es: {
      title: 'Planificación Ecociclo (Ecocycle Planning)',
      objective: 'Mapear y balancear el portafolio de iniciativas en sus fases de desarrollo (Gestación, Nacimiento, Madurez, Destrucción Creativa) e identificar las Trampas de Pobreza y Rigidez.',
      applicationContext: 'La estructura central para la gestión viva del portafolio, evitando quedarse anclado en éxitos del pasado y sembrando nuevas apuestas.',
      practicalExample: 'Ubicar 40 proyectos en el diagrama en infinito, detectando iniciativas sin recursos (Trampa de la Pobreza) o procesos hipertrofiados (Trampa de la Rigidez).',
      expectedBenefits: ['Visión sistémica del equilibrio del portafolio.', 'Desestigmatiza el fin de ciclos obsoletos.', 'Clarifica hacia dónde dirigir los recursos.'],
      input: 'Inventario completo de proyectos y rutinas.',
      process: 'Mapeo individual ➔ Validación en grupos pequeños ➔ Plenario sobre el infinito ➔ Diseño de Strings para intervenir.',
      output: 'Mapa estratégico integral y vivo de la organización.',
      timeNeeded: '60-120 min',
      groupSize: '8 a 100+ participantes',
      cases: ['Revisión anual de portafolio', 'Desbloqueo de cuellos de botella organizacionales', 'Alineación estratégica de liderazgo']
    }
  },
  '13': {
    en: {
      title: '25/10 Crowd Sourcing',
      objective: 'Rapidly generate and democratically score the top 10 boldest ideas from a large group in just 25 minutes using anonymous peer review.',
      applicationContext: 'Ideal for replenishing the Gestation quadrant on the Ecocycle when the company needs fresh breakthrough ideas.',
      practicalExample: 'Ask 70 people: "If you had unlimited resources, what daring initiative would you launch?" Exchange cards to music across 5 scoring rounds.',
      expectedBenefits: ['Unearths radical ideas in minutes.', 'Zero bias from hierarchy or charisma.', 'High energy and fun.'],
      input: 'A bold, provocative challenge question.',
      process: 'Write idea & first step on card ➔ Mill and exchange cards ➔ Score 1-5 across 5 rounds ➔ Tally scores (max 25) and countdown top 10.',
      output: 'The top-rated ideas scored by collective consensus.',
      timeNeeded: '25-30 min',
      groupSize: '25 to 500+ participants',
      cases: ['Seeding the Gestation phase of the Ecocycle', 'Innovation hackathons', 'All-hands brainstorming']
    },
    es: {
      title: '25/10 Crowd Sourcing',
      objective: 'Generar y seleccionar democráticamente las 10 ideas más audaces de un grupo grande en solo 25 minutos mediante puntuación anónima entre pares.',
      applicationContext: 'Excelente para nutrir la fase de Gestación del Ecociclo cuando el portafolio carece de apuestas de futuro.',
      practicalExample: 'Pregunte a 70 personas: "¿Qué iniciativa audaz lanzarías si no hubiera trabas?" Intercambie tarjetas con música en 5 rondas de votación.',
      expectedBenefits: ['Genera y prioriza ideas en tiempo récord.', 'Cero sesgo jerárquico o de popularidad.', 'Dinamismo lúdico y alta energía colectiva.'],
      input: 'Una pregunta audaz que invite a soñar en grande.',
      process: 'Escribir idea en tarjeta ➔ Intercambio continuo con música ➔ Calificar de 1 a 5 en 5 rondas ➔ Contabilizar y revelar el Top 10.',
      output: 'Las mejores ideas priorizadas con legitimidad colectiva.',
      timeNeeded: '25-30 min',
      groupSize: '25 a 500+ participantes',
      cases: ['Alimentar la Gestación en el Ecociclo', 'Festivales de innovación', 'Desbloqueo creativo en asambleas']
    }
  },
  '14': {
    en: {
      title: 'Conversation Café',
      objective: 'Engage in deep, calm dialogue on difficult or emotionally charged topics using a talking object and disciplined rounds.',
      applicationContext: 'Use when Creative Destruction causes organizational grief, anger, or anxiety that requires a safe, unhurried space to process.',
      practicalExample: 'In circles of 5, pass a talking object to reflect on the impact of discontinuing a legacy product without arguing or cross-talk.',
      expectedBenefits: ['Creates genuine psychological safety.', 'Slows down reactive debates.', 'Enables vulnerable, authentic sharing.'],
      input: 'A profound, sensitive question.',
      process: 'Round 1 (sharing thoughts) ➔ Round 2 (deepening impressions) ➔ Round 3 (open dialogue with talking object) ➔ Round 4 (takeaways).',
      output: 'Shared emotional resolution and mutual understanding.',
      timeNeeded: '45-60 min',
      groupSize: 'Circles of 5 to 7 participants',
      cases: ['Processing organizational change and layoffs', 'Navigating ethical dilemmas', 'Post-merger cultural integration']
    },
    es: {
      title: 'Café de Conversación (Conversation Café)',
      objective: 'Sostener un diálogo profundo y sereno sobre temas difíciles o cargados de emoción utilizando un objeto de la palabra y rondas disciplinadas.',
      applicationContext: 'Útil cuando la Destrucción Creativa genera luto organizacional, incertidumbre o roces que demandan escucha sin debates agresivos.',
      practicalExample: 'En círculos de 5, pasen un objeto para reflexionar sobre el cierre de una línea histórica sin interrupciones.',
      expectedBenefits: ['Garantiza seguridad psicológica real.', 'Desacelera la reactividad y las discusiones acaloradas.', 'Fomenta la vulnerabilidad y la empatía.'],
      input: 'Una pregunta reflexiva sobre un tema delicado.',
      process: 'Ronda 1 (primeras impresiones) ➔ Ronda 2 (profundización) ➔ Ronda 3 (diálogo abierto con objeto) ➔ Ronda 4 (aprendizajes).',
      output: 'Alivio emocional compartido y comprensión mutua.',
      timeNeeded: '45-60 min',
      groupSize: 'Círculos de 5 a 7 personas',
      cases: ['Acompañamiento en reestructuraciones', 'Diálogo sobre temas tabú', 'Integración cultural post-cambio']
    }
  },
  '15': {
    en: {
      title: 'User Experience Fishbowl',
      objective: 'Share firsthand frontline experiences with a large audience in an authentic, conversational inner circle while others listen attentively.',
      applicationContext: 'Ideal for bringing real user, patient, or employee experiences directly to leadership teams reviewing the Ecocycle.',
      practicalExample: '3 customers and a moderator sit in an inner ring discussing real service pain points, while 40 executives listen in an outer ring.',
      expectedBenefits: ['Transmits raw frontline truth to executives.', 'Fosters deep listening without defensive interruptions.', 'Humanizes data.'],
      input: 'Direct lived experience of users or frontline workers.',
      process: 'Inner circle conversation (15-20 min) ➔ Outer circle reflects in pairs ➔ Empty chair invitations for audience questions.',
      output: 'Unvarnished customer insight guiding strategic reallocation.',
      timeNeeded: '45-60 min',
      groupSize: '15 to 100+ participants',
      cases: ['Customer experience immersions', 'Employee voice in strategic planning', 'Cross-hierarchy dialogue']
    },
    es: {
      title: 'Pecera de Experiencia del Usuario (UX Fishbowl)',
      objective: 'Compartir vivencias auténticas de la primera línea en un círculo interior íntimo mientras una audiencia mayor escucha con atención.',
      applicationContext: 'Ideal para conectar a directores con la realidad del cliente o colaborador antes de tomar decisiones en el Ecociclo.',
      practicalExample: '3 clientes y un moderador conversan en el centro sobre sus dolores reales, mientras 40 líderes escuchan alrededor en silencio.',
      expectedBenefits: ['Lleva la voz cruda de la realidad a la alta dirección.', 'Fomenta la escucha activa sin justificaciones defensivas.', 'Humaniza métricas y diagnósticos.'],
      input: 'Experiencias vividas de usuarios o colaboradores.',
      process: 'Conversación en círculo interno (15-20 min) ➔ Reflexión en parejas afuera ➔ Silla vacía para preguntas del público.',
      output: 'Empatía genuina y aprendizajes clave para orientar el portafolio.',
      timeNeeded: '45-60 min',
      groupSize: '15 a 100+ personas',
      cases: ['Diagnóstico de experiencia de cliente', 'Voz del colaborador en asambleas', 'Alineación de producto con el mercado']
    }
  },
  '16': {
    en: {
      title: 'Appreciative Interviews (AI)',
      objective: 'Uncover success stories and positive core practices that allow teams to thrive at their best.',
      applicationContext: 'Use when a team is demoralized or trapped in cynicism, to remind them of their inherent strengths before tackling the Ecocycle.',
      practicalExample: 'Interview a colleague for 7 minutes: "Tell me about a time when this team overcame an enormous obstacle and produced something extraordinary."',
      expectedBenefits: ['Reignites motivation and self-worth.', 'Identifies replicable success patterns.', 'Builds collaborative goodwill.'],
      input: 'Stories of triumph and peak performance.',
      process: 'Paired reciprocal interviews ➔ Identify common success factors ➔ Synthesize strengths in plenary.',
      output: 'A catalog of organic strengths that fuel new initiatives in Gestation.',
      timeNeeded: '40-60 min',
      groupSize: 'Any size',
      cases: ['Team revitalization and morale reboot', 'Culture assessment', 'Kick-starting new ventures with confidence']
    },
    es: {
      title: 'Entrevistas Apreciativas (Appreciative Interviews)',
      objective: 'Descubrir historias de éxito y factores positivos que permiten a las personas y equipos alcanzar su máximo potencial.',
      applicationContext: 'Ideal cuando el equipo está desmotivado o atrapado en el desánimo, rescatando sus fortalezas antes del Ecociclo.',
      practicalExample: 'Entreviste a un colega: "Cuéntame un momento en que nuestro equipo superó un gran obstáculo y logró algo asombroso."',
      expectedBenefits: ['Reaviva el orgullo y la confianza colectiva.', 'Identifica patrones de éxito transferibles.', 'Genera optimismo realista.'],
      input: 'Relatos de momentos de máxima efectividad.',
      process: 'Entrevistas cruzadas en parejas ➔ Análisis de elementos comunes en cuartetos ➔ Síntesis en plenario.',
      output: 'Un mapa de capacidades esenciales para impulsar la Gestación.',
      timeNeeded: '40-60 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Motivación y recomposición de equipo', 'Construcción de cultura positiva', 'Lanzamiento de proyectos inspiradores']
    }
  },
  '17': {
    en: {
      title: 'Social Network Webbing',
      objective: 'Visually map informal connections, discover cross-departmental silos, and build bridges to accelerate resource flow.',
      applicationContext: 'Essential after Ecocycle Planning to pinpoint which relationships must be built to move projects from Gestation to Birth.',
      practicalExample: 'Draw the organization as a network map on a wall, identifying who holds critical knowledge and where isolated silos exist.',
      expectedBenefits: ['Makes hidden informal influence visible.', 'Pinpoints single points of failure.', 'Guides smart cross-team connections.'],
      input: 'Names of people, teams, and key external partners.',
      process: 'Map current connections ➔ Identify missing bridges ➔ Commit to specific relationship-building actions.',
      output: 'An actionable relational map that speeds up project execution.',
      timeNeeded: '45-60 min',
      groupSize: '10 to 60 participants',
      cases: ['Overcoming departmental silos', 'Accelerating cross-functional projects', 'Network-centric governance']
    },
    es: {
      title: 'Mapeo de Redes Sociales (Social Network Webbing)',
      objective: 'Mapear visualmente las conexiones informales, descubrir silos y tender puentes estratégicos para agilizar recursos.',
      applicationContext: 'Fundamental tras el Ecociclo para identificar qué lazos deben crearse para que los proyectos pasen de Gestación a Nacimiento.',
      practicalExample: 'Dibuje en una pared la red de relaciones de la organización, identificando quién tiene conocimiento clave y dónde hay islas aisladas.',
      expectedBenefits: ['Visibiliza redes informales de influencia.', 'Detecta dependencias ocultas y cuellos de botella.', 'Promueve puentes interdepartamentales.'],
      input: 'Grupos, personas clave y aliados estratégicos.',
      process: 'Trazar la red actual ➔ Identificar desconexiones ➔ Definir acciones para construir puentes.',
      output: 'Mapa de relaciones operativas que viabiliza los proyectos.',
      timeNeeded: '45-60 min',
      groupSize: '10 a 60 participantes',
      cases: ['Derribar silos organizacionales', 'Acelerar iniciativas transversales', 'Diseño de gobernanza ágil']
    }
  },
  '18': {
    en: {
      title: 'Helping Heuristics',
      objective: 'Practice 4 progressive ways of helping (quiet presence, inquiry, mirroring, and framing) to avoid giving premature advice.',
      applicationContext: 'When project leaders need coaching without consultants imposing unsolicited, patronizing recipes.',
      practicalExample: 'In pairs, practice responding to a colleague’s dilemma strictly through inquiry and appreciative mirroring before proposing any solution.',
      expectedBenefits: ['Elevates the quality of peer coaching.', 'Eliminates unsolicited advice.', 'Fosters true autonomy in the helpee.'],
      input: 'A personal helping interaction.',
      process: 'Practice heuristic levels in rotating pairs with progressive constraints.',
      output: 'Sharpened helping reflexes and respectful collaboration.',
      timeNeeded: '30-45 min',
      groupSize: 'Pairs in any group size',
      cases: ['Leadership mentoring skills', 'Internal consulting culture', 'Supportive peer problem-solving']
    },
    es: {
      title: 'Heurísticas de Ayuda (Helping Heuristics)',
      objective: 'Practicar 4 formas progresivas de ayuda (presencia atenta, indagación, reflejo y encuadre) evitando consejos apresurados o invasivos.',
      applicationContext: 'Cuando líderes de proyecto necesitan apoyo pero reciben recetas no solicitadas que sofocan su autonomía.',
      practicalExample: 'En parejas, responda al desafío de un colega utilizando únicamente preguntas e indagación apreciativa antes de sugerir nada.',
      expectedBenefits: ['Mejora radical en la calidad del coaching.', 'Elimina consejos paternalistas o inútiles.', 'Fortalece la capacidad resolutiva de quien pide ayuda.'],
      input: 'Un dilema de trabajo real.',
      process: 'Práctica guiada en parejas transitando por los distintos niveles de ayuda.',
      output: 'Habilidades de facilitación y acompañamiento respetuoso.',
      timeNeeded: '30-45 min',
      groupSize: 'Parejas en grupos de cualquier tamaño',
      cases: ['Capacitación de líderes facilitadores', 'Cultura de apoyo sin imposiciones', 'Mejora en sesiones de asesoría']
    }
  },
  '19': {
    en: {
      title: 'Min Specs (Minimum Specifications)',
      objective: 'Prune unnecessary bureaucracy and specify strictly what must be done and what must not be done to achieve success with maximum freedom.',
      applicationContext: 'The premier intervention for the Rigidity Trap on the Ecocycle, eliminating endless checklists and restoring autonomy.',
      practicalExample: '1. List all 30 existing rules for project approvals. 2. Eliminate every rule that, if removed, does not kill the project. 3. Keep the bare 4-5 must-dos.',
      expectedBenefits: ['Frees massive operational capacity.', 'Clarifies boundaries while maximizing freedom.', 'Reduces micro-management.'],
      input: 'All existing guidelines, protocols, and policies.',
      process: 'Generate full list of rules in 1-2-4-All ➔ Ruthlessly test necessity ➔ Finalize 3-5 non-negotiable Min Specs.',
      output: 'A minimal set of rules that unleashes maximum innovation.',
      timeNeeded: '35-50 min',
      groupSize: 'Any size',
      cases: ['Unclogging the Rigidity Trap on the Ecocycle', 'Agile governance policy design', 'Streamlining operations and workflows']
    },
    es: {
      title: 'Especificaciones Mínimas (Min Specs)',
      objective: 'Podar la burocracia excesiva y definir estrictamente solo lo que se Debe Hacer y lo que NO se Debe Hacer, maximizando la libertad de acción.',
      applicationContext: 'La intervención reina para desarmar la Trampa de la Rigidez en el Ecociclo, suprimiendo manuales innecesarios.',
      practicalExample: '1. Liste las 25 reglas actuales de aprobación. 2. Descarte cada una que, al quitarse, no destruya el proyecto. 3. Conserve 4 reglas mínimas.',
      expectedBenefits: ['Libera capacidad operativa de forma inmediata.', 'Brinda reglas claras con máxima autonomía.', 'Elimina el micro-management.'],
      input: 'Manuales, políticas y regulaciones vigentes.',
      process: 'Listar todas las reglas ➔ Evaluar rigurosamente su necesidad ➔ Reducir a las especificaciones mínimas indispensables.',
      output: 'Un conjunto mínimo de reglas no negociables.',
      timeNeeded: '35-50 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Salida de la Trampa de la Rigidez', 'Simplificación de procesos corporativos', 'Diseño de políticas ágiles']
    }
  },
  '20': {
    en: {
      title: 'Improv Prototyping',
      objective: 'Act out and iterate on challenging human interactions in safe role-play cycles to discover better responses.',
      applicationContext: 'When a new service or sensitive conversation needs practice before going live in the Birth phase of the Ecocycle.',
      practicalExample: 'Simulate a difficult negotiation between IT and Sales over resource allocation, replaying the scene with audience suggestions.',
      expectedBenefits: ['Safe environment to fail and learn.', 'Builds muscle memory for real-world interactions.', 'Engages all senses.'],
      input: 'A realistic, tension-filled scenario.',
      process: 'Set scenario ➔ Actors play initial attempt ➔ Audience pauses and suggests micro-changes ➔ Replay scene with improvements.',
      output: 'Tested behavioral approaches ready for implementation.',
      timeNeeded: '30-45 min',
      groupSize: '10 to 30 participants',
      cases: ['Preparing difficult cross-team meetings', 'Testing new customer service protocols', 'Leadership under pressure']
    },
    es: {
      title: 'Prototipado con Improvisación (Improv Prototyping)',
      objective: 'Representar y refinar interacciones humanas desafiantes mediante dramatizaciones en ciclos seguros para descubrir mejores respuestas.',
      applicationContext: 'Cuando un nuevo servicio o conversación difícil necesita probarse antes de implementarse en la fase de Nacimiento del Ecociclo.',
      practicalExample: 'Simule una negociación tensa entre dos áreas sobre recursos, pausando la escena para probar consejos del público.',
      expectedBenefits: ['Permite equivocarse y aprender sin riesgos reales.', 'Desarrolla memoria corporal para momentos de presión.', 'Aprendizaje activo y entretenido.'],
      input: 'Un escenario conflictivo o conversación difícil.',
      process: 'Definir personajes ➔ Actuación inicial ➔ El público interviene proponiendo ajustes ➔ Repetición con mejoras.',
      output: 'Estrategias de comunicación validadas en la práctica.',
      timeNeeded: '30-45 min',
      groupSize: '10 a 30 participantes',
      cases: ['Preparación de negociaciones críticas', 'Atención de quejas complejas', 'Manejo de conflictos interpersonales']
    }
  },
  '21': {
    en: {
      title: 'Design StoryBoards',
      objective: 'Map out the step-by-step experience of a meeting, workshop, or customer journey across sequential comic-strip style panels.',
      applicationContext: 'Great for planning a multi-structure String around the Ecocycle or designing a new user onboarding process.',
      practicalExample: 'Draw 6 sequential panels showing how participants arrive, connect, analyze the Ecocycle, debrief, and leave with commitments.',
      expectedBenefits: ['Prevents facilitation timing pitfalls.', 'Makes invisible assumptions concrete.', 'Ensures smooth narrative flow.'],
      input: 'A facilitation plan or user experience.',
      process: 'Draft visual panels showing inputs, emotional states, and outputs across each key milestone.',
      output: 'A detailed, visual facilitation or service blueprint.',
      timeNeeded: '40-60 min',
      groupSize: 'Small design teams of 3 to 6',
      cases: ['Designing facilitation Strings', 'Customer journey mapping', 'Event and workshop choreography']
    },
    es: {
      title: 'Storyboards de Diseño (Design StoryBoards)',
      objective: 'Mapear paso a paso la experiencia de una sesión, taller o viaje de usuario en viñetas visuales secuenciales tipo cómic.',
      applicationContext: 'Ideal para planificar una String de facilitación con el Ecociclo o diseñar la experiencia de lanzamiento de un producto.',
      practicalExample: 'Dibuje 6 viñetas que muestren cómo los participantes entran, se conectan, trabajan en el Ecociclo y se retiran comprometidos.',
      expectedBenefits: ['Evita errores de ritmo y tiempos.', 'Hace visibles vacíos de diseño antes del evento.', 'Crea una narrativa coherente y fluida.'],
      input: 'Un plan de facilitación o diseño de servicio.',
      process: 'Bocetar en viñetas visuales los momentos clave, estados emocionales y entregables de cada etapa.',
      output: 'Guion gráfico completo de la experiencia a realizar.',
      timeNeeded: '40-60 min',
      groupSize: 'Equipos de diseño de 3 a 6 personas',
      cases: ['Arquitectura de Strings de facilitación', 'Diseño de viajes de clientes', 'Planificación de cumbres corporativas']
    }
  },
  '22': {
    en: {
      title: 'Celebrity Interview',
      objective: 'Interview an expert, leader, or founder in a dynamic talk-show style where the audience shapes the core questions.',
      applicationContext: 'When bringing an expert into a strategic portfolio session without falling into boring one-way lectures.',
      practicalExample: 'Have the audience generate probing questions via 1-2-4-All, which the interviewer uses in a lively 20-minute interview with the CEO.',
      expectedBenefits: ['Transforms passive listening into active dialogue.', 'Extracts practical wisdom.', 'High audience engagement.'],
      input: 'An expert and a crowd with pressing questions.',
      process: 'Audience generates questions in 1-2-4-All ➔ Host interviews expert (15-20 min) ➔ Wrap-up takeaways.',
      output: 'Actionable expert insights tailored directly to team needs.',
      timeNeeded: '30-45 min',
      groupSize: '15 to hundreds of participants',
      cases: ['Executive town halls', 'SME knowledge transfer', 'Strategic guest appearances in portfolio workshops']
    },
    es: {
      title: 'Entrevista con Celebridad (Celebrity Interview)',
      objective: 'Entrevistar a un experto o líder al estilo de un talk-show televisivo, donde la audiencia formula y prioriza las preguntas centrales.',
      applicationContext: 'Útil para aprovechar el conocimiento de un referente en una sesión de Ecociclo sin caer en conferencias magistrales aburridas.',
      practicalExample: 'La audiencia genera preguntas profundas con 1-2-4-Todos y el entrevistador conduce una charla ágil de 20 min con el director.',
      expectedBenefits: ['Convierte una charla pasiva en diálogo vibrante.', 'Extrae aprendizajes prácticos y aplicables.', 'Conecta a los líderes con la audiencia.'],
      input: 'Un especialista y un grupo con dudas reales.',
      process: 'Generación de preguntas del público ➔ Entrevista dinámica de 20 min ➔ Cierre con reflexiones colectivas.',
      output: 'Conocimiento experto aterrizado en las necesidades del grupo.',
      timeNeeded: '30-45 min',
      groupSize: '15 a cientos de participantes',
      cases: ['Encuentros de liderazgo abiertos', 'Transferencia de saber técnico', 'Apertura de talleres de innovación']
    }
  },
  '23': {
    en: {
      title: 'Heard, Seen, Respected (HSR)',
      objective: 'Foster deep empathy and emotional healing by sharing and listening to stories of not feeling heard, seen, or respected.',
      applicationContext: 'Crucial for repairing relationships after bitter project cancellations or painful transitions in Creative Destruction.',
      practicalExample: 'In pairs, listen for 7 minutes without interrupting while your partner shares an experience where they felt completely invisible or dismissed.',
      expectedBenefits: ['Rebuilds fractured trust.', 'Validates emotional experiences.', 'Restores compassion in high-stress teams.'],
      input: 'Personal stories of exclusion or dismissal.',
      process: 'Pair 1 shares for 7 min while Partner 2 listens with compassion ➔ Reverse roles ➔ Plenary debrief on what it took to listen.',
      output: 'Restored psychological safety and relational empathy.',
      timeNeeded: '35-45 min',
      groupSize: 'Pairs (any total group size)',
      cases: ['Post-restructuring team healing', 'Diversity and inclusion workshops', 'Resolving deep personal conflicts']
    },
    es: {
      title: 'Escuchado, Visto, Respetado (HSR)',
      objective: 'Fomentar la empatía profunda y la reconciliación compartiendo historias personales de no haberse sentido escuchado, visto ni respetado.',
      applicationContext: 'Fundamental para sanar heridas tras cierres dolorosos de proyectos en la fase de Destrucción Creativa del Ecociclo.',
      practicalExample: 'En parejas, escuche durante 7 min sin juzgar ni interrumpir mientras su compañero comparte un momento en que se sintió invisible.',
      expectedBenefits: ['Reconstruye la confianza dañada.', 'Valida el dolor y las emociones legítimas.', 'Despierta compasión y escucha activa genuina.'],
      input: 'Experiencias de exclusión o falta de reconocimiento.',
      process: 'El compañero A comparte 7 min mientras B escucha empáticamente ➔ Inversión de roles ➔ Reflexión en plenario.',
      output: 'Ambiente de seguridad psicológica y reconexión humana.',
      timeNeeded: '35-45 min',
      groupSize: 'Parejas (cualquier tamaño grupal)',
      cases: ['Sanación tras reestructuraciones', 'Talleres de diversidad e inclusión', 'Superación de rencores entre áreas']
    }
  },
  '24': {
    en: {
      title: 'Drawing Together',
      objective: 'Access non-verbal, visual intelligence and express complex shared challenges using only 5 basic universal symbols.',
      applicationContext: 'When verbal arguments go in circles and words are inadequate to capture the emotional reality of an organizational crisis.',
      practicalExample: 'Invite teams to draw their current journey through the Ecocycle using only a circle, rectangle, triangle, spiral, and star.',
      expectedBenefits: ['Bypasses intellectual defense mechanisms.', 'Unveils subconscious shared feelings.', 'Fun and creatively liberating.'],
      input: '5 universal symbols (Circle, Rectangle, Triangle, Spiral, Star).',
      process: 'Practice drawing symbols ➔ Create visual composition of current challenge ➔ Interpret in pairs and small groups.',
      output: 'Deep visual metaphors that unlock breakthrough insights.',
      timeNeeded: '40-50 min',
      groupSize: 'Any size',
      cases: ['Visualizing team culture and anxiety', 'Alternative retrospectives', 'Expressing unspoken strategic challenges']
    },
    es: {
      title: 'Dibujando Juntos (Drawing Together)',
      objective: 'Acceder a la inteligencia visual no verbal y expresar desafíos compartidos utilizando solo 5 símbolos universales básicos.',
      applicationContext: 'Cuando el debate verbal está estancado y las palabras no alcanzan para manifestar la complejidad emocional de la situación.',
      practicalExample: 'Pida al grupo dibujar la transición de su portafolio en el Ecociclo usando solo círculo, rectángulo, triángulo, espiral y estrella.',
      expectedBenefits: ['Supera barreras intelectuales y defensivas.', 'Revela sentimientos y tensiones subconscientes.', 'Despierta creatividad sin exigencias artísticas.'],
      input: '5 símbolos universales (Círculo, Rectángulo, Triángulo, Espiral, Estrella).',
      process: 'Práctica individual de símbolos ➔ Creación del dibujo del desafío ➔ Interpretación cruzada en parejas.',
      output: 'Metáforas visuales potentes que destraban el diálogo.',
      timeNeeded: '40-50 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Expresión de tensiones culturales', 'Retrospectivas visuales no convencionales', 'Diagnóstico de clima organizacional']
    }
  },
  '25': {
    en: {
      title: '5 Design Elements',
      objective: 'Structure every Liberating Structure or meeting using the 5 core DNA components: Invitation, Space, Participation, Groups, and Time.',
      applicationContext: 'The master meta-structure for designing Strings and facilitating workshops with mathematical elegance.',
      practicalExample: 'Before facilitating Ecocycle Planning, design: 1. Compelling invitation; 2. Flexible room layout; 3. Inclusive participation; 4. Pair/group configs; 5. Strict timeboxes.',
      expectedBenefits: ['Guarantees airtight meeting design.', 'Prevents facilitation drift and disengagement.', 'Master-level facilitation craft.'],
      input: 'A meeting purpose and intended outcome.',
      process: 'Explicitly configure the 5 elements for each activity in your session String.',
      output: 'A robust, high-impact facilitation architecture.',
      timeNeeded: '20-40 min design phase',
      groupSize: 'Facilitators and design teams',
      cases: ['Designing multi-hour facilitation Strings', 'Auditing failing meetings', 'Mastering Liberating Structures facilitation']
    },
    es: {
      title: '5 Elementos de Diseño (5 Design Elements)',
      objective: 'Estructurar cada dinámica o sesión utilizando los 5 componentes del ADN de las EL: Invitación, Espacio, Participación, Grupos y Tiempo.',
      applicationContext: 'La meta-estructura maestra para diseñar Strings y facilitar talleres con rigor e inclusión absoluta.',
      practicalExample: 'Al planificar el Ecociclo, configure: 1. Invitación atractiva; 2. Distribución espacial; 3. Cómo participa el 100%; 4. Tamaño de grupos; 5. Cronograma preciso.',
      expectedBenefits: ['Asegura un diseño de reunión impecable.', 'Evita la dispersión y la pérdida de foco.', 'Eleva la maestría en facilitación.'],
      input: 'El objetivo y resultado esperado de la sesión.',
      process: 'Diseñar explícitamente cada uno de los 5 elementos para cada paso de la String.',
      output: 'Una arquitectura de facilitación robusta y efectiva.',
      timeNeeded: '20-40 min de diseño',
      groupSize: 'Facilitadores y equipos de diseño',
      cases: ['Planificación de Strings complejas', 'Revisión y mejora de reuniones', 'Formación de facilitadores internos']
    }
  },
  '26': {
    en: {
      title: 'Generative Relationships STAR',
      objective: 'Diagnose and elevate the creative vitality of team relationships across 4 dimensions: Separateness, Tuning, Action, and Reason.',
      applicationContext: 'Use when cross-functional partners in the Ecocycle must work together but lack the chemistry or shared alignment to produce results.',
      practicalExample: 'Have teams assess their collaboration on a STAR radar chart, identifying whether they need more diverse viewpoints (S) or sharper shared purpose (R).',
      expectedBenefits: ['Pinpoints exact relationship dysfunctions.', 'Replaces vague complaints with actionable dimensions.', 'Strengthens team bonds.'],
      input: 'A team or inter-group partnership.',
      process: 'Rate relationships on the 4 STAR axes ➔ Share in pairs ➔ Agree on 15% actions to balance underperforming axes.',
      output: 'Concrete relational agreements to boost collective performance.',
      timeNeeded: '40-60 min',
      groupSize: 'Teams of 4 to 20',
      cases: ['Diagnosing joint venture partnerships', 'Leadership team development', 'Cross-departmental collaboration']
    },
    es: {
      title: 'Relaciones Generativas STAR (Generative Relationships)',
      objective: 'Diagnosticar y elevar la vitalidad creativa de las relaciones de equipo en 4 dimensiones: Separación, Sintonía, Acción y Razón.',
      applicationContext: 'Útil cuando dos áreas socias en el Ecociclo deben cooperar pero carecen de química o alineación para lograr resultados.',
      practicalExample: 'Mida la relación en un gráfico STAR, detectando si necesitan mayor diversidad de miradas (S) o más claridad de propósito (R).',
      expectedBenefits: ['Diagnóstico preciso de la salud vincular.', 'Reemplaza quejas difusas por dimensiones concretas.', 'Potencia la efectividad del trabajo en equipo.'],
      input: 'Una alianza o equipo de trabajo.',
      process: 'Evaluar en los 4 ejes STAR ➔ Debatir en cuartetos ➔ Definir acciones de mejora inmediata.',
      output: 'Acuerdos relacionales específicos para elevar la productividad.',
      timeNeeded: '40-60 min',
      groupSize: 'Equipos de 4 a 20 personas',
      cases: ['Diagnóstico de alianzas estratégicas', 'Desarrollo de comités directivos', 'Integración entre áreas clave']
    }
  },
  '27': {
    en: {
      title: 'Agreement & Certainty Matrix',
      objective: 'Categorize organizational challenges across Simple, Complicated, Complex, and Chaotic zones to choose appropriate management strategies.',
      applicationContext: 'Essential before launching Ecocycle Planning to decide which initiatives require linear recipes versus experimental evolutionary probes.',
      practicalExample: 'Sort portfolio initiatives on a grid of Certainty vs. Agreement. Realize that innovation cannot be managed with Gantt charts.',
      expectedBenefits: ['Prevents applying linear tools to complex challenges.', 'Aligns expectations on certainty.', 'Legitimizes experimentation.'],
      input: 'A collection of initiatives and challenges.',
      process: 'Map each challenge onto the matrix based on degrees of certainty and stakeholder agreement.',
      output: 'Clear matching of challenge complexity with proper governance tools.',
      timeNeeded: '30-45 min',
      groupSize: 'Any size',
      cases: ['Portfolio governance design', 'Choosing Agile vs. Waterfall methods', 'Strategic risk categorization']
    },
    es: {
      title: 'Matriz de Acuerdo y Certeza (Agreement & Certainty)',
      objective: 'Clasificar los desafíos en zonas Simple, Complicada, Compleja y Caótica para seleccionar el modelo de gestión adecuado.',
      applicationContext: 'Fundamental antes del Ecociclo para distinguir qué proyectos requieren recetas lineales y cuáles demandan experimentación viva.',
      practicalExample: 'Ubique iniciativas en el eje de Certeza vs. Acuerdo, comprendiendo que la innovación en Gestación no puede gestionarse con cronogramas rígidos.',
      expectedBenefits: ['Evita aplicar metodologías lineales a problemas complejos.', 'Alinea expectativas de certidumbre.', 'Legitima la experimentación iterativa.'],
      input: 'Proyectos y metas de la organización.',
      process: 'Ubicar cada proyecto en la matriz según grado de certeza técnica y acuerdo humano.',
      output: 'Asignación correcta de modelos de trabajo para cada iniciativa.',
      timeNeeded: '30-45 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Definición de gobernanza de portafolio', 'Selección de marcos ágiles vs tradicionales', 'Evaluación de incertidumbre']
    }
  },
  '28': {
    en: {
      title: 'Simple Ethnography',
      objective: 'Observe and learn from real user and frontline behaviors in their natural environment without asking invasive questions.',
      applicationContext: 'Use to gather authentic behavioral data before positioning products on the Ecocycle, grounding decisions in reality.',
      practicalExample: 'Spend 30 minutes silently shadowing a warehouse worker, taking field notes on how they work around broken software.',
      expectedBenefits: ['Discovers unspoken user habits.', 'Exposes the gap between theory and actual practice.', 'Cultivates authentic empathy.'],
      input: 'An operational environment or customer touchpoint.',
      process: 'Conduct structured observation ➔ Record objective sensory details ➔ Synthesize insights in 1-2-4-All.',
      output: 'Grounded insights that shatter executive assumptions.',
      timeNeeded: '45-90 min',
      groupSize: 'Individuals or small observer pairs',
      cases: ['Customer experience research', 'Operational bottleneck discovery', 'Product redesign input']
    },
    es: {
      title: 'Etnografía Simple (Simple Ethnography)',
      objective: 'Observar y aprender de las conductas reales de usuarios y trabajadores en su hábitat natural sin interferir con preguntas invasivas.',
      applicationContext: 'Útil para obtener evidencia conductual real antes de ubicar productos en el Ecociclo, evitando suposiciones de escritorio.',
      practicalExample: 'Acompañe en silencio durante 30 min a un operador en campo, anotando cómo resuelve manualmente fallas de los sistemas oficiales.',
      expectedBenefits: ['Descubre hábitos y atajos no declarados.', 'Expone la brecha entre el procedimiento formal y la realidad.', 'Genera empatía basada en hechos.'],
      input: 'Un espacio de trabajo o interacción con clientes.',
      process: 'Observación silenciosa estructurada ➔ Registro de hechos objetivos ➔ Síntesis en 1-2-4-Todos.',
      output: 'Hallazgos reales que corrigen diagnósticos de portafolio.',
      timeNeeded: '45-90 min',
      groupSize: 'Observadores individuales o en parejas',
      cases: ['Investigación de experiencia de usuario', 'Detección de cuellos de botella reales', 'Rediseño de flujos de trabajo']
    }
  },
  '29': {
    en: {
      title: 'Integrated~Autonomy',
      objective: 'Navigate and integrate the tension between centralized standardized control and local decentralized autonomy.',
      applicationContext: 'Crucial when the Ecocycle reveals regional branches rebelling against central corporate rigidity.',
      practicalExample: 'Map out actions that simultaneously increase corporate security and provide local flexibility, rejecting either/or compromises.',
      expectedBenefits: ['Transmutes institutional turf wars into synergy.', 'Creates flexible scaling models.', 'Preserves agility with coordination.'],
      input: 'A conflict between headquarters and local units.',
      process: 'Brainstorm options that offer high integration AND high autonomy ➔ Refine into clear governance policies.',
      output: 'Balanced organizational policies that empower the edges while protecting the core.',
      timeNeeded: '45-60 min',
      groupSize: 'Any size',
      cases: ['HQ vs. Branch governance', 'Standardization vs. Customization', 'Matrix organization alignment']
    },
    es: {
      title: 'Autonomía Integrada (Integrated~Autonomy)',
      objective: 'Articular e integrar la tensión entre el control central estandarizado y la autonomía descentralizada local.',
      applicationContext: 'Crucial cuando el Ecociclo revela que las filiales se rebelan ante la rigidez central, paralizando la innovación.',
      practicalExample: 'Defina acciones que incrementen al mismo tiempo la seguridad corporativa y la libertad de experimentación local.',
      expectedBenefits: ['Transforma disputas de poder en sinergia institucional.', 'Modelos de escalabilidad flexibles.', 'Agilidad local con coherencia global.'],
      input: 'Tensión entre la sede central y equipos locales.',
      process: 'Explorar iniciativas que combinan alta integración Y alta autonomía ➔ Redactar acuerdos de gobernanza.',
      output: 'Políticas equilibradas que empoderan la periferia protegiendo el núcleo.',
      timeNeeded: '45-60 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Gobernanza sede central vs unidades locales', 'Estandarización vs personalización', 'Organizaciones matriciales']
    }
  },
  '30': {
    en: {
      title: 'What I Need From You (WINFY)',
      objective: 'Articulate direct requests between interdependent groups and receive unambiguous, binding responses: "Yes", "No", "I Will Try", or "Clarify".',
      applicationContext: 'The premier structure for unblocking interdepartmental bottlenecks holding back projects in the Poverty Trap of the Ecocycle.',
      practicalExample: 'IT asks Sales: "What do you need from us?" Sales makes 4 explicit requests. IT replies strictly with Yes, No, I Will Try, or Clarify.',
      expectedBenefits: ['Eradicates vague corporate promises.', 'Forces radical transparency and boundaries.', 'Establishes clear service level agreements.'],
      input: 'Interdependent teams with friction and stalled dependencies.',
      process: 'Teams formulate requests in isolation ➔ Present requests without debate ➔ Responding teams take time to deliberate ➔ Deliver categorical answers.',
      output: 'Definitive cross-team agreements that eliminate project stalling.',
      timeNeeded: '60-90 min',
      groupSize: '2 to 5 interdependent teams',
      cases: ['IT vs. Business cross-commitments', 'Supply chain and operations agreements', 'Resolving cross-silo deadlock']
    },
    es: {
      title: 'Lo Que Necesito de Ti (What I Need From You - WINFY)',
      objective: 'Formular pedidos directos entre áreas interdependientes y recibir respuestas inequívocas y vinculantes: "Sí", "No", "Lo Intentaré" o "Aclaración".',
      applicationContext: 'La estructura por excelencia para destrabar proyectos frenados por promesas vagas en la Trampa de la Pobreza del Ecociclo.',
      practicalExample: 'TI le pregunta a Comercial: "¿Qué necesitas de nosotros?" Comercial hace 4 pedidos directos. TI responde solo con Sí, No, Lo Intentaré o Aclaración.',
      expectedBenefits: ['Erradica las medias palabras y las excusas diplomáticas.', 'Transparencia total sobre lo que es posible o no.', 'Pactos vinculantes entre áreas clave.'],
      input: 'Equipos interdependientes con fricciones y promesas incumplidas.',
      process: 'Redacción de pedidos en privado ➔ Lectura sin interrupciones ➔ Deliberación interna ➔ Entrega de respuestas categóricas.',
      output: 'Acuerdos nítidos de cooperación que destraban proyectos.',
      timeNeeded: '60-90 min',
      groupSize: '2 a 5 equipos interdependientes',
      cases: ['Acuerdos entre TI y Áreas Comerciales', 'Alineación de cadena de suministro y operaciones', 'Destrabe de silos estratégicos']
    }
  },
  '31': {
    en: {
      title: 'Open Space Technology',
      objective: 'Self-organize a participant-driven unconference agenda where attendees take full responsibility for discussing the topics they care about most.',
      applicationContext: 'When a vast portfolio transformation needs wide ownership and no pre-packaged agenda could anticipate what the crowd needs to address.',
      practicalExample: 'Convene 100 professionals around a marketplace wall to post topics, claim rooms, and hold parallel sessions using the Law of Two Feet.',
      expectedBenefits: ['100% self-managed agenda.', 'Surfaces passionate, authentic priorities.', 'Spurs organic, self-appointed action groups.'],
      input: 'An open invitation around an urgent organizational theme.',
      process: 'Open the circle & introduce principles ➔ Build marketplace agenda ➔ Breakout sessions ➔ Evening news & harvest book.',
      output: 'A comprehensive book of proceedings and self-governed action initiatives.',
      timeNeeded: 'Half day to 2 full days',
      groupSize: '20 to 500+ participants',
      cases: ['Organization-wide strategy summits', 'Post-merger integration', 'Community problem-solving unconferences']
    },
    es: {
      title: 'Tecnología de Espacio Abierto (Open Space Technology)',
      objective: 'Autoorganizar una agenda completa de trabajo donde los participantes asumen plena responsabilidad por los temas que realmente les apasionan.',
      applicationContext: 'Cuando una transformación de portafolio requiere que todos tomen la iniciativa sin agendas impuestas de arriba hacia abajo.',
      practicalExample: 'Reúna a 100 profesionales frente a un muro de mercado para proponer temas, asignar salas y dialogar con la Ley de los Dos Pies.',
      expectedBenefits: ['Agenda 100% autoorganizada.', 'Emerge la verdadera pasión y urgencia del grupo.', 'Crea grupos de acción orgánicos y comprometidos.'],
      input: 'Una invitación abierta en torno a un tema urgente.',
      process: 'Apertura y creación del mercado de temas ➔ Sesiones paralelas ➔ Cosecha de noticias y compromisos.',
      output: 'Libro de actas con compromisos y líderes autoproclamados.',
      timeNeeded: 'Medio día a 2 días completos',
      groupSize: '20 a 500+ participantes',
      cases: ['Grandes cumbres estratégicas', 'Transformación cultural de toda la empresa', 'Resolución comunitaria de crisis']
    }
  },
  '32': {
    en: {
      title: 'Critical Uncertainties',
      objective: 'Develop robust, resilient strategies by exploring 4 plausible alternative future scenarios created by two independent critical uncertainties.',
      applicationContext: 'Essential before committing heavy resources to Birth/Maturity on the Ecocycle, stress-testing bets against unpredictable future shifts.',
      practicalExample: 'Cross two critical axes: 1. AI Regulation (Strict vs. Open) x 2. Market Capital (Abundant vs. Scarce). Build strategies that succeed across all 4 quadrants.',
      expectedBenefits: ['Overcomes strategic blindness and wishful thinking.', 'Discovers strategies that survive unpredictable storms.', 'Increases organizational agility.'],
      input: 'A list of high-impact, highly unpredictable macro uncertainties.',
      process: 'Select 2 most critical uncertainties ➔ Form 2x2 scenario matrix ➔ Name quadrants & craft stories ➔ Develop robust action plans.',
      output: 'Hedging and shaping strategies tested against diverse future environments.',
      timeNeeded: '60-120 min',
      groupSize: '10 to 60 participants',
      cases: ['Long-term strategic stress testing', 'Risk management and resilience planning', 'Validating Ecocycle portfolio investments']
    },
    es: {
      title: 'Incertidumbres Críticas (Critical Uncertainties)',
      objective: 'Desarrollar estrategias resilientes explorando 4 futuros plausibles generados por el cruce de dos incertidumbres críticas independientes.',
      applicationContext: 'Vital antes de invertir millones en proyectos del Ecociclo, blindando la estrategia ante giros imprevistos del entorno.',
      practicalExample: 'Cruce dos variables: 1. Regulación de IA (Estricta vs Abierta) x 2. Acceso a Capital (Abundante vs Escaso). Cree planes viables en los 4 mundos.',
      expectedBenefits: ['Elimina la ceguera del pensamiento único.', 'Identifica estrategias robustas que funcionan en cualquier escenario.', 'Aumenta la adaptabilidad de la organización.'],
      input: 'Factores de alto impacto e impredecibilidad.',
      process: 'Seleccionar las 2 incertidumbres clave ➔ Construir matriz 2x2 ➔ Narrar los 4 escenarios ➔ Derivar estrategias robustas.',
      output: 'Estrategias a prueba de futuro listas para implementar.',
      timeNeeded: '60-120 min',
      groupSize: '10 a 60 participantes',
      cases: ['Planificación estratégica a largo plazo', 'Gestión de riesgos e incertidumbre', 'Validación de apuestas en el Ecociclo']
    }
  },
  '33': {
    en: {
      title: 'Purpose to Practice (P2P)',
      objective: 'Design the institutional architecture of a new venture or collaborative network across 5 essential elements: Purpose, Principles, Participants, Structure, and Practices.',
      applicationContext: 'The definitive structure for moving a winning idea from Gestation to Birth on the Ecocycle with sustainable governance.',
      practicalExample: 'Walk a project team through: 1. Why do we exist? 2. What rules will guide us? 3. Who must participate? 4. How are we structured? 5. What will we actually do?',
      expectedBenefits: ['Integrates purpose with daily operational habits.', 'Prevents chaotic governance.', 'Ensures sustainable project execution.'],
      input: 'A bold, promising idea or new joint venture.',
      process: 'Work through the 5 elements in sequence using 1-2-4-All at each stage.',
      output: 'A comprehensive operational charter and living governance framework.',
      timeNeeded: '90-180 min',
      groupSize: '5 to 40 participants',
      cases: ['Launching new strategic business units', 'Designing inter-company alliances', 'Governing new initiatives born from Ecocycle']
    },
    es: {
      title: 'Del Propósito a la Práctica (Purpose to Practice - P2P)',
      objective: 'Diseñar la arquitectura institucional de una nueva iniciativa en 5 elementos clave: Propósito, Principios, Participantes, Estructura y Prácticas.',
      applicationContext: 'La estructura definitiva para llevar una idea ganadora de la Gestación al Nacimiento en el Ecociclo con gobernanza viva.',
      practicalExample: 'Guíe al equipo: 1. ¿Por qué existimos? 2. ¿Qué reglas innegociables nos rigen? 3. ¿Quién participa? 4. ¿Cómo nos organizamos? 5. ¿Qué haremos?',
      expectedBenefits: ['Conecta el propósito sublime con la rutina operativa.', 'Previene el desorden y la falta de claridad en gobernanza.', 'Garantiza la sustentabilidad del proyecto.'],
      input: 'Una iniciativa naciente o nuevo consorcio.',
      process: 'Recorrer los 5 elementos en orden aplicando 1-2-4-Todos en cada uno.',
      output: 'Estatuto de funcionamiento y modelo operativo completo.',
      timeNeeded: '90-180 min',
      groupSize: '5 a 40 participantes',
      cases: ['Lanzamiento de nuevas unidades de negocio', 'Gobernanza de alianzas estratégicas', 'Estructuración de proyectos del Ecociclo']
    }
  },
  '34': {
    en: {
      title: 'Mad Tea',
      objective: 'Trigger rapid, spontaneous conversations and sentence completions across two facing lines that rotate rapidly to energetic music.',
      applicationContext: 'A high-velocity warm-up structure for breaking formalities and priming participants for Ecocycle Planning.',
      practicalExample: 'Participants stand in two concentric rings or facing lines, completing sentences like: "What worries me most about this year is..." with a new partner every 60 seconds.',
      expectedBenefits: ['Sparks massive physical and mental energy.', 'Bypasses filters to uncover authentic thoughts.', 'Builds widespread rapport fast.'],
      input: '5-8 unfinished prompt sentences.',
      process: 'Facing partners share quick completions ➔ Rotate line to music every 60-90 seconds.',
      output: 'High energy, candid insights, and warmed-up collective spirit.',
      timeNeeded: '15-20 min',
      groupSize: '16 to 100+ participants',
      cases: ['Dynamic session warm-up', 'Surfacing raw sentiment before strategic meetings', 'Energizer between heavy analytical blocks']
    },
    es: {
      title: 'Té Loco (Mad Tea)',
      objective: 'Desatar conversaciones espontáneas y completar frases incompletas en dos filas enfrentadas que rotan velozmente con música.',
      applicationContext: 'Un calentamiento de alta energía para romper formalismos y preparar el terreno para el Ecocycle Planning.',
      practicalExample: 'Dos filas enfrentadas completan frases como: "Lo que más me inquieta de este año es..." rotando de pareja cada 60 segundos.',
      expectedBenefits: ['Genera energía física y entusiasmo inmediato.', 'Evita filtros mentales revelando sinceridad.', 'Conecta a todos en pocos minutos.'],
      input: '5 a 8 frases incompletas disparadoras.',
      process: 'Respuestas rápidas cara a cara ➔ Rotación al compás de la música cada 60-90 segundos.',
      output: 'Ambiente desinhibido y percepciones compartidas.',
      timeNeeded: '15-20 min',
      groupSize: '16 a 100+ participantes',
      cases: ['Calentamiento enérgico de talleres', 'Sondeo rápido de emociones antes de planificar', 'Dinámica de reactivación']
    }
  },
  '35': {
    en: {
      title: 'Spiral Journal',
      objective: 'Calm the nervous system and access contemplative clarity through silent journaling in 4 quadrants following a mindful spiral drawing.',
      applicationContext: 'Use to center participants before complex Ecocycle debriefs or after emotionally intense discussions.',
      practicalExample: 'Draw a tight spiral for 2 minutes in absolute silence, then divide a page into 4 quadrants to answer 4 focused self-reflection questions in 2-min sprints.',
      expectedBenefits: ['Induces deep psychological calm.', 'Sharpens personal clarity and focus.', 'Ensures even introverts formulate deep insights.'],
      input: 'A piece of paper, pen, and 4 reflective prompts.',
      process: '2 min slow spiral drawing in silence ➔ 2 min writing in each of the 4 quadrants ➔ Optional pair sharing.',
      output: 'Mindful personal reflections ready to enrich collective dialogue.',
      timeNeeded: '15-20 min',
      groupSize: 'Individual exercise in any group size',
      cases: ['Pre-meeting centering', 'Mid-workshop reflective break', 'Personal leadership grounding']
    },
    es: {
      title: 'Diario en Espiral (Spiral Journal)',
      objective: 'Calmar el sistema nervioso y acceder a claridad reflexiva dibujando una espiral lenta y escribiendo en 4 cuadrantes cronometrados.',
      applicationContext: 'Ideal para serenar al grupo antes de debates difíciles en el Ecociclo o tras momentos de alta tensión.',
      practicalExample: 'Dibuje una espiral lenta durante 2 minutos en silencio total, luego divida la hoja en 4 cuadrantes para responder 4 preguntas clave.',
      expectedBenefits: ['Induce calma y presencia plena.', 'Claridad de pensamiento individual.', 'Permite que todos procesen antes de hablar.'],
      input: 'Papel, lápiz y 4 preguntas de introspección.',
      process: '2 min dibujando la espiral ➔ 2 min de escritura en cada cuadrante sin detener el lápiz.',
      output: 'Reflexiones lúcidas y auténticas listas para compartir.',
      timeNeeded: '15-20 min',
      groupSize: 'Individual en grupos de cualquier tamaño',
      cases: ['Centramiento antes de reuniones estratégicas', 'Pausa reflexiva durante talleres', 'Autoconocimiento del facilitador']
    }
  },
  '36': {
    en: {
      title: 'Folding Spectrogram',
      objective: 'Make the full spectrum of opinions visible on a physical line across the room, folding the line to pair opposite viewpoints for constructive dialogue.',
      applicationContext: 'When a team is torn between extreme opposing opinions regarding an Ecocycle initiative and needs to build mutual understanding.',
      practicalExample: 'Participants position themselves physically along a line from "100% Agree" to "100% Disagree", then the line folds in half to pair extreme ends for dialogue.',
      expectedBenefits: ['Visually exposes the true distribution of opinion.', 'Pairs polar opposites without confrontation.', 'Breaks echo chambers.'],
      input: 'A provocative, polarising statement.',
      process: 'Position along physical continuum ➔ Fold line so extremes meet in the middle ➔ Pair dialogue ➔ Plenary takeaways.',
      output: 'Empathy between opposing viewpoints and nuanced consensus.',
      timeNeeded: '25-35 min',
      groupSize: '15 to 60 participants',
      cases: ['Navigating controversial strategic decisions', 'Diagnosing culture clash', 'Balancing divergent views on portfolio shifts']
    },
    es: {
      title: 'Espectrograma Plegable (Folding Spectrogram)',
      objective: 'Hacer visible el espectro completo de posturas en una línea física en la sala, doblando la línea para emparejar visiones opuestas en diálogo constructivo.',
      applicationContext: 'Cuando el equipo está dividido entre posturas extremas sobre un proyecto del Ecociclo y necesita tender puentes.',
      practicalExample: 'Las personas se ubican en una línea de "Total acuerdo" a "Total desacuerdo", luego la línea se dobla uniendo a los polos para dialogar en parejas.',
      expectedBenefits: ['Visualiza la distribución real de opiniones.', 'Empareja a los extremos sin debates agresivos.', 'Desarma trincheras ideológicas.'],
      input: 'Una afirmación provocadora y polarizante.',
      process: 'Ubicación física en la sala ➔ Plegar la fila uniendo extremos ➔ Conversación en parejas ➔ Reflexión en plenario.',
      output: 'Comprensión mutua de las razones detrás de cada postura.',
      timeNeeded: '25-35 min',
      groupSize: '15 a 60 participantes',
      cases: ['Decisiones controvertidas de portafolio', 'Gestión de polarización de equipo', 'Debates éticos y de gobernanza']
    }
  },
  '37': {
    en: {
      title: 'Positive Gossip',
      objective: 'Build trust and appreciation by having participants step away while colleagues "gossip" positively about their strengths and contributions.',
      applicationContext: 'Use to recharge team motivation and celebrate achievements before launching into heavy strategic planning.',
      practicalExample: 'In trios, one person steps 3 meters away with their back turned while two colleagues speak enthusiastically about their best qualities for 2 minutes.',
      expectedBenefits: ['Profoundly uplifts personal confidence.', 'Normalizes public appreciation.', 'Fosters a culture of recognition.'],
      input: 'A colleague you appreciate.',
      process: 'Person steps away ➔ Colleagues share positive affirmations out loud ➔ Person returns and reflects.',
      output: 'High mutual respect and reinforced team belonging.',
      timeNeeded: '20-30 min',
      groupSize: 'Trios or small teams',
      cases: ['Team appreciation rituals', 'Celebrating project milestones', 'Rebuilding damaged morale']
    },
    es: {
      title: 'Chisme Positivo (Positive Gossip)',
      objective: 'Elevar la confianza y el reconocimiento haciendo que una persona se aleje mientras sus compañeros "chismosean" virtudes y logros sobre ella.',
      applicationContext: 'Ideal para recargar la energía y el aprecio mutuo antes de sesiones exigentes de planificación estratégica.',
      practicalExample: 'En tríos, un colega se aleja unos pasos mientras dos compañeros hablan elogiosamente de sus mayores fortalezas durante 2 minutos.',
      expectedBenefits: ['Eleva la autoestima y la seguridad psicológica.', 'Instaura el hábito del reconocimiento explícito.', 'Genera cercanía y afecto genuino.'],
      input: 'Compañeros de equipo a reconocer.',
      process: 'Un miembro se retira unos metros ➔ Los otros dos comentan sus virtudes ➔ Regreso y agradecimiento breve.',
      output: 'Fortalecimiento de lazos de aprecio y motivación.',
      timeNeeded: '20-30 min',
      groupSize: 'Tríos o equipos pequeños',
      cases: ['Rituales de cierre y celebración', 'Reconocimiento de fortalezas', 'Integración de equipos estresados']
    }
  },
  '38': {
    en: {
      title: 'Principles Walk Around',
      objective: 'Reflect on core organizational principles by walking in pairs between physical stations displaying different guiding principles.',
      applicationContext: 'When an organization needs to assess whether its daily behavior actually matches its stated core values.',
      practicalExample: 'Post 5 company principles around the room. In pairs, walk to each poster and discuss: "How did we live or violate this principle last quarter?"',
      expectedBenefits: ['Brings abstract values to practical life.', 'Combines physical movement with deep dialogue.', 'Surfaces values gaps.'],
      input: 'Stated organizational principles or values.',
      process: 'Pairs walk to posters across 10-min rounds ➔ Note practical violations and exemplars ➔ Plenary review.',
      output: 'Actionable accountability commitments to live the organization’s values.',
      timeNeeded: '30-45 min',
      groupSize: '10 to 50 participants',
      cases: ['Values audit and culture check', 'Post-crisis ethics review', 'Grounding strategy in core values']
    },
    es: {
      title: 'Paseo de Principios (Principles Walk Around)',
      objective: 'Reflexionar sobre los valores y principios organizacionales caminando en parejas entre estaciones físicas dedicadas a cada principio.',
      applicationContext: 'Cuando la organización necesita evaluar si su comportamiento cotidiano es coherente con los valores que predica.',
      practicalExample: 'Pegue 5 principios en las paredes. En parejas, caminen de cartel en cartel dialogando: "¿Cómo vivimos o vulneramos este principio recientemente?"',
      expectedBenefits: ['Aterriza valores abstractos en conductas concretas.', 'Une movimiento corporal con reflexión profunda.', 'Visibiliza brechas éticas con franqueza.'],
      input: 'Los principios o valores declarados de la organización.',
      process: 'Paseo en parejas de cartel en cartel ➔ Anotar ejemplos reales de éxito e incumplimiento ➔ Síntesis grupal.',
      output: 'Compromisos de congruencia ética y conductual.',
      timeNeeded: '30-45 min',
      groupSize: '10 a 50 participantes',
      cases: ['Auditoría cultural de valores', 'Revisión de conducta ética', 'Alineación de liderazgo']
    }
  },
  '39': {
    en: {
      title: 'Network Relationship Patterns',
      objective: 'Identify, diagnose, and redesign recurring relationship archetypes and interaction dynamics across an extended collaborative network.',
      applicationContext: 'Use to optimize inter-organizational ecosystems and multi-stakeholder alliances mapped on the Ecocycle.',
      practicalExample: 'Map relationships across different departments to identify bottleneck hubs, isolated nodes, and critical bridges that need support.',
      expectedBenefits: ['Prevents network burnout in central hubs.', 'Activates peripheral talent.', 'Strengthens ecosystem resilience.'],
      input: 'Organizational charts and informal communication flows.',
      process: 'Map network patterns ➔ Identify dysfunction archetypes ➔ Restructure communication links.',
      output: 'A resilient, decentralized interaction framework.',
      timeNeeded: '60-90 min',
      groupSize: '12 to 40 leaders',
      cases: ['Alliance ecosystem governance', 'Decentralizing overloaded executive hubs', 'Multi-institution collaboration']
    },
    es: {
      title: 'Patrones de Redes y Relaciones (Network Relationship Patterns)',
      objective: 'Identificar, diagnosticar y rediseñar arquetipos relacionales recurrentes y dinámicas de interacción en una red extendida.',
      applicationContext: 'Útil para optimizar ecosistemas de alianzas y colaboraciones interinstitucionales mapeadas en el Ecociclo.',
      practicalExample: 'Mapee cómo interactúan diferentes áreas para identificar personas sobrecargadas que hacen de cuello de botella e islas que no colaboran.',
      expectedBenefits: ['Evita el desgaste por sobrecarga en nodos centrales.', 'Activa el talento aislado en la periferia.', 'Crea resiliencia en la red de trabajo.'],
      input: 'Flujos informales de comunicación y organigramas.',
      process: 'Mapear arquetipos de relación ➔ Diagnosticar nudos críticos ➔ Rediseñar circuitos de comunicación.',
      output: 'Una red descentralizada, ágil y colaborativa.',
      timeNeeded: '60-90 min',
      groupSize: '12 a 40 líderes',
      cases: ['Gobernanza de ecosistemas de socios', 'Descentralización de comités sobrecargados', 'Articulación multiactor']
    }
  },
  '40': {
    en: {
      title: 'Grief Walking',
      objective: 'Hold space for collective loss, organizational transitions, and letting go through slow, silent outdoor walking in reflective pairs.',
      applicationContext: 'Essential after major closures, mergers, or phase-outs in Creative Destruction on the Ecocycle to honor past contributions.',
      practicalExample: 'Pairs walk in nature or around a campus in 10-minute silent intervals punctuated by gentle prompts on what must be respectfully laid to rest.',
      expectedBenefits: ['Honors past effort before demanding new progress.', 'Alleviates cynicism and hidden resentment.', 'Fosters deep emotional closure.'],
      input: 'A significant organizational closure or farewell.',
      process: 'Introductory framing ➔ Silent walk in pairs with reflective prompt ➔ Gentle paired sharing ➔ Closing circle.',
      output: 'Authentic emotional closure and readiness for the next strategic chapter.',
      timeNeeded: '45-60 min',
      groupSize: 'Pairs (any group size)',
      cases: ['Sunsetting legacy projects in Creative Destruction', 'Post-merger farewell rituals', 'Honoring departed leaders']
    },
    es: {
      title: 'Caminata del Duelo (Grief Walking)',
      objective: 'Dar espacio al duelo colectivo, cierres organizacionales y despedidas mediante caminatas silenciosas y reflexivas en parejas.',
      applicationContext: 'Crucial tras cierres de líneas de negocio o desvinculaciones en la Destrucción Creativa del Ecociclo, honrando el camino recorrido.',
      practicalExample: 'Parejas caminan en silencio durante intervalos de 10 min reflexionando sobre lo que ya cumplió su ciclo y debe soltarse con gratitud.',
      expectedBenefits: ['Valida el esfuerzo del pasado antes de exigir nuevas metas.', 'Alivia resentimientos y resistencias silenciosas.', 'Brinda un cierre emocional digno.'],
      input: 'Un cierre significativo o pérdida organizacional.',
      process: 'Apertura con respeto ➔ Caminata silenciosa en parejas con preguntas guía ➔ Diálogo pausado ➔ Círculo de cierre.',
      output: 'Paz colectiva y disposición genuina para el nuevo ciclo.',
      timeNeeded: '45-60 min',
      groupSize: 'Parejas (cualquier tamaño grupal)',
      cases: ['Cierre de proyectos en Destrucción Creativa', 'Rituales de transición post-fusión', 'Despedida de etapas históricas']
    }
  },
  '41': {
    en: {
      title: 'Future~Present',
      objective: 'Envision a bold, flourishing future state and travel back in time to discover the pivotal, daring steps that made it possible.',
      applicationContext: 'Great for building new strategic paths into the Gestation quadrant on the Ecocycle, replacing incremental thinking with vision.',
      practicalExample: '"Imagine it is 2030 and our organization won the global sustainability award. Look back: what unexpected breakthrough in 2026 started it all?"',
      expectedBenefits: ['Bypasses present-day constraints and skepticism.', 'Generates counter-intuitive breakthroughs.', 'Creates an inspiring future narrative.'],
      input: 'A horizon vision challenge.',
      process: 'Step into the future state (guided visualization) ➔ Interview each other in 1-2-4-All as citizens of the future ➔ Trace back key turning points.',
      output: 'A bold, reverse-engineered strategic milestone roadmap.',
      timeNeeded: '45-60 min',
      groupSize: 'Any size',
      cases: ['Strategic visioning workshops', 'Seeding breakthroughs in Gestation', 'Disruptive business model design']
    },
    es: {
      title: 'Futuro~Presente (Future~Present)',
      objective: 'Proyectarse en un futuro floreciente y exitoso, viajando luego retrospectivamente en el tiempo para descubrir los hitos audaces que lo hicieron posible.',
      applicationContext: 'Excelente para trazar caminos hacia la Gestación en el Ecociclo, reemplazando el pensamiento incremental por visión audaz.',
      practicalExample: '"Es el año 2030 y nuestra empresa es referente mundial de innovación. Mirando hacia atrás: ¿qué hito clave logramos en 2026 que inició todo?"',
      expectedBenefits: ['Supera el pesimismo del corto plazo.', 'Descubre estrategias disruptivas y no lineales.', 'Genera una narrativa de futuro ilusionante.'],
      input: 'Un horizonte de futuro a construir.',
      process: 'Visualización del estado futuro ➔ Diálogo en parejas actuando desde el futuro ➔ Trazar hacia atrás las decisiones maestras.',
      output: 'Hoja de ruta estratégica retrospectiva para el Ecociclo.',
      timeNeeded: '45-60 min',
      groupSize: 'Cualquier tamaño',
      cases: ['Construcción de visión estratégica', 'Generación de apuestas en Gestación', 'Modelos de negocio disruptivos']
    }
  },
  '42': {
    en: {
      title: 'Talking with Pixies',
      objective: 'Give voice to the mischievous, rebellious, or taboo intuitions ("pixies") inside everyone to challenge corporate orthodoxy.',
      applicationContext: 'Use when meetings become too politically correct and polite, hiding the obvious elephant in the room from the Ecocycle map.',
      practicalExample: 'Invite participants to speak not as polite professionals, but as mischievous inner pixies whisper: "What is the truth nobody dares to say?"',
      expectedBenefits: ['Safe, playful container to expose sacred cows.', 'Relieves repressed tension.', 'Discovers surprising truths.'],
      input: 'A sterile, overly guarded organizational situation.',
      process: 'Introduce the pixie persona ➔ Speak through the pixie in trios ➔ Harvest the brilliant nuggets of truth disguised as mischief.',
      output: 'Radical candor and breakthrough insights.',
      timeNeeded: '30-40 min',
      groupSize: 'Trios or small groups',
      cases: ['Exposing elephant in the room', 'Breaking through polite corporate consensus', 'Pre-Ecocycle truth-telling']
    },
    es: {
      title: 'Hablando con Duendecillos (Talking with Pixies)',
      objective: 'Dar voz a las intuiciones rebeldes, traviesas o tabúes ("duendes") que todos guardan, para desafiar la complacencia corporativa.',
      applicationContext: 'Útil cuando las reuniones son demasiado diplomáticas y nadie se atreve a señalar el elefante blanco en el mapa del Ecociclo.',
      practicalExample: 'Invite a hablar no como ejecutivos formales, sino como el duendecillo travieso que susurra: "¿Qué es lo que todos sabemos pero nadie dice?"',
      expectedBenefits: ['Espacio lúdico y seguro para desafiar dogmas.', 'Desahoga tensiones reprimidas con humor.', 'Extrae verdades incómodas pero necesarias.'],
      input: 'Una situación corporativa solemne y acartonada.',
      process: 'Presentar la figura del duende travieso ➔ Compartir en tríos desde ese personaje ➔ Cosechar verdades esenciales.',
      output: 'Honestidad radical que ilumina decisiones difíciles en el Ecociclo.',
      timeNeeded: '30-40 min',
      groupSize: 'Tríos o grupos pequeños',
      cases: ['Destapar temas tabú sin agresividad', 'Romper consensos artificiales', 'Preparación para la Destrucción Creativa']
    }
  },
  '43': {
    en: {
      title: 'Strategy Knotworking',
      objective: 'Weave, iterate, and coordinate an ongoing series of Liberating Structures across an organization to build adaptive strategic mastery.',
      applicationContext: 'The overarching framework that interconnects 9 Whys, Ecocycle Planning, 15% Solutions, and WINFY into a living strategic engine.',
      practicalExample: 'Design and guide a 6-month continuous cycle of strategic inquiry, connecting portfolio assessment, peer consulting, and action across departments.',
      expectedBenefits: ['Replaces static annual strategic plans with agile sensemaking.', 'Evolves strategy continuously.', 'Distributes leadership throughout the organization.'],
      input: 'An ongoing strategic transformation goal.',
      process: 'Iteratively select, execute, and connect Liberating Structures based on developmental feedback and emerging Ecocycle shifts.',
      output: 'A self-renewing, adaptive strategic learning organization.',
      timeNeeded: 'Ongoing strategic practice',
      groupSize: 'Entire organization and leadership networks',
      cases: ['Agile strategic governance', 'Ongoing portfolio renewal', 'Ecosystem-wide collaborative leadership']
    },
    es: {
      title: 'Entretejido Estratégico (Strategy Knotworking)',
      objective: 'Tejer, iterar y coordinar una secuencia viva de Estruturas Libertadoras en toda la organización para desarrollar maestría estratégica adaptativa.',
      applicationContext: 'El marco maestro que conecta 9 Porqués, Ecocycle Planning, Soluciones 15% y WINFY en un motor estratégico continuo.',
      practicalExample: 'Diseñar y conducir un ciclo continuo de 6 meses que enlaza evaluación de portafolio, consultoría entre pares y ejecución ágil.',
      expectedBenefits: ['Reemplaza planes quinquenales rígidos por estrategia viva.', 'Evolución continua del portafolio en el Ecociclo.', 'Distribuye el liderazgo en toda la red.'],
      input: 'Un proceso de transformación estratégica organizacional.',
      process: 'Encadenar e iterar dinámicas según los cuellos de botella que emerjan en el Ecociclo.',
      output: 'Una organización viva con capacidad de aprendizaje y renovación permanente.',
      timeNeeded: 'Práctica continua',
      groupSize: 'Toda la organización y redes de liderazgo',
      cases: ['Gobernanza estratégica adaptativa', 'Renovación viva de portafolios', 'Desarrollo de liderazgo distribuido']
    }
  }
};

export function getLocalizedPower(power: AIPower, lang: string): AIPower {
  const isPt = !lang || lang === 'pt' || lang.startsWith('pt');
  const catTrans = CATEGORY_TRANSLATIONS[power.category];
  const localizedCategory = isPt
    ? power.category
    : lang.startsWith('es')
    ? catTrans?.es || power.category
    : catTrans?.en || power.category;

  if (isPt) {
    return {
      ...power,
      category: localizedCategory
    };
  }

  const localeEntry = POWERS_LOCALIZATION[power.id];
  const target = lang.startsWith('es') ? localeEntry?.es : localeEntry?.en;

  if (!target) {
    return {
      ...power,
      category: localizedCategory,
      title: power.englishTitle || power.title
    };
  }

  return {
    ...power,
    category: localizedCategory,
    title: target.title || power.title,
    englishTitle: power.englishTitle,
    objective: target.objective || power.objective,
    applicationContext: target.applicationContext || power.applicationContext,
    practicalExample: target.practicalExample || power.practicalExample,
    expectedBenefits: target.expectedBenefits || power.expectedBenefits,
    input: target.input || power.input,
    process: target.process || power.process,
    output: target.output || power.output,
    timeNeeded: target.timeNeeded || power.timeNeeded,
    groupSize: target.groupSize || power.groupSize,
    cases: target.cases || power.cases
  };
}

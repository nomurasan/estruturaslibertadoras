import { Challenge } from '../types';

export interface ChallengeLocaleData {
  title: string;
  scenario: string;
  bestChoiceName?: string;
  whyItWorks?: string;
  scenarioClue?: string;
  inStringRole?: string;
  stringSequence?: string;
  anotherPossibility?: string;
  ecocyclePhase?: string;
  explanation: string;
}

export const CHALLENGES_LOCALIZATION: Record<number, { en: ChallengeLocaleData; es: ChallengeLocaleData }> = {
  1: {
    en: {
      title: 'String: Rigidity Trap and Letting Go',
      scenario: 'You are facilitating an Ecocycle Planning session for an overloaded leadership team that displays strong attachment to manual reports and obsolete committees. To break through denial and build courage to send these habits to Creative Destruction, which Liberating Structure should open the String by sparking laughter and candid honesty about what is counterproductive?',
      bestChoiceName: 'TRIZ',
      whyItWorks: 'By inviting the group to design the worst possible recipe for failure and then confront what they already practice, TRIZ provides comic relief and clarity needed to let go before Ecocycle Planning.',
      scenarioClue: '"break through denial and build courage to send these habits to Creative Destruction by sparking laughter and honesty about what is counterproductive"',
      inStringRole: 'Before Ecocycle Planning (Opening the String to disarm resistance)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Wicked Questions (#4) or Conversation Café (#14) could help articulate hidden tensions if humor faces initial pushback.',
      ecocyclePhase: 'Creative Destruction / Rigidity Trap',
      explanation: 'TRIZ (#8) is highly aligned to open the String when the goal is breaking denial in the Rigidity Trap. Shared laughter over dysfunctional habits eases acceptance of Creative Destruction.'
    },
    es: {
      title: 'String: Trampa de la Rigidez y Soltar Hábitos',
      scenario: 'Estás facilitando una sesión de Ecocycle Planning para una directiva sobrecargada que muestra fuerte apego a informes manuales y comités obsoletos. Para romper la negación y reunir valor para enviar estos hábitos a la Destrucción Creativa, ¿qué Estructura Liberadora debe abrir la String provocando risas y franqueza sobre lo que es contraproducente?',
      bestChoiceName: 'TRIZ',
      whyItWorks: 'Al invitar al grupo a diseñar la peor receta para el fracaso y luego confrontar lo que ya practican, TRIZ crea el alivio cómico y la lucidez necesarios para soltar antes del Ecociclo.',
      scenarioClue: '"romper la negación y reunir valor para enviar estos hábitos a la Destrucción Creativa provocando risas y franqueza sobre lo que es contraproducente"',
      inStringRole: 'Antes del Ecocycle Planning (Apertura de la String para desarmar resistencias)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Preguntas Paradójicas (#4) o Conversation Café (#14) podrían ayudar a verbalizar tensiones si el humor encuentra resistencia.',
      ecocyclePhase: 'Destrucción Creativa / Trampa de la Rigidez',
      explanation: 'TRIZ (#8) es una elección muy acertada para abrir la String cuando el objetivo es quebrar la negación en la Trampa de la Rigidez.'
    }
  },
  2: {
    en: {
      title: 'String: Rescuing from the Poverty Trap',
      scenario: 'During Ecocycle Planning, the team placed 8 promising initiatives trapped in the Poverty Trap, citing the recurring excuse that "executive leadership did not approve extra budget." Which structure should immediately follow in the String to focus on what each member has the freedom, authority, and resources to act on tomorrow?',
      bestChoiceName: '15% Solutions',
      whyItWorks: 'Focuses team attention exclusively on what lies within their immediate sphere of discretion, eliminating budget excuses and restoring agency.',
      scenarioClue: '"leadership did not approve extra budget... focus on what each member has freedom, authority, and resources to act on tomorrow"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ 15% Solutions (Immediate autonomy activation)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
      anotherPossibility: 'Troika Consulting (#6) can follow so peers enrich and constructively challenge these 15% solutions.',
      ecocyclePhase: 'Poverty Trap',
      explanation: '15% Solutions (#5) directly resolves the Poverty Trap in Ecocycle Planning by returning leadership to the group without needing external budget.'
    },
    es: {
      title: 'String: Rescatando de la Trampa de la Pobreza',
      scenario: 'Durante el Ecocycle Planning, el equipo ubicó 8 iniciativas prometedoras en la Trampa de la Pobreza bajo la excusa de que "la dirección no aprobó presupuesto extra". ¿Qué estructura debe ingresar de inmediato en la String para enfocarse en lo que cada uno tiene autonomía y recursos propios para hacer al día siguiente?',
      bestChoiceName: 'Soluciones al 15%',
      whyItWorks: 'Enfoca la atención del equipo exclusivamente en lo que está dentro de su esfera inmediata de discrecionalidad, eliminando excusas presupuestarias.',
      scenarioClue: '"la dirección no aprobó presupuesto extra... enfocarse en lo que cada uno tiene autonomía y recursos propios para hacer"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ Soluciones al 15% (Activación de autonomía inmediata)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Soluciones al 15% (#5)',
      anotherPossibility: 'Consultoría Troika (#6) puede sumarse para que los colegas enriquezcan y desafíen estas soluciones.',
      ecocyclePhase: 'Trampa de la Pobreza',
      explanation: 'Soluciones al 15% (#5) responde con gran coherencia a la Trampa de la Pobreza en el Ecocycle Planning.'
    }
  },
  3: {
    en: {
      title: 'String: Reflective Debriefing of Ecocycle Planning',
      scenario: 'The group just placed 50 sticky notes on the infinity diagram of Ecocycle Planning. To avoid hasty conclusions and turn the visual map into a shared, rigorous action plan across 3 progressive stages (observed facts, meanings/interpretations, and next actions), which structure should close the String?',
      bestChoiceName: 'What, So What, Now What? (W3)',
      whyItWorks: 'Structures debriefing in three cognitive steps: aligns on what is on the map (What?), explores strategic implications (So What?), and agrees on decisions (Now What?).',
      scenarioClue: '"avoid hasty conclusions and turn the visual map into a shared, rigorous action plan across 3 progressive stages (facts, meanings, and actions)"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ What, So What, Now What? (W3) (Reflective closing and action plan)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11)',
      anotherPossibility: '15% Solutions (#5) can follow What, So What, Now What? (W3) to translate "Now What?" into immediate personal commitments.',
      ecocyclePhase: 'Integration across the full Ecocycle',
      explanation: 'What, So What, Now What? (W3) (#11) prevents jumping to superficial solutions before critically analyzing the whole landscape.'
    },
    es: {
      title: 'String: Cierre Reflexivo del Ecocycle Planning',
      scenario: 'El grupo acaba de colocar 50 post-its en el diagrama de Ecocycle Planning. Para evitar conclusiones apresuradas y transformar el mapa en un plan de acción riguroso en 3 etapas progresivas (hechos observados, interpretaciones y próximas acciones), ¿qué estructura debe cerrar la String?',
      bestChoiceName: '¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3)',
      whyItWorks: 'Estructura la reflexión en tres peldaños cognitivos: alinea sobre lo que está en el mapa (¿Qué?), profundiza el sentido (¿Y entonces qué?) y genera acuerdos (¿Ahora qué?).',
      scenarioClue: '"evitar conclusiones apresuradas y transformar el mapa visual en un plan de acción compartido en 3 etapas (hechos, interpretaciones y acciones)"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ ¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (Cierre reflexivo)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ ¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (#11)',
      anotherPossibility: 'Soluciones al 15% (#5) puede suceder a W3 para traducir el "¿Ahora qué?" en compromisos individuales inmediatos.',
      ecocyclePhase: 'Integración general del Ecociclo',
      explanation: '¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (#11) evita que el grupo salte a soluciones simplistas antes de analizar el panorama integral.'
    }
  },
  4: {
    en: {
      title: 'String: Energetic Opening and Paired Connection',
      scenario: 'You are facilitating an Ecocycle Planning workshop for 60 professionals from different departments who rarely interact. Which structure opens the String by creating warmth, raising physical energy, and aligning expectations in 3 dynamic rounds of paired conversations?',
      bestChoiceName: 'Impromptu Networking',
      whyItWorks: 'In 15 minutes and 3 rounds with different peers, it distributes speaking time equally to 100% of attendees, breaks formality, and introduces core questions.',
      scenarioClue: '"creating warmth, raising physical energy, and aligning expectations in 3 dynamic rounds of paired conversations"',
      inStringRole: 'Before Ecocycle Planning (Opening, icebreaker, and interpersonal connection)',
      stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Appreciative Interviews (#16) can be used if the team is demoralized and needs to recall success stories first.',
      ecocyclePhase: 'Session opening / Preparatory phase',
      explanation: 'Impromptu Networking (#2) seamlessly opens the String, setting the emotional and relational stage for the honesty needed in Ecocycle Planning.'
    },
    es: {
      title: 'String: Apertura Enérgica y Conexión en Parejas',
      scenario: 'Vas a facilitar un taller de Ecocycle Planning para 60 profesionales de distintas áreas que rara vez interactúan. ¿Qué estructura abre la String generando bienvenida, elevando la energía corporal y alineando expectativas en 3 rondas dinámicas de conversación en parejas?',
      bestChoiceName: 'Networking Espontáneo (Impromptu Networking)',
      whyItWorks: 'En unos 15 minutos y 3 rondas con distintas personas, reparte la palabra al 100% de los presentes, disuelve la rigidez y plantea las preguntas clave.',
      scenarioClue: '"generando bienvenida, elevando la energía corporal y alineando expectativas en 3 rondas dinámicas de conversación en parejas"',
      inStringRole: 'Antes del Ecocycle Planning (Apertura, rompehielos y conexión interpersonal)',
      stringSequence: 'Networking Espontáneo (#2) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Entrevistas Apreciativas (#16) puede usarse si el equipo está desmotivado y necesita rescatar historias de éxito previas.',
      ecocyclePhase: 'Apertura del taller / Fase preparatoria',
      explanation: 'Networking Espontáneo (#2) encaja con total fluidez en la apertura de la String para predisponer al grupo a la honestidad requerida.'
    }
  },
  5: {
    en: {
      title: 'String: Expanding Full Participation in Ecocycle Planning',
      scenario: 'You want to enrich Ecocycle Planning with a structure that expands participation before collective consolidation and reduces hierarchical dominance, ensuring even the quietest introverts have equal contribution space alongside senior directors. Which structure should guide reflection and clustering?',
      bestChoiceName: '1-2-4-All',
      whyItWorks: 'Gives each person 1 min silent reflection, 2 min in pairs, and 4 min in fours before sharing with the full room, neutralizing conversational dominance.',
      scenarioClue: '"expands participation before collective consolidation and reduces hierarchical dominance, ensuring 100% contribute"',
      inStringRole: '1-2-4-All (Precedes and guides collective participation) ➔ Ecocycle Planning (Inclusive mapping)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Conversation Café (#14) can be used for sensitive or polarized topics within specific quadrants.',
      ecocyclePhase: 'Mapping across all Ecocycle quadrants',
      explanation: '1-2-4-All (#1) ensures every voice contributes depth before sticky notes are posted to the diagram.'
    },
    es: {
      title: 'String: Ampliando la Participación Total en el Ecociclo',
      scenario: 'Deseas enriquecer el Ecocycle Planning con una estructura que amplíe la participación antes de la consolidación grupal y mitigue jerarquías, asegurando que los colaboradores más introvertidos tengan el mismo espacio que los directores. ¿Qué estructura debe conducir la reflexión y agrupamiento?',
      bestChoiceName: '1-2-4-Todos (1-2-4-All)',
      whyItWorks: 'Garantiza 1 min de silencio individual, 2 min en parejas y 4 min en cuartetos antes de llevar ideas al plenario, neutralizando protagonismos.',
      scenarioClue: '"amplíe la participación antes de la consolidación grupal y mitigue jerarquías, asegurando que el 100% de los presentes contribuyan"',
      inStringRole: '1-2-4-Todos (Precede y conduce la participación colectiva) ➔ Ecocycle Planning (Mapeo inclusivo)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Conversation Café (#14) puede aplicarse en temas especialmente sensibles dentro de cada cuadrante.',
      ecocyclePhase: 'Mapeo de todos los cuadrantes del Ecociclo',
      explanation: '1-2-4-Todos (#1) garantiza que todas las voces sumen profundidad antes de pegar post-its en el diagrama.'
    }
  },
  6: {
    en: {
      title: 'String: Core Purpose as Portfolio Compass',
      scenario: 'Before asking the team to decide which products and initiatives should be kept or discontinued in Ecocycle Planning, you notice leaders disagree on the company’s reason for existing. Which structure should precede Ecocycle Planning in the String, excavating the team’s core purpose through successive paired questioning?',
      bestChoiceName: '9 Whys',
      whyItWorks: '9 Whys uncovers root motivations and provides the clear benchmark needed to judge what belongs in Maturity or Creative Destruction.',
      scenarioClue: '"nobody agrees on the real purpose... excavating the team\'s core purpose through successive paired questioning"',
      inStringRole: 'Before Ecocycle Planning (Building strategic compass and selection criteria)',
      stringSequence: '9 Whys (#3) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Purpose to Practice (P2P) (#33) can complement if the team needs to unpack purpose into principles and structure.',
      ecocyclePhase: 'Preparatory phase / Gestation and Purpose',
      explanation: '9 Whys (#3) clarifies root purpose, giving the group shared criteria to decide what to sustain or sunset.'
    },
    es: {
      title: 'String: Propósito Esencial como Brújula de Portafolio',
      scenario: 'Antes de pedir al equipo que decida qué productos mantener o descartar en el Ecocycle Planning, notas que los líderes discrepan sobre la razón de ser de la empresa. ¿Qué estructura debe preceder al Ecociclo en la String, indagando el porqué esencial del equipo mediante preguntas sucesivas en parejas?',
      bestChoiceName: '9 Porqués (9 Whys)',
      whyItWorks: '9 Porqués profundiza en la motivación colectiva y crea la referencia necesaria para juzgar qué pertenece a Madurez o Destrucción.',
      scenarioClue: '"nadie coincide en el propósito real... indagando el porqué esencial del equipo mediante preguntas sucesivas en parejas"',
      inStringRole: 'Antes del Ecocycle Planning (Construcción del norte estratégico y criterio de elección)',
      stringSequence: '9 Porqués (#3) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'Purpose to Practice (P2P) (#33) puede complementar si el equipo requiere traducir el propósito en principios y gobernanza.',
      ecocyclePhase: 'Fase preparatoria / Gestación y Propósito',
      explanation: '9 Porqués (#3) aporta claridad al propósito raíz para discernir qué sostener o discontinuar en el Ecociclo.'
    }
  },
  7: {
    en: {
      title: 'String: Pruning Bureaucratic Red Tape',
      scenario: 'Ecocycle Planning revealed operational processes are suffering from bureaucratic hypertrophy in Maturity, choking agility. Which structure in the String is designed to prune these restrictions and identify only the non-negotiable minimum rules (Must Do / Must Not Do)?',
      bestChoiceName: 'Min Specs',
      whyItWorks: 'Forces the team to distinguish rules vital for safety/success from mere bureaucratic habits, freeing immediate operational capacity.',
      scenarioClue: '"hypertrophy of rules and manuals in Maturity... prune these restrictions and identify only non-negotiable minimum rules (Must Do / Must Not Do)"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ Min Specs (Intervention in Rigidity Trap)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19)',
      anotherPossibility: 'TRIZ (#8) can precede or follow Min Specs to laugh at absurd excess rules before pruning them.',
      ecocyclePhase: 'Rigidity Trap / Maturity',
      explanation: 'Min Specs (#19) unblocks the Rigidity Trap in Ecocycle Planning by defining only what is strictly mandatory.'
    },
    es: {
      title: 'String: Desengrasando Procesos Burocráticos',
      scenario: 'El Ecocycle Planning reveló que los procesos operativos sufren hipertrofia de normas en Madurez, sofocando la agilidad. ¿Qué estructura en la String está indicada para podar restricciones e identificar solo las reglas mínimas innegociables (Debe Hacerse / No Debe Hacerse)?',
      bestChoiceName: 'Especificaciones Mínimas (Min Specs)',
      whyItWorks: 'Obliga a distinguir normas indispensables para el éxito de meros hábitos burocráticos, liberando capacidad operativa inmediata.',
      scenarioClue: '"hipertrofia de normas en Madurez... podar restricciones e identificar solo las reglas mínimas innegociables"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ Min Specs (Intervención en la Trampa de la Rigidez)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19)',
      anotherPossibility: 'TRIZ (#8) puede preceder a Min Specs para reírse del exceso de burocracia antes de podarla.',
      ecocyclePhase: 'Trampa de la Rigidez / Madurez',
      explanation: 'Especificaciones Mínimas (#19) actúa con gran eficacia para destrabar la Trampa de la Rigidez en el Ecociclo.'
    }
  },
  8: {
    en: {
      title: 'String: Rapid Peer Consulting for Bottlenecked Projects',
      scenario: 'After mapping on Ecocycle Planning, 6 leaders with projects trapped in the Poverty Trap need immediate peer advice. Which structure organizes the room into 10-minute trios where the owner presents the dilemma, sits with their back turned to listen to colleagues discuss, and walks away with actionable ideas?',
      bestChoiceName: 'Troika Consulting',
      whyItWorks: 'Listening with back turned prevents defensiveness, allowing peer intelligence to offer objective practical solutions in rapid cycles.',
      scenarioClue: '"organizes the room into 10-minute trios where the owner presents the problem, sits with back turned to listen, and walks away with new paths"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ Troika Consulting (Practical peer coaching)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Troika Consulting (#6)',
      anotherPossibility: 'Wise Crowds (#7) is an alternative if challenges are systemic and require a larger advisory panel.',
      ecocyclePhase: 'Poverty Trap',
      explanation: 'Troika Consulting (#6) delivers fresh, practical advice to multiple leaders in under 30 minutes to unblock the Poverty Trap.'
    },
    es: {
      title: 'String: Asesoría Rápida para Proyectos Trabados',
      scenario: 'Tras mapear en el Ecociclo, 6 líderes con proyectos en la Trampa de la Pobreza requieren asesoría rápida entre pares. ¿Qué estructura organiza la sala en tríos de 10 minutos por ronda, donde el responsable expone, se sienta de espaldas a escuchar a sus colegas y se retira con nuevas ideas?',
      bestChoiceName: 'Consultoría Troika (Troika Consulting)',
      whyItWorks: 'Escuchar de espaldas evita la reactividad y permite que la inteligencia colectiva ofrezca soluciones prácticas sin justificaciones defensivas.',
      scenarioClue: '"organiza la sala en tríos de 10 min por ronda donde el responsable expone, se sienta de espaldas a escuchar y sale con nuevos caminos"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ Troika Consulting (Asesoría entre pares)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Troika Consulting (#6)',
      anotherPossibility: 'Multitudes Sabias (#7) es opción complementaria si el reto es sistémico y demanda un panel consultivo mayor.',
      ecocyclePhase: 'Trampa de la Pobreza',
      explanation: 'Consultoría Troika (#6) es ideal para destrabar iniciativas en la Trampa de la Pobreza con apoyo ágil de colegas.'
    }
  },
  9: {
    en: {
      title: 'String: Rapid Seeding for the Gestation Quadrant',
      scenario: 'Ecocycle Planning revealed very few initiatives in Gestation: the company lacks future bets in the pipeline. You want 70 people to generate and democratically select the top 10 boldest ideas in just 25 minutes with anonymous scoring. Which structure should be coupled in the String?',
      bestChoiceName: '25/10 Crowd Sourcing',
      whyItWorks: 'Combines concise card writing, energetic musical card swapping, and anonymous scoring across 5 rapid rounds to rank ideas without hierarchical bias.',
      scenarioClue: '"generate and democratically select the top 10 boldest ideas in just 25 minutes with anonymous scoring"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ 25/10 Crowd Sourcing (Nourishing Gestation)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowd Sourcing (#13)',
      anotherPossibility: '1-2-4-All (#1) can be used as a more reflective alternative if time is abundant or group is smaller.',
      ecocyclePhase: 'Gestation',
      explanation: '25/10 Crowd Sourcing (#13) fuels Gestation on the Ecocycle by mobilizing collective imagination at scale.'
    },
    es: {
      title: 'String: Siembra Rápida para la Gestación',
      scenario: 'El Ecocycle Planning mostró pocas iniciativas en Gestación: la empresa no tiene proyectos de futuro en cartera. Deseas que 70 personas generen y elijan democráticamente las 10 ideas más audaces en solo 25 minutos con votación anónima. ¿Qué estructura incorporar a la String?',
      bestChoiceName: '25/10 Crowd Sourcing',
      whyItWorks: 'Combina síntesis en tarjetas, intercambio lúdico con música y calificación anónima en 5 rondas veloces para rankear ideas sin sesgos.',
      scenarioClue: '"generen y elijan democráticamente las 10 ideas más audaces en solo 25 minutos con votación anónima"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ 25/10 Crowd Sourcing (Nutrir Gestación)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowd Sourcing (#13)',
      anotherPossibility: '1-2-4-Todos (#1) puede usarse como alternativa reflexiva si el grupo es más reducido.',
      ecocyclePhase: 'Gestación',
      explanation: '25/10 Crowd Sourcing (#13) funciona formidablemente para alimentar la fase de Gestación del Ecociclo.'
    }
  },
  10: {
    en: {
      title: 'String: Explicit Agreements Between Conflicting Silos',
      scenario: 'Ecocycle Planning showed new projects will only progress if IT and Sales collaborate, but they are stuck in friction and vague promises. Which structure in the String forces each group to state direct requests and receive unambiguous answers of "Yes", "No", "I Will Try", or "Clarify"?',
      bestChoiceName: 'What I Need From You (WINFY)',
      whyItWorks: 'Eliminates cross-departmental excuses by establishing a strict protocol of clear requests followed by four binding, categorical responses.',
      scenarioClue: '"forces each group to state direct requests and receive transparent, unambiguous answers of \'Yes\', \'No\', \'I Will Try\', or \'Clarify\'"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ What I Need From You (WINFY) (Interdepartmental dependency contracting)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ What I Need From You (WINFY) (#30)',
      anotherPossibility: 'Integrated~Autonomy (#29) can be used if friction stems from a systemic struggle between centralized control and local liberty.',
      ecocyclePhase: 'Poverty Trap / Interdepartmental boundary',
      explanation: 'What I Need From You (WINFY) (#30) unties relational deadlocks holding projects back in the Poverty Trap, replacing evasive meetings with clear service commitments.'
    },
    es: {
      title: 'String: Acuerdos Explícitos entre Áreas en Conflicto',
      scenario: 'El Ecocycle Planning mostró que los nuevos proyectos solo avanzarán si TI y Comercial cooperan, pero viven en roces y promesas vagas. ¿Qué estructura en la String obliga a cada grupo a plantear pedidos directos y recibir respuestas inequívocas de "Sí", "No", "Lo Intentaré" o "Aclaración"?',
      bestChoiceName: 'Lo Que Necesito de Ti (What I Need From You - WINFY)',
      whyItWorks: 'Elimina excusas interdepartamentales instaurando un protocolo riguroso de pedidos claros y cuatro respuestas categóricas vinculantes.',
      scenarioClue: '"obliga a cada grupo a plantear pedidos directos y recibir respuestas transparentes e inequívocas de \'Sí\', \'No\', \'Lo Intentaré\' o \'Aclaración\'"',
      inStringRole: '1-2-4-Todos (Apertura) ➔ Ecocycle Planning ➔ Lo Que Necesito de Ti (WINFY) (Pactos interdepartamentales)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Lo Que Necesito de Ti (WINFY) (#30)',
      anotherPossibility: 'Autonomía Integrada (#29) puede usarse si la fricción proviene de un choque entre centralización y libertad local.',
      ecocyclePhase: 'Trampa de la Pobreza / Frontera entre áreas',
      explanation: 'Lo Que Necesito de Ti (WINFY) (#30) desata bloqueos relacionales que retienen iniciativas en la Trampa de la Pobreza del Ecociclo.'
    }
  },
  11: {
    en: {
      title: 'String: Bureaucratic Detachment and Autonomous Action',
      scenario: 'An operations department is suffocated by legacy routines. To facilitate a liberating Ecocycle Planning, you need: (1) before Ecocycle Planning, provoke the team to laugh and let go of counterproductive habits, and (2) right after mapping, have each person commit to immediate actions within their own autonomy. Which 2 structures form this String with Ecocycle Planning?',
      bestChoiceName: 'TRIZ (#8) and 15% Solutions (#5)',
      whyItWorks: 'TRIZ clears dysfunctional practices prior to mapping, and 15% Solutions turns Ecocycle insights into concrete actions without requiring upper approval.',
      scenarioClue: '"before Ecocycle Planning, provoke team to laugh and let go of counterproductive habits... right after mapping, commit to immediate actions within individual autonomy"',
      inStringRole: 'TRIZ (Before Ecocycle) ➔ Ecocycle Planning (During) ➔ 15% Solutions (After)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
      anotherPossibility: 'Min Specs (#19) could be inserted between Ecocycle and 15% Solutions to prune rules prior to individual plans.',
      ecocyclePhase: 'Creative Destruction and Poverty Trap',
      explanation: 'TRIZ ➔ Ecocycle Planning ➔ 15% Solutions is a cohesive String for letting go, analyzing portfolio, and activating autonomous execution.'
    },
    es: {
      title: 'String: Desapego Burocrático y Acción Autónoma',
      scenario: 'Un área de operaciones está asfixiada por rutinas obsoletas. Para facilitar un Ecocycle Planning liberador necesitas: (1) antes del Ecociclo, provocar risas y desapego de hábitos contraproducentes, y (2) tras el mapeo, lograr compromisos inmediatos dentro de la autonomía individual. ¿Cuáles 2 estructuras forman esta String?',
      bestChoiceName: 'TRIZ (#8) y Soluciones al 15% (#5)',
      whyItWorks: 'TRIZ depura prácticas disfuncionales antes del mapeo y Soluciones al 15% traduce la lucidez en compromisos inmediatos sin autorizaciones superiores.',
      scenarioClue: '"antes del Ecociclo, provocar risas y desapego de hábitos contraproducentes... y tras el mapeo, compromisos inmediatos dentro de la autonomía individual"',
      inStringRole: 'TRIZ (Antes) ➔ Ecocycle Planning (Centro) ➔ Soluciones al 15% (Después)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) ➔ Soluciones al 15% (#5)',
      anotherPossibility: 'Especificaciones Mínimas (#19) podría intercalarse para podar normas antes de los planes individuales.',
      ecocyclePhase: 'Destrucción Creativa y Trampa de la Pobreza',
      explanation: 'La secuencia TRIZ ➔ Ecocycle Planning ➔ Soluciones al 15% es una String muy sólida para limpiar el terreno y activar ejecución.'
    }
  },
  12: {
    en: {
      title: 'String: Purpose Alignment and Reflective Harvest',
      scenario: 'You were called to facilitate the board’s annual portfolio review. For enduring consistency, you plan to: (1) open by discovering the company’s core purpose through successive "Why?" questions in pairs, and (2) close with a structured debriefing separating facts, meanings, and decisions in 3 steps. Which 2 structures complete both ends of this String?',
      bestChoiceName: '9 Whys (#3) and What, So What, Now What? (W3) (#11)',
      whyItWorks: '9 Whys anchors Ecocycle choices in purpose, while W3 closes by harvesting shared meaning and sound action plans without haste.',
      scenarioClue: '"open by discovering core purpose through successive questions in pairs... and close with structured debriefing in facts, meanings, and decisions"',
      inStringRole: '9 Whys (Before Ecocycle) ➔ Ecocycle Planning ➔ What, So What, Now What? (W3) (After)',
      stringSequence: '9 Whys (#3) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11)',
      anotherPossibility: 'Impromptu Networking (#2) could precede 9 Whys if participants need preliminary interpersonal warm-up.',
      ecocyclePhase: 'Strategic Purpose and General Integration',
      explanation: '9 Whys (#3) anchors purpose before Ecocycle Planning, and What, So What, Now What? (W3) (#11) translates the map into clear decisions.'
    },
    es: {
      title: 'String: Alineación de Propósito y Cosecha Reflexiva',
      scenario: 'Fuiste convocado para facilitar la revisión anual de portafolio con la dirección. Para que tenga impacto duradero planificas: (1) abrir descubriendo el propósito esencial con sucesivos "porqués" en parejas, y (2) cerrar con un debriefing estructurado en hechos, interpretaciones y decisiones. ¿Cuáles 2 estructuras completan los extremos?',
      bestChoiceName: '9 Porqués (#3) y ¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (#11)',
      whyItWorks: '9 Porqués ancla las decisiones en el propósito vital, mientras que W3 extrae significados compartidos y planes ejecutables sin precipitaciones.',
      scenarioClue: '"abrir descubriendo el propósito esencial con preguntas sucesivas en parejas... y cerrar con debriefing en hechos, sentidos y decisiones"',
      inStringRole: '9 Porqués (Antes) ➔ Ecocycle Planning ➔ W3 (Después)',
      stringSequence: '9 Porqués (#3) ➔ Ecocycle Planning (#12) ➔ ¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (#11)',
      anotherPossibility: 'Networking Espontáneo (#2) podría preceder a 9 Porqués si se requiere calentamiento relacional.',
      ecocyclePhase: 'Propósito Estratégico e Integración General',
      explanation: '9 Porqués (#3) clarifica el propósito antes del Ecociclo y W3 (#11) traduce la visión en decisiones lúcidas.'
    }
  },
  13: {
    en: {
      title: 'String: Rescuing Initiatives from the Poverty Trap',
      scenario: 'After Ecocycle Planning, several innovative initiatives were diagnosed as stuck in the Poverty Trap. To assemble a post-Ecocycle rescue String, you need: (1) first, focus on what each project leader can do with their own 15% autonomy, and (2) next, place them in rapid 10-minute peer consulting trios listening with backs turned. Which 2 structures compose this rescue String?',
      bestChoiceName: '15% Solutions (#5) and Troika Consulting (#6)',
      whyItWorks: '15% Solutions sparks personal agency, and Troika Consulting supplies peer cross-intelligence to refine solutions without defensive friction.',
      scenarioClue: '"focus on what each project leader can do with 15% autonomy... next, place them in rapid consulting trios listening with backs turned"',
      inStringRole: '1-2-4-All (Opening) ➔ Ecocycle Planning ➔ 15% Solutions (After 1) ➔ Troika Consulting (After 2)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5) ➔ Troika Consulting (#6)',
      anotherPossibility: 'Wise Crowds (#7) can replace Troika if challenges require broad specialized expertise.',
      ecocyclePhase: 'Poverty Trap',
      explanation: '15% Solutions (#5) restores personal ownership, and Troika Consulting (#6) mobilizes peer collaboration to refine these initial steps.'
    },
    es: {
      title: 'String: Rescate de la Trampa de la Pobreza',
      scenario: 'Tras el Ecociclo, varias iniciativas innovadoras quedaron atrapadas en la Trampa de la Pobreza. Para armar una String de rescate necesitas: (1) enfocarte en lo que cada líder puede hacer con su autonomía del 15%, y (2) ubicarlos en tríos de consultoría rápida escuchando de espaldas. ¿Cuáles 2 estructuras componen esta String?',
      bestChoiceName: 'Soluciones al 15% (#5) y Consultoría Troika (#6)',
      whyItWorks: 'Soluciones al 15% activa la autonomía individual y Consultoría Troika aporta la inteligencia de colegas para pulir soluciones sin reactividad.',
      scenarioClue: '"enfocarse en lo que cada líder puede hacer con su autonomía del 15%... y luego ubicarlos en tríos de consultoría rápida escuchando de espaldas"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Soluciones al 15% ➔ Consultoría Troika',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Soluciones al 15% (#5) ➔ Consultoría Troika (#6)',
      anotherPossibility: 'Multitudes Sabias (#7) puede ser alternativa a la Troika si los retos son altamente técnicos.',
      ecocyclePhase: 'Trampa de la Pobreza',
      explanation: 'Soluciones al 15% (#5) activa el protagonismo y Consultoría Troika (#6) moviliza el apoyo entre pares.'
    }
  },
  14: {
    en: {
      title: 'String: Unsticking Rigidity and Inter-Silo Agreements',
      scenario: 'Ecocycle Planning showed two critical bottlenecks: operations is paralyzed by red tape in Maturity, and business units fail to get commitments from IT. To resolve both impasses post-Ecocycle, which 2 structures prune rules to minimum specifications and articulate direct requests with categorical responses?',
      bestChoiceName: 'Min Specs (#19) and What I Need From You (WINFY) (#30)',
      whyItWorks: 'Min Specs eliminates obsolete regulations choking internal agility, while WINFY establishes explicit, excuse-free cooperation pacts across departments.',
      scenarioClue: '"prune rules to minimum specifications... and articulate direct requests for help with categorical responses"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Min Specs (Unsticking Rigidity) ➔ What I Need From You (WINFY) (Unsticking Poverty between silos)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ What I Need From You (WINFY) (#30)',
      anotherPossibility: 'TRIZ (#8) could prepare the ground for Min Specs by helping the group laugh at excessive red tape.',
      ecocyclePhase: 'Rigidity Trap and Poverty Trap',
      explanation: 'Min Specs (#19) prunes needless restrictions, while WINFY (#30) resolves interdepartmental dependency bottlenecks.'
    },
    es: {
      title: 'String: Destrabando la Rigidez y Acuerdos entre Silos',
      scenario: 'El Ecocycle Planning identificó dos cuellos de botella: operaciones tiene su Madurez atada por exceso de normas y las áreas de negocio no logran compromisos con TI. ¿Qué 2 estructuras tras el Ecociclo deben podar normas a especificaciones mínimas y articular pedidos directos con respuestas categóricas?',
      bestChoiceName: 'Especificaciones Mínimas (#19) y Lo Que Necesito de Ti (WINFY) (#30)',
      whyItWorks: 'Especificaciones Mínimas elimina reglamentos obsoletos y WINFY establece pactos de cooperación explícitos y sin excusas entre gerencias.',
      scenarioClue: '"podar normas a especificaciones mínimas... y articular pedidos directos de ayuda con respuestas categóricas"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Min Specs (Rigidez) ➔ WINFY (Pobreza entre áreas)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ WINFY (#30)',
      anotherPossibility: 'TRIZ (#8) podría preparar el terreno para reírse de las normas absurdas antes de podarlas.',
      ecocyclePhase: 'Trampa de la Rigidez y Trampa de la Pobreza',
      explanation: 'Especificaciones Mínimas (#19) poda la rigidez y WINFY (#30) remueve el cuello de botella de cooperación entre áreas.'
    }
  },
  15: {
    en: {
      title: 'String: Open Innovation and Governance for New Ventures',
      scenario: 'The Ecocycle map revealed an aging portfolio with few Gestation initiatives. You design a String where: (1) first, a large group generates and democratically ranks the top 10 boldest ideas with anonymous scoring, and (2) for the top idea, the team designs the 5 core structural elements (Purpose, Principles, Participants, Structure, Practices). Which 2 structures form this innovation String?',
      bestChoiceName: '25/10 Crowd Sourcing (#13) and Purpose to Practice (P2P) (#33)',
      whyItWorks: '25/10 Crowd Sourcing sparks collective imagination to seed innovative bets, and Purpose to Practice (P2P) provides institutional skeleton for sustainable governance.',
      scenarioClue: '"generates and democratically ranks the top 10 boldest ideas... and designs the 5 core elements (Purpose, Principles, Participants, Structure, Practices)"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ 25/10 Crowd Sourcing (Ideation) ➔ Purpose to Practice (P2P) (Structuring)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowd Sourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
      anotherPossibility: '1-2-4-All (#1) can precede 25/10 Crowd Sourcing (#13) to mature provocative questions about the future.',
      ecocyclePhase: 'Gestation',
      explanation: '25/10 Crowd Sourcing (#13) seeds daring proposals in Gestation, and Purpose to Practice (P2P) (#33) translates the winning idea into clear governance.'
    },
    es: {
      title: 'String: Innovación Abierta y Gobernanza de Nuevos Proyectos',
      scenario: 'El Ecociclo mostró un portafolio envejecido sin iniciativas en Gestación. Diseñas una String donde: (1) un grupo grande genera y rankea democráticamente las 10 ideas más audaces con votación anónima, y (2) para la idea ganadora, el equipo diseña los 5 elementos (Propósito, Principios, Participantes, Estructura, Prácticas). ¿Cuáles 2 estructuras forman esta String?',
      bestChoiceName: '25/10 Crowd Sourcing (#13) y Del Propósito a la Práctica (P2P) (#33)',
      whyItWorks: '25/10 Crowd Sourcing moviliza la creatividad para sembrar ideas en Gestación y P2P brinda el esqueleto institucional para que nazcan con solidez.',
      scenarioClue: '"genera y rankea democráticamente las 10 ideas más audaces... y diseña los 5 elementos esenciales (Propósito, Principios, Participantes, Estructura, Prácticas)"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ 25/10 Crowd Sourcing ➔ Purpose to Practice (P2P)',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowd Sourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
      anotherPossibility: '1-2-4-Todos (#1) puede anteceder a 25/10 Crowd Sourcing para madurar preguntas disparadoras.',
      ecocyclePhase: 'Gestación',
      explanation: '25/10 Crowd Sourcing (#13) siembra propuestas audaces y P2P (#33) las aterriza en un modelo de operación claro.'
    }
  },
  16: {
    en: {
      title: 'String: Psychological Safety and Organizational Grief',
      scenario: 'Creative Destruction in Ecocycle Planning led to sunsetting a legacy business unit, leaving heavy emotions and resentment. To support the human dimension, you need: (1) an empathetic listening space in pairs sharing experiences of not feeling heard, and (2) a calm circular space with a talking object to serenely process the transition. Which 2 structures compose this holding String?',
      bestChoiceName: 'Heard, Seen, Respected (HSR) (#23) and Conversation Café (#14)',
      whyItWorks: 'HSR rebuilds empathy and emotional validation in pairs, while Conversation Café provides an unhurried, safe environment with a talking object to process loss.',
      scenarioClue: '"empathetic listening in pairs sharing experiences of not feeling heard... and calm circular space with a talking object to serenely discuss loss"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Heard, Seen, Respected (HSR) (Empathy) ➔ Conversation Café (Safe dialogue)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Heard, Seen, Respected (HSR) (#23) ➔ Conversation Café (#14)',
      anotherPossibility: 'Appreciative Interviews (#16) can follow to harvest positive lessons left by the sunsetted venture.',
      ecocyclePhase: 'Creative Destruction / Organizational Grief',
      explanation: 'Heard, Seen, Respected (HSR) (#23) and Conversation Café (#14) build psychological safety to process Creative Destruction without bitterness.'
    },
    es: {
      title: 'String: Seguridad Psicológica y Luto Organizacional',
      scenario: 'La Destrucción Creativa en el Ecociclo determinó discontinuar una unidad histórica, generando tristeza y tensión. Para acoger el factor humano necesitas: (1) un espacio de escucha empática en parejas sobre momentos de no haber sido escuchado, y (2) un espacio circular con objeto de la palabra para conversar con serenidad. ¿Cuáles 2 estructuras componen esta String?',
      bestChoiceName: 'Escuchado, Visto, Respetado (HSR) (#23) y Conversation Café (#14)',
      whyItWorks: 'HSR reconstruye la validación emocional individual en parejas y Conversation Café ofrece un entorno seguro para hablar de pérdidas sin debates.',
      scenarioClue: '"escucha empática en parejas sobre experiencias de no ser escuchado... y espacio circular con objeto de la palabra para dialogar serenamente"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Heard, Seen, Respected (HSR) ➔ Conversation Café',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Heard, Seen, Respected (HSR) (#23) ➔ Conversation Café (#14)',
      anotherPossibility: 'Entrevistas Apreciativas (#16) puede introducirse después para rescatar aprendizajes dejados por el ciclo cerrado.',
      ecocyclePhase: 'Destrucción Creativa / Luto Organizacional',
      explanation: 'HSR (#23) y Conversation Café (#14) crean la seguridad necesaria para procesar las consecuencias humanas de la Destrucción Creativa.'
    }
  },
  17: {
    en: {
      title: 'String: Initial Connection and Strategic Network Mapping',
      scenario: 'To facilitate a strategic portfolio transition in Ecocycle Planning with 50 leaders, your String specifies: (1) opening by rapidly connecting everyone and aligning expectations across 3 paired rounds, and (2) after positioning projects, drawing the relational web to identify missing interdepartmental bridges. Which 2 structures complete this String?',
      bestChoiceName: 'Impromptu Networking (#2) and Social Network Webbing (#17)',
      whyItWorks: 'Impromptu Networking warms up the room with horizontal rapport, while Social Network Webbing maps informal ties and missing bridges needed to mobilize resources.',
      scenarioClue: '"rapidly connecting everyone in 3 paired rounds... and drawing relational web to identify where to build bridges between departments"',
      inStringRole: 'Impromptu Networking (Before Ecocycle) ➔ Ecocycle Planning ➔ Social Network Webbing (After)',
      stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12) ➔ Social Network Webbing (#17)',
      anotherPossibility: 'What I Need From You (WINFY) (#30) can conclude the String to formalize commitments on bridges discovered in the network map.',
      ecocyclePhase: 'Systemic connection and resource flow',
      explanation: 'Impromptu Networking (#2) builds initial presence, and Social Network Webbing (#17) maps the informal conduits required for Ecocycle transitions.'
    },
    es: {
      title: 'String: Conexión Inicial y Mapeo de Redes Estratégicas',
      scenario: 'Para facilitar una transición de portafolio con 50 líderes, tu String prevé: (1) abrir conectando a todos velozmente en 3 rondas en parejas, y (2) tras ubicar proyectos en el Ecociclo, dibujar la red de relaciones para identificar puentes faltantes entre áreas. ¿Cuáles 2 estructuras completan la String?',
      bestChoiceName: 'Networking Espontáneo (#2) y Mapeo de Redes Sociales (#17)',
      whyItWorks: 'Networking Espontáneo calienta el grupo y genera sintonía, mientras que Mapeo de Redes Sociales grafica lazos informales y puentes clave.',
      scenarioClue: '"conectar a todos rápidamente en 3 rondas en parejas... y dibujar la red de relaciones para identificar puentes entre departamentos"',
      inStringRole: 'Networking Espontáneo ➔ Ecocycle Planning ➔ Social Network Webbing',
      stringSequence: 'Networking Espontáneo (#2) ➔ Ecocycle Planning (#12) ➔ Social Network Webbing (#17)',
      anotherPossibility: 'Lo Que Necesito de Ti (WINFY) (#30) puede cerrar para pactar compromisos en los puentes descubiertos.',
      ecocyclePhase: 'Conexión sistémica y flujo de recursos',
      explanation: 'Networking Espontáneo (#2) sienta la confianza de partida y Social Network Webbing (#17) materializa los puentes indispensables.'
    }
  },
  18: {
    en: {
      title: 'String: Paradoxical Tensions and Local Autonomy',
      scenario: 'Ecocycle Planning highlighted a chronic dilemma: regional branches want freedom to experiment with new offerings in Gestation, while headquarters demands strict standardization in Maturity. To articulate this in the String, which 2 structures: (1) frame the paradoxical question expressing this legitimate tension, and (2) forge agreements for decentralized autonomy integrated with central coordination?',
      bestChoiceName: 'Wicked Questions (#4) and Integrated~Autonomy (#29)',
      whyItWorks: 'Wicked Questions reframes the false choice between local agility and central control into creative tension, while Integrated~Autonomy operationalizes clear governance criteria.',
      scenarioClue: '"frame the paradoxical question expressing this legitimate tension... and forge agreements for decentralized autonomy integrated with central coordination"',
      inStringRole: 'Wicked Questions (Before or during Ecocycle) ➔ Ecocycle Planning ➔ Integrated~Autonomy (After)',
      stringSequence: 'Wicked Questions (#4) ➔ Ecocycle Planning (#12) ➔ Integrated~Autonomy (#29)',
      anotherPossibility: 'Min Specs (#19) can support Integrated~Autonomy by defining minimum non-negotiable headquarters requirements.',
      ecocyclePhase: 'Tensions between Maturity and Gestation',
      explanation: 'Wicked Questions (#4) names polarized tension constructively, and Integrated~Autonomy (#29) builds operational architecture for local autonomy and central integration.'
    },
    es: {
      title: 'String: Tensiones Paradójicas y Autonomía Local',
      scenario: 'El Ecociclo evidenció un dilema crónico: las filiales reclaman libertad para experimentar en Gestación, mientras la sede exige estandarización rígida en Madurez. Para articular esto en la String, ¿cuáles 2 estructuras deben: (1) formular la pregunta paradójica, y (2) pactar autonomía descentralizada integrada a la coordinación central?',
      bestChoiceName: 'Preguntas Paradójicas (#4) y Autonomía Integrada (#29)',
      whyItWorks: 'Preguntas Paradójicas supera el falso dilema "o innovación o control" y Autonomía Integrada traduce esto en criterios transparentes de gobernanza.',
      scenarioClue: '"formular la pregunta paradójica que expresa esta tensión legítima... y pactar autonomía descentralizada integrada a la coordinación central"',
      inStringRole: 'Preguntas Paradójicas ➔ Ecocycle Planning ➔ Autonomía Integrada',
      stringSequence: 'Preguntas Paradójicas (#4) ➔ Ecocycle Planning (#12) ➔ Autonomía Integrada (#29)',
      anotherPossibility: 'Especificaciones Mínimas (#19) puede apoyar definiendo las reglas mínimas que exige la sede.',
      ecocyclePhase: 'Tensiones entre Madurez y Gestación',
      explanation: 'Preguntas Paradójicas (#4) nombra la tensión constructivamente y Autonomía Integrada (#29) ofrece la arquitectura de gobernanza.'
    }
  },
  19: {
    en: {
      title: 'String: Empirical Field Validation and Dynamic Listening',
      scenario: 'Before deciding which products deserve to remain in Maturity on Ecocycle Planning, the team needs factual behavioral evidence. The preparatory String should: (1) instruct developers to silently observe users operating the product in their natural habitat, and (2) hold a dynamic fishbowl dialogue with invited users and an open chair for the audience. Which 2 structures compose this empirical String?',
      bestChoiceName: 'Simple Ethnography (#28) and User Experience Fishbowl (UX Fishbowl) (#15)',
      whyItWorks: 'Simple Ethnography collects unbiased behavioral data, and UX Fishbowl lets the team hear unfiltered customer experiences and pains firsthand.',
      scenarioClue: '"silently observe users using product in natural environment... and hold dynamic fishbowl dialogue with users and open chair"',
      inStringRole: 'Simple Ethnography (Field collection) ➔ UX Fishbowl (Group listening) ➔ Ecocycle Planning (Diagnosis)',
      stringSequence: 'Simple Ethnography (#28) ➔ User Experience Fishbowl (UX Fishbowl) (#15) ➔ Ecocycle Planning (#12)',
      anotherPossibility: 'What, So What, Now What? (W3) (#11) can close observation rounds to synthesize insights before entering Ecocycle Planning.',
      ecocyclePhase: 'Diagnosing Maturity',
      explanation: 'Simple Ethnography (#28) and UX Fishbowl (#15) feed Ecocycle Planning with grounded user data, preventing desk-bound assumptions.'
    },
    es: {
      title: 'String: Validación Empírica en Campo y Escucha Dinámica',
      scenario: 'Antes de decidir qué productos permanecen en Madurez en el Ecociclo, el equipo requiere evidencia real. La String previa debe: (1) guiar a desarrolladores a observar silenciosamente a los usuarios en su entorno real, y (2) organizar un diálogo en formato pecera con clientes invitados y silla vacía para el público. ¿Cuáles 2 estructuras componen esta String?',
      bestChoiceName: 'Etnografía Simple (#28) y Pecera de Experiencia del Usuario (UX Fishbowl) (#15)',
      whyItWorks: 'Etnografía Simple recoge conductas sin distorsiones y UX Fishbowl permite escuchar dolores reales de clientes de primera mano.',
      scenarioClue: '"observar silenciosamente a usuarios en su entorno real... y organizar diálogo en formato pecera con usuarios y silla vacía"',
      inStringRole: 'Etnografía Simple ➔ UX Fishbowl ➔ Ecocycle Planning',
      stringSequence: 'Etnografía Simple (#28) ➔ Pecera de Experiencia del Usuario (#15) ➔ Ecocycle Planning (#12)',
      anotherPossibility: '¿Qué? ¿Y Entonces Qué? ¿Ahora Qué? (W3) (#11) puede cerrar la observación antes del Ecociclo.',
      ecocyclePhase: 'Diagnóstico de la fase de Madurez',
      explanation: 'Etnografía Simple (#28) y UX Fishbowl (#15) nutren el Ecocycle Planning con evidencia genuina de usuarios.'
    }
  },
  20: {
    en: {
      title: 'String: External Shock Resilience and Visual Roadmap',
      scenario: 'The industry is facing rapid technological disruption. To enrich Ecocycle Planning with future foresight, the String must: (1) cross the two most unpredictable variables into 4 future scenarios to stress-test portfolio resilience, and (2) map the resulting transition plan onto chronological visual panels over time. Which 2 structures compose this String with Ecocycle Planning?',
      bestChoiceName: 'Critical Uncertainties (#32) and Design Storyboards (#21)',
      whyItWorks: 'Critical Uncertainties tests the portfolio against 4 plausible alternative worlds, and Design Storyboards translates needed adaptations into a sequential visual execution narrative.',
      scenarioClue: '"cross the two most unpredictable variables into 4 future scenarios to test portfolio... and map transition plan onto chronological visual panels"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Critical Uncertainties (Stress test) ➔ Design Storyboards (Visual roadmap)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Critical Uncertainties (#32) ➔ Design Storyboards (#21)',
      anotherPossibility: '15% Solutions (#5) can accompany Design Storyboards to establish personal ownership for early panel milestones.',
      ecocyclePhase: 'Resilience testing and transition planning',
      explanation: 'Critical Uncertainties (#32) tests portfolio robustness against external surprises, and Design Storyboards (#21) anchors decisions in a shared visual roadmap.'
    },
    es: {
      title: 'String: Resiliencia ante Shocks y Hoja de Ruta Visual',
      scenario: 'El sector enfrenta disrupciones tecnológicas abruptas. Para enriquecer el Ecociclo con visión de futuro, la String debe: (1) cruzar las dos variables más inciertas generando 4 escenarios futuros para probar el portafolio, y (2) mapear el plan de transición en paneles visuales cronológicos. ¿Cuáles 2 estructuras forman esta String?',
      bestChoiceName: 'Incertidumbres Críticas (#32) y Storyboards de Diseño (#21)',
      whyItWorks: 'Incertidumbres Críticas expone el portafolio a cuatro futuros plausibles y Storyboards de Diseño traduce las adaptaciones en una narrativa visual paso a paso.',
      scenarioClue: '"cruzar las dos variables más inciertas generando 4 escenarios futuros... y mapear el plan de transición en paneles visuales cronológicos"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Incertidumbres Críticas ➔ Storyboards de Diseño',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Incertidumbres Críticas (#32) ➔ Storyboards de Diseño (#21)',
      anotherPossibility: 'Soluciones al 15% (#5) puede acompañar a los Storyboards para definir responsables de los primeros cuadros.',
      ecocyclePhase: 'Prueba de resiliencia y planificación de transiciones',
      explanation: 'Incertidumbres Críticas (#32) prueba la solidez del portafolio y Storyboards de Diseño (#21) ancla decisiones en una narrativa visual compartida.'
    }
  },
  21: {
    en: {
      title: 'Master String: Collective Portfolio Transformation',
      scenario: 'You are hired to design a 1-day convention for 120 participants to unstick a stagnant organization. The facilitation architecture around Ecocycle Planning must: (1) open by breaking through dysfunctional practices with reflective humor, (2) use the universal inclusive structure so everyone clusters sticky notes without dominant voices monopolizing the floor, and (3) close by challenging each participant to commit to immediate actions within individual autonomy. Which 3 structures complement Ecocycle Planning?',
      bestChoiceName: 'TRIZ (#8), 1-2-4-All (#1) and 15% Solutions (#5)',
      whyItWorks: 'A consummate facilitation architecture: TRIZ undoes fear and attachment; 1-2-4-All ensures 100% simultaneous inclusion during Ecocycle mapping; and 15% Solutions transforms ecological insight into immediate personal ownership.',
      scenarioClue: '"open by breaking dysfunctional practices with reflective humor... universal inclusive structure for all to place sticky notes... and commit to immediate actions within individual autonomy"',
      inStringRole: 'TRIZ (Opening) ➔ Ecocycle Planning guided via 1-2-4-All (Center) ➔ 15% Solutions (Closing)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) with 1-2-4-All (#1) ➔ 15% Solutions (#5)',
      anotherPossibility: 'What, So What, Now What? (W3) (#11) could be inserted before 15% Solutions (#5) if leadership requests an analytical debrief.',
      ecocyclePhase: 'Full cycle: Letting go ➔ Mapping ➔ Autonomous Action',
      explanation: 'TRIZ deconstructs resistance in the Rigidity Trap, 1-2-4-All enables inclusive collective mapping, and 15% Solutions activates action without hierarchical dependencies.'
    },
    es: {
      title: 'String Maestra: Transformación Colectiva de Portafolio',
      scenario: 'Te contrataron para diseñar una convención de 1 día con 120 personas para destrabar una organización estancada. La arquitectura alrededor del Ecociclo debe: (1) abrir quebrando prácticas disfuncionales con humor reflexivo, (2) usar la estructura universal inclusiva para que todos ubiquen post-its sin acaparar la palabra, y (3) cerrar con compromisos inmediatos dentro de la autonomía individual. ¿Cuáles 3 estructuras complementan el Ecociclo?',
      bestChoiceName: 'TRIZ (#8), 1-2-4-Todos (#1) y Soluciones al 15% (#5)',
      whyItWorks: 'Una combinación impecable: TRIZ disuelve apegos; 1-2-4-Todos asegura inclusión simultánea del 100% en el mapa; y Soluciones al 15% convierte la lucidez en acción autónoma.',
      scenarioClue: '"abrir quebrando prácticas disfuncionales con humor... estructura inclusiva universal para ubicar post-its... y sellar acciones inmediatas en la autonomía individual"',
      inStringRole: 'TRIZ (Apertura) ➔ Ecocycle Planning con 1-2-4-Todos (Centro) ➔ Soluciones al 15% (Cierre)',
      stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) con 1-2-4-Todos (#1) ➔ Soluciones al 15% (#5)',
      anotherPossibility: 'W3 (#11) podría intercalarse antes de Soluciones al 15% si la dirección exige un debriefing analítico.',
      ecocyclePhase: 'Ciclo completo: Desapego ➔ Mapeo ➔ Acción Autónoma',
      explanation: 'TRIZ desarticula la Rigidez, 1-2-4-Todos viabiliza el mapeo colectivo y Soluciones al 15% activa la ejecución sin esperas.'
    }
  },
  22: {
    en: {
      title: 'String: Regeneration and Hope Post-Restructuring',
      scenario: 'Following a painful restructuring, the remaining team needs to find its footing. The journey around Ecocycle Planning must: (1) open by harvesting stories where the team operated at its peak to rebuild confidence, (2) debrief the Ecocycle map in 3 methodical steps (What? So What? Now What?), and (3) mobilize actionable first steps within each member\'s 15% margin of discretion. Which 3 structures compose this journey with Ecocycle Planning?',
      bestChoiceName: 'Appreciative Interviews (#16), What, So What, Now What? (W3) (#11) and 15% Solutions (#5)',
      whyItWorks: 'Appreciative Interviews shifts collective energy from fear to capability; W3 turns the Ecocycle map into sober interpretation; and 15% Solutions channels energy into steps workers directly control.',
      scenarioClue: '"harvesting stories where team operated at its peak... debrief in 3 methodical steps (What? So What? Now What?)... and mobilize first steps in margin of discretion"',
      inStringRole: 'Appreciative Interviews (Opening) ➔ Ecocycle Planning ➔ What, So What, Now What? (W3) (Reflection) ➔ 15% Solutions (Action)',
      stringSequence: 'Appreciative Interviews (#16) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11) ➔ 15% Solutions (#5)',
      anotherPossibility: 'Conversation Café (#14) could precede W3 if grief still requires emotional processing before data analysis.',
      ecocyclePhase: 'Crossing Creative Destruction to Gestation',
      explanation: 'Appreciative Interviews restores psychological safety, Ecocycle maps reality, W3 creates shared meaning, and 15% Solutions seals commitments.'
    },
    es: {
      title: 'String: Regeneración y Esperanza post-Reestructuración',
      scenario: 'Tras una dolorosa reestructuración, el equipo necesita reencontrar el rumbo. La jornada alrededor del Ecociclo debe: (1) abrir rescatando historias donde el equipo operó en su auge, (2) analizar el mapa en 3 pasos metódicos (¿Qué? ¿Y entonces qué? ¿Ahora qué?), y (3) movilizar primeros pasos en el margen de autonomía individual. ¿Cuáles 3 estructuras componen esta jornada?',
      bestChoiceName: 'Entrevistas Apreciativas (#16), W3 (#11) y Soluciones al 15% (#5)',
      whyItWorks: 'Entrevistas Apreciativas transforma el desánimo en confianza; W3 extrae interpretaciones lúcidas; y Soluciones al 15% aterriza compromisos directos.',
      scenarioClue: '"rescatando historias donde el equipo operó en su auge... analizar en 3 pasos metódicos (¿Qué? ¿Y entonces qué? ¿Ahora qué?)... y primeros pasos en la autonomía"',
      inStringRole: 'Entrevistas Apreciativas ➔ Ecocycle Planning ➔ W3 ➔ Soluciones al 15%',
      stringSequence: 'Entrevistas Apreciativas (#16) ➔ Ecocycle Planning (#12) ➔ W3 (#11) ➔ Soluciones al 15% (#5)',
      anotherPossibility: 'Conversation Café (#14) podría preceder a W3 si el duelo aún requiere desahogo emocional.',
      ecocyclePhase: 'Transición de Destrucción Creativa a Gestación',
      explanation: 'Entrevistas Apreciativas restaura la confianza, el Ecociclo ubica el portafolio, W3 da sentido y Soluciones al 15% sella la reconstrucción.'
    }
  },
  23: {
    en: {
      title: 'String: Multi-Trap Unsticking Architecture',
      scenario: 'During Ecocycle Planning, it became clear the organization is caught in both Rigidity (hypertrophied policies) and Poverty (siloed units and hesitant project owners). To design the post-Ecocycle intervention, you need: (1) prune rules to the absolute bare minimum, (2) formalize direct requests and binding responses between executive directors, and (3) organize project owners into rapid 10-minute peer coaching trios. Which 3 structures form this sequence?',
      bestChoiceName: 'Min Specs (#19), What I Need From You (WINFY) (#30) and Troika Consulting (#6)',
      whyItWorks: 'Min Specs unclogs Rigidity by cutting bloated regulations; WINFY resolves Poverty cross-silo deadlock with explicit support; and Troika Consulting empowers project leaders in action refinement.',
      scenarioClue: '"prune rules to absolute minimum... formalize direct requests and binding responses between directors... and organize project owners in 10-minute coaching trios"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Min Specs (Pruning Rigidity) ➔ What I Need From You (WINFY) (Poverty pacts) ➔ Troika Consulting (Peer coaching)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ What I Need From You (WINFY) (#30) ➔ Troika Consulting (#6)',
      anotherPossibility: '15% Solutions (#5) can precede Troika Consulting so leaders enter consulting rounds with initial proposals ready.',
      ecocyclePhase: 'Rigidity Trap and Poverty Trap',
      explanation: 'Min Specs (#19) deprives Rigidity of excessive rules, WINFY (#30) guarantees interdepartmental cooperation, and Troika Consulting (#6) delivers rapid peer coaching.'
    },
    es: {
      title: 'String: Desbloqueo Múltiple de Trampas',
      scenario: 'En el Ecociclo quedó claro que la empresa sufre cuellos de botella en Rigidez (reglamentos obsoletos) y en Pobreza (desarticulación entre áreas y líderes inseguros). Para la intervención posterior requieres: (1) podar normas al mínimo indispensable, (2) formalizar pedidos y respuestas categóricas entre directores, y (3) organizar a los líderes en tríos de consultoría rápida de 10 min. ¿Cuáles 3 estructuras forman esta secuencia?',
      bestChoiceName: 'Especificaciones Mínimas (#19), Lo Que Necesito de Ti (WINFY) (#30) y Consultoría Troika (#6)',
      whyItWorks: 'Min Specs desobstruye la Rigidez podando normas; WINFY resuelve la Pobreza interdepartamental asegurando apoyo explícito; y Troika Consulting potencia a los líderes.',
      scenarioClue: '"podar normas al mínimo indispensable... formalizar pedidos y respuestas categóricas entre directores... y organizar líderes en tríos de consultoría de 10 min"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Min Specs ➔ WINFY ➔ Troika Consulting',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ WINFY (#30) ➔ Troika Consulting (#6)',
      anotherPossibility: 'Soluciones al 15% (#5) puede realizarse antes de Troika para que cada líder traiga su propuesta lista.',
      ecocyclePhase: 'Trampa de la Rigidez y Trampa de la Pobreza',
      explanation: 'Min Specs (#19) agiliza la gobernanza, WINFY (#30) asegura cooperación entre áreas y Troika Consulting (#6) brinda asesoría inmediata.'
    }
  },
  24: {
    en: {
      title: 'String: Innovation Born from Creative Destruction',
      scenario: 'The company\'s oldest flagship product was sent to Creative Destruction on Ecocycle Planning and must now be replaced by an innovative bet in Gestation. The post-Ecocycle String must: (1) frame the paradoxical question balancing stability and disruption, (2) generate and democratically score the top 10 boldest ideas via rapid anonymous review, and (3) establish complete operational governance and practices for the winning initiative. Which 3 structures compose this architecture?',
      bestChoiceName: 'Wicked Questions (#4), 25/10 Crowd Sourcing (#13) and Purpose to Practice (P2P) (#33)',
      whyItWorks: 'Wicked Questions frames the innovative strategic tension; 25/10 Crowd Sourcing unearths collective imagination and selects top hypotheses; and Purpose to Practice (P2P) builds the institutional discipline for project launch.',
      scenarioClue: '"frame paradoxical question balancing stability and disruption... generate and democratically score top 10 boldest ideas... and establish complete operational governance"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Wicked Questions (Framing) ➔ 25/10 Crowd Sourcing (Ideation) ➔ Purpose to Practice (P2P) (Governance)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Wicked Questions (#4) ➔ 25/10 Crowd Sourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
      anotherPossibility: 'Design Storyboards (#21) can illustrate the timeline rollout derived from Purpose to Practice (P2P).',
      ecocyclePhase: 'Creative Destruction ➔ Gestation ➔ Birth',
      explanation: 'Wicked Questions (#4) challenges orthodox thinking, 25/10 Crowd Sourcing (#13) brings daring ideas into Gestation, and P2P (#33) provides solid governance.'
    },
    es: {
      title: 'String: Innovación a partir de la Destrucción Creativa',
      scenario: 'El producto más antiguo fue enviado a Destrucción Creativa en el Ecociclo y debe reemplazarse por una apuesta innovadora en Gestación. La String posterior debe: (1) formular la pregunta paradójica entre estabilidad y disrupción, (2) generar y rankear democráticamente las 10 ideas más audaces con votación anónima, y (3) estructurar la gobernanza y prácticas completas del nuevo proyecto. ¿Cuáles 3 estructuras componen esta arquitectura?',
      bestChoiceName: 'Preguntas Paradójicas (#4), 25/10 Crowd Sourcing (#13) y Purpose to Practice (P2P) (#33)',
      whyItWorks: 'Preguntas Paradójicas delimita la tensión estratégica; 25/10 Crowd Sourcing extrae la creatividad colectiva; y P2P construye la disciplina institucional requerida.',
      scenarioClue: '"formular la pregunta paradójica entre estabilidad y disrupción... generar y rankear democráticamente las 10 ideas más audaces... y estructurar la gobernanza completa"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Preguntas Paradójicas ➔ 25/10 Crowd Sourcing ➔ P2P',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Preguntas Paradójicas (#4) ➔ 25/10 Crowd Sourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
      anotherPossibility: 'Storyboards de Diseño (#21) puede ilustrar la hoja de ruta derivada de P2P (#33).',
      ecocyclePhase: 'Destrucción Creativa ➔ Gestación ➔ Nacimiento',
      explanation: 'Preguntas Paradójicas (#4) desafía supuestos, 25/10 Crowd Sourcing (#13) siembra ideas audaces y P2P (#33) fija las bases de gobernanza.'
    }
  },
  25: {
    en: {
      title: 'String: Multi-Level Network Synchronization and Knowledge Marketplace',
      scenario: 'A network with 12 regional branches needs to synchronize each hub’s Ecocycle Planning with the central holding portfolio. The systemic String must: (1) weave and adapt strategy responding to vital questions across multiple organizational levels, (2) subject complex impasses to multidisciplinary advisory groups with the client listening with their back turned, and (3) disseminate breakthroughs in rotating simultaneous presentation stations. Which 3 structures compose this String?',
      bestChoiceName: 'Strategy Knotworking (#43), Wise Crowds (#7) and Shift & Share (#10)',
      whyItWorks: 'Strategy Knotworking coordinates adaptive cadence across network levels; Wise Crowds offers diverse consultation; and Shift & Share disseminates knowledge across interactive stations.',
      scenarioClue: '"weave and adapt strategy responding to vital questions across multiple levels... subject impasses to multidisciplinary advisory groups... and disseminate breakthroughs in rotating presentation stations"',
      inStringRole: 'Strategy Knotworking (Overall orchestration) ➔ Ecocycle Planning ➔ Wise Crowds (Consulting) ➔ Shift & Share (Diffusion)',
      stringSequence: 'Strategy Knotworking (#43) ➔ Ecocycle Planning (#12) ➔ Wise Crowds (#7) ➔ Shift & Share (#10)',
      anotherPossibility: 'Social Network Webbing (#17) can map informal ties between regional hubs prior to Shift & Share.',
      ecocyclePhase: 'Multi-level ecosystem alignment',
      explanation: 'Strategy Knotworking (#43) maintains living strategy, Wise Crowds (#7) resolves complex bottlenecks, and Shift & Share (#10) spreads winning practices.'
    },
    es: {
      title: 'String: Sincronización Multinivel y Feria de Aprendizajes',
      scenario: 'Una red con 12 filiales necesita sincronizar el Ecociclo de cada polo con el portafolio de la matriz. La String debe: (1) tejer y adaptar la estrategia respondiendo a preguntas vitales en múltiples niveles, (2) someter impasses a la asesoría de grupos multidisciplinarios con el cliente escuchando de espaldas, y (3) difundir aprendizajes en estaciones rotativas de presentación simultánea. ¿Cuáles 3 estructuras componen esta String?',
      bestChoiceName: 'Strategy Knotworking (#43), Multitudes Sabias (#7) y Rotar y Compartir (#10)',
      whyItWorks: 'Strategy Knotworking orquesta el ritmo adaptativo entre niveles; Multitudes Sabias brinda consultoría multidisciplinaria amplia; y Rotar y Compartir difunde el saber de forma interactiva.',
      scenarioClue: '"tejer y adaptar la estrategia respondiendo a preguntas vitales en múltiples niveles... someter impasses a consultoría multidisciplinaria... y difundir en estaciones rotativas de presentación"',
      inStringRole: 'Strategy Knotworking ➔ Ecocycle Planning ➔ Wise Crowds ➔ Shift & Share',
      stringSequence: 'Strategy Knotworking (#43) ➔ Ecocycle Planning (#12) ➔ Wise Crowds (#7) ➔ Shift & Share (#10)',
      anotherPossibility: 'Mapeo de Redes Sociales (#17) puede graficar lazos informales entre unidades antes de Shift & Share.',
      ecocyclePhase: 'Alineación de ecosistema multinivel',
      explanation: 'Strategy Knotworking (#43) sostiene la estrategia viva, Wise Crowds (#7) desata dilemas y Shift & Share (#10) multiplica las mejores prácticas.'
    }
  },
  26: {
    en: {
      title: 'String: Large Group Total Self-Organization',
      scenario: 'You are organizing a 2-day convention with 200 leaders to renew the corporate portfolio. The String must: (1) open by dynamically connecting leaders in rapid paired rounds with provocative questions, (2) after mapping Ecocycle priorities, open the agenda for leaders to self-manage breakout rooms using the Law of Two Feet, and (3) close with a structured debrief across facts, meanings, and actions (What? So What? Now What?). Which 3 structures form this architecture?',
      bestChoiceName: 'Impromptu Networking (#2), Open Space Technology (#31) and What, So What, Now What? (W3) (#11)',
      whyItWorks: 'Impromptu Networking launches with high energy and relational connection; Open Space Technology delegates ownership to attendees to address hot topics; and W3 grounds conclusions into actionable commitments.',
      scenarioClue: '"dynamically connecting leaders in rapid paired rounds... open agenda for self-managed breakout rooms using Law of Two Feet... and close with structured debrief in facts, meanings, and actions"',
      inStringRole: 'Impromptu Networking (Opening) ➔ Ecocycle Planning ➔ Open Space Technology (Deepening) ➔ What, So What, Now What? (W3) (Closing)',
      stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12) ➔ Open Space Technology (#31) ➔ What, So What, Now What? (W3) (#11)',
      anotherPossibility: '25/10 Crowd Sourcing (#13) could seed Open Space Technology (#31) with bold ideas.',
      ecocyclePhase: 'Large scale mobilization / Emergent governance',
      explanation: 'Impromptu Networking creates rapport, Open Space Technology harnesses passion and self-organization around Ecocycle dilemmas, and W3 synthesizes action plans.'
    },
    es: {
      title: 'String: Grandes Grupos con Autoorganización Total',
      scenario: 'Planificas una convención de 2 días con 200 líderes para renovar el portafolio. La String debe: (1) abrir conectando dinámicamente a los líderes en parejas con preguntas provocadoras, (2) tras mapear el Ecociclo, abrir la agenda para salas autogestionadas con la Ley de los Dos Pies, y (3) cerrar con debriefing estructurado en hechos, interpretaciones y acciones (W3). ¿Cuáles 3 estructuras forman esta arquitectura?',
      bestChoiceName: 'Networking Espontáneo (#2), Tecnología de Espacio Abierto (#31) y W3 (#11)',
      whyItWorks: 'Networking Espontáneo inicia con alta energía; Espacio Abierto transfiere la iniciativa a los líderes para trabajar los temas candentes; y W3 aterriza conclusiones en compromisos prácticos.',
      scenarioClue: '"conectar dinámicamente en parejas con preguntas provocadoras... salas autogestionadas con la Ley de los Dos Pies... y cerrar con debriefing en hechos, sentidos y acciones"',
      inStringRole: 'Networking Espontáneo ➔ Ecocycle Planning ➔ Open Space ➔ W3',
      stringSequence: 'Networking Espontáneo (#2) ➔ Ecocycle Planning (#12) ➔ Open Space Technology (#31) ➔ What, So What, Now What? (W3) (#11)',
      anotherPossibility: '25/10 Crowd Sourcing (#13) podría alimentar la apertura del Open Space con ideas audaces.',
      ecocyclePhase: 'Movilización en gran escala / Gobernanza emergente',
      explanation: 'Networking Espontáneo (#2) crea sintonía, Espacio Abierto (#31) activa la pasión autoorganizada y W3 (#11) sintetiza planes conjuntos.'
    }
  },
  27: {
    en: {
      title: 'String: Theatrical Prototyping and Governance Alignment',
      scenario: 'To operationalize a new human interaction designed in Ecocycle Planning, the team must: (1) test difficult interpersonal behaviors through role-play with audience "Freeze!" interventions, (2) formalize agreements balancing front-line autonomy with central compliance, and (3) map the chronological customer journey into sequential visual story panels. Which 3 structures compose this journey?',
      bestChoiceName: 'Improv Prototyping (#20), Integrated~Autonomy (#29) and Design Storyboards (#21)',
      whyItWorks: 'Improv Prototyping builds live behavioral tact before real customer exposure; Integrated~Autonomy pacifies tensions between autonomy and compliance; and Design Storyboards constructs a clear visual timeline.',
      scenarioClue: '"test difficult interpersonal behaviors through role-play with audience interventions... formalize agreements balancing local freedom with compliance... and map chronological sequence into visual panels"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Improv Prototyping (Simulation) ➔ Integrated~Autonomy (Governance) ➔ Design Storyboards (Roadmap)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Improv Prototyping (#20) ➔ Integrated~Autonomy (#29) ➔ Design Storyboards (#21)',
      anotherPossibility: 'UX Fishbowl (#15) could precede Improv Prototyping to collect real customer stories for enactment.',
      ecocyclePhase: 'Transitioning Birth to Maturity',
      explanation: 'Improv Prototyping (#20) develops behavioral agility, Integrated~Autonomy (#29) aligns governance, and Design Storyboards (#21) translates experience into a clear timeline.'
    },
    es: {
      title: 'String: Prototipado Teatral y Alineación de Gobernanza',
      scenario: 'Para poner en práctica una nueva interacción diseñada en el Ecociclo, el equipo necesita: (1) probar conductas e interacciones difíciles con dramatizaciones e intervención del público ("¡Congela!"), (2) formalizar acuerdos que equilibren autonomía local con conformidad central, y (3) mapear la cronología en paneles visuales. ¿Cuáles 3 estructuras componen esta jornada?',
      bestChoiceName: 'Prototipado con Improvisación (#20), Autonomía Integrada (#29) y Storyboards de Diseño (#21)',
      whyItWorks: 'Prototipado con Improvisación desarrolla tacto relacional en vivo; Autonomía Integrada pacifica tensiones entre libertad y control; y Storyboards de Diseño arma la narrativa visual del flujo.',
      scenarioClue: '"probar conductas difíciles con dramatizaciones e intervención del público... acuerdos que equilibren autonomía local con conformidad central... y mapear cronología en paneles visuales"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ Improv Prototyping ➔ Integrated~Autonomy ➔ Design Storyboards',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ Improv Prototyping (#20) ➔ Integrated~Autonomy (#29) ➔ Design Storyboards (#21)',
      anotherPossibility: 'Pecera de Experiencia de Usuario (#15) podría preceder al prototipado para recabar anécdotas de clientes.',
      ecocyclePhase: 'Transición de Nacimiento a Madurez',
      explanation: 'Prototipado con Improvisación (#20) entrena la conducta, Autonomía Integrada (#29) armoniza la gobernanza y Storyboards (#21) da visibilidad temporal.'
    }
  },
  28: {
    en: {
      title: 'String: Relational Diagnosis and Compassionate Dialogue',
      scenario: 'Ecocycle Planning revealed product transitions are blocked due to chronic conflict between two executive directorates with a history of friction. To heal this relational root, you need: (1) diagnose cooperation across the 4 STAR vectors (Separateness, Tuning, Action, Reason), (2) facilitate a calm dialogue with a talking object for non-reactive listening, and (3) guide both units to exchange direct requests and binding responses. Which 3 structures compose this mediation?',
      bestChoiceName: 'Generative Relationships STAR (#26), Conversation Café (#14) and What I Need From You (WINFY) (#30)',
      whyItWorks: 'STAR brings analytical objectivity to relational health; Conversation Café slows reactivity and nurtures listening with a talking object; and WINFY seals explicit, binding service agreements.',
      scenarioClue: '"diagnose cooperation across 4 STAR vectors... calm dialogue with talking object for non-reactive listening... and units exchange direct requests and binding responses"',
      inStringRole: '1-2-4-All ➔ Ecocycle Planning ➔ Generative Relationships STAR (Diagnosis) ➔ Conversation Café (Listening) ➔ What I Need From You (WINFY) (Agreements)',
      stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Generative Relationships STAR (#26) ➔ Conversation Café (#14) ➔ What I Need From You (WINFY) (#30)',
      anotherPossibility: 'Heard, Seen, Respected (HSR) (#23) could serve as opening paired empathy work prior to Conversation Café.',
      ecocyclePhase: 'Healing friction and unblocking the Poverty Trap',
      explanation: 'STAR (#26) pinpoints weak relationship vectors, Conversation Café (#14) restores trust, and WINFY (#30) secures categorical service commitments.'
    },
    es: {
      title: 'String: Diagnóstico Relacional y Diálogo Acompañante',
      scenario: 'El Ecociclo reveló que la transición de proyectos está trabada por conflictos crónicos entre dos gerencias con historial de roces. Para sanar esta raíz relacional necesitas: (1) diagnosticar la cooperación con los 4 vectores STAR (Separación, Sintonía, Acción, Razón), (2) conducir una conversación serena con objeto de la palabra, y (3) intercambiar pedidos y respuestas directas vinculantes. ¿Cuáles 3 estructuras componen esta mediación?',
      bestChoiceName: 'Relaciones Generativas STAR (#26), Conversation Café (#14) y Lo Que Necesito de Ti (WINFY) (#30)',
      whyItWorks: 'STAR brinda objetividad analítica al vínculo; Conversation Café desacelera la reactividad cultivando escucha con objeto de la palabra; y WINFY sella pactos operativos explícitos.',
      scenarioClue: '"diagnosticar cooperación con los 4 vectores STAR... conversación serena con objeto de la palabra... e intercambiar pedidos y respuestas directas vinculantes"',
      inStringRole: '1-2-4-Todos ➔ Ecocycle Planning ➔ STAR ➔ Conversation Café ➔ WINFY',
      stringSequence: '1-2-4-Todos (#1) ➔ Ecocycle Planning (#12) ➔ STAR (#26) ➔ Conversation Café (#14) ➔ WINFY (#30)',
      anotherPossibility: 'Escuchado, Visto, Respetado (HSR) (#23) podría ser acogida previa en parejas antes de Conversation Café.',
      ecocyclePhase: 'Sanación de fricciones y destrabe de la Trampa de la Pobreza',
      explanation: 'STAR (#26) diagnostica las fisuras vinculares, Conversation Café (#14) restablece la escucha y WINFY (#30) cierra acuerdos claros.'
    }
  },
  29: {
    en: {
      title: 'String: Facilitation Metadesign and Strategic Resilience',
      scenario: 'Before leading the Board of Directors through Ecocycle Planning, a master facilitator must: (1) calibrate the metadesign layer across 5 microelements (Invitation, Space, Participation, Groups, Time), (2) test portfolio resilience against 4 extreme scenarios by crossing critical uncertainties, and (3) interview the Board Chair transparently before the room to align strategic premises. Which 3 structures compose this executive preparation?',
      bestChoiceName: '5 Design Elements (#25), Critical Uncertainties (#32) and Celebrity Interview (#22)',
      whyItWorks: '5 Design Elements executes conscious metadesign for every microelement; Celebrity Interview aligns the Chair\'s strategic vision without boring monologues; and Critical Uncertainties tests the portfolio against volatile futures.',
      scenarioClue: '"calibrate metadesign layer across 5 microelements (Invitation, Space, Participation, Groups, Time)... test against 4 extreme scenarios... and interview Board Chair transparently"',
      inStringRole: '5 Design Elements (Metadesign) ➔ Celebrity Interview (Alignment) ➔ Ecocycle Planning ➔ Critical Uncertainties (Resilience)',
      stringSequence: '5 Design Elements (#25) ➔ Celebrity Interview (#22) ➔ Ecocycle Planning (#12) ➔ Critical Uncertainties (#32)',
      anotherPossibility: 'Purpose to Practice (P2P) (#33) can be used if the board needs to design a new governance charter derived from scenarios.',
      ecocyclePhase: 'Metadesign, Governance and Strategic Resilience',
      explanation: '5 Design Elements (#25) provides meeting architecture, Celebrity Interview (#22) connects leadership authentically, and Critical Uncertainties (#32) readies Ecocycle Planning for future turbulence.'
    },
    es: {
      title: 'String: Metadiseño de Facilitación y Resiliencia Estratégica',
      scenario: 'Antes de conducir al Consejo Directivo por el Ecociclo, un facilitador experto debe: (1) calibrar el metadiseño con los 5 microelementos (Invitación, Espacio, Participación, Grupos, Tiempos), (2) evaluar la solidez frente a 4 escenarios extremos cruzando incertidumbres críticas, y (3) entrevistar al Presidente del Consejo de forma transparente ante todos para alinear premisas. ¿Cuáles 3 estructuras forman esta preparación?',
      bestChoiceName: '5 Elementos de Diseño (#25), Incertidumbres Críticas (#32) y Entrevista con Celebridad (#22)',
      whyItWorks: '5 Elementos de Diseño opera el metadiseño consciente estructurando cada microelemento; Entrevista con Celebridad alinea la visión sin monólogos; e Incertidumbres Críticas somete el portafolio a futuros imprevisibles.',
      scenarioClue: '"calibrar capa de metadiseño con los 5 microelementos (Invitación, Espacio, Participación, Grupos, Tiempos)... evaluar frente a 4 escenarios extremos... y entrevistar al Presidente con transparencia"',
      inStringRole: '5 Elementos de Diseño ➔ Celebrity Interview ➔ Ecocycle Planning ➔ Incertidumbres Críticas',
      stringSequence: '5 Elementos de Diseño (#25) ➔ Celebrity Interview (#22) ➔ Ecocycle Planning (#12) ➔ Critical Uncertainties (#32)',
      anotherPossibility: 'Del Propósito a la Práctica (P2P) (#33) puede usarse si el consejo requiere redactar un estatuto derivado de los escenarios.',
      ecocyclePhase: 'Metadiseño, Gobernanza y Resiliencia Estratégica',
      explanation: '5 Elementos (#25) provee la arquitectura del taller, Celebrity Interview (#22) conecta al liderazgo y Critical Uncertainties (#32) blinda el Ecociclo.'
    }
  },
  30: {
    en: {
      title: 'Systemic Design: Core Purpose and Positive Deviance',
      scenario: 'You are facilitating an institutional alignment and evolution cycle in a strategic retreat. The String around Ecocycle Planning must: (1) excavate the organization\'s non-negotiable purpose through successive whys in pairs, (2) investigate and scale positive deviance practices already discovered by frontline workers, and (3) conclude with each participant making a personal commitment within their 15% autonomy. Which 3 structures complete this String?',
      bestChoiceName: '9 Whys (#3), Discovery & Action Dialogue (DAD) (#9) and 15% Solutions (#5)',
      whyItWorks: '9 Whys anchors the portfolio in the organization\'s root purpose; DAD mobilizes practical frontline wisdom that has already solved tough problems; and 15% Solutions returns agency to every collaborator in the present.',
      scenarioClue: '"excavate non-negotiable purpose through successive whys in pairs... investigate and scale positive deviance practices from frontline... and commit within 15% autonomy"',
      inStringRole: '9 Whys (Purpose) ➔ Discovery & Action Dialogue (DAD) (Positive deviance) ➔ Ecocycle Planning ➔ 15% Solutions (Action)',
      stringSequence: '9 Whys (#3) ➔ Discovery & Action Dialogue (DAD) (#9) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
      anotherPossibility: 'Appreciative Interviews (#16) can act in synergy with DAD (#9) to deepen stories of resilience.',
      ecocyclePhase: 'Purpose ➔ Solution Discovery ➔ Ecocycle Planning ➔ Autonomy',
      explanation: '9 Whys (#3) sets the directional compass, DAD (#9) surfaces frontline solutions already proven in practice, and 15% Solutions (#5) translates findings into immediate action.'
    },
    es: {
      title: 'Diseño Sistémico: Propósito y Desviaciones Positivas',
      scenario: 'Facilitarás el ciclo de alineación institucional en un retiro estratégico. La String alrededor del Ecociclo debe: (1) indagar el propósito innegociable con sucesivos porqués en duplas, (2) investigar y valorar desviaciones positivas ya probadas por el personal de operaciones, y (3) cerrar asegurando que cada uno asuma un compromiso en su margen del 15% de autonomía. ¿Cuáles 3 estructuras completan la String?',
      bestChoiceName: '9 Porqués (#3), DAD (#9) y Soluciones al 15% (#5)',
      whyItWorks: '9 Porqués orienta el portafolio al propósito raíz; DAD rescata la sabiduría práctica de la primera línea; y Soluciones al 15% devuelve el poder de acción a cada colaborador.',
      scenarioClue: '"indagar el propósito innegociable con sucesivos porqués en duplas... investigar y valorar desviaciones positivas de la primera línea... y compromisos en margen del 15% de autonomía"',
      inStringRole: '9 Porqués ➔ Discovery & Action Dialogue (DAD) ➔ Ecocycle Planning ➔ Soluciones al 15%',
      stringSequence: '9 Porqués (#3) ➔ DAD (#9) ➔ Ecocycle Planning (#12) ➔ Soluciones al 15% (#5)',
      anotherPossibility: 'Entrevistas Apreciativas (#16) puede actuar en sinergia con DAD para profundizar relatos de superación.',
      ecocyclePhase: 'Propósito ➔ Descubrimiento de Soluciones ➔ Ecocycle Planning ➔ Autonomía',
      explanation: '9 Porqués (#3) ancla el norte, DAD (#9) moviliza las soluciones reales de la operación y Soluciones al 15% (#5) las aterriza en acciones inmediatas.'
    }
  }
};

export function getLocalizedChallenge(challenge: Challenge, lang: string): Challenge {
  const isPt = !lang || lang === 'pt' || lang.startsWith('pt');
  if (isPt) return challenge;

  const localeEntry = CHALLENGES_LOCALIZATION[challenge.id];
  const target = lang.startsWith('es') ? localeEntry?.es : localeEntry?.en;

  if (!target) return challenge;

  return {
    ...challenge,
    title: target.title || challenge.title,
    scenario: target.scenario || challenge.scenario,
    bestChoiceName: target.bestChoiceName || challenge.bestChoiceName,
    whyItWorks: target.whyItWorks || challenge.whyItWorks,
    scenarioClue: target.scenarioClue || challenge.scenarioClue,
    inStringRole: target.inStringRole || challenge.inStringRole,
    stringSequence: target.stringSequence || challenge.stringSequence,
    anotherPossibility: target.anotherPossibility || challenge.anotherPossibility,
    ecocyclePhase: target.ecocyclePhase || challenge.ecocyclePhase,
    explanation: target.explanation || challenge.explanation
  };
}

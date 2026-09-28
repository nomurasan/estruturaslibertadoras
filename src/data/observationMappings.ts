export interface ObservationMapping {
  dimensionId: string;
  structureId: string;
  rationale: string;
  questions: string[];
}

export const OBSERVATION_MAPPINGS: ObservationMapping[] = [
  {
    dimensionId: 'voice',
    structureId: '1',
    rationale: 'A progressão individual, dupla, quarteto e todos pode tornar diferenças na distribuição da voz mais perceptíveis.',
    questions: ['Quem ganhou voz em cada passagem?', 'Quem apresentou a síntese do quarteto?', 'Alguma contribuição desapareceu?'],
  },
  {
    dimensionId: 'voice',
    structureId: '15',
    rationale: 'A organização em aquário permite observar quem participa como ouvinte, narrador ou observador.',
    questions: ['Quem escolheu entrar no centro?', 'O que mudou quando os observadores puderam comentar?'],
  },
  {
    dimensionId: 'listening',
    structureId: '14',
    rationale: 'O Conversation Café cria rodadas de conversa e reflexão que podem tornar padrões de escuta observáveis.',
    questions: ['As pessoas retomaram contribuições anteriores?', 'Que perguntas abriram a conversa?'],
  },
  {
    dimensionId: 'power',
    structureId: '1',
    rationale: 'A progressão reduz a dependência inicial da plenária e pode tornar diferenças de influência mais perceptíveis.',
    questions: ['As ideias mudaram depois da manifestação de pessoas com maior autoridade?', 'Quem representou o coletivo?'],
  },
  {
    dimensionId: 'autonomy',
    structureId: '5',
    rationale: 'A pergunta sobre a margem de ação convida cada pessoa a observar possibilidades sob sua própria responsabilidade.',
    questions: ['Que ações foram nomeadas sem pedir autorização?', 'Onde apareceu dependência de terceiros?'],
  },
  {
    dimensionId: 'trust',
    structureId: '23',
    rationale: 'A troca explícita de reconhecimento pode criar condições para observar o que as pessoas conseguem nomear umas nas outras.',
    questions: ['Que reconhecimentos foram específicos?', 'O que permaneceu difícil de dizer?'],
  },
  {
    dimensionId: 'divergence',
    structureId: '8',
    rationale: 'TRIZ convida o grupo a explicitar como produziria deliberadamente o pior resultado e pode tornar tensões mais visíveis.',
    questions: ['Que divergências apareceram ao nomear práticas indesejáveis?', 'O grupo sustentou a tensão antes de propor mudanças?'],
  },
  {
    dimensionId: 'responsibility',
    structureId: '5',
    rationale: 'A estrutura desloca a conversa para ações que a própria pessoa pode iniciar.',
    questions: ['Que compromissos foram formulados em primeira pessoa?', 'Quais dependências foram distinguidas de desculpas?'],
  },
  {
    dimensionId: 'relationships',
    structureId: '2',
    rationale: 'Rodadas com pares diferentes podem tornar novas conexões e padrões de aproximação mais observáveis.',
    questions: ['Quem conversou com quem?', 'Que conexões não usuais apareceram?'],
  },
  {
    dimensionId: 'facilitation',
    structureId: '11',
    rationale: 'O debrief estruturado pode tornar perceptível como perguntas e tempo de reflexão afetam a aprendizagem coletiva.',
    questions: ['Que perguntas foram respondidas pelo grupo?', 'Onde a facilitação ocupou espaço que poderia ser auto-organizado?'],
  },
  {
    dimensionId: 'facilitation',
    structureId: '12',
    rationale: 'O Ecocycle Planning permanece disponível como uma estrutura para observar padrões do portfólio e da própria condução.',
    questions: ['Que decisões de convite e participação alteraram o que apareceu?', 'Que perguntas o grupo passou a fazer?'],
  },
];

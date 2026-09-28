export type ObservationPerspective = 'self' | 'group' | 'system';

export interface ObservationDimension {
  id: string;
  title: string;
  description: string;
  questions: string[];
  perspectives: Record<ObservationPerspective, string[]>;
}

export const OBSERVATION_DIMENSIONS: ObservationDimension[] = [
  {
    id: 'voice',
    title: 'Voz e participação',
    description: 'Torne perceptível como as contribuições se distribuem no grupo.',
    questions: ['Quem fala?', 'Quem ainda não falou?', 'Quem fala primeiro?', 'As contribuições estão distribuídas?'],
    perspectives: {
      self: ['Como estou distribuindo espaço e tempo de fala?'],
      group: ['Quem ganha voz quando a configuração muda?', 'Quem apresenta as ideias do grupo?'],
      system: ['Que posições parecem ter mais acesso à palavra?'],
    },
  },
  {
    id: 'listening',
    title: 'Escuta',
    description: 'Observe se as pessoas constroem sobre o que ouviram ou apenas aguardam sua vez.',
    questions: ['As pessoas constroem sobre o que ouviram?', 'Perguntam antes de responder?', 'Há interrupções?'],
    perspectives: {
      self: ['Estou interrompendo silêncios antes que o grupo os explore?'],
      group: ['Que sinais mostram escuta entre participantes?'],
      system: ['Quais vozes ou conhecimentos são tratados como referência?'],
    },
  },
  {
    id: 'power',
    title: 'Poder e influência',
    description: 'Explore como posição, autoridade e influência aparecem na conversa.',
    questions: ['A posição hierárquica altera a conversa?', 'Algumas opiniões encerram discussões?', 'O grupo espera a liderança se posicionar?'],
    perspectives: {
      self: ['Como minha posição ou condução interfere no que aparece?'],
      group: ['As ideias mudam após manifestações de pessoas com maior influência?'],
      system: ['Que padrões de dependência ou autoridade se tornam perceptíveis?'],
    },
  },
  {
    id: 'autonomy',
    title: 'Autonomia',
    description: 'Observe como iniciativa, autorização e responsabilidade se distribuem.',
    questions: ['As pessoas propõem ações?', 'Esperam autorização?', 'Assumem iniciativa?'],
    perspectives: {
      self: ['Estou respondendo pelo grupo quando ele poderia experimentar?'],
      group: ['Quem transforma uma percepção em proposta de ação?'],
      system: ['Onde a organização parece concentrar autorização?'],
    },
  },
  {
    id: 'trust',
    title: 'Confiança',
    description: 'Observe sinais de abertura sem transformar a experiência em diagnóstico.',
    questions: ['As pessoas fazem perguntas?', 'Expõem dúvidas?', 'Pedem ajuda?', 'Reconhecem que não sabem?'],
    perspectives: {
      self: ['O que faço para tornar perguntas e dúvidas possíveis?'],
      group: ['Que comportamentos indicam abertura ou cautela?'],
      system: ['Que condições do contexto podem favorecer ou dificultar a exposição?'],
    },
  },
  {
    id: 'divergence',
    title: 'Divergência',
    description: 'Perceba como opiniões diferentes e tensões permanecem ou desaparecem.',
    questions: ['Opiniões diferentes aparecem?', 'O grupo permanece com a tensão?', 'Existe busca prematura por consenso?'],
    perspectives: {
      self: ['Estou direcionando o grupo para uma conclusão cedo demais?'],
      group: ['Como o grupo responde a uma voz minoritária?'],
      system: ['Que tensões do contexto ficam fora da conversa?'],
    },
  },
  {
    id: 'responsibility',
    title: 'Responsabilidade',
    description: 'Observe como os participantes nomeiam sua própria margem de ação.',
    questions: ['Os participantes assumem compromissos?', 'Falam sobre o que os outros precisam fazer?', 'Identificam sua margem de ação?'],
    perspectives: {
      self: ['Estou criando condições para compromissos próprios?'],
      group: ['Que ações são assumidas diretamente pelos participantes?'],
      system: ['Que responsabilidades parecem deslocadas para outras instâncias?'],
    },
  },
  {
    id: 'relationships',
    title: 'Relações',
    description: 'Observe conexões, recorrências e novas aproximações entre pessoas.',
    questions: ['Quem procura quem?', 'Existem grupos recorrentes?', 'Novas conexões aparecem?'],
    perspectives: {
      self: ['Com quem estou criando mais contato durante a facilitação?'],
      group: ['Que conexões novas surgem na experiência?'],
      system: ['Que redes ou silos ficam perceptíveis?'],
    },
  },
  {
    id: 'facilitation',
    title: 'Facilitação',
    description: 'Observe como a condução interfere no espaço de auto-organização.',
    questions: ['O facilitador fala excessivamente?', 'Interrompe o silêncio?', 'Direciona conclusões?', 'Permite auto-organização?'],
    perspectives: {
      self: ['O que minha facilitação torna possível ou limita?'],
      group: ['Como o grupo reage às intervenções e aos silêncios?'],
      system: ['Que regras explícitas ou implícitas organizam a participação?'],
    },
  },
];

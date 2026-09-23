import { RankInfo } from '../types';

export const RANKS: Record<string, RankInfo> = {
  PADAWAN: {
    name: 'Padawan',
    image: 'https://static.wikia.nocookie.net/starwars/images/5/59/ObiWan.png',
    description: 'Reconhecendo Estruturas Libertadoras e suas conexões com o Ecocycle Planning.',
    color: 'text-orange-400',
    pedagogicalRole: 'Reconhece ELs aderentes aos desafios do Ecocycle.'
  },
  JEDI: {
    name: 'Jedi',
    image: 'https://static.wikia.nocookie.net/starwars/images/3/3d/LukeSkywalker.png',
    description: 'Combinando Estruturas Libertadoras em Strings com o Ecocycle Planning.',
    color: 'text-orange-500',
    pedagogicalRole: 'Combina ELs em Strings coerentes com o propósito.'
  },
  YODA: {
    name: 'Mestre Yoda',
    image: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png',
    description: 'Arquitetando experiências de facilitação com Ecocycle Planning e Strings.',
    color: 'text-emerald-400',
    pedagogicalRole: 'Arquitetura experiências completas de facilitação.'
  }
};

export { getRank } from '../utils/progression';


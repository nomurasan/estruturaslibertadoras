import React, { useState } from 'react';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { GameState } from '../types';
import { AI_POWERS } from '../data/powers';

interface TuningSectionViewProps { setGameState: (state: GameState) => void; }
const ELEMENTS = [['invitation', 'Convite'], ['participation', 'Participação'], ['groups', 'Grupos'], ['space', 'Espaço'], ['sequenceTime', 'Sequência & tempo']];
export const TuningSectionView: React.FC<TuningSectionViewProps> = ({ setGameState }) => {
  const [powerId, setPowerId] = useState('1');
  const [values, setValues] = useState<Record<string, string>>({});
  const power = AI_POWERS.find((item) => item.id === powerId) || AI_POWERS[0];
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
    <button onClick={() => setGameState('home')} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white"><ArrowLeft size={15} /> Início</button>
    <header className="space-y-3"><span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zello-orange"><SlidersHorizontal size={14} /> Sintonizar uma EL</span><h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Configure sem perder o <span className="text-zello-orange">princípio.</span></h1><p className="text-slate-300 max-w-2xl leading-relaxed">A configuração original continua como referência. Registre aqui sua adaptação ao contexto.</p></header>
    <select value={powerId} onChange={(event) => setPowerId(event.target.value)} className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white">{AI_POWERS.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select>
    <div className="p-5 rounded-2xl bg-zello-orange/5 border border-zello-orange/20"><span className="text-[10px] font-black uppercase tracking-widest text-zello-orange">Referência original</span><h2 className="text-xl font-black text-white mt-2">{power.title}</h2><p className="text-sm text-slate-300 mt-2">{power.process || 'Consulte o guia da estrutura no Deck.'}</p></div>
    <div className="grid md:grid-cols-2 gap-4">{ELEMENTS.map(([id, label]) => <label key={id} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3"><span className="text-sm font-black uppercase tracking-widest text-white">{label}</span><textarea value={values[id] || ''} onChange={(event) => setValues((current) => ({ ...current, [id]: event.target.value }))} placeholder="Como você quer configurar este elemento?" className="w-full min-h-24 rounded-lg bg-black/20 border border-white/10 p-3 text-sm text-white placeholder:text-slate-600 focus:border-zello-orange/50 focus:outline-none" /></label>)}</div>
  </motion.div>;
};

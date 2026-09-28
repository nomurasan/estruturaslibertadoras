import React, { useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { GameState } from '../types';

interface ReflectionSectionViewProps { setGameState: (state: GameState) => void; }
const FIELDS = [['happened', 'O que aconteceu?'], ['attention', 'O que chamou nossa atenção?'], ['perception', 'O que sentimos ou percebemos?'], ['hypothesis', 'Que hipóteses surgiram?'], ['learning', 'O que aprendemos?'], ['action', 'O que faremos diferente?']];
export const ReflectionSectionView: React.FC<ReflectionSectionViewProps> = ({ setGameState }) => {
  const [notes, setNotes] = useState<Record<string, string>>({});
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
    <button onClick={() => setGameState('home')} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white"><ArrowLeft size={15} /> Início</button>
    <header className="space-y-3"><span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zello-orange"><BookOpen size={14} /> Refletir</span><h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">O que a experiência <span className="text-zello-orange">ensinou?</span></h1><p className="text-slate-300 max-w-2xl leading-relaxed">Registre fatos, percepções e hipóteses em campos separados. Uma hipótese é uma pergunta de investigação, não uma conclusão sobre as pessoas.</p></header>
    <div className="grid md:grid-cols-2 gap-4">{FIELDS.map(([id, label], index) => <label key={id} className={`p-5 rounded-2xl border space-y-3 ${index === 0 || index === 3 ? 'bg-zello-orange/5 border-zello-orange/20' : 'bg-white/[0.04] border-white/10'}`}><span className="text-sm font-black uppercase tracking-widest text-white">{label}</span><textarea value={notes[id] || ''} onChange={(event) => setNotes((current) => ({ ...current, [id]: event.target.value }))} className="w-full min-h-28 rounded-lg bg-black/20 border border-white/10 p-3 text-sm text-white focus:border-zello-orange/50 focus:outline-none" /></label>)}</div>
  </motion.div>;
};

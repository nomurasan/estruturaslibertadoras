import React, { useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { GameState } from '../types';
import { AI_POWERS } from '../data/powers';

interface ExperienceDesignerViewProps {
    setGameState: (state: GameState) => void;
}

const QUESTIONS = [
    ['purpose', 'Qual é o propósito da experiência?'],
    ['participants', 'Quem participará?'],
    ['context', 'Como esse grupo está chegando?'],
    ['output', 'O que esperamos produzir?'],
    ['observation', 'Existe algo que queremos observar?'],
];

export const ExperienceDesignerView: React.FC<ExperienceDesignerViewProps> = ({ setGameState }) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [stringIds, setStringIds] = useState<string[]>(['1']);
    const updateAnswer = (id: string, value: string) => setAnswers((current) => ({ ...current, [id]: value }));
    const addStructure = () => setStringIds((current) => [...current, AI_POWERS.find((power) => !current.includes(power.id))?.id || '1']);
    const move = (index: number, direction: -1 | 1) => {
        const target = index + direction;
        if (target < 0 || target >= stringIds.length) return;
        setStringIds((current) => {
            const next = [...current];
            [next[index], next[target]] = [next[target], next[index]];
            return next;
        });
    };

    return (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8">
            <button onClick={() => setGameState('home')} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white"><ArrowLeft size={15} /> Início</button>
            <header className="space-y-3 max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-zello-orange">Desenhar uma experiência</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Comece pelo <span className="text-zello-orange">propósito.</span></h1>
                <p className="text-slate-300 leading-relaxed">Use as perguntas para organizar seu contexto. A sugestão de String é um rascunho para você revisar, não uma sequência correta automática.</p>
            </header>
            <div className="grid lg:grid-cols-2 gap-4">
                {QUESTIONS.map(([id, label]) => (
                    <label key={id} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                        <span className="text-sm font-black uppercase tracking-widest text-white">{label}</span>
                        <textarea value={answers[id] || ''} onChange={(event) => updateAnswer(id, event.target.value)} className="w-full min-h-24 rounded-lg bg-black/20 border border-white/10 p-3 text-sm text-white focus:border-zello-orange/50 focus:outline-none" />
                    </label>
                ))}
            </div>
            <section className="space-y-4">
                <div className="flex items-center justify-between"><h2 className="text-2xl font-black uppercase italic text-white">String em rascunho</h2><button onClick={addStructure} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zello-orange text-white text-xs font-black uppercase tracking-widest"><Plus size={15} /> Adicionar EL</button></div>
                {stringIds.map((id, index) => {
                    const power = AI_POWERS.find((item) => item.id === id);
                    return <div key={`${id}-${index}`} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10"><span className="text-zello-orange font-black">{index + 1}</span><select value={id} onChange={(event) => setStringIds((current) => current.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} className="flex-1 bg-zinc-900 border border-white/10 rounded-lg p-3 text-white text-sm"><option value={id}>{power?.title || `EL #${id}`}</option>{AI_POWERS.filter((item) => item.id !== id).map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select><button onClick={() => move(index, -1)} aria-label="Mover para cima" className="p-2 text-slate-400 hover:text-white"><ArrowUp size={16} /></button><button onClick={() => move(index, 1)} aria-label="Mover para baixo" className="p-2 text-slate-400 hover:text-white"><ArrowDown size={16} /></button>{stringIds.length > 1 && <button onClick={() => setStringIds((current) => current.filter((_, itemIndex) => itemIndex !== index))} aria-label="Remover estrutura" className="p-2 text-slate-400 hover:text-red-400"><Trash2 size={16} /></button>}</div>;
                })}
            </section>
        </motion.div>
    );
};

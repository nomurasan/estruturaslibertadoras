import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Eye, Layers, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GameState } from '../types';
import { AI_POWERS } from '../data/powers';
import { OBSERVATION_DIMENSIONS, ObservationPerspective } from '../data/observationDimensions';
import { OBSERVATION_MAPPINGS } from '../data/observationMappings';
import { getLocalizedPower } from '../data/powersLocalization';

interface ObserverSectionViewProps {
  setGameState: (state: GameState) => void;
}

const PERSPECTIVES: { id: ObservationPerspective; label: string; description: string }[] = [
  { id: 'self', label: 'EU', description: 'O que está acontecendo comigo e como minha facilitação interfere?' },
  { id: 'group', label: 'GRUPO', description: 'Que comportamentos e interações estão emergindo?' },
  { id: 'system', label: 'SISTEMA', description: 'Que padrões de poder, relação ou organização aparecem?' },
];

export const ObserverSectionView: React.FC<ObserverSectionViewProps> = ({ setGameState }) => {
  const { t, i18n } = useTranslation();
  const [selectedDimensionId, setSelectedDimensionId] = useState<string | null>(null);
  const [perspective, setPerspective] = useState<ObservationPerspective>('group');
  const selectedDimension = OBSERVATION_DIMENSIONS.find((dimension) => dimension.id === selectedDimensionId);
  const localizedPowers = useMemo(() => AI_POWERS.map((power) => getLocalizedPower(power, i18n.language || 'pt-BR')), [i18n.language]);
  const recommendations = useMemo(() => {
    if (!selectedDimensionId) return [];
    return OBSERVATION_MAPPINGS
      .filter((mapping) => mapping.dimensionId === selectedDimensionId)
      .map((mapping) => ({
        ...mapping,
        power: localizedPowers.find((power) => power.id === mapping.structureId),
      }))
      .filter((recommendation) => recommendation.power);
  }, [localizedPowers, selectedDimensionId]);

  const reset = () => {
    setSelectedDimensionId(null);
    setPerspective('group');
  };

  return (
    <motion.div
      key="observer-section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10 font-sans"
    >
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-[10px] font-black uppercase tracking-widest">
          <Eye size={14} /> Observatório EL
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
          O que você quer <span className="text-zello-orange">observar?</span>
        </h1>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Escolha um fenômeno para tornar mais perceptível. As sugestões abaixo não diagnosticam o grupo: elas ajudam a formular perguntas e manter observação e interpretação separadas.
        </p>
      </header>

      {!selectedDimension ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OBSERVATION_DIMENSIONS.map((dimension) => (
            <button
              key={dimension.id}
              onClick={() => setSelectedDimensionId(dimension.id)}
              className="group text-left p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-zello-orange/50 hover:bg-white/[0.07] transition-all min-h-40"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-black text-zello-orange/30 group-hover:text-zello-orange/70">{String(OBSERVATION_DIMENSIONS.indexOf(dimension) + 1).padStart(2, '0')}</span>
                <ArrowRight size={18} className="text-slate-500 group-hover:text-zello-orange group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="text-xl font-black uppercase text-white tracking-tight">{dimension.title}</h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{dimension.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <button onClick={reset} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={15} /> Escolher outra dimensão
          </button>

          <section className="grid lg:grid-cols-[1fr_1.4fr] gap-6 items-start">
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 space-y-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-zello-orange">Dimensão selecionada</span>
              <h2 className="text-3xl font-black uppercase italic tracking-tight text-white">{selectedDimension.title}</h2>
              <p className="text-slate-300 leading-relaxed">{selectedDimension.description}</p>
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Perguntas que podem orientar seu olhar</h3>
                {selectedDimension.questions.map((question) => <p key={question} className="text-sm text-white border-l-2 border-zello-orange/60 pl-3">{question}</p>)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/10">
                {PERSPECTIVES.map((item) => (
                  <button key={item.id} onClick={() => setPerspective(item.id)} className={`py-3 rounded-lg text-xs font-black tracking-widest transition-all ${perspective === item.id ? 'bg-zello-orange text-white' : 'text-slate-400 hover:text-white'}`}>
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="p-5 rounded-2xl border border-zello-orange/20 bg-zello-orange/5">
                <p className="text-sm text-slate-200 leading-relaxed">{PERSPECTIVES.find((item) => item.id === perspective)?.description}</p>
                <div className="mt-4 space-y-2">
                  {selectedDimension.perspectives[perspective].map((question) => <p key={question} className="text-sm text-white">{question}</p>)}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black uppercase italic text-white">ELs que podem criar condições</h2>
                <p className="text-sm text-slate-400 mt-1">Sugestões para investigação, não prescrições ou diagnósticos.</p>
              </div>
              <Layers className="text-zello-orange shrink-0" size={24} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map(({ power, rationale, questions }) => power && (
                <article key={power.id} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zello-orange">EL #{power.id}</span>
                      <h3 className="text-xl font-black text-white mt-1">{power.title}</h3>
                    </div>
                    <button onClick={() => setGameState('deck')} className="text-slate-400 hover:text-zello-orange" aria-label={`Abrir ${power.title}`}><ArrowRight size={18} /></button>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed"><strong className="text-white">Por que pode ser interessante:</strong> {rationale}</p>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">O que observar</h4>
                    {questions.map((question) => <p key={question} className="text-sm text-slate-300">{question}</p>)}
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-3 border-t border-white/10">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">O que observei?</label>
                    <textarea className="min-h-20 rounded-lg bg-black/20 border border-white/10 p-3 text-sm text-white placeholder:text-slate-600 focus:border-zello-orange/50 focus:outline-none" placeholder="Descreva o que aconteceu, sem interpretar." />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <button onClick={reset} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white"><RotateCcw size={14} /> Reiniciar observação</button>
        </div>
      )}
    </motion.div>
  );
};

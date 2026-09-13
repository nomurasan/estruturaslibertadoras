import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Challenge } from '../types';
import { AI_POWERS } from '../data/powers';

interface QuizSectionViewProps {
  levelChallenges: Challenge[];
  currentChallengeIndex: number;
  currentChallenge: Challenge | null;
  selectedLevel: 'PADAWAN' | 'JEDI' | 'YODA' | null;
  score: number;
  selectedSkillIds: number[];
  isAnswered: boolean;
  isAnsweredCorrectly: boolean;
  timeLeft: number;
  aiFeedback: string | null;
  isAiFeedbackLoading: boolean;
  toggleSkillId: (skillId: number) => void;
  confirmAnswers: () => Promise<void>;
  nextChallenge: () => void;
  setActiveVideo: (video: { title: string; url: string } | null) => void;
  currentEnergy?: number;
}

export const QuizSectionView: React.FC<QuizSectionViewProps> = ({
  levelChallenges,
  currentChallengeIndex,
  currentChallenge,
  selectedLevel,
  score,
  selectedSkillIds,
  isAnswered,
  isAnsweredCorrectly,
  timeLeft,
  aiFeedback,
  isAiFeedbackLoading,
  toggleSkillId,
  confirmAnswers,
  nextChallenge,
  setActiveVideo,
  currentEnergy = 65,
}) => {
  if (!currentChallenge) {
    return (
      <div className="p-12 text-center text-slate-400 font-sans">
        Nenhum exercício de String carregado para este nível. Redirecionando...
      </div>
    );
  }

  // Under the game rules, each question displays 6 structures (correct + distractors)
  const optionIds = [
    ...(currentChallenge.correctSkillIds || []),
    ...(currentChallenge.incorrectSkillIds || [])
  ];

  // Pick options matching the combined IDs and sort by numeric ID to interleave naturally
  const finalOptions = AI_POWERS.filter((p) => optionIds.includes(Number(p.id)))
    .sort((a, b) => Number(a.id) - Number(b.id));

  // Determine required number of structures based on level
  const requiredCount =
    selectedLevel === 'PADAWAN' ? 1 : selectedLevel === 'JEDI' ? 2 : 3;

  // Selected structures objects for the visual String builder
  const selectedStructures = selectedSkillIds
    .map((id) => AI_POWERS.find((p) => Number(p.id) === id))
    .filter(Boolean);

  return (
    <motion.div
      key="game-section-view"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-[1450px] mx-auto space-y-8 p-4 md:p-8 font-sans"
    >
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1 bg-zello-orange/15 border border-zello-orange/30 rounded-full text-zello-orange text-[10px] font-black uppercase tracking-widest font-mono">
              Montagem de String • {selectedLevel || 'PADAWAN'}
            </div>
            <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white font-sans">
              {currentChallenge.title || 'Exercício de String com Ecocycle'}
            </h3>
            <button
              onClick={() =>
                setActiveVideo({
                  title: 'Como Funciona o Quiz?',
                  url: 'https://www.youtube.com/embed/RG4Ch3P1Sow?rel=0',
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-zello-orange/30 text-[10px] text-slate-400 hover:text-white font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer group font-sans"
            >
              <LucideIcons.Play size={8} className="fill-slate-400 group-hover:fill-white text-slate-400 group-hover:text-white" />
              Como Funciona o Quiz
            </button>
          </div>

          <div className="flex items-center gap-2 mt-3 select-none">
            {levelChallenges.map((_, idx) => (
              <div
                key={`ch-prog-dot-final-${selectedLevel}-${idx}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentChallengeIndex
                    ? 'w-12 bg-zello-orange'
                    : idx < currentChallengeIndex
                    ? 'w-6 bg-zello-orange/40'
                    : 'w-6 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`px-5 py-2.5 rounded-2xl border transition-all flex items-center gap-3 select-none ${
              timeLeft < 10 ? 'bg-red-500/10 border-red-500/50' : 'bg-white/5 border-white/10'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                timeLeft < 10 ? 'bg-red-500/20' : 'bg-zello-orange/20'
              }`}
            >
              <LucideIcons.Timer className={timeLeft < 10 ? 'text-red-500' : 'text-zello-orange'} size={15} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block leading-none font-mono">Tempo</span>
              <span className={`text-base font-black tabular-nums ${timeLeft < 10 ? 'text-red-500' : 'text-white'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 select-none">
            <div className="w-7 h-7 rounded-full bg-zello-orange/20 flex items-center justify-center">
              <LucideIcons.Layers className="text-zello-orange" size={15} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block leading-none font-mono">Progresso</span>
              <span className="text-base font-black text-white font-mono">
                {currentChallengeIndex + 1} / {levelChallenges.length}
              </span>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 select-none">
            <div className="w-7 h-7 rounded-full bg-zello-orange/20 flex items-center justify-center">
              <LucideIcons.Zap className="text-zello-orange fill-zello-orange" size={15} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block leading-none font-mono">Energia</span>
              <span className="text-base font-black text-zello-orange font-mono">
                {currentEnergy}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {/* Challenge Scenario Box */}
          <div className="p-7 md:p-10 bg-white/5 border border-white/10 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-zello-orange"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 select-none">
                <div className="p-2 bg-zello-orange/10 rounded-xl text-zello-orange">
                  <LucideIcons.HelpCircle size={20} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-zello-orange font-mono">
                  Cenário de Facilitação com Ecocycle Planning
                </span>
              </div>

              <p className="text-xl md:text-2xl font-bold leading-relaxed text-white tracking-tight italic select-text font-sans">
                "{currentChallenge.scenario}"
              </p>
              
              <div className="pt-2 flex items-center gap-2 select-none">
                <LucideIcons.Layers size={14} className="text-zello-orange shrink-0" />
                <span className="text-xs font-semibold text-slate-300">
                  {selectedLevel === 'PADAWAN' && 'Selecione a Estrutura Libertadora mais aderente às pistas deste cenário.'}
                  {selectedLevel === 'JEDI' && 'Selecione as 2 Estruturas Libertadoras que compõem uma String fluida com o Ecocycle.'}
                  {selectedLevel === 'YODA' && 'Selecione as 3 Estruturas Libertadoras que complementam a arquitetura de facilitação.'}
                </span>
              </div>
            </div>
          </div>

          {/* Visual String Flow Builder */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
              <LucideIcons.Sliders size={12} className="text-zello-orange" />
              Pipeline da String:
            </span>

            {selectedStructures.length === 0 ? (
              <span className="text-xs italic text-slate-500">
                Selecione as estruturas abaixo para montar o fluxo da sua String...
              </span>
            ) : (
              selectedStructures.map((struct, idx) => (
                <React.Fragment key={`pipeline-step-${struct!.id}`}>
                  <div className="px-3 py-1.5 rounded-xl bg-zello-orange/20 border border-zello-orange/40 text-white text-xs font-bold flex items-center gap-2">
                    {struct!.drawingUrl && (
                      <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                        <img src={struct!.drawingUrl} alt="" className="max-h-full max-w-full object-contain" />
                      </div>
                    )}
                    <span className="text-[9px] font-mono text-zello-orange font-black">EL #{struct!.id}</span>
                    <span>{struct!.title.split('(')[0].trim()}</span>
                  </div>
                  {idx < selectedStructures.length - 1 && (
                    <LucideIcons.ArrowRight size={13} className="text-zello-orange shrink-0" />
                  )}
                </React.Fragment>
              ))
            )}

            <div className="ml-auto text-[10px] font-mono text-slate-400 font-bold">
              {selectedSkillIds.length} de {requiredCount} selecionada{requiredCount > 1 ? 's' : ''}
            </div>
          </div>

          {/* 6 Structure Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {finalOptions.map((power, idx) => {
              const skillNum = Number(power.id);
              const isSelected = selectedSkillIds.includes(skillNum);
              const isCorrectSkill = currentChallenge.correctSkillIds.includes(skillNum);
              
              // Visual styling depends on answered state
              let cardStyle = 'bg-white/5 border-white/10 hover:border-zello-orange/50 hover:bg-white/10';
              let indicatorColor = 'border-slate-500';
              let indicatorIcon = null;

              if (isAnswered) {
                if (isCorrectSkill) {
                  if (isSelected) {
                    cardStyle = 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20';
                    indicatorColor = 'bg-emerald-500 border-emerald-500 text-white';
                    indicatorIcon = <LucideIcons.Check size={12} />;
                  } else {
                    cardStyle = 'bg-emerald-500/5 border-dashed border-emerald-500/60 opacity-90';
                    indicatorColor = 'border-emerald-500 border-dashed border-2 text-emerald-500 flex items-center justify-center';
                    indicatorIcon = <LucideIcons.Check size={10} />;
                  }
                } else {
                  if (isSelected) {
                    cardStyle = 'bg-red-500/10 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] ring-2 ring-red-500/20';
                    indicatorColor = 'bg-red-500 border-red-500 text-white';
                    indicatorIcon = <LucideIcons.X size={12} />;
                  } else {
                    cardStyle = 'bg-white/2 opacity-30 border-white/5';
                    indicatorColor = 'border-white/10 bg-white/2';
                  }
                }
              } else {
                if (isSelected) {
                  cardStyle = 'bg-white/10 border-zello-orange ring-2 ring-zello-orange/30 shadow-[0_0_15px_rgba(240,90,40,0.15)]';
                  indicatorColor = 'bg-zello-orange border-zello-orange text-white';
                  indicatorIcon = <LucideIcons.Check size={12} />;
                }
              }

              return (
                <button
                  key={`game-opt-btn-${currentChallenge.id}-${power.id}-${idx}`}
                  disabled={isAnswered}
                  onClick={() => toggleSkillId(skillNum)}
                  className={`
                    p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden group min-h-[160px] flex flex-col justify-between cursor-pointer active:scale-[0.98] outline-none focus:ring-2 focus:ring-zello-orange/40
                    ${cardStyle}
                  `}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between w-full select-none space-y-3">
                    <div className="flex items-start justify-between w-full gap-2">
                      <div className="flex items-center gap-2.5">
                        {power.drawingUrl ? (
                          <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-white/20 shadow-sm">
                            <img
                              src={power.drawingUrl}
                              alt={power.title}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 transition-colors ${
                              isSelected && !isAnswered ? 'bg-zello-orange/10 text-zello-orange' : ''
                            } ${isAnswered && isCorrectSkill ? 'bg-emerald-500/10 text-emerald-500' : ''}`}
                          >
                            {React.createElement((LucideIcons as any)[power.icon] || LucideIcons.Zap, { size: 16 })}
                          </div>
                        )}
                        <div>
                          <span className="text-[9px] font-black tracking-widest px-2 py-0.5 bg-white/10 border border-white/10 rounded-md text-zello-orange font-mono">
                            EL #{power.id.padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${indicatorColor} shrink-0`}>
                        {indicatorIcon}
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                        {power.category}
                      </span>
                      <h4 className="text-sm font-black text-white leading-tight font-sans line-clamp-2">
                        {power.title}
                      </h4>
                      {power.englishTitle && (
                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                          {power.englishTitle}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Confirm Button */}
          {!isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                disabled={selectedSkillIds.length === 0}
                onClick={confirmAnswers}
                className={`
                  px-10 py-4 font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer font-sans
                  ${
                    selectedSkillIds.length > 0
                      ? 'bg-zello-orange text-white hover:bg-zello-orange/90 shadow-[0_0_20px_rgba(240,90,40,0.3)]'
                      : 'bg-white/10 text-slate-500 border border-white/5 cursor-not-allowed'
                  }
                `}
              >
                Confirmar String ({selectedSkillIds.length}/{requiredCount})
              </button>
            </div>
          )}

          {/* Feedback Card & 4-Block Pedagogical Breakdown */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Primary Feedback Banner */}
              <div className="p-6 md:p-8 rounded-3xl bg-zello-orange text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30 shrink-0 select-none">
                    {isAnsweredCorrectly ? (
                      <LucideIcons.CheckCircle2 size={32} />
                    ) : (
                      <LucideIcons.Sparkles size={32} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase italic leading-none font-sans">
                      {isAnsweredCorrectly
                        ? 'Boa escolha de facilitação!'
                        : 'Às vezes aprendemos. Às vezes acertamos.'}
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        isAnsweredCorrectly 
                          ? 'bg-emerald-500/30 border border-emerald-400/40 text-emerald-100' 
                          : 'bg-red-950/60 border border-red-400/40 text-red-200'
                      }`}>
                        <LucideIcons.Zap size={13} className="fill-current" />
                        {isAnsweredCorrectly ? '+15% Energia da Força' : '-15% Energia da Força'}
                      </span>
                    </div>
                    <p className="text-white/95 font-medium text-sm mt-2 max-w-xl leading-relaxed">
                      {isAnsweredCorrectly
                        ? 'Sua seleção é muito aderente ao propósito e às pistas deste cenário.'
                        : 'A facilitação é um processo vivo de refinamento. Analise as pistas conceituais abaixo para aprofundar seu repertório.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={nextChallenge}
                  className="px-8 py-4 bg-white text-zello-orange font-black uppercase tracking-widest text-xs rounded-xl hover:bg-slate-100 transition-all whitespace-nowrap active:scale-95 cursor-pointer shadow-lg font-sans"
                >
                  {currentChallengeIndex === levelChallenges.length - 1 ? 'Concluir Quizzes' : 'Próximo Desafio de String'}
                </button>
              </div>

              {/* 4-Block Pedagogical Feedback Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <LucideIcons.Compass size={18} className="text-zello-orange" />
                    <span className="text-xs font-black uppercase tracking-widest text-white font-mono">
                      Análise Pedagógica da Facilitação
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {currentChallenge.inStringRole && (
                      <span className="px-2.5 py-1 rounded-full bg-zello-orange/15 border border-zello-orange/30 text-zello-orange text-[10px] font-bold font-mono">
                        🧭 {currentChallenge.inStringRole}
                      </span>
                    )}
                    {currentChallenge.ecocyclePhase && (
                      <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300 text-[10px] font-bold font-mono">
                        🌐 {currentChallenge.ecocyclePhase}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  {/* Bloco 1: Melhor Escolha */}
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                      <LucideIcons.Check size={14} />
                      1. Melhor escolha
                    </div>
                    <p className="text-white font-bold text-base leading-snug">
                      {currentChallenge.bestChoiceName || currentChallenge.title}
                    </p>
                    {currentChallenge.stringSequence && (
                      <p className="text-xs font-mono text-slate-400 pt-1">
                        Fluxo: <span className="text-zello-orange">{currentChallenge.stringSequence}</span>
                      </p>
                    )}
                  </div>

                  {/* Bloco 2: Por que funciona? */}
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
                      <LucideIcons.Lightbulb size={14} />
                      2. Por que funciona?
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed">
                      {currentChallenge.whyItWorks || currentChallenge.explanation}
                    </p>
                  </div>

                  {/* Bloco 3: Pista do cenário */}
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                      <LucideIcons.Search size={14} />
                      3. Pista do cenário
                    </div>
                    <p className="text-amber-100/90 italic text-xs leading-relaxed">
                      {currentChallenge.scenarioClue || 'As pistas contextuais e o propósito do encontro orientam a escolha da estrutura.'}
                    </p>
                  </div>

                  {/* Bloco 4: Outra possibilidade */}
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider font-mono">
                      <LucideIcons.Shuffle size={14} />
                      4. Outra possibilidade
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {currentChallenge.anotherPossibility || 'Estruturas como Conversation Café ou 15% Solutions também poderiam enriquecer o desenho.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar Mentor Advice */}
        <div className="hidden lg:block space-y-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl min-h-[220px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 select-none">
                <LucideIcons.Sparkles size={14} className="text-zello-orange" />
                <h4 className="text-xs font-black uppercase tracking-widest text-zello-orange font-mono">
                  Conselho do Facilitador Mestre:
                </h4>
              </div>

              <div className="min-h-[110px]">
                {isAiFeedbackLoading ? (
                  <div className="flex flex-col gap-2.5 animate-pulse select-none">
                    <div className="h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    <div className="h-3 bg-white/10 rounded w-4/6"></div>
                  </div>
                ) : (
                  <div className="text-sm italic text-slate-300 leading-relaxed font-medium whitespace-pre-line space-y-2">
                    {isAnswered
                      ? aiFeedback || currentChallenge.explanation
                      : 'Uma String não é uma lista estática de dinâmicas. Cada Estrutura Libertadora recebe uma Entrada, opera uma Transformação com 100% dos participantes e entrega uma Saída que alimenta a etapa seguinte do Ecocycle Planning. Analise o gargalo do cenário e as pistas contextuais.'}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5 select-none">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-500/20 relative border border-emerald-500/30">
                <img
                  src="/Mestre Nomura.png"
                  alt="Mestre Nomura"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {isAiFeedbackLoading && (
                  <div className="absolute inset-0 bg-emerald-500/40 flex items-center justify-center">
                    <LucideIcons.Loader2 className="text-white animate-spin" size={16} />
                  </div>
                )}
              </div>
              <div>
                <span className="text-xs font-black text-white uppercase italic tracking-wider block">Mestre Nomura</span>
                <span className="text-[10px] text-zello-orange font-mono">Facilitador Estratégico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

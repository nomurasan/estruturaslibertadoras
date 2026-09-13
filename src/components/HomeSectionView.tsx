import React from 'react';
import { motion } from 'motion/react';
import { Infinity as InfinityIcon, Play, LayoutGrid, Gamepad2, BarChart2, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GameState } from '../types';

interface HomeSectionViewProps {
  score: number;
  setGameState: (state: GameState) => void;
  setActiveVideo: (video: { title: string; url: string } | null) => void;
}

export const HomeSectionView: React.FC<HomeSectionViewProps> = ({
  score,
  setGameState,
  setActiveVideo,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      key="home-section"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="min-h-full flex flex-col items-center justify-center p-8 text-center space-y-12 max-w-4xl mx-auto font-sans"
    >
      <div className="space-y-6">
        {/* Mobile XP Total element */}
        <div className="md:hidden inline-flex flex-col items-center px-6 py-2 bg-zello-orange/10 rounded-2xl border border-zello-orange/20 min-w-[125px] max-w-fit mx-auto mb-4 select-none">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zello-orange/60 leading-none">
            {t('nav.totalXp', { defaultValue: 'XP Total' })}
          </span>
          <span className="text-xl font-black text-zello-orange tabular-nums mt-1">{score.toLocaleString()}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-xs font-black uppercase tracking-widest">
          <InfinityIcon size={14} className="text-zello-orange" />
          {t('home.freeAccessBadge', { defaultValue: 'Acesso Livre • Estruturas Libertadoras & Ecocycle Planning' })}
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white uppercase italic font-sans">
          {t('home.heroTitle1', { defaultValue: 'ECOCYCLE' })} <br /> <span className="text-zello-orange">{t('home.heroTitle2', { defaultValue: 'PLANNING' })}</span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          {t('home.heroDesc', { defaultValue: 'Domine a arte de desenhar Strings com Estruturas Libertadoras para destravar as Armadilhas da Pobreza e da Rigidez, equilibrar o portfólio no Ecocycle e semear novas iniciativas.' })}
        </p>

        <div className="flex justify-center pt-2 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-[32px] max-w-lg w-full shadow-2xl hover:border-zello-orange/30 transition-all duration-300 group hover:bg-white/[0.07]">
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-zello-orange to-yellow-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative w-24 h-24 rounded-full border-2 border-zello-orange overflow-hidden shadow-[0_0_25px_rgba(240,90,40,0.4)] bg-zinc-950 flex items-center justify-center">
                <img
                  src="/Mestre Nomura.png"
                  alt="Mestre Nomura"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zello-orange/15 to-transparent pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl bg-zinc-900 border border-zello-orange flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <InfinityIcon size={14} className="text-zello-orange animate-pulse" />
              </div>
            </div>

            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[9px] bg-zello-orange/20 text-zello-orange border border-zello-orange/30 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                  {t('home.mentorBadge', { defaultValue: 'Facilitador Mestre' })}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h3 className="text-lg font-black text-white italic uppercase tracking-wider mb-0.5 font-sans">
                {t('home.mentorName', { defaultValue: 'Mestre Nomura' })}
              </h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed max-w-[280px]">
                {t('home.mentorQuote', { defaultValue: '"As Estruturas Libertadoras dão forma à inteligência coletiva. Encadeie-as em Strings harmoniosas em torno do Ecociclo!"' })}
              </p>

              <div className="pt-2">
                <button
                  onClick={() =>
                    setActiveVideo({
                      title: t('home.howJourneyWorks', { defaultValue: 'Como Funciona a Jornada do Ecocycle Planning?' }),
                      url: 'https://www.youtube.com/embed/-SIsDpgvoXs?rel=0',
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zello-orange hover:bg-zello-orange/90 text-white text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(240,90,40,0.3)] hover:shadow-[0_0_30px_rgba(240,90,40,0.5)] transition-all duration-300 cursor-pointer group/btn font-sans"
                >
                  <Play size={10} className="fill-white text-white group-hover/btn:scale-110 transition-transform" />
                  {t('home.howJourneyWorks', { defaultValue: 'Como Funciona a Jornada?' })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAPA DA JORNADA DE APRENDIZAGEM ─── */}
      <div className="space-y-4 max-w-2xl mx-auto text-center select-none pt-4">
        <h2 className="text-xs font-black text-zello-orange uppercase tracking-[0.3em]">
          {t('home.journeyTitle', { defaultValue: 'Sua Jornada com Estruturas Libertadoras' })}
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-4 text-white text-base md:text-lg font-black tracking-wider uppercase italic">
          <span>{t('home.journeyStep1', { defaultValue: 'Explore o Deck' })}</span>
          <span className="text-zello-orange/60">•</span>
          <span>{t('home.journeyStep2', { defaultValue: 'Monte Strings' })}</span>
          <span className="text-zello-orange/60">•</span>
          <span>{t('home.journeyStep3', { defaultValue: 'Dashboard' })}</span>
        </div>
      </div>

      <div className="relative w-full max-w-4xl space-y-8">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Card 01 */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setGameState('deck')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setGameState('deck');
                }
              }}
              className="group relative flex flex-col justify-between gap-6 p-8 bg-white/[0.03] border border-white/10 hover:border-zello-orange/50 rounded-3xl transition-all duration-300 cursor-pointer active:scale-98 select-none text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-zello-orange/20 group-hover:text-zello-orange/40 transition-colors font-mono">01</span>
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-zello-orange/10 transition-colors text-slate-400 group-hover:text-zello-orange">
                    <LayoutGrid size={24} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-black text-3xl text-white uppercase italic tracking-tighter font-sans">
                    {t('home.cardDeckTitle', { defaultValue: 'DECK' })}
                  </h3>
                  <p className="text-zello-orange font-bold text-[10px] uppercase tracking-widest font-mono">
                    {t('home.cardDeckSub', { defaultValue: '43 ESTRUTURAS LIBERTADORAS' })}
                  </p>
                </div>
                
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  {t('home.cardDeckDesc', { defaultValue: 'Conheça todas as 43 Estruturas Libertadoras oficiais com propósito, passos, fluxo sequencial e conexão biológica com o Ecocycle Planning.' })}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-zello-orange text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <span>{t('home.cardDeckBtn', { defaultValue: 'EXPLORAR AS 43 ELS' })}</span>
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Card 02 */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setGameState('level-selection')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setGameState('level-selection');
                }
              }}
              className="group relative flex flex-col justify-between gap-6 p-8 bg-white/[0.03] border border-white/10 hover:border-zello-orange/50 rounded-3xl transition-all duration-300 cursor-pointer active:scale-98 select-none text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-zello-orange/20 group-hover:text-zello-orange/40 transition-colors font-mono">02</span>
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-zello-orange/10 transition-colors text-slate-400 group-hover:text-zello-orange">
                    <Gamepad2 size={24} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-black text-3xl text-white uppercase italic tracking-tighter font-sans">
                    {t('home.cardQuizTitle', { defaultValue: 'QUIZZES' })}
                  </h3>
                  <p className="text-zello-orange font-bold text-[10px] uppercase tracking-widest font-mono">
                    {t('home.cardQuizSub', { defaultValue: 'MONTAGEM DE STRINGS' })}
                  </p>
                </div>
                
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  {t('home.cardQuizDesc', { defaultValue: '30 exercícios desafiadores em 3 níveis (Padawan, Jedi e Yoda) de encadeamento de Strings com o Ecocycle Planning para destravar gargalos.' })}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-zello-orange text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <span>{t('home.cardQuizBtn', { defaultValue: 'MONTAR STRINGS' })}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setGameState('dashboards')}
          className="w-full group relative flex items-center justify-between gap-4 p-8 bg-white/5 border border-white/10 hover:border-zello-orange/50 rounded-3xl transition-all duration-300 overflow-hidden text-left cursor-pointer active:scale-99"
        >
          <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity text-white pointer-events-none">
            <BarChart2 size={120} />
          </div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-zello-orange/10 transition-colors shrink-0">
              <BarChart2 className="text-slate-400 group-hover:text-zello-orange" size={32} />
            </div>
            <div>
              <div className="font-black text-3xl text-slate-200 uppercase italic tracking-tighter group-hover:text-white font-sans">
                {t('home.cardDashTitle', { defaultValue: 'Dashboard de Facilitação' })}
              </div>
              <div className="text-slate-400 font-medium text-sm leading-relaxed mt-1 max-w-xl">
                {t('home.cardDashDesc', { defaultValue: 'Acompanhe o domínio das 43 Estruturas Libertadoras, sua evolução em montagem de Strings e diagnósticos do Ecocycle Planning.' })}
              </div>
            </div>
          </div>
          <ChevronRight size={24} className="text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-zello-orange" />
        </button>
      </div>
    </motion.div>
  );
};


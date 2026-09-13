import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { GameState } from '../types';
import { AI_POWERS, AIPower, CATEGORIES } from '../data/powers';
import { SuperPowerCard } from './SuperPowerCard';

interface DeckSectionViewProps {
  setViewingPower: (power: AIPower | null) => void;
  setGameState: (state: GameState) => void;
  setActiveVideo: (video: { title: string; url: string } | null) => void;
  gameState: GameState;
}

export const DeckSectionView: React.FC<DeckSectionViewProps> = ({
  setViewingPower,
  setGameState,
  setActiveVideo,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPowers = useMemo(() => {
    return AI_POWERS.filter((power) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        power.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (power.englishTitle && power.englishTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
        power.objective.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || power.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <motion.div
      key="deck-section-component"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-[1500px] mx-auto space-y-10 mb-20 p-4 md:p-8 font-sans"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-8 border-b border-white/5">
        <div className="space-y-4 text-center lg:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-xs font-black uppercase tracking-widest">
            <LucideIcons.Sparkles size={14} />
            Repertório Oficial de Facilitação
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white font-sans leading-none">
            Deck das 43 Estruturas Libertadoras
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
            Explore todas as 43 Estruturas Libertadoras oficiais (as 33 clássicas + as 10 adições do Fieldbook em liberatingstructures.com) com seus desenhos característicos, propósitos essenciais, fluxos sequenciais e regras mínimas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <button
              onClick={() => {
                setGameState('home');
              }}
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition-colors cursor-pointer font-sans"
            >
              Voltar ao Início
            </button>
          </div>
        </div>

        {/* Coach Deck Box */}
        <div className="flex flex-col sm:flex-row items-center gap-5 p-6 bg-white/5 border border-white/15 rounded-[32px] max-w-lg w-full shadow-2xl hover:border-zello-orange/30 transition-all duration-300 group hover:bg-white/[0.07] text-left">
          <div className="relative shrink-0 select-none">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-zello-orange to-yellow-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative w-22 h-22 rounded-full border-2 border-zello-orange overflow-hidden shadow-[0_0_25px_rgba(240,90,40,0.4)] bg-zinc-950 flex items-center justify-center">
              <img
                src="/Mestre Nomura.png"
                alt="Mestre Nomura"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zello-orange/15 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-zinc-900 border border-zello-orange flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <LucideIcons.Sparkles size={13} className="text-zello-orange animate-pulse" />
            </div>
          </div>

          <div className="text-center sm:text-left space-y-2 flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[9px] bg-zello-orange/20 text-zello-orange border border-zello-orange/30 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                Facilitador Mestre
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <h3 className="text-base font-black text-white italic uppercase tracking-wider mb-0.5 font-sans">Mestre Nomura</h3>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed max-w-[280px]">
              "Cada Estrutura Libertadora possui um desenho e um propósito próprio. Conheça suas regras simples e prepare-se para combiná-las em Strings nos Quizzes!"
            </p>

            <div className="pt-1">
              <button
                onClick={() =>
                  setActiveVideo({
                    title: 'Como Funciona o Deck das Estruturas Libertadoras?',
                    url: 'https://www.youtube.com/embed/La7fiY38IDA?rel=0',
                  })
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zello-orange hover:bg-zello-orange/90 text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(240,90,40,0.3)] hover:shadow-[0_0_30px_rgba(240,90,40,0.5)] transition-all duration-300 cursor-pointer group/btn font-sans"
              >
                <LucideIcons.Play size={8} className="fill-white text-white group-hover/btn:scale-110 transition-transform" />
                Como Funciona o Deck?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Liberating Structures Core Educational Card */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-zello-orange/10 via-white/[0.02] to-transparent border border-zello-orange/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-zello-orange font-mono text-xs font-black uppercase tracking-widest">
            <LucideIcons.Layers size={16} />
            Repertório Completo: 43 Estruturas Libertadoras
          </div>
          <h4 className="text-xl md:text-2xl font-black text-white italic tracking-tight">
            Regras Mínimas que Libertam 100% da Inteligência Coletiva
          </h4>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Criadas por Henri Lipmanowicz e Keith McCandless (<strong>liberatingstructures.com</strong>), o repertório reúne 43 Estruturas Libertadoras oficiais (33 clássicas e as 10 novas do Fieldbook). Elas substituem reuniões desestruturadas, apresentações passivas e discussões monótonas por métodos acessíveis, inclusivos e ágeis. Cada carta traz o desenho característico, regras de tempo e fluxo sequencial.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/40 border border-white/10 shrink-0">
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-black text-zello-orange italic font-mono">43</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Estruturas</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 mx-2" />
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-black text-white italic font-mono">100%</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Inclusão</span>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <LucideIcons.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome da estrutura, número, objetivo, categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-zello-orange transition-all font-sans"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <LucideIcons.X size={16} />
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2 self-end md:self-center">
            Mostrando <span className="text-zello-orange font-bold font-mono">{filteredPowers.length}</span> de {AI_POWERS.length} estruturas
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-zello-orange text-white shadow-[0_0_15px_rgba(240,90,40,0.3)]'
                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Todas ({AI_POWERS.length})
          </button>

          {Object.entries(CATEGORIES).map(([catKey, catVal]) => {
            const count = AI_POWERS.filter((p) => p.category === catKey).length;
            const isSelected = selectedCategory === catKey;
            const Icon = catVal.icon;

            return (
              <button
                key={`cat-btn-${catKey}`}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-zello-orange text-white shadow-[0_0_15px_rgba(240,90,40,0.3)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={14} />
                {catVal.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredPowers.length === 0 ? (
        <div className="py-20 text-center space-y-4 rounded-3xl bg-white/[0.02] border border-white/5">
          <LucideIcons.SearchX size={48} className="text-slate-600 mx-auto" />
          <h4 className="text-xl font-bold text-white">Nenhuma Estrutura Libertadora encontrada</h4>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Não encontramos estruturas com os termos "{searchTerm}". Tente buscar por outros termos ou limpar os filtros.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-6 py-2.5 bg-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all cursor-pointer"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPowers.map((power, idx) => {
            return (
              <div
                key={`dk-card-f-${power.id}-${idx}`}
                className="relative cursor-pointer transition-all duration-300 active:scale-98 select-none"
                onClick={() => {
                  setViewingPower(power);
                }}
              >
                <SuperPowerCard
                  power={power}
                  isLocked={false}
                  onClick={() => {
                    setViewingPower(power);
                  }}
                  onConsult={() => {
                    setViewingPower(power);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

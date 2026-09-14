import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, LogOut, AlertCircle } from 'lucide-react';

interface PrivacyConsentScreenProps {
    version: string;
    onAccept: () => void | Promise<void>;
    onDecline: () => void | Promise<void>;
}

export const PrivacyConsentScreen: React.FC<PrivacyConsentScreenProps> = ({ version, onAccept, onDecline }) => {
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAccept = async () => {
        if (!agreed) {
            setErrorMessage('Você precisa marcar a ciência e concordância com o aviso de privacidade para continuar.');
            return;
        }
        setIsSubmitting(true);
        setErrorMessage('');
        try {
            await onAccept();
        } catch (err: any) {
            setErrorMessage('Não foi possível registrar seu consentimento: ' + (err?.message || err));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-zello-black text-slate-100 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-zello-orange/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="w-full max-w-2xl z-10 my-4">
                <div className="flex items-center gap-2 px-6 py-4 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-zello-orange flex items-center justify-center text-white shadow-[0_0_15px_rgba(240,90,40,0.4)]">
                        <ShieldCheck size={16} className="fill-white" />
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Primeiro Acesso</span>
                        <h2 className="text-sm font-black uppercase italic tracking-tight text-white leading-none">
                            Aviso de Privacidade e Proteção de Dados
                        </h2>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 space-y-6 shadow-[0_0_50px_rgba(240,90,40,0.05)] relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zello-orange to-transparent"></div>

                    <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">
                            Antes de começar, leia com atenção
                        </h1>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">
                            Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), informamos que esta
                            aplicação coleta e trata dados pessoais necessários ao seu funcionamento, incluindo: e-mail e identificador
                            de conta usados na autenticação; vínculo com sua empresa/turma; progresso, pontuação (XP), respostas e
                            histórico de quizzes e habilidades desbloqueadas.
                        </p>
                    </div>

                    <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar pr-2 text-xs text-slate-400 leading-relaxed bg-black/20 border border-white/5 rounded-2xl p-5">
                        <p><strong className="text-white">Finalidade:</strong> os dados são utilizados exclusivamente para viabilizar sua participação, acompanhar seu progresso pedagógico e gerar indicadores agregados de desempenho para sua empresa/turma.</p>
                        <p><strong className="text-white">Compartilhamento:</strong> administradores da sua empresa/turma podem visualizar indicadores agregados e seu progresso individual dentro do mesmo vínculo organizacional.</p>
                        <p><strong className="text-white">Armazenamento:</strong> os dados são armazenados em serviços de infraestrutura (Firebase/Google Cloud) com controles de acesso e segurança.</p>
                        <p><strong className="text-white">Seus direitos:</strong> você pode solicitar a qualquer momento, junto ao administrador responsável, a confirmação, correção, portabilidade ou eliminação dos seus dados pessoais, nos termos da LGPD.</p>
                        <p><strong className="text-white">Versão do aviso:</strong> {version}. Caso este aviso seja atualizado no futuro, uma nova ciência será solicitada.</p>
                    </div>

                    {errorMessage && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-2xl flex items-center gap-3">
                            <AlertCircle size={16} className="shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <label className="flex items-start gap-3 p-4 bg-slate-900 border-2 border-white/10 rounded-2xl cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => {
                                setAgreed(e.target.checked);
                                setErrorMessage('');
                            }}
                            className="mt-0.5 w-5 h-5 accent-zello-orange cursor-pointer shrink-0"
                        />
                        <span className="text-sm font-bold text-slate-200">
                            Declaro que li e estou ciente do Aviso de Privacidade e concordo com o tratamento dos meus dados pessoais conforme descrito acima.
                        </span>
                    </label>

                    <div className="pt-2 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <button
                            type="button"
                            onClick={() => onDecline()}
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 py-5 bg-white/5 hover:bg-white/10 text-slate-300 font-black uppercase tracking-[0.15em] text-sm rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <LogOut size={16} />
                            Não Concordo / Sair
                        </button>
                        <button
                            type="button"
                            onClick={handleAccept}
                            disabled={isSubmitting || !agreed}
                            className="w-full sm:w-auto px-8 py-5 bg-zello-orange text-white font-black uppercase tracking-[0.15em] text-sm rounded-2xl hover:brightness-110 disabled:opacity-50 active:scale-95 transition-all shadow-[0_0_35px_rgba(240,90,40,0.25)] flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Processando...' : (
                                <>
                                    Concordo e Quero Continuar
                                    <Check size={16} />
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

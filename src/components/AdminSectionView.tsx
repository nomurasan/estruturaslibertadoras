import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Company } from '../types';

interface AdminSectionViewProps {
  user: any;
  userProfile: any;
  allUsers: any[];
  availableCompanies: Company[];
  companyUsers: any[];
  currentCompany: Company | null;
  whitelist: any[];
  newWhitelistedEmail: string;
  setNewWhitelistedEmail: (val: string) => void;
  handleAddWhitelist: () => Promise<void>;
  handleRemoveWhitelist: (id: string) => Promise<void>;
  handleToggleUserAdmin: (userId: string, currentVal: boolean) => Promise<void>;
  handleDeleteUser: (userId: string) => Promise<void>;
  handleResetUserProgress?: (userId: string) => Promise<void>;
  handleJoinCompany: (companyId: string) => Promise<void>;
  handleCreateCompany: () => Promise<void>;
  handleUpdateCompany: () => Promise<void>;
  handleDeleteCompany: (companyId: string) => Promise<void>;
  isCreatingNewCompany: boolean;
  setIsCreatingNewCompany: (val: boolean) => void;
  editingCompany: Company | null;
  setEditingCompany: (company: Company | null) => void;
  isRegisteringCompany: boolean;
  newCompanyName: string;
  setNewCompanyName: (val: string) => void;
  getRank: (completedQuizzesOrXp?: any) => { name: string; color: string };
  isWhitelistingLoading: boolean;
}

export const AdminSectionView: React.FC<AdminSectionViewProps> = ({
  user,
  userProfile,
  allUsers,
  availableCompanies,
  companyUsers,
  currentCompany,
  whitelist,
  newWhitelistedEmail,
  setNewWhitelistedEmail,
  handleAddWhitelist,
  handleRemoveWhitelist,
  handleToggleUserAdmin,
  handleDeleteUser,
  handleResetUserProgress,
  handleJoinCompany,
  handleCreateCompany,
  handleUpdateCompany,
  handleDeleteCompany,
  isCreatingNewCompany,
  setIsCreatingNewCompany,
  editingCompany,
  setEditingCompany,
  isRegisteringCompany,
  newCompanyName,
  setNewCompanyName,
  getRank,
  isWhitelistingLoading,
}) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-8 space-y-12 font-sans select-none">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
        <div className="space-y-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-[10px] font-black uppercase tracking-widest font-mono">
            <LucideIcons.ShieldAlert size={12} className="animate-pulse" />
            {t('admin.title', { defaultValue: 'Painel Administrativo' })}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none font-sans">
            {t('admin.headerTitlePrefix', { defaultValue: 'CONTROLE DE' })} <span className="text-zello-orange">{t('admin.headerTitleHighlight', { defaultValue: 'ACESSO & USUÁRIOS' })}</span>
          </h2>
          <p className="text-slate-400 font-medium">
            {t('admin.subtitle', { defaultValue: 'Gerencie e autorize colaboradores, crie turmas e acompanhe a evolução de XP.' })}
          </p>
        </div>
      </div>

      {editingCompany ? (
        <div
          key="edit-company-form-block"
          className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[40px] space-y-8 max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zello-orange to-transparent"></div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">
              {t('admin.editCompanyTitle', { defaultValue: 'Editar Nome da Turma' })}
            </h3>
            <p className="text-sm text-slate-500 font-medium font-sans">
              {t('admin.editCompanyDesc', { defaultValue: 'Insira o novo nome para identificar esta organização na plataforma.' })}
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder={t('admin.companyNamePlaceholder', { defaultValue: 'Ex: Organização' })}
              value={editingCompany.name}
              onChange={(e) => {
                setEditingCompany({ ...editingCompany, name: e.target.value });
              }}
              className="w-full bg-slate-900 border-2 border-white/10 focus:border-zello-orange rounded-2xl p-5 text-white font-bold text-base outline-none transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleUpdateCompany}
              disabled={isRegisteringCompany || !editingCompany.name.trim()}
              className="flex-1 py-5 bg-zello-orange text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:brightness-110 shadow-[0_0_30px_rgba(240,90,40,0.3)] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isRegisteringCompany ? (
                <LucideIcons.Loader2 className="animate-spin" size={20} />
              ) : (
                t('admin.saveChanges', { defaultValue: 'Salvar Alterações' })
              )}
            </button>
            <button
              onClick={() => {
                setEditingCompany(null);
              }}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
            >
              {t('admin.back', { defaultValue: 'Voltar' })}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {availableCompanies.length > 0 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 p-6 rounded-[32px] border border-white/10 select-none">
                <div className="space-y-1">
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                    {t('admin.companiesTitle', { defaultValue: 'Empresas & Turmas' })}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    {t('admin.companiesSubtitle', { defaultValue: 'Turmas cadastradas na plataforma.' })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
                {availableCompanies.map((comp, idx) => (
                  <div
                    key={`company-listing-card-v6-${comp.id}-${idx}`}
                    className="group relative p-8 bg-white/5 border border-white/10 hover:border-zello-orange/50 rounded-[40px] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]"
                  >
                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-zello-orange/30 group-hover:bg-zello-orange/10 transition-all">
                          <LucideIcons.Building size={28} className="text-zello-orange" />
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingCompany(comp)}
                            className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-500 hover:text-white transition-all cursor-pointer"
                            title={t('admin.editTooltip', { defaultValue: 'Editar' })}
                          >
                            <LucideIcons.Settings size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(t('admin.confirmDeleteCompany', { defaultValue: 'Deseja realmente remover esta empresa/turma?' }))) {
                                handleDeleteCompany(comp.id);
                              }
                            }}
                            className="p-3 bg-white/5 rounded-xl hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-all cursor-pointer"
                            title={t('admin.deleteTooltip', { defaultValue: 'Excluir' })}
                          >
                            <LucideIcons.Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 text-left">
                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tight group-hover:text-zello-orange transition-colors">
                          {comp.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <code className="text-[10px] bg-zello-orange/10 px-3 py-1 rounded-full text-zello-orange font-bold font-mono tracking-widest select-all">
                            {comp.id}
                          </code>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJoinCompany(comp.id);
                      }}
                      className="relative z-10 w-full mt-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl group-hover:bg-zello-orange group-hover:border-zello-orange transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {t('admin.selectCompany', { defaultValue: 'Selecionar esta Turma' })}
                      <LucideIcons.ChevronRight size={14} />
                    </button>

                    <LucideIcons.Building
                      className="absolute -bottom-4 -right-4 text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none"
                      size={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Global User List Section */}
          <div className="pt-16 pb-12 space-y-10 border-t border-white/5 select-none">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                  <LucideIcons.Users size={12} />
                  {t('admin.directory', { defaultValue: 'Diretório Global' })}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {t('admin.allParticipantsPrefix', { defaultValue: 'TODOS OS' })} <span className="text-zello-orange">{t('admin.allParticipantsHighlight', { defaultValue: 'PARTICIPANTES' })}</span>
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  {t('admin.allParticipantsDesc', { defaultValue: 'Lista de todos os usuários que acessaram a plataforma e seus níveis de acesso.' })}
                </p>
              </div>

              <div className="flex gap-4">
                <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center min-w-[140px]">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    {t('admin.totalUsers', { defaultValue: 'TOTAL DE USUÁRIOS' })}
                  </span>
                  <div className="text-2xl font-black text-white tabular-nums italic">
                    {allUsers.length}
                  </div>
                </div>
                <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center min-w-[140px]">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    {t('admin.totalAdmins', { defaultValue: 'ADMINS' })}
                  </span>
                  <div className="text-2xl font-black text-zello-orange tabular-nums italic">
                    {allUsers.filter((u) => u.isAdmin).length}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-md">
              <div className="hidden lg:block overflow-x-auto overflow-y-auto max-h-[600px] custom-scrollbar">
                <table className="w-full text-left table-fixed">
                  <colgroup>
                    <col className="w-[38%]" />
                    <col className="w-[14%]" />
                    <col className="w-[14%]" />
                    <col className="w-[16%]" />
                    <col className="w-[18%]" />
                  </colgroup>
                  <thead className="bg-white/10 sticky top-0 z-20 backdrop-blur-md">
                    <tr key="global-users-header-row-st">
                      <th className="p-4 lg:p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {t('admin.participant', { defaultValue: 'Participante' })}
                      </th>
                      <th className="p-4 lg:p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        {t('admin.accumulatedXp', { defaultValue: 'XP Acumulado' })}
                      </th>
                      <th className="p-4 lg:p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        {t('admin.rank', { defaultValue: 'Rank' })}
                      </th>
                      <th className="p-4 lg:p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        {t('admin.role', { defaultValue: 'Função' })}
                      </th>
                      <th className="p-4 lg:p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                        {t('admin.actions', { defaultValue: 'Ações' })}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {allUsers.map((u, idx) => (
                      <tr
                        key={`global-list-usr-row-v6-${u.userId || 'u'}-${idx}`}
                        className="hover:bg-white/5 transition-colors group/row"
                      >
                        <td className="p-4 lg:p-5 text-left">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-11 h-11 shrink-0 rounded-2xl bg-zello-orange/10 flex items-center justify-center text-zello-orange font-black text-lg shadow-inner select-none">
                              {u.email?.[0].toUpperCase() || '?'}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm lg:text-base font-bold text-white group-hover/row:text-zello-orange transition-colors select-text truncate" title={u.email}>
                                {u.email}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono tracking-wider opacity-60 select-all truncate">
                                ID: {u.userId}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 lg:p-5 text-center select-none">
                          <div className="inline-flex items-center gap-1 px-3 py-2 bg-zello-orange/10 rounded-xl text-zello-orange text-xs lg:text-sm font-black tabular-nums italic">
                            {u.xp || 0} XP
                          </div>
                        </td>
                        <td className="p-4 lg:p-5 text-center select-none">
                          <div className={`text-xs font-black uppercase italic ${getRank(u.completedQuizzes).color}`}>
                            {getRank(u.completedQuizzes).name}
                          </div>
                        </td>
                        <td className="p-4 lg:p-5 text-center select-none">
                          <button
                            onClick={() => handleToggleUserAdmin(u.userId, !!u.isAdmin)}
                            disabled={u.userId === user?.uid}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:cursor-not-allowed ${u.isAdmin
                              ? 'bg-zello-orange text-white shadow-[0_0_15px_rgba(240,90,40,0.4)]'
                              : 'bg-white/5 text-slate-500 border border-white/10 hover:bg-white/10'
                              }`}
                          >
                            {u.isAdmin ? t('admin.roleAdminShort', { defaultValue: 'ADMIN' }) : t('admin.roleParticipantShort', { defaultValue: 'PARTICIPANTE' })}
                          </button>
                        </td>
                        <td className="p-4 lg:p-5 text-right select-none">
                          <div className="flex items-center justify-end gap-1.5">
                            {handleResetUserProgress && (
                              <button
                                onClick={() => handleResetUserProgress(u.userId)}
                                className="p-2.5 bg-white/5 rounded-2xl hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 transition-all cursor-pointer"
                                title={t('admin.resetProgress', { defaultValue: 'ZERAR PROGRESSO' })}
                              >
                                <LucideIcons.RotateCcw size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => handleToggleUserAdmin(u.userId, !!u.isAdmin)}
                              disabled={u.userId === user?.uid}
                              className="p-2.5 bg-white/5 rounded-2xl hover:bg-white/10 text-slate-400 hover:text-white transition-all disabled:opacity-20 cursor-pointer"
                              title={u.isAdmin ? t('admin.demoteAdmin', { defaultValue: 'Demitir Admin' }) : t('admin.makeAdmin', { defaultValue: 'Tornar Admin' })}
                            >
                              <LucideIcons.Shield size={16} />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(t('admin.confirmDelete', { defaultValue: 'Tem certeza que deseja EXCLUIR permanentemente este usuário da plataforma? Esta ação não pode ser desfeita.' }))) {
                                  handleDeleteUser(u.userId);
                                }
                              }}
                              disabled={u.userId === user?.uid}
                              className="p-2.5 bg-white/5 rounded-2xl hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all disabled:opacity-20 cursor-pointer"
                              title={t('admin.deleteUser', { defaultValue: 'EXCLUIR USUÁRIO' })}
                            >
                              <LucideIcons.UserMinus size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {allUsers.length === 0 && (
                      <tr key="global-users-empty-placeholder-v5">
                        <td colSpan={5} className="p-32 text-center select-none">
                          <div className="space-y-4">
                            <LucideIcons.UserSearch size={64} className="text-slate-800 mx-auto" strokeWidth={1.5} />
                            <p className="text-slate-500 font-bold italic uppercase tracking-widest">
                              {t('admin.noUsers', { defaultValue: 'Nenhum usuário cadastrado no sistema' })}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile & Tablet Cards View */}
              <div className="lg:hidden divide-y divide-white/5 p-4 space-y-4">
                {allUsers.map((u, idx) => (
                  <div
                    key={`admin-user-card-m-${u.userId || 'u'}-${idx}`}
                    className="w-full p-5 bg-white/[0.03] border border-white/10 rounded-2xl space-y-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-zello-orange/10 flex items-center justify-center text-zello-orange font-black text-sm shrink-0">
                        {u.email?.[0].toUpperCase() || '?'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-white truncate" title={u.email}>{u.email}</div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">ID: {u.userId}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-black/20 rounded-xl border border-white/5">
                        <span className="text-[9px] uppercase font-bold text-slate-500 block">{t('admin.rank', { defaultValue: 'Rank' })}</span>
                        <span className={`font-black uppercase italic ${getRank(u.completedQuizzes).color}`}>
                          {getRank(u.completedQuizzes).name}
                        </span>
                      </div>
                      <div className="p-2.5 bg-black/20 rounded-xl border border-white/5">
                        <span className="text-[9px] uppercase font-bold text-slate-500 block">{t('admin.accumulatedXp', { defaultValue: 'XP Acumulado' })}</span>
                        <span className="font-black text-zello-orange italic">
                          {u.xp || 0} XP
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-black/20 rounded-xl border border-white/5">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block mb-1">{t('admin.role', { defaultValue: 'Função' })}</span>
                      <button
                        onClick={() => handleToggleUserAdmin(u.userId, !!u.isAdmin)}
                        disabled={u.userId === user?.uid}
                        className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${u.isAdmin ? 'bg-zello-orange text-white' : 'bg-white/10 text-slate-400'
                          }`}
                      >
                        {u.isAdmin ? t('admin.roleAdminShort', { defaultValue: 'ADMIN' }) : t('admin.roleParticipantShort', { defaultValue: 'PARTICIPANTE' })}
                      </button>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="text-[9px] uppercase font-bold text-slate-500 block">{t('admin.actions', { defaultValue: 'Ações' })}</span>
                      {handleResetUserProgress && (
                        <button
                          onClick={() => handleResetUserProgress(u.userId)}
                          className="w-full py-3 px-3 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-400 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <LucideIcons.RotateCcw size={14} />
                          {t('admin.resetProgress', { defaultValue: 'ZERAR PROGRESSO' })}
                        </button>
                      )}
                      <button
                        onClick={() => handleToggleUserAdmin(u.userId, !!u.isAdmin)}
                        disabled={u.userId === user?.uid}
                        className="w-full py-3 px-3 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-30 cursor-pointer"
                      >
                        <LucideIcons.Shield size={14} />
                        {u.isAdmin ? t('admin.demoteAdmin', { defaultValue: 'Demitir Admin' }) : t('admin.makeAdmin', { defaultValue: 'Tornar Admin' })}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(t('admin.confirmDelete', { defaultValue: 'Tem certeza que deseja EXCLUIR permanentemente este usuário da plataforma? Esta ação não pode ser desfeita.' }))) {
                            handleDeleteUser(u.userId);
                          }
                        }}
                        disabled={u.userId === user?.uid}
                        className="w-full py-3 px-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-30 cursor-pointer"
                      >
                        <LucideIcons.UserMinus size={14} />
                        {t('admin.deleteUser', { defaultValue: 'EXCLUIR USUÁRIO' })}
                      </button>
                    </div>
                  </div>
                ))}
                {allUsers.length === 0 && (
                  <div className="p-12 text-center text-slate-500 text-xs font-bold uppercase tracking-wider">
                    {t('admin.noUsers', { defaultValue: 'Nenhum usuário cadastrado no sistema' })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Whitelisted emails table segment */}
          <div
            key={`admin-management-panel-final-${userProfile?.companyId}`}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-white/5 select-none"
          >
            {/* Left Col: Permissions whitelister */}
            <div className="lg:col-span-1 space-y-8 text-left">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <LucideIcons.UserPlus size={120} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">
                    {t('admin.authorizeAccess', { defaultValue: 'Autorizar Acesso' })}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {t('admin.authorizeDesc', { defaultValue: 'Adicione e-mails à lista de permissão de acesso da plataforma.' })}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={newWhitelistedEmail}
                      onChange={(e) => setNewWhitelistedEmail(e.target.value)}
                      placeholder={t('admin.emailPlaceholder', { defaultValue: 'colaborador@empresa.com' })}
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-slate-600 focus:border-zello-orange/50 outline-none transition-all font-semibold"
                    />
                  </div>
                  <button
                    disabled={isWhitelistingLoading || !newWhitelistedEmail.trim()}
                    onClick={handleAddWhitelist}
                    className="w-full py-4 bg-zello-orange text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:brightness-110 shadow-[0_0_20px_rgba(240,90,40,0.25)] transition-all flex items-center justify-center gap-3 disabled:opacity-40 cursor-pointer font-sans"
                  >
                    {isWhitelistingLoading ? (
                      <LucideIcons.Loader2 className="animate-spin" size={16} />
                    ) : (
                      <LucideIcons.UserPlus size={16} />
                    )}
                    {t('admin.addToWhitelist', { defaultValue: 'Adicionar aos Permitidos' })}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Whitelist list display */}
            <div className="lg:col-span-2 text-left">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-6 min-h-[300px]">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tight">
                      {t('admin.authorizedMembers', { defaultValue: 'Membros Autorizados' })}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {t('admin.authorizedDesc', { defaultValue: 'Estes e-mails estão autorizados a realizar Onboarding.' })}
                    </p>
                  </div>
                  <span className="px-3.5 py-1 bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-[10px] font-black rounded-lg">
                    {whitelist.length} {t('admin.authorizedCount', { defaultValue: 'AUTORIZADOS' })}
                  </span>
                </div>

                <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {whitelist.map((item, idx) => (
                    <div
                      key={`whitelist-v3-${item.id || 'wh'}-${idx}`}
                      className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-zello-orange/15 text-zello-orange flex items-center justify-center select-none text-sm font-black">
                          @
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold text-white select-text">
                            {item.email}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveWhitelist(item.id)}
                        className="p-3 bg-white/5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                        title={t('admin.removeAuthorization', { defaultValue: 'Remover Autorização' })}
                      >
                        <LucideIcons.Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  {whitelist.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                      <LucideIcons.Fingerprint size={48} className="text-slate-800 mx-auto" strokeWidth={1.5} />
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                        {t('admin.emptyWhitelist', { defaultValue: 'Nenhuma credencial whitelist configurada' })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

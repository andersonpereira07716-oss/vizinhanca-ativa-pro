import React from 'react';

export function NovasFuncionalidades() {
  return (
    <div className="space-y-3 mt-4">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Recursos Comunitários</h3>
      
      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-blue-400">🛡️ Ronda Virtual</h4>
          <p className="text-xs text-slate-400">Solicite acompanhamento ao chegar a casa</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-xl border border-blue-500/30">Ativar</button>
      </div>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-indigo-400">📹 Câmaras do Bairro</h4>
          <p className="text-xs text-slate-400">Pontos de monitorização partilhados</p>
        </div>
        <button className="px-3 py-1.5 bg-indigo-600/20 text-indigo-400 text-xs font-bold rounded-xl border border-indigo-500/30">Ver Feed</button>
      </div>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-amber-400">🐾 Animais Perdidos</h4>
          <p className="text-xs text-slate-400">Reportar ou procurar pets na área</p>
        </div>
        <button className="px-3 py-1.5 bg-amber-600/20 text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30">Registar</button>
      </div>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-cyan-400">🌧️ Alerta Alagamentos</h4>
          <p className="text-xs text-slate-400">Avisos de vias bloqueadas ou chuva forte</p>
        </div>
        <button className="px-3 py-1.5 bg-cyan-600/20 text-cyan-400 text-xs font-bold rounded-xl border border-cyan-500/30">Alertar</button>
      </div>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-emerald-400">⚡ Água e Energia</h4>
          <p className="text-xs text-slate-400">Cortes de fornecimento nos bairros</p>
        </div>
        <button className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 text-xs font-bold rounded-xl border border-emerald-500/30">Avisos</button>
      </div>
    </div>
  );
}

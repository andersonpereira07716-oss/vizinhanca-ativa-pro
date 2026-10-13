import React from 'react';

export function RondaVirtual() {
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg text-slate-100">
      <h3 className="text-md font-bold text-blue-400 mb-1">🛡️ Ronda Virtual Comunitária</h3>
      <p className="text-xs text-slate-400">Solicite acompanhamento visual dos vizinhos ao chegar a casa.</p>
    </div>
  );
}

export function CamarasComunitarias() {
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg text-slate-100">
      <h3 className="text-md font-bold text-indigo-400 mb-1">📹 Câmaras da Rua</h3>
      <p className="text-xs text-slate-400">Acesso rápido aos pontos de monitorização partilhados.</p>
    </div>
  );
}

export function AnimaisPerdidos() {
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg text-slate-100">
      <h3 className="text-md font-bold text-amber-400 mb-1">🐾 Animais Perdidos</h3>
      <p className="text-xs text-slate-400">Ajude a localizar ou reportar animais perdidos no bairro.</p>
    </div>
  );
}

export function AlertaClimatico() {
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg text-slate-100">
      <h3 className="text-md font-bold text-cyan-400 mb-1">🌧️ Alerta Clima e Alagamentos</h3>
      <p className="text-xs text-slate-400">Avisos comunitários sobre pontos de alagamento ou vias bloqueadas.</p>
    </div>
  );
}

export function ServiçosPublicos() {
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg text-slate-100">
      <h3 className="text-md font-bold text-emerald-400 mb-1">⚡ Alertas de Água e Energia</h3>
      <p className="text-xs text-slate-400">Registo de interrupções de fornecimento de serviços na zona.</p>
    </div>
  );
}

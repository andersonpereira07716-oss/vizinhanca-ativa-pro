import React, { useState } from 'react';

export function NovosRecursos() {
  const [abaAtiva, setAbaAtiva] = useState('ronda');
  const [statusText, setStatusText] = useState('');

  const handleAction = (modulo) => {
    setStatusText(`Ação enviada com sucesso no módulo: ${modulo}!`);
    setTimeout(() => setStatusText(''), 3000);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl text-slate-100 my-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Módulos Comunitários
        </h3>
        {statusText && <span className="text-[10px] text-emerald-400 font-semibold animate-pulse">{statusText}</span>}
      </div>

      {/* Tabs com Scroll Horizontal */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-3 text-xs font-semibold scrollbar-none">
        <button onClick={() => setAbaAtiva('ronda')} className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${abaAtiva === 'ronda' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>🛡️ Ronda Virtual</button>
        <button onClick={() => setAbaAtiva('camaras')} className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${abaAtiva === 'camaras' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>📹 Câmaras</button>
        <button onClick={() => setAbaAtiva('pets')} className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${abaAtiva === 'pets' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}>🐾 Pets</button>
        <button onClick={() => setAbaAtiva('clima')} className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${abaAtiva === 'clima' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}`}>🌧️ Clima</button>
        <button onClick={() => setAbaAtiva('servicos')} className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${abaAtiva === 'servicos' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>⚡ Serviços</button>
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
        {abaAtiva === 'ronda' && (
          <div>
            <h4 className="text-sm font-bold text-blue-400">🛡️ Acompanhamento de Chegada</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Notifique os vizinhos da sua rua para monitorizarem a sua chegada a casa.</p>
            <button onClick={() => handleAction('Ronda Virtual')} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition">Solicitar Ronda Virtual</button>
          </div>
        )}

        {abaAtiva === 'camaras' && (
          <div>
            <h4 className="text-sm font-bold text-indigo-400">📹 Feeds das Câmaras da Rua</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Aceda às transmissões de segurança partilhadas pelos moradores de Patos.</p>
            <button onClick={() => handleAction('Câmaras')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 rounded-lg transition">Abrir Transmissões ao Vivo</button>
          </div>
        )}

        {abaAtiva === 'pets' && (
          <div>
            <h4 className="text-sm font-bold text-amber-400">🐾 Animais Perdidos ou Achados</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Registe a foto, raça e local onde viu um pet no bairro.</p>
            <button onClick={() => handleAction('Animais Perdidos')} className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2 rounded-lg transition">Registar Novo Pet</button>
          </div>
        )}

        {abaAtiva === 'clima' && (
          <div>
            <h4 className="text-sm font-bold text-cyan-400">🌧️ Alerta de Alagamentos e Chuvas</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Informe pontos de alagamento ou bloqueios de trânsito em Patos.</p>
            <button onClick={() => handleAction('Alerta Climático')} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold py-2 rounded-lg transition">Publicar Alerta Climático</button>
          </div>
        )}

        {abaAtiva === 'servicos' && (
          <div>
            <h4 className="text-sm font-bold text-emerald-400">⚡ Interrupção de Água ou Energia</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Avise a vizinhança sobre falhas no abastecimento elétrico ou hídrico.</p>
            <button onClick={() => handleAction('Serviços Públicos')} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg transition">Notificar Falha de Serviço</button>
          </div>
        )}
      </div>
    </div>
  );
}

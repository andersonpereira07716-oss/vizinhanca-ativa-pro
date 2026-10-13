import { listaCompletaBairros } from './components/BairrosPatos';
import React, { useState } from 'react';
import { SosButton } from './components/SosButton';
import { OcorrenciasMap } from './components/OcorrenciasMap';
import { NovosRecursos } from './components/NovosRecursos';
import { TelaFeed, TelaNotificacoes, TelaServicos } from './components/NovasTelas';

export default function App() {
  const [aba, setAba] = useState('inicio');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 pb-24 font-sans">
      {/* Topo */}
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">V</div>
          <div>
            <h1 className="text-base font-bold leading-none">Vizinhança Segura</h1>
            <span className="text-[10px] text-emerald-400 font-medium">● Patos - PB</span>
          </div>
        </div>
      </header>

      {/* Conteúdo Dinâmico por Tela */}
      {aba === 'inicio' && (
        <main className="space-y-4 max-w-md mx-auto">
          <SosButton />
          <NovosRecursos />
        </main>
      )}

      {aba === 'feed' && (
        <main className="max-w-md mx-auto">
          <TelaFeed />
        </main>
      )}

      {aba === 'mapa' && (
        <main className="max-w-md mx-auto">
          <OcorrenciasMap />
        </main>
      )}

      {aba === 'alertas' && (
        <main className="max-w-md mx-auto">
          <TelaNotificacoes />
        </main>
      )}

      {aba === 'apoio' && (
        <main className="max-w-md mx-auto">
          <TelaServicos />
        </main>
      )}

      {/* Navegação Inferior Expandida */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 p-2 flex justify-around items-center backdrop-blur-md z-50">
        <button onClick={() => setAba('inicio')} className={`text-[10px] font-bold flex flex-col items-center gap-0.5 ${aba === 'inicio' ? 'text-indigo-400' : 'text-slate-500'}`}>
          <span>🏠</span> Início
        </button>
        <button onClick={() => setAba('feed')} className={`text-[10px] font-bold flex flex-col items-center gap-0.5 ${aba === 'feed' ? 'text-indigo-400' : 'text-slate-500'}`}>
          <span>📰</span> Mural
        </button>
        <button onClick={() => setAba('mapa')} className={`text-[10px] font-bold flex flex-col items-center gap-0.5 ${aba === 'mapa' ? 'text-indigo-400' : 'text-slate-500'}`}>
          <span>🗺️</span> Mapa
        </button>
        <button onClick={() => setAba('alertas')} className={`text-[10px] font-bold flex flex-col items-center gap-0.5 ${aba === 'alertas' ? 'text-indigo-400' : 'text-slate-500'}`}>
          <span>🔔</span> Alertas
        </button>
        <button onClick={() => setAba('apoio')} className={`text-[10px] font-bold flex flex-col items-center gap-0.5 ${aba === 'apoio' ? 'text-indigo-400' : 'text-slate-500'}`}>
          <span>🤝</span> Apoio
        </button>
      </nav>
    </div>
  );
}

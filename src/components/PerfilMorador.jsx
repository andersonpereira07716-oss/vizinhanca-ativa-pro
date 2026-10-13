import React, { useState } from 'react';
import { listaCompletaBairros, bairrosPatosPorZona } from './BairrosPatos';

export function PerfilMorador() {
  const [nome, setNome] = useState('');
  const [bairroSelecionado, setBairroSelecionado] = useState('');
  const [salvo, setSalvo] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    if (!nome.trim() || !bairroSelecionado) {
      alert('Por favor, preencha o nome e selecione o seu bairro.');
      return;
    }
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <h2 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
          <span>👤</span> Identificação do Morador - Patos/PB
        </h2>

        {salvo && (
          <div className="mb-3 p-2 bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs rounded-xl text-center font-bold">
            ✔ Perfil guardado com sucesso!
          </div>
        )}

        <form onSubmit={handleSalvar} className="space-y-3">
          <div>
            <label className="text-[10px] text-slate-400 block mb-1">Seu Nome Completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Carlos Silva"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-[10px] text-slate-400 block mb-1">Selecione o seu Bairro em Patos</label>
            <select
              value={bairroSelecionado}
              onChange={(e) => setBairroSelecionado(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="">-- Escolha o seu Bairro --</option>
              {Object.entries(bairrosPatosPorZona).map(([zona, bairros]) => (
                <optgroup key={zona} label={zona}>
                  {bairros.map((bairro) => (
                    <option key={bairro} value={bairro}>{bairro}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 font-bold py-2.5 rounded-xl text-xs text-white transition shadow-lg shadow-indigo-600/30"
          >
            Guardar Perfil
          </button>
        </form>
      </div>

      {/* Contactos úteis integrados */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <h3 className="text-xs font-bold text-slate-300 mb-3">📞 Contactos Úteis em Patos</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400 text-[11px]">Polícia Militar</span>
            <span className="font-bold text-indigo-400">190</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400 text-[11px]">SAMU</span>
            <span className="font-bold text-rose-400">192</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400 text-[11px]">Guarda Municipal</span>
            <span className="font-bold text-amber-400">153</span>
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400 text-[11px]">Bombeiros</span>
            <span className="font-bold text-cyan-400">193</span>
          </div>
        </div>
      </div>
    </div>
  );
}

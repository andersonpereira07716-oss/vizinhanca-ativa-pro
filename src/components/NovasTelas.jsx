import React, { useState } from 'react';

export function TelaFeed() {
  const [publicacao, setPublicacao] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, autor: 'João Silva', bairro: 'Belo Horizonte', texto: 'Atenção moradores, iluminação da Rua Pedro Firmino restabelecida!', hora: 'Há 10 min' },
    { id: 2, autor: 'Maria Souza', bairro: 'Maternidade', texto: 'Reunião sobre a segurança do bairro agendada para sexta-feira às 19h.', hora: 'Há 1 hora' }
  ]);

  const handlePost = (e) => {
    e.preventDefault();
    if (!publicacao.trim()) return;
    setPosts([{ id: Date.now(), autor: 'Você', bairro: 'Centro', texto: publicacao, hora: 'Agora mesmo' }, ...posts]);
    setPublicacao('');
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <h2 className="text-sm font-bold text-slate-200 mb-2">📰 Mural Comunitário</h2>
        <form onSubmit={handlePost} className="space-y-2">
          <textarea
            value={publicacao}
            onChange={(e) => setPublicacao(e.target.value)}
            placeholder="Escreva um aviso ou comunicado para os vizinhos..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 resize-none h-20"
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 font-bold py-2 rounded-xl text-xs text-white transition">
            Publicar no Mural
          </button>
        </form>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-indigo-400">{post.autor} <span className="text-[10px] text-slate-500">({post.bairro})</span></span>
              <span className="text-[10px] text-slate-500">{post.hora}</span>
            </div>
            <p className="text-xs text-slate-300">{post.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TelaNotificacoes() {
  const alertas = [
    { id: 1, tipo: '🚨 SOS', titulo: 'Alerta de Emergência Emitido', detalhe: 'Rua Horácio Nóbrega - Salgadinho', tempo: 'Há 15 min', cor: 'border-red-500/50 bg-red-950/20 text-red-400' },
    { id: 2, tipo: '🌧️ Clima', titulo: 'Ponto de Alagamento', detalhe: 'Avenida Solon de Lucena', tempo: 'Há 2 horas', cor: 'border-cyan-500/50 bg-cyan-950/20 text-cyan-400' },
    { id: 3, tipo: '⚡ Serviço', titulo: 'Manutenção na Rede Elétrica', detalhe: 'Jardim Brasília', tempo: 'Há 5 horas', cor: 'border-emerald-500/50 bg-emerald-950/20 text-emerald-400' }
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-bold text-slate-300 mb-2">🔔 Histórico de Alertas & Notificações</h2>
      {alertas.map((item) => (
        <div key={item.id} className={`p-3.5 rounded-2xl border ${item.cor} flex justify-between items-start`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold">{item.tipo}</span>
              <h3 className="text-xs font-bold text-slate-200">{item.titulo}</h3>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{item.detalhe}</p>
          </div>
          <span className="text-[10px] text-slate-500 whitespace-nowrap">{item.tempo}</span>
        </div>
      ))}
    </div>
  );
}

export function TelaServicos() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-bold text-slate-300 mb-2">🤝 Rede de Empréstimos & Ajuda Mútua</h2>
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xs font-bold text-purple-400">🔧 Escada de Alumínio / Ferramentas</h3>
            <p className="text-[10px] text-slate-400">Disponível por: Carlos (Santo António)</p>
          </div>
          <button onClick={() => alert('Mensagem enviada ao morador!')} className="px-3 py-1 bg-purple-600/30 text-purple-300 text-[10px] font-bold rounded-lg border border-purple-500/40">Pedir</button>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xs font-bold text-amber-400">🔋 Carregador de Bateria Auto</h3>
            <p className="text-[10px] text-slate-400">Disponível por: Roberto (Liberdade)</p>
          </div>
          <button onClick={() => alert('Mensagem enviada ao morador!')} className="px-3 py-1 bg-amber-600/30 text-amber-300 text-[10px] font-bold rounded-lg border border-amber-500/40">Pedir</button>
        </div>
      </div>
    </div>
  );
}

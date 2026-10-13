import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";

export function SosButton() {
  const [loading, setLoading] = useState(false);
  const triggerSos = async () => {
    if (!navigator.geolocation) return alert("Geolocalização não suportada");
    navigator.geolocation.getCurrentPosition(async (pos) => {
      setLoading(true);
      try {
        await supabase.from("alerts").insert([{ lat: pos.coords.latitude, lng: pos.coords.longitude, timestamp: new Date() }]);
        alert("Alerta SOS enviado com sucesso para a rede de Patos!");
      } catch (err) {
        alert("Erro ao enviar SOS: " + err.message);
      }
      setLoading(false);
    });
  };
  return (
    <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-2xl text-center shadow-lg">
      <h2 className="text-lg font-bold text-red-400 mb-2">Painel de Emergência</h2>
      <button onClick={triggerSos} disabled={loading} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-black tracking-wide shadow-red-900/50 shadow-md transition">
        {loading ? "A ENVIAR ALERTA..." : "🚨 ACIONAR SOS IMEDIATO"}
      </button>
    </div>
  );
}

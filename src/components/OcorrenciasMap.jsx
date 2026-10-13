import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { supabase } from "../services/supabaseClient";

export function OcorrenciasMap() {
  const [ocorrencias, setOcorrencias] = useState([
    { id: 1, lat: -7.0254, lng: -37.2831, title: "Manutenção na rede elétrica", bairro: "Jardim Brasília" }
  ]);

  useEffect(() => {
    async function fetchAlerts() {
      const { data } = await supabase.from("alerts").select("*");
      if (data && data.length > 0) {
        setOcorrencias(prev => [...prev, ...data.map(d => ({ id: d.id, lat: d.lat, lng: d.lng, title: "Alerta SOS Comunitário", bairro: "Patos - PB" }))]);
      }
    }
    fetchAlerts();
  }, []);

  return (
    <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold text-slate-100 mb-3">Mapa Interativo de Ocorrências</h2>
      <div className="h-64 w-full rounded-xl overflow-hidden z-0">
        <MapContainer center={[-7.0254, -37.2831]} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {ocorrencias.map((occ, idx) => (
            <Marker key={occ.id || idx} position={[occ.lat, occ.lng]}>
              <Popup>
                <b>{occ.title}</b><br />Bairro: {occ.bairro}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

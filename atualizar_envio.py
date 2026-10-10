import os

# Alerta de correção para garantir o endpoint unificado do Supabase
supabase_config_code = """
// Integracao unificada Supabase para o Vizinhanca Ativa PRO - Patos-PB
const SUPABASE_URL_GLOBAL = 'https://urgtiuscnoboawqndcqt.supabase.co';
const SUPABASE_KEY_GLOBAL = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZ3RpdXNjbm9ib2F3cW5kY3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMTc4NDIsImV4cCI6MjEwNjY5Mzg0Mn0.IwbOIXJsdpgQl26_FWniiuKmEaL-ZrX-8K61B-jljWg';

async functionenviarAlertaUnificado(tipoMsg, textoMsg, bairroMsg) {
    try {
        const resposta = await fetch(`${SUPABASE_URL_GLOBAL}/rest/v1/ocorrencias`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY_GLOBAL,
                'Authorization': `Bearer ${SUPABASE_KEY_GLOBAL}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                tipo: tipoMsg || 'sos',
                bairro: bairroMsg || 'Centro, Patos-PB',
                latitude: -7.0158,
                longitude: -37.2801,
                urgente: true
            })
        });
        if (resposta.ok) {
            console.log('Alerta sincronizado com sucesso para a central!');
        }
    } catch (err) {
        console.error('Erro na sincronizacao:', err);
    }
}
"""
print("Configuração pronta a aplicar.")

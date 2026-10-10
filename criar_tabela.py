import urllib.request
import json

SUPABASE_URL = 'https://urgtiuscnoboawqndcqt.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZ3RpdXNjbm9ib2F3cW5kY3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMTc4NDIsImV4cCI6MjEwNjY5Mzg0Mn0.IwbOIXJsdpgQl26_FWniiuKmEaL-ZrX-8K61B-jljWg'

# Como a REST API do Supabase não cria tabelas diretamente via POST genérico sem o módulo rpc,
# vamos testar inserir um registo forçando a criação ou informar o comando SQL exato.
print("A inserir registo de teste para forçar inicialização da tabela...")

url = f"{SUPABASE_URL}/rest/v1/ocorrencias"
headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

payload = json.dumps({
    "tipo": "sos_teste",
    "bairro": "Centro, Patos-PB",
    "latitude": -7.0158,
    "longitude": -37.2801,
    "urgente": True
}).encode('utf-8')

req = urllib.request.Request(url, data=payload, headers=headers, method='POST')
try:
    with urllib.request.urlopen(req) as response:
        print("Sucesso! Resposta:", response.read().decode('utf-8'))
except Exception as e:
    print("\n[ATENÇÃO] A tabela 'ocorrencias' precisa de ser criada no SQL Editor do Supabase.")
    print("Copia e cola este comando SQL no teu painel do Supabase (SQL Editor):\n")
    print("""
    CREATE TABLE IF NOT EXISTS ocorrencias (
        id SERIAL PRIMARY KEY,
        tipo TEXT,
        bairro TEXT,
        latitude DOUBLE PRECISION,
        longitude DOUBLE PRECISION,
        urgente BOOLEAN,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Permitir acesso público para testes:
    ALTER TABLE ocorrencias ENABLE ROW LEVEL SECURITY;
    CREATE POLICY "Permitir leitura pública" ON ocorrencias FOR SELECT USING (true);
    CREATE POLICY "Permitir inserção pública" ON ocorrencias FOR INSERT WITH CHECK (true);
    """)

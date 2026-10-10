import urllib.request
import json

SUPABASE_URL = 'https://urgtiuscnoboawqndcqt.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZ3RpdXNjbm9ib2F3cW5kY3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMTc4NDIsImV4cCI6MjEwNjY5Mzg0Mn0.IwbOIXJsdpgQl26_FWniiuKmEaL-ZrX-8K61B-jljWg'

url = f"{SUPABASE_URL}/rest/v1/ocorrencias?select=count"
req = urllib.request.Request(url, headers={
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}"
})

try:
    with urllib.request.urlopen(req) as response:
        print("Ligação à tabela 'ocorrencias' bem-sucedida! Status:", response.status)
except Exception as e:
    print("Aviso: A tabela pode precisar de ser criada no painel do Supabase. Certifica-te de que a tabela 'ocorrencias' existe.")

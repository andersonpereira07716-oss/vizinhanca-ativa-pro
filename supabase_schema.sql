-- Tabela de Perfis de Moradores
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  bairro TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Postagens no Mural
CREATE TABLE IF NOT EXISTS mural_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  autor TEXT NOT NULL,
  bairro TEXT NOT NULL,
  texto TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Alertas SOS
CREATE TABLE IF NOT EXISTS alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lat NUMERIC NOT NULL,
  lng NUMERIC NOT NULL,
  bairro TEXT DEFAULT 'Patos - PB',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

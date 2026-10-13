-- Copie e cole estes comandos no SQL Editor do seu painel Supabase para ativar a segurança RLS:

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE mural_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Leitura pública de posts" ON mural_posts;
DROP POLICY IF EXISTS "Leitura pública de alertas" ON alerts;
DROP POLICY IF EXISTS "Inserção pública de alertas" ON alerts;
DROP POLICY IF EXISTS "Inserção pública de posts" ON mural_posts;

-- Criar políticas restritivas e seguras
CREATE POLICY "Leitura pública de posts" ON mural_posts FOR SELECT USING (true);
CREATE POLICY "Leitura pública de alertas" ON alerts FOR SELECT USING (true);
CREATE POLICY "Inserção controlada de alertas" ON alerts FOR INSERT WITH CHECK (lat IS NOT NULL AND lng IS NOT NULL);
CREATE POLICY "Inserção controlada de posts" ON mural_posts FOR INSERT WITH CHECK (length(texto) > 0 AND length(texto) <= 500);

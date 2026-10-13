export const bairrosPatosPorZona = {
  "Zona Central": ["Centro", "Brasília", "Santo Antônio"],
  "Zona Norte": ["Belo Horizonte", "Bela Vista", "Distrito Industrial", "Jardim Magnólia", "Noé Trajano", "Novo Horizonte", "Bairro dos Estados", "Governador Antonio Mariz", "Jardim Europa"],
  "Zona Leste": ["Ana Leite", "Salgadinho", "São Sebastião", "Sete Casas", "Dona Milindra", "Jardim Floresta", "Vitória"],
  "Zona Sul": ["Alto da Tubiba", "Jatobá", "Jardim Santa Cecília", "Monte Castelo", "Nova Conquista"],
  "Zona Oeste": ["Bivar Olinto", "Liberdade", "Morada do Sol", "Maternidade", "Morro"]
};

export const listaCompletaBairros = Object.values(bairrosPatosPorZona).flat().sort();

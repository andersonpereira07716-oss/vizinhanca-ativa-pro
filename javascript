// bairros-patos.js
const bairrosPatosPB = [
  "Alto da Tubiba",
  "Alto da Bela Vista",
  "Bairro da Maternidade",
  "Belo Horizonte",
  "Brasília",
  "Centro",
  "Distrito Industrial",
  "Jatobá",
  "Liberdade",
  "Loteamento Luar",
  "Morro",
  "Novo Horizonte",
  "Patos de Iracema",
  "Planalto da Boa Esperança",
  "Primeiro de Maio",
  "Salgadinho",
  "Sanhauá",
  "Santa Clara",
  "Santo Antônio",
  "São Sebastião",
  "Três Marias",
  "Vila Cavalcante"
];

// Exibe em formato de lista no console
console.log("=== Bairros de Patos-PB ===");
bairrosPatosPB.forEach((bairro, index) => {
  console.log(`${index + 1}. ${bairro}`);
});

// Se precisar gerar options em HTML para um <select>:
const htmlOptions = bairrosPatosPB.map(b => `<option value="${b.toLowerCase().replace(/ /g, '-')}">${b}</option>`).join('\n');
// console.log(htmlOptions);

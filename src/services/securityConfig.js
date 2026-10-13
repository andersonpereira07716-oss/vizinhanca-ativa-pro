// Configuração de segurança e validação para o Vizinhança Segura
export function validarTexto(texto) {
  if (!texto || typeof texto !== 'string') return '';
  // Remove caracteres perigosos para evitar XSS básico
  return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export function validarCoordenadas(lat, lng) {
  return typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng);
}

// Central config for outward links. Swap the WhatsApp number for the real one
// when it's available — nothing else needs to change.

// Placeholder number (country code 55 = Brazil). Replace the digits after 55
// with Luciana's real WhatsApp number, keeping the leading country code.
const WHATSAPP_NUMBER = "553499360056";

const WHATSAPP_MESSAGE =
  "Olá, Luciana! Gostaria de agendar uma conversa de 30 minutos sobre o acompanhamento nutricional.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Área do paciente — login da plataforma (mesma experiência do produto, abre
// na mesma aba). Swap the URL if the platform domain changes.
export const PLATFORM_URL =
  "https://plataforma-nutricao-luciana-web.vercel.app/";

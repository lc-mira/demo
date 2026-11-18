// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN — Catálogo de DEMOSTRACIÓN (plan Crecimiento)
// Este es el único archivo que se edita para ajustar el sitio.
// Los valores "PENDIENTE_..." se llenan al terminar la instalación
// (ver README.md).
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  // ID de la hoja ESPEJO PÚBLICA del cliente de pruebas (la que crea su backend),
  // NO el de la Maestra. Sale al ejecutar LC_diagnostico en el Apps Script de
  // pruebas, y también se llama "Catálogo público (NO EDITAR…) · Cliente Prueba"
  // en el Drive de Javier. OJO: no usar el espejo de un cliente real.
  SPREADSHEET_ID: "1Vm3AsF6TAKO-200WFTkoaUEaXt3pH0z1WyfSTuO8wrE",

  // API key de Google Cloud (Sheets API habilitada). Debe estar restringida a
  // los dominios donde se publique esta demo (ej. https://lc-mira.github.io/*).
  API_KEY: "AIzaSyD9dcqg2slJPnkawSjLnLpEVdhVvmmUGrA",

  // Pestaña del espejo que se lee. El backend la deja siempre como la primera.
  RANGE: "Portafolio",

  // Cada cuánto se refresca el inventario con la página abierta (milisegundos).
  // 120000 = 2 minutos. Subirlo reduce el consumo de la cuota de la API de Sheets.
  REFRESH_INTERVAL_MS: 120000,

  // Meta Pixel. Vacío = el sitio funciona igual, sin tracking.
  META_PIXEL_ID: "",

  // WhatsApp de la demo: código de país + número, sin "+" ni espacios.
  WHATSAPP_NUMBER: "573164854961",
  WHATSAPP_MESSAGE: "Hola, quiero más información sobre los inmuebles disponibles.",

  // URL del despliegue (Web App) de Apps Script del cliente de pruebas
  // (la misma de agentes/prueba.json en el repo del panel). Recibe los leads.
  LEADS_WEBAPP_URL: "https://script.google.com/macros/s/AKfycbx6EyiaoZuPqRScdP6InZXMRyZuJ0aJvPpzuBiznq8XUlylZzZxWbDYddrfGf7PkoZz/exec",

  // Dirección pública del sitio, con "/" al final. Se usa en los mensajes que
  // se comparten (por ejemplo "Copiar para WhatsApp" en Solicitudes).
  BASE_URL: "https://lc-mira.github.io/demo/",

  // Marca (ficticia)
  MARCA_NOMBRE: "Mira Demo Inmobiliaria",
  MARCA_FRASE: "Tu hogar en Cali, a un clic",
  LOGO_URL: "",          // ej. "img/logo.png" (ruta relativa a la raíz del sitio)
  FOTO_AGENTE_URL: "",   // ej. "img/agente.jpg"

  // Datos del asesor para portada y ficha (déjalos vacíos para ocultarlos).
  AGENTE_CARGO: "",
  AGENTE_ANIOS: 0,
  AGENTE_COLEGAS: 0,
  AGENTE_TRANSACCIONES: 0,
  AGENTE_ANIO_REFERENCIA: 2026,
  // Zonas de la portada ("Explora por zona"): se buscan en el catálogo.
  ZONAS_DESTACADAS: ["Jamundí", "Palmira"],

  // Colores: los mismos del catálogo de Alejandro (plan Crecimiento).
  COLOR_PRIMARIO: "#0f5b4f",
  COLOR_PRIMARIO_OSCURO: "#0b4339",
};

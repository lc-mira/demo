# Catálogo Mira — plantilla Crecimiento (demo)

Sitio estático (HTML/CSS/JS) para GitHub Pages. Es la misma base visual del catálogo
de Alejandro (plan Crecimiento), con los datos de un cliente de pruebas y de muestra.
Muestra el inventario, la calculadora de crédito, el tablero de solicitudes y el
formulario "¿Buscas algo específico?". Los leads van al Apps Script del cliente.

> Esta demo no se indexa en buscadores (`robots.txt` + `noindex`) y usa inmuebles de
> muestra. Las imágenes de `img/muestra/` son ilustraciones, no fotos reales.

## Cómo funciona

```
Visitante ──► Sitio (GitHub Pages) ──lee──► Hoja ESPEJO pública (Google Sheets API)
                       │
                       └──envía leads──► Web App de Apps Script del cliente
                                                  │
                                                  └─► hoja MAESTRA privada (Leads, Portafolio…)
```

El sitio **nunca** lee la hoja Maestra: solo el espejo, que no trae teléfonos,
comisiones ni notas privadas.

## Archivos

| Ruta | Para qué |
|---|---|
| `js/config.js` | **Único archivo que cambia por cliente.** IDs, API key, WhatsApp, marca, colores. |
| `inicio/` | Página de inicio. |
| `index.html` + `js/app.js` | Inventario (tarjetas, filtros, ficha emergente). |
| `ficha/` | Ficha técnica neutra para colegas: `ficha/?id=P0001`. |
| `solicitudes/` | Tablero público de requerimientos. |
| `credito/` | Calculadora de crédito hipotecario. |
| `consulta/` | Formulario "¿Buscas algo específico?". |
| `js/lead-api.js` | Envío de leads al Web App de Apps Script. |
| `img/muestra/` | Ilustraciones de los inmuebles de muestra (solo esta demo). |

El panel de administración **no** vive aquí: es `panel.miraleads.pro`, y cada agente se
registra en `agentes/<codigo>.json` del repo `lc-mira/panel`.

## Configuración (`js/config.js`)

| Campo | Qué poner |
|---|---|
| `SPREADSHEET_ID` | ID del **espejo** del cliente (sale en `LC_diagnostico`). Nunca el de la Maestra ni el de otro cliente. |
| `API_KEY` | API key de Google Cloud (Sheets API), restringida a los dominios del sitio. |
| `LEADS_WEBAPP_URL` | URL del Web App del cliente (termina en `/exec`). |
| `BASE_URL` | Dirección pública del sitio, con `/` al final. |
| `WHATSAPP_NUMBER` | Código de país + número, sin `+`. |
| `META_PIXEL_ID` | Vacío = sin Pixel. |
| `MARCA_*`, `LOGO_URL`, `COLOR_*` | Marca y colores. |

## Columnas que lee el catálogo

El espejo publica solo las columnas públicas del Portafolio. El catálogo las busca por
nombre de encabezado: `ID`, `Tipo`, `Barrio/Zona`, **`Ciudad`**, `Precio`, `Canon`, `Área`,
`Habitaciones`, `Baños`, `Parqueadero`, `Piso`, `Estrato`, **`Administración`**,
**`Ascensor`**, `Estado`, `Servicio`, `Fecha Venta`, `Aplica crédito`, `Fotos`.

- **Ciudad** se muestra junto al barrio en la tarjeta y la ficha, y la búsqueda la reconoce.
- **Administración** (COP/mes) y **Ascensor** (`Sí`) aparecen en la ficha solo cuando tienen dato.

## Qué se publica del inventario

Solo inmuebles con Estado "Disponible". Las observaciones públicas se limpian
de teléfonos y correos al copiarlas al espejo. Notas privadas, documentos,
comisión, encargado y celular **no** salen de la Maestra.

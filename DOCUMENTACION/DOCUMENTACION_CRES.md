# Documentación del Proyecto CRES (Comunidad Reformada de Estudios Superiores)

## Descripción General
Este proyecto consiste en el desarrollo del sitio web institucional para CRES (Comunidad Reformada de Estudios Superiores), un seminario teológico. El sitio está diseñado para ser informativo, profesional y estéticamente alineado con los valores de la institución, ofreciendo información sobre programas académicos, eventos, y vida estudiantil.

## Tecnologías Utilizadas
*   **HTML5:** Estructura semántica de las páginas.
*   **Tailwind CSS:** Framework de utilidad para estilos rápidos y responsivos.
*   **JavaScript (Vanilla):** Lógica para componentes dinámicos como el menú y loaders.
*   **Google Fonts:** Tipografías 'Playfair Display' (Títulos), 'Crimson Text' (Cuerpo) y 'Cormorant Garamond' (Citas) para una estética académica y elegante.
*   **Git/GitHub:** Control de versiones y alojamiento.

## Estructura del Proyecto

### Páginas Principales
*   `index.html`: Página de inicio con Hero Section, Versículo del día, y accesos rápidos.
*   `nosotros.html`: Historia, misión, visión y afiliación eclesiástica.
*   `programas.html`: Visión general de la oferta académica.
*   `contacto.html`: Información de ubicación, teléfonos y mapa interactivo.
*   `eventos.html`: Listado de próximos eventos y conferencias.
*   `vida-estudiantil.html`: Información sobre la experiencia del estudiante y galería.

### Programas Académicos
*   `lic-intensiva-teologia.html`: Detalle de la Licenciatura en Teología (Online).
*   `lic-artes-ministeriales.html`: Detalle de la Licenciatura en Artes Ministeriales (Presencial).

### Activos (Assets)
*   `css/`: Hoja de estilos principal (`styles.css`).
*   `js/`: Scripts para carga de componentes (`components-loader.js`) y menú móvil (`menu.js`).
*   `images/`: Logotipos, fotografías de eventos y recursos gráficos del sitio.

## Guía de Estilos y Diseño

### Paleta de Colores
*   **Rojo Vino (Burgundy):** `#8B1A1A` - Color primario, usado en títulos y acentos fuertes.
*   **Dorado (Gold):** `#C9A961` - Color secundario, para detalles de elegancia y botones.
*   **Azul Marino (Navy):** `#2C3E50` - Color de fondo en secciones Nosotros/Contacto y acentos.
*   **Crema (Cream):** `#F8F6F1` - Color de fondo suave para secciones de contenido.

### Tipografía
*   **Títulos:** `Playfair Display` - Serifa elegante para encabezados.
*   **Cuerpo:** `Crimson Text` - Serifa legible para bloques de texto.
*   **Citas/Versículos:** `Cormorant Garamond` - Itálica clásica.

## Mantenimiento
Para actualizar el sitio:
1.  **Imágenes:** Añadir nuevas imágenes a la carpeta `images/` y referenciarlas en el HTML. Se recomienda usar nombres descriptivos o secuenciales (ej. `gallery-01.png`).
2.  **Eventos:** Editar `eventos.html` para agregar nuevas tarjetas de eventos.
3.  **Deploy:** Los cambios en la rama `main` se reflejan automáticamente si está configurado con GitHub Pages o Netlify.

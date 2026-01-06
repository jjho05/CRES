/**
 * Components Loader
 * Carga header y footer dinámicamente y maneja navegación activa
 */

(function () {
    'use strict';

    // Detectar profundidad de la carpeta actual
    function getBasePath() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;

        // Si estamos en la raíz o en una página principal
        if (depth <= 1) {
            return './';
        }
        // Si estamos en un subdirectorio (semestre1, bigdata, etc.)
        return '../';
    }

    async function loadComponent(componentName, placeholderId) {
        const basePath = getBasePath();
        // Agregar timestamp ACTUALIZADO para forzar recarga sin caché
        const timestamp = Date.now();
        const componentPath = `${basePath}components/${componentName}.html?v=${timestamp}`;
        console.log('Loading component:', componentPath);

        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Error loading ${componentName}: ${response.status}`);
            }
            const html = await response.text();
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error(`Failed to load ${componentName}:`, error);
        }
    }

    // Detectar página actual y marcar navegación activa
    function setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

        // Navegación desktop
        const navLinks = document.querySelectorAll('header nav a[data-page]');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === currentPage) {
                link.classList.remove('text-[var(--text-secondary)]', 'font-medium');
                link.classList.add('text-[var(--primary-color)]', 'font-bold');
            }
        });

        // Navegación móvil
        const mobileLinks = document.querySelectorAll('#mobile-menu a[data-page-mobile]');
        mobileLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page-mobile');
            if (linkPage === currentPage) {
                link.classList.remove('text-[var(--text-secondary)]');
                link.classList.add('text-[var(--primary-color)]');
            }
        });
    }

    // Ajustar rutas relativas en los componentes según la profundidad
    function adjustComponentPaths() {
        const basePath = getBasePath();

        // Solo ajustar si estamos en un subdirectorio
        if (basePath === '../') {
            // Ajustar enlaces del header y footer
            const links = document.querySelectorAll('header a[href], footer a[href], #mobile-menu a[href]');
            links.forEach(link => {
                const href = link.getAttribute('href');
                // Solo ajustar enlaces relativos (no externos ni anclas)
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('../')) {
                    link.setAttribute('href', '../' + href);
                }
            });

            // Ajustar imágenes
            const images = document.querySelectorAll('header img[src], footer img[src]');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('http') && !src.startsWith('../')) {
                    img.setAttribute('src', '../' + src);
                }
            });
        }
    }

    // Inicializar cuando el DOM esté listo
    async function init() {
        // Cargar componentes
        await Promise.all([
            loadComponent('header', 'header-placeholder'),
            loadComponent('footer', 'footer-placeholder')
        ]);

        // Ajustar rutas si es necesario
        adjustComponentPaths();

        // Marcar navegación activa
        setActiveNavigation();

        // Disparar evento personalizado para indicar que los componentes están cargados
        document.dispatchEvent(new Event('componentsLoaded'));
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

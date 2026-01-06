/**
 * Menu Handler
 * Maneja la funcionalidad del menú móvil
 */

(function () {
    'use strict';

    function initMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');

        if (!menuBtn || !mobileMenu || !menuIconOpen || !menuIconClose) {
            console.warn('Menu elements not found. Waiting for components to load...');
            return;
        }

        // Toggle del menú
        const toggleMenu = () => {
            mobileMenu.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        };

        // Click en el botón del menú
        menuBtn.addEventListener('click', toggleMenu);

        // Cerrar menú al hacer click en un enlace
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        });
    }

    // Inicializar cuando los componentes estén cargados
    document.addEventListener('componentsLoaded', initMenu);

    // Fallback: intentar inicializar después de un delay si el evento no se dispara
    setTimeout(initMenu, 500);
})();

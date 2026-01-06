/**
 * Menu Handler - CRES
 * Versión con mejor manejo de estados
 */

console.log('🔧 Menu script loaded');

function initializeMenu() {
    console.log('🔄 Attempting to initialize menu...');

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    console.log('menuBtn:', menuBtn);
    console.log('mobileMenu:', mobileMenu);
    console.log('menuIconOpen:', menuIconOpen);
    console.log('menuIconClose:', menuIconClose);

    if (!menuBtn || !mobileMenu || !menuIconOpen || !menuIconClose) {
        console.warn('⚠️ Menu elements not found yet');
        return false;
    }

    console.log('✅ All menu elements found!');

    // Variable para trackear el estado
    let isMenuOpen = false;

    // Toggle del menú con estilos forzados
    menuBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔘 Menu button clicked, current state:', isMenuOpen ? 'open' : 'closed');

        if (!isMenuOpen) {
            // MOSTRAR menú
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.display = 'block';
            mobileMenu.style.position = 'fixed';
            mobileMenu.style.top = '72px';
            mobileMenu.style.left = '0';
            mobileMenu.style.right = '0';
            mobileMenu.style.bottom = '0';
            mobileMenu.style.backgroundColor = 'white';
            mobileMenu.style.zIndex = '9999';
            mobileMenu.style.overflow = 'auto';

            menuIconOpen.classList.add('hidden');
            menuIconOpen.style.display = 'none';
            menuIconClose.classList.remove('hidden');
            menuIconClose.style.display = 'block';

            document.body.style.overflow = 'hidden';
            isMenuOpen = true;
            console.log('✅ Menu opened');
        } else {
            // OCULTAR menú
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';

            menuIconOpen.classList.remove('hidden');
            menuIconOpen.style.display = 'block';
            menuIconClose.classList.add('hidden');
            menuIconClose.style.display = 'none';

            document.body.style.overflow = '';
            isMenuOpen = false;
            console.log('✅ Menu closed');
        }
    };

    // Cerrar menú al hacer click en un enlace
    const navLinks = mobileMenu.querySelectorAll('a');
    console.log('Found', navLinks.length, 'navigation links');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            console.log('📍 Link clicked, closing menu');
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';

            menuIconOpen.classList.remove('hidden');
            menuIconOpen.style.display = 'block';
            menuIconClose.classList.add('hidden');
            menuIconClose.style.display = 'none';

            document.body.style.overflow = '';
            isMenuOpen = false;
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function (e) {
        if (isMenuOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            console.log('📍 Clicked outside, closing menu');
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';

            menuIconOpen.classList.remove('hidden');
            menuIconOpen.style.display = 'block';
            menuIconClose.classList.add('hidden');
            menuIconClose.style.display = 'none';

            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    });

    console.log('✅ Mobile menu initialized successfully!');
    return true;
}

// Intentar inicializar cuando los componentes estén cargados
document.addEventListener('componentsLoaded', function () {
    console.log('🎯 componentsLoaded event received');
    setTimeout(function () {
        initializeMenu();
    }, 100);
});

// Fallback: intentar varias veces con delays
setTimeout(function () {
    console.log('⏰ Trying after 500ms...');
    initializeMenu();
}, 500);

setTimeout(function () {
    console.log('⏰ Trying after 1000ms...');
    initializeMenu();
}, 1000);

setTimeout(function () {
    console.log('⏰ Trying after 2000ms...');
    initializeMenu();
}, 2000);

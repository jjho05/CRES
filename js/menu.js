/**
 * Menu Handler - CRES
 * Espera a que los componentes se carguen antes de inicializar
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

    // Toggle del menú
    menuBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔘 Menu button clicked');

        const isHidden = mobileMenu.classList.contains('hidden');
        console.log('Current state:', isHidden ? 'hidden' : 'visible');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            console.log('✅ Menu opened');
        } else {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
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
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                console.log('📍 Clicked outside, closing menu');
                mobileMenu.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            }
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

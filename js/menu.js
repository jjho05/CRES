// Simple Mobile Menu - CRES (Fullscreen Overlay with Transition)
console.log('🔧 Loading mobile menu...');

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(initMenu, 500);
});

document.addEventListener('componentsLoaded', function () {
    console.log('🎯 Components loaded, initializing menu...');
    initMenu();
});

function initMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIconOpen = document.getElementById('menuIconOpen');
    const menuIconClose = document.getElementById('menuIconClose');

    console.log('navToggle:', navToggle);
    console.log('navMenu:', navMenu);
    console.log('menuIconOpen:', menuIconOpen);
    console.log('menuIconClose:', menuIconClose);

    if (!navToggle || !navMenu || !menuIconOpen || !menuIconClose) {
        console.error('❌ Menu elements not found!');
        return;
    }

    console.log('✅ Menu elements found!');

    // Toggle menu with transition
    navToggle.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isHidden = navMenu.classList.contains('hidden');
        console.log('Menu toggled:', isHidden ? 'opening' : 'closing');

        if (isHidden) {
            // Abrir menú con transición
            navMenu.classList.remove('hidden');
            // Forzar reflow para que la transición funcione
            navMenu.offsetHeight;
            navMenu.classList.remove('translate-x-full');

            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            // Cerrar menú con transición
            navMenu.classList.add('translate-x-full');

            // Esperar a que termine la transición antes de ocultar
            setTimeout(() => {
                navMenu.classList.add('hidden');
            }, 300);

            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            document.body.style.overflow = '';
        }
    };

    // Close on link click
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = function () {
            navMenu.classList.add('translate-x-full');

            setTimeout(() => {
                navMenu.classList.add('hidden');
            }, 300);

            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            document.body.style.overflow = '';
        };
    });

    console.log('✅ Mobile menu initialized!');
}

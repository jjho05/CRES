// Simple Mobile Menu - CRES (Fullscreen Overlay)
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

    // Toggle menu
    navToggle.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isHidden = navMenu.classList.contains('hidden');
        console.log('Menu toggled:', isHidden ? 'opening' : 'closing');

        if (isHidden) {
            // Abrir menú
            navMenu.classList.remove('hidden');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        } else {
            // Cerrar menú
            navMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            document.body.style.overflow = ''; // Restaurar scroll
        }
    };

    // Close on link click
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = function () {
            navMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            document.body.style.overflow = '';
        };
    });

    console.log('✅ Mobile menu initialized!');
}

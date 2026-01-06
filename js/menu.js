// Simple Mobile Menu - CRES
console.log('🔧 Loading mobile menu...');

window.addEventListener('DOMContentLoaded', function () {
    // Esperar a que los componentes se carguen
    setTimeout(initMenu, 500);
});

document.addEventListener('componentsLoaded', function () {
    console.log('🎯 Components loaded, initializing menu...');
    initMenu();
});

function initMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    console.log('navToggle:', navToggle);
    console.log('navMenu:', navMenu);

    if (!navToggle || !navMenu) {
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
            navMenu.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
        }
    };

    // Close on link click
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = function () {
            navMenu.classList.add('hidden');
        };
    });

    console.log('✅ Mobile menu initialized!');
}

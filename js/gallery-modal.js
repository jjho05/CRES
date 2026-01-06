// Basic Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create Modal Elements
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'fixed inset-0 z-50 hidden bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm';

    const modalImg = document.createElement('img');
    modalImg.className = 'max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none z-50';
    closeBtn.ariaLabel = 'Cerrar imagen';

    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);

    // Event Delegation for Gallery Images
    // Handles clicks on any element with .gallery-trigger class or inside .grid images
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.gallery-trigger') || e.target.closest('.grid img');

        if (trigger) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Gallery trigger clicked:', trigger);

            // Get source: check data-src first, then src
            let src = trigger.getAttribute('data-src') || trigger.getAttribute('src');

            // Fallback: extract from background-image
            if (!src && trigger.style.backgroundImage) {
                const urlMatch = trigger.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
                if (urlMatch) src = urlMatch[1];
            }

            if (src) {
                modalImg.src = src;
                modalImg.alt = trigger.getAttribute('alt') || 'Imagen CRES';
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                console.error('No image source found for:', trigger);
            }
        }
    });

    // Close Modal functions
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        modalImg.src = ''; // Clear src
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});

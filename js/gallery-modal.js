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

    // Add click event to all gallery images
    // Select images in Vida Estudiantil grid and Nosotros grid
    // Select images in Vida Estudiantil grid and Nosotros grid
    const galleryImages = document.querySelectorAll('.grid img, .gallery-trigger');

    galleryImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close Modal functions
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
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

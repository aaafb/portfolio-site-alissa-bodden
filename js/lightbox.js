// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    // Add click event to all image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('click', function() {
            const caption = this.getAttribute('data-caption');
            
            // Set image source and caption
            const img = this.querySelector('.lightbox-trigger');
            lightboxImage.src = img.currentSrc || img.src;
            lightboxCaption.textContent = caption || '';
            
            // Open lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox when close button is clicked
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close lightbox when background is clicked
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active') && e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
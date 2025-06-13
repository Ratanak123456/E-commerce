document.addEventListener('DOMContentLoaded', () => {
    // Product gallery thumbnail navigation
    const thumbnails = document.querySelectorAll('.product-gallery-thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    if (thumbnails.length && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const newImageSrc = thumbnail.getAttribute('data-image');
                mainImage.src = newImageSrc;
                
                thumbnails.forEach(t => t.classList.remove('active', 'border-primary'));
                thumbnail.classList.add('active', 'border-primary');
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');
            
            if (content && icon) {
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            }
        });
    });
});
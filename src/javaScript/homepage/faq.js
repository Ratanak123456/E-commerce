document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    let activeItem = null;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i');

        question.addEventListener('click', () => {
            if (item === activeItem) {
                // Close active item
                answer.style.maxHeight = '0';
                answer.classList.remove('pb-6');
                icon.classList.remove('rotate-180');
                activeItem = null;
            } else {
                // Close previously active item if exists
                if (activeItem) {
                    const activeAnswer = activeItem.querySelector('.faq-answer');
                    const activeIcon = activeItem.querySelector('i');
                    activeAnswer.style.maxHeight = '0';
                    activeAnswer.classList.remove('pb-6');
                    activeIcon.classList.remove('rotate-180');
                }
                
                // Open clicked item
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.classList.add('pb-6');
                icon.classList.add('rotate-180');
                activeItem = item;
                
                // Optional: Smooth scroll to keep item in view
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        // Update height if content changes while open
        answer.addEventListener('transitionend', () => {
            if (answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '') {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (activeItem) {
            const activeAnswer = activeItem.querySelector('.faq-answer');
            if (activeAnswer.style.maxHeight !== '0px') {
                activeAnswer.style.maxHeight = activeAnswer.scrollHeight + 'px';
            }
        }
    });
});
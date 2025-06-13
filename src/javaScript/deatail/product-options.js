document.addEventListener('DOMContentLoaded', () => {
    // Product option selection
    const optionButtons = document.querySelectorAll('.product-option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const optionType = button.getAttribute('data-option');
            const optionValue = button.getAttribute('data-value');
            
            document.querySelectorAll(`.product-option-btn[data-option="${optionType}"]`).forEach(btn => {
                btn.classList.remove('border-2', 'border-primary', 'bg-blue-50', 'dark:bg-blue-900/30');
                btn.classList.add('border', 'border-gray-300', 'dark:border-gray-600');
            });
            
            button.classList.remove('border', 'border-gray-300', 'dark:border-gray-600');
            button.classList.add('border-2', 'border-primary', 'bg-blue-50', 'dark:bg-blue-900/30');
        });
    });
});
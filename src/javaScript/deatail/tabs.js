document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[role="tabpanel"]');
    
    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-tab-target');
                
                tabButtons.forEach(btn => {
                    btn.classList.remove('border-primary', 'text-primary');
                    btn.classList.add('border-transparent', 'hover:text-gray-600', 'dark:hover:text-gray-300', 'hover:border-gray-300');
                });
                button.classList.add('border-primary', 'text-primary');
                button.classList.remove('border-transparent', 'hover:text-gray-600', 'dark:hover:text-gray-300', 'hover:border-gray-300');
                
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                document.getElementById(target)?.classList.remove('hidden');
            });
        });
    }
});
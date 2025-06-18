        document.getElementById('filterToggle').addEventListener('click', function () {
            const sidebar = document.getElementById('filterSidebar');
            const chevron = document.getElementById('filterChevron');

            // Toggle sidebar visibility
            sidebar.classList.toggle('hidden');

            // Rotate chevron icon
            chevron.classList.toggle('rotate-180');

            // Close when clicking outside on mobile
            if (!sidebar.classList.contains('hidden')) {
                document.addEventListener('click', function closeSidebar(e) {
                    if (!sidebar.contains(e.target) && e.target.id !== 'filterToggle') {
                        sidebar.classList.add('hidden');
                        chevron.classList.remove('rotate-180');
                        document.removeEventListener('click', closeSidebar);
                    }
                });
            }
        });
        // Account mobile menu toggle (for the sidebar navigation)
        document.addEventListener('DOMContentLoaded', function () {
            const accountMobileMenuButton = document.getElementById('account-mobile-menu-button');
            const accountMobileMenu = document.getElementById('account-mobile-menu');
            const accountMobileMenuIcon = document.getElementById('account-mobile-menu-icon');

            if (accountMobileMenuButton && accountMobileMenu && accountMobileMenuIcon) {
                accountMobileMenuButton.addEventListener('click', function () {
                    // Toggle menu visibility
                    accountMobileMenu.classList.toggle('hidden');

                    // Rotate icon
                    accountMobileMenuIcon.classList.toggle('rotate-180');
                });
            }
        });
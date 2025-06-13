document.addEventListener('DOMContentLoaded', () => {
    const passwordToggleButton = document.querySelector('input[type="password"] + button');
    
    if (passwordToggleButton) {
        passwordToggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput && icon) {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.replace('fa-eye', 'fa-eye-slash');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.replace('fa-eye-slash', 'fa-eye');
                }
            }
        });
    }
});
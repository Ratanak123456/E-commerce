    // Set initial dark mode based on preference
    function updateDarkMode() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }

    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkMode);

    let isSignup = false;
    const toggleForm = () => {
      isSignup = !isSignup;
      document.getElementById('formTitle').textContent = isSignup ? 'Sign Up' : 'Sign In';
      document.getElementById('toggleText').textContent = isSignup
        ? 'Already have an account?'
        : "Don't have an account?";
      document.querySelector('button.text-accent').textContent = isSignup ? 'Sign In' : 'Sign Up';
      document.getElementById('fullNameGroup').classList.toggle('hidden', !isSignup);
      document.getElementById('genderGroup').classList.toggle('hidden', !isSignup);
      document.getElementById('passwordRequirements').classList.toggle('hidden', !isSignup);
      
      // Change button text based on form state
      const submitButton = document.querySelector('button[type="submit"]');
      submitButton.textContent = isSignup ? 'Create Account' : 'Sign In';
      
      // Add subtle animation to form container
      const formContainer = document.querySelector('.p-6');
      formContainer.classList.add('transform', 'transition-all', 'duration-300');
      formContainer.classList.toggle('scale-105', isSignup);
      setTimeout(() => {
        formContainer.classList.remove('scale-105');
      }, 300);
    };

    // Toggle password visibility
    document.querySelector('input[type="password"] + button').addEventListener('click', function() {
      const passwordInput = this.previousElementSibling;
      const icon = this.querySelector('i');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });

    // Initialize dark mode on load
    updateDarkMode();
document.addEventListener('DOMContentLoaded', () => {
    let isSignup = false;
    
    const toggleForm = () => {
        isSignup = !isSignup;
        
        // Update text elements
        document.getElementById('formTitle').textContent = isSignup ? 'Sign Up' : 'Sign In';
        document.getElementById('toggleText').textContent = isSignup
            ? 'Already have an account?'
            : "Don't have an account?";
        document.querySelector('button.text-accent').textContent = isSignup ? 'Sign In' : 'Sign Up';
        
        // Toggle form fields
        document.getElementById('fullNameGroup').classList.toggle('hidden', !isSignup);
        document.getElementById('genderGroup').classList.toggle('hidden', !isSignup);
        document.getElementById('passwordRequirements').classList.toggle('hidden', !isSignup);
        
        // Update submit button
        const submitButton = document.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = isSignup ? 'Create Account' : 'Sign In';
        }
        
        // Add animation to form container
        const formContainer = document.querySelector('.p-6');
        if (formContainer) {
            formContainer.classList.add('transform', 'transition-all', 'duration-300');
            formContainer.classList.toggle('scale-105', isSignup);
            setTimeout(() => {
                formContainer.classList.remove('scale-105');
            }, 300);
        }
    };

    // Set up toggle button event listener
    const toggleButton = document.querySelector('button.text-accent');
    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm();
        });
    }
});
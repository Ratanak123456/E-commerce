    // Toggle between Sign In and Sign Up forms
    function toggleForm() {
      const isSignIn = document.getElementById('formTitle').textContent === 'Sign In';
      const fullNameGroup = document.getElementById('fullNameGroup');
      const genderGroup = document.getElementById('genderGroup');
      const passwordRequirements = document.getElementById('passwordRequirements');
      const formTitle = document.getElementById('formTitle');
      const toggleText = document.getElementById('toggleText');
      const submitButton = document.querySelector('button[type="submit"] a');
      
      if (isSignIn) {
        // Switch to Sign Up
        fullNameGroup.classList.remove('hidden');
        genderGroup.classList.remove('hidden');
        passwordRequirements.classList.remove('hidden');
        formTitle.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account?';
        submitButton.textContent = 'Sign Up';
      } else {
        // Switch to Sign In
        fullNameGroup.classList.add('hidden');
        genderGroup.classList.add('hidden');
        passwordRequirements.classList.add('hidden');
        formTitle.textContent = 'Sign In';
        toggleText.textContent = 'Don\'t have an account?';
        submitButton.textContent = 'Sign In';
      }
    }
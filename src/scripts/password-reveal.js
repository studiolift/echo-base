document.addEventListener('DOMContentLoaded', function() {

  console.log('Colour Switcher Loaded');

  if (document.getElementById('togglePassword')) {
    document.getElementById('togglePassword').addEventListener('click', function() {
      var passwordInput = document.getElementById('password_input');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = 'Hide password';
        this.classList.toggle('show');
      } else {
        passwordInput.type = 'password';
        this.classList.toggle('show');
        this.textContent = 'Show password';
      }
    });
  }

}, false);
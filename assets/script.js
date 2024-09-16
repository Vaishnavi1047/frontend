// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signUpLink = document.getElementById('sign-up-link');
    const signUpFormContainer = document.getElementById('sign-up-form-container');
    const loginContainer = document.getElementById('login-container');

    signUpLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (signUpFormContainer.classList.contains('hidden')) {
            signUpFormContainer.classList.remove('hidden');
            signUpFormContainer.classList.add('show');
            loginContainer.classList.add('hidden');
        }
    });
});

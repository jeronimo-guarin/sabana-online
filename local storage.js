const registerForm = document.getElementById('registerForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
        errorMessage.style.display = 'block';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);

    if (userExists) {

        errorMessage.textContent = 'El correo ya está registrado.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
});

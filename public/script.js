document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageEl = document.getElementById('message');
    if (username === 'admin' && password === 'password') {
        messageEl.style.color = 'green';
        messageEl.textContent = 'Login successful!';
    } else {
        messageEl.style.color = 'red';
        messageEl.textContent = 'Invalid credentials';
    }
});

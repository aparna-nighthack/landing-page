    window.location.href = "login.html";
}

function showLoginSignupOptions() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass") {
        sessionStorage.setItem('user', username);
        window.location.href = "home.html";
    } else {
        const loginForm = document.getElementById('loginForm');
        const error = document.createElement('div');
        error.textContent = 'Invalid username or password.';
        error.className = 'error-message';
        loginForm.appendChild(error);
    }
}

function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Signup successful.');
        redirectToLogin();
    } else {
        alert('Please provide username and password.');
    }
}

window.addEventListener('load', () => {
    const user = sessionStorage.getItem('user');
    if (user) {
        window.location.href = "home.html";
    } else {
        showLoginSignupOptions();
    }
});

function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}
    window.location.href = "login.html";
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "aparna" && password === "password") {
        sessionStorage.setItem('user', username);
        document.getElementById('loginForm').innerHTML = '<div class="success-message">Login successful! Redirecting to home...</div>';
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);
    } else {
        alert('Invalid username or password.');
    }
}

function signup() {
    alert('Signup functionality not implemented.');
}

window.addEventListener('load', () => {
    const user = sessionStorage.getItem('user');
    if (user) {
        window.location.href = "home.html";
    }
});

function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}
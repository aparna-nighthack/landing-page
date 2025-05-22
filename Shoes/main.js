    window.location.href = "login.html";
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass") {
        sessionStorage.setItem('user', username);
        window.location.href = "home.html";
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

document.getElementById("getStartedButton").addEventListener("click", redirectToLogin);
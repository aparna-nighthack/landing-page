    window.location.href = "login.html";
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "aparna" && password === "password") {
        sessionStorage.setItem('user', username);
        window.location.href = "home.html";
    } else {
        const errorMessage = document.getElementById('error-message');
        if (!errorMessage) {
            const errorMessageElement = document.createElement('p');
            errorMessageElement.id = 'error-message';
            errorMessageElement.style.color = 'red';
            errorMessageElement.textContent = 'Invalid username or password.';
            document.querySelector('.login-container').appendChild(errorMessageElement);
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
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
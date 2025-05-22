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

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

function loadContent(section) {
    const content = document.createElement('div');
    content.textContent = "Loading...";
    document.getElementById(section).appendChild(content);
    
    setTimeout(() => {
        content.textContent = "Newly loaded dynamic content.";
    }, 1000);
}
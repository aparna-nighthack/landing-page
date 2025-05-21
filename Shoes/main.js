
// Function to redirect to the login page
function redirectToLogin() {
    window.location.href = "login.html";
}

// Function to login the user
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple username/password validation
    if (username === "user" && password === "pass") {
        // Save user session
        sessionStorage.setItem('user', username);
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        alert('Invalid username or password.');
    }
}

// Function to signup the user
function signup() {
    // Ideally, signup logic would go here
    alert('Signup functionality not implemented.');
}

// Event listener to check if user is logged in
window.addEventListener('load', () => {
    const user = sessionStorage.getItem('user');
    if (user) {
        // Redirect to home page if logged in
        window.location.href = "home.html";
    }
});

// Navigation functions for homepage
function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}
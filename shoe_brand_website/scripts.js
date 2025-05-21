
// Function to handle user login
function handleLogin(email, password) {
    if (!validateEmail(email) || !validatePassword(password)) {
        alert("Invalid email or password format.");
        return;
    }
    // Simulate checking credentials
    if (email === "user@example.com" && password === "password123") {
        setSession(email);
        window.location.href = "homepage.html";
    } else {
        alert("Invalid credentials.");
    }
}

// Function to handle user signup
function handleSignup(email, password) {
    if (!validateEmail(email) || !validatePassword(password)) {
        alert("Invalid email or password format.");
        return;
    }
    // Simulate signup success
    setSession(email);
    window.location.href = "homepage.html";
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password format
function validatePassword(password) {
    return password.length >= 6;
}

// Function to set session storage
function setSession(email) {
    sessionStorage.setItem("userEmail", email);
}

// Function to check session and redirect if authenticated
function checkSession() {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
        window.location.href = "homepage.html";
    }
}

// Function to clear session storage
function clearSession() {
    sessionStorage.removeItem("userEmail");
    window.location.href = "auth.html";
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");
    
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            handleLogin(email, password);
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", function () {
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            handleSignup(email, password);
        });
    }
    
    checkSession();
});
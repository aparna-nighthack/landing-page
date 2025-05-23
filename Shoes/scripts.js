import { gsap } from "gsap";

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
    alert('Signup functionality not implemented.');
}

// Event listener to check if user is logged in
window.addEventListener('load', () => {
    const user = sessionStorage.getItem('user');
    if (user) {
        window.location.href = "home.html";
    }
});

// Navigation functions for homepage
function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}

// Function to animate a section using GSAP
function animateSection(section) {
    gsap.from(section, { duration: 1, opacity: 0, y: 50 });
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px 100px 0px',
        threshold: 0.1
    };

    let observer;

    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(onIntersection, config);
        images.forEach(image => {
            observer.observe(image);
        });
    } else {
        images.forEach(image => {
            preloadImage(image);
        });
    }

    function preloadImage(image) {
        const src = image.getAttribute('data-src');
        if (!src) {
            return;
        }
        image.src = src;
    }

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        });
    }
}

// Initialize the animations and lazy loading
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => animateSection(section));
    lazyLoadImages();
});
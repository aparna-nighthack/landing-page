
// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    // Constants for IDs and classes used within the script
    const navigationLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('content');
    const form = document.getElementById('contact-form');

    // Event listener for navigation links
    navigationLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            loadContent(targetSection);
        });
    });

    // Asynchronous content loading
    function loadContent(section) {
        fetch(`${section}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                contentArea.innerHTML = '<p>Sorry, content could not be loaded.</p>';
            });
    }

    // Basic form validation
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            form.submit();
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
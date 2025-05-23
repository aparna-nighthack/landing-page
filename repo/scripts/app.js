
// Function to toggle the visibility of a given element by ID
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
}

// Function to update content dynamically
function updateContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}

// Function to attach event listeners to buttons
function attachEventListeners() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target-id');
            toggleVisibility(targetId);
        });
    });

    const updateButtons = document.querySelectorAll('.update-btn');
    updateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target-id');
            const newContent = this.getAttribute('data-new-content');
            updateContent(targetId, newContent);
        });
    });
}

// Function to initialize the app
function initApp() {
    attachEventListeners();
}

// Wait for the DOM to fully load before initializing the app
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Export functions to be used in other modules if necessary
export { toggleVisibility, updateContent, attachEventListeners, initApp };

// Function to toggle the navigation menu
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// Function for smooth scrolling
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Initialize event listeners
function init() {
  const menuButton = document.querySelector('.menu-toggle');
  menuButton.addEventListener('click', toggleMenu);

  smoothScroll();
}

// Ensure the DOM is loaded before initializing
document.addEventListener('DOMContentLoaded', init);
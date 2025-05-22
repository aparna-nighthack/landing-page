
document.addEventListener("DOMContentLoaded", function () {

    // Toggle Navigation Menu Visibility
    const menuToggle = document.querySelector('header nav');
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Toggle Menu';
    document.querySelector('header').appendChild(menuButton);

    menuButton.addEventListener('click', function () {
        menuToggle.style.display = menuToggle.style.display === 'none' ? 'block' : 'none';
    });

    menuToggle.style.display = 'none'; // Hide menu by default on mobile

    // Dynamically Update Content
    const contentSections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            contentSections.forEach(section => section.style.display = 'none');
            const targetSectionId = link.getAttribute('href').substring(1);
            document.getElementById(targetSectionId).style.display = 'block';
        });
    });

    // Handling Form Submissions
    const formHandler = new FormHandler();
    formHandler.setupForm('contactForm');

});

// FormHandler module
class FormHandler {
    setupForm(formId) {
        const form = document.getElementById(formId);

        if (!form) return;

        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            let isValid = validateForm(formData);

            if (!isValid) {
                displayFeedback("Please fill all fields correctly.", "error");
                return;
            }

            try {
                const response = await this.submitData(formData);
                if (!response.ok) throw new Error("Network response was not ok");

                displayFeedback("Form submitted successfully!", "success");
            } catch (error) {
                console.error("Form submission error:", error);
                displayFeedback("There was a problem submitting the form. Please try again later.", "error");
            }
        }.bind(this));
    }

    async submitData(formData) {
        return await fetch("https://api.example.com/submit", {
            method: "POST",
            body: formData
        });
    }
}

// Utility Functions
function validateForm(formData) {
    let isValid = true;

    for (let [name, value] of formData.entries()) {
        if (!value.trim()) {
            isValid = false;
            break;
        }
    }

    return isValid;
}

function displayFeedback(message, type) {
    const feedbackElement = document.getElementById("feedback");

    if (!feedbackElement) {
        const footer = document.querySelector('footer');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.id = "feedback";
        feedbackDiv.style.display = "none";
        footer.appendChild(feedbackDiv);
    }

    feedbackElement.textContent = message;
    feedbackElement.className = type;
    feedbackElement.style.display = "block";

    setTimeout(() => {
        feedbackElement.style.display = "none";
    }, 5000);
}
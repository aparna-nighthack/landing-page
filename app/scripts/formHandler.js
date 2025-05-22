
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

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
            const response = await fetch("https://api.example.com/submit", {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("Network response was not ok");

            displayFeedback("Form submitted successfully!", "success");
        } catch (error) {
            console.error("Form submission error:", error);
            displayFeedback("There was a problem submitting the form. Please try again later.", "error");
        }
    });
});

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

    if (!feedbackElement) return;

    feedbackElement.textContent = message;
    feedbackElement.className = type;
    feedbackElement.style.display = "block";

    setTimeout(() => {
        feedbackElement.style.display = "none";
    }, 5000);
}

export { validateForm, displayFeedback };
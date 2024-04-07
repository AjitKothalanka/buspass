// formHandler.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            mob: document.getElementById("mob").value,
            expdate: document.getElementById("expdate").value,
            destination: document.getElementById("destination").value
        };

        // Send form data to the server
        fetch('/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Form submission successful:', data);
            // Handle success, e.g., show a success message
        })
        .catch(error => {
            console.error('Form submission error:', error);
            // Handle error, e.g., show an error message
        });
    });
});

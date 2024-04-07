document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            mob: document.getElementById("mob").value,
            validity: document.getElementById("expdate").value,
            destination: document.getElementById("destination").value
        };

        // Send form data to the Google Apps Script web app
        fetch('https://script.google.com/macros/s/AKfycbyWiitUfA6Q4KFK2YinepxR0u54OmfOxZ2j8Mc2GafAh20ZJZpIO2iIPfUcog2Irw596Q/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors', // Set mode to 'cors' explicitly
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log('Form submission successful:', data);
            // Handle success, e.g., show a success message
            window.location.href = "Payment.html";  // Redirect to Payment.html on success
        })
        .catch(error => {
            console.error('Form submission error:', error);
            // Handle error, e.g., show an error message
        });
    });
});

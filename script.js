document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your Email.js Public Key
    })();

    // Reservation Form Submission
    document.querySelector(".reservation-form form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let formData = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            date: this.date.value,
            time: this.time.value,
            message: this.message.value
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(response => {
                alert("Reservation submitted successfully!");
                this.reset();
            })
            .catch(error => {
                console.error("Error sending email:", error);
                alert("Failed to send reservation. Try again.");
            });
    });
});

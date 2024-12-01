(function() {
    emailjs.init({
      publicKey: "2jjjFIyJd6iwp-gVa",
    });
})();

document.addEventListener('click', function(event) {
    if (event.target.matches('#contact-form')) {
        // Attach the submit event listener when the form is clicked
        event.target.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Send form data via EmailJS
            emailjs.sendForm('service_20241129', 'template_20241129', this)
                .then(function(response) {
                    alert('Message sent successfully!');
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    alert('Failed to send the message. Please try again later.');
                    console.error('FAILED...', error);
                });
        }, { once: true }); // Use { once: true } to ensure the listener is added only once
    }
});
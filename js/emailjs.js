(function() {
    emailjs.init({
      publicKey: "2jjjFIyJd6iwp-gVa",
    });
})();

document.addEventListener('click', function(event) {

    const SERVICE_ID = 'service_ohht1si';
    const TEMPLATE_ID = 'template_0oh4zgm';

    if (event.target.id === 'contact-form-button') {  
        event.preventDefault();
        
        $('#contact-form-button').html('<i class="ion ion-md-square mr-1 spin"></i> Sending...');
        $('#contact-form-button').prop('disabled', true);

        if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('message').value === '') {
            alert('Please fill in all fields.');
            $('#contact-form-button').html('Send me a message');
            $('#contact-form-button').prop('disabled', false);
            return;
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID,{
            to_name: "Dylan",
            from_name: document.getElementById('name').value + ' @ ' + document.getElementById('email').value,
            message: document.getElementById('message').value,
        }).then(function(response) {
            alert('Message sent successfully!');
            window.location.reload();
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            $('#contact-form-button').html('Send me a message');
            $('#contact-form-button').prop('disabled', false);
            console.error('FAILED...', error);
        });
    }
});
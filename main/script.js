// Example: Alert when a social media icon is clicked
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', () => {
        alert('You are leaving the website!');
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the data to be sent
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the server using fetch
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Your message has been sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        });

    // Reset form
    document.getElementById('contactForm').reset();
});


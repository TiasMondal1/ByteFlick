const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 5501;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use your email service provider
    auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password' // replace with your email password or app-specific password
    }
});

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // replace with your email
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error: ', error);
            return res.status(500).send('Something went wrong, please try again later.');
        }
        res.status(200).send('Message sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

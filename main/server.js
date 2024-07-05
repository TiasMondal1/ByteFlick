const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Ensure you have a .env file with your email credentials

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use any email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Setup email data
    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Contact Us Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

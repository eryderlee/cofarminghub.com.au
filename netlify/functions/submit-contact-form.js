const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
        };
    }

    const { name, email, contact, message } = JSON.parse(event.body);

    // Email configuration using environment variables
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // false for TLS (port 587), true for SSL (port 465)
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.SMTP_USER, // The email address to receive the submissions
        subject: 'New Contact Form Submission',
        html: `
            <html>
            <head>
                <title>New Contact Form Submission</title>
            </head>
            <body>
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Message:</strong><br>${message}</p>
            </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Thank you for contacting us. We will get back to you shortly.' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Sorry, there was an error sending your message. Please try again later.' }),
        };
    }
};

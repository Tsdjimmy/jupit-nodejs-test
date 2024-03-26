const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 465,
    secure: true,
    auth: {
        user: 'postmaster@sandboxebc895f832f74329b7f01865162691a3.mailgun.org',
        pass: '839e6943e7e0dd5c8e5d410aad7f2d00-38029a9d-1c088759'
    }
});

module.exports = transporter;



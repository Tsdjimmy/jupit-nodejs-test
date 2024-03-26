function generateEmailContent(customMessage) {
    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; color: #333; }
        .container { max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; }
        h1 { color: #007bff; }
        p { margin-bottom: 20px; line-height: 1.5; }
        .custom-message { margin-top: 20px; font-style: italic; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Handshake! (:</h1>
        <p>Thank you for signing up for our service. This test is designed to show you the seamless integration between my Laravel-based authentication service and my Node.js-based notification system. Through this setup, I aim to demonstrate a microservices architecture that efficiently handles user authentication and communication.</p>
        <p>Here's a special message for you:</p>
        <p class="custom-message">${customMessage}</p>
    </div>
</body>
</html>
    `;
}

module.exports = generateEmailContent;

function generateEmailContentReset({ resetLink }) {
    return `
<html>
<body>
    <p>To reset your password, please click the following link: <a href="${resetLink}">Reset Password</a></p>
</body>
</html>
    `;
}
module.exports = generateEmailContentReset;


const amqp = require('amqplib');
const transporter = require('./mailer');
const resetEmailTemplate = require('./resetEmail');

async function startConsumer() {
    const connection = await amqp.connect('amqp://guest:guest@localhost');
    const channel = await connection.createChannel();
    const queue = 'notificationQueue';

    await channel.assertQueue(queue, { durable: false });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
        if (msg !== null) {
            const data = JSON.parse(msg.content.toString());
    
            if(data.type === 'password_reset') {
                const emailContent = resetEmailTemplate({
                    resetLink: data.url
                });
    
                const mailOptions = {
                    from: 'oluwasegunjimoh@gmail.com', // change this configuration
                    to: email,
                    subject: 'Welcome to the NodeJS Service from Laravel Service!',
                    html: emailContent,
                };
    
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.error(error);
                    }
                    console.log('Password reset email sent: %s', info.messageId);
                });
            }
    
            channel.ack(msg);
        }
    });
}

startConsumer().catch(console.warn);

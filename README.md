# Jupit Technical Test

This test is designed to evaluate your understanding of microservices, API architecture, and your proficiency with PHP/Laravel and Node.js/JavaScript.

## Question

You are tasked with creating an authentication API flow (registration/login) within a Laravel microservice. This microservice will handle all authentication logic. Additionally, any mails or notifications triggered by this process should be handled by a separate Node.js microservice. The interaction between these two services is a critical part of this challenge.

## 🔗 Links

- [Laravel Microservice Repository](https://github.com/Jupit-Digital-Service/jupit-laravel-test)

## Assumptions

For the purpose of this case study, the following assumptions are made:

1. Both microservices communicate via REST API.
2. The system is hosted on separate Linux machines.
3. The development of these microservices is driven by tests.
4. The implementations are functional and efficient.

## How to Submit

1. Clone the relevant repository.
2. Checkout a new branch, naming it after your email address.
3. Develop the required functionality on your branch.
4. Push your code along with the Postman API documentation to the repository.
5. Repeat the same process for both the Node.js and Laravel microservices.
6. All submissions will be considered valid until the submission deadline is exceeded.

## Setup Instructions for Node.js Notification Service

### Prerequisites

Ensure you have Node.js, npm, and RabbitMQ installed on your machine.

### Installation & Configuration

1. **Clone the Repository**
   
   ```sh
   git clone https://github.com/Tsdjimmy/jupit-nodejs-test.git
   cd jupit-nodejs-test
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Configure RabbitMQ and Email Settings**

   Update the RabbitMQ connection string in `index.js` and configure your email sender details in the `mailer` module.


4. **Start the Service**

   ```sh
   node index.js
   ```

   The service will listen for requests in laravel and send emails accordingly.



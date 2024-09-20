

# HTML Template Email Sender

This project demonstrates how to send order confirmation emails using Node.js, Nodemailer, and EJS templates. You can sent dynamic content to the html using ejs. This code this used to send html templates to email. The email is sent via Gmail's SMTP server, utilizing environment variables for sensitive information.

Note: CSS works differently in HTML email templates. 
Quick tip: Try using Table insted of flex

## Features

- Send personalized order confirmation emails.
- Use EJS for dynamic HTML email templates.
- Load sensitive information securely from a `.env` file.

## Prerequisites

- Node.js installed on your machine.
- A Gmail account (make sure to enable "Less secure app access" or use an app password if using 2FA).

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the necessary packages:

   ```bash
   npm install nodemailer ejs dotenv
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   SENDER_EMAIL=your_sender_email@gmail.com
   SENDER_PASSWORD=your_sender_password
   RECEIVER_EMAIL=recipient_email@example.com
   ```

4. Create an `Confirmation.html` file in the root directory for your email template.


Feel free to customize any sections based on your specific implementation or requirements!

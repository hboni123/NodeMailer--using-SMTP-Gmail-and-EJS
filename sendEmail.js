// Import required packages
const nodemailer = require("nodemailer"); // For sending emails
const fs = require('fs').promises; // Use promises for file operations
const ejs = require('ejs'); // For rendering EJS templates
require('dotenv').config(); // Load environment variables from .env file

// Main asynchronous function to send the email
async function main() {
  try {
    // Create a transporter object using the Gmail SMTP server
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server for Gmail
      port: 465, // Secure port for SMTP
      secure: true, // Use SSL
      auth: {
        user: process.env.SENDER_EMAIL, // Sender's email from .env
        pass: process.env.SENDER_PASSWORD // Sender's email password from .env       
      },
    });

    // Read the EJS template file asynchronously
    const template = await fs.readFile('Confirmation.html', 'utf-8');

    // Define dynamic data to be passed into the EJS template
    const data = {
      orderID: '123456',
      buyer_name: 'John Doe',
      store_name: 'My Store',
      order_number: 'ORD1234',
      order_date: '2024-09-16',
      order_total: '₹1000',
      product_img: 'https://storage.googleapis.com/zoop-public-bucket/orderimg.png',
      product_name: 'Product Name',
      size: 'M',
      quantity: '1',
      price: '500',
      shipping_name: 'John Doe',
      shipping_address1: '123 Main St',
      shipping_address2: 'Apt 4B',
      shipping_city: 'City',
      shipping_state: 'State',
      shipping_pincode: '123456',
      shipping_country: 'Country',
      payment_method: 'Credit Card',
      support_email: 'support@example.com'
    };

    // Render the HTML template with the provided data
    const html = ejs.render(template, data);

    // Define the email options
    const mailOptions = {
      from: process.env.SENDER_EMAIL, // Sender's email from .env
      to: process.env.RECEIVER_EMAIL, // Receiver's email from .env
      subject: 'Order Confirmation ✔', // Subject of the email
      html: html // Rendered HTML content
    };

    // Send the email using the defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response); // Log the response from the email service

  } catch (error) {
    console.error('Error occurred:', error); // Log any errors encountered
  }
}

// Execute the main function and handle any unhandled errors
main()
  .catch(err => console.error('Unhandled error in main function:', err));

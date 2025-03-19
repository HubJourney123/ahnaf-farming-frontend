// backend/index.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Setup with explicit port 587
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true, // Enable logging
  debug: true,  // Enable debug output
});

// API Endpoint to Handle Order Submission
app.post('/api/send-order', async (req, res) => {
  console.log('Received request body:', req.body);
  const { name, phone, detailedLocation, division, district, upazila, transactionId, cart, totalPrice, deliveryCharge, grandTotal } = req.body;

  const cartItems = cart
    .map((item) => `${item.name} x${item.quantity} = ৳ ${item.price * item.quantity}`)
    .join('\n');
  const message = `
অর্ডার বিবরণ:
নাম: ${name}
ফোন নম্বর: ${phone}
বিস্তারিত লোকেশন: ${detailedLocation}
ডিভিসন: ${division}
জেলা: ${district}
উপজেলা: ${upazila}
লেনদেন আইডি: ${transactionId}
পণ্যসমূহ:
${cartItems}
সাবটোটাল: ৳ ${totalPrice}
ডেলিভারি চার্জ: ৳ ${deliveryCharge}
মোট: ৳ ${grandTotal}
  `.trim();

  try {
    console.log('Sending email to:', 'ahnaffarming@gmail.com');
    await transporter.sendMail({
      from: `"Ahnaf Farming" <${process.env.EMAIL_USER}>`,
      to: 'ahnaffarming@gmail.com',
      subject: `New Order from ${name}`,
      text: message,
    });

    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Order sent successfully via email' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send order via email' });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
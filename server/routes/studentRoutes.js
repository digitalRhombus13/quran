const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

const nodemailer = require("nodemailer");

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// POST route to register a student and send thank-you email
router.post("/register", async (req, res) => {
  try {
    const {
      studentName,
      guardianName,
      email,
      phone,
      country,
      city,
      state,
      message,
    } = req.body;

    // Check if student with this email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create and save new student
    const newStudent = new User({
      name,
      email,
      password,
      country,
      city,
      state,
      message,
    });
    const saved = await newStudent.save();

    try {
      // Email configuration for the user
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: saved.email, // Send to the user's email
        subject: "Welcome to QuranMeet - Registration Successful",
        html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #e0f7fa 100%); border-radius: 15px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #28a745;">
            <h2 style="color: #1a3c34; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: 1px;">QuranMeet</h2>
            <h1 style="color: #28a745; font-size: 36px; font-weight: 800; margin: 10px 0; text-transform: uppercase; letter-spacing: 2px;">Thank You for Registering!</h1>
          </div>
    
          <!-- Greeting -->
          <div style="padding: 20px 0;">
            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">Dear <span style="font-weight: 600; color: #1a3c34;">${
              saved.studentName
            }</span>,</p>
            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 10px 0;">Welcome to <strong style="color: #28a745; font-size: 20px;">QuranMeet</strong>! We’re thrilled to embark on this sacred journey with you to explore the beauty and wisdom of the Holy Quran.</p>
          </div>
    
          <!-- Registration Details -->
          <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
            <p style="font-size: 18px; font-weight: 600; color: #1a3c34; margin: 0 0 15px 0;">Your Registration Details</p>
            <ul style="list-style: none; padding: 0; font-size: 16px; color: #555; line-height: 1.8;">
              <li><span style="font-weight: 600; color: #28a745;">Name:</span> ${
                saved.guardianName
              }</li>
              <li><span style="font-weight: 600; color: #28a745;">Email:</span> ${
                saved.email
              }</li>
              <li><span style="font-weight: 600; color: #28a745;">Registration Date:</span> ${new Date(
                saved.createdAt
              ).toLocaleString()}</li>
            </ul>
          </div>
    
          <!-- Call to Action -->
          <div style="text-align: center; padding: 20px 0;">
            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">Our team will reach out soon to schedule your <strong style="color: #28a745; font-size: 20px;">FREE Trial Classes</strong>.</p>
            <p style="font-size: 16px; color: #555; margin: 10px 0;">Have questions? Contact us at <a href="mailto:info@quranmeet.ca" style="color: #28a745; font-weight: 600; text-decoration: none;">info@quranmeet.ca</a>.</p>
            <a href="https://myquranclass.vercel.app" style="display: inline-block; margin-top: 15px; padding: 12px 25px; background-color: #28a745; color: #fff; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 25px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s;">Visit QuranMeet</a>
          </div>
    
          <!-- Footer -->
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 16px; color: #333; margin: 0;">Best regards,<br><strong style="color: #1a3c34; font-size: 18px;">The QuranMeet Team</strong></p>
            <p style="font-size: 12px; color: #777; margin: 10px 0;">© 2025 QuranMeet | All Rights Reserved</p>
          </div>
        </div>
      `,
      };
      // Send email to the user
      await transporter.sendMail(mailOptions);
    } catch (error) {}
    // Respond to the frontend
    res.status(201).json({
      message: "Registration successful. A confirmation email has been sent.",
      student: saved,
    });
  } catch (error) {
    console.error("Error during registration or email sending:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
// GET route to fetch all registered users (optional, for admin use)
router.get("/users", async (req, res) => {
  try {
    const users = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact'); 

// POST route to submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, phone, email, type, message } = req.body;
 
    // Create new contact entry
    const newContact = new Contact({
      name,
      phone,
      email,
      type,
      message,
    });

    // Save to database
    await newContact.save();

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: newContact,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET route to fetch all contact submissions (optional, for admin use)
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
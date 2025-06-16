const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // adjust if needed

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // ✅ This is what was missing

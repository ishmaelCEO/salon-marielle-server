const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); // ✅ Define the app FIRST

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/salon-marielle', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Basic route to test
app.get('/', (req, res) => {
  res.send('API running');
});

// Booking route
app.use('/api/booking', require('./routes/booking'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

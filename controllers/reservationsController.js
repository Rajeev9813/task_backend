// controllers/reservationsController.js

const Reservation = require('../models/reservation');

exports.makeReservation = async (req, res) => {
  try {
    // Validate inputs
    const { userId, eventDate, numberOfGuests } = req.body;
    if (!userId || !eventDate || !numberOfGuests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const currentDate = new Date();
    const reservationDate = new Date(eventDate);
    if (reservationDate <= currentDate) {
      return res.status(400).json({ error: 'Event date must be in the future' });
    }
    
    // Ensure number of guests is positive
    if (numberOfGuests <= 0) {
      return res.status(400).json({ error: 'Number of guests must be positive' });
    }
    
    // Create new reservation
    const newReservation = new Reservation({
      userId,
      eventDate,
      numberOfGuests
    });
    
    // Save reservation
    await newReservation.save();
    
    res.status(201).json({ reservation: newReservation });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

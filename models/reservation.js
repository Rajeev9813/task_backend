// models/reservation.js

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  numberOfGuests: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);

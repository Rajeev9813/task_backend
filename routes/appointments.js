// routes/appointments.js

const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');

// POST /api/book-appointment
router.post('/', appointmentsController.bookAppointment);

module.exports = router;

// routes/reservations.js

const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

// POST /api/reservations
router.post('/reservations', reservationsController.makeReservation);

module.exports = router;

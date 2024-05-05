const express = require('express');
const connectDatabase = require('./database/database');
const dotenv = require('dotenv');

const app = express();

// Express JSON middleware
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDatabase();

// Define the port
const PORT = process.env.PORT || 5000;

// Test endpoint
app.get('/test', (req, res) => {
    res.send("Test API is Working ... ");
});

// Configure routes
app.use('/api/users', require('./routes/users'));
app.use('/api', require('./routes/reservations'));
app.use('/api/appointments', require('./routes/appointments'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server has been started on Port ${PORT}!`);
});

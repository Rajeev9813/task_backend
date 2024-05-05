// usersController.js

const User = require('../models/user');

exports.addUser = async (req, res) => {
  try {
    // Check if phone number already exists
    const existingUser = await User.findOne({ phone: req.body.phone });
    if (existingUser) {
      return res.status(400).json({ error: 'Phone number already exists' });
    }
    
    // Create new user
    const newUser = new User({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email
    });
    
    // Save user
    await newUser.save();
    
    res.status(201).json({ user: newUser, message: 'User created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/User');

// @route   GET user/all
// @desc    Get all Users
// @access  Public
router.get('/all', function(req, res) {
    res.send('Get all users..');
})

// @route   POST user/login
// @desc    Login user
// @access  Public
router.use('/login', function(req, res) {
    res.send('<h1>User Login</h1>');
});

// @route   POST user/register
// @desc    Register user
// @access  Public
router.use('/register', function(req, res) {
    res.send('<h1>User Register</h1>');
});

module.exports = router;
const express = require('express');

const router = express.Router();

router.use('/login', function(req, res) {
    res.send('<h1>User Login</h1>');
});

router.use('/register', function(req, res) {
    res.send('<h1>User Register</h1>');
});

module.exports = router;;
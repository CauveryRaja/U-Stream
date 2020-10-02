const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/User');

// Change /all, /register, /update, /delete - urls
// to empty because it is redundant, already http method conveys that..

/**
 * @route   GET user/all
 * @desc    Get all Users
 * @access  Public
 */
router.get('/all', function(req, res) {
    User.find({}, function (err, users) {
      if(err) {
        console.log(err);
      }
      else {
        res.json(users);
      }
    });
});

/**
 * @route   GET user/:id
 * @desc    Get User by Id
 * @access  Public
 */
router.get('/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function (err, users) {
      if(err) {
        console.log(err);
      }
      else {
        res.json(users);
      }
    });
});

/**
 * @route   POST user/register
 * @desc    Register user
 * @access  Public
 */
router.post('/register', function(req, res) {
    const newUser = new User({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(function(err, data) {
      if(err) {
        console.log(err);
      }
      else {
        res.json(data);
      }
    });
});

/**
 * @route   PUT user/update
 * @desc    Update User
 * @access  Public
 */
router.put('/update', function(req, res) {
    User.findOneAndUpdate({_id:req.body._id},req.body, function(err, data) {
      if(err) {
        console.log(err);
      }
      else {
        res.json(data);
      }
    });
});

/**
 * @route   DELETE user/delete:id
 * @desc    Delete User by Id
 * @access  Public
 */
router.delete('/delete/:id', function(req, res) {
    User.findOneAndDelete({_id:req.params.id}, function(err, data) {
      if(err) {
        console.log(err);
      }
      else {
        res.json(data);
      }
    });
});

/**
 * @route   GET user/:id
 * @desc    Get User by Id
 * @access  Public
 */
router.post('/login', function(req, res) {
    res.send('<h1>User Login</h1>');
});

module.exports = router;

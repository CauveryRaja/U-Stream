const express = require('express');
const router = express.Router();
const multer = require('multer');

let Video = require('../models/Video.js');

/**
 * @route   POST video/add
 * @desc    Insert Video along with some Meta Information
 * @access  Private Only authorized users can upload
 */
router.post('/upload', function(req, res) {
    let videoObj = new Video({

    });
});


module.exports = router;

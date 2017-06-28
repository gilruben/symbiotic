const express = require('express');

const router = express.Router();

// API Routes
router.use('/user', require('./user'));

module.exports = router;

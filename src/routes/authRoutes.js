const express = require('express');
const { signupUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// User signup route
router.post('/signup', signupUser);

// User login route
router.post('/login', loginUser);

module.exports = router;

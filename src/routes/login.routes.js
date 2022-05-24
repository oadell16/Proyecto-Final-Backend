const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

//login
router.get('/api/login', loginController.login)

module.exports = router;
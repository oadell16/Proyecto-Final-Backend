const express = require('express');
const robotController = require('../controllers/robot.controller');
const router = express.Router();

// Display all users
router.get('/api/robots', robotController.getRobots);

//display user by id
router.get('/api/robots/:id', robotController.getRobot);

//add user to database
router.post('/api/robots', robotController.addRobot);

//delete user by id
router.delete('/api/robots/:id', robotController.deleteRobot);

//update user by id and data in body
router.put('/api/robots/:id', robotController.updateRobot);



module.exports = router;

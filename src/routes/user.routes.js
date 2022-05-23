const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// const userController = Require('../controllers/user.controller');

// Display all users
router.get('/api/users', userController.getUsers);

//display user by id
router.get('/api/users/:id', userController.getUser);

//add user to database
router.post('/api/users', userController.addUser);

//delete user by id
router.delete('/api/users/:id', userController.deleteUser);

//update user by id and data in body
router.put('/api/users/:id', userController.updateUser);



module.exports = router;

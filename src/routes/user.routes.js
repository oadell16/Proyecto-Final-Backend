const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// const userController = Require('../controllers/user.controller');

// Display all users
router.get('/api/users', userController.getUsers);
//display user by id
router.get('/api/users/:id', userController.getUser);

router.post('/api/users', userController.addUser);

router.delete('/api/users/:id', userController.deleteUser);

router.put('/api/users/:id', userController.updateUser);



module.exports = router;

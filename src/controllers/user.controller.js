const userController = {};

const req = require('express/lib/request');
// Load the MySQL pool connection
const pool = require('../config/database');

userController.getUsers = (req, res) => {
    pool.query('SELECT * FROM gestbot_users', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.getUser = (req, res) => {
    console.log(req.params.name);
    let query = `select * from gestbot_users where username = '${req.params.name}' or user_email = '${req.params.name}'`;
    pool.query(query, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.addUser = (req, res) => {
    let data = req.body
    console.log(data)
    
    let inserUser = `INSERT INTO gestbot_users(username, user_password, user_name, user_email ) VALUES("${data.username}","${data.password}","${data.name}","${data.email}")`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.deleteUser = (req, res) => {
    let id = req.params.id

    let inserUser = `DELETE FROM gestbot_users WHERE user_id = ${id}`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.updateUser = (req, res) => {
    let data = req.body;
    let id = req.params.id

    let inserUser = `UPDATE gestbot_users SET username = '${data.username}', password = '${data.password}' , user_name = '${data.name}' , user_email = '${data.email}' WHERE id = ${id}`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
};

userController.signIn = (req, res) => {
    let data = req.body
    console.log(data)

    let inserUser = `INSERT INTO gestbot_users(username, user_password, user_name, user_email ) VALUES("${data.username}","${data.password}","${data.name}","${data.email}")`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

module.exports = userController;
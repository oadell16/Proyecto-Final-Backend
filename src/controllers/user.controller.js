const userController = {};

const req = require('express/lib/request');
// Load the MySQL pool connection
const pool = require('../config/database');

userController.getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.getUser = (req, res) => {
    pool.query('SELECT * FROM users where id='+req.params.id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.addUser = (req, res) => {
    let data = req.body
    console.log(data)

    let inserUser = `INSERT INTO users(name,email,password) VALUES("${data.name}","${data.email}","${data.password}")`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.deleteUser = (req, res) => {
    let id = req.params.id

    let inserUser = `DELETE FROM users WHERE id = ${id}`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

userController.updateUser = (req, res) => {
    let data = req.body;
    let id = req.params.id

    let inserUser = `UPDATE users SET name = '${data.name}',email = '${data.email}', password = '${data.password}' WHERE id = ${id}`;
    pool.query(inserUser, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
};

module.exports = userController;
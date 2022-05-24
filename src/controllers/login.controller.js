const loginController = {};
const pool = require('../config/database');
const bcrypt = require('bcrypt');

loginController.login = (req, res) => {
    let query = `select * from gestbot_users where username = '${req.query.username}' or user_email = '${req.query.username}'`;
    pool.query(query, async (error, result) => {
        if (error) throw error;
        if (result.rowCount < 1) res.send("No se encontro al usuario");
        console.log(result)
        bcrypt.compare(result.rows[0].user_password, req.query.password, (err,data)=>{
            if (err) throw err

            //if both match than you can do anything
            if (data) {
                return res.status(200).json({ msg: "Login success" })
            } else {
                return res.status(401).json({ msg: "Invalid credencial" })
            }

        });
    });
}

module.exports = loginController;
const loginController = {};
const pool = require('../config/database');
const bcrypt = require('bcrypt');

loginController.login = (req, res) => {
    let query = `select * from gestbot_users where username = '${req.query.username}' or user_email = '${req.query.username}'`;
    pool.query(query, async (error, result) => {
        if (error) throw error;
        if (result.rowCount < 1) res.send("No se encontro al usuario");
        let bcresult = await bcrypt.compare(result.rows[0].user_password, req.query.password)
        console.log(bcresult);

        if(bcresult) {
            res.send({
                status: true,
                msg: "OK"
            })
        } else {
            res.send({
                status: false,
                msg: "password doesnt match"
            })
        }
    });
    console.log(req.query);
    res.send("me llega")
}

module.exports = loginController;
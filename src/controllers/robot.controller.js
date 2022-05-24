const robotController = {};
// Load the MySQL pool connection
const pool = require('../config/database');

robotController.getRobots = (req, res) => {
    pool.query('SELECT * FROM robots', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.getRobot = (req, res) => {
    pool.query('SELECT * FROM robots where id='+req.params.id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.addRobot = (req, res) => {
    let data = req.body
    console.log(data)

    let inserRobot = `INSERT INTO robots(name,email,password) VALUES("${data.name}","${data.email}","${data.password}")`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.deleteRobot = (req, res) => {
    let id = req.params.id

    let inserRobot = `DELETE FROM robots WHERE id = ${id}`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.updateRobot = (req, res) => {
    let data = req.body;
    let id = req.params.id

    let inserRobot = `UPDATE robots SET name = '${data.name}',email = '${data.email}', password = '${data.password}' WHERE id = ${id}`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
};

module.exports = robotController;
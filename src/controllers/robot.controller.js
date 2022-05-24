const robotController = {};
// Load the MySQL pool connection
const pool = require('../config/database');

robotController.getRobots = (req, res) => {
    pool.query('SELECT * FROM robot', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.getRobot = (req, res) => {
    pool.query('SELECT * FROM robot where id='+req.params.id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.addRobot = (req, res) => {
    let data = req.body
    console.log(data)

    let inserRobot = `INSERT INTO robot() VALUES()`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.deleteRobot = (req, res) => {
    let id = req.params.id

    let inserRobot = `DELETE FROM robot WHERE id = ${id}`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
};

robotController.updateRobot = (req, res) => {
    let data = req.body;
    let id = req.params.id

    let inserRobot = `UPDATE robot SET name = '${data.name}',email = '${data.email}', password = '${data.password}' WHERE id = ${id}`;
    pool.query(inserRobot, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
};

module.exports = robotController;
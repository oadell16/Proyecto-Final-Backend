const {Pool} = require('pg');

const pool = new Pool({
    host: 'gestbot.ddns.net',
    user: 'gestbotDB',
    password: 'gestbotDB',
    database: 'gestbotDB'
})

pool.connect((err) => {
    if(err) {
        console.log("Error al conectarse a la base de datos");
        console.log(err);
    }
})

// Export the pool
module.exports = pool;
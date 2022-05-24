const {Pool} = require('pg');

const pool = new Pool({
    host: 'database',
    user: 'gestbotDB',
    password: 'gestbotDB',
    database: 'gestbotDB'
})

// Export the pool
module.exports = pool;
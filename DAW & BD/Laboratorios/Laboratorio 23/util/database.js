const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Clase DAW',
    password: ''
});

module.exports = pool.promise();
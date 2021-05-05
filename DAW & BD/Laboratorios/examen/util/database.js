const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Parcial2',
    password: ''
});

module.exports = pool.promise();
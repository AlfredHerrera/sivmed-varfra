/*jshint esversion: 6 */
const mysql = require('mysql');

const con = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "root",
    // database: "varfra",
    // port: '3306',
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    host: '173.254.61.85',
    user: 'ventadee_equipo',
    password: '51v.4dm1n.p455',
    database: 'ventadee_todoenequipo',
    port: '3306'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

module.exports = con;
/*jshint esversion: 6 */
var mysql = require('mysql');

var con = mysql.createConnection({
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
    port: '3306',
    connectTimeout: 20000,
    acquireTimeout: 20000

});

con.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Base de datos ONLINE');
    }

});

module.exports = con;
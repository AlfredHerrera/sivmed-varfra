var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "varfra",
    port: '8889',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;
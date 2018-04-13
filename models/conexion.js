/*jshint esversion: 6 */
try {
    var mysql = require('../node_modules/mysql');
} catch (err) {
    console.log("Cannot find `mysql` module. Is it installed ? Try `npm install mysql` or `npm install`.");
}

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
    port: '3306'

    // connectTimeout: 20000,
    // acquireTimeout: 20000

});

con.connect(function(err) {
    if (err) {
        // mysqlErrorHandling(connection, err);
        console.log("\n\t *** Cannot establish a connection with the database. ***");

        connection = reconnect(con);
    } else {
        console.log("\n\t *** New connection established with the database. ***");
        console.log('Base de datos ONLINE');
    }
});

//- Reconnection function
function reconnect(connection) {
    console.log("\n New connection tentative...");

    //- Destroy the current connection variable
    if (connection) connection.destroy();

    //- Create a new one
    var connections = mysql.createConnection(db_config);

    //- Try to reconnect
    connections.connect(function(err) {
        if (err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect, 2000);
        } else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}


module.exports = con;
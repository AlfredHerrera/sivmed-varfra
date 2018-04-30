/*jshint esversion: 6 */
var mysql_npm = require('mysql');



//-
//- Connection configuration
//-
var db_config = {
    host: '173.254.61.85',
    user: 'ventadee_equipo',
    password: '51v.4dm1n.p455',
    database: 'ventadee_todoenequipo',
    port: '3306'
};


//-
//- Create the connection variable
//-
var connection = mysql_npm.createPool(db_config);


//-
//- Establish a new connection
//-
connection.getConnection(function(err) {
    if (err) {
        // mysqlErrorHandling(connection, err);
        console.log("\n\t *** Cannot establish a connection with the database. ***");

        connection = reconnect(connection);
    } else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});


//-
//- Reconnection function
//-
function reconnect(connection) {
    console.log("\n New connection tentative...");

    //- Create a new one
    connection = mysql_npm.createPool(db_config);

    //- Try to reconnect
    connection.getConnection(function(err) {
        if (err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect(connection), 2000);
        } else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}


//-
//- Error listener
//-
connection.on('error', function(err) {

    //-
    //- The server close the connection.
    //-
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
        return reconnect(connection);
    } else if (err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
        return reconnect(connection);
    } else if (err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
        return reconnect(connection);
    } else if (err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE") {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
    } else {
        console.log("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
        return reconnect(connection);
    }

});


//-
//- Export
//-
module.exports = connection;
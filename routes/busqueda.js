var express = require('express');
var mysql = require('mysql');
var app = express();

// Importacion de conexion;
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
    }
    console.log('Base de datos ONLINE   hola');
});

// =====================================
// Acceso total
// =====================================
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.get('/Busqueda', (req, res) => {

    var query = 'select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 UNION ALL select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = 4 or idStatus = 6 or idStatus = 5 or idStatus = 7  ORDER BY RAND()';
    con.query(query,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al consultar ofertas',
                    errors: err,
                    query: 'el query es ' + query
                });
            }

            res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                ok: true,
                data: rows
            });
        });
});

module.exports = app;
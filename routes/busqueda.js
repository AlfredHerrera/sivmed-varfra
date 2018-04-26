/*jshint esversion: 6 */
var express = require('express');

var app = express();

// Importacion de conexion;
var con = require('../models/conexion');

// =====================================
// Acceso total
// =====================================
app.get('/Busqueda', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    var query = 'select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 UNION ALL select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = 4 or idStatus = 6 or idStatus = 5 or idStatus = 7  ORDER BY RAND()';
    con.query(query,
        (err, rows) => {
            if (err) {
                con.reconnect(query);
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
    con.end();
});


con.reconnect = function(query) {
    con.connect().then(function(cone) {
        console.log("connected. getting new reference");
        con.query(query,
            (err, rows) => {
                if (err) {
                    con.reconnect(query);
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error al Buscar Productos',
                        errors: err
                    });
                }

                res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                    ok: true,
                    data: rows
                });
            });
        mysql = cone;
        mysql.on('error', function(err, result) {
            con.reconnect();
        });
    }, function(error) {
        console.log("try again");
        setTimeout(con.reconnect, 2000);
    });
};

module.exports = app;
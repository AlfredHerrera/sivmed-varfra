var express = require('express');

var app = express();

// Importacion de conexion;
var con = require('../models/conexion');

// ========================
// Obtener Equipos Nuevos Get
// ========================

//  equiposNuevos
app.get('/', (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    con.query("select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = 4",
        function(err, rows) {
            response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                data: rows
            });
        });
});

// =============================
// Obtener Equipos mediante post
// =============================

app.post('/', (req, res) => {

    var body = req.body; // Hacemos referencia body-parse
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${body.numero}`;
    con.query(query,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al consultar ofertas',
                    errors: err
                });
            }

            res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                ok: true,
                data: rows
            });
        });


});


module.exports = app;
/*jshint esversion: 6 */
const express = require('express');

const app = express();

// Importacion de conexion;
const con = require('../models/conexion');

// ========================
// Obtener Equipos Nuevos Get
// ========================
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

//  equiposNuevos
app.get('/Ofertas', (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST");
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

app.post('/Ofertas', (req, res) => {

    var body = req.body; // Hacemos referencia body-parse
    var query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${body.numero} ORDER BY RAND()`;
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
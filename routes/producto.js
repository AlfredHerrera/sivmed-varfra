var express = require('express');

var app = express();

// Importacion de conexion;
var con = require('../models/conexion');

// ========================
// Obtener Equipos Nuevos Get
// ========================
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});


// =============================
// Obtener Equipos mediante post
// =============================

app.post('/', (req, res) => {

    var body = req.body; // Hacemos referencia body-parse
    var query = `select e.id, e.ruta, e.clave, e.descorta, lower(e.descorta)desc_title, e.descrip, e.price, e.modelo, e.grupo from equipos e where modelo= '${body.id}'`;
    con.query(query,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al consultar producto',
                    errors: err,
                });
            }

            res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                ok: true,
                data: rows,
            });
        });


});


module.exports = app;
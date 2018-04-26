/*jshint esversion: 6 */
/*jshint esversion: 6 */
var express = require('express');

var app = express();

// Rutas
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    }); // Respuesta con codigo 200 que significa que todo esta bien 
});


module.exports = app;
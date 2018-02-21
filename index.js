'use strict'
// Requires
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Importacion de conexion;
var con = require('./models/conexion');

// Importar rutas
var appRoutes = require('./routes/app');
var ofertaRutas = require('./routes/ofertas');


// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// si hay algo en el body que estemos enviando el body parser lo toma y lo combierte en un objeto de javascript
app.use(bodyParser.json());


// Rutas
app.use('/Ofertas', ofertaRutas);
app.use('/', appRoutes);

// app.get('/categoria', (request, response, next) => {
//     response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     con.query("select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria=78 where e.idstatus=1 order by descorta",
//         function(err, rows) {
//             response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
//                 data: rows
//             });
//         });
// });


// Iniciar servidor y esperar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
'use strict'
// Requires
var express = require('express');
var mysql = require('mysql');

// Inicializar variables
var app = express();

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

// Rutas
app.get('/ofertas', (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    con.query("select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria=78 where e.idstatus=1 order by descorta",
        function(err, rows) {
            response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                data: rows
            });
        });
});

app.get('/', (request, response, next) => {
    response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

//  equiposNuevos
app.get('/EquiposNuevos', (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    con.query("select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = 4",
        function(err, rows) {
            response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                data: rows
            });
        });
});

// Iniciar servidor y esperar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
3
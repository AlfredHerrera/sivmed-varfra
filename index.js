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
var ofertaRutas = require('./routes/ofertas');
var categoriasRoutes = require('./routes/categorias');
var appRoutes = require('./routes/app');


// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// si hay algo en el body que estemos enviando el body parser lo toma y lo combierte en un objeto de javascript
app.use(bodyParser.json());


// Rutas
app.use('/categoria', categoriasRoutes);
app.use('/Ofertas', ofertaRutas);
app.use('/', appRoutes);



// Iniciar servidor y esperar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
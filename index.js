'use strict'
// Requires
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Importacion de conexion;
var con = require('./models/conexion');
var transporter = require('./models/correoCount');

// Importar rutas
var correoRutas = require('./routes/enviarCorreo');
var ofertaRutas = require('./routes/ofertas');
var categoriasRoutes = require('./routes/categorias');
var productoRutas = require('./routes/producto');
var ofertaProductoRutas = require('./routes/ofertaProducto');
var busquedaRutas = require('./routes/busqueda');
var appRoutes = require('./routes/app');


// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// si hay algo en el body que estemos enviando el body parser lo toma y lo combierte en un objeto de javascript
app.use(bodyParser.json());


// Rutas
app.use('/Correo', correoRutas);
app.use('/Categorias', categoriasRoutes);
app.use('/Ofertas', ofertaRutas);
app.use('/Producto', productoRutas);
app.use('/ProductOferta', ofertaProductoRutas);
app.use('/Busqueda', busquedaRutas);
app.use('/', appRoutes);




// Iniciar servidor y esperar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
// Requires
/*jshint esversion: 6 */

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Inicializar variables
const app = express();

const port = process.env.PORT || 3000;

// Importacion de conexion;
const con = require('./models/conexion');

// Importar rutas
const correoRutas = require('./routes/enviarCorreo');
const ofertaRutas = require('./routes/ofertas');
const categoriasRoutes = require('./routes/categorias');
const productoRutas = require('./routes/producto');
const busquedaRutas = require('./routes/busqueda');
// const appRoutes = require('./routes/app');


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
app.use('/Busqueda', busquedaRutas);
// app.use('/', appRoutes);




// Iniciar servidor y esperar peticiones
app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Express server puerto ${port}: \x1b[32m%s\x1b[0m', 'online`);
});
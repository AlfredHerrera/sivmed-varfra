// Requires
/*jshint esversion: 6 */

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Inicializar variables
const app = express();

// const port = process.env.PORT || 3000;

const port = process.env.PORT || 3000;

// Importacion de conexion;
const con = require('./models/conexion');

// Importar rutas
// var correoRutas = require('./routes/enviarCorreo');
// var ofertaRutas = require('./routes/ofertas');
// var categoriasRoutes = require('./routes/categorias');
// var productoRutas = require('./routes/producto');
// var busquedaRutas = require('./routes/busqueda');
// const appRoutes = require('./routes/app');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// si hay algo en el body que estemos enviando el body parser lo toma y lo combierte en un objeto de javascript
app.use(bodyParser.json());

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
    next();

});

// Rutas

app.use(require('./routes/enviarCorreo'));
app.use(require('./routes/ofertas'));
app.use(require('./routes/categorias'));
app.use(require('./routes/producto'));
app.use(require('./routes/busqueda'));
app.use(require('./routes/app'));
// app.use('/Correo', correoRutas);
// app.use('/Categorias', categoriasRoutes);
// app.use('/Ofertas', ofertaRutas);
// app.use('/Producto', productoRutas);
// app.use('/Busqueda', busquedaRutas);
// app.use('/', appRoutes);





// Iniciar servidor y esperar peticiones
app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Express server puerto ${port}: \x1b[32m%s\x1b[0m', 'online`);
});
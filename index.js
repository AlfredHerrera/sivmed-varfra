 // Requires
 var express = require('express');
 var mysql = require('mysql');
 var bodyParser = require('body-parser');

 // Inicializar variables
 var app = express();

 const port = process.env.PORT || 3000;

 // Importacion de conexion;
 var con = require('./models/conexion');

 // Importar rutas
 //  var correoRutas = require('./routes/enviarCorreo');
 //  var ofertaRutas = require('./routes/ofertas');
 //  var categoriasRoutes = require('./routes/categorias');
 //  var productoRutas = require('./routes/producto');
 //  var busquedaRutas = require('./routes/busqueda');
 //  var appRoutes = require('./routes/app');


 // body parser
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));
 // si hay algo en el body que estemos enviando el body parser lo toma y lo combierte en un objeto de javascript
 app.use(bodyParser.json())


 // Rutas
 //  app.use(require('/Correo', correoRutas));
 //  app.use(require('/Categorias', categoriasRoutes));
 //  app.use(require('/Ofertas', ofertaRutas));
 //  app.use(require('/Producto', productoRutas));
 //  app.use(require('/Busqueda', busquedaRutas));
 //  app.use(require('/', appRoutes));
 app.use(require('./routes/enviarCorreo'));
 app.use(require('./routes/ofertas'));
 app.use(require('./routes/categorias'));
 app.use(require('./routes/producto'));
 app.use(require('./routes/busqueda'));
 app.use(require('./routes/app'));



 // Iniciar servidor y esperar peticiones
 app.listen(port, (err) => {
     if (err) throw new Error(err);
     console.log(`Express server puerto ${port}: \x1b[32m%s\x1b[0m', 'online`);
 });
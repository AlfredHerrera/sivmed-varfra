var express = require('express');

var app = express();

// Importacion de conexion;
var con = require('../models/conexion');

// app.get('/', (request, response, next) => {
//     response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     con.query("select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria=78 where e.idstatus=1 order by descorta",
//         function(err, rows) {
//             response.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
//                 data: rows
//             });
//         });
// });


// =============================
// Obtener Equipos mediante post
// =============================

app.post('/', (req, res) => {

    var query
    var body = req.body; // Hacemos referencia body-parse
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // var query = getSQl(body.numero, body.categorias);
    switch (body.numero) {
        case '1':
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria= ${body.categorias}  where e.idstatus=1 order by descorta`;
            break;
        case '2':
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria= ${body.categorias[0]} and idCategoria= ${body.categorias[1]} where e.idstatus=1 order by descorta`;
            break;
        default:
            break;
    }
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


function getSQl(numCatego, categorias = []) {
    var query = "";
    switch (numCatego) {
        case 1:
            query = `select lower(e.descorta) descorta from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo and idCategoria= ${categorias[0]} where e.idstatus=1 order by descorta`;
            return query;
            break;
        case 2:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]}`;
            return query;
            break;
        case 3:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]}`;
            return query;
            break;
        case 4:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]} and idStatus = ${categorias[3]}`;
            break;
        case 5:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]} and idStatus = ${categorias[3]} and idStatus = ${categorias[4]}`;
            break;
        case 6:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]} and idStatus = ${categorias[3]} and idStatus = ${categorias[5]}`;
            break;
        case 7:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]} and idStatus = ${categorias[3]} and idStatus = ${categorias[6]}`;
            break;
        case 8:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]} and idStatus = ${categorias[1]} and idStatus = ${categorias[2]} and idStatus = ${categorias[3]} and idStatus = ${categorias[6]} and idStatus = ${categorias[7]}`;
            break;

        default:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from ofertas e where idStatus = ${categorias[0]}`;
            return query;
            break;
    }
}

module.exports = app;
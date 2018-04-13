/*jshint esversion: 6 */

const express = require('express');

const app = express();

// Importacion de conexion;
const con = require('../models/conexion');

// =====================================
// Acceso total
// =====================================

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// =====================================
// Obtener Equipos de la categoria post
// =====================================

app.get('/', (req, res) => {
    var query;
    query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 ORDER BY RAND()`;
    con.query(query,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al consultar productos',
                    errors: err,
                });
            }

            res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                ok: true,
                data: rows
            });
        });
});



// =====================================
// Obtener Equipos de la categoria post
// =====================================

app.post('/', (req, res) => {

    var query;
    var body = req.body; // Hacemos referencia body-parse
    // var query = getSQl(body.numero, body.categorias);
    switch (body.numero) {
        case 1:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} ORDER BY RAND()`;
            break;
        case 2:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} ORDER BY RAND()`;
            break;
        case 3:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} ORDER BY RAND()`;
            break;
        case 4:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} ORDER BY RAND()`;
            break;
        case 5:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} ORDER BY RAND()`;
            break;
        case 6:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} ORDER BY RAND()`;
            break;
        case 7:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} ORDER BY RAND()`;
            break;
        case 8:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} ORDER BY RAND()`;
            break;
        case 9:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} or idCategoria= ${body.categorias[8]} ORDER BY RAND()`;
            break;
        case 10:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} or idCategoria= ${body.categorias[8]} or idCategoria= ${body.categorias[9]} ORDER BY RAND()`;
            break;
        case 11:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} or idCategoria= ${body.categorias[8]} or idCategoria= ${body.categorias[9]} or idCategoria= ${body.categorias[10]} ORDER BY RAND()`;
            break;
        case 12:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} or idCategoria= ${body.categorias[8]} or idCategoria= ${body.categorias[9]} or idCategoria= ${body.categorias[10]} or idCategoria= ${body.categorias[11]} ORDER BY RAND()`;
            break;
        case 13:
            query = `select e.descorta, substring(e.descrip, 1,180) descrip, e.clave, e.ruta, e.modelo, e.price, e.id from equipos_Categoria ec inner join equipos e on e.id=ec.idEquipo where e.idstatus=1 and idCategoria= ${body.categorias[0]} or idCategoria= ${body.categorias[1]} or idCategoria= ${body.categorias[2]} or idCategoria= ${body.categorias[3]} or idCategoria= ${body.categorias[4]} or idCategoria= ${body.categorias[5]} or idCategoria= ${body.categorias[6]} or idCategoria= ${body.categorias[7]} or idCategoria= ${body.categorias[8]} or idCategoria= ${body.categorias[9]} or idCategoria= ${body.categorias[10]} or idCategoria= ${body.categorias[11]} or idCategoria= ${body.categorias[12]} ORDER BY RAND()`;
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
                    errors: err,
                    query: 'el query es ' + query
                });
            }

            res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
                ok: true,
                data: rows
            });
        });


});

module.exports = app;
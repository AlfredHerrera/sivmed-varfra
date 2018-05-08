/*jshint esversion: 6 */

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var transporter;

// create reusable transporter object using the default SMTP transport
transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "medicalequipment14@gmail.com",
        pass: "vimport12"
    }
});

app.post('/Correo', (req, res) => {
    var body = req.body; // Hacemos referencia body-parse
    var fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth() + 1; //hoy es 0!
    var yyyy = fecha.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    fecha = mm + '/' + dd + '/' + yyyy;
    var mailOptions = {
        from: 'medicalequipment14@gmail.com', // sender address
        to: 'sivmed.it@gmail.com, todoenequipomedico@gmail.com', // list of receivers
        subject: 'Contacto desde Sivmedical.com', // Subject line
        html: '<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
            '<html xmlns="http://www.w3.org/1999/xhtml">' +
            '<head>' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
            '    <title>correoSivmedical</title>' +
            '    <style type="text/css">' +
            '        * {' +
            '            margin: 0;' +
            '            padding: 0;' +
            '            text-indent: 0;' +
            '        }' +
            '        h1 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        p {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: normal;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '            margin: 0pt;' +
            '        }' +
            '        .s1 {' +
            '            color: #FFF;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        .s2 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        .s3 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: normal;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '    </style>' +
            '</head>' +
            '<body>' +
            '    <p style="padding-left: 26pt;text-indent: 0pt;text-align: left;"><span><img width="761" height="164" alt="image" src="https://www.varfra.com/images/logofecha.png"/></span></p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <h1 style="padding-top: 5pt;padding-left: 85pt;text-indent: 0pt;text-align: left;">Mensaje enviado el día ' + fecha + '</h1>' +
            '    <br>' +
            '    <p style="padding-top: 5pt;padding-left: 85pt;text-indent: 0pt;text-align: left;">Contacto desde Sivmedical:</p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <table style="border-collapse:collapse;margin-left:86.1606pt" cellspacing="0">' +
            '        <tr style="height:31pt">' +
            '            <td style="width:108pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 29pt;text-indent: -7pt;line-height: 15pt;text-align: left;">Nombre del Contacto</p>' +
            '            </td>' +
            '            <td style="width:100pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 29pt;text-indent: 0pt;text-align: left;">Asunto</p>' +
            '            </td>' +
            '            <td style="width:111pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 36pt;text-indent: 0pt;text-align: left;">Email</p>' +
            '            </td>' +
            '            <td style="width:148pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 47pt;text-indent: 0pt;text-align: left;">Mensaje</p>' +
            '            </td>' +
            '        </tr>' +
            '        <tr style="height:117pt">' +
            '            <td style="width:108pt;border-left-style:solid;border-left-width:1pt;border-left-color:#9CC2E5;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s2" style="padding-left: 27pt;text-indent: 0pt;text-align: left;">' + body.nombre + '</p>' +
            '            </td>' +
            '            <td style="width:100pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s3" style="padding-left: 26pt;text-indent: 0pt;text-align: left;">' + body.asunto + '</p>' +
            '            </td>' +
            '            <td style="width:111pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s3" style="padding-left: 33pt;text-indent: 0pt;text-align: left;">' + body.email + '</p>' +
            '            </td>' +
            '            <td style="width:148pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5;border-right-style:solid;border-right-width:1pt;border-right-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s3" style="padding-left: 45pt;text-indent: 0pt;text-align: left;">' + body.mensaje + '</p>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '    <br><br>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><span><img width="809" height="37" alt="image" src="https://www.varfra.com/images/logoFooter.png"/></span></p>' +
            '</body>' +
            '</html>'

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al enviar correo',
                errors: error,
            });
        }

        correoPersona(body.email);
        res.status(200).json({ // Respuesta con codigo 200 que significa que todo esta bien 
            ok: true,
            data: info.messageId,
        });
    });
});

let correoPersona = (correo) => {
    var fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth() + 1; //hoy es 0!
    var yyyy = fecha.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    fecha = mm + '/' + dd + '/' + yyyy;
    var mailOptions = {
        from: 'medicalequipment14@gmail.com', // sender address
        to: correo, // list of receivers
        subject: 'Contacto desde Sivmedical.com', // Subject line
        html: '<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
            '<html xmlns="http://www.w3.org/1999/xhtml">' +
            '<head>' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
            '    <title>correoSivmedical</title>' +
            '    <style type="text/css">' +
            '        * {' +
            '            margin: 0;' +
            '            padding: 0;' +
            '            text-indent: 0;' +
            '        }' +
            '        h1 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        p {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: normal;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '            margin: 0pt;' +
            '        }' +
            '        .s1 {' +
            '            color: #FFF;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        .s2 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: bold;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '        .s3 {' +
            '            color: black;' +
            '            font-family: Arial, sans-serif;' +
            '            font-style: normal;' +
            '            font-weight: normal;' +
            '            text-decoration: none;' +
            '            font-size: 12pt;' +
            '        }' +
            '    </style>' +
            '</head>' +
            '<body>' +
            '    <p style="padding-left: 26pt;text-indent: 0pt;text-align: left;"><span><img width="761" height="164" alt="image" src="https://www.varfra.com/images/logofecha.png"/></span></p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <h1 style="padding-top: 5pt;padding-left: 85pt;text-indent: 0pt;text-align: left;">Mensaje enviado el día ' + fecha + '</h1>' +
            '    <br>' +
            '    <p style="padding-top: 5pt;padding-left: 85pt;text-indent: 0pt;text-align: left;">Contacto desde Sivmedical.com:</p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <br>' +
            '    <p style="padding-top: 5pt;padding-left: 85pt;text-indent: 0pt;text-align: left;">Gracias por contactarnos en seguida le haremos llegar su cotización cualquier duda les dejo nuestros contactos:</p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <br><br>' +
            '    <table style="border-collapse:collapse;margin-left:86.1606pt" cellspacing="0">' +
            '        <tr style="height:31pt">' +
            '            <td style="width:108pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 29pt;text-indent: -7pt;line-height: 15pt;text-align: left;">Nombre del Contacto</p>' +
            '            </td>' +
            '            <td style="width:100pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 29pt;text-indent: 0pt;text-align: left;">Teléfono</p>' +
            '            </td>' +
            '            <td style="width:111pt" bgcolor="#5B9BD5">' +
            '                <p class="s1" style="padding-left: 36pt;text-indent: 0pt;text-align: left;">Email</p>' +
            '            </td>' +
            '        </tr>' +
            '        <tr style="height:117pt">' +
            '            <td style="width:108pt;border-left-style:solid;border-left-width:1pt;border-left-color:#9CC2E5;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s2" style="padding-left: 27pt;text-indent: 0pt;text-align: left;"> Sivmedical.com </p>' +
            '            </td>' +
            '            <td style="width:100pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s3" style="padding-left: 26pt;text-indent: 0pt;text-align: left;"> 5545-5021, 5545-7887</p>' +
            '            </td>' +
            '            <td style="width:111pt;border-bottom-style:solid;border-bottom-width:1pt;border-bottom-color:#9CC2E5" bgcolor="#DEEAF6">' +
            '                <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '                <p class="s3" style="padding-left: 33pt;text-indent: 0pt;text-align: left;">todoenequipomedico@gmaill.com, sivmed.it@gmail.com </p>' +
            '            </td>' +
            '        </tr>' +
            '    </table>' +
            '    <br><br>' +
            '    <p style="text-indent: 0pt;text-align: left;"><br/></p>' +
            '    <p style="text-indent: 0pt;text-align: left;"><span><img width="809" height="37" alt="image" src="https://www.varfra.com/images/logoFooter.png"/></span></p>' +
            '</body>' +
            '</html>'

    };
    transporter.sendMail(mailOptions, (error, info) => {

    });
};

module.exports = app;
const Mascota = require('../models/mascotasActuales');

exports.getNuevaMascotas = (request, response, next) => {
    const mascota = Mascota(request.body.nombre, request.body.image, request.body.contenido, request.body.nota);
    mascota.save()
        .then((rows, fieldData) => {
            console.log(rows);
            response.redirect('/');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getMascotasActuales = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Bienvenido="Bienvenido a mis mascotas Actuales"; HttpOnly');

    Mascota.fetchMaia()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('mascotas_actuales', {
                perros: rows,
                titulo: rows[0].nombre
            });
        })
        .catch(err => {
            console.log(err);
        });

    
};

exports.getHara = (request, response, next) => {
    Mascota.fetchHara()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('hara', {
                perros: rows,
                titulo: rows[0].nombre
            });
        })
        .catch(err => {
            console.log(err)
        });
};


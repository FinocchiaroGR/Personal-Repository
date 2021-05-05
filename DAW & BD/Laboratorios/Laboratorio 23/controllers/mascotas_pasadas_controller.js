const Mascota = require('../models/mascotasPasadas');

exports.getNuevaMascotas = (request, response, next) => {
    const mascota = Mascota(request.body.nombre, request.body.image, request.body.contenido);
    mascota.save()
        .then((rows, fieldData) => {
            console.log(rows);
            response.redirect('/');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getMascotasPasadas = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Bienvenido="Bienvenido a mis mascotas pasadas"; HttpOnly');

    Mascota.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('mascotas_pasadas', {
                perros: rows, 
                titulo: rows.nombre
            });
        })
        .catch(err => {
            console.log(err);
        });
};

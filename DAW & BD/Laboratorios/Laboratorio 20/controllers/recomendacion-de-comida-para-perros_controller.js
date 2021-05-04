const file_system = require('fs');
const Recomendacion = require('../models/recomendaciones');

exports.getNuevaRecomendacion = (request, response, next) => {
    response.render('nueva_recomendacion', {
        csrfToken: request.csrfToken(),
        titulo: "Nueva Recomendacion",
        ultima_recomendacion: request.session.ultima_recomendacion === undefined ? "No hay Recomendaciones Recientes" : request.session.ultima_recomendacion
    });
};

exports.postNuevaRecomendacion = (request, response, next) => {
    console.log(request.body);
    file_system.writeFileSync('recomendacion.txt', request.body.Nombre);

    const recomendacion = new Recomendacion(request.body.Nombre);

    recomendacion.save()
        .then(() => {
            request.session.ultima_recomendacion = request.body.Nombre;
            response.render('gracias_recomendacion', {
                titulo: "Gracias"
            });
        })
        .catch(err => {
            console.log(err)
        });
};
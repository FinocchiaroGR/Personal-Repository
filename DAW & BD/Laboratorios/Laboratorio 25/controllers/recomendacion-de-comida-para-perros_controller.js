const { request, response } = require('express');
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
    console.log(request.file);
    file_system.writeFileSync('recomendacion.txt', request.body.Nombre);
    const ruta_archivo = request.file.path;

    const recomendacion = new Recomendacion(request.body.Nombre, ruta_archivo);

    recomendacion.save()
        .then(() => {
            request.session.ultima_recomendacion = request.body.Nombre;
            response.render('gracias_recomendacion', {
                csrfToken: request.csrfToken(),
                titulo: "Gracias"
            });
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getRecomendaciones = (request, response, next) => {
    Recomendacion.fetchAll()
        .then(([rows]) => {
            response.render('lista_recomendaciones', { 
                recomendaciones: rows, 
                titulo: "lista de Recomendaciones"
            });
        })
        .catch(err => {
            console.log(err)
        });
};
exports.postRecomendacion = (request, response, next) => {
    Recomendacion.delete(request.body.recomendacion)
         .then(() => {
            Recomendacion.fetchAll()
                .then(([rows]) => {
                    return response.status(200).json({recomendaciones: rows});
                })
                .catch(err => {
                    console.log(err)
                });
         })
         .catch((err) => {
             console.log(err);
             return response.status(500).json({message: "Internal Server Error"});
        });
};
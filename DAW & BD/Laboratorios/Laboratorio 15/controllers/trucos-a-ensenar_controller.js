const file_system = require('fs');
const Truco = require('../models/trucos');

exports.getNuevoTruco = (request, response, next) => {
    response.render('nuevo_truco', {
        titulo: "Nuevo Truco - Para Enseñar"
    });
};

exports.postNuevoTruco = (request, response, next) => {
    console.log(request.body);
   file_system.writeFileSync('trucos.txt', request.body.Nombre);

    const truco = new Truco(request.body.Nombre);
    truco.save();

   response.render('gracias_truco', {
       titulo: 'Gracias', 
       nombre: request.body.Nombre
    }) 
};
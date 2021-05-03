const file_system = require('fs');
const Truco = require('../models/trucos');

exports.getNuevoTruco = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Truco="Gracias por recomendar un Truco"; HttpOnly');
    response.render('nuevo_truco', {
        titulo: "Nuevo Truco - Para Enseñar",
        ultimo_truco: request.session.ultimo_truco === undefined ? "No hay Trucos Recientes" : request.session.ultimo_truco
    });
};

exports.postNuevoTruco = (request, response, next) => {
    console.log(request.body);
   file_system.writeFileSync('trucos.txt', request.body.Nombre);

    const truco = new Truco(request.body.Nombre);
    truco.save();

    request.session.ultimo_truco = request.body.Nombre;

   response.render('gracias_truco', {
       titulo: 'Gracias', 
       nombre: request.body.Nombre
    }) 
};
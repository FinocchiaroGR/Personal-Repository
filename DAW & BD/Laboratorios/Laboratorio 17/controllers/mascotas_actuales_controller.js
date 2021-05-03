const Mascota = require('../models/mascotasActuales');

exports.getMascotasActuales = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Bienvenido="Bienvenido a mis mascotas Actuales"; HttpOnly');

    const maia = Mascota.fetchMaia();

    response.render('mascotas_actuales', {
        perros: maia,
        titulo: maia.nombre
    });
};

const hara = Mascota.fetchHara();

exports.getHara = (request, response, next) => {
    response.render('hara', {
        perros: hara, 
        titulo: hara.nombre
    });
}


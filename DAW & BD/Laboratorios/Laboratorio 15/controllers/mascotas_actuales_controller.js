const Mascota = require('../models/mascotasActuales');

exports.getMascotasActuales = (request, response, next) => {

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


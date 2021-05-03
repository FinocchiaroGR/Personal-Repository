const Mascota = require('../models/mascotasPasadas');

exports.getMascotasPasadas = (request, response, next) => {
    response.render('mascotas_pasadas', {
        perros: Mascota.fetchAll(), 
        titulo: 'Nala'
    });
};

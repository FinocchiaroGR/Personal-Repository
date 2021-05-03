const Mascota = require('../models/mascotasPasadas');

exports.getMascotasPasadas = (request, response, next) => {
    response.setHeader('Set-Cookie', 'Bienvenido="Bienvenido a mis mascotas pasadas"; HttpOnly');

    response.render('mascotas_pasadas', {
        perros: Mascota.fetchAll(), 
        titulo: 'Nala'
    });
};

const express = require('express');
const router = express.Router();

const perros = [
    {
        nombre: 'Maia', 
        imagen: 'https://www.pdsa.org.uk/media/7892/husky-gallery-outdoors-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179622120000000', 
        contenido: 'Maia Maiesta de Finocchiaro, es mi mascota actualmente. Su nombre es uno de los nombres de la diosa de la primavera griga. A pesar de ser Husky, es la perra mas cariñosa que he tenido, es inteligente, y sabe aullar, sentarse, acostarse, dar la pata, y pararse en dos patas para chocarme la mano en comando, o con señales con las manos.'
    },
    {
        nombre: 'Hara', 
        imagen: 'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg', 
        contenido: 'Hara Lunantishe es una pitbull color marron rescatada de la calle, actualmente vive conmigo, junto a Maia, pero mi novia es su dueña; Babea cuando ve comida. Hara sabe dar la pata, sentarse y acostarse.'
    }
];

router.get('/mascotas', (request, response, next) => {
    response.render('mascotas_actuales', {perros: perros, titulo: "Maia"});
});

router.get('/hara', (request, response, next) => {
    response.render('hara', {perros: perros, titulo: "Hara"});
});

module.exports = router;
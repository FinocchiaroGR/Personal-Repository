const express = require('express');
const router = express.Router();

const perros = [
    {nombre: 'Maia', imagen: 'https://www.pdsa.org.uk/media/7892/husky-gallery-outdoors-1-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132179622120000000', 
    contenido: 'Maia Maiesta de Finocchiaro, es mi mascota actualmente. Su nombre es uno de los nombres de la diosa de la primavera griga. A pesar de ser Husky, es la perra mas cariñosa que he tenido, es inteligente, y sabe aullar, sentarse, acostarse, dar la pata, y pararse en dos patas para chocarme la mano en comando, o con señales con las manos'}
];

router.use('/mascotas', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[0].nombre+'</title></head><body>');
    response.write('<h1>'+perros[0].nombre+'</h1>');
    response.write('<table><tr><td><img alt="Imagen de Lobo Siberiano" src="'+perros[0].imagen+'"></td><td>');
    response.write('<p style="text-align:center">' + perros[0].contenido + '</p>' + '</td></tr></table></body></html>');
    response.end();
});

module.exports = router;
const express = require('express');
const router = express.Router();

const perros = [
    {nombre: 'Nala', imagen: 'https://www.dogalize.com/wp-content/uploads/2016/12/border-collie-black-white.jpg',
    contenido: 'Nala era una Border Collie, fue mi primera perra desde los 2 años, y vivio por 18. Por Nala yo crei que todos los perros eran sumamente inteligentes, que entendian muy bien lo que los humanos decian, ya que Nala sin enseñarle nada, sabia todo, tanto que mi papá pensaba que solo le hacia falta hablar como nosotros. Sabia: sentarse, dar la pata, acostarse, seguirme sin correa, heel, ladrar, mostrar la pansa, y aprendio desde chiquita a atrapar el frisbee en el aire por comando, o simple instinto.',
    nota: ' Los Border Collies son considerados los perros mas inteligentes en el mundo, comparando las razas que la gente piensa que son los mas inteligentes(Pastor aleman, Golden retriever) como si fuesen humanos normales con un empleo y familia, y el Border Collie como un cientifico de la NASA'}
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
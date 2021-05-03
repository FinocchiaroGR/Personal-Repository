const express = require('express');
const router = express.Router();

const file_system = require('fs');

router.get('/nuevo-truco', (request, response, next) => {
    response.render('nuevo_truco', {titulo: "Nuevo Truco - Para Enseñar"});
});

router.post('/nuevo-truco', (request, response, next) => {
   console.log(request.body);
   file_system.writeFileSync('trucos.txt', request.body.Nombre);
   response.render('gracias_truco', {titulo: 'Gracias', nombre: request.body.Nombre}) 
});

module.exports = router;
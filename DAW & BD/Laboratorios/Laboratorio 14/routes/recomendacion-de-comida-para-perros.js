const express = require('express');
const router = express.Router();

const file_system = require('fs');

router.get('/nueva-recomendacion', (request, response, next) => {
    response.render('nueva_recomendacion', {titulo: "Nueva Recomendacion"});
});

router.post('/nueva-recomendacion', (request, response, next) => {
   console.log(request.body);
   file_system.writeFileSync('recomendacion.txt', request.body.Nombre);
   response.render('gracias_recomendacion', {titulo: "Gracias"});
});

module.exports = router;
const express = require('express');
const router = express.Router();

const file_system = require('fs');

router.get('/nuevo-truco', (request, response, next) => {
    response.send('<form action="nuevo-truco" method="POST"><input type="text" name="Nombre"><br><input type="submit" name="Caso" value="Enseñar"></form>'); 
});

router.post('/nuevo-truco', (request, response, next) => {
   console.log(request.body);
   file_system.writeFileSync('trucos.txt', request.body.Nombre);
   response.send('Gracias! El nuevo truco: ' + request.body.Nombre + ', Se lo Enseñare a Maia lo Más Rápido Posible!'); 
});

module.exports = router;
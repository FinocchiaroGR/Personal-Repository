const express = require('express');
const router = express.Router();

const recomendacionController = require('../controllers/recomendacion-de-comida-para-perros_controller');

router.get('/nueva-recomendacion', recomendacionController.getNuevaRecomendacion);

router.post('/nueva-recomendacion', recomendacionController.postNuevaRecomendacion);

module.exports = router;
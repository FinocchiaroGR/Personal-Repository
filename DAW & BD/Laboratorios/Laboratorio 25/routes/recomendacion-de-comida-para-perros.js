const express = require('express');
const router = express.Router();

const recomendacionController = require('../controllers/recomendacion-de-comida-para-perros_controller');
const isAuth = require('../util/is-auth.js');

router.get('/nueva-recomendacion', isAuth, recomendacionController.getNuevaRecomendacion);

router.post('/nueva-recomendacion', isAuth, recomendacionController.postNuevaRecomendacion);

router.get('/Recomendaciones', isAuth, recomendacionController.getRecomendaciones);

router.post('/eliminar', isAuth, recomendacionController.postRecomendacion);

module.exports = router;
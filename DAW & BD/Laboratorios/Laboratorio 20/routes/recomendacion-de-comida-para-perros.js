const express = require('express');
const router = express.Router();

const recomendacionController = require('../controllers/recomendacion-de-comida-para-perros_controller');
const isAuth = require('../util/is-auth.js');

router.get('/nueva-recomendacion', isAuth, recomendacionController.getNuevaRecomendacion);

router.post('/nueva-recomendacion', isAuth, recomendacionController.postNuevaRecomendacion);

module.exports = router;
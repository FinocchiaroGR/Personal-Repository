const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotas_actuales_controller');
const isAuth = require('../util/is-auth.js');

router.get('/mascotas', isAuth, mascotasController.getMascotasActuales);

router.get('/hara', isAuth, mascotasController.getHara);

module.exports = router;
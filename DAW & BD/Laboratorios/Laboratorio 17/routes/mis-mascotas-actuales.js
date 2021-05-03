const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotas_actuales_controller');

router.get('/mascotas', mascotasController.getMascotasActuales);

router.get('/hara', mascotasController.getHara);

module.exports = router;
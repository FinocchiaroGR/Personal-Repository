const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotas_pasadas_controller');

router.use('/mascotas', mascotasController.getMascotasPasadas);

module.exports = router;
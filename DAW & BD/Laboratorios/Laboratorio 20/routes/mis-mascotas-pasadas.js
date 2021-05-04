const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotas_pasadas_controller');
const isAuth = require('../util/is-auth.js');

router.use('/mascotas', isAuth, mascotasController.getMascotasPasadas);

module.exports = router;
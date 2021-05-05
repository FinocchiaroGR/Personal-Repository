const express = require('express');
const router = express.Router();

const trucoController = require('../controllers/trucos-a-ensenar_controller');
const isAuth = require('../util/is-auth.js');

router.get('/nuevo-truco', isAuth, trucoController.getNuevoTruco);

router.post('/nuevo-truco', isAuth, trucoController.postNuevoTruco);

module.exports = router;
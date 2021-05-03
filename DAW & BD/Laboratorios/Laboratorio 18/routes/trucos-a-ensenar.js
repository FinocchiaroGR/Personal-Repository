const express = require('express');
const router = express.Router();

const file_system = require('fs');
const trucoController = require('../controllers/trucos-a-ensenar_controller');

router.get('/nuevo-truco', trucoController.getNuevoTruco);

router.post('/nuevo-truco', trucoController.postNuevoTruco);

module.exports = router;
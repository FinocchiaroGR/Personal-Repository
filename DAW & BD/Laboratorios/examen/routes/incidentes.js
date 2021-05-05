const express = require('express');
const router = express.Router();

const incidentesController = require('../controllers/incidentes_controller');

router.get('/incidentes', incidentesController.getIncidentes);
//router.get('/:incidente_id', incidentesController.getMascota);

router.get('/nuevo-incidente', incidentesController.getNewIncidentes);
router.post('/nuevo-incidente', incidentesController.postNewIncidentes);

module.exports = router;
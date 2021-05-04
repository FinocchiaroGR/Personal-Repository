const express = require('express');
const router = express.Router();

const path = require('path');

const usuariosController = require('../controllers/usuarios_controller.js');


router.get('/logout', usuariosController.logout);
router.get('/new', usuariosController.getNewUser);
router.post('/new', usuariosController.postNewUser);
router.get('/login', usuariosController.getLogin);
router.post('/login', usuariosController.postLogin);

module.exports = router;
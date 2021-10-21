// Importando bibliotecas
const router = require("express").Router();
const cartaController = require('../controllers/carta');
//Definimos el método POST para agregar cartas en BD
router.post('/agregarCarta',cartaController.postAgregarCarta)
//Definimos el método GET para consultar las cartas en BD
router.get('/obtenerCarta',cartaController.getObtenerCarta)
//Este se añadió para eliminar las pruebas realizadas
router.post('/borrarCarta',cartaController.postBorrarCarta)

module.exports = router
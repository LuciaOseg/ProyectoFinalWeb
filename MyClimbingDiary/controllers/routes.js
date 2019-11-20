
const express = require('express')
const rutas = require('./ruta')

const router = express.Router()

router.get('/rutas', rutas.getRuta)
router.post('/rutas', rutas.createRuta)

module.exports = router

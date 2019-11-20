
const express = require('express')
const rutas = require('./ruta')
const proyectos = require('./proyecto')

const router = express.Router()

router.get('/rutas', rutas.getRuta)
router.post('/rutas', rutas.createRuta)

router.get('/proyectos', proyectos.getProyecto)
router.post('/proyectos', proyectos.createProyecto)

module.exports = router

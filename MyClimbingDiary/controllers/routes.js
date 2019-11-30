
const express = require('express')
const rutas = require('./ruta')
const proyectos = require('./proyecto')
const users = require('./users')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/rutas', rutas.getRuta)
router.post('/rutas', rutas.createRuta)

router.get('/proyectos', proyectos.getProyecto)
router.post('/proyectos', proyectos.createProyecto)

router.get('/login', users.login) //Jala
router.get('/logout', auth, users.logout)//Jala
router.get('/users', auth, users.getUsers)
router.get('/users/:id', users.getUser)//Jala
router.post('/users', users.createUser)//Jala
router.patch('/users/:id', users.updateUser)
router.delete('/users/:id', users.deleteUser)//jala

module.exports = router

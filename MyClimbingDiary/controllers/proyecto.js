const Ruta = require('../models/proyectos.js')

const getProyecto = function(req, res) {
Ruta.find({}).then(function(proyectos) {
    res.send(proyectos)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const createProyecto = function(req, res) {
  const proyecto = new Ruta(req.body)
      proyecto.save().then(function() {
      return res.send(proyecto)
      }).catch(function(error) {
      return res.status(400).send(error)
      })
}

  module.exports = {
    getProyecto,
    createProyecto
  }

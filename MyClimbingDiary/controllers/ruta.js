const Ruta = require('../models/rutas.js')

const getRuta = function(req, res) {
Ruta.find({}).then(function(rutas) {
    res.send(rutas)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const createRuta = function(req, res) {
  const ruta = new Ruta(req.body)
      ruta.save().then(function() {
      return res.send(ruta)
      }).catch(function(error) {
      return res.status(400).send(error)
      })
}

  module.exports = {
    getRuta,
    createRuta
  }

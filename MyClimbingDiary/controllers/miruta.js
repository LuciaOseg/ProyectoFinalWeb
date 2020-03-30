const miRuta = require('../models/misrutas.js')

//Toma mis rutas
const getMisRutas = function(req, res) {
  miRuta.find({createdBy: req.user._id}).then(function(misrutas) {
    res.send(misrutas)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

//Crea nuevas mis rutas
const createMiRuta = function(req, res) {
    // los ... son para copiar todo el req.body
    // modificar aqui
  const miruta = new miRuta({
    ...req.body,
    createdBy: req.user._id
  })
  miruta.save().then(function() {
    return res.send(miruta)
  }).catch(function(error) {
    return res.status(400).send({ error: error })
})
}
  

  module.exports = {
    getMisRutas,
    createMiRuta
  }
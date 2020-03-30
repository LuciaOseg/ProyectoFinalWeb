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

//Para borrar misRutas
const deleteMiRuta= function(req, res) {
  const _id = req.params.id
  miRuta.findByIdAndDelete(_id).then(function(miruta){
    if(!miruta) {
      return res.status(404).send({})
    }
    return res.send(miruta)
  }).catch(function(error) {
    res.status(505).send({ error })
  })
}

  module.exports = {
    getMisRutas,
    createMiRuta,
    deleteMiRuta
  }
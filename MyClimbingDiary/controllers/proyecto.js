const Proyecto = require('../models/proyectos.js')

const getProyectos = function(req, res) {
  Proyecto.find({ createdBy: req.user._id}).then(function(proyectos) {
    res.send(proyectos)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getProyecto = function(req, res) {
  // solo podemos traer el todo si es que es del usuario que hizo login
  const _id = req.params.id
  Proyecto.findOne({ _id, createdBy: req.user._id }).then(function(todo) {
    if(!todo){
      return res.status(404).send({ error: `Task with id ${_id} not found.`})
    }
    return res.send(todo)
  }).catch(function(error) {
    return res.status(500).send({ error: error })
  })
}

// const createProyecto = function(req, res) {
//   const proyecto = new Proyecto(req.body)
//       proyecto.save().then(function() {
//       return res.send(proyecto)
//       }).catch(function(error) {
//       return res.status(400).send(error)
//       })
// }

const createProyecto = function(req, res){
  // los ... son para copiar todo el req.body
  // modificar aqui
  const todo = new Proyecto({
    ...req.body,
    createdBy: req.user._id
  })
  todo.save().then(function() {
    return res.send(todo)
  }).catch(function(error) {
    return res.status(400).send({ error: error })
  })
}

  module.exports = {
    getProyecto,
    getProyectos,
    createProyecto
  }

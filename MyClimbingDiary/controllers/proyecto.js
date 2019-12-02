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
  Proyecto.findOne({ _id, createdBy: req.user._id }).then(function(proyecto) {
    if(!proyecto){
      return res.status(404).send({ error: `Task with id ${_id} not found.`})
    }
    return res.send(proyecto)
  }).catch(function(error) {
    return res.status(500).send({ error: error })
  })
}

const createProyecto = function(req, res){
  // los ... son para copiar todo el req.body
  // modificar aqui
  const proyecto = new Proyecto({
    ...req.body,
    createdBy: req.user._id
  })
  proyecto.save().then(function() {
    return res.send(proyecto)
  }).catch(function(error) {
    return res.status(400).send({ error: error })
  })
}

const deleteProyecto= function(req, res) {
  const _id = req.params.id
  Proyecto.findByIdAndDelete(_id).then(function(proyecto){
    if(!proyecto) {
      return res.status(404).send({})
    }
    return res.send(proyecto)
  }).catch(function(error) {
    res.status(505).send({ error })
  })
}

const updateProyecto = function(req, res) {
  // solo admitire hacer update de mi usuario que hizo login
  // quité la ruta de PATCH users/:id y la cambie por PATCH /users
  // const _id = req.params.id
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['nombre', 'grado', 'zona','pegues', 'fecha', 'numeroPegues','comentario']
  // revisa que los updates enviados sean permitidos, que no envie una key que no permitimos
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Proyecto.findByIdAndUpdate(_id, req.body ).then(function(proyecto) {
    if (!proyecto) {
      return res.status(404).send({})
    }
    return res.send(proyecto)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}


  module.exports = {
    getProyecto,
    getProyectos,
    createProyecto,
    deleteProyecto,
    updateProyecto
  }

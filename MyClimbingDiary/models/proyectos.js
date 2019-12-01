
const Mongoose = require('mongoose')
const validator = require('validator')

const proyectoSchema = Mongoose.Schema({

    nombre: String,
    grado: String,
    zona: String,
    pegues: [{
      numeroPegues: String,
      comentario: String,
      fecha: Date
    }],
    encadene: Date,
    createdBy: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
});

const Proyecto = Mongoose.model("Proyecto", proyectoSchema);

module.exports = Proyecto;


const Mongoose = require('mongoose');

const proyectoSchema = Mongoose.Schema({

    nombre: String,
    grado: String,
    zona: String,
    pegues: [{
      numeroPegues: String,
      comentario: String,
      fecha: Date
    }],
    encadene: Date
});

const Proyecto = Mongoose.model("Proyecto", proyectoSchema);

module.exports = Proyecto;

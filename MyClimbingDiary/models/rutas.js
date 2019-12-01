
const Mongoose = require('mongoose');

const rutaSchema = Mongoose.Schema({
  
    nombre: String,
    grado: String,
    zona: String
});

const Ruta = Mongoose.model("Ruta", rutaSchema);

module.exports = Ruta;


const Mongoose = require('mongoose')
const validator = require('validator')

const misrutasSchema = Mongoose.Schema({

    nombre: String,
    grado: String,
    zona: String,
    createdBy: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
});

const miRuta = Mongoose.model("miRuta", misrutasSchema);

module.exports = miRuta;

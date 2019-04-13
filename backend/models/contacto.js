const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ContactoSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    mail: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = mongoose.model('Contacto', ContactoSchema);
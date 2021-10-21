const mongoose = require('mongoose')

// Definimos el esquema -> numeracion, color y palo
const CartaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeracion:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    palo:{
        type: String,
        required: false
    },
},{collection:'Cartas'})

// Exportamos el modelo de Schema
module.exports = mongoose.model('Cartas',CartaSchema)
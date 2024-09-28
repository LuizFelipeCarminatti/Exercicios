const mongoose = require('mongoose')
const { Schema } = mongoose

const HomeSchema = new Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true },
    }, { id: true }
)

let Model = mongoose.model('usuarios', HomeSchema)

HomeSchema.path('_id')

module.exports = Model
const mongoose = require('mongoose')
const { Schema } = mongoose

const HomeShema = new Schema(
    {
        nome: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
    }, { id: true }
)

const Model = mongoose.model('usuarios', HomeShema)

HomeShema.path('_id')

module.exports = Model
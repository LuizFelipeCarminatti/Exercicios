const mongoose = require('mongoose')
const { Schema } = mongoose

const HomeSchema = new Schema({
    nome: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    /*slug: { type: String, required: true, trim: true, index: true, unique: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    active: { type: Boolean, required: true, default: true },
    tags: [{
        type: String,
        required: true
    }] 
    image: { type: String, required: true, trim: true } */
})

let Model = mongoose.model('Usuario', HomeSchema)

HomeSchema.path('_id')

exports = Model
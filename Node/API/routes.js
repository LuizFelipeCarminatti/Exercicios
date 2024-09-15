const express = require('express')
const route = express.Router()
const controllers = require('./src/controllers/controller')

route.get('/', controllers.formulario)
route.post('/', controllers.rotaUrl)
route.get('/usuario/:id/', controllers.paginaUsuario)

module.exports = route
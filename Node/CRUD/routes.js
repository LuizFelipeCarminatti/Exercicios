const express = require('express')
const route = express.Router()
const controllers = require('./src/controllers/controller')

route.get('/', controllers.getUsuarios) //read
route.post('/adicionarUsuario', controllers.adicionarUsuario) // create
route.delete('/usuario/excluir/:id', controllers.deleteUsuario) // delete

route.post('/usuario/editar/:id', controllers.putUpdateUser) // update
route.get('/usuario/editar/:id', controllers.getUpdateUser) //

module.exports = route
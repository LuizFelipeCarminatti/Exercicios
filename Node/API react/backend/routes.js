const express = require('express')
const route = express.Router()
const controllers = require('./src/controllers/controller')

route.post('/salvarUsuario', controllers.saveUsers)
route.get('/usuario/:id', controllers.searchUser)
route.delete('/usuario/excluir/:id', controllers.deleteUsuario)
route.put('/usuario/editar/:id', controllers.editarUsuario)

module.exports = route
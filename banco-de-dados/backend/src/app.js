const dotenv = require('dotenv')
dotenv.config()
require('./database')
const express = require('express')
const routes = require('./routes/homeRoutes.js')

class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
            this.app.use(express.urlencoded({ extended: true }))
            this.app.use(express.json())
    }

    routes(){
        this.app.use('/', routes)
    }
}

module.exports = new App().app

// npx sequelize migration:create --name=alunos -> Cria o modulo de alunos dentro da pasta database
// npx sequelize db:migrate -> Ex: executa o arquivo alunos da pasta database, criando a tabela alunos no MySQL workbench
const express = require('express')
const app = express()

const { createServer } = require('node:http')
const server = createServer(app)

server.listen(8080, () => {
    console.log('Executando...')
})
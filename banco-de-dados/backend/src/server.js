const app = require('./app.js')

let port = process.env.APP_PORT
app.listen(port, () => {
    console.log('Executando...')
})
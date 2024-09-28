require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION)
    .then(() => {
        app.emit('Executando')
    })
    .catch(error => console.error(error))

const cors = require('cors')
const port = process.env.PORT || 8080
const routes = require('./routes')
const path = require('path') 
const helmet = require('helmet')
const csurf = require('csurf')
const { checkCsurfError, csurfMiddleware } = require('./src/middlewares/middlewares')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const sessionOptions = session({
    secret: '8866d2e4-eb09-48bf-a52c-916d114115c9',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 1,
        httpOnly: true
    }
})

app.use(cors())
app.use(helmet())
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrcAttr: ["'unsafe-inline'"], // Apenas se necessário (melhor evitar)
            scriptSrcElem: [
                "'self'", // Permite scripts locais
                "'unsafe-inline'", // Apenas se necessário (melhor evitar)
                'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js', // CDN do axios
                'http://localhost:3000/assets/js/app.js' // Seu script local
            ]
        }
    }
}));
app.use(sessionOptions)
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/frontend', express.static(path.resolve(__dirname, 'build')))
app.use(csurf())
app.use(checkCsurfError)
app.use(csurfMiddleware)
app.use('/', routes)

app.on('Executando', () => {
    app.listen(port, () => {
        console.log(`Executando na porta ${port}`)
    })
})
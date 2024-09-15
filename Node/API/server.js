require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION)
    .then(() => {
        app.emit('Executando')
    })
    .catch(error => console.error(error))

const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csurf = require('csurf')
const port = process.env.PORT || 3000
const { middleware, checkCsurfError, csurfMiddleware } = require('./src/middlewares/middleware')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const sessionOptions = session({
    secret: '10c4c20c-0a1b-42af-b18c-cdac74ecf889',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 1,
        httpOnly: true
    }
})

app.use(helmet())
app.use(sessionOptions)
app.use(flash())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(csurf())
app.use(middleware)
app.use(checkCsurfError)
app.use(csurfMiddleware)
app.use(routes)

app.on('Executando', () => {
    app.listen(port, () => {
        console.log(`Executando na porta ${port}`)
    })
})
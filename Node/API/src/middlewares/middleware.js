const HomeModel = require('../models/HomeModel')

module.exports.registro = async (req, res, next) => {
    if (req.body.email) {
        const email = req.body.email
        const user = await HomeModel.findOne({ email })
        if (user) {
            console.log(`Usuário ${user.nome} registrado.`)
        }else {
            console.log('Erro')
        }
    }
    next()
}

module.exports.checkCsurfError = (err, req, res, next) => {
    if (err & err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSURF')
    }
    next()
}

module.exports.csurfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
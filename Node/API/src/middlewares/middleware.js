module.exports.middleware = (req, res, next) => {
    if (req.body.nome) {
        console.log(`Usuário ${req.body.nome} registrado.`)
    }
    next()
}

module.exports.checkCsurfError = (err, req, res, next) => {
    if (err & err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSURF')
    }
}

module.exports.csurfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
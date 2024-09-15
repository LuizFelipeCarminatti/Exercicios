module.exports.middleware = (req, res, next) => {
    if (req.body.nome) {
        console.log(`Usuário ${req.body.nome} registrado.`)
    }
    next()
}
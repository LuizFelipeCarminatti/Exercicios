const HomeModel = require('../models/HomeModel')

module.exports.adicionarUsuario = async (req, res, next) => {

    const { nome, email } = req.body
    
    const dados = new HomeModel({ nome, email })
    
    await dados.save()

    res.redirect('/')

}

module.exports.deleteUsuario = async (req, res, next) => {
    const { id } = req.params

    const user = await HomeModel.findByIdAndDelete(id)

    if (!user) {
        return res.status(404).send({ message: 'Usuário não encontrado!' })
    }
    
    return res.status(200).send({ message: 'Usuário removido com sucesso.' })
}

module.exports.getUsuarios = async (req, res, next) => {
    const users = await HomeModel.find()
    res.status(200).render('usuarios', { users })
}

module.exports.getUpdateUser = async (req, res, next) => {
    const { id } = req.params

    const user = await HomeModel.findById(id);
    
    return res.render('paginaUsuario', { user })
}

module.exports.putUpdateUser = async (req, res, next) => {
    const { id } = req.params
    
    const user = await HomeModel.findByIdAndUpdate(id, req.body, { new: true })
    
    if (!user) {
        return res.status(404).send({ message: 'Usuário não encontrado!' })
    }

    return res.redirect(`/`)
}

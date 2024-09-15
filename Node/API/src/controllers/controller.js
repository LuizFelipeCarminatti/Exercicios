const url = require('url')
const HomeModel = require('../models/HomeModel')

const model = async (req, res) => {
    const { nome, password, email } = req.body
    await HomeModel.create({
        nome: nome,
        password: password,
        email: email
    })
        .then(dados => console.log(dados))
        .catch(error => console.error(error))
}
model

module.exports.formulario = (req, res) => {
    req.flash('Formulário', 'Formulário carregado com sucesso!') // mensagem temporaria
    res.status(200).render('formulario')
}

module.exports.rotaUrl = async (req, res) => {
    const { nome, email, password } = req.body
    //const usuarioNome = nome.replace(/\s+/g, '-')
    const user = await HomeModel.findOne({ email, password })
    /* const newUrl = url.format({
        pathname: '/usuario',
        query: { usuarioNome }
    }) */
    const newUrl = `/usuario/${user._id}/`
    res.redirect(newUrl)
}

module.exports.paginaUsuario = async (req, res) => {
    try {
        const user = await HomeModel.findById(req.params.id)
        res.status(200).render('usuario', { user })
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }catch(error){
        res.status(500).json({ message: 'Erro ao buscar usuário!' })
    }
}
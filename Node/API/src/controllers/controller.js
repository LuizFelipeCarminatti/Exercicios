const url = require('url')
const HomeModel = require('../models/HomeModel')

module.exports.salvarUsuario = async (req, res) => {

    const { nome, password, email } = req.body

    const account = new HomeModel({ nome, email, password })
    
    const saveAccountResponse = await account.save()
    
    res.redirect(`/usuario/${saveAccountResponse.id}`)
}

module.exports.formulario = (req, res) => {
    req.flash('Formulário', 'Formulário carregado com sucesso!') // mensagem temporaria
    res.status(200).render('formulario')
}

//const usuarioNome = nome.replace(/\s+/g, '-')
/* const newUrl = url.format({
    pathname: '/usuario',
    query: { usuarioNome }
}) */

module.exports.paginaUsuario = async (req, res) => {
    try {
        const user = await HomeModel.findById(req.params.id)
        const arrayUsuario = [user]
        res.status(200).render('usuario', { arrayUsuario })
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }catch(error){
        res.status(500).json({ message: 'Erro ao buscar usuário!' })
    }
}
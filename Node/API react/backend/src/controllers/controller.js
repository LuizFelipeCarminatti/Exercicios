const HomeModel = require('../models/HomeModel')

module.exports.saveUsers = async (req, res, next) => {
    const { nome, password, email } = req.body

    const account = new HomeModel({ nome, password, email })

    const saveAccountResponse = await account.save()
    
    return res.json(saveAccountResponse)
}

module.exports.searchUser = async (req, res) => {
    try {
        let user = await HomeModel.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({ message: 'Erro ao buscar usuário!' })
    }
}

module.exports.deleteUsuario = async (req, res, next) => {
    const { id } = req.params

    await HomeModel.findByIdAndDelete(id)

    res.redirect('http://localhost:3000')
}

module.exports.editarUsuario = async (req, res, next) => {
    const { id } = req.params

    const { nome, email } = req.body

    await HomeModel.findByIdAndUpdate(id, { nome, email })
}
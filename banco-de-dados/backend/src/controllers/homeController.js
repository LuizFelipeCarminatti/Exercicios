const Aluno = require('../models/Aluno')

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Luiz Felipe Carminatti',
            email: 'felipecarminatti28@gmail.com'
        })
        res.json(novoAluno)
    }
}

module.exports = new HomeController()
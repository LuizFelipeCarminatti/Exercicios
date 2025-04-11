class HomeController {
    async index(req, res) {
        res.json('Olá, Mundo!')
    }
}

module.exports = new HomeController()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const fs = require('fs')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/salvar', (req, res) => {
    const arquivo = './nomes.json'
    let conteudo = []
    try {
        fs.readFile(arquivo, 'utf-8', (err, dados) => {
            try {
                conteudo = JSON.parse(dados)
            } catch (error) {
                console.error(error)
            }

            conteudo.push(req.body)

            const consteudoAtualizado = JSON.stringify(conteudo, null, 2)

            fs.writeFile(__dirname + '/nomes.json', consteudoAtualizado, err => {
                console.log(err || 'Arquivo salvo')
            })
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({ mensagem: '  Erro ao salvar usuario', error: error })
    }
    res.send(req.body)
})

app.listen(port, () => {
    console.log('Executando...')
})
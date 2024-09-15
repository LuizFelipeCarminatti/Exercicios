const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'dados.json')
const escrever = require('./escrever')
const ler = require('./ler')

const pessoas = [
    { nome: "Luiz" },
    { nome: "Felipe" },
    { nome: "Carminatti" },
]

const json = JSON.stringify(pessoas, '', 2)

escrever(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    return dados
}

lerArquivo(caminhoArquivo)
    .then(dados => JSON.parse(dados))
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
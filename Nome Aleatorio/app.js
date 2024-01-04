let nomes = [
    { nome: 'Sofia', src: 'Sofia.jpg' },
    { nome: 'Camila', src: 'Camila.jpg' },
    { nome: 'Daniela', src: 'Daniela.jpg' },
    { nome: 'Lucas', src: 'Lucas.jpg' },
    { nome: 'Gabriel', src: 'Gabriel.jpg' },
    { nome: 'Felipe', src: 'Felipe.jpg' }
]

let conteudo = document.getElementById('conteudo')
document.getElementById('gerador').onclick = function () {
    let aleatorio = Math.floor(Math.random() * nomes.length)
    let pessoa = nomes[aleatorio]
    conteudo.innerHTML = `
        <img src="${pessoa.src}">
        <p>${pessoa.nome}</p>
    `
}
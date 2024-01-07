let codigo = document.getElementById('codigo')
let opcao = document.getElementById('opcao')
let qtd = document.getElementById('qtd')
let tipo = document.getElementById('tipo')

let nomes = ['Sofia', 'Isabella', 'Camila', 'Mariana', 'Daniela', 'Gabriela', 'Renata', 'Paula', 'Amanda', 'Carolina', 'Rafaela', 'Adriana', 'Michelle', 'Juliana', 'Julia', 'Ana', 'Alessandra', 'Nicolás', 'Diego', 'Samuel', 'Daniel', 'Lucas', 'Gabriel', 'David', 'Emmanuel', 'Leonardo', 'Felipe', 'Carlos', 'Fernando', 'Luciano', 'Francisco', 'Rafael', 'Alex', 'Jesús', 'Camilo', 'Elías']

function gerador() {
    let arrayNovo = ''
    if (opcao.value == 'array') {
        if (tipo.value == 'numero') {
            for (let i = 0; i < qtd.value; i++) {
                let aleatorio = Math.random() * (0 + 100) + 0
                arrayNovo += `${Math.floor(aleatorio)}, `
            }
            codigo.innerHTML = `let valores = [${arrayNovo}]`
        } else if (tipo.value == 'nome') {
            let aleatorio = ' '
            for (let i = 0; i < qtd.value; i++) {
                aleatorio = Math.floor(Math.random() * nomes.length)
                arrayNovo += `${nomes[aleatorio]},`
                codigo.innerHTML = `let nomes = [${arrayNovo}]`
            }
        }
    } else if (opcao.value == 'objeto') {
        for (let i = 0; i < qtd.value; i++) {
            let aleatorio = Math.floor(Math.random() * nomes.length)
            arrayNovo += `{nome: ${nomes[aleatorio]}},<br> `
        }
        codigo.innerHTML = `let nomes = [<br>${arrayNovo}}]`
    }
}

let mercadorias = [
    { nome: 'arroz', preco: 5.99},
    { nome: 'feijao', preco: 8.48},
    { nome: 'requeijao', preco: 6.98},
    { nome: 'lentilha', preco: 8.49},
    { nome: 'oleo soja', preco: 5.20},
    { nome: 'cafe', preco: 11.90},
    { nome: 'refrigerante', preco: 8.00},
    { nome: 'margarina', preco: 10.90},
    { nome: 'macarrao', preco:  4.59},
    { nome: 'acucar', preco: 4.99},
    { nome: 'ovos', preco: 16.00},
    { nome: 'alface', preco: 4.50},
    { nome: 'tomate', preco: 11.90},
    { nome: 'cebola', preco: 4.69},
    { nome: 'banana', preco: 5.90},
]

let comprado = document.getElementById('comprado')
let nome = document.getElementById('nome')
let valor = document.getElementById('valor')
let alimentos = document.getElementById('alimentos')
let valorProduto = document.getElementById('valorProduto')
let btnAdd = document.getElementById('btnAdd')
let btnComprar = document.getElementById('btnComprar')
let finalizarCompra = document.getElementById('finalizarCompra')

mercadorias.forEach(produto => {
    let ul = document.createElement('ul')
    alimentos.innerHTML += `
        <li style="list-style: none;">${produto.nome}: ${produto.preco}
    `
    alimentos.appendChild(ul)
})

let total = 0
btnAdd.addEventListener('click', function () {
    total += Number(valor.value)
    valorProduto.innerHTML = `R$${total.toFixed(2)}`
    comprado.innerHTML += `${nome.value}<br>`
})

btnComprar.addEventListener('click', function () {
    finalizarCompra.innerHTML = 'Comprado'
})
let mercadorias = [
    { id: 1, nome: 'arroz', preco: 5.99},
    { id: 2, nome: 'feijao', preco: 8.48},
    { id: 3, nome: 'requeijao', preco: 6.98},
    { id: 4, nome: 'lentilha', preco: 8.49},
    { id: 5, nome: 'oleo soja', preco: 5.20},
    { id: 6, nome: 'cafe', preco: 11.90},
    { id: 7, nome: 'refrigerante', preco: 8.00},
    { id: 8, nome: 'margarina', preco: 10.90},
    { id: 9, nome: 'macarrao', preco:  4.59},
    { id: 10, nome: 'acucar', preco: 4.99},
    { id: 11, nome: 'ovos', preco: 16.00},
    { id: 12, nome: 'alface', preco: 4.50},
    { id: 13, nome: 'tomate', preco: 11.90},
    { id: 14, nome: 'cebola', preco: 4.69},
    { id: 15, nome: 'banana', preco: 5.90},
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
    ul.innerHTML += `
        <li style="list-style: none;">${produto.id} ${produto.nome}: ${produto.preco}
    `
    alimentos.appendChild(ul)
})

let total = 0
btnAdd.addEventListener('click', function () {
    mercadorias.forEach(mercadoria => {
        if (nome.value === mercadoria.nome) {
            total += Number(mercadoria.preco)    
        }
    });
    /* total += Number(valor.value) */
    valorProduto.innerHTML = `R$${total.toFixed(2)}`
    comprado.innerHTML = `${nome.value}<br>` 
})

btnComprar.addEventListener('click', function () {
    finalizarCompra.innerHTML = 'Comprado'
})
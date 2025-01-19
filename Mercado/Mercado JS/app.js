let mercadorias = [
    { id: 1, nome: 'Arroz', preco: 5.99 },
    { id: 2, nome: 'Feijao', preco: 8.48 },
    { id: 3, nome: 'Requeijao', preco: 6.98 },
    { id: 4, nome: 'Lentilha', preco: 8.49 },
    { id: 5, nome: 'Oleo soja', preco: 5.20 },
    { id: 6, nome: 'Cafe', preco: 11.90 },
    { id: 7, nome: 'Refrigerante', preco: 8.00 },
    { id: 8, nome: 'Margarina', preco: 10.90 },
    { id: 9, nome: 'Macarrao', preco: 4.59 },
    { id: 10, nome: 'Acucar', preco: 4.99 },
    { id: 11, nome: 'Ovos', preco: 16.00 },
    { id: 12, nome: 'Alface', preco: 4.50 },
    { id: 13, nome: 'Tomate', preco: 11.90 },
    { id: 14, nome: 'Cebola', preco: 4.69 },
    { id: 15, nome: 'Banana', preco: 5.90 },
]

let comprado = document.getElementById('comprado')
let nome = document.getElementById('nome')
let valor = document.getElementById('valor')
let alimentos = document.getElementById('alimentos')
let valorProduto = document.getElementById('valorProduto')
let btnAdd = document.getElementById('btnAdd')
let btnComprar = document.getElementById('btnComprar')
let finalizarCompra = document.getElementById('finalizarCompra')
let parcela = document.getElementById('parcela')
let parcelas = document.getElementById('parcelas')
let parcelar = document.getElementById('parcelar')

mercadorias.forEach(produto => {
    let ul = document.createElement('ul')
    ul.innerHTML += `
        <li style="list-style: none;"><strong>${produto.nome}:</strong> R$${produto.preco}</li>
    `
    alimentos.appendChild(ul)
})

let total = 0
let setProdutos = new Set()
let setNomes = []
btnAdd.addEventListener('click', function () {

    mercadorias.forEach(mercadoria => {
        if (nome.value === mercadoria.nome) {
            total += Number(mercadoria.preco)
            setProdutos.add(mercadoria.nome)
        }
    });
    valorProduto.innerHTML = `R$${total.toFixed(2)}`
    
    
    setNomes = [...setProdutos]
    
    let ul = document.createElement('ul')
    setNomes.map(produto => {
        let li = document.createElement('li')
        li.textContent = produto
        ul.appendChild(li)
    })
    comprado.innerHTML = ''
    comprado.appendChild(ul)
    
    finalizarCompra.innerHTML = ' '
})

parcelar.addEventListener('click', function () {
    let res = total / parcelas.value
    parcela.innerHTML = `${parcelas.value}x de R$${res.toFixed(2).replace('.', ',')}`
})

btnComprar.addEventListener('click', function () {
    if (total > 0) {
        finalizarCompra.innerHTML = 'Comprado'
    } else {
        return
    }
})
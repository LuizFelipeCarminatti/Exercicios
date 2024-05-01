/* let btns = document.querySelectorAll('#btn')
let res = document.getElementById('res')
let soma = 0
btns.forEach(btn => {
    btn.onclick = function () {
        soma += Number(btn.firstChild.textContent)
        res.innerHTML = `R$${soma.toFixed(2)}`
    }
}) */

let precoTotal = document.querySelector('.precoTotal')
let produto = document.querySelector('#produto')
let qtd = document.getElementById('qtdItem')
let soma = 0
let qtdItem = 0
function adicionar() {
    soma += Number(produto.firstElementChild.textContent)
    qtdItem++
    qtd.innerHTML = qtdItem
    precoTotal.innerHTML = `${soma.toFixed(2)}`
}


function retirar() {
    if (soma < 2 && qtdItem < 2) {
        soma = 0
        qtdItem = 0
    }else{
        soma -= Number(produto.firstElementChild.textContent)
        qtdItem--
        qtd.innerHTML = qtdItem
        precoTotal.innerHTML = `${soma.toFixed(2)}`
    }
}
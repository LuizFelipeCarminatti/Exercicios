function converter(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`
}


let getProdutos = localStorage.getItem('DATABASE')
let carrinho = JSON.parse(getProdutos)

function total() {
    let total = 0
    let precoTotal = document.querySelector('#precoTotal')

    carrinho.map(prod => {
        total += Number(prod.preco)
    })

    precoTotal.innerHTML = `${converter(total)}`
}
total()

function cart() {
    let mainCart = document.querySelector('.mainCart')

    if (!getProdutos) {
        return
    }

    let ul = document.createElement('ul')

    carrinho.map(prod => {
        ul.innerHTML += `
            <li>
                <div class="produto">
                    <img src="${prod.src}">
                    <div>
                        <p class="nome">${prod.nome}</p>
                        <p class="preco">${converter(Number(prod.preco))}</p>
                    </div>
                </div>
                <div class="descricao">
                    <p>${prod.descricao}</p>
                </div>
            </li>
        `
    })

    mainCart.appendChild(ul)
}

cart()
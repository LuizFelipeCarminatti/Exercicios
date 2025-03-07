const acessorios1 = [
    { src: './img/item1.jpg', nome: 'Camisa básica', preco: 60.90, descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { src: './img/item2.jpg', nome: 'Tênis cinza tradicional', preco: 140.95, descricao: 'Etiam posuere erat a velit congue tincidunt.' },
    { src: './img/item3.jpg', nome: 'Tênis Nike vermelho', preco: 230.60, descricao: 'Morbi eu est non odio scelerisque interdum non non nibh.' },
    { src: './img/item11.jpg', nome: 'Casaco Social Masculino', preco: 280.90, descricao: 'Fusce at dolor id enim aliquet porta.' },
]

const acessorios2 = [
    { src: './img/item4.jpg', nome: 'Tênis Nike', preco: 180.40, descricao: 'Quisque sollicitudin, nulla eget convallis gravida, sem urna ultricies dui, vel vehicula ex lorem non lacus.' },
    { src: './img/item6.jpg', nome: 'Calça jeans', preco: 120.10, descricao: 'Nunc hendrerit dui nec turpis molestie, ac hendrerit justo placerat.' },
    { src: './img/item7.jpg', nome: 'Pala de lã', preco: 80.50, descricao: 'Maecenas purus quam, laoreet a fermentum sed, auctor et arcu.' },
]

const acessorios3 = [
    { src: './img/item9.jpg', nome: 'Jaqueta Marron', preco: 200.80, descricao: 'Donec porttitor laoreet lacinia. Aliquam consectetur, nisl eget lacinia euismod, est diam aliquam mi, et lacinia est nibh ut turpis.' },
    { src: './img/item8.jpg', nome: 'Camisa social manga comprida', preco: 90.60, descricao: 'Nam volutpat ultrices placerat. Sed nec sodales mauris, ac cursus lacus.' },
    { src: './img/item5.jpg', nome: 'Camisa Branca', preco: 50.20, descricao: 'Phasellus purus lacus, luctus quis magna pretium, varius ultrices ipsum.' },
    { src: './img/item10.jpg', nome: 'Blusa Feminina', preco: 160.50, descricao: 'Maecenas consequat, urna quis egestas congue, risus magna pellentesque magna, id scelerisque purus quam a sem.' },
]

function converter(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`
}

function render() {
    let ul1 = document.createElement('ul')
    let ul2 = document.createElement('ul')
    let ul3 = document.createElement('ul')
    let main = document.querySelector('.main')
    let div = document.createElement('div')
    div.className = 'principal'
    acessorios1.map(acessorio => {
        ul1.innerHTML += `
            <button onclick="adicionarProduto('${acessorio.src}', '${acessorio.nome}', '${acessorio.preco}', '${acessorio.descricao}')">
                <li>
                    <img src="${acessorio.src}">
                    <div>
                        <p class="nome">${acessorio.nome}</p>
                        <p class='preco'>${converter(acessorio.preco)}</p>
                    </div>
                </li>
            </button>
        `
    })
    acessorios2.map(acessorio => {
        ul2.innerHTML += `
            <button onclick="adicionarProduto('${acessorio.src}', '${acessorio.nome}', '${acessorio.preco}')">
                <li>
                    <img src="${acessorio.src}">
                    <div>
                        <p class="nome">${acessorio.nome}</p>
                        <p class='preco'>${converter(acessorio.preco)}</p>
                    </div>
                </li>
            </button>
        `
    })
    acessorios3.map(acessorio => {
        ul3.innerHTML += `
            <button onclick="adicionarProduto('${acessorio.src}', '${acessorio.nome}', '${acessorio.preco}')">
                <li>
                    <img src="${acessorio.src}">
                    <div>
                        <p class="nome">${acessorio.nome}</p>
                        <p class='preco'>${converter(acessorio.preco)}</p>
                    </div>
                </li>
            </button>
        `
    })

    div.appendChild(ul1)
    div.appendChild(ul2)
    div.appendChild(ul3)
    main.appendChild(div)
}

render()

let cont = 0
let carrinhoProdutos = JSON.parse(localStorage.getItem('DATABASE')) || []
function adicionarProduto(src, nome, preco, descricao) {
    let quantidade = document.querySelector('.quantidade')
    cont++
    quantidade.innerHTML = cont 
    quantidade.style.display = 'block'

    carrinhoProdutos.push({ src: src, nome: nome, preco: preco, descricao: descricao })

    localStorage.setItem('DATABASE', JSON.stringify(carrinhoProdutos))
}
let escolhido = []
function escolher() {
    let numerosEscolhidos = document.getElementById('numerosEscolhidos')
    let valor = document.getElementById('valor').value
    if (valor > 60) {
        alert('Não pode um número maior que 60')
    } else if (valor < 1) {
        alert('Não pode um número menor que 1')
    } else {
        escolhido.push(Number(valor))
        numerosEscolhidos.innerHTML += `${valor}, `
    }
}

let sorteado = document.getElementById('sorteados')
let principal = []
let numeros = []
function sortear() {
    sorteado.innerHTML = ' '

    for (let i = 0; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * (60 - 1) + 1);
        while (numeros.includes(aleatorio)) {
            aleatorio = Math.floor(Math.random() * (60 - 1) + 1);
        }
        numeros.push(aleatorio);
    }

    if (principal.includes(numeros)) {
        sortear()
    }else{
        principal.push(numeros)
    }

    numeros.sort((a, b) => a - b)
    let ul = document.createElement('ul')
    numeros.map(num => {
        ul.innerHTML += `<li>${num}, </li>`
        sorteado.appendChild(ul)
    })
    numeros = []
}

function verificar() {
    let ultimoIndice = principal[principal.length - 1]
    let conter = 0
    ultimoIndice.filter(numero => {
        if (!escolhido.includes(numero)) {
            conter++
        }
    })
    if (conter > 0) {
        sorteado.innerHTML = 'Não foi dessa vez'
    } else {
        sorteado.innerHTML = 'Parabéns'
    }
}
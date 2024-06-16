let escolhido = []
function escolher() {
    let numerosEscolhidos = document.getElementById('numerosEscolhidos')
    let valor = document.getElementById('valor').value
    if (valor > 60) {
        alert('Não pode um número maior que 60')
    }else if(valor < 1){
        alert('Não pode um número menor que 1')
    }else{
        escolhido.push(Number(valor))
        numerosEscolhidos.innerHTML += `${valor}, `
    }
}

let numeros = []
let sorteado = document.getElementById('sorteados')
function sortear() {
    sorteado.innerHTML = ' '
    for (let i = 0; i < 6; i++) {
        var aleatorio = Math.floor(Math.random() * (60 - 1) + 1)
        if (numeros.includes(aleatorio)) {
            sortear()
        }else{
            numeros.push(aleatorio)
        }
    }
    numeros.sort((a, b) => a - b)
    let ul = document.createElement('ul')
    numeros.map(num => {
        ul.innerHTML += `
            <li>${num}, </li>
        `
        sorteado.appendChild(ul)
    })
}


/* function verificar() {
    const numerosEncontrados = numeros.filter((numero) =>
        escolhido.includes(numero)
    );
    if (numerosEncontrados.length > 0) {
        sorteado.innerHTML = "Parabéns";
    } else {
        sorteado.innerHTML = "Não foi dessa vez";
    }
}  */

function verificar() {
    let conter = 0
    numeros.filter(numero => {
        if(!escolhido.includes(numero)){
            conter++
        }
    })
    if(conter > 0) {
        sorteado.innerHTML = 'Não foi dessa vez'
    }else{   
        sorteado.innerHTML = 'Parabéns'
    }


  }
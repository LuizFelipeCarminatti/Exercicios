let escolhido = []
function escolher() {
    let numerosEscolhidos = document.getElementById('numerosEscolhidos')
    let valor = document.getElementById('valor').value
    numerosEscolhidos.innerHTML += `${valor}, `
    escolhido.push(Number(valor))


}

let numeros = []
let sorteado = document.getElementById('sorteados')
function sortear() {
    sorteado.innerHTML = ''
    for (let i = 0; i < 6; i++) {
        var aleatorio = Math.floor(Math.random() * (1 + 60) + 1)
        sorteado.innerHTML += `${aleatorio}, `
        if (numeros.includes(aleatorio)) {
            return
        }else{
            numeros.push(aleatorio)
        }
    }
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
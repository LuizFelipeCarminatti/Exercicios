const display = document.querySelector('.display')

function limpar() {
    display.innerHTML = 0
}

function calcular() {
    let resultado = document.querySelector('.display').innerHTML
    if(resultado) display.innerHTML = eval(resultado)
}

function apagar() {
    let resultado = document.querySelector('.display').innerHTML
    display.innerHTML = resultado.substring(0, resultado.length -1)
}


function addDigito(e) {

    if(e === '.' && display.innerHTML.includes('.')){
        return
    }

    if (display.innerHTML === '0') {
        display.innerHTML = ''
    }

    display.innerHTML += e
}
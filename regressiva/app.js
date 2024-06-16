let numero = document.getElementById('numero')
let incrementar = document.getElementById('incrementar')
let decrementar = document.getElementById('decrementar')
let passo = document.getElementById('passo')
let contador = document.getElementById('contador')
let linhaDeChegada = document.getElementById('linhaDeChegada')

incrementar.onclick = function () {
    contador.innerHTML = ' '
    for (let i = 0; i <= numero.value; i += Number(passo.value) || 1) {
        contador.innerHTML += `${i} 👉🏻`
    }
    linhaDeChegada.innerHTML = '🏁'
}

decrementar.onclick = function () {
    contador.innerHTML = ' '
    for (let i = numero.value; i >= 0; i -= Number(passo.value) || 1) {
        contador.innerHTML += `${i} 👉🏻`
    }
    linhaDeChegada.innerHTML = '🏁'
}
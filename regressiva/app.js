let numero = document.getElementById('numero')
let clicar = document.getElementById('click')
let contador = document.getElementById('contador')
let linhaDeChegada = document.getElementById('linhaDeChegada')

clicar.onclick = function () {
    contador.innerHTML = ' '
    for (let i = 1; i <= numero.value; i++) {
        contador.innerHTML += `${i} 👉🏻`
    }
    linhaDeChegada.innerHTML = '🏁'
}
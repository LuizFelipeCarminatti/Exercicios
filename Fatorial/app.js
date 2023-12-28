function verificar() {
    let valor = document.getElementById('valor').value
    let res = document.getElementById('res')
    let sequencia = document.getElementById('sequencia')
    let total = 1
    for (let i = 1; i <= valor; i++) {
        total *= i
        sequencia.innerHTML += ` ${i}`
    }
    res.innerHTML = total
}
function verificar() {
    let valor = document.getElementById('valor').value
    let res = document.getElementById('res')
    let total = 1
    for (let i = 1; i <= valor; i++) {
        total *= i
    }
    res.innerHTML = `Fatorial de ${valor} é ${total}`
}
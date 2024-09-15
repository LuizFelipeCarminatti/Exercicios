let render = document.getElementById('render')

function Calculadora(valor1, valor2) {
    this.valor1 = valor1
    this.valor2 = valor2
}

Calculadora.prototype.somar = function () {
    return Number(this.valor1) + Number(this.valor2)
}

function calcular() {
    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value
    let calculadora = new Calculadora(valor1, valor2)

    let res = calculadora.somar()
    render.innerHTML = res
}
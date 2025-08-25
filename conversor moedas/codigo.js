let real = document.getElementById('brl') 
let dolar = document.getElementById('us') 
let opcao = ''

real.onclick = function () {
    opcao = 'real'
}

dolar.onclick = function () {
    opcao = 'dolar'
}

function conversor() {
    let valor = document.getElementById('valor')
    let res = document.getElementById('dollar') 
    

    if (opcao === 'real') {
        let dollar = Number(valor.value) * 5.66
        res.innerHTML = `$${dollar.toFixed(2)}`
    }else if (opcao === 'dolar') {
        let reais = Number(valor.value) / 5.66
        res.innerHTML = `R$${reais.toFixed(2)}`
    }

}
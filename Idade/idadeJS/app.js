function calcular() {
    let anoNasc = document.getElementById('anoNasc').value
    let mesNasc = document.getElementById('mesNasc').value
    let diaNasc = document.getElementById('diaNasc').value
    let render = document.getElementById('render')
    let date = new Date()
    let anoAtual = date.getFullYear()
    let mesAtual = date.getMonth()
    let diaDoMes = date.getDate()

    let anoIdade = anoNasc - anoAtual

    let totalDias = 0

    let data = new Date(anoAtual, mesNasc, 0)
    let diasTotal = data.getDate()

    let qtdDias = (diasTotal - diaNasc)

    if (anoAtual % 4 === 0 && !anoAtual % 100 === 0 || anoAtual % 400 === 0) {
        totalDias = diaDoMes + qtdDias + 1
    }else{
        totalDias = diaDoMes + qtdDias
    }
    let totalMes = qtdMes(mesAtual + 1, parseInt(mesNasc))
    render.innerHTML = `Sua idade é ${Math.abs(anoIdade)} anos, ${Math.abs(totalMes)} meses e ${totalDias} dias.`
}

function qtdMes(mesAtual, mesNasc) {
    let qtd = []
    if (mesAtual < mesNasc) [mesAtual, mesNasc] = [mesNasc, mesAtual]
    for (let i = mesNasc + 1; i < mesAtual; i++) {
        qtd.push(i)
    }
    return qtd.length
}
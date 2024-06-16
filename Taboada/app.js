let res = document.getElementById('res')
let valor = document.getElementById('valor')
contagem.addEventListener('input', function () {
    let contagem = document.getElementById('contagem').value
    let ul = document.createElement('ul')
    if (valor.value == '') {
        return res.innerHTML = ''
    }
    res.innerHTML = ''
    for (let i = 0; i <= contagem; i++) {
        let item = document.createElement('li')
        item.textContent = `${i} x ${valor.value} = ${i * valor.value}`
        ul.appendChild(item)
    }
    res.appendChild(ul)
})
let res = document.getElementById('res')
let valor = document.getElementById('valor')
valor.addEventListener('input', function () {
    let ul = document.createElement('ul')
    if (valor.value == '') {
        return res.innerHTML = ''
    }
    res.innerHTML = ''
    ul.innerHTML = `
        <li>1 x ${valor.value} = ${1 * valor.value}</li>
        <li>2 x ${valor.value} = ${2 * valor.value}</li>
        <li>3 x ${valor.value} = ${3 * valor.value}</li>
        <li>4 x ${valor.value} = ${4 * valor.value}</li>
        <li>5 x ${valor.value} = ${5 * valor.value}</li>
        <li>6 x ${valor.value} = ${6 * valor.value}</li>
        <li>7 x ${valor.value} = ${7 * valor.value}</li>
        <li>8 x ${valor.value} = ${8 * valor.value}</li>
        <li>9 x ${valor.value} = ${9 * valor.value}</li>
        <li>10 x ${valor.value} = ${10 * valor.value}</li>
    `
    res.appendChild(ul)
})
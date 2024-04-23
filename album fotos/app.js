const btnVerao = document.querySelector('[clima-verao]')
const btnInverno = document.querySelector('[clima-inverno]')
const btnTodos = document.querySelector('[climas-todos]')

const imgs = document.querySelectorAll('img')
const btns = document.querySelectorAll('button')


btnVerao.onclick = function (e) {
    btns.forEach(btn => {
        btn.classList.remove('corBtn')
    })
    e.target.classList.add('corBtn')
    imgs.forEach(img => {
        if (img.classList.contains('verao')) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })
}

btnInverno.onclick = function (e) {
    btns.forEach(btn => {
        btn.classList.remove('corBtn')
    })
    e.target.classList.add('corBtn')
    imgs.forEach(img => {
        if (img.classList.contains('inverno')) {
            img.style.display = 'block'
        } else {
            img.style.display = 'none'
        }
    })
}

btnTodos.onclick = function (e) {
    btns.forEach(btn => {
        btn.classList.remove('corBtn')
    })
    e.target.classList.add('corBtn')
    imgs.forEach(img => {
        if (img.classList.contains('todas')) {
            img.style.display = 'block'
        }
    })
}
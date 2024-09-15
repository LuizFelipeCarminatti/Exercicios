let j1 = document.querySelector('.j1')
let j2 = document.querySelector('.j2')

let pontuacaoJ1 = 0
let pontuacaoJ2 = 0

let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let q3 = document.getElementById('q3')
let q4 = document.getElementById('q4')
let q5 = document.getElementById('q5')
let q6 = document.getElementById('q6')
let q7 = document.getElementById('q7')
let q8 = document.getElementById('q8')
let q9 = document.getElementById('q9')

function letras(texto) {
    let regex = /[^a-zA-Z]/g
    return texto.replace(regex, '')
}

function iniciar() {
    let nome = document.querySelector('.nome')
    let nome1 = document.querySelector('.nome1')
    let jogador1 = prompt('Digita seu nome: ')
    let jogador2 = prompt('Digita seu nome: ')
    let apenasLetra1 = letras(jogador1)
    let apenasLetra2 = letras(jogador2)
    nome.innerHTML = apenasLetra1
    nome1.innerHTML = apenasLetra2
}

function reiniciar() {
    pontuacaoJ1 = 0
    j1.innerHTML = pontuacaoJ1
    pontuacaoJ2 = 0
    j2.innerHTML = pontuacaoJ2
}

function jogoVelha() {
    if (q1.value != 'x' && q1.value != 'o' && q1.value != '') {
        alert('Marcador Inválido!')
        q1.value = ''
    }else if (q2.value != 'x' && q2.value != 'o' && q2.value != '') {
        alert('Marcador Inválido!')
        q2.value = ''
    }else if (q3.value != 'x' && q3.value != 'o' && q3.value != '') {
        alert('Marcador Inválido!')
        q3.value = ''
    }else if (q4.value != 'x' && q4.value != 'o' && q4.value != '') {
        alert('Marcador Inválido!')
        q4.value = ''
    }else if (q5.value != 'x' && q5.value != 'o' && q5.value != '') {
        alert('Marcador Inválido!')
        q5.value = ''
    }else if (q6.value != 'x' && q6.value != 'o' && q6.value != '') {
        alert('Marcador Inválido!')
        q6.value = ''
    }else if (q7.value != 'x' && q7.value != 'o' && q7.value != '') {
        alert('Marcador Inválido!')
        q7.value = ''
    }else if (q8.value != 'x' && q8.value != 'o' && q8.value != '') {
        alert('Marcador Inválido!')
        q8.value = ''
    }else if (q9.value != 'x' && q9.value != 'o' && q9.value != '') {
        alert('Marcador Inválido!')
        q9.value = ''
    }else {
        if (q1.value == 'x' && q5.value == 'x' && q9.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''
        } else if (q1.value == 'o' && q5.value == 'o' && q9.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q7.value == 'x' && q5.value == 'x' && q3.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q7.value == 'o' && q5.value == 'o' && q3.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q1.value == 'x' && q2.value == 'x' && q3.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q1.value == 'o' && q2.value == 'o' && q3.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q4.value == 'x' && q5.value == 'x' && q6.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q4.value == 'o' && q5.value == 'o' && q6.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q7.value == 'x' && q8.value == 'x' && q9.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q7.value == 'o' && q8.value == 'o' && q9.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q3.value == 'x' && q6.value == 'x' && q9.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q3.value == 'o' && q6.value == 'o' && q9.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q2.value == 'x' && q5.value == 'x' && q8.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q2.value == 'o' && q5.value == 'o' && q8.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q1.value == 'x' && q4.value == 'x' && q7.value == 'x') {
            alert('Vencedor')
            pontuacaoJ1++
            j1.innerHTML = pontuacaoJ1
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        } else if (q1.value == 'o' && q4.value == 'o' && q7.value == 'o') {
            alert('Vencedor')
            pontuacaoJ2++
            j2.innerHTML = pontuacaoJ2
            q1.value = ''
            q2.value = ''
            q3.value = ''
            q4.value = ''
            q5.value = ''
            q6.value = ''
            q7.value = ''
            q8.value = ''
            q9.value = ''

        }
    }
}
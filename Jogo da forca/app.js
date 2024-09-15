let palavraEscolhida = document.getElementById('palavra')
let jogo = document.getElementById('jogo')

function escolha() {
    let qtd = palavraEscolhida.value.length
    let div = document.createElement('div')
    for (let i = 0; i < qtd; i++) {
        div.innerHTML += `
            <input type="text" class="letra" maxlength="1"> 
        `
        jogo.appendChild(div)
    }
}
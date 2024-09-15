let senha = document.querySelector('.senha')

let maiuscula = document.getElementById('maiuscula')
let minuscula = document.getElementById('minuscula')
let numero = document.getElementById('numero')
let simbolos = document.getElementById('simbolos')

let range = () => Math.floor(Math.random() * (min - max) + max)
function maiusculaFunction() {
    let resMaiuscula = String.fromCharCode(range(65, 90))
    return resMaiuscula
}
function minusculaFunction(){    
    let resMinuscula = String.fromCharCode(range(97, 122))
    return resMinuscula        
}
function numeroFunction(){    
    let resNumero = String.fromCharCode(range(48, 57))
    return resNumero
}
function simbolosFunction(){
    let resSimbolos = String.fromCharCode(range(33, 47))
    return resSimbolos
}

function gerarSenha() {
    let qtd = document.getElementById('qtd').value
    senha.innerHTML = ''
    
    let funcoes = []
    if (maiuscula.checked) funcoes.push(maiusculaFunction) 
    if (minuscula.checked) funcoes.push(minusculaFunction) 
    if (numero.checked) funcoes.push(numeroFunction) 
    if (simbolos.checked) funcoes.push(simbolosFunction) 

    for (let i = 0; i < qtd; i++) {
        let aleatorio = Math.floor(Math.random() * funcoes.length)

        let funcao = funcoes[aleatorio]

        let caracteres = funcao()
        senha.innerHTML += caracteres
    }    
}
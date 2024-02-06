let words = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

/* let novoArray = []
function qtdNumero() {
    for (let i = 0; i < words.length; i++) {
        let palavra = words[i].split('')
        novoArray.push(palavra.length)       
    }
    return novoArray
}
console.log(qtdNumero())

let arrayOrdenado = []
function reordenar() {
    for (let i = 0; i < words.length; i++) {
        let palavra = words[i].split('')
        arrayOrdenado.push(palavra.length)
    }
    return arrayOrdenado.sort()
}
console.log(reordenar()) */

let vogais = ['a', 'e', 'i', 'o', 'u']
let vogaisDupla = []
function conbinacoes() {
    let letras = ''
    for (let i = 1; i <= 40; i++) {
        letras = ''
        while(letras.length < 2){
            let aleatorio = Math.floor(Math.random() * vogais.length)
            if (vogais[aleatorio] === letras) {
                vogaisDupla
            }else{
                letras += vogais[aleatorio]
            }
        }
        if (vogaisDupla.includes(letras)) {
            vogaisDupla
        }else{
            vogaisDupla.push(letras)
        }
    }
    
    return vogaisDupla

}
console.log(conbinacoes())

function comparacao() {
    let contidos = []
    words.map(word => {
        for (let i = 0; i < vogaisDupla.length; i++) {
            if(word.includes(vogaisDupla[i])){
                contidos.push(word)
            }
        }
    })
    return contidos
}
console.log(comparacao())
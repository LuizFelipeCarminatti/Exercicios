let numero = 0
for (let i = 0; i <= 3; i++) {
    if (i === 3) {
        ++numero 
        i = 0
    }
    if (numero > 3) {
        return
    }
    console.log(i + ' > ' + numero)
}
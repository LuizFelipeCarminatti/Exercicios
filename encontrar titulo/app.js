const texto = document.getElementById('texto')
const titulo = document.getElementById('titulo')

const h1 = document.querySelectorAll('h1')



titulo.addEventListener('input', () => {
    h1.forEach(frase => {
        if (titulo.value === frase.textContent) {
            texto.innerHTML = frase.parentNode.innerHTML
        }
    })
})
let links = document.querySelectorAll('#link')

links.forEach(link => {
    link.onclick = function () {
        links.forEach(link => {
            link.classList.remove('efeito')
        })
        link.classList.add('efeito')
    }
})
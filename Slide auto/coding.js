function mover() {
    let imagens = document.querySelectorAll('img')
    let i = 0
    
    imagens.forEach(img => {
        img.style.left = -700 + 'px'
    });

    imagens[0].style.left = 0 + 'px'

    setInterval(() => {
        i = (i + 1) % imagens.length
        
        if (imagens[i].style.left == '-700px') {
            imagens[i].style.left = 0 + 'px'
        }else{
            imagens.forEach(img => {
                img.style.left = -700 + 'px'
            })
            if (i === 0) {
                imagens[i].style.left = 0 + 'px'
            }
        }
        
    }, 1000);
}
mover()
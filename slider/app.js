function slider() {
    let imgs = document.querySelectorAll('.img')
    let imagens = Array.from(imgs)
    let i = 0
    setInterval(() => {
        if (i === imagens.length - 1) {
            i = 0
        }else{
            i++
        }
        
        imagens.forEach(img => {
            img.classList.remove('visivel')
        })

        
        imagens[i].classList.add('visivel')
    }, 5000);
    imagens[0].classList.add('visivel')
}
slider()
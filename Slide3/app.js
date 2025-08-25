function slider() {
    let imgs = document.querySelectorAll('.img')
    let i = 0
    setInterval(() => {
        if (i === imgs.length - 1) {
            i = 0
        }else{
            i++
        }
        
        imgs.forEach(img => {
            img.classList.remove('visivel')
        })

        
        imgs[i].classList.add('visivel')
    }, 5000);
    imgs[0].classList.add('visivel')
}
slider()
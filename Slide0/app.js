function mover() {
    let galery = document.querySelector('.galery')

    let firstImage = galery.firstElementChild

    galery.appendChild(firstImage)

}

setInterval(() => {
    mover()
}, 4000);
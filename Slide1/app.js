let galery = document.querySelectorAll('div')
let i = 0
let zindexPrev = 1

function mover() {

    let previousIndex = i === 0 ? galery.length - 1 : i - 1

    setTimeout(() => {
        galery[previousIndex].classList.remove('efeito');
    }, 0);

    i < galery.length - 1 ? i++ : i = 0
        
    galery[i].style.zIndex = zindexPrev++

    galery[i].classList.add('efeito')

}

setInterval(mover, 6000);
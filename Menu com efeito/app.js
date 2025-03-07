let btn = document.querySelector('.btnMenu')
let nav = document.querySelector('header nav')
let header = document.querySelector('header')

btn.addEventListener('click', ()  => {
    header.classList.toggle('efeitoMenu')
    nav.classList.toggle('efeitoNav')
})
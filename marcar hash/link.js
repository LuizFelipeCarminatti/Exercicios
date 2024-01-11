function setaClasse() {  
    const link = window.location.href.split('#')[1]
    if(link !== undefined){
        document.querySelectorAll('.menu a').forEach((x) => x.classList.remove('selected')) //Zera as classes selecteds dos links
        document.querySelector(`.menu a[href='#${link}']`).classList.add('selected')                                 
    }else{
        document.querySelector(`.menu a[href='#inicio']`).classList.add('selected')
    }
}
window.onload = setaClasse()
window.onhashchange = (e) => setaClasse()
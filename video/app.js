let video = document.getElementById('meuVideo')
let menu = document.getElementById('menu')

video.onmouseover = function () {
    menu.classList.add('mostrar')
}

video.onmouseout = function () {
    menu.classList.remove('mostrar')
}

menu.onmouseover = function () {
    menu.classList.add('mostrar')
}

menu.onmouseout = function () {
    menu.classList.remove('mostrar')
}


function configuracao(id) {
    let video = document.getElementById(id)
    video.oncontextmenu = () => true

    document.querySelector(`[wm-play=${id}]`).onclick = e => video.play()
    document.querySelector(`[wm-pause=${id}]`).onclick = e => video.pause()

    let icone = document.getElementById('iconeVolume')
    document.querySelector(`[wm-iconeVolume=${id}]`).onclick = e => {
        if (video.volume == 1) {
            video.volume = 0
            icone.textContent = 'volume_off'
        } else {
            video.volume = 1
            icone.textContent = 'volume_up'
        }
    }

    video.onclick = function () {
        video.play()
    }

    document.querySelector(`[wm-volume=${id}]`).oninput = e => {
        video.volume = e.target.value / 100
        if (video.volume == 1 || video.volume == 0.9 || video.volume == 0.8 || video.volume == 0.7 || video.volume == 0.6) {
            icone.textContent = 'volume_up'
        }else if (video.volume == 0.5 || video.volume == 0.4 || video.volume == 0.3 || video.volume == 0.2 || video.volume == 0.1) {
            icone.textContent = 'volume_down'
        }else if (video.volume == 0) {
            icone.textContent = 'volume_off'
        }
    }

    setInterval(() => {
        const percentual = (video.currentTime / video.duration) * 100
        const valorDiv = document.querySelector(`[wm-progresso=${id}]`).value = percentual
        const render = document.getElementById('render')
        render.innerHTML = `${secondsToMiutes(video.duration)}/${secondsToMiutes(video.currentTime)}`
    }, 0);

    function secondsToMiutes(time) {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
    }


    document.querySelector(`[wm-fullscreen=${id}]`).onclick = e => {
        if(video.requestFullscreen){
            video.requestFullscreen()
        }
    }
}
configuracao('meuVideo')
let horaInput = document.getElementById('hora')
let minutoInput = document.getElementById('minuto')
let msg = document.getElementById('msg')
let audio = document.getElementById('audio')
let display = document.getElementById('display')

function salvar() {

    let escolhaHora = Number(horaInput.value)
    let escolhaMinuto = Number(minutoInput.value)

    display.innerHTML = `${horaInput.value}: ${minutoInput.value}`

    horaInput.value = ''
    minutoInput.value = ''

    let agora = new Date()
    let alarme = new Date()

    alarme.setHours(escolhaHora)
    alarme.setMinutes(escolhaMinuto)
    alarme.setSeconds(0)
    alarme.setMilliseconds(0)

    if (alarme <= agora) {
        alarme.setDate(alarme.getDate() + 1)
    }

    let tempoTotal = alarme.getTime() - agora.getTime()

    setTimeout(() => {
        audio.play()
        msg.innerHTML = 'Tocou o alarme!!'
    }, tempoTotal);
}
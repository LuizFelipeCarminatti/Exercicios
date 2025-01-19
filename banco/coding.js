const usuarios = []

function cadastra() {
    let nome = document.getElementById('nome')
    let valor = document.getElementById('valor')

    usuarios.push({ nome: nome.value, valor: Number(valor.value) })

    console.log(usuarios)
}

let valor_atual = 0
function entrar() {
    let entrar_nome = document.getElementById('entrar_nome')
    let nome_usuario = document.getElementById('nome_usuario')
    let valor_usuario = document.getElementById('valor_usuario')

    usuarios.map(user => {
        if (entrar_nome.value === user.nome) {
            nome_usuario.innerHTML = user.nome
            valor_usuario.innerHTML = user.valor
            valor_atual = user.valor
        }
    })
}

function enviar() {
    let valor_pix = document.getElementById('valor_pix')
    let destinatario = document.getElementById('destinatario')
    let nome_usuario = document.getElementById('nome_usuario')
    usuarios.map(user => {
        if (destinatario.value === user.nome) {
            if(valor_pix.value > valor_atual){
                alert('Valor negado!')
            }else if (valor_pix.value < valor_atual) {
                alert('Valor negado')
            }else{
                user.valor += Number(valor_pix.value)
                usuarios.map(usuario => {
                    if (nome_usuario.textContent === usuario.nome) {
                        usuario.valor -= valor_pix.value
                    }
                })
            }
        }
    })
}
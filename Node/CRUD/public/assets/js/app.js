function handleDeleteUser(id) {
    axios.delete('http://localhost:3000/usuario/excluir/' + id)
        .then((response) => {
            console.log('Sucesso ao deletar usuario ' + response)
            location.reload()
        }).catch((err) => {
            console.log('Ocorreu um erro ao deletar o usuário', err)
        })
}
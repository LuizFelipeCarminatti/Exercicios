async function salvar() {
    const nome = document.getElementById('nome');
    const id = Math.random().toString(36).substring(2, 10)
    try {
        await fetch('http://localhost:3000/salvar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id, nome: nome.value })
          })
          .then(response => {
            console.log(response)
            if (!response.ok) {
              throw new Error('Erro ao salvar os dados');
            }
            return response.json();
          })
          .then(data => {
            console.log('Dados salvos com sucesso:', data);
          })
          .catch(error => {
            console.error('Erro:', error);
          });
    } catch (error) {
        console.error('Error:', error);
    }
}
let pessoas = []
let form = document.querySelector('form')
let res = document.getElementById('resultado');

form.onsubmit = function (event) {
  event.preventDefault()

  let nome = document.getElementById('nome')
  let sobrenome = document.getElementById('sobrenome')
  let peso = document.getElementById('peso')
  let altura = document.getElementById('altura')

  pessoas.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value})
  
  atualizarResultados();
  
}

function atualizarResultados() {
    res.innerHTML = ''; // Limpa o conteúdo anterior

    pessoas.forEach(pessoa => {
        res.innerHTML += `Nome completo: ${pessoa.nome} Sobrenome: ${pessoa.sobrenome} Peso: ${pessoa.peso} Altura: ${pessoa.altura} <br/>`;
    });
}
import React, {useState} from "react";

export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtd).fill(0))

    function gerarNumerosNaoContido(array) {
        const novoNumero = parseInt(Math.random() * (60 - 1) + 1)
        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero 
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtd).fill(0).reduce(a => [...a, gerarNumerosNaoContido(a)], [])
        .sort((a, e) => a - e)
        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar</button>
        </div>
    )
}
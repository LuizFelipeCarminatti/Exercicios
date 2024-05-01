import React, { useState } from "react";

export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0))

    function gerarNumerosNaoContidos(array) {
        const aleatorio = parseInt(Math.random() * (60 - 1) + 1)
        return array.includes(aleatorio) ? gerarNumerosNaoContidos(array) : aleatorio
    }

    function gerar() {
        const novoArray = Array(props.qtdeNumeros).fill(0).reduce((a, e) => [...a, gerarNumerosNaoContidos(a)], []).sort((a, b) => a - b)
        return setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Mega Sena</h3>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={gerar}>Gerar</button>
        </div>
    )
}
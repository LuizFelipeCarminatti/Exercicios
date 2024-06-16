import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState()
    const [numero, setNumero] = useState()
    const [passos, setPasso] = useState(1)
    
    const inputChange = (e) => {
        setNumero(Number(e.target.value));
    }

    const passo = (e) => {
        setPasso(Number(e.target.value))
    }

    let arrayValores = []

    let incrementar = () => {
        for (let i = 0; i <= numero; i += passos || 1) {
            arrayValores.push(`${i} 👉🏻`)
            setValor(arrayValores)
        }
    }

    let decrementar = () => {
        for (let i = numero; i >= 0; i -= passos || 1) {
            arrayValores.push(`${i} 👉🏻`)
            setValor(arrayValores)
        }
    }

    return (
        <div className="contador">
            <input type="number" value={numero} onChange={inputChange} placeholder="Contagem"/>
            <input type="number" value={passos} onChange={passo} placeholder="Passo:"/>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <p>{valor}</p>
        </div>
    )
}
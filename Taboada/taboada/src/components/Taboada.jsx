import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState()
    const [btn, setBtn] = useState([])
    const [qtd, setQtd] = useState()

    const quantidade = (e) => {
        let newQuantidade = e.target.value
        setQtd(newQuantidade >= 0 ? newQuantidade : 0)
    }

    const input = (event) => {
        setValor(event.target.value)
    }

    const botaoClick = () => {
        let valores = []
        for (let i = 0; i <= qtd; i++) {
            valores.push(`${i} x ${valor} = ${i * valor} `)
        }
        setBtn(valores)
    }

    return (
        <div className="taboada">
            <input type="number" value={valor} placeholder="Valor:" onChange={input} />
            <input type="number" value={qtd} placeholder="Quantidade:" onChange={quantidade} />
            <button onClick={botaoClick}>Gerar</button>
            <div>
                <h2>Taboada do {valor}</h2>
                <ul>
                    {btn.map((linha) => (
                        <li key={linha}>{linha}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState()
    const [btn, setBtn] = useState([])

    const input = (event) => {
        setValor(event.target.value)
    }


    const botaoClick = () => {
        let valores = []
        for (let i = 0; i <= 10; i++) {
            valores.push(`${i} x ${valor} = ${i * valor} `)
        }
        setBtn(valores)
    }

    return (
        <div className="taboada">
            <input type="number" value={valor} onChange={input} />
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
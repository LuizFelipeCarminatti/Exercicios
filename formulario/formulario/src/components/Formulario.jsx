import React, { useState } from "react";

export default props => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobreNome] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [render, setRender] = useState([])

    let pessoas = []
    const salvarDados = e => {
        e.preventDefault()
        pessoas.push({ nome: nome, sobrenome: sobrenome, peso: peso, altura: altura })
        setRender(pessoas)
    }

    return (
        <div>
            <form>
                <label htmlFor="nome">Nome: </label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} /><br />
                <label htmlFor="sobrenome">Sobrenome: </label>
                <input type="text" value={sobrenome} onChange={e => setSobreNome(e.target.value)} /><br />
                <label htmlFor="peso">Peso: </label>
                <input type="text" value={peso} onChange={e => setPeso(e.target.value)} /><br />
                <label htmlFor="altura">Altura: </label>
                <input type="text" value={altura} onChange={e => setAltura(e.target.value)} /><br />
                <button type="submit" onClick={salvarDados}>Enviar</button>
            </form>
            <ul>
                {render.map(pessoa => {
                    return (
                        <li key={pessoa.nome}>{`Nome completo: ${pessoa.nome} ${pessoa.sobrenome} Peso: ${pessoa.peso} Altura: ${pessoa.altura}`}</li>
                    )
                })}
            </ul>
        </div>
    )
}
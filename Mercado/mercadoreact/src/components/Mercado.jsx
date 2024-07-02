import React, { useState } from "react";

export default props => {

    const [produto, setProduto] = useState("")
    const [item, setItem] = useState(0)
    const [nome, setNome] = useState([])

    const ativarInput = (e) => {
        setProduto(e.target.value)
    }

    let mercadorias = [
        { id: 1, nome: 'arroz', preco: 5.99 },
        { id: 2, nome: 'feijao', preco: 8.48 },
        { id: 3, nome: 'requeijao', preco: 6.98 },
        { id: 4, nome: 'lentilha', preco: 8.49 },
        { id: 5, nome: 'oleo soja', preco: 5.20 },
        { id: 6, nome: 'cafe', preco: 11.90 },
        { id: 7, nome: 'refrigerante', preco: 8.00 },
        { id: 8, nome: 'margarina', preco: 10.90 },
        { id: 9, nome: 'macarrao', preco: 4.59 },
        { id: 10, nome: 'acucar', preco: 4.99 },
        { id: 11, nome: 'ovos', preco: 16.00 },
        { id: 12, nome: 'alface', preco: 4.50 },
        { id: 13, nome: 'tomate', preco: 11.90 },
        { id: 14, nome: 'cebola', preco: 4.69 },
        { id: 15, nome: 'banana', preco: 5.90 },
    ]

    const render = () => {
        return (
            <ul>
                {mercadorias.map(produto => (
                    <li key={produto.id}>{produto.id} - {produto.nome}: {produto.preco.toFixed(2)}</li>
                ))}
            </ul>
        )
    }
    
    const adicionar = () => {
        mercadorias.forEach(mercadoria => {
            if (produto === mercadoria.nome) {
                let total = item + Number(mercadoria.preco)
                setItem(total)
            }
        })

        if (nome.some((nome) => nome === produto)) {
            return
        }

        setNome((nome) => [produto, ...nome])
    }

    return (
        <div>
            <input type="text" value={produto} onChange={ativarInput} placeholder="Produto: " />
            <button onClick={adicionar}>Adicionar</button>
            <p>{render()}</p>
            <p>{item.toFixed(2)}</p>
            <p>{nome}</p>
        </div>
    )
}
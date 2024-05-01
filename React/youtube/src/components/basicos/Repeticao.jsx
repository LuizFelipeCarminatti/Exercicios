import React from "react";
import produtos from '../../data/produtos'

export default props => {

    function getProdutos() {
        return produtos.map(produto => {
            return <li key={produto.id}>{produto.id} - {produto.name}: R${produto.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repedição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}

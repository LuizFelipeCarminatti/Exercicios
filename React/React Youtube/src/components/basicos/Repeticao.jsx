import React from "react";

import produtos from "../../data/produtos"

export default props => {

    function getProdutos() {
        return produtos.map(prod => {
            return <li>{prod.id} - {prod.nome} - R${prod.preco}</li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}
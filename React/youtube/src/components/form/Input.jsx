import React, { useState } from "react";

export default props => {

    const [nome, setNome] = useState('')

    return (
        <div>
            <h3>{nome}</h3>
            <input type="text" value={nome} placeholder="Nome:" onChange={e => setNome(e.target.value)}/>
        </div>
    )
}
import React, { useState } from "react";

export default (props) => {
    
    const [nome, alterar] = useState()

    return (
        <div>
            <h3>{nome}</h3>
            <input type="text" name="nome" id="nome" onChange={e => alterar(e.target.value)}/>
        </div>
    )
}
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState('')

    return (
        <div>
            <p>{valor}</p>
            <input type="input" onChange={e => setValor(e.target.value)} />
        </div>
    )
}
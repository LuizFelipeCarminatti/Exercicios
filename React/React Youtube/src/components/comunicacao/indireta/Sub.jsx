import React from "react";

export default props =>
        <div>
            <button onClick={() => {props.onClicar(Math.random())}}>Alterar</button>
        </div>
import React from "react";
import Filho from './Filho'
export default props => 
    <div>
        <Filho {...props}>Luiz</Filho>
        <Filho sobrenome={props.sobrenome}>Felipe</Filho>
        <Filho sobrenome="Carminatti">Jesus</Filho>
    </div>
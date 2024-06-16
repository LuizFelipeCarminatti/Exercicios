import React from "react";
import If from './If'

export default props => {
    <React.Fragment>
        <If test={props.numero % 2 == 0}>
            <h1>Par</h1>
        </If>
        <If test={props.numero % 2 == 1}>
            <h1>Impar</h1>
        </If>
    </React.Fragment>
}
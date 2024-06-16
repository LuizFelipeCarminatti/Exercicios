import React, { Component } from "react";

export default class Gerador extends Component {

    state = {
        values: []
    }

    gerar = () => {
        let aleatorio = Math.floor(Math.random() * (1 + 100) - 1)
        this.setState(numeros => ({
            values: [...numeros.values, aleatorio]
        }))
    }

    limpar = () => {
        this.setState({ values: [] })
    }

    render() {
        const { values } = this.state
        return (
            <div>
                <button onClick={e => this.gerar(e)}>Gerar</button>
                <button onClick={e => this.limpar(e) }>Limpar</button>
                <p>{values.join('Número gerado foi, ')}</p>
            </div>
        )
    }
}
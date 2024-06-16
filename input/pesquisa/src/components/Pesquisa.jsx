import React, { Component } from "react";

export default class Pesquisa extends Component {

    state = {
        nome: this.props.nome,
    }

    search(e) {
        const pessoas = ['Gabriel', 'Douglas', 'Mateus', 'Felipe', 'Luiz', 'Ivanir', 'Ana', 'Renato', 'Joao', 'Arthur', 'Rodrigo']

        this.setState({ nome: "" })


        if (e.target.value == 0) {
            this.setState({ nome: " " })
        } else {
            for (let i = 0; i < pessoas.length; i++) {
                let nome = pessoas[i].toUpperCase()
                if (nome.indexOf(e.target.value.toUpperCase()) >= 0) {
                    this.setState({ nome: pessoas[i] })
                }
            }
        }
    }

    render() {
        const { nome } = this.state
        return (
            <div>
                <h1>Pesquisador de Nomes</h1>
                <input type="text" onInput={e => this.search(e)} placeholder="Escreva o Nome" />
                <p>{nome}</p>
            </div>
        )
    }
}
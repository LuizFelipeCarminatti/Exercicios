import React from "react";

import Primeiro from './components/Primeiro'
import Parametro from './components/Parametro'
import Filhos from './components/Filhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import './App.css'

export default (props) => (
    <div className="App">
        <Card titulo="Contador" color="#293e6a">
            <Contador passo={1}/>
        </Card>
        <Card titulo="Formulario" color="#9c0f5f">
            <Input/>
        </Card>
        <Card titulo="Comunicação Indireta" color="#000">
            <Super/>
        </Card>
        <Card titulo="Comunicação direta" color="#4298b5">
            <Pai sobrenome="Alves"/>
        </Card>
        <Card titulo="Condicional" color="#FA6900">
            <Condicional numero={10}/>
        </Card>
        <Card titulo="Repetição" color="#e94c6f">
            <Repeticao/>
        </Card>
        <Card titulo="Exercicio X" color="#008bba">
            Conteudo
        </Card>
        <Card titulo="Componente Filhos" color="#d96459">
            <Filhos>
                <ul>
                    <li>Ana</li>
                    <li>Daniel</li>
                    <li>Gustavo</li>
                    <li>Anderson</li>
                </ul>
            </Filhos>
        </Card>
        <Card titulo="Componente Com Parametro" color="#ff85cb">
            <Parametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="Componente Primeiro" color="#92b06a">
            <Primeiro />
        </Card>
    </div>
);

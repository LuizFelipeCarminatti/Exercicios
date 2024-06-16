import React from "react";
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import If from './components/basicos/If'
import Card from './components/layout/Card'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/Contador/Contador'
import Mega from './components/Mega/Mega'

export default props =>
    <div className="App">
        <Card titulo="Primeiro Componentes" color="#92b06a">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Componente com parametro" color="#ff85cb">
            <ComParametro titulo="Esse é o titulo!" subtitulo="Esse é o subtitulo"></ComParametro>
        </Card>
        <Card titulo="Componente com filhos" color="#d96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Luiz</li>
                    <li>Felipe</li>
                    <li>Ivanir</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente Repeticao" color="#008bba">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="Componentes Condicional" color="#FA6900">
            <Condicional numero={28}></Condicional>
        </Card>
        <Card titulo="Componentes Condicional com If" color="#0032fa">
            <If numero={28}></If>
        </Card>
        <Card titulo="Comunicação  Direta" color="#4298b5">
            <Pai sobrenome="Carminatti"></Pai>
        </Card>
        <Card titulo="Comunicação  indireta" color="#000">
            <Super></Super>
        </Card>
        <Card titulo="Componente Input" color="#9c0f5f">
            <Input></Input>
        </Card>
        <Card titulo="Contador" color="#293e6a">
            <Contador></Contador>
        </Card>
        <Card titulo="Mega Sena" color="#056515">
            <Mega qtd={6}></Mega>
        </Card>
    </div>
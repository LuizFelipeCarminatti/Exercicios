import React from 'react';
import './App.css';

import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from './components/multiplos';
import Saudacao from './components/Saudacao'
import Pai from './components/Pai';
import Filho from './components/Filho';

export default () =>
    <div className="App">
        <Primeiro/>
        <BomDia nome="Felipe"/>
        <BoaNoite nome="Felipe"/>
        <BoaTarde nome="Felipe"/>
        <Saudacao/>
        <Pai nome="Luiz Felipe" sobrenome="Carminatti">
            <Filho nome="Ana" />
            <Filho nome="Jessica" />
            <Filho nome="Gustavo" />
        </Pai>
    </div>

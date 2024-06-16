import './App.css';
import React from 'react';

import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import { BoaNoite, BoaTarde } from './components/Multiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

export default props =>
    <React.Fragment>
        <Primeiro/>
        <BomDia nome="Felipe"/>
        <BoaNoite nome="Felipe"/>
        <BoaTarde nome="Felipe"/>
        <Saudacao />
        <Pai nome="Paulo" sobrenome="Carminatti" >
            <Filho nome="Luiz" sobrenome={props.sobrenome}></Filho>
            <Filho {...props}></Filho>
            <Filho {...props} nome="Felipe"></Filho> {/* Para usar o parametro deve colocar depois */}
        </Pai>
    </React.Fragment>
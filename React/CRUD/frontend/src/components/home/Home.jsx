import React from "react";
import Main from '../template/Main'

const Home = props =>
    <Main icon="home" title="Ínicio" subtitle="Segundo projeto do capítulo de React.">
        <div className='display-4'>Bem-vindo!</div>
        <hr />
        <p className='mb-0'>Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>

export default Home
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <nav className='menu-area'>
        <Link to="/">
            <i className='fa fa-home'></i> Início
        </Link>
        <Link to="#/">
            <i className='fa fa-users'></i> Usuário
        </Link>
    </nav>
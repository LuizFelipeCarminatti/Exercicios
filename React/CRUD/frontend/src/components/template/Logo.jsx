import './Logo.css'
import React from 'react'
import logo from '../../assets/img/logo.png'

const Logo = props =>
    <aside className='logo'>
        <img src={logo} alt="" />
    </aside>

export default Logo
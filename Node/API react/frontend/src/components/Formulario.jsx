import './Formulario.css'
import React, { useCallback, useState } from "react";
import axios from "axios"

const Formulario = props => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8080/salvarUsuario', { nome, email, password })
        window.location.href = `http://localhost:3000/usuario/${response.data._id}`
    }, [nome, email, password])

    return (
        <section className='section'>
            <form onSubmit={handleSubmit} method='post' className='form'>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" className='input' id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" className='input' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Senha: </label>
                <input type="password" name="password" className='input' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <hr />
                <button type="submit" className='btn'>Salvar</button>
            </form>
        </section>
    )
}

export default Formulario
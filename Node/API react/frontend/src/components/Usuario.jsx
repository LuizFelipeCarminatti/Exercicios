import './Usuario.css'
import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const PaginaUsuario = props => {
    const { id } = useParams()
    const [dados, setDados] = useState()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8080/usuario/${id}`)
            .then(response => {
                setDados(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])


    const handlerDelete = useCallback(async () => {
        await axios.delete(`http://localhost:8080/usuario/excluir/${id}`)
            .then((response) => {
                console.log('Sucesso ao deletar usuario ' + response)
            }).catch((err) => {
                console.log('Ocorreu um erro ao deletar o usuário', err)
            })
    }, [id])

    const handlerEdit = useCallback(async () => {
        await axios.put(`http://localhost:8080/usuario/editar/${id}`, { nome, email })
            .then((response) => {
                console.log('Sucesso ao editar usuario ' + response)
            }).catch((err) => {
                console.log('Ocorreu um erro ao editar o usuário', err)
            })
    }, [id, nome, email])

    return (
        <section className='principal'>
            {
                dados ? (
                    <form className='formularioUser'>
                        <div className='inputs'>
                            <label htmlFor="nome" className='label'>{dados.nome}</label>
                            <input type="text" className='inputUser' value={nome} onChange={(e) => setNome(e.target.value)} />
                            <label htmlFor="email" className='label'>{dados.email}</label>
                            <input type="text" className='inputUser' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <hr />
                        <div className='btns'>
                            <button type="submit" onClick={() => handlerDelete()}><Link to="http://localhost:3000">Excluir conta</Link></button>
                            <button type="submit" onClick={() => handlerEdit()}>Salvar Edição</button>
                        </div>
                    </form>
                ) : (<p>Usuário não encontrado!</p>)
            }
        </section>
    )
}

export default PaginaUsuario
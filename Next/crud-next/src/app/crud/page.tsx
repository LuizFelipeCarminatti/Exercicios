'use client'

import { useState } from "react"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { v4 as uuid } from 'uuid'

interface Dados {
    id: string
    nome: string
    email: string
    senha: string
}

const dadosUsuarios: Dados[] = []

export default function Crud() {

    const [usuarios, setUsuarios] = useState<Dados[]>(dadosUsuarios)
    const [ativado, setAtivado] = useState(false)

    const [id, setId] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    function Salvar() {
        if (nome && email && senha) { 
            const novoUsuario: Dados = { id: uuid(), nome, email, senha }
            setUsuarios([...usuarios, novoUsuario])
            console.log(usuarios)
            Cancelar()
        }
    }

    function Alterar() {
        if (id && nome && email && senha) {
            const usuarioEditado = usuarios.map(user =>
                user.id === id ? {id, nome, email, senha} : user
            )
            setUsuarios(usuarioEditado)
        }
        Cancelar()
    }

    function Edit(usuarioId: Dados) {
        setAtivado(true)
        setId(usuarioId.id)
        setNome(usuarioId.nome)
        setEmail(usuarioId.email)
        setSenha(usuarioId.senha)
    }

    function Excluir(usuarioId: string) {
        const listaAtualizada = usuarios.filter(user => user.id !== usuarioId)
        setUsuarios(listaAtualizada)
    }

    function Cancelar() {
        setNome('')
        setEmail('')
        setSenha('')
        setAtivado(false)
    }

    return (
        <div className="h-screen bg-gray-900 flex justify-center items-center">
            <div className="bg-neutral-50 p-4 rounded-md">
                {ativado === false ? (
                    <div>
                        <div className="flex justify-end">
                            <button onClick={() => setAtivado(true)} className="bg-green-600 p-3 rounded-md text-white m-4">Cadastrar</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th className="w-50 text-left">Nome</th>
                                    <th className="w-70 text-left">E-mail</th>
                                    <th className="w-30 text-left">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td className="flex gap-2 m-1">
                                            <button onClick={() => Edit(usuario)} className="bg-blue-500 p-3 rounded-md"><IconEdit /></button>
                                            <button onClick={() => Excluir(usuario.id)} className="bg-red-500 p-3 rounded-md"><IconTrash/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col w-[400px] gap-2">
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="bg-gray-300 h-[40px] rounded-md p-1" placeholder="Nome:" />
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-300 h-[40px] rounded-md p-1" placeholder="E-mail:"/>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className="bg-gray-300 h-[40px] rounded-md p-1" placeholder="Senha:"/>
                        <div className="flex justify-end gap-3">
                            <button onClick={id !== '' ? Alterar : Salvar} className="bg-gray-900 p-3 rounded-md text-white">
                                {id !== '' ? 'Alterar' : 'Salvar'}
                            </button>
                            <button onClick={Cancelar} className="bg-gray-900 p-3 rounded-md text-white">Cancelar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
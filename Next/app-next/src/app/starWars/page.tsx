'use client'

import { useCallback, useEffect, useState } from "react"

interface Personagem {
    name: string
    gender: string
}

export default function StarWars() {

    const [personagem, setPersonagem] = useState<number | ''>('')
    const [informacao, setInformacao] = useState<Personagem | null>(null)

    const Api = useCallback(async function Api() {

        if(!personagem) return

        try {
            const resp = await fetch(`https://swapi.dev/api/people/${personagem}/`)
            const dados = await resp.json()
            setInformacao(dados)
        } catch (error) {
            console.log(error)
        }
    }, [personagem])

    useEffect(() => {
        Api()
    }, [Api])

    return (
        <div className={`bg-black h-screen flex justify-center items-center`}>
            <div className={`bg-gray-800 w-[500px] h-[150px] p-4 rounded-md`}>
                <input type="number" placeholder="Indice" value={personagem} className={`w-[80%] mr-1`} onChange={e => setPersonagem(+e.target.value)} />
                <button onClick={Api} className={`bg-orange-400 w-[85px] p-1 rounded-md`}>Gerar</button>
                {informacao && (
                    <table className={`bg-white w-[100%] mt-4`}>
                        <thead>
                            <tr>
                                <th className={`text-white w-50 bg-gray-900 text-left p-2`}>Nome</th>
                                <th className={`text-white w-50 bg-gray-600 text-left p-2`}>Gênero</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{informacao.name}</td>
                                <td>{informacao.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
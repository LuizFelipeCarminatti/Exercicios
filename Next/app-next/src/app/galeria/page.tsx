'use client'

import Image from 'next/image'
import { useState } from 'react'
 
export default function Button() {
    
    const url = 'https://source.unsplash.com/featured/'

    const [pesquisa, setPesquisa] = useState<string>('person')
    const [tamanho, setTamanho] = useState<number>()
    
    function renderizarBotao(valor: string) {
        return (
            <button onClick={() => setPesquisa(valor)} className={`m-4 p-4 bg-purple-950 rounded-md text-white `}>{valor}</button>
        )
    }

    return (
        <div className={`h-screen bg-black flex justify-center items-center`}>
            <div className={`flex flex-col justify-center items-center border border-gray-600 p-4`}>
                <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} alt="Imagem" width={300} height={300} />
                <div className={`flex`}>
                    {renderizarBotao("abstract")}
                    {renderizarBotao("city")}
                    {renderizarBotao("person")}
                </div>
                <div>
                    <input type="number" value={tamanho} onChange={e => setTamanho(+e.target.value)} className={`w-[100%] bg-gray-900 text-white outline-none`}/>
                </div>
            </div>
        </div>
    )
}
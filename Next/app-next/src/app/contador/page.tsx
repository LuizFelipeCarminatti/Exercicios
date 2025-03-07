'use client'
import { useEffect, useState } from "react"

export default function Contador() {

    const [valor, setValor] = useState(0)

    useEffect(() => {}, []) // sem [] vai ser executado a cada renderização, com [] vai ser executado apenas uma vez logo apos a montagem do componente e se dentro [] estiver um valor que é mudado vai ser executado a cada renderização

    return (
        <div className={`flex justify-center items-center h-screen gap5 bg-black text-white`}>
            <div className={`border border-gray-500 p-4 flex h-[200px] flex-col justify-between items-center`}>
                <h1>Contador</h1>
                <span className={`text-2xl`}>{valor}</span>
                <div className={`flex gap-3`}>
                    <button className={`rounded-md bg-purple-600 w-[100px] h-[40px]`} onClick={() => setValor(valor - 1)}>-</button>
                    <button className={`rounded-md bg-purple-600 w-[100px] h-[40px]`} onClick={() => setValor(valor + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}
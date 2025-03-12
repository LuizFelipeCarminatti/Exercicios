'use client'

import { useState } from "react"

export default function Tailwind() {

    const [nome, setNome] = useState('')

    return (
        <div className="h-[100%]">
            <h1 className="text-3xl font-bold">Estilos TailwindCss</h1>
            <div className="flex">
                <form action="" method="post">
                    <fieldset className="border border-white-400 p-2 flex flex-col justify-center items-center gap-2">
                        <legend className="p-1 text-blue-900">Formulário</legend>
                        <div className="flex flex-col">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" className="bg-white rounded-sm m-1 h-[40px]" onChange={e => setNome(e.target.value)}/>
                        </div>
                        <button className="bg-blue-400 w-[100px] h-[40px] rounded-sm">Enviar</button>
                    </fieldset>
                </form>
                <p className="m-2 text-2xl">{nome}</p>
            </div>
        </div>
    )
}
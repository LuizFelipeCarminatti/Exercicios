'use client'

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface Perguntas {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Perguntas(params: Perguntas) {

    return (
        <div className={`border border-white rounded-md cursor-pointer overflow-hidden w-[100%] md:w-[30%]`}>
            <div className={`bg-zinc-700 p-5 flex justify-between text-white`} onClick={() => params.alternarVisibilidade(params.indice)}>
                <span>{params.texto}</span>
                {params.aberta ? <IconChevronDown /> : <IconChevronUp />}
            </div>
            {params.aberta && (
                <div className={`bg-black text-white p-5`}>
                    {params.resposta}
                </div>
            )}
        </div>
    )
}
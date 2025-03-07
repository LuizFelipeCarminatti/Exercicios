'use client'

import { useState } from "react"
import Perguntas from "./Pergunta"

export default function Faq() {
    
    const [ativo, setAtivo] = useState<number>(0)

    function alternar(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        }else{
            setAtivo(indice)
        }
    }

    return (
        <div className={`flex gap-2 justify-center items-center flex-col h-screen bg-black`}>
            <Perguntas indice={0} aberta={ativo === 0} alternarVisibilidade={alternar} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" resposta="In at dui dapibus, auctor velit ut, aliquet elit. Ut quis urna pellentesque, dapibus nulla quis, blandit urna." />
            <Perguntas indice={1} aberta={ativo === 1} alternarVisibilidade={alternar} texto="Donec eleifend sem non blandit condimentum?" resposta="Vivamus posuere risus eu hendrerit hendrerit." />
            <Perguntas indice={2} aberta={ativo === 2} alternarVisibilidade={alternar} texto="Cras iaculis ante eu est suscipit, vitae suscipit erat sodales?" resposta="Quisque in pellentesque leo." />
        </div>
    )
}
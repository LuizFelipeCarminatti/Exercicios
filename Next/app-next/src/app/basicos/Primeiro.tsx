import { ReactNode } from 'react'

interface Conteudo {
    children: ReactNode
}

export default function Primeiro(params: Conteudo) {
    return (
        <div className={`flex flex-col justify-center items-center bg-purple-500 m-2 rounded-md p-2 w-[150px] h-[150px] text-1xl font-[100]`}>
            {params.children}
        </div>
    );
  }
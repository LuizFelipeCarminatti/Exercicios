import { ReactNode } from 'react'

interface Parametros {
    children: ReactNode
}

export default function Layout(params: Parametros) {



    return (
        <div className={`flex flex-col gap-8 p-4 bg-black h-screen`}>
            {params.children}
        </div>
    )
}
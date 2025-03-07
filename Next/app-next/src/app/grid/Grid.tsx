import { ReactNode } from 'react'

interface GridProps {
    children: ReactNode
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
}

export default function Grid(params: GridProps) {
    


    return (
        <div className={`grid gap-4 grid-cols-${params.cols ?? 1} w-full 
            ${params.sm ? `sm:grid-cols-${params.sm}` : ''}
            ${params.md ? `md:grid-cols-${params.md}` : ''}
            ${params.lg ? `lg:grid-cols-${params.lg}` : ''}
            ${params.xl ? `xl:grid-cols-${params.xl}` : ''}
            ${params.xl2 ? `2xl:grid-cols-${params.xl2}` : ''}
        `}>
            {params.children}
        </div>
    )
}
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export default async function GET() {
    const cookie = await cookies()
    cookie.set('meu-cookie', 'admin', {
        httpOnly: true,  // Impede acesso via JavaScript no client (mais seguro)
        secure: process.env.NODE_ENV === 'production', // Apenas HTTPS em produção
        path: '/', // Disponível em toda a aplicação
        maxAge: 60 * 60 * 24, // Expira em 1 dia
    })

    return NextResponse.json({ message: 'Cookie setado com sucesso!' })
}

// Não tem como usar next/header no cliente
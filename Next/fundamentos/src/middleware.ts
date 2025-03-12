import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const cookieStore = await cookies()
    const Token = cookieStore.get('meu-cookie')

    if (!Token) {
        return NextResponse.redirect(new URL('/', request.nextUrl.origin))
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*'
}
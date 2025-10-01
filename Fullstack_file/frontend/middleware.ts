import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isAuthPage = req.nextUrl.pathname.startsWith('/auth')

  if (!session && !isAuthPage) {
    // redirect unauthenticated users to login
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth'
    return NextResponse.redirect(redirectUrl)
  }

  if (session && isAuthPage) {
    // if logged in but trying to access auth, send them to settings
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/settings'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

// Protect these routes
export const config = {
  matcher: ['/settings/:path*', '/auth/:path*'],
}

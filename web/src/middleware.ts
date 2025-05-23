import { NextResponse } from 'next/server'
import {  NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl

  // handle school page router 
  if(pathname.startsWith('/school')) {
    try {
      const schoolName = pathname.split("/").pop()
      const res = await fetch(`${process.env.BASE_URL}/api/v1/school/${schoolName}`)
      const data = await res.json()

      if(data) return NextResponse.next()
      throw Error('not found')
    } catch {
      return NextResponse.redirect(new URL("/not-found", request.url))
    }
  } 
  
  //  handle authentication dashboard route 
  if(pathname.startsWith('/dashboard')) {
    const isLogin = true;
    if(isLogin){
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/auth', request.url))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/school/:path*'],
  runtime: 'nodejs',
}
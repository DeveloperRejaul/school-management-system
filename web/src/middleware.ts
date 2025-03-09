import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {


  // handle school page router 
  if(request.nextUrl.pathname.startsWith('/school')) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, 2000)
    })
    return NextResponse.next()
  } 
  
  //  handle authentication dashboard route 
  if(request.nextUrl.pathname.startsWith('/dashboard')) {
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
}
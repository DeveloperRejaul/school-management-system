import { NextResponse,NextRequest } from 'next/server'
import { req } from './core/utils/req'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl

  // handle school page router 
  if(pathname.startsWith('/school')) {
    try {
      const schoolName = pathname.split("/").pop()
      const {data} = await req(`/api/school/${schoolName}`)
      if (data) {
        const response = NextResponse.next()
        response.headers.set('x-school-data', JSON.stringify(data))
        return response
      }
      throw Error('not found')
    } catch {
      return NextResponse.redirect(new URL("/not-found", request.url))
    }
  }   
  
  //  handle authentication dashboard route 
  if(pathname.startsWith('/dashboard')) {
    const token = request.cookies.get(process.env.NEXT_PUBLIC_COOKIE_KEY!)?.value
    const isLogin = token;
    if(isLogin){
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/school/:path*'],
  runtime: 'nodejs',
}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // check user authenticate
  const isLogin = true;
  if(isLogin){
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/auth', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}
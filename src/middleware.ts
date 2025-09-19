import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
// import { _includes } from './../.next/static/chunks/e65f3_zod_v4_67900f66._';
 
// This function can be marked `async` if using `await` inside
export  async function middleware(request: NextRequest) {
 
    const token = await getToken({req:request})
    const {pathname} = request.nextUrl
    const router = ["/","/products", "/cart" , "/productDetalies" , "/brands","/categories","/categoriesDetalies","/wishlist"]
    const  authPage = ["/login","/register","/fogetPassword","/codeReset" , "/newPassword" ]


    
    if(!token && router.includes(pathname)){
      
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
        if(token && authPage.includes(pathname) ){
     return NextResponse.redirect(new URL('/', request.url))
    }
return NextResponse.next()
}


export const config = {
  matcher: ["/","/products", "/cart","/fogetPassword","/codeReset" , "/newPassword","/wishlist" , "/productDetalies" , "/brands","/categories","/categoriesDetalies","/login","/register"],
}
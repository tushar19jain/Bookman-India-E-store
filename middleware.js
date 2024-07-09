import { NextResponse } from "next/server";
export function middleware(request){
    const logintoken = request.cookies.get("logintoken")?.value
    const loginUserNotAccessPaths=request.nextUrl.pathname == "/signuppage" || 
                                  request.nextUrl.pathname == "/loginpage";
    
    if(loginUserNotAccessPaths){
            if(logintoken){
                return NextResponse.redirect(new URL("/",request.url))
            }
        }else{
            if(!logintoken){
                    return NextResponse.redirect(new URL("/loginpage",request.url));
            }
    }
}

export const config = {
    matcher: [
      '/loginpage',
      '/signuppage',
      '/book/'
    ]
}
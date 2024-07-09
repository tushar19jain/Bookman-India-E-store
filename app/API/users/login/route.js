import getCon from "@/app/Helper/connectDB";
import { User } from "@/app/Models/UserModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

getCon();
export async function POST(request){
    const{email,password} = await request.json();
   try {
    const user  = await User.findOne({email: email})
    console.log(user);
    if(user == null){
        throw new Error("User not found")
    }
    const token = jwt.sign({
        _id: user._id,
        email:user.email,
        type:user.type
    },process.env.JWT_KEY)

    const response = NextResponse.json({
        message:"Login success",
        success:true
    })
    response.cookies.set("logintoken",token,{
        expiresIn:"1d",
        httpOnly:false
    })
    return response

   } catch (error) {
    
    console.log(error);
    return NextResponse.json({
        success:false
    })

   }
}   
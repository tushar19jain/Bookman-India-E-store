import getCon from "@/app/Helper/connectDB";
import { User } from "@/app/Models/UserModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
getCon();
export  async function POST(request){
    const {email,password} = await request.json();
    const user = new User({
        email,
        password
    })
    try {
        const created = await user.save();
        return NextResponse.json({
            message:"User created",
            status:200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed",
            status:500
        })
    }
}


import getCon from "@/app/Helper/connectDB";
import { Admin } from "@/app/Models/AdminModel";
import { NextResponse } from "next/server";

getCon()
export  async function POST(request){
    const {user,pass} = await request.json();
    try {
        const matched = Admin.findOne({username:user},{password:pass})
        if(!matched){
            return NextResponse.json({
                success:false,
                message:"User not found"
            })
        }
        if(matched.password == pass){
            return NextResponse.json({
                success:true,
                message:"Admin logged in"
            })
        }
        return NextResponse.json({
            success:false,
            message:"Password does not match!"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:"Internal server error",
            status:500
        })
    }
}
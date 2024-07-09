import getCon from "@/app/Helper/connectDB";
import { User } from "@/app/Models/UserModel";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import { NextResponse } from "next/server";
getCon()
export async function POST(request){
    try {
    const logintoken = request.cookies.get("logintoken")?.value;
    const payload = jwt.verify(logintoken,process.env.JWT_KEY)
    console.log(payload);
    const {bookID} = await request.json();
    const user = await User.findById(payload._id).select("-password")
    console.log(user);
    try {
        const success = await User.updateOne({_id :user._id},{$push:{cart:bookID}}) 
        console.log("success",success); 
        if(success.nModified === 1){
            console.log("success");
        }else{
            console.log("No matching user found");
        }
        console.log(success); 
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json({status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({status:404})
    }
}

export async function GET(request){
    try {
    const logintoken = request.cookies.get("logintoken")?.value;
    const payload = jwt.verify(logintoken,process.env.JWT_KEY)
    const user = await User.findById(payload._id).select("-password")
    return NextResponse.json(user);
    } catch (error) {
        
    }   
}
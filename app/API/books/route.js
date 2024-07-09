import getCon from "@/app/Helper/connectDB";
import { Book } from "@/app/Models/BookModel";
import { NextResponse } from "next/server";

getCon()
export async function GET(){
    try {
        const data = await Book.find()
        return NextResponse.json(data)   
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status:300
        })
    }
}

export async function POST(request){
   const  { bookName , price, description, tags,cover,stripeURL} = await request.json();
   const book = new Book({
    bookName , 
    price, 
    description, 
    tags,
    cover,
    stripeURL
   })
   try {
        const created = await book.save();
        return NextResponse.json({
            status:true,
            message:"Book added"
        })
   } catch (error) {
        console.log(error);
        return NextResponse.json({
         message:"error",
         status:false
        })
   }
}
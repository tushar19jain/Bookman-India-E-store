import getCon from "@/app/Helper/connectDB";
import { Book } from "@/app/Models/BookModel";
import { NextResponse } from "next/server";
import { stringify } from "flatted";

getCon();
export async function GET(request,{params}){
    const {id} = params;
    try {
        const data = await Book.find({ _id : id });
        const reponse = stringify(data)
        return new NextResponse(reponse,{status:200});
    } catch (error) {
        return NextResponse.json({
            status:300
        })
    }
}
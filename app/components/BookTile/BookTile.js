"use client"
import { addItem } from "@/app/services/cartService";
import Image from "next/image"
import Link from "next/link";
import toast from "react-hot-toast";
import { FaIndianRupeeSign, FaCartPlus, FaExpand } from "react-icons/fa6";
export default function BookTile({id,title,cover,price}){
    return(
        <main className="h-30 w-48 bg-white  p-2  hover:shadow-lg my-3 ">
            <Link href={`book/${id}`}>
           <Image 
            src={cover}
            height={60}
            width={250}
            sizes="(max-width: 250px)"
            alt="bookcover"
            className="my-3 cursor-pointer"
           />
           </Link>
            <p className="text-blue-500 cursor-pointer text-sm sm:text-md">{title}</p>
            <p  className="flex items-center text-sm sm:text-md font-bold" ><FaIndianRupeeSign/> {price}</p>
            <section className="flex gap-5 text-4xl my-2">
                <FaCartPlus  className="border p-2 bg-blue-500 cursor-pointer text-white" />
                <FaExpand className="border p-2 cursor-pointer" />
            </section>
        </main>
    )
}
"use client"
import { httpAxios } from "@/app/Helper/httpHelper";
import { usePathname, useRouter } from "next/navigation";
import {useEffect,useState } from "react";
import Image from "next/image";
import TopHeader from "@/app/components/TopHeader/TopHeader";
import SubBar from "@/app/components/SubBar/SubBar";
import Navbar from "@/app/components/Navbar/Navbar";
import Loading from "./loading";
import { FaFacebook, FaRupeeSign, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import Footer from "@/app/components/Footer/Footer";
import Link from "next/link";
const BookDetails=()=>{
    const router = useRouter();
    const id = usePathname();
    const [book,setBook] = useState(null);
    useEffect(()=>{
        if(id){
                const fetchedBookDetails = async()=>{
                    const result = await httpAxios.get(`/API/${id}`)
                    .then((response)=>response.data)
                    console.log("Result" , result);
                    setBook(result);
                }
             fetchedBookDetails();
            }
    },[id])
    console.log(book);
    //console.log(book[1].price);
    if(!book){
        return(
            <div>
            <TopHeader />
            <SubBar />
            <Navbar />
            <Loading />
            </div>
        )
    }
    return(
        <div>
            <TopHeader />
            <SubBar />
            <Navbar />
            <section className="flex justify-center gap-20 my-10" >
            <div>
                <Image 
                    src={book[6]}
                    height={200}
                    width={400}
                    alt="book-cover"
                />
            </div>
            <div className="text-lg flex flex-col gap-3 ">
                <h1 className="text-gray-600">{book[3]}</h1>
                <h2> <b className="flex items-center text-2xl"> <FaRupeeSign/> {book[1].price} </b> </h2>
                <div className="my-3 flex gap-5 text-lg">
                    <Link href = {`${book[7]}`} ><button className=" bg-orange-500 p-3 text-white shadow-inner">BUY NOW</button> </Link>
                </div>
                <p className="text-sm"><b>Description : </b> {book[5]}</p>
                <p className="text-sm"><b>Tags : </b> {book[4]}</p>
                <div className=" text-sm flex  items-center">
                    <p><b>Share:</b></p>
                    <ul className="flex items-center gap-3 text-lg mx-2 cursor-pointer text-gray-600">
                        <li><FaFacebook /></li>
                        <li><FaWhatsapp /></li>
                        <li><FaTwitter /></li>
                        <li><FaTelegram /></li>
                        <li><FaVoicemail /></li>
                    </ul>
                </div>
            <br></br>
            </div>
            </section>
            <Footer />
        </div>
    )
}
export default BookDetails
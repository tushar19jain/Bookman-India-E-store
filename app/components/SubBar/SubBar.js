"use client"
import { FaFacebookF, FaTwitter,FaLinkedinIn,FaWhatsapp, FaPhone, FaHome, FaInfo, FaSchool, FaBookOpen, FaDownload, FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import { FaPerson, FaPersonArrowDownToLine, FaPersonBiking, FaPhoneFlip } from "react-icons/fa6";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function SubBar(){
    const [login , setLogin] = useState(false)
    return(
        <main className="border-t border-blue-500 bg-blue-600 flex flex-row items-center justify-around p-4 ">
            <IoMenu className="text-white text-6xl p-3   sm:hidden" />
            <Image 
                src={'/bmi.jpg'}
                height={50}
                width={250}
                sizes="(max-width: 250px)"
                alt="company-logo"
            />
            <div>
                <input className="p-3 rounded-xl  text-sm w-[190%] ml-[-30px]" placeholder="Seacrh for books,author,codes"></input>
            </div>
                <div className="flex items-center gap-4">
                {login ? 
                    <div className="flex items-center">
                <FaPerson  className="text-xl text-white"/>
                <Link href={'/signuppage'} >
                <button className="p-2 text-white text-sm"><p className="hidden sm:block">LOG OUT</p></button></Link>
                </div>
                :
                <div className="flex items-center">
                <FaPerson  className="text-xl text-white"/>
                <Link href={'/signuppage'} >
                <button className="p-2 text-white text-sm"><p className="hidden sm:block">SIGN IN</p></button></Link>
                </div>
                }
                 
                <div className="flex items-center">
                <FaPhoneFlip   className="text-xl text-white"/>
                <Link href={'/cartpage'}>
                <button className="p-2 text-white text-sm"><p className="hidden sm:block">Contact</p></button></Link>
                </div>
            </div>
        </main>
    )
}
"use client"
import { FaFacebookF, FaTwitter,FaLinkedinIn,FaWhatsapp, FaPhone, FaHome, FaInfo, FaSchool, FaBookOpen, FaDownload, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
export default function TopHeader(){
  return(
    <main className="hidden sm:flex bg-blue-600  justify-around p-3 items-center">
    <div className="text-sm text-white">WELCOME TO BOOKMAN INDIA</div>
    <div>
        <ul className="flex items-center gap-10 text-white">
            <li><a><FaFacebookF /></a></li>
            <li><a><FaTwitter /></a></li>
            <li><a><FaLinkedinIn /></a></li>
            <li><a><FaWhatsapp /></a></li>
        </ul>
    </div>
    <div className="flex text-white items-center gap-2">
        <FaPhoneAlt  /> <p>+91-7534856909</p>
    </div>
  </main>
  )
}
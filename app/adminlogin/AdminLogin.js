"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { loginUser } from "../services/userService"
import Navbar from "../components/Navbar/Navbar"
import { adminLogin } from "../services/adminService"
export default function AdminLogin(){
    const router = useRouter();
    const [data,setData] = useState({
        username:"",
        password:""
    })
    console.log(data);
    const handleForm = async (event)=>{
        event.preventDefault();
        if(data.username || data.password != " "){
            try {
                const result = await adminLogin(data)
                console.log(result);
                if(result.success == true){
                    toast("Login success")
                    router.push('/admin')
                }
            } catch (error) {
                console.log(error);
            }                    }
        else{
            toast("Fields are empty");
        }
    }
    return(
        <div className="flex flex-col bg-blue-500">
        <Toaster />
        <Navbar />
        <div className="p-5">
            <h1 className="text-slate-100 font-semibold text-xl">Login to admin dashbord</h1>
            <p className="text-slate-200" >Handle the bookman india digital library.</p>
        </div>
        <div className="bg-white">
            <form  onSubmit={handleForm} className="p-5 flex flex-col gap-3">
                <input 
                onChange={(event)=>{
                    setData({
                        ...data,
                        username:event.target.value                    
                    })
                }}
                value={data.username}
                className="border p-3" type="text" placeholder="Enter admin username"></input>
                <input 
                 onChange={(event)=>{
                    setData({
                        ...data,
                        password:event.target.value                    
                    })
                }}
                value={data.password}
                className="border p-3" type="password" placeholder="Enter Password"></input>
                <div className="flex flex-col gap-4  my-10">
                <button  type="submit" className="bg-blue-500 text-white shadow-sm p-2">LOG IN</button>
                </div>
            </form>
        </div>
    </div>
    )
}
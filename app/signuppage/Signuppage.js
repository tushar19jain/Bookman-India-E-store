"use client"
import Link from "next/link"
import { useState } from "react"
import { addUser } from "../services/userService"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
export default function Signuppage(){
    const router = useRouter();
    const [data,setData] = useState({
        "email": "",
        "password": ""
    })
    console.log(data);
    const submitData = async (event)=>{
        event.preventDefault();
        if(data.email != ""){
            try {
                const result = await addUser(data)
                console.log(result);
                router.push("/")
                toast("User created success!")
            } catch (error) {
                console.log(error);
                toast("Can not complete the request right now!")
            }
        }else{
            toast("Enter valid email")
    }
    }
    console.log(data.email)
    return(
        <div className="flex flex-col bg-blue-500">
        <Toaster />
        <div className="p-5">
            <h1 className="text-slate-100 font-semibold text-xl">Signup</h1>
        </div>
        <div className="bg-white">
            <form onSubmit={submitData} className="p-5 flex flex-col gap-3">
                <input
                type="email" 
                onChange={(event)=>{
                    setData({
                        ...data,
                        email:event.target.value
                    })
                }}
                value={data.email}
                className="border p-3" placeholder=" Enter email address"></input>
                <input
                type="password" 
                onChange={(event)=>{
                    setData({
                        ...data,
                        password:event.target.value
                    })
                }}
                value={data.password}
                className="border p-3" placeholder="Create a strong password"></input>
                <div className="flex flex-col gap-4 my-10">
                <button className="bg-blue-500 text-white shadow-sm p-2">REGISTER</button>
               <Link href={"/loginpage"} > <button className="bg-white border w-80 text-blue-500 shadow-sm p-2" >EXISTING USER? LOG IN</button> </Link>
                </div>
            </form>
        </div>
    </div>
    )
}
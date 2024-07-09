"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { loginUser } from "../services/userService"
export default function Loginpage(){
    const router = useRouter();
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const handleForm =(event)=>{
        event.preventDefault();

        if(data.email || data.password != " "){
           
            try {
                const result = loginUser(data)
                if(result != null){
                    toast("Login success")
                    router.push('/')
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
        <div className="p-5">
            <h1 className="text-slate-100 font-semibold text-xl">Login</h1>
            <p className="text-slate-200" >Get access to your Orders,Wishlist and Recommendations.</p>
        </div>
        <div className="bg-white">
            <form  onSubmit={handleForm} className="p-5 flex flex-col gap-3">
                <input 
                onChange={(event)=>{
                    setData({
                        ...data,
                        email:event.target.value                    
                    })
                }}
                value={data.email}
                className="border p-3" type="text" placeholder="Enter Username/Email address"></input>
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
             <Link href={'/signuppage'} > <button className="bg-white border text-blue-500 shadow-sm p-2  w-80" >NEW TO BOOKMAN INDIA?SIGN UP</button> </Link>
                </div>
            </form>
        </div>
    </div>
    )
}
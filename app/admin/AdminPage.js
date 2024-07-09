"use client"
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TopHeader from "../components/TopHeader/TopHeader";
import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { uploadBook } from "../services/bookService";
export default function AdminPage(){
     const [book,setBook] = useState({
        "bookName":"",
        "price":"",
        "description":"",
        "tags":"",
        "cover":"",
        "stripeURL":""
     })
     const [toogle,setToogle] = useState(true)
     console.log(book);
     const handleForm= async(event)=>{
        event.preventDefault();
        try{
            const success = await uploadBook(book);
            console.log(success);
            if(success.status == false){
            toast("Can't complete the request")
            return
            }
            toast("Book upload success!!")

        }catch(error){
            toast("Server error try again later")
        }
     }
    return(
        <div>
            <Toaster />
            <TopHeader />
            <Navbar />
            <h1 className="text-xl font-semibold px-20 py-5" >WELCOME TO ADMIN DASHBOARD</h1>
            {toogle ?
            
                <div className="flex  items-center justify-between">
            <section className=" flex flex-col w-1/5 gap-5 p-10 mx-20">
                <button onClick={()=>setToogle(false)} className="bg-blue-700 p-2 text-white rounded-2xl">Delete a book</button>
            </section>
            <section className="flex w-[60%] bg-white shadow-xl rounded-xl flex-col gap-5 p-10 mx-20">
               <div>
                    <form onSubmit={handleForm} className="flex flex-col gap-1">
                        <p>*Enter the book name</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                bookName:event.target.value
                            })
                        }}
                        value={book.bookName}
                        className="border p-2 rounded-md" placeholder="example : udaan"></input>
                        <p>*Enter book description</p>
                        <input
                         onChange={(event)=>{
                            setBook({
                                ...book,
                                description:event.target.value
                            })
                        }}
                        value={book.description}
                         className="border p-2 rounded-md" placeholder="example : Well labled diagram with great explaination"></input>
                        <p>*Enter the book price (in ruppe)</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                price:event.target.value
                            })
                        }}
                        value={book.price}
                        className="border p-2 rounded-md" min={50} max={10000} placeholder="min:50 max:10,000" type="number"></input>
                        <p>Enter tags</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                tags:event.target.value
                            })
                        }}
                        value={book.tags}
                        className="border p-2 rounded-md" type="text" placeholder="example : class,subject"></input>
                        <p>*Uplode book cover url</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                cover:event.target.value
                            })
                        }}
                        className="border p-2 rounded-md" type="url"></input>
                        <p>*Enter stripe payment api url</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                stripeURL:event.target.value
                            })
                        }}
                        value={book.stripeURL}
                        className="border p-2 rounded-md" type="url" placeholder="You get url from stripe dashboard"></input>

                    <button type="submit" className="bg-blue-600 p-2 text-white rounded-xl">UPLOAD</button>
                    </form>
               </div>
            </section>
            </div>
            :
            <div className="flex flex-row items-center justify-between">
            <section className=" flex flex-col  gap-5 p-10 mx-20">
            <button onClick={()=>setToogle(true)} className="bg-blue-700 p-2 text-white rounded-2xl">Add a book</button>
            <form onSubmit={handleForm} className="flex flex-col gap-1">
                        <p>*Enter the book name</p>
                        <input 
                        onChange={(event)=>{
                            setBook({
                                ...book,
                                bookName:event.target.value
                            })
                        }}
                        value={book.bookName}
                        className="border p-2 rounded-md" placeholder="example : udaan"></input>
                    <button type="submit" className="bg-blue-600 p-2 text-white rounded-xl">DELETE</button>

            </form>
            </section>
            </div>
            }
           
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
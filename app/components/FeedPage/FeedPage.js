/* eslint-disable react/jsx-key */
"use client"
import { getBooks } from "@/app/services/bookService";
import { Suspense, useEffect, useState } from "react";
import BookTile from "../BookTile/BookTile";
export default function FeedPage(){
    const [books,setBooks] = useState([])
    useEffect(()=>{
        const books = getBooks();
        books.then(result=>{
            setBooks(result)
        })
    },[])
    console.log(books);
    return(
        <div className="flex flex-col justify-center px-40  items-center sm:grid sm:grid-cols-5">       
            {books.map(book=>(
                <BookTile 
                    title={book.bookName}
                    price={book.price}
                    cover={book.cover}
                    id={book._id}
                />
            ))}
        </div>
    )
}
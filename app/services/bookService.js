import { httpAxios } from "../Helper/httpHelper"

export const getBooks = async()=>{
    const result = await httpAxios.get("/API/books")
    .then((response)=>response.data)
    return result;
}

export const uploadBook = async (books) =>{
    const result = await httpAxios.post("/API/books",books)
    .then((response)=>response.data)
    return result
}
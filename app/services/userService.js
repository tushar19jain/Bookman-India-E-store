import { httpAxios } from "../Helper/httpHelper";
 export function addUser(user){
    const result = httpAxios
    .post("/API/users",user)
    .then((response)=>response.data)
    return result
 }

 export function loginUser(user){
   const result = httpAxios
   .post("API/users/login",user)
   .then((response)=>response.data)
   return result
 }
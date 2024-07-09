import { httpAxios } from "../Helper/httpHelper"

export const adminLogin  = async (data) =>{
    const result = httpAxios.post("API/admin",data)
    .then((response)=>response.data)
    return result
}
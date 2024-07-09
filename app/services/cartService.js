import { httpAxios } from "../Helper/httpHelper";

export function addItem(request){
    const result = httpAxios
    .post("/API/cart",request)
    .then((response)=>response.data)
    return result
}
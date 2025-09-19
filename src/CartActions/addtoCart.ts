

import { getMyToken } from "@/utilities/token";
import axios from "axios";


export async function addToCart(id:string){
const token = await getMyToken()
const values = {
    productId: id
}


const data =  await axios.post("https://ecommerce.routemisr.com/api/v1/cart",values,{
    headers:{
        token: token as string
    }
})

return data
}
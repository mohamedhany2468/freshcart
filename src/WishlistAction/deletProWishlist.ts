"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";



export async function deleteProWishlist(id:string) {
    
const token = await getMyToken()



const {data} =  await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
    headers:{
        token :token as string
    }
})

return data
}
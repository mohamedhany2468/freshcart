"use server"
import { getMyToken } from "@/utilities/token";



export async function getProWishlist() {
    
const token = await getMyToken()



const res =  await fetch("https://ecommerce.routemisr.com/api/v1/wishlist",{
    headers:{
        token :token as string
    }
})
const data = await res.json()
return data
}
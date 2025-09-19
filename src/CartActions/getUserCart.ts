"use server"
import { getMyToken } from "@/utilities/token";



export async function getUserCart() {
    
const token = await getMyToken()



const res =  await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
    headers:{
        token :token as string
    }
})
const data = await res.json()
return data
}
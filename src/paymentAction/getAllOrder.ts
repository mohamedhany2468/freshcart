import { getMyToken } from "@/utilities/token";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import type { Orders } from "@/types/AllOrder";




export async function getAllOrder(): Promise<{ data: Orders[] }> {
    const token = await getMyToken();
    const { id } = jwtDecode(token as string) as { id: string };
    console.log(id);
    const data = await axios.get<{ data: Orders[] }>(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
    return data.data;
}
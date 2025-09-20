import { getMyToken } from "@/utilities/token";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import type { Orders } from "@/types/AllOrder";

export async function getAllOrder(): Promise<Orders[]> {
  const token = await getMyToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  const { id } = jwtDecode(token as string) as { id: string };

  const res = await axios.get<Orders[]>(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
  );

  console.log("API response ===>", res.data); 
  return res.data;
}

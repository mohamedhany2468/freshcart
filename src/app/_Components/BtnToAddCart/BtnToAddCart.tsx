"use client"


import { addToCart } from '@/CartActions/addtoCart'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/CartContext'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'


interface BtnToAddCartProps {
  id: string;
  btn: boolean;

}

import { Cart } from '@/types/Cart.type';

interface AddProductResponse {
  status: string;
  message?: string;
  numOfCartItems?: number;
  cartId?: string;
  data?: Cart['data'];
}

function BtnToAddCart({ id, btn ,}: BtnToAddCartProps) {
   
const [iLoading, setiLoading] = useState(false)
  
  const cart = useContext(CartContext) as { AddProduct: (id: string) => Promise<AddProductResponse> };
  if (!cart) return null;
  const { AddProduct } = cart;

   

   async function hundelAddCart() {
        setiLoading(true);
        const data = await AddProduct(id);
        console.log(data);
        if (data.status === "success") {
            toast.success(data.message ?? "Added successfully", {
                position: "top-center"
            });
setiLoading(false);
        } else {
            toast.error("faild to add this product in cart", {
                position: "top-center"
            });
            setiLoading(false);
        }
    }
  return (<>
    {btn === true ? <Button  className=' border-1 border-[#B88E2F]   text-[#B88E2F] bg-white md:px-15 me-2 px-18 md:w-96 py-2 font-bold hover:bg-white  cursor-pointer  group-hover:block left' onClick={hundelAddCart}>{iLoading ?<i className="fa-solid fa-spinner fa-spin"></i> : "Add to Cart"}</Button>:
      <Button  className={`text-[#B88E2F] bg-white md:px-8 py-2 px-10 font-bold hover:bg-white  cursor-pointer  group-hover:block left`} onClick={hundelAddCart}>{iLoading ?<i className="fa-solid fa-spinner fa-spin"></i> : "Add to Cart"}</Button>

    }
  </>
  )
}

export default BtnToAddCart
"use client"



import { Button } from '@/components/ui/button'
import { WishlistContext } from '@/context/Wishlist'
import React, { useContext } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { toast } from 'sonner'



interface BtnAddWishlistResponse {
  status: string;
  message: string;
  data?: unknown;
}

interface BtnAddWishlistProps {
  id: string;
  btn: boolean;

}

function BtnAddWishlist({ id, btn }: BtnAddWishlistProps) {


  const wishlist = useContext(WishlistContext);
  if (!wishlist) return null;
  const { AddWishlistProduct, setHeart, heart } = wishlist;

       
   

  async function hundelAddCart() {
    const data = await AddWishlistProduct(id) as BtnAddWishlistResponse;
    console.log(id);
    if (data && data.status === "success") {
      toast.success(data.message, {
        position: "top-center",
      });
      setHeart(true);
    } else {
      toast.error("faild to add this product in cart", {
        position: "top-center",
      });
    }
  }
  return (
    <div>
      {btn === true ? 
      <button  className={`${heart&& "text-red-600"} text-[#B88E2F]   py-2 font-bold   cursor-pointer  group-hover:block`} onClick={hundelAddCart} >  <MdFavoriteBorder size={27}/></button>
      :
      <button  className={` text-[#B88E2F] font-bold  cursor-pointer  group-hover:block`} onClick={hundelAddCart}  >  <MdFavoriteBorder size={27}/></button>
       }
      </div>
  )
}

export default BtnAddWishlist
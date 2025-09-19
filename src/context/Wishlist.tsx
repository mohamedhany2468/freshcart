"use client"

import React, { createContext, useEffect, useState } from 'react'
// import { createContext } from 'vm'
// import { Provider } from '@/Provider';

import { addWishlist } from '@/WishlistAction/addWishlist';
import type { ProductType } from '@/types/Product.type';
import { getProWishlist } from '@/WishlistAction/getProWishlist';
import { deleteProWishlist } from '@/WishlistAction/deletProWishlist';


export interface WishlistContextType {
  numOfWishlistItems: number;
  totalCartPrice: number;
  Product: ProductType[];
  AddWishlistProduct: (id: string) => Promise<object>;
  removeWishlistItems: (id: string) => Promise<object>;
  setHeart: React.Dispatch<React.SetStateAction<boolean>>;

    heart: boolean;
  }



export const WishlistContext = createContext<WishlistContextType | null>(null)

function WishlistContextProvider({children}:{children:React.ReactNode}) {
const [ numOfWishlistItems,  setnumOfWishlistItems] = useState(0)
const [totalCartPrice, settotalCartPrice] = useState(0)
const [Product, setProduct] = useState([])
 const [heart, setHeart] = useState(false)


async function AddWishlistProduct(id:string){
  try {
       const data  = await addWishlist(id)
       console.log(data);
   
    gatProductWishlist()

      return data
  } catch (error) {
    console.log(error); 
     
  }

} 



async function  removeWishlistItems(id:string) {
try {
      const data = await deleteProWishlist(id)
     console.log(data);
     gatProductWishlist()

   
    setProduct(data.data)
    console.log(data);
    setHeart(false)
    return data

} catch (error) {
  console.log(error);
  
}
}







async function gatProductWishlist() {


try {
      const data = await getProWishlist()
    // console.log(data);
    setnumOfWishlistItems(data.count)
    settotalCartPrice(data.data.totalCartPrice)
    setProduct(data.data)
console.log(data);
return data
} catch (error) {
  console.log(error);
  
}

}
useEffect(function(){

    gatProductWishlist()
},[])




  return (
    <WishlistContext.Provider value={{

      numOfWishlistItems,
      totalCartPrice,
      Product,
      AddWishlistProduct,
      removeWishlistItems,
      heart,
      setHeart
   
    }
    }>    
    {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider
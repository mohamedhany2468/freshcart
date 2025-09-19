"use client"
import { getUserCart } from '@/CartActions/getUserCart'
import React, { createContext, useEffect, useState } from 'react'
// import { createContext } from 'vm'
// import { Provider } from '@/Provider';

import type { Cart, CartProduct } from '@/types/Cart.type';
import { addToCart } from '@/CartActions/addtoCart';
import { removeCartItemsAction } from '@/CartActions/removeCartItemsAction';
import { updateCartAction } from '@/CartActions/updateCartAction';
import { ClearCart } from '@/CartActions/clearCart';




export interface CartContextType {
  numOfCartItems: number;
  totalCartPrice: number;
  Product: CartProduct[];
  cartId: string;
  AddProduct: (id: string) => Promise<Cart>;
  removeCartItems: (id: string) => Promise<Cart>;
  updataCart: (id: string, count: number) => Promise<Cart>;
  clearAllCart: () => Promise<Cart>;
  afterPayment: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({children}:{children:React.ReactNode}) {
const [numOfCartItems, setnumOfCartItems] = useState(0)
const [totalCartPrice, settotalCartPrice] = useState(0)
const [Product, setProduct] = useState<CartProduct[]>([]);
const [cartId, setcartId] = useState<string>("");


async function AddProduct(id:string){
  try {
       const {data}  = await addToCart(id)
       console.log(data);
   
    gatProductCart()

      return data
  } catch (error) {
    console.log(error); 
     
  }

} 



async function  removeCartItems(id:string) {
  

try {
      const data = await removeCartItemsAction(id)
     console.log(data);
    setnumOfCartItems(data.numOfCartItems)
    settotalCartPrice(data.data.totalCartPrice)
    setProduct(data.data.products)
    console.log(data);
    
    return data

} catch (error) {
  console.log(error);
  
}
}
async function  updataCart(id:string , count:number) {
  

try {
      const data = await updateCartAction(id,count)
     console.log(data);
    setnumOfCartItems(data.numOfCartItems)
    settotalCartPrice(data.data.totalCartPrice)
    setProduct(data.data.products)

    
    return data

} catch (error) {
  console.log(error);
  
}
}
async function  clearAllCart() {
  

try {
      const data = await ClearCart()
     console.log(data);
    setnumOfCartItems(0)
    settotalCartPrice(0)
    setProduct([])

    
    return data

} catch (error) {
  console.log(error);
  
}
}

function afterPayment(){
     setnumOfCartItems(0)
    settotalCartPrice(0)
    setProduct([])
}



async function gatProductCart() {


try {
      const data:Cart = await getUserCart()
    // console.log(data);
    setnumOfCartItems(data.numOfCartItems)
    settotalCartPrice(data.data.totalCartPrice)
    setProduct(data.data.products)
console.log(data);
setcartId(data.cartId)

} catch (error) {
  console.log(error);
  
}

}
useEffect(function(){

    gatProductCart()
},[])




  return (
    <CartContext.Provider value={{

      numOfCartItems,
      totalCartPrice,
      Product,
      AddProduct,
      removeCartItems,
      updataCart,
      clearAllCart,
      cartId,
      afterPayment
    }
    }>    
    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
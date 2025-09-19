"use client"
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/CartContext'
import  imgLayout from"@/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
import React, { useContext } from 'react'
import type { Cart, CartProduct } from '@/types/Cart.type';
import Image from 'next/image'
import Link from 'next/link'
import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner'


type CartContextType = {
  Product: CartProduct[];
  totalCartPrice: number;
  removeCartItems: (id: string) => Promise<{ status: string; message?: string }>;
  updataCart: (id: string, count: number) => Promise<{ status: string; message?: string }>;
  clearAllCart: () => Promise<{ status: string; message?: string }>;
};

function Cart() {
  const cart = useContext(CartContext) as CartContextType;
  const { Product, totalCartPrice, removeCartItems, updataCart, clearAllCart } = cart;
async function handelRemoveItem(id:string) {
  
  const data = await removeCartItems(id)

  console.log(data);
  
  if(data.status == "success" ){
       toast.success(data.message ?? "Success to remove this product from cart",{
    position:"top-center"
  })
}else{
           toast.error("faild to add this product in cart",{
    position:"top-center"
  })
}
}
async function handelUpdata(id:string , count:number) {
  
  const data = await updataCart(id,count)

  console.log(data);
  
  if(data.status == "success" ){
       toast.success(data.message ?? "Success to update this product in cart",{
    position:"top-center"
  })
}else{
           toast.error("faild to add this product in cart",{
    position:"top-center"
  })
}
}
async function handelClear() {
  
  const data = await clearAllCart()

  console.log(data);
  
  if(data.message == "success" ){
       toast.success(data.message,{
    position:"top-center"
  })
}else{
           toast.error("faild to clear this product in cart",{
    position:"top-center"
  })
}
}

if(Product.length === 0 ){
  return <div className='flex h-[500px] justify-center items-center'>
 <h2 className='text-red-600 text-2xl font-bold'>No Data</h2>
    </div>

}

  return (
    <section>
 <div  className='relative'>
  <Image src={imgLayout} className='w-full md:h-[316px] h-[216px]  object-cover opacity-50' alt=''/>

<div className='absolute top-[50%] left-[50%] translate-x-[-50%] '>
  <h2 className='font-medium text-4xl relative z-20  text-center'>Cart</h2>
<div className=" text-sm mt-4">
  <ul className='flex'>
    <li className='font-bold'><Link href={"/home"} >Home</Link> <i className="fa-solid fa-angle-right me-1"></i></li>
    <li>Cart</li>
 
  </ul>
</div>
</div>
 </div>
 <div  className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 '>
<div className='flex justify-between gap-2 flex-nowrap md:flex-row  flex-col items-start'>
<div className='md:w-2/3 w-full '>

    <div className='bg-[#F9F1E7]  py-3  flex justify-between px-10'>
    <p className='font-bold'>Products</p>
  
    <p className='font-bold'>Quantity</p>
    </div>
  {Product.map(function(pro: CartProduct , idx:number){return(
      <div key={idx} className='border-b-1 border-black mt-5  gap-4 px-10 py-8 md:py-3 flex '>
        <div className='  gap-3  flex'>

    <Image src={pro.product?.imageCover} alt='' className='' width={200} height={200}/> 
        
        </div>
        <div className='flex justify-between  w-full md:flex-row flex-col'>
<div className='flex flex-col justify-center items-baseline text-center gap-y-3 mb-4'>
<p className='font-medium mt-3 '>{pro.product?.title}</p>
          <p className='font-medium'>

         <span className='font-bold text-[#B88E2F]'>Price:</span> {pro.price}EGP
          </p>
          <button className='bg-transparent text-red-700 font-medium  cursor-pointer flex' onClick={()=>{handelRemoveItem(pro.product.id)}}>
           <span>
            <MdDelete size={24}/>
            </span> 
            Remove</button>
        </div>
        <div  className='flex items-center md:justify-center'>
<Button className='rounded-4xl w-9 me-2'  onClick={()=>handelUpdata(pro.product.id,pro.count+1)}>
  +
</Button>
          <p className='font-medium'>{pro.count}</p>
 <Button className='rounded-4xl w-9 ms-2'  onClick={()=>handelUpdata(pro.product.id,pro.count-1)}>
  -
</Button>
        </div>
        </div>
    </div>)
    })}

</div>
     <div className='w-full md:w-1/3 bg-[#F9F1E7] p-5'>
     <h2 className='text-3xl font-bold text-center mb-10 '>Cart Totals</h2>
     <div className='flex justify-between mb-10'>

     <p className='text-xl font-medium font-mono'>Total</p>
     <p className='text-[#B88E2F] font-medium font-mono'>
{totalCartPrice}EGP
     </p>


     </div>
     <div className='text-center flex flex-col'>
     <Button  className='  text-black bg-[#F9F1E7] md:px-15 py-6 px-10 font-bold  border-1 hover:bg-black hover:text-white  border-black cursor-pointer mb-3  '>
      <Link   href={"/payment"}>Checkout</Link>
      </Button>
     <Button  className='   md:px-15 py-6 px-10 font-bold  border-1 hover:text-red-700  border-red-600 bg-red-700 cursor-pointer  hover:bg-[#F9F1E7] ' onClick={handelClear}>Clear All</Button>

     </div>
     </div>
</div>
 </div>

    </section>
  );
}

export default Cart;
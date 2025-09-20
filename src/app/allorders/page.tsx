import { getAllOrder } from '@/paymentAction/getAllOrder'
import { CartItem, Orders } from '@/types/AllOrder';
import Image from 'next/image';
import React from 'react'
import  imgLayout from"@/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
import Link from 'next/link';
async function AllOrder() {
const data = await getAllOrder()
console.log(data);


  
  return (
    <>
   <div  className='relative'>
  <Image src={imgLayout} className='w-full md:h-[316px] h-[216px] object-cover opacity-50' alt=''/>

<div className='absolute top-[50%] left-[50%] translate-x-[-50%] '>
  <h2 className='font-medium text-4xl relative z-20  text-center'>All Orders</h2>
<div className=" text-sm mt-4">
  <ul className='flex'>
    <li className='font-bold'><Link href={"/home"} >Home</Link> <i className="fa-solid fa-angle-right me-1"></i></li>

    <li>All Orders</li>
 
  </ul>
</div>
</div>
 </div>
    
    
    
    <div className='w-full md:w-[80%] mx-auto px-5 md:px-0'>
      {data.map(function(order: Orders, idx: number) {
        return <div key={idx}  className='bg-gray-50 p-5   rounded-xl mt-5 '>
<div className='border-b-2 mb-3 border-black flex flex-wrap '>

  {order.cartItems.map(function(items:CartItem, idx:number){
return <div key={idx} className=''> 
<div >
<div>

<Image src={items.product.imageCover} alt='' width={200} height={200}/>
<h2 className='font-medium line-clamp-1 w-1/2 text-center'>{items.product.title}</h2>
</div>
</div>
</div>
  } )}
  
</div>
<h2 className='font-bold text-amber-400 mb-2'>total Order Price : {order.totalOrderPrice}EGP</h2>
<h2 className='font-bold'>payment Method Type : {order.paymentMethodType}</h2>
        </div>
      })}
    </div>
    </>
  )
}

export default AllOrder
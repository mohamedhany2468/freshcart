"use client"

import  imgLayout from"@/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner'
import { WishlistContext, WishlistContextType } from '@/context/Wishlist'
import type { ProductType } from '@/types/Product.type';
  function Wishlist() {





const wishlist = useContext(WishlistContext) as WishlistContextType;
const { Product, removeWishlistItems } = wishlist;
console.log(Product);


async function handelRemoveItem(id:string) {
  try {
      const data = await removeWishlistItems(id)
       toast.success("Success to remove this product from Wishlist",{
    position:"top-center"
  })
  console.log(data);
  } catch (error) {
             toast.error("faild to add this product in Wishlist",{
    position:"top-center"
  })
  }

  
//   if(data.status == "success" ){

// }else{
//            toast.error("faild to add this product in cart",{
//     position:"top-center"
//   })
// }
}


  return (
    <section>
 <div  className='relative'>
  <Image src={imgLayout} className='w-full md:h-[316px] h-[216px]  object-cover opacity-50' alt=''/>

<div className='absolute top-[50%] left-[50%] translate-x-[-50%] '>
  <h2 className='font-medium text-4xl relative z-20  text-center'>Wishlist</h2>
<div className=" text-sm mt-4">
  <ul className='flex'>
    <li className='font-bold'><Link href={"/home"} >Home</Link> <i className="fa-solid fa-angle-right me-1"></i></li>
    <li>Wishlist</li>
 
  </ul>
</div>
</div>
 </div>
 <div  className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 '>
<div className='flex justify-between gap-2 flex-nowrap md:flex-row  flex-col items-start'>
<div className=' w-full '>

    <div className='bg-[#F9F1E7]  py-3  flex justify-between px-10'>
    <p className='font-bold'>Products</p>
  

    </div>
  {Product.map(function(pro: ProductType, idx:number){
        return(
          
              <div key={idx} className='border-b-1 border-black mt-5  gap-4 px-10 py-8 md:py-3 flex '>
        <div className='  gap-3  flex'>

    <Image src={pro.imageCover} alt='' className='' width={200} height={200}/> 
        
        </div>
        <div className='flex justify-between  w-full '>
<div className='flex flex-col justify-center items-baseline text-center gap-y-3 mb-4'>
<p className='font-medium mt-3 '>{pro.title}</p>
          <p className='font-medium'>

         <span className='font-bold text-[#B88E2F]'>Price:</span> {pro.price}EGP
          </p>
        <div  className='flex items-center md:justify-center'>
          <button className='bg-transparent text-red-700 font-medium  flex cursor-pointer'  onClick={()=>handelRemoveItem(pro.id)}>
           <span>
            <MdDelete size={24}/>
            </span> 
            Remove</button>
        </div>

         

        </div>
        </div>
    </div>
        )
    })}
 

</div>
    
</div>
 </div>

    </section>
  )
}

export default Wishlist
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductType } from '@/types/Product.type'
import Image from 'next/image'
import React from 'react'

function CradHomePro({product}:{product:ProductType}) {
  return (
   
      
     <div className="card bg-base-100  shadow-sm w-[49%] group md:w-[31%] lg:w-[24%] mt-5 relative">
  <figure>
    <Image
      src={product.imageCover}
      alt={product.title}  width={300} height={300} className='w-full'/>
  </figure>
  <div className="card-body bg-[#F4F5F7]">
    <h2 className="card-title line-clamp-1">{product.title}</h2>
    <p className='line-clamp-1 opacity-50'>{product.description}</p>
    <p className='text-[20px] font-[600] md:text-md'>{product.price}EGP</p>
   
  </div>
 <div className='absolute top-[100%] start-0 end-0 bottom-0 bg-neutral-950/70 flex justify-center items-center flex-wrap group-hover:top-0 duration-500 ease-in'>
<Button  className=' hidden text-[#B88E2F] bg-white md:px-15 py-2 px-10 font-bold hover:bg-white  cursor-pointer  group-hover:block left'>Add to Crat</Button>
 </div>
</div>

  )
}

export default CradHomePro
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductType } from '@/types/Product.type'
import Image from 'next/image'
import React from 'react'
import BtnToAddCart from '../BtnToAddCart/BtnToAddCart'
import BtnAddWishlist from '../btnAddWishlist/btnAddWishlist'
import Link from 'next/link'

function CradHomePro({product}:{product:ProductType}) {
  return (
   
      
     <div className="card bg-base-100  shadow-sm w-[49%] group md:w-[31%] lg:w-[24%] mt-5 relative">
       <Link href={`/productDetalies/${product.id}`}>
       
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
       </Link>
 <div className='absolute top-[100%] start-0 end-0 bottom-0 bg-neutral-950/70 flex justify-center items-center flex-wrap group-hover:top-0 duration-500 ease-in'>
  <div className=' sm:hidden flex justify-center items-center gap-2 mt-2'>

<BtnToAddCart id={product.id} btn={true} /> 
<BtnAddWishlist id={product.id} btn={false} /> 

       </div>
 </div>
</div>

  )
}

export default CradHomePro
import { Button } from '@/components/ui/button'
import Link from 'next/link';
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
// import Link from 'next/link'
// import { ProductType } from '@/types/Product.type'
import React from 'react'
import BtnToAddCart from '../BtnToAddCart/BtnToAddCart';
import btnAddWishlist from './../btnAddWishlist/btnAddWishlist';
import BtnAddWishlist from './../btnAddWishlist/btnAddWishlist';
import { ProductType } from './../../../types/Product.type';



function ProdectCard({product}:{product:ProductType}) {
  return (
   
<div   className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-10  p-3  ">

  <figure>

     <div className="relative group">
    <Image
      src={product.imageCover}
      alt=""  width={300} height={300} className='w-full'/>
       <div className='absolute  top-[100%] start-0 end-0 bottom-0 bg-neutral-950/70 flex justify-center items-center flex-wrap group-hover:top-0 duration-500 ease-in'>
       <div className='px-5 group-hover:flex items-center hidden'>

<BtnToAddCart id={product.id} btn={false} /> 
<BtnAddWishlist id={product.id} btn={false} /> 

       </div>

 </div>
</div>
  </figure>

  <div className="card-body bg-[#F4F5F7]">
  <Link href={`/productDetalies/${product.id}`}>

    <h2 className="card-title line-clamp-1">{product.title}</h2>
    <p className='line-clamp-1 opacity-50'>{product.description}</p>
    <p className='text-[20px] font-[600] md:text-md'>{product.price}EGP</p>
   
</Link>
  <div className=' sm:hidden flex justify-center items-center gap-2 mt-2'>

<BtnToAddCart id={product.id} btn={true} /> 
<BtnAddWishlist id={product.id} btn={false} /> 

       </div>
  </div>

    </div>
  )
}

export default ProdectCard
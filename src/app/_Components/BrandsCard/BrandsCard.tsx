import { Button } from '@/components/ui/button'
import Link from 'next/link';
// import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
// import Link from 'next/link'
// import { ProductType } from '@/types/Product.type'
import React from 'react'
import BtnToAddCart from '../BtnToAddCart/BtnToAddCart';
import btnAddWishlist from './../btnAddWishlist/btnAddWishlist';
import {  Daum } from '@/types/brads.type';



function BrandsCard({product}:{product:Daum}) {
  return (
   
<div   className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-10  p-3  ">

  <figure>

     <div className="relative group">
    <Image
      src={product.image}
      alt=""  width={300} height={300} className='w-full'/>

</div>
  </figure>

  <Link href={`/brandsDetalis/${product._id}`}>

  <div className="card-body bg-[#F4F5F7]">
    <h2 className="card-title line-clamp-1">{product.name}</h2>

   
  </div>
</Link>


    </div>
  )
}

export default BrandsCard
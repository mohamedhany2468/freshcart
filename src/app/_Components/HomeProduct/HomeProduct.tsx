import getAllProduct from '@/apis/allProduct'
import React from 'react'
import CradHomePro from '../CradHomePro/CradHomePro';
import Link from 'next/link'
import { ProductType } from '@/types/Product.type';

async function HomeProduct() {



   const data = await getAllProduct()

   const res = data.slice(30,38)
   console.log(res);
   
  return (
    <div className=''>

    <div className='flex flex-wrap justify-between md:justify-around lg:justify-between'>
        {res.map(function(pro:ProductType , idx:number){
            return <CradHomePro key={idx} product={pro}/>
        })}
    </div>
    <div className='mt-7  flex justify-center'>

    <Link href='/products' className='text-[#B88E2F] border-1 border-[#B88E2F] py-3 md:px-15 p-10 hover:bg-[#B88E2F]  hover:text-white'>Show More</Link>
    </div>
    </div>
  )
}

export default HomeProduct
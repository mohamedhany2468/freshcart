import React from 'react'


import getAllProduct from '@/apis/allProduct'
import ProdectCard from '../_Components/ProdectCard/ProdectCard'
import { ProductType } from '../../types/Product.type';
// import "./product.css"
import  imgLayout from"@/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop",
};
async function Product() {
const data = await getAllProduct()
console.log(data);

  return (
<>
<section  className=" ">
 <div  className='relative'>
  <Image src={imgLayout} className='w-full  md:h-[316px] h-[216px] object-cover opacity-50' alt=''/>

<div className='absolute top-[50%] left-[50%] translate-x-[-50%] '>
  <h2 className='font-medium text-4xl relative z-20  text-center'>Shop</h2>
<div className=" text-sm mt-4">
  <ul className='flex'>
    <li className='font-bold'><Link href={"/home"} >Home</Link> <i className="fa-solid fa-angle-right me-1"></i></li>
    <li>Shop</li>
 
  </ul>
</div>
</div>
 </div>
 <div className='h-[90px] w-full bg-[#F9F1E7] flex justify-center items-center'>
  <div className='flex items-center gap-2'>
   <h2 className='font-bold'>Show</h2>
   <p className='bg-white w-fit py-2 px-2'>40</p>

  </div>
 </div>
  <div className="px-5 md:px-0 w-full md:w-[80%] mx-auto ">
{/* 
  <div  >
  <MainSlider/>

  </div> */}
  <div className=" flex flex-wrap  ">
{data.map(function(product:ProductType , idx:number){return <ProdectCard key={idx} product={product}/>

})}
</div>
  </div>
</section>
</>

  )
}

export default Product
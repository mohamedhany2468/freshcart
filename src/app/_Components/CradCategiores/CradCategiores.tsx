// import { Category, DaumCategory } from '@/types/category.type';
import { DaumCategory } from '@/types/category.type';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CradCategiores({cate}: {cate:DaumCategory}) {
    // console.log(cate.cate._id);
    
  return (
  <div   className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-10  p-3  ">
  
  <Link href={`/categoriesDetalies/${cate._id}`}>
    <figure>
  
       <div className="relative group">
      <Image
        src={cate.image}
        alt=""  width={300} height={300} className='w-full h-[300px] object-cover'/>
    
  </div>
    </figure>
 
  
    <div className="card-body bg-[#F4F5F7]">
      <h2 className="card-title line-clamp-1 text-center">{cate.name}</h2>
      {/* <p className='line-clamp-1 opacity-50'>{}</p>
      <p className='text-[20px] font-[600] md:text-md'></p> */}
     
    </div>
      </Link>
  
  
      </div>
  )
}

export default CradCategiores
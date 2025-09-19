
// import { Image, Link } from 'lucide-react';
import React from 'react'
import  Image  from 'next/image';

import getSingleCategories from '@/apis/allSingleCategories';
// import { Image } from 'lucide-react';
async function CategoriesDetalies({params}: {params: {id: string}}) {
    const {id} = await params
console.log(id);

    const data = await getSingleCategories(id)
    console.log(data);
    
  return (
    <section >
       <div className='h-[90px] w-full bg-[#F9F1E7] flex px-24 items-center'>
 
  
<div className=" text-sm mt-4">
  <ul className='flex items-center'>
    <li > <span  className='opacity-50 me-1 '> Home</span> <i className="fa-solid fa-angle-right me-1"></i></li>
    <li> <span  className='opacity-50 me-1'> Categories</span> <i className="fa-solid fa-angle-right me-4"></i></li>
  <div className='h-[30px] w-[2px]  bg-black/50 me-3'></div>
 <p  className='font-bold'>{data.name}</p>
  </ul>
</div>
 </div>
      <div className='px-5 md:px-0 w-full md:w-[80%] mx-auto  mt-10  '>
<div className='justify-between  flex md:flex-row flex-col gap-5 items-center'>

        <div className=' w-full md:w-1/3 relative'>

<div className="carousel rounded-box  shadow-xl   ">
  <div className="carousel-item w-full ">
    <Image
      src={data.image}
      className="w-full"
 width={500} height={500}
      alt={data.name} />
  </div>




</div>
        </div>
        <div className= ' w-full md:w-[60%] '>
<h2 className=' font-bold text-4xl mb-3'>
    {data.name}
</h2>

{/* <p className='mb-10'>{data.description}</p> */}

        </div>
</div>




      </div>



    </section>
  )
}

export default CategoriesDetalies    
import getSingleBrands from '@/apis/getSingleBrands'
import Image from 'next/image';
import React from 'react'

async function page({params}:{params:{id:string}}) {
     const {id} = await params

     const data = await getSingleBrands(id)
     console.log(data);
     
  return (
  <section >
       <div className='h-[90px] w-full bg-[#F9F1E7] flex px-24 items-center'>
 
  
<div className=" text-sm mt-4">
  <ul className='flex items-center'>
    <li > <span  className='opacity-50 me-1 '> Home</span> <i className="fa-solid fa-angle-right me-1"></i></li>
    <li> <span  className='opacity-50 me-1'> Brands</span> <i className="fa-solid fa-angle-right me-4"></i></li>
  <div className='h-[30px] w-[2px]  bg-black/50 me-3'></div>
 <p  className='font-bold'>{data.name}</p>
  </ul>
</div>
 </div>
      <div className='px-5 md:px-0 w-full md:w-[80%] mx-auto  mt-10 mb-10 '>

<div   className=" w-full md:w-1/2 lg:w-1/3 mx-auto mt-10  p-3  ">

  <figure>

     <div className="relative group">
    <Image
      src={data.image}
      alt=""  width={300} height={300} className='w-full'/>

</div>
  </figure>



  <div className="card-body bg-[#F4F5F7]">
    <h2 className="card-title line-clamp-1"><span className="font-bold me-1 ">Name:</span>{data.name}</h2>
    <h2 className="card-title line-clamp-1"><span className="font-bold me-1">Slug:</span>{data.slug}</h2>
    <h2 className="card-title line-clamp-1"><span className="font-bold me-1">Id:</span>{data._id}</h2>

   
  </div>



    </div>




      </div>



    </section>
  )
}

export default page
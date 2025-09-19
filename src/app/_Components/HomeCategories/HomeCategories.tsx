
import React from 'react'




import getAllSubCategories from '@/apis/allCategories';
// import SweperCategories from '../SweperCategories/SweperCategories';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import  Image  from 'next/image';
async function HomeCategories() {

const data = await getAllSubCategories()
console.log(data);


  return (<>
  <div className='flex justify-center flex-wrap'>

  <div   className=" md:w-1/4  w-1/2  mt-10  p-3 text-center ">

     <Image src={data[0].image} alt={data[0].name} width={200} height={200}   className='rounded-xl shadow-lg w-full mb-3'   />


      <div>
      <p className='font-medium'>{data[0].name}</p>

      </div>
     
 
  
  </div>
  <div   className="   md:w-1/4  w-1/2   mt-10  p-3 text-center ">

     <Image src={data[9].image} alt={data[9].name} width={200}  height={200}  className='rounded-xl shadow-lg w-full mb-3' />

 
      <p className='font-medium'>{data[9].name}</p>

  
  </div>
  <div   className="  md:w-1/4  w-1/2 mt-10  p-3 text-center ">

     <Image src={data[1].image} alt={data[1].name} width={200}  className='rounded-xl shadow-lg w-full mb-3'  height={200}  />

      <p className='font-medium text-center'>{data[1].name}</p>

      
    
  
  </div>
  </div>



 

  </>

  )
}

export default HomeCategories
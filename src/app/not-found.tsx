import React from 'react'
import  Image  from 'next/image';
import ErrorImg from "@/assets/404.jpg"
function ErrorFoundPage() {
  return (
    <div className='w-full mt-10 md:w-[80%] mx-auto p-5 md:p-0'>
<Image src={ErrorImg} alt=''/>
    </div>
  )
}

export default ErrorFoundPage
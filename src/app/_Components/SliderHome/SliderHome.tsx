"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import  Image  from 'next/image';

import sliderHome1 from "@/assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg"
import sliderHome2 from "@/assets/luigi-mangiones-image-used-to-model-clothes-on-fast-fashion-website-1756926256804.webp"
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';


function SliderHome() {
  return (
                <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      modules={[Autoplay]}
      autoplay={
        {
            delay:3000,
            disableOnInteraction:false
        }
      }
   
    

   
>
   
      
      <SwiperSlide className=' h-screen lg:h-[716px] '><Image src={sliderHome1} className='  h-screen lg:h-[716px]   object-cover w-full relative ' alt=''/>
           <div className='lg:w-[643px] lg:h-[390px]   md:w-[441px] md:h-[230px]  w-[275px] h-[200px]   bg-[#FFF3E3] absolute bottom-20 right-3 md:p-0 p-4  md:bottom-10 md:right-16 z-30 flex justify-center items-center rounded-xl'>

        <div className='lg:w-[561px] lg:h-[344px]     md:w-[90%] md:h-[90%]  '>

<p className='text-[15px]font-sans'>New Arrival</p>
<h2 className='lg:text-[53px] md:text-3xl text-2xl font-[700] text-[#B88E2F] mb-5 md:mb-2  lg:leading-16'>
    Discover Our <br/> New Collection
</h2>
<p className='lg:mb-16 md:mb-6 mb-3 opacity-70 md:block hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<div>
    <Link href={"/products"} className='lg:py-5 lg:px-14 md:px-10 md:py-3 py-2  px-6 rounded-xl bg-[#B88E2F] text-white'> BUY Now</Link>
</div>
        </div>
     </div>
      </SwiperSlide>
      <SwiperSlide className='h-screen lg:h-[716px]'><Image src={sliderHome2} className='  h-screen lg:h-[716px]  object-cover w-full relative ' alt=''/>
       <div className='lg:w-[643px] lg:h-[390px]   md:w-[441px] md:h-[230px]  w-[275px] h-[200px]     bg-[#FFF3E3] absolute bottom-20 right-3 md:p-0 p-4  md:bottom-10 md:right-16 z-30 flex justify-center items-center rounded-xl'>

        <div className='lg:w-[561px] lg:h-[344px]      md:w-[90%] md:h-[90%]  '>

<p className='text-[15px] font-sans '>New Arrival</p>
<h2 className='lg:text-[53px] md:text-3xl text-2xl font-[700] text-[#B88E2F] md:mb-2 mb-5  lg:leading-16'>
    Discover Our <br/> New Collection
</h2>
<p className='lg:mb-16 md:mb-6 mb-3 opacity-70 hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<div>
    <Link href={"/products"} className='lg:py-5 lg:px-14 md:px-10 md:py-3 py-2  px-6 rounded-xl bg-[#B88E2F] text-white'> BUY Now</Link>
</div>
        </div>
     </div>
      </SwiperSlide>
      
     



    </Swiper>
   
  )
}

export default SliderHome
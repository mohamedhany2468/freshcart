"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import imgSlider1 from "@/assets/slider/slider-image-1.jpeg";
import imgSlider2 from "@/assets/slider/slider-image-2.jpeg";
import imgSlider3 from "@/assets/slider/slider-image-3.jpeg";
import imgSlider4 from "@/assets/slider/grocery-banner-2.jpeg";
import imgSlider5 from "@/assets/slider/grocery-banner.png";


import  Image  from 'next/image';
import { Autoplay } from 'swiper/modules';
function MainSlider() {
  return (<div className='py-5 flex'>

<div className='w-2/3'>

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
   
    className='rounded-xl h-[400px] '>
   
      
      <SwiperSlide className='rounded-xl'><Image src={imgSlider3} className='  h-[400px]  object-cover w-full rounded-xl' alt=''/></SwiperSlide>
      <SwiperSlide className='rounded-3xl'><Image src={imgSlider1} className=' h-[400px] object-cover w-full' alt=''/></SwiperSlide>
      <SwiperSlide className='rounded-3xl'><Image src={imgSlider2} className=' h-[400px] object-cover w-full' alt=''/></SwiperSlide>
     

    </Swiper>
</div>
    <div className='w-1/3  rounded-xl'>
<Image src={imgSlider4} className='h-[200px] object-cover  rounded-xl' alt='slider'/>
<Image src={imgSlider5} className='h-[200px] object-cover  rounded-xl' alt='slider'/>
    </div>
  </div>
  )
}

export default MainSlider
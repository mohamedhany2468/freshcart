
import React from 'react'
// import MainSlider from './_Components/MainSlider/MainSlider'
// import CategoriesSlider from './_Components/HomeCategories/HomeCategories'

import Link from 'next/link'
import HomeCategories from './_Components/HomeCategories/HomeCategories'
// import SliderProdut from './_Components/SliderProduct/SliderProdut'

import { FaAngleRight } from 'react-icons/fa';
import HomeProduct from './_Components/HomeProduct/HomeProduct'
import SliderHome from './_Components/SliderHome/SliderHome'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Home",
};
async function Home() {


  return(
    <section className={``}>
      <SliderHome/>
      <div className='px-5 md:px-0 w-full md:w-[80%] mx-auto  '>

      {/* <MainSlider/> */}



    <h2 className='text-4xl  font-bold text-center mt-10 ' >
      Categories 
      </h2>  
      <div>
        {/* <Link href='categories' className='text-orange-600 text-end'>All Categories</Link> */}
      
     
    <HomeCategories/>
      </div>
          <h2 className=' mb-5 font-bold text-center my-4 text-4xl'>
    Our  Porduct 
      </h2>  
<HomeProduct/>
      </div>

    </section>
  )
}

export default Home






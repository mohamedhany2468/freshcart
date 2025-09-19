"use client"

import React, { useContext } from 'react'
import Logo from "@/assets/slider/ChatGPT Image 4 سبتمبر 2025، 10_04_28 م.png"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/react'
import { PiSignOutBold } from 'react-icons/pi';
import { Badge } from "@/components/ui/badge"
import { CartContext } from '@/context/CartContext'
import { WishlistContext } from '@/context/Wishlist'
import { FaOpencart } from 'react-icons/fa6';
import { usePathname } from 'next/navigation'

import { WishlistContextType } from '@/context/Wishlist';

function Navbar() {
  const { data: session, status } = useSession();

  // CartContext غير معرف بنوع، لذلك نستخدم النوع المناسب
  const cart = useContext(CartContext) as { numOfCartItems: number };
  const wishlist = useContext(WishlistContext) as WishlistContextType | null;

  const numOfCartItems = cart?.numOfCartItems ?? 0;
  const numOfWishlistItems = wishlist?.numOfWishlistItems ?? 0;

  const pathname = usePathname();
  console.log(pathname);

  if (status === "unauthenticated") {
    return null;
  }

  return (


<div className="navbar bg-base-100 shadow-sm lg:px-20  z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

{status === "authenticated" &&  <>


      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>    
        <Link className={`${pathname === "/" ? "text-[#B88E2F]":""}`} href="/">Home</Link>
    </li>
 
    <li>
        <Link className={`${pathname === "/products" ? "text-[#B88E2F]":""}`}  href="/products">Shop</Link>
    </li>
    <li>
        <Link className={`${pathname === "/categories" ? "text-[#B88E2F]":""}`}  href="/categories">Categories</Link>
    </li>
    <li>
        <Link className={`${pathname === "/brands" ? "text-[#B88E2F]":""}`}  href="/brands">Brands</Link>
    </li>
      <li>
        <Link className={`${pathname === "/allorders" ? "text-[#B88E2F]":""}`}  href="/allorders">All Orders</Link>
    </li>
      </ul>

</>
}
    </div>
     {
          status === "authenticated" && <>
    {/* <Image src={Logo} className='w-[130px]' alt="kjfnuae"/> */}
    <h2 className="flex">
      <span>

      <FaOpencart size={30} className="text-[#B88E2F] me-1"/>
      </span>
    <span className="font-bold md:text-2xl text-md font-sans">Fresh Cart</span>
    </h2>
          
          </>}
           {
          status === "loading" && <h2>loading...</h2>}

  </div>
  <div className="navbar-center hidden lg:flex">
    {status === "authenticated" &&  <>
    
<ul className="bg-base-100 rounded-t-none  flex flex-row  font-medium p-2 gap-10">
   
    <li>    
        <Link className={`${pathname === "/" ? "text-[#B88E2F]":""}`}  href="/">Home</Link>
    </li>
  
    <li>
        <Link className={`${pathname === "/products" ? "text-[#B88E2F]":""}`}  href="/products">Products</Link>
    </li>
    <li>
        <Link className={`${pathname === "/categories" ? "text-[#B88E2F]":""}`}  href="/categories">Categories</Link>
    </li>
    <li>
        <Link className={`${pathname === "/brands" ? "text-[#B88E2F]":""}`}  href="/brands">Brands</Link>
    </li>
    <li>
        <Link className={`${pathname === "/allorders" ? "text-[#B88E2F]":""}`}  href="/allorders">All Orders</Link>
    </li>
      </ul>
    </>
    }
  </div>
  <div className="navbar-end">
    <ul className='flex gap-x-4'>

     

        {
          status === "authenticated" && <>
      <li>
        <AiOutlineSearch size={23}/>
      </li>
      <li className='relative'>
        <Link  href={"/wishlist"}>
                <Badge
          className="h-4 min-w-3 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2"
      
        >
       {numOfWishlistItems}
        </Badge>
        <MdFavoriteBorder size={23}/>
        </Link>
      </li>
      <li className='relative' >
          <Link href="/cart">
            <Badge
          className="h-4 min-w-3 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2"
      
        >
       {numOfCartItems}
        </Badge>
        <AiOutlineShoppingCart size={23}/>
          </Link>
      </li>
      <li >
        <PiSignOutBold className='hover:text-red-700' onClick={()=>signOut({
          callbackUrl:"/login"
        })} size={20}/>
      </li>
          </> 
        }
    </ul>
  </div>
</div>






  )
}

export default Navbar
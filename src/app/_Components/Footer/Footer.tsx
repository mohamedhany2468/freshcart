import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { Link } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { FaOpencart } from 'react-icons/fa6'
import { getMyToken } from '@/utilities/token'
async function Footer() {

  const token = await getMyToken()
  if(!token){
    return null
  }
  return (
 <footer className="footer sm:footer-horizontal bg-white border-t-1 border-black text-base-content p-10 mt-24 ">
<div className='me-5'>
    <h2 className="flex mb-10">
      <span>

      <FaOpencart size={30} className="text-[#B88E2F] me-1"/>
      </span>
    <span className="font-bold text-2xl font-sans">Fresh Cart</span>
    </h2>

<p>We will Send You a Link It on Your Phone To Download The App</p>
</div>
  <nav>
    <h6 className="footer-title">Links</h6>
    <Link href={"/home"} className="link link-hover     mb-1   font-medium">Home</Link>
    <Link href={"/products"} className="link link-hover mb-1  font-medium">Products</Link>
    <Link href={"/brads"} className="link link-hover mb-1 font-medium">Brads</Link>
    <Link href={"/categroies"} className="link link-hover font-medium">Categroies</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email address"
          className="input border-b-2 border-black  me-3 " />
        <button className="border-b-2 border-black ">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer
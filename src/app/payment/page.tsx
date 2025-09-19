"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartContext } from '@/context/CartContext'
import { cashPaymentAction } from '@/paymentAction/cashPaymentAction'
import { onlinePaymentAction } from '@/paymentAction/onlinePaymentAction'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'




type CartContextType = {
  cartId: string;
  afterPayment: () => void;
};

function Payment() {
  const router = useRouter();
  const { cartId, afterPayment } = useContext(CartContext) as CartContextType;
  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

async function cashOrder(){
    const values = {
        
    shippingAddress: {
      details: details.current?.value ?? "",
      phone: phone.current?.value ?? "",
      city: city.current?.value ?? ""
    }

    }

    try {
      const data = await cashPaymentAction(cartId, values) as { data: { status: string } };
      console.log(data);
      toast.success(data.data.status, {
        position: "top-center"
      });
      afterPayment();
      router.push("/allorders");
    } catch (error) {
      console.log(error);
  
      toast.error("faild" , {
        position: "top-center"
      });
      
    }
    console.log(values);
    
}
async function onlineOrder(){
    const values = {
        
    shippingAddress: {
      details: details.current?.value ?? "",
      phone: phone.current?.value ?? "",
      city: city.current?.value ?? ""
    }

    }

    try {
      const data = await onlinePaymentAction(cartId,values)
      console.log(data);
            toast.success(data.data.status,{
    position:"top-center"
  })
  afterPayment()
  if(data.data.status === "success"){
window.location.href = data.data.session.url
  }
    } catch (error) {
      console.log(error);
        //          toast.error(error.response.data.statusMsg,{
        //   position:"top-center"
        // })
      
    }
    console.log(values);
    
}
  return (
    <div className='w-full md:w-1/2 mx-auto  px-5 my-10'>
<div className=''>
<h1 className='font-bold md:text-4xl text-3xl text-center my-10'>Payment</h1>
{/* <label htmlFor="detalis"></label> */}
<Input type='text' ref={details}  placeholder='Detalis'  className='mb-3 w-full' />
<Input type='tel'  ref={phone}  placeholder='Phone'  className='mb-3' />
<Input type='text ' ref={city}  placeholder='City'  className='mb-8' />


<div>
    <Button onClick={cashOrder} className=' bg-[#B88E2F] hover:bg-white  border-1 border-solid border-[#B88E2F] hover:text-[#B88E2F]'>Cash Payment</Button>
    <Button className='ms-2 bg-[#B88E2F] hover:bg-white  border-1 border-solid border-[#B88E2F] hover:text-[#B88E2F]' onClick={onlineOrder}>Online Payment</Button>
</div>
</div>





    </div>
  )
}

export default Payment
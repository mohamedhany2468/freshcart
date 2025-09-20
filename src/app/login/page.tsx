"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, SchemaLoginType } from '@/Schema/login.schema';
import { registerSchema, SchemaRegisterType } from '@/Schema/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
// import { success } from './../../../node_modules/zod/v4/classic/schemas';



function Login() {
const [isLoading, setisLoading] = useState(false)


  const form = useForm <SchemaLoginType>(
    {
      defaultValues:{

    email:"",
    password:"",

      },
      resolver:zodResolver(loginSchema)
    }


  )
 async function handleForm(values:SchemaLoginType){
  setisLoading(true)
// try {

// const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)


//   console.log(data);
//   toast.success(data.message,{
//     position:"top-center"
//   })
// } catch (e) {


  
//     toast.error(e.response.data.message,{
//     position:"top-center"
//   })
// }

const res = await signIn("credentials",{
email:values.email,
password:values.password,
redirect:false,
callbackUrl:"/"

})
if (res?.ok) {
   toast.success("success",{
    position:"top-center"
  })
  setisLoading(false)
  window.location.href = res.url || "/"

}else{
   toast.error(res?.error,{
    position:"top-center"
  })
   setisLoading(false)
}
console.log(res);


  }
  return (
    <div className='w-full mx-auto md:w-1/2    px-20 md:px-0'>
        <h1 className='text-center font-bold md:text-4xl text-2xl mt-10 mb-10 text-[#B88E2F]'>Login</h1>




<Form {...form}>
  <form onSubmit={form.handleSubmit(handleForm)}>

  <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='email' placeholder='Enter Your email' className='' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  </form>
</Form>
<Form {...form}>
  <form onSubmit={form.handleSubmit(handleForm)}>

  <FormField
    control={form.control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='password' placeholder='Enter Your password' className='' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <Link href={"forgetPassword"} className='text-[#B88E2F] font-bold'>Forgot Password?</Link>
  <Button className='w-full bg-[#B88E2F] hover:bg-white hover:border-1 hover:text-[#B88E2F] hover:border-[#B88E2F] my-5'>{isLoading ?<i className="fa-solid fa-spinner fa-spin"></i>:"Login"}</Button>
  </form>
</Form>
<p className=''><span className='font-medium'>Do not have account?</span> <Link href="/register" className='font-bold text-[#B88E2F]'>Register Now</Link></p>





    </div>
  )
}

export default Login
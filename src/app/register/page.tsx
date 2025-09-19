"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerSchema, SchemaRegisterType } from '@/Schema/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
// import { success } from './../../../node_modules/zod/v4/classic/schemas';


function Register() {



  const router = useRouter()
const [isLoading, setisLoading] = useState(false)

  const form = useForm <SchemaRegisterType>(
    {
      defaultValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
      },
      resolver:zodResolver(registerSchema)
    }


  )
 async function handleForm(values:SchemaRegisterType){
  setisLoading(true)
try {

const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)


  console.log(data);
  toast.success(data.message,{
    position:"top-center"
  })
setisLoading(false)
  router.push("/login")
} catch (e) {



    toast.error("Account Already Exists",{
    position:"top-center"
  })
}  
setisLoading(false)
  }
  return (
    <div className='w-full mx-auto md:w-1/2   px-20 md:px-0 '>
        <h1 className='text-center font-bold md:text-4xl text-2xl mt-10 mb-10 text-[#B88E2F]'>Register Now</h1>


<Form {...form}>
  <form onSubmit={form.handleSubmit(handleForm)}>

  <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='text' placeholder='Enter Your Name' className='' {...field} />
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
  </form>
</Form>
<Form {...form}>
  <form onSubmit={form.handleSubmit(handleForm)}>

  <FormField
    control={form.control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='password' placeholder='Enter Your RePassword' className='' {...field} />
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
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='tel' placeholder='Enter Your Phone' className='' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

  <Button className='w-full bg-[#B88E2F] hover:bg-white hover:border-1 hover:text-[#B88E2F] hover:border-[#B88E2F] my-5'>{isLoading ?<i className="fa-solid fa-spinner fa-span"></i>:"Signup"}</Button>
  </form>
</Form>
<p className=''><span className='font-medium'>Have an account?</span> <Link href="/login" className='font-bold text-[#B88E2F]'>Login</Link></p>

    </div>
  )
}

export default Register
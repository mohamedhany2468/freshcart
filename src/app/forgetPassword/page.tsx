
"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import axios from 'axios'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';
function ForgetPassword() {
const [isLoading, setisLoading] = useState(false)

 const router = useRouter()
     const form = useForm(
        {
          defaultValues:{
    
        email:"",
   
    
          }})

           async function handleForm(values:object){
            setisLoading(true)
            console.log(values);
            

try {
const data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",values)
  console.log(data);
  toast.success("Reset code sent to your email",{
    position:"top-center"
  })
  setisLoading(false)
router.push("/codeReset")
} catch (e:unknown) {


  console.log(e);
  
    toast.error("There is no user registered with this email address ",{
    position:"top-center"
  })
  setisLoading(false)
}
           }
  return (
<>
    <div className='w-full mx-auto md:w-1/2  mt-20  px-20 md:px-0'>

    <div>


        <h1 className='text-center font-bold md:text-4xl text-2xl mt-10 mb-10 text-[#B88E2F]'>Forgot Password</h1>




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
<Button className='w-full bg-[#B88E2F] hover:bg-white hover:border-1 hover:border-[#B88E2F] hover:text-[#B88E2F] mt-5'>
    {isLoading?<i className="fa-solid fa-spinner fa-spin"></i>:
     "Send Code"
    }
   </Button>
  </form>
</Form>


    </div>





    </div>
</>
  )
}

export default ForgetPassword
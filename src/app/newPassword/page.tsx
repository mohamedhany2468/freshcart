
"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import axios from 'axios'
// import { TruckElectric } from 'lucide-react'
import { useRouter } from 'next/navigation'
function ForgetPassword() {
 const router = useRouter()
const [isLoading, setisLoading] = useState(false)

     const form = useForm(
        {
          defaultValues:{
    
        email:"",
        newPassword:"",
   
    
          }})

           async function handleForm(values:object){
            console.log(values);
            setisLoading(true)

try {
const data = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values)
  console.log(data);
  toast.success("Success",{
    position:"top-center"
  })
  setisLoading(false)

  router.push("/login")
} catch (e) {


  console.log(e);
  
    toast.error("There is no user with this email address ",{
    position:"top-center"
  })
  setisLoading(false)
}
           }
  return (
<>
    <div className='w-full mx-auto md:w-1/2   my-20   px-20 md:px-0'>
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
          <Input type='text' placeholder='Enter Your email' className='' {...field} />
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
    name="newPassword"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='password' placeholder='Enter Your newPassword' className='' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
<Button className='w-full bg-[#B88E2F] hover:bg-white hover:border-1 hover:border-[#B88E2F] hover:text-[#B88E2F] mt-5'>
    {isLoading?<i className="fa-solid fa-spinner fa-spin"></i>:
     "Reset Password"
    }
   </Button>
  </form>
</Form>







    </div>
</>
  )
}

export default ForgetPassword
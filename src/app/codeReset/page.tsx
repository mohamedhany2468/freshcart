
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
// import { useRouter } from 'next/router'
function ResetCode() {
 const router = useRouter()
const [isLoading, setisLoading] = useState(false)

     const form = useForm(
        {
          defaultValues:{
    
        resetCode:"",
   
    
          }})

           async function handleForm(values:object){
            console.log(values);
            setisLoading(true)

try {
const data = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",values)
  console.log(data);
  toast.success("Success",{
    position:"top-center"
  })
router.push("/newPassword")
  setisLoading(false)
} catch (e:unknown) {


  console.log(e);
  
    toast.error("Reset code is invalid or has expired",{
    position:"top-center"
  })
  setisLoading(false)
}
           }
  return (
<>
    <div className='w-full mx-auto md:w-1/2    px-20 md:px-0'>
        <h1 className='text-center font-bold md:text-4xl text-2xl mt-10 mb-10 text-[#B88E2F]'>Code Reset</h1>

<Form {...form}>
  <form onSubmit={form.handleSubmit(handleForm)}>
  <FormField
    control={form.control}
    name="resetCode"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input type='text' placeholder='Enter Your Code' className='' {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
<Button className='w-full bg-[#B88E2F] hover:bg-white hover:border-1 hover:border-[#B88E2F] hover:text-[#B88E2F] mt-5'>
    {isLoading?<i className="fa-solid fa-spinner fa-spin"></i>:
     "Verify Code"
    }
   </Button>
  </form>
</Form>







    </div>
</>
  )
}

export default ResetCode
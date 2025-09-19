import { error } from 'console'
import * as z from 'zod'



export const loginSchema = z.object({
       
    email:z.email("invalied email"),
    password:z.string().nonempty('This Field is required password').min(6,"min lenght 6").max(20,"max lenght 20"),
   
})


export type SchemaLoginType = z.infer< typeof loginSchema>
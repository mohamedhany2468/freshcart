import { error } from 'console'
import * as z from 'zod'



export const registerSchema = z.object({
        name: z.string().nonempty('This Field is required name').min(3,"min 3").max(15,"max 15"),
    email:z.email("invalied email"),
    password:z.string().nonempty('This Field is required password').min(6,"min lenght 6").max(20,"max lenght 20"),
    rePassword:z.string().nonempty('This Field is required password').min(6,"min lenght 6").max(20,"max lenght 20"),
    phone:z.string().regex(/^01[0125][0-9]{8}$/,"invalied number")
}).refine(function(object){
    if(object.password === object.rePassword){
        {

            return true
        }
        return false
    }} , {
        path:["rePassword"],

        error:"passwords do not match"
    }
)

export type SchemaRegisterType = z.infer< typeof registerSchema>
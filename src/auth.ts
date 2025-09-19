
import {AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { email } from "zod"
// import { email } from "zod"
import { jwtDecode } from "jwt-decode";
import {signIn} from "next-auth/react"
export const authOptions:AuthOptions ={

pages:{
      signIn:"/login"
},

providers:[
     CredentialsProvider({  
           name: 'Credentials',

     credentials: {
      email: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },

    authorize: async function (credentials) {


          const res = await fetch(`${process.env.APIS}/auth/signin`, {
        method:'POST',
        body: JSON.stringify({
            email: credentials?.email,
            password:credentials?.password
        }),
        headers: { "Content-Type": "application/json" }
      })
      const payLoad = await res.json()

console.log(payLoad);

  if (payLoad.message === "success") {

     const {id}:{id:string} = jwtDecode(payLoad.token)
      return{
            id:id,
            user:payLoad.user,
            token:payLoad.token
      }     
  }
  throw new Error(payLoad.message) 


    }
     })
],


callbacks:{
        async jwt({ token, user}) {



            if (user) {
              token.user =user?.user
              token.token = user?.token
            }
      return token
    },


       async session({ session, token }) {
            if (token) {
                  session.user = token?.user
            }
      return session
    },
}
}
export default async function getSingleBrands(id:string){
  
const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)

const {data} = await res.json()
console.log(data);
return data 

}
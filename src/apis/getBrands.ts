export default async function getBrands(){
  
const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands")

const {data} = await res.json()
console.log(data);
return data 

}
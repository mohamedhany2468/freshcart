export default async function getAllProduct(){
  
const res = await fetch("https://ecommerce.routemisr.com/api/v1/products")

const {data} = await res.json()
console.log(data);
return data 

}
export default async function getAllSubCategories(){
  
const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")

const {data} = await res.json()
console.log(data);
return data
}
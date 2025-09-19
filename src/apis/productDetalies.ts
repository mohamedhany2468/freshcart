export default async function productDetalies(id:string){
  
const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

const {data} = await res.json()
console.log(data);
return data 

}
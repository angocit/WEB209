import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import products from '../components/products'
import { IProduct, formType } from '../interface/product'
import { AddProduct, GetAllProduct, updateProduct } from '../service/product'
type Props = {
    children: React.ReactNode
}
export const productCT = createContext({} as any)

const ProductContext = ({children}: Props) => {
    const [products,setProducts] = useState<IProduct[]>([])
    useEffect(()=>{
        (async ()=>{
           const data = await GetAllProduct()
           setProducts(data)
        })()
     },[]) 
     const onDelete = async(id:number|string)=>{
       try {
         if (confirm("Are you sure you want to delete")){
           const {data}= await axios.delete(`http://localhost:3000/products/${id}`)
           alert("Xóa thành công")
           setProducts(products.filter((product:IProduct)=>product.id!==id))
         }
         } catch (error) {
         
       }
     }
     const onSubmitUpdate =async(formData:formType,id:string|number)=>{
       try {
           const data = await updateProduct(formData,id)
           const newproducts = products.map(product=>(product.id==id)?data:product)
           setProducts(newproducts)
           alert("Cập nhật thành công")
         } catch (error) {
         
       }       
   }
     const onAdd = async (dataproduct:formType)=>{
       try {
         const data = await AddProduct(dataproduct)
         setProducts([...products,data])
         alert('Thêm mới thành công')
       } catch (error) {
         console.log(error);
         
       }      
     }
  return (
    <productCT.Provider value={{products,onDelete,onAdd,onSubmitUpdate}}>{children}</productCT.Provider>
  )
}

export default ProductContext
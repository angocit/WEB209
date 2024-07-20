import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct,FormData } from '../interface/product'
import { GetAllProducts, DeleteProductById, AddProduct, UpdateProduct } from '../services/product'

type Props = {
    children:React.ReactNode
}
export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
const [products,setProduct]=useState<IProduct[]>([])
  const navigate = useNavigate()
  useEffect(()=>{
      (async ()=>{
         const data = await GetAllProducts()    
         setProduct(data)     
      })()
  },[])
  const deleteProduct = async (id:string|number)=>{
    if (confirm('Bạn chắc chứ?')){
      try {
          const data = await DeleteProductById(id)
          alert('Xóa thành công')
          const newproducts = products.filter(product=>product.id !==id)
          setProduct(newproducts)
      } catch (error) {
        console.log(error);        
      }
    }
  }
  const onAdd = async (data:FormData)=>{
    try {
        const product = await AddProduct(data)
        alert('Thêm mới thành công')
        setProduct([...products,product])
        navigate('/dashboard/product-list')
    } catch (error) {
      
    }
  }
  const onUpdate = async (data:FormData,id:number|string)=>{
    try {
        const dataproduct = await UpdateProduct(data,id)
        alert('Cập nhật thành công')
        // setProduct([...products,product])
        const newproducts = products.map(product=>(product.id==id)?dataproduct:product)
        setProduct(newproducts)
        navigate('/dashboard/product-list')
    } catch (error) {
      
    }
  }
  return (
    <ProductCT.Provider value={{products,onUpdate,onAdd,deleteProduct}}>
        {children}
    </ProductCT.Provider>
  )
}

export default ProductContext
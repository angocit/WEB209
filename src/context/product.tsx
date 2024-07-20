import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct,FormData } from '../interface/product'
import { GetAllProducts, DeleteProduct, AddProduct, UpdateProduct } from '../services/product'

type Props = {
    children: React.ReactNode
}
export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
    const [products,setProduct] = useState<IProduct[]>([])
    const navigate = useNavigate()
    useEffect(()=>{
      (async()=>{
          const data = await GetAllProducts()
          setProduct(data)       
      })()
    },[])
    const onDelete =async (id:number|string)=>{
      if(confirm('Bạn chắc chứ?')){
      try {
          const product =await DeleteProduct(id)
          alert('Xóa thành công')
          const newproducts = products.filter(product=>product.id!==id)
          setProduct(newproducts)
      } catch (error) {
        
      }
    }
    }
    const onAdd = async (data:FormData)=>{
      try {
          const product = await AddProduct(data)
          alert('Thêm mới thành công')
          setProduct([...products,product])
          navigate('/product-list')
      } catch (error) {
        
      }
    }
    const onUpdate = async (data:FormData,id:number|string)=>{
      try {
          const resdata = await UpdateProduct(data,id)
          alert('Cập nhật thành công')
          const newproduct = products.map(product=>(product.id==id)?resdata:product)
          setProduct(newproduct)
          navigate('/product-list')
      } catch (error) {
        
      }
    }
  return (
    <ProductCT.Provider value={{products,onDelete,onAdd,onUpdate}}>{children}</ProductCT.Provider>
  )
}

export default ProductContext
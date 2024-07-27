import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct,FormData } from '../interface/product'
import { GetAllProducts, DeleteProduct, AddProduct, UpdateProduct } from '../services/product'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

type Props = {
    children: React.ReactNode
}
export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
    // const [products,setProduct] = useState<IProduct[]>([])
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {data:products,isLoading,isError} = useQuery({
      queryKey:['products'],
      queryFn: async ()=>{
        const product = await GetAllProducts()
        return product
      }
    })
    const mutations = useMutation({
      mutationFn: async (data:FormData)=>{
          AddProduct(data)
      },
      onSuccess: ()=>{
        alert('Thêm mới thành công')
        // setProduct([...products,product])
        queryClient.invalidateQueries({ queryKey: ['products'] })
        navigate('/product-list')
      }
    })
    const onDelete =async (id:number|string)=>{
      if(confirm('Bạn chắc chứ?')){
      try {
          const product =await DeleteProduct(id)
          alert('Xóa thành công')
          // const newproducts = products.filter(product=>product.id!==id)
          // setProduct(newproducts)
      } catch (error) {
        
      }
    }
    }
    const onAdd = async (data:FormData)=>{
      mutations.mutate(data)
     }
    const onUpdate = async (data:FormData,id:number|string)=>{
      try {
          const resdata = await UpdateProduct(data,id)
          alert('Cập nhật thành công')
          // const newproduct = products.map(product=>(product.id==id)?resdata:product)
          // setProduct(newproduct)
          navigate('/product-list')
      } catch (error) {
        
      }
    }
  return (
    <ProductCT.Provider value={{products,onDelete,onAdd,onUpdate,isLoading}}>{children}</ProductCT.Provider>
  )
}

export default ProductContext
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
    const deleteMutation = useMutation({
      mutationFn: async (id:number|string)=>{
         await DeleteProduct(id)
      },
      onSuccess: ()=>{
        alert('Xóa thành thành công')
        // setProduct([...products,product])
        queryClient.invalidateQueries({ queryKey: ['products'] })
        // navigate('/product-list')
      }
    })
    const UpdateMutation = useMutation({
      mutationFn: async (data:{productData:FormData,id:number|string})=>{
         await UpdateProduct(data.productData,data.id)
      },
      onSuccess: ()=>{
        alert('Cập nhật thành thành công')
        queryClient.invalidateQueries({ queryKey: ['products'] })
        navigate('/product-list')
      }
    })
    const onDelete =async (id:number|string)=>{
      if(confirm('Bạn chắc chứ?')){
        deleteMutation.mutate(id)
      }
    }
    const onAdd = async (data:FormData)=>{
      mutations.mutate(data)
     }
    const onUpdate = async (data:FormData,id:number|string)=>{
      UpdateMutation.mutate({productData:data,id:id})
    }
  return (
    <ProductCT.Provider value={{products,onDelete,onAdd,onUpdate,isLoading}}>{children}</ProductCT.Provider>
  )
}

export default ProductContext
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct,FormData } from '../interface/product'
import { GetAllProducts, DeleteProductById, AddProduct, UpdateProduct } from '../services/product'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

type Props = {
    children:React.ReactNode
}
export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
// const [products,setProduct]=useState<IProduct[]>([])
  const navigate = useNavigate()
  // useEffect(()=>{
  //     (async ()=>{
  //        const data = await GetAllProducts()    
  //        setProduct(data)     
  //     })()
  // },[])
  const queryclient = useQueryClient()
  const {data:products,isLoading,isError} = useQuery({
    queryKey:['products'],
    queryFn: async ()=>{
      const products = await GetAllProducts() 
      return products
    }
  })
  const addmutation = useMutation({
    mutationFn:async (data:FormData)=>{
      await AddProduct(data) 
    },
    onSuccess:()=>{
      alert('Thêm mới thành công')
      navigate('/dashboard/product-list')
      queryclient.invalidateQueries({queryKey:['products']})
    }
  })
  const deletemutation = useMutation({
    mutationFn:async (id:number|string)=>{
      await DeleteProductById(id) 
    },
    onSuccess:()=>{
      alert('Xóa thành công')
      queryclient.invalidateQueries({queryKey:['products']})
    }
  })
  const deleteProduct = async (id:string|number)=>{
    if (confirm('Bạn chắc chứ?')){
      deletemutation.mutate(id)
    }
  }
  const updatemutation = useMutation({
    mutationFn:async (item:{data:FormData,id:number|string})=>{
      await UpdateProduct(item.data,item.id)
    },
    onSuccess:()=>{
      alert('Cập nhật thành công')
      navigate('/dashboard/product-list')
      queryclient.invalidateQueries({queryKey:['products']})
    }
  })
  const onAdd = async (data:FormData)=>{
    addmutation.mutate(data)
    // try {
    //     const product = await AddProduct(data)
    //     alert('Thêm mới thành công')
    //     // setProduct([...products,product])
    //     navigate('/dashboard/product-list')
    // } catch (error) {
      
    // }
  }
  const onUpdate = async (data:FormData,id:number|string)=>{
    updatemutation.mutate({data:data,id:id})
  }
  return (
    <ProductCT.Provider value={{products,onUpdate,onAdd,deleteProduct,isLoading}}>
        {children}
    </ProductCT.Provider>
  )
}

export default ProductContext
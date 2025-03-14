import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {
  const {register,handleSubmit,reset} = useForm<IProduct>()
  const params = useParams()
  const query = useQuery<IProduct>({
    queryKey:['product',params.id],
    queryFn:async()=>{
      try {
          const {data:product} = await axios.get(`http://localhost:3000/products/${params.id}`)
          reset(product)
          return product
        } catch (error) {
        
      }
    }
  })
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: async (data:IProduct)=>{
        try {
            const {data:product} = await axios.put(`http://localhost:3000/products/${params.id}`,data)
            return product
          } catch (error) {
          console.log(error);
          
        }
    },
    onSuccess: (data)=>{    
        alert("Cập nhật thành công")
        navigate("/dashboard/product-list")
    }
  })
  const onSubmit = (productData:IProduct)=>{
    mutation.mutate(productData)
    // console.log(productData);
    
  }
  if (query.isLoading){
    return <>Đang tải</>
  }
  return (
    <div className='w-full'>
      <h1>Cập nhật sản phẩm</h1>
      <form className='flex flex-col [&_input]:border gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")}/>
        <input type='text' {...register("image")}/>
        <input type='text' {...register("price")}/>
        <button>Cập nhật</button>
      </form>
    </div>
  )
}

export default ProductEdit
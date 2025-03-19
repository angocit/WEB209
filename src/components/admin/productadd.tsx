import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { createData } from '../../services/data'

const ProductAdd = () => {
  const {register,handleSubmit} = useForm<IProduct>()
  const mutation = useMutation({
    mutationFn: async (data:IProduct)=>{
        try {
            const {data:product} = await createData<IProduct>({route:"products",data:data})
            return product
          } catch (error) {
          console.log(error);
          
        }
    },
    onSuccess: (data)=>{
      console.log(data);      
        alert("Thêm mới thành công")
    }
  })
  const onSubmit = (productData:IProduct)=>{
    mutation.mutate(productData)
  }
  return (
    <div className='w-full'>
      <h1>Thêm mới sản phẩm</h1>
      <form className='flex flex-col [&_input]:border gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")}/>
        <input type='text' {...register("image")}/>
        <input type='text' {...register("price")}/>
        <button>Thêm mới</button>
      </form>
    </div>
  )
}

export default ProductAdd
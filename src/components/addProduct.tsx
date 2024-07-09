import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from '../interface/product';
type Props = {
    onAdd:(data:FormData)=>void
}

const AddProduct = ({onAdd}: Props) => {
    const {register,handleSubmit,reset}= useForm<FormData>()
    const onSubmit =(product:FormData)=>{
        onAdd(product)
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
         <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
         <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
         <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
         <input type='text' {...register("category")} placeholder='Danh mục'/>
         <button type='submit'>Thêm mới sản phẩm</button>
      </form>
    </>
  )
}

export default AddProduct
import React from 'react'
import { formType, IProduct } from '../interface/product'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type Props = {
    title:string,
    onAdd:(data:formType)=>void
}
const AddProduct = ({title,onAdd}: Props) => {
    const {register,handleSubmit,reset} = useForm<formType>()
    const onSubmit =async(formData:any)=>{
      onAdd(formData)  
      reset()    
    }
  return (
    <>
    {title}
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
        <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
        <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
        <input type='text' {...register("category")} placeholder='Danh mục'/>
        <button type='submit'>Thêm mới</button>  
    </form>  
    </>
  )
}

export default AddProduct
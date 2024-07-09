import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from '../interface/product'
import axios from 'axios'
type Props = {
    // products:IProduct[],
    // setProduct:(data:IProduct[])=>void
    onAdd:(data:FormData)=>void
}

const Addproduct = ({onAdd}: Props) => {
    const {register,handleSubmit,reset} = useForm<FormData>()
    const onSubmit =(product:FormData)=>{
        onAdd(product)
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")}/>
        <input type='text' {...register("image")}/>
        <input type='text' {...register("category")}/>
        <input type='number' {...register("price")}/>
        <button type='submit'>Thêm mới sản phẩm</button>
    </form>
    </>
  )
}

export default Addproduct
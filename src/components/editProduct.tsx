import React from 'react'
import { useForm } from 'react-hook-form'
import { FormData, IProduct } from '../interface/product'
type Props = {
    product:IProduct,
    setFlag:(value:number|string) => void,
    onUpdate:(data:FormData)=>void
}

const EditProduct = ({product,setFlag,onUpdate}: Props) => {
    const {register,handleSubmit,reset}= useForm<FormData>({
        defaultValues:{
            name:product.name,
            image:product.image,
            price:product.price,
            category:product.category
        }
    })
const onSubmit = (data:FormData)=>{
    onUpdate(data)
} 
  return (
    <>
    <div id='popup'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
            <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
            <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
            <input type='text' {...register("category")} placeholder='Danh mục'/>
            <button type='submit'>Cập nhật</button>
            <button type='button' onClick={()=>setFlag(0)}>Hủy</button>
            </form>
            </div>
    </>
  )
}

export default EditProduct
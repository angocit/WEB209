import React from 'react'
import { IProduct } from '../interface/product'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type Props = {
    title:string,
    products:IProduct[],
    setProducts:(data:IProduct[])=>void
}
type formType = Pick<IProduct,'name'|'price'|'image'|'category'>
const AddProduct = ({title,products,setProducts}: Props) => {
    const {register,handleSubmit,reset} = useForm<formType>()
    const onSubmit =async(formData:any)=>{
        // console.log(data);
        try {
          const {data} = await axios.post("http://localhost:3000/products",formData) 
          setProducts([...products,data])
          reset()
        } catch (error) {
          console.log(error);
          
        }        
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
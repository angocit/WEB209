import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interface/type'
import axios from 'axios'

const Add = () => {
    const {register,handleSubmit} = useForm<IProduct>()
    const onSubmit = async (productdata:IProduct)=>{
        try {
            await axios.post("http://localhost:4000/products",productdata)
            alert("Thêm thành công")
        } catch (error) {
                console.log(error);                
        }
    }
  return (
    <div>
            <h1>Thêm mới sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 [&_input]:border'>
                <input type='text' {...register("name")} placeholder='Tên SP'/>
                <input type='text' {...register("images")} placeholder='Ảnh SP'/>
                <input type='text' {...register("price")} placeholder='Giá SP'/>
                <button>Thêm mới</button>
            </form>
    </div>
  )
}

export default Add
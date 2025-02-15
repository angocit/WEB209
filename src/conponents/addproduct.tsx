import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interface/product'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { api } from '../config/axios'

type Props = {}

const AddProduct = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<IProduct>()
    const navigate = useNavigate()
    const addproduct = async (data:IProduct)=>{
        try {
            const  {data:product} = await api.post(`products`,data)
            alert('Thêm mới thành công')
            navigate('/')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-4'>
        <h1 className='text-red-700 text-center font-bold text-[24px]'>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(addproduct)} className='flex p-4 flex-col gap-2 [&_input]:border [&_input]:px-4 [&_input]:py-1'>
            <input {...register("name",{required:true,minLength:6})} type='text' placeholder='Tên sản phẩm'/>
            {(errors.name?.type==="required")&&<span className='text-red-600 text-[12px]'>Tên không để trống</span>}
            {(errors.name?.type==="minLength")&&<span className='text-red-600 text-[12px]'>Tên phải {'>'} 6 kí tự</span>}
            <input {...register("image")} type='text' placeholder='Ảnh sản phẩm'/>
            {/* <input {...register("price",{pattern:/^\d*$/,required:true,min:10000})} type='text' placeholder='Giá sản phẩm'/> */}
            <input {...register("price",{validate:(value:any)=>!isNaN(value),required:true})} type='text' placeholder='Giá sản phẩm'/>
            {(errors.price)&&<span className='text-red-600 text-[12px]'>Giá phải là số và {'>'} 10000</span>}
            <div className='flex justify-center'>
            <button className='bg-green-900 text-white px-4 py-2'>Thêm mới</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
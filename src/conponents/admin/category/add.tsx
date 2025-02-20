import React from 'react'
import { ICategory, IProduct } from '../../../interface/product'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../config/axios'

const AddCategory = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<ICategory>()
    const navigate = useNavigate()
    const addproduct = async (data:ICategory)=>{
        try {
            const  {data:product} = await api.post(`categorys`,data)
            alert('Thêm mới thành công')
            navigate('/')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-4'>
        <h1 className='text-red-700 text-center font-bold text-[24px]'>Thêm mới danh mục</h1>
        <form onSubmit={handleSubmit(addproduct)} className='flex p-4 flex-col gap-2 [&_input]:border [&_input]:px-4 [&_input]:py-1'>
            <input {...register("name",{required:true,minLength:6})} type='text' placeholder='Tên danh mục'/>
            {(errors.name?.type==="required")&&<span className='text-red-600 text-[12px]'>Tên không để trống</span>}
            {(errors.name?.type==="minLength")&&<span className='text-red-600 text-[12px]'>Tên phải {'>'} 6 kí tự</span>}
            <input {...register("image")} type='text' placeholder='Ảnh danh mục'/>
            {/* <input {...register("price",{pattern:/^\d*$/,required:true,min:10000})} type='text' placeholder='Giá sản phẩm'/> */}
            <div className='flex justify-center'>
            <button className='bg-green-900 text-white px-4 py-2'>Thêm mới</button>
            </div>
        </form>
    </div>
  )
}

export default AddCategory
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { ProductCT } from '../context/product'

const Addproduct = () => {
    const {onAdd} = useContext(ProductCT)
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>()
    const onsubmit = (data:FormData)=>{
        onAdd(data)
    }
  return (
    <>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onsubmit)} className='flex gap-3 flex-col max-w-[600px] mx-auto'>
            <input type='text' placeholder='Tên sản phẩm' {...register('name',{required:true,minLength:6})}/>
            {(errors.name) && <span className='text-red-600 text-[12px]'>Tên không để trống và lớn hơn 6 kí tự</span>}
            <input type='text' placeholder='Ảnh sản phẩm' {...register('image')}/>
            <input type='text' placeholder='Giá sản phẩm' {...register('price',{required:true,pattern:/^\d*$/})}/>
            {(errors.price) && <span className='text-red-600 text-[12px]'>Giá là số không âm</span>}
            <input type='text' placeholder='Danh mục' {...register('category',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
            {(errors.category) && <span className='text-red-600 text-[12px]'>Email không đúng định dạng</span>}
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default Addproduct
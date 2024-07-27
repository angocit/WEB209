import React, { useContext } from 'react'
import {FormData} from '../interface/product'
import { useForm } from 'react-hook-form'
import { ProductCT } from '../context/product'

const Addproduct = () => {
    const {onAdd} = useContext(ProductCT)
    const {register,handleSubmit,formState:{errors}}=useForm<FormData>()
    const onSubmit = (data:FormData)=>{
        onAdd(data)
    }
  return (
    <>
        <h1>Thên mới sản phẩm</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('name',{required:true,minLength:6})} placeholder='Tên sản phẩm' />
            {(errors.name) && <span className='text-red-700 text-[12px]'>Tên không để trống và lớn hơn 6 kí tự</span>}
            <input type='text' {...register('image')} placeholder='Ảnh sản phẩm' />
            <input type='text' {...register('price',{required:true,pattern:/^\d*$/})} placeholder='Giá' />
            {(errors.price) && <span className='text-red-700 text-[12px]'>Giá phải là số và không âm</span>}
            <input type='text' {...register('category',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})} placeholder='Danh mục' />
            {(errors.category) && <span className='text-red-700 text-[12px]'>Email không đúng định dạng</span>}
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default Addproduct
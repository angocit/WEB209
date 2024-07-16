import React from 'react'
import {FormData} from '../interface/product'
import { useForm } from 'react-hook-form'
type Props = {
    onAdd:(data:FormData) => void
}

const Addproduct = ({onAdd}: Props) => {
    const {register,handleSubmit}=useForm<FormData>()
    const onSubmit = (data:FormData)=>{
        onAdd(data)
    }
  return (
    <>
        <h1>Thên mới sản phẩm</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('name')} placeholder='Tên sản phẩm' />
            <input type='text' {...register('image')} placeholder='Ảnh sản phẩm' />
            <input type='number' {...register('price')} placeholder='Giá' />
            <input type='text' {...register('category')} placeholder='Danh mục' />
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default Addproduct
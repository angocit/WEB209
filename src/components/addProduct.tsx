import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { ProductCT } from '../context/product'

const Addproduct = () => {
    const {onAdd} = useContext(ProductCT)
    const {register,handleSubmit} = useForm<FormData>()
    const onsubmit = (data:FormData)=>{
        onAdd(data)
    }
  return (
    <>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input type='text' placeholder='Tên sản phẩm' {...register('name')}/>
            <input type='text' placeholder='Ảnh sản phẩm' {...register('image')}/>
            <input type='number' placeholder='Giá sản phẩm' {...register('price')}/>
            <input type='text' placeholder='Danh mục' {...register('category')}/>
            <button type='submit'>Thêm mới</button>
        </form>
    </>
  )
}

export default Addproduct
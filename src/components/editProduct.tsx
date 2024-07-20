import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { useParams } from 'react-router-dom'
import { GetProductByID } from '../services/product'
import { ProductCT } from '../context/product'

const EditProduct = () => {
    const {onUpdate} = useContext(ProductCT)
    const {register,handleSubmit,reset}=useForm<FormData>()
    const param = useParams()
    useEffect(()=>{
        (async ()=>{
            const product = await GetProductByID(param?.id as number|string)
            reset({
                name: product.name,
                image: product.image,
                price: product.price,
                category: product.category
            })
        })()
    },[])
    const onSubmit = (data:FormData)=>{
        onUpdate(data,param?.id as number|string)
    }
  return (
    <>
        <h1>Cập nhật sản phẩm</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('name')} placeholder='Tên sản phẩm' />
            <input type='text' {...register('image')} placeholder='Ảnh sản phẩm' />
            <input type='number' {...register('price')} placeholder='Giá' />
            <input type='text' {...register('category')} placeholder='Danh mục' />
            <button type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default EditProduct
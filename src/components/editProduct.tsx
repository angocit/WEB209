import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {FormData} from '../interface/product'
import { useParams } from 'react-router-dom'
import { GetProductByID } from '../services/product'
import { ProductCT } from '../context/product'

const Editproduct = () => {
    const {onUpdate} = useContext(ProductCT)
    const {register,handleSubmit,reset} = useForm<FormData>()
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
    const onsubmit = (data:FormData)=>{
        onUpdate(data,param?.id as number|string)
    }
  return (
    <>
        <h1>Cập nhật sản phẩm</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input type='text' placeholder='Tên sản phẩm' {...register('name')}/>
            <input type='text' placeholder='Ảnh sản phẩm' {...register('image')}/>
            <input type='number' placeholder='Giá sản phẩm' {...register('price')}/>
            <input type='text' placeholder='Danh mục' {...register('category')}/>
            <button type='submit'>Cập nhật</button>
        </form>
    </>
  )
}

export default Editproduct
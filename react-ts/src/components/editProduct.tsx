import React, { useContext, useEffect } from 'react'
import { formType, IProduct } from '../interface/product'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { GetProductByID } from '../service/product'
import { productCT } from '../context/productContext'


const EditProduct = () => {
  const {onSubmitUpdate} = useContext(productCT)
    const {register,handleSubmit,reset} = useForm<formType>()
    const navigate = useNavigate()
    const param = useParams()
    useEffect(()=>{
      (async ()=>{
        const product = await GetProductByID(param.id as string|number)
        reset({
          name:product.name,
          image:product.image,
          price:product.price,
          category:product.category
        })
      })()
    },[])
    const onSubmit = async (product:formType)=>{
       await onSubmitUpdate(product,param.id as string|number)
        navigate('/products')
    }
  return (
    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
                          <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
                          <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
                          <input type='text' {...register("category")} placeholder='Danh mục'/>
                          <button type='submit'>Update</button> 
                      </form> 
                  </div>
  )
}

export default EditProduct
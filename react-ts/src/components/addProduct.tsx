import React, { useContext } from 'react'
import { formType, IProduct } from '../interface/product'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { productCT } from '../context/productContext'


const AddProduct = () => {
  const {onAdd} = useContext(productCT)
    const {register,handleSubmit,reset,formState:{errors}} = useForm<formType>()
    const navigate = useNavigate()
    const onSubmit =async(formData:any)=>{
     await onAdd(formData)  
      navigate('/products')
      reset()    
    }
  return (
    <>
    Thêm mới sản phẩm
    <form onSubmit={handleSubmit(onSubmit)} className='gap-4 flex flex-col'>
        <input type='text' {...register("name",{required:true,minLength:6})} placeholder='Tên sản phẩm'/>
        {(errors.name) &&
          <p className='text-red-600 text-[12px]'>
            Tên không được để trống và nhỏ hơn 6 ký tự
          </p>
        }
        <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
        <input type='text' {...register("price",{required:true,pattern:/^\d*$/})} placeholder='Giá sản phẩm'/>
        {(errors.price) &&
          <p className='text-red-600 text-[12px]'>
            Giá phải là số và không âm
          </p>
        }
        <input type='text' {...register("category",{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})} placeholder='Danh mục'/>
        {(errors.category) &&
          <p className='text-red-600 text-[12px]'>
            Email không đúng định dạng
          </p>
        }
        <button type='submit'>Thêm mới</button>  
    </form>  
    </>
  )
}

export default AddProduct
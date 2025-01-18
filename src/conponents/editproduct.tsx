import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interface/product'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

type Props = {}

const EditProduct = (props: Props) => {
  const {register,handleSubmit,reset} = useForm<IProduct>()
  const navigate = useNavigate()
  // lấy id
  const params = useParams()
  // Dùng useEffect để call API khi mouting
  useEffect(()=>{
      const getProductById =async ()=>{
          try {
              const {data} = await axios.get(`http://localhost:3000/products/${params.id}`)
              // Fill data vào form
              reset({
                name:data.name,
                price:data.price
              })
          } catch (error) {
            
          }
      }
      getProductById()
  },[])
  const onSubmit = async (data:IProduct)=>{
    try {
      const  {data:product} = await axios.put(`http://localhost:3000/products/${params.id}`,data)
      alert('Cập nhật thành công')
      //Chuyển hướng về trang chủ
      navigate('/')
  } catch (error) {
      console.log(error);            
  }
  }
  return (
    <>
      <h1 className='text-[36px] text-[#acaa13] mb-[60px]'>Sửa sản phẩm</h1>
      <form className='[&_input]:border [&_input]:mr-4' onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
          <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
          <button className='bg-[#3c11e8] text-white px-4 py-1 rounded'>Cập nhật</button>
      </form>   
    </>
  )
}

export default EditProduct
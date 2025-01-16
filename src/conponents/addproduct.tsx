import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interface/product'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {}

const AddProduct = (props: Props) => {
    const {register,handleSubmit} = useForm<IProduct>()
    const navigate = useNavigate()
    const addproduct = async (data:IProduct)=>{
        try {
            const  {data:product} = await axios.post(`http://localhost:3000/products`,data)
            alert('Thêm mới thành công')
            navigate('/')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(addproduct)}>
            <input {...register("name")} type='text' placeholder='Tên sản phẩm'/>
            <input {...register("price")} type='number' placeholder='Giá sản phẩm'/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default AddProduct
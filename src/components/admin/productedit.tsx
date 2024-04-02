import React, { useEffect, useState } from 'react'
import {IProduct} from '../../interface/product'
import { useNavigate, useParams } from 'react-router-dom'
import Joi from 'joi'
import { ToastContainer, toast } from 'react-toastify';
import { ProductJoiObj } from '../../validate/product';
import { UpdateProduct, getProductByID } from '../../service/product';

type Props = {}
const ProductEdit = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const params = useParams()
    const navigate = useNavigate()
    const id:any = params.id;
    useEffect(()=>{        
        (async ()=>{
           const product = await getProductByID(id)
           setName(product.name)
            setImage(product.image)
            setPrice(product.price)
        })()
        
    },[])
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        try {            
        
        const {error} = ProductJoiObj.validate({name,image,price})
        // 
        if (error){
            setMessage(error.message)
        }
        else {
            const product:IProduct = await UpdateProduct(id,{name,image,price})
            navigate('/dashboard/product')
        }
    } catch (error) {
          console.log(error);            
    }
    }
  return (
    <>
        <h1>Sửa sản phẩm {name}</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' value={name}/><br/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' value={image}/><br/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' value={price}/><br/>
            <button type='submit'>Cập nhật</button>
        </form>
        <ToastContainer/>
    </>
  )
}

export default ProductEdit
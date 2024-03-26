import React, { useEffect, useState } from 'react'
import IProduct from '../../interface/product'
import { useParams } from 'react-router-dom'
import Joi from 'joi'
import { ToastContainer, toast } from 'react-toastify';

type Props = {}
const ProductJoiObj = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required":"Tên không để trống",
        "string.empty":"Tên không để trống"
    }),
    image: Joi.string().required().empty().messages({
        "any.required":"Ảnh không để trống",
        "string.empty":"Ảnh không để trống"
    }),
    price: Joi.number().required().min(1000).messages({
        "any.required":"Tên không để trống",
        "number.min":"Giá không nhỏ hơn 1000"
    })
})
const ProductEdit = (props: Props) => {
    // const [product,setProduct]=useState<IProduct>({}as any)
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const params = useParams()
    const id = params.id;
    useEffect(()=>{        
        fetch(`http://localhost:3000/products/${id}`)
        .then (response =>response.json())
        .then((product:IProduct)=>{
            setName(product.name)
            setImage(product.image)
            setPrice(product.price)
        })
        
    },[])
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        const {error} = ProductJoiObj.validate({name,image,price})
        // 
        if (error){
            setMessage(error.message)
        }
        else {
            fetch(`http://localhost:3000/products/${id}`,{
                method: 'PUT',
                body: JSON.stringify({name,image,price})
            }).then(response=>response.json())
            .then((data:IProduct)=>{
                toast.success("Cập nhật thành công");
            })
            .catch(error=>{
                setMessage('Lỗi')
            })
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
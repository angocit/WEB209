import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IProduct from '../../interface/product';
import ProductList from './productlist';
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
const Products = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const [Products,setProduct]=useState<IProduct[]>([])
    const getAllProduct = async()=>{
        try {
            const res = await fetch('http://localhost:3000/products');
            const data = await res.json();
            setProduct(data);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        (async()=>{
           await getAllProduct();
        })();
    },[])
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        const {error} = ProductJoiObj.validate({name,image,price})
        // 
        if (error){
            setMessage(error.message)
        }
        else {
            fetch(`http://localhost:3000/products`,{
                method: 'POST',
                body: JSON.stringify({name,image,price})
            }).then(response=>response.json())
            .then(data=>{
                // setMessage('Thêm mới thành công')
                toast.success("Thêm mới thành công");
                setName('')
                setImage('')
                setPrice(0)
            })
            .catch(error=>{
                setMessage('Lỗi')
            })
        }
    }
  return (
    <div className='container'>
        <h1>Thêm mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm'/><br/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm'/><br/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền'/><br/>
            <button type='submit'>Thêm mới</button>
        </form>
        <ToastContainer/>
        <h3>Danh sách sản phẩm</h3>
        <ProductList products={Products}/>
    </div>
  )
}

export default Products
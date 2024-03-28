import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IProduct} from '../../interface/product';
import ProductList from './productlist';
import { addProduct, getAllProduct } from '../../service/product';
import {ProductJoiObj} from '../../validate/product'
type Props = {}

const Products = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const [Products,setProduct]=useState<IProduct[]>([])
    useEffect(()=>{
        (async()=>{
           const product:IProduct[] = await getAllProduct();
           setProduct(product);
        })();
    },[])
    const handleSubmit = async (e:any)=>{
        try {
        e.preventDefault()
        const {error} = ProductJoiObj.validate({name,image,price})
        // 
        if (error){
            setMessage(error.message)
        }
        else {
            const product = await addProduct({name,image,price})
            const newproducts = [...Products,product]
                setProduct(newproducts)
                toast.success("Thêm mới thành công");
                setName('')
                setImage('')
                setPrice(0)
        }
    } catch (error) {
           console.log(error);            
    }
    }
  return (
    <div className='container'>
        <h1>Thêm mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' value={name}/><br/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' value={image}/><br/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' value={price}/><br/>
            <button type='submit'>Thêm mới</button>
        </form>
        <ToastContainer/>
        <h3>Danh sách sản phẩm</h3>
        <ProductList products={Products} setProduct = {setProduct}/>
    </div>
  )
}

export default Products
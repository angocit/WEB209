import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../interface/type'
import axios from 'axios'
import { useForm } from 'react-hook-form'
interface ICart {
  productId: number;
  quantity: number;
}
const Details = () => {
    const [product,setProduct] = useState<IProduct>()
    const [quantity,setQuantity] = useState<number>(0)
    const {register,handleSubmit,reset} = useForm<ICart>()
    const params = useParams()
    useEffect(()=>{
        //IIFE
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${params.id}`)
                setProduct(data)
                reset({
                    productId:data.id,
                    quantity:1
                })
            } catch (error) {
                console.log(error);                
            }
        })();
    },[])
    const CountQuantity = (CartItem:any)=>{       
        const result = CartItem.reduce((total:any,item:any)=>{
            return total+Number(item.quantity)
        },0)
        return result
    }
    useEffect(()=>{
        //IIFE
        (async()=>{
            try {
                const token = localStorage.getItem("token")
            const headers = {
                headers:{"Authorization":"Bearer "+token}
            }
                const {data} = await axios.get(`http://localhost:4000/carts`,headers)
                if (data){
                    const total = CountQuantity(data.data.Items)                    
                    console.log('Tổng Giỏ hàng',total);
                    setQuantity(total)
                }
                                
            } catch (error) {
                console.log(error);                
            }
        })();
    },[])
    const addTocart = async(cartdata:ICart)=>{
        try {
            const token = localStorage.getItem("token")
            const headers = {
                headers:{"Authorization":"Bearer "+token}
            }
            const {data} = await axios.post("http://localhost:4000/carts",cartdata,headers)
            alert(data.message)
            if (data){
                const total = CountQuantity(data.data.Items)                    
                console.log('Tổng Giỏ hàng',total);
                setQuantity(total)
            }
            console.log(data);            
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='flex flex-col gap-2 max-w-xl mx-auto'>
        <p>
            Số lượng sản phẩm trong giỏ hàng: {quantity}
        </p>
        <h1>{product?.name}</h1>
        <span>Giá: {product?.price}</span>
        <img src={product?.images} width={500}/>
        <form onSubmit={handleSubmit(addTocart)}>
            <input type='hidden' {...register("productId")}/>
            <span>Số lượng</span>
            <input type='number' {...register("quantity")}/>
            <button className='bg-red-600 px-4 py-1 rounded text-white'>Thêm vào giỏ hàng</button>
        </form>
    </div>
  )
}

export default Details
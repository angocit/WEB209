import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {}
type ICart = {
    productId:number,
    quantity:number
}
const DetailProduct = (props: Props) => {
    const {register,handleSubmit,reset} = useForm<ICart>()
    const params = useParams()
    useEffect(()=>{
        try {
           ( async ()=>{
            const {data} = await axios.get(`http://localhost:3000/products/${params.id}`);
                reset({
                    quantity:1,
                    productId:data.id
                })
            })()
        } catch (error) {
            
        }
    },[])
    const addToCart =async (cartdata:ICart)=>{
        //Lấy token
        const token = localStorage.getItem("token")
        const config = {
            headers: {"Authorization":"Bearer "+token}
        }
        const {data} = await axios.post("http://localhost:3000/carts",cartdata,config)
        alert("Thêm giỏ hàng thành công")
        console.log(data);
        
    }
  return (
    <div>
        <h1>THông tin mô tả sản phẩm</h1>
        <form onSubmit={handleSubmit(addToCart)}>
           <input type='text' {...register("productId")}/>
           <input type='text' {...register("quantity")}/>
           <button>Thêm giỏ hàng</button>
        </form>
        </div>
  )
}

export default DetailProduct
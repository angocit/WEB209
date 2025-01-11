import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
interface IProduct {
  id?: number;
  name: string;
  price: number;
}

const HomeComponent = () => {
  const [products,setProduct] = useState<IProduct[]>([])
  const {register,handleSubmit} = useForm<IProduct>()
  const handleLoad = async ()=>{
      try {
          const {data} = await axios.get(`http://localhost:3000/products`)
          setProduct(data)
      } catch (error) {
        
      }
  }
  const onAddProduct = async (productdata:IProduct)=>{
      const {data} = await axios.post(`http://localhost:3000/products`,productdata)
      setProduct([...products,data])
  }
  return (
    <>
      <button onClick={handleLoad}>Tải danh sách</button>
    <form onSubmit={handleSubmit(onAddProduct)}>
        <input type='text'{...register("name")} placeholder='Tên sản phẩm'/>
        <input type='text'{...register("price")} placeholder='Giá sản phẩm'/>
        <button>Thêm mới</button>
    </form>
    
      <h1>Danh sách sản phẩm:</h1>
      {
          products.map((item,index)=>(
            <p>{item.name} Giá: {item.price}</p>
          ))
      }
    </>
  )
}

export default HomeComponent
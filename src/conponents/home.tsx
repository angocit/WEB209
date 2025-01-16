import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
interface IProduct {
  id?: number;
  name: string;
  price: number;
}

const HomeComponent = () => {
  const [products,setProduct] = useState<IProduct[]>([])
  const handleLoad = async ()=>{
      try {
          const {data} = await axios.get(`http://localhost:3000/products`)
          setProduct(data)
      } catch (error) {
        
      }
  }
  useEffect(()=>{
    console.log(`useEffect mouting`);
    
    handleLoad()
  },[])
  return (
    <>     
      <h1>Danh sách sản phẩm:</h1>
      {
          products.map((item,index)=>(
            <p key={item.id}>{item.name} Giá: {item.price}</p>
          ))
      }
    </>
  )
}

export default HomeComponent
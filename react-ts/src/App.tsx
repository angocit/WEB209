import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import './App.css'
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}
type formType = {
  name: string;
  image: string;
  price: number;
  category: string;
}
function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm<formType>()
  useEffect(()=>{
     (async ()=>{
        const {data} = await axios.get("http://localhost:3000/products")
        setProducts(data)
     })()
  },[])
  const onSubmit =async(formData:any)=>{
      // console.log(data);
      try {
        const {data} = await axios.post("http://localhost:3000/products",formData) 
        setProducts([...products,data])
        reset()
      } catch (error) {
        console.log(error);
        
      }        
  } 
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
        <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
        <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
        <input type='text' {...register("category")} placeholder='Danh mục'/>
        <button type='submit'>Thêm mới</button>  
    </form>   
    <h1>Danh sách sản phẩm</h1> 
        <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
               {products.map((product:IProduct,index)=>(
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td><button>Sửa</button><button>Xóa</button></td>
                </tr>
               ))}
            </tbody>
        </table>  
    </>
  )
}

export default App

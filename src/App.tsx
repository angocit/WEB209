import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}
function App() {
  const {register,handleSubmit,reset}= useForm()
  const [products,setProduct] = useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    (async()=>{
        try {
            const {data} = await axios.get("http://localhost:3000/products")
            setProduct(data)
            setTimeout(()=>{
              setLoading(false)
            },2000)
        } catch (error) {
          console.log(error);
          
        }
    })()
  },[])
  const onSubmit = async (Frmdata:any)=>{
    try {
      const {data}=await axios.post("http://localhost:3000/products",Frmdata)
      alert("Thêm mới thành công")      
      setProduct([...products,data])
    } catch (error) {
      console.log(error);
    }    
  }
  const onDelete =async(id:number)=>{
    try {
      if (confirm("Are you sure you want to delete")){
        const {data}=await axios.delete(`http://localhost:3000/products/${id}`)
        alert("Xóa thành công")
        setProduct(products.filter((p:IProduct) => p.id !== id))
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
         <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
         <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
         <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
         <input type='text' {...register("category")} placeholder='Danh mục'/>
         <button type='submit'>Thêm mới sản phẩm</button>
      </form>
      <h3>Danh sách sản phẩm</h3>
      {(isLoading)?<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
      
      <tbody>
      {products.map((product:IProduct,index:number)=>
          <tr key={product.id}>
              <td>{index+1}</td>
              <td><img width={90} src={product.image}/></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><button>Sửa</button><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
          </tr>
        )}
      </tbody>   
      </table>
}
    </>
  )
}

export default App

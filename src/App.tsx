import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useForm } from 'react-hook-form'
interface IProduct {
  id:number;
  name: string;
  image: string;
  price: number;
  category: string;
}
function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm()
  const [isLoading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
      (async ()=>{
        try {
          const {data} = await axios.get("http://localhost:3000/products")
          setProduct(data)
          setLoading(false)
        } catch (error) {
            console.log(error);
            
        }          
      })()
  },[])
  const onSubmit = async(product:any)=>{
      // console.log(data);
      try {
          const {data} = await axios.post("http://localhost:3000/products",product)
          setProduct([...products,data])
          alert("Thêm mới thành công")
      } catch (error) {
          alert(error)
      }
      
  }
  const onDelete = async(id:number)=>{
     try {
      if (confirm("Are you sure")){
        const {data} = await axios.delete(`http://localhost:3000/products/${id}`)
        setProduct(products.filter((product:IProduct)=>product.id !== id))
        alert("Xóa thành công")
      }
     } catch (error) {
      
     }
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")}/>
        <input type='text' {...register("image")}/>
        <input type='text' {...register("category")}/>
        <input type='number' {...register("price")}/>
        <button type='submit'>Thêm mới sản phẩm</button>
    </form>
    <h1>Danh sách sản phẩm</h1>
    {(isLoading)?<div className="lds-ripple"><div></div><div></div></div>:
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ảnh</th>
          <th>Tên sp</th>
          <th>Danh mục</th>
          <th>Giá tiền</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product:IProduct,index:number)=>(
          <tr key={product.id}>
              <td>{index+1}</td>
              <td><img width={90} src={product.image}/></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><button>Sửa</button><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    }
    </>
  )
}

export default App

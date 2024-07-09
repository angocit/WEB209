import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IProduct,FormData } from './interface/product';
import AddProduct from './components/addProduct';

function App() {
  const {register,handleSubmit,reset}= useForm<FormData>()
  const [products,setProduct] = useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag] = useState<number|string>(0)
  useEffect(()=>{
    (async()=>{
        try {
            const {data} = await axios.get("http://localhost:3000/products")
            setProduct(data)
            setLoading(false)
        } catch (error) {
          console.log(error);
          
        }
    })()
  },[])
  const onAdd = async (Frmdata:FormData)=>{
    try {
      const {data}=await axios.post("http://localhost:3000/products",Frmdata)
      alert("Thêm mới thành công")      
      setProduct([...products,data])
    } catch (error) {
      console.log(error);
    }    
  }
  const onUpdate = async (Frmdata:FormData)=>{
    try {
      const {data}=await axios.put("http://localhost:3000/products/"+flag,Frmdata)
      alert("Cập nhật thành công")      
      const newproducts = products.map(product=>(product.id===flag)?data:product)
      setProduct(newproducts)
      setFlag(0)
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
  const onEdit = (id:number|string)=>{
    setFlag(id)
    // Lấy thông tin sản phẩm theo ID
    const [product] = products.filter(product=>product.id===id)
    reset({
      name:product.name,
      image:product.image,
      price:product.price,
      category:product.category
    })
  }
  return (
    <>
      <AddProduct onAdd={onAdd}/>
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
        (product.id===flag)?<tr>
          <td colSpan={6}>
            <div id='popup'>
            <form onSubmit={handleSubmit(onUpdate)}>
            <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
            <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
            <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
            <input type='text' {...register("category")} placeholder='Danh mục'/>
            <button type='submit'>Cập nhật</button>
            <button type='button' onClick={()=>setFlag(0)}>Hủy</button>
            </form>
            </div>
        </td>        
        </tr>:
          <tr key={product.id}>
              <td>{index+1}</td>
              <td><img width={90} src={product.image}/></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><button onClick={()=>onEdit(product.id)}>Sửa</button><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
          </tr>
        )}
      </tbody>   
      </table>
}
    </>
  )
}

export default App

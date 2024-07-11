import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from './interface/product'
import Addproduct from './components/addproduct'
import EditProduct from './components/editProduct'
import CustomElement from './components/customElement'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm<FormData>()
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag]=useState<number|string>(0)
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
  const onAdd = async(product:FormData)=>{
      // console.log(data);
      try {
          const {data} = await axios.post("http://localhost:3000/products",product)
          setProduct([...products,data])
          alert("Thêm mới thành công")
      } catch (error) {
          alert(error)
      }
      
  }
  const onUpdate = async(product:FormData)=>{
    // console.log(data);
    try {
        const {data} = await axios.put("http://localhost:3000/products/"+flag,product)
        const newproduct = products.map(product=>(product.id===flag)?data:product)
        setProduct(newproduct)
        alert("Cập nhật thành công")
        setFlag(0)
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
  const onEdit = (id:number|string)=>{
    setFlag(id)
    const [product] = products.filter(p=>p.id===id)
    reset({
      name:product.name,
      image:product.image,
      price:product.price,
      category:product.category
    })
  }
  return (
    <>
    <h1>Đây là nút</h1>
    <CustomElement el='button' title='Đăng ký' type='submit'/>
    <h1>Đây là thẻ anchor</h1>
    <CustomElement el='anchor' title='Click here' href='https://google.com'/>
    <Addproduct onAdd={onAdd}/>
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
          (product.id===flag)?<tr>
            <td colSpan={6}>
                <EditProduct product={product} setFlag={setFlag} onUpdate={onUpdate}/>
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
        ))}
      </tbody>
    </table>
    }
    </>
  )
}

export default App

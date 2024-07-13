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
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/detail'
import Dashboard from './components/dashboard'
import Client from './layout/client'
import { GetAllProducts } from './services/product'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm<FormData>()
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag]=useState<number|string>(0)
  useEffect(()=>{
      (async ()=>{
         const data = await GetAllProducts()    
         setProduct(data)     
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
  const element = useRoutes([
    {path:'',Component:Client,children:[
        {path:'',element:<Home products={products}/>},
        {path:'detail',element:<Detail/>}
    ]},
    {path:'dashboard',element:<Dashboard/>,children:[
      {path:'product',element:<Home products={products}/>}
    ]},
  ])
  return element
}

export default App

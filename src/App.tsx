import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IProduct,FormData } from './interface/product';
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';
import CustomElement from './components/customElement';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import Dashboard from './components/dashboard';
import Productlist from './components/productlist';
import Client from './layout/client';
import Admin from './layout/Admin';
import { GetAllProducts } from './services/product';

function App() {
  const {register,handleSubmit,reset}= useForm<FormData>()
  const [products,setProduct] = useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag] = useState<number|string>(0)
  useEffect(()=>{
    (async()=>{
        const data = await GetAllProducts()
        setProduct(data)
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
  const router = useRoutes([
    {path:'',Component:Client,children:[
      {path:'',element:<Home products={products}/>},
      {path:'detail',Component:Detail}
    ]},
   
    {path:'dashboard',Component:Admin,children:
      [
        {path:'product',Component:Productlist}
      ]
    }
  ])
  return router
  // (
  //   <>
  //       <Routes>
  //           <Route path='/' Component={Home}/>
  //           <Route path='detail' Component={Detail}/>
  //           <Route path='dashboard' Component={Dashboard}>
  //               <Route path='product' Component={Productlist}/>
  //           </Route>
  //       </Routes>
  //   </>
  // )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from './interface/product'
import { Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/detail'
import Dashboard from './components/dashboard'
import Client from './layout/client'
import { AddProduct, DeleteProductById, GetAllProducts, UpdateProduct } from './services/product'
import ProductList from './components/productlist'
import Addproduct from './components/addProduct'
import EditProduct from './components/editProduct'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag]=useState<number|string>(0)
  const navigate = useNavigate()
  useEffect(()=>{
      (async ()=>{
         const data = await GetAllProducts()    
         setProduct(data)     
      })()
  },[])
  const deleteProduct = async (id:string|number)=>{
    if (confirm('Bạn chắc chứ?')){
      try {
          const data = await DeleteProductById(id)
          alert('Xóa thành công')
          const newproducts = products.filter(product=>product.id !==id)
          setProduct(newproducts)
      } catch (error) {
        console.log(error);        
      }
    }
  }
  const onAdd = async (data:FormData)=>{
    try {
        const product = await AddProduct(data)
        alert('Thêm mới thành công')
        setProduct([...products,product])
        navigate('/product-list')
    } catch (error) {
      
    }
  }
  const onUpdate = async (data:FormData,id:number|string)=>{
    try {
        const dataproduct = await UpdateProduct(data,id)
        alert('Cập nhật thành công')
        // setProduct([...products,product])
        const newproducts = products.map(product=>(product.id==id)?dataproduct:product)
        setProduct(newproducts)
        navigate('/product-list')
    } catch (error) {
      
    }
  }
  const element = useRoutes([
    {path:'',Component:Client,children:[
        {path:'',element:<Home products={products}/>},
        {path:'product-list',element:<ProductList deleteProduct={deleteProduct} products={products}/>},
        {path:'product/add',element:<Addproduct onAdd={onAdd}/>},
        {path:'product/edit/:id',element:<EditProduct onUpdate={onUpdate}/>},
        {path:'detail',element:<Detail/>}
    ]},
    {path:'dashboard',element:<Dashboard/>,children:[
      {path:'product',element:<Home products={products}/>}
    ]},
  ])
  return element
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IProduct,FormData } from './interface/product';
import CustomElement from './components/customElement';
import { Route, Routes, useNavigate, useRoutes } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import Dashboard from './components/dashboard';
import Productlist from './components/productlist';
import Client from './layout/client';
import Admin from './layout/Admin';
import { AddProduct, DeleteProduct, GetAllProducts, UpdateProduct } from './services/product';
import Addproduct from './components/addproduct';
import Editproduct from './components/editproduct';
import CartContext from './context/cart';

function App() {
  const [products,setProduct] = useState<IProduct[]>([])
  const [isLoading,setLoading] = useState<boolean>(true)
  const [flag,setFlag] = useState<number|string>(0)
  const navigate = useNavigate()
  useEffect(()=>{
    (async()=>{
        const data = await GetAllProducts()
        setProduct(data)       
    })()
  },[])
  const onDelete =async (id:number|string)=>{
    if(confirm('Bạn chắc chứ?')){
    try {
        const product =await DeleteProduct(id)
        alert('Xóa thành công')
        const newproducts = products.filter(product=>product.id!==id)
        setProduct(newproducts)
    } catch (error) {
      
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
        const resdata = await UpdateProduct(data,id)
        alert('Cập nhật thành công')
        const newproduct = products.map(product=>(product.id==id)?resdata:product)
        setProduct(newproduct)
        navigate('/product-list')
    } catch (error) {
      
    }
  }
  const router = useRoutes([
    {path:'',element:<CartContext><Client/></CartContext>,children:[
      {path:'',element:<Home products={products}/>},
      {path:'product-list',element:<Productlist onDelete={onDelete} products = {products}/>},
      {path:'product/add',element:<Addproduct onAdd = {onAdd}/>},
      {path:'product/edit/:id',element:<Editproduct onUpdate={onUpdate}/>},
      {path:'detail',Component:Detail}
    ]},
   
    {path:'dashboard',Component:Admin,children:
      [
        // {path:'product',Component:Productlist}
      ]
    }
  ])
  return router
}

export default App

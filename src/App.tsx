import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import type { IProduct } from './interface/product'
import ProductItem from './components/client/productitem'
import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Category from './pages/Category'
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from './layouts/AdminLayout'
import Products from './pages/admin/Products'
import ProductAdd from './pages/admin/ProductAdd'
interface IMessage{
  user:string,
  message:string
}

function App() {
  const router = useRoutes([
    {path:'/',Component:ClientLayout,children:[
      {path:'',Component:Home},
      {path:'detail',Component:Detail},
      {path:'category',Component:Category}
    ]},
    {path:'/admin',Component:AdminLayout,children:[
      {path:'products',Component:Products},
      {path:'products/add',Component:ProductAdd}
    ]}
    
  ])
  return router
}

export default App

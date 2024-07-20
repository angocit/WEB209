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
import CartContext from './context/cart'
import ProductContext from './context/product'

function App() {
  const element = useRoutes([
    {path:'',element:<CartContext><Client/></CartContext>,children:[
        {path:'',element:<ProductContext><Home/></ProductContext>},
        {path:'detail',element:<Detail/>}
    ]},
    {path:'dashboard',element:<ProductContext><Dashboard/></ProductContext>,children:[
      {path:'product',element:<Home/>},
      {path:'product-list',element:<ProductList/>},
      {path:'product/add',element:<Addproduct/>},
      {path:'product/edit/:id',element:<EditProduct/>}
    ]},
  ])
  return element
}

export default App

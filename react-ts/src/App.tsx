import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import './App.css'
import { IProduct } from './interface/product'
import AddProductElement from './components/addProduct'
import Sidebar from './components/sidebar'
import EditProduct from './components/editProduct'
import CustomElement from './components/button'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home from './components/home'
import Detail from './components/detail'
import Dashboard from './layout/dashboard'
import Products from './components/products'
import Client from './layout/client'
import { AddProduct, GetAllProduct, updateProduct } from './service/product'
import ProductList from './components/product-list'
import Countcontext from './context/countcontext'
import Privaterouter from './privaterouter'
import ProductContext from './context/productContext'
import AppContext from './context/AppContext'

type formType = Pick<IProduct,'name'|'price'|'image'|'category'>
function App() {
    const routes = useRoutes([
      {path:'',element:<ProductContext><AppContext><Client/></AppContext></ProductContext>,children:[
        {path: '',element:<Home/>},
        {path: 'products',element:<ProductList/>},
        {path: 'product/add',element:<AddProductElement/>},
        {path: 'product/edit/:id',element:<EditProduct/>},
        {path: 'detail',Component:Detail}
      ]},      
      {path: 'dashboard',element:<Privaterouter userID={2}><Dashboard/></Privaterouter>,children:[
        {path:'product',Component:Products}
      ]},
    ])
    return routes
  //  (
  //   <>
  //   <Routes>
  //       <Route path='/' Component={Home}/>
  //       <Route path='detail' Component={Detail}/>
  //       <Route path='dashboard' Component={Dashboard}>
  //           <Route path='product' Component={Products}/>
  //       </Route>
  //   </Routes>
  //   </>
  // )
}

export default App

import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import Client from './pages/client/client';
import Dashboard from './pages/admin/dashboard';
import Home from './pages/client/pages/home';
import Products from './pages/client/components/products';
import AddProduct from './pages/admin/product/addproduct';
import CartContext from './context/cartcontext';
import Cart from './pages/client/pages/cart';
import Checkout from './pages/client/pages/checkout';
function App() {
  
   const routes = useRoutes([
    {path: '', element:<CartContext><Client/></CartContext>,children:[
      {path:'',element:<Home/>},
      {path:'cart',element:<Cart/>},
      {path:'checkout',element:<Checkout/>}
    ]},
    {path: 'dashboard', element:<Dashboard/>,children:[
      {path:'products', Component:Products},
      {path:'product/add', Component:AddProduct}
    ]}
   ]) 
   return routes
}

export default App

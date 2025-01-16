import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import HomeComponent from './conponents/home'
import AddProduct from './conponents/addproduct'
import EditProduct from './conponents/editproduct'

function App() {
  const [count, setCount] = useState(0)
  // useRoute
 const routes = useRoutes([
    {path:'/',element:<HomeComponent/>},
    {path:'/add-product',element:<AddProduct/>},
    {path:'/edit-product/:id',element:<EditProduct/>},
    // {path:'/admin',element:<AddProduct/>,children:[
    //   {path:'dashboard',element:''}
    // ]}
 ])
 return routes
  // return (
  //     <Routes>
  //       <Route path='/' Component={HomeComponent}/>
  //       <Route path='/add-product' Component={AddProduct}/>
          // <Route path ='/admin' Compoent={Admin}>
          //     <Router ...
          // </Route>
  //     </Routes>
  // )
}

export default App

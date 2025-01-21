import { useState } from 'react'
import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import HomeComponent from './conponents/home'
import AddProduct from './conponents/addproduct'
import EditProduct from './conponents/editproduct'
import Client from './layout/client'
import Detail from './conponents/client/detail'
import Dashboard from './layout/admin'

function App() {
  const [count, setCount] = useState(0)
  // useRoute
 const routes = useRoutes([
    {path:'',element:<Client/>,children:[
      {path:'',element:<HomeComponent/>},
      {path:'detail',element:<Detail/>}
    ]},
    {path:'dashboard',element:<Dashboard/>,children:[
      {path:'add-product',element:<AddProduct/>},
      {path:'edit-product/:id',element:<EditProduct/>}
    ]}    
   
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

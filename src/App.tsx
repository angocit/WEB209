import { Route, Routes, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import ClientLayout from "./layouts/client/ClientLayout"
import AdminLayout from "./layouts/admin/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import ListProduct from "./pages/admin/ListProduct"
import AddProduct from "./pages/admin/AddProduct"

function App() {
  const router = useRoutes([
    {path:'/',Component:ClientLayout,children:[
      {path:'',Component:Home},
      {path:'category',Component:Category}
    ]},
    {path:'/admin',Component:AdminLayout,children:[
      {path:'',Component:Dashboard},
      {path:'products',Component:ListProduct},
      {path:'products/add',Component:AddProduct}
    ]}
  ]) 
  return router
}

export default App

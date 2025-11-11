import { Route, Routes, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import ClientLayout from "./layouts/client/ClientLayout"
import AdminLayout from "./layouts/admin/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"

function App() {
  const router = useRoutes([
    {path:'/',Component:ClientLayout,children:[
      {path:'',Component:Home},
      {path:'category',Component:Category}
    ]},
    {path:'/admin',Component:AdminLayout,children:[
      {path:'',Component:Dashboard}
    ]}
  ]) 
  return router
}

export default App

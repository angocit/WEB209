import { Route, Routes, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"

function App() {
  const router = useRoutes([
    {path:'/',Component:Home},
    {path:'/category',Component:Category}
  ]) 
  return router
}

export default App

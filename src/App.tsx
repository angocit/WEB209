import React from 'react'
import { useRoutes } from 'react-router-dom'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'
import Home from './components/client/home'
import Detail from './components/client/detail'
import ProductList from './components/admin/productlist'

type Props = {}

const App = (props: Props) => {
  const routes = useRoutes([
      {path:"/",element:<ClientLayout/>,children:[
        {path:"",element:<Home/>},
        {path:"detail",element:<Detail/>}
      ]},
      {path:"/dashboard",element:<AdminLayout/>,children:[
          {path:"product-list",element:<ProductList/>}
      ]},
  ])
  return routes
}

export default App
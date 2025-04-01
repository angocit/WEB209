import React from 'react'
import { useRoutes } from 'react-router-dom'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'
import Add from './components/admin/add'

type Props = {}

const App = (props: Props) => {
  const routes = useRoutes([
      {path:"/",element:<ClientLayout/>,children:[]},
      {path:"/admin",element:<AdminLayout/>,children:[
        {path:"add",element:<Add/>}
      ]},
  ])
  return routes
}

export default App
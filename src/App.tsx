import React from 'react'
import { useRoutes } from 'react-router-dom'
import Add from './components/Add'
import Details from './components/Details'
import Register from './components/Register'
import Login from './components/Login'

type Props = {}

const App = (props: Props) => {
  const routes = useRoutes([
    {path:"/add",element:<Add/>},
    {path:"/detail/:id",element:<Details/>},
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>}
  ])
  return routes
}

export default App
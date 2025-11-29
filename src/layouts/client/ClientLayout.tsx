import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './components/ClientHeader'
import ClientFooter from './components/ClientFooter'
import CartContext from '../../context/cartContext'
const ClientLayout = () => {
   const [count,setCount] = useState<number>(1)
  return (
    <CartContext>
        <ClientHeader/>
        <Outlet/>
        <ClientFooter/>
    </CartContext>
  )
}

export default ClientLayout
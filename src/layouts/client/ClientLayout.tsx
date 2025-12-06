import React, { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './components/ClientHeader'
import ClientFooter from './components/ClientFooter'
import CartContext, { CartCT } from '../../context/cartContext'
const ClientLayout = () => {   
  return (
    <CartContext>
        <ClientHeader/>
        <Outlet/>
        <ClientFooter/>
    </CartContext>
  )
}

export default ClientLayout
import React, { useState } from 'react'
import ClientHeader from '../components/client/header'
import ClientFooter from '../components/client/footer'
import { Outlet } from 'react-router-dom'
import CartContext from '../context/cartContext'
const ClientLayout = () => {  
  return (
    <CartContext>      
        <ClientHeader/>
        <div className='max-w-7xl mx-auto'>
            <Outlet/>
        </div>
        <ClientFooter/>
    </CartContext>
  )
}

export default ClientLayout
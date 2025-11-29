import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './components/ClientHeader'
import ClientFooter from './components/ClientFooter'
import cartContext from '../../context/cartContext'
type CartType ={
    count:number,
    setCount:(value:number)=>void
}
export const CartCT = createContext({} as CartType)
const ClientLayout = () => {
   const [count,setCount] = useState<number>(1)
  return (
    <CartCT.Provider value={{count,setCount}}>
        <ClientHeader/>
        <Outlet/>
        <ClientFooter/>
    </CartCT.Provider>
  )
}

export default ClientLayout
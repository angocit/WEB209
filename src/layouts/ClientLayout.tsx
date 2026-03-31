import React, { createContext, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/header'
import Footer from '../components/client/footer'
import { CartReducerFn } from '../reducer/store'
import CartSideBar from '../components/client/CartSideBar'
export const countCT = createContext({} as any)
const ClientLayout = () => {
  const [count,setCount] = useState<number>(0)
  // const [state,dispath] = useReducer(ReducerFn,'Giá trị khởi tạo')
    const [cartstate,dispath] = useReducer(CartReducerFn,{count:0,isCloseSidebar:false})
  return (
    <countCT.Provider value={{cartstate,dispath}}>
        <Header/>
        <Outlet/>
        <CartSideBar/>
        <Footer/>
    </countCT.Provider>
  )
}

export default ClientLayout
import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/header'
import Footer from '../components/client/footer'
export const countCT = createContext({} as any)
const ClientLayout = () => {
  const [count,setCount] = useState<number>(0)
  return (
    <countCT.Provider value={{count,setCount}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </countCT.Provider>
  )
}

export default ClientLayout
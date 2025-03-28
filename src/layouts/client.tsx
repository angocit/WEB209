import React, { createContext, useState } from 'react'
import ClientHeader from '../components/client/header'
import ClientFooter from '../components/client/footer'
import { Outlet } from 'react-router-dom'
export const cartContext = createContext({} as any)
const ClientLayout = () => {
  const [count,setCount] = useState<number>(1)
  return (
    <>
      <cartContext.Provider value={{count,setCount}}>
        <ClientHeader/>
        <div className='max-w-7xl mx-auto'>
            <Outlet/>
        </div>
        <ClientFooter/>
        </cartContext.Provider>
    </>
  )
}

export default ClientLayout
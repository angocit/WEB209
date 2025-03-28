import React, { createContext, useState } from 'react'
import ClientHeader from '../components/client/header'
import ClientFooter from '../components/client/footer'
import { Outlet } from 'react-router-dom'
export const cartContext = createContext({} as any)
type ICart = {
  productid: number,
  quantity:number
}
const ClientLayout = () => {
  const [count,setCount] = useState<number>(0)
  const [cart,setCart] = useState<ICart[]>([])
  return (
    <>
      <cartContext.Provider value={{cart,setCart}}>
        <ClientHeader count={count} setCount={setCount}/>
        <div className='max-w-7xl mx-auto'>
          <Outlet/>
          </div>
        <ClientFooter/>
        </cartContext.Provider>
    </>
  )
}

export default ClientLayout
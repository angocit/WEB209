import React, { createContext, useState } from 'react'

type Props = {
    children:React.ReactNode
}
export const cartCT = createContext({} as any)
const CartContext = ({children}: Props) => {
    const [cart,setCart] = useState<number>(0)
  return (
    <cartCT.Provider value={{cart,setCart}}>
        {children}
    </cartCT.Provider>
  )
}

export default CartContext
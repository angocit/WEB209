import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode
}
export const CartCT = createContext({} as any)
const CartContext = ({children}: Props) => {
    const [cart, setCart] = useState<number>(0)
  return (
    <CartCT.Provider value={{cart, setCart}}>
        {children}
    </CartCT.Provider>
  )
}

export default CartContext
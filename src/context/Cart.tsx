import React, { createContext, ReactNode, useState } from 'react'

type Props = {
    children:ReactNode
}
export const cartContext = createContext([] as any)
const CartProvider = ({children}: Props) => {
    const [count,setCount] = useState<number>(1)
  return (
    <cartContext.Provider value={[count,setCount]}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider
import React, { createContext, ReactNode, useState } from 'react'

type Props = {
    children:ReactNode
}
export const cartContext = createContext({} as any)
const CartContext = ({children}: Props) => {
    const [count,setCount] = useState<number>(222)
  return (
    <cartContext.Provider value={{count,setCount}}>
        {children}
    </cartContext.Provider>
  )
}
export default CartContext
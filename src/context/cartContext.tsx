import React, { createContext, useState, type ReactNode } from 'react'

type Props = {
    children:ReactNode
}
type CartType ={
    count:number,
    setCount:(value:number)=>void
}
export const CartCT = createContext({} as CartType)
const CartContext = ({children}: Props) => {
    const [count,setCount] = useState<number>(1)
  return (
    <CartCT.Provider value={{count,setCount}}>
        {children}
    </CartCT.Provider>
  )
}

export default CartContext
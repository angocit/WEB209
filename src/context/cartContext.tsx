import React, { createContext, ReactNode, useReducer, useState } from 'react'
import { reducer } from '../reducer/count'

type Props = {
    children:ReactNode
}
export const cartContext = createContext({} as any)
const CartContext = ({children}: Props) => {
    // const [count,setCount] = useState<number>(1)
    const [count,dispatch] = useReducer(reducer,0)
  return (
    <cartContext.Provider value={{count,dispatch}}>
        {children}
    </cartContext.Provider>
  )
}
export default CartContext
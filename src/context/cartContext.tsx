import React, { createContext, useReducer, useState, type ReactNode } from 'react'
import { storeReducer } from '../reducer/store'

type Props = {
    children:ReactNode
}
type CartType ={
    count:number,
    setCount:(value:number)=>void
}
type ThemeType ={
    theme:boolean,
    setTheme:(value:boolean)=>void
}
export const CartCT = createContext({} as any)
const CartContext = ({children}: Props) => {
    // const [count,setCount] = useState<number>(1)
    // const [theme,setTheme] = useState<boolean>(false)
    const [Storestate,dispath] = useReducer(storeReducer,{theme:false,cart:0})
  return (
    <CartCT.Provider value={{Storestate,dispath}}>
        <div className={(Storestate.theme)?'dark':''}>
        {children}
        </div>
    </CartCT.Provider>
  )
}

export default CartContext
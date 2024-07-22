import React, { Children, createContext, useEffect, useReducer, useState } from 'react'
import { ICart } from '../interface/cart'
import { api } from '../config/axios'
type Props = {
    children: React.ReactNode
}
export const cartCT = createContext({} as any)
const CartContext = ({children}: Props) => {
  const [cart,setCart] = useState<ICart>({} as ICart)
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await api.get('cart/userid/1')    // Hardcode userid = 1            
        if (data){
          setCart(data)
        }
      } catch (error) {
        
      }
    })()
  },[])
  return (
    <cartCT.Provider value={{cart,setCart}}>
        {children}
    </cartCT.Provider>
  )
}

export default CartContext
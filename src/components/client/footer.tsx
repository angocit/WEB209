import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const ClientFooter = () => {
  const {count,dispatch} = useContext(cartContext)
  return (
    <div>
      ClientFooter
      <button onClick={()=>dispatch({type:"giam",payload:{value:1}})}>Giảm số lượng giỏ hàng</button>
    </div>
  )
}

export default ClientFooter
import React, { useContext } from 'react'
import { CartCT } from '../../../context/cartContext'

const ClientFooter = () => {
  const {count,setCount} = useContext(CartCT)
  return (
    <div>ClientFooter
      <button onClick={()=>setCount(count+1)}>Tăng giỏ hàng</button>
    </div>
  )
}

export default ClientFooter
import React, { useContext } from 'react'
import { cartContext } from '../../context/Cart'

const ClientFooter = () => {
  const [count,setCount] = useContext(cartContext)
  return (
    <div>ClientFooter <button onClick={()=>setCount(count+1)}>Tăng</button></div>
  )
}

export default ClientFooter
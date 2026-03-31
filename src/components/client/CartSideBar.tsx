import React, { useContext } from 'react'
import { countCT } from '../../layouts/ClientLayout'

const CartSideBar = () => {
    const {cartstate,dispath} = useContext(countCT)
  return (
    <div id='cartsidebar' className={`${(cartstate.isCloseSidebar)?'show ':''}fixed duration-500 right-0 top-0 w-[300px] h-[100vh] bg-amber-100 border border-b-gray-300`}>
        <button onClick={()=>dispath({type:'closeOpen',payload:false})}>Close</button>
        <h3>Danh sách sản phẩm trong giỏ hàng</h3>
        <ul>
            <li>Sản pahamr 1</li>
            <li>Sản pahamr 2</li>
            <li>Sản pahamr 3</li>
            <li>Sản pahamr 4</li>
        </ul>
        <span>Tổng số lượng {cartstate.count}</span>
    </div>
  )
}

export default CartSideBar
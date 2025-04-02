import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import item from '../client/product/item'
import { ICartProduct, ProductId, TypeCart } from '../../interface/cart'
import { CloseOutlined } from '@ant-design/icons'

const ProductCartSidebar = () => {
    const {cartstate,dispatch} = useContext(cartContext)
  return (
    <div id='cart-sidebar' className='fixed top-0 right-0 w-1/6 bg-white shadow-sm h-screen'>
        <div className='flex justify-end w-full'><button onClick={()=>dispatch({type:TypeCart.openSidebar,payload:false})}><CloseOutlined /></button></div>
        <ul>
        {            
            (cartstate.carts)&&cartstate.carts.map((item:ICartProduct,index:any)=>(
                <li key={index}>
                    {item.productId.name}
                    SL: {item.quantity}
                </li>
            ))            
        }
        </ul>
    </div>
  )
}

export default ProductCartSidebar
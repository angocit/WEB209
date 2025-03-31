import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import item from '../client/product/item'
import { ICartProduct, ProductId } from '../../interface/cart'

const ProductCartSidebar = () => {
    const {cartstate} = useContext(cartContext)
  return (
    <div>
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
import React, { useContext } from 'react'
import { IProduct } from '../../interface/product'
import { cartCT } from '../../context/cart'
type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  const {cart,setCart} = useContext(cartCT)
  return (
    <div>
        <div className='w-full h-[300px] overflow-hidden'>
            <img className='object-cover w-full' src={product.image}/>
        </div>
        <h3 className='text-[14px] font-semibold'>{product.name}</h3>
        <div className='flex justify-between'>
        <span className='text-[#777777]'>{product.category}</span>
        <span>{product.price}</span>
        </div> 
        <button onClick={()=>setCart(cart+1)}>Thêm giỏ hàng</button>
    </div>
  )
}

export default ProductItem
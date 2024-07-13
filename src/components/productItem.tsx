import React from 'react'
import { IProduct } from '../interface/product'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div>
        <div className='h-[300px] w-full overflow-hidden'>
        <img className='w-full object-cover hover:scale-110 duration-500' src={product.image}/>
        </div>
        <h3 className='text-[14px] font-semibold text-[#665345]'>{product.name}</h3>
        <div className='flex justify-between'>
            <span className='text-[12px] text-[#777777]'>{product.category}</span>
            <span className='text-[12px] text-[#665345] font-semibold'>{product.price}</span>
        </div>
    </div>
  )
}

export default ProductItem
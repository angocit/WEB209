import React from 'react'
import { IProduct } from '../interface/product'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div className='relative product-item flex flex-col border border-solid border-[#eee]'>
        <div className='h-[350px] overflow-hidden'>
            <img className='h-full mx-auto object-cover hover:scale-110 duration-500' src={product.image}/>
        </div>
        <h3 className='absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4'>{product.name}</h3>
        <div className='flex justify-between px-4 pb-2'>
            <span className='text-[#777777] text-[12px]'>{product.category}</span>
            <span>{product.price}</span>
        </div>
    </div>
  )
}

export default ProductItem
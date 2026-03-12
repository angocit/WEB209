import React from 'react'
import type { IProduct } from '../../interface/product'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div className='item'>
        <img src={product.image}/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
    </div>
  )
}

export default ProductItem
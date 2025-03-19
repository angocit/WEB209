import React from 'react'
import { IProduct } from '../../../interface/product'

type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  return (
    <div className='product-item'>
        <img src={product.images}/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
    </div>
  )
}

export default ProductItem
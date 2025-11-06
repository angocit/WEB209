import React from 'react'
import type { IProduct } from '../../types/product'

type Props = {
    product:IProduct,
    label:string
}

const ProductItem = ({product,label}: Props) => {
  return (
    <div>
        <img width={90} src={product.image}/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        {label}
    </div>
  )
}

export default ProductItem
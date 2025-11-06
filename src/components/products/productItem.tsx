import React from 'react'
import type { IProduct } from '../../types/product'

type Props = {
    product:IProduct,
    label?:string,
    MessageFn:(title:string)=>void
}

const ProductItem = ({product,label,MessageFn}: Props) => {
    // if (product.id%2==1){
    //     return null // Để không hiển thị gì cả
    // }
  return (
    <div>
        <img width={90} src={product.image}/>
        {(product.id%2==1)?
        <h3 style={{color:'red'}}>{product.name}</h3>:
        <h3 style={{color:'blue'}}>{product.name}</h3>
        }
        <span>{product.price}</span>
        {label}
        <button onClick={()=>MessageFn(product.name)}>Click here!</button>
    </div>
  )
}

export default ProductItem
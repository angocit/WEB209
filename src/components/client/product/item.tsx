import React, { useContext } from 'react'
import { IProduct } from '../../../interface/product'
import StarRating from './starrating'
import { cartContext } from '../../../layouts/client'

type Props = {
    product:IProduct
}

const ItemProduct = ({product}:Props) => {
  const {count,setCount} = useContext(cartContext)
  return (
    <div className='item'>
        <img src={product.image}/>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <StarRating score={product.rating}/>
        <button className='bg-red-700 text-white px-4 py-1' onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
  )
}

export default ItemProduct
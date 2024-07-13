import React from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './product/productItem'

type Props = {
    products:IProduct[]
}

const Home = ({products}: Props) => {
  return (
    <>
       <h1 className="text-3xl text-center py-10">
       Danh sách sản phẩm
        </h1>
        <div className='grid grid-cols-4 gap-6'>
            {products.map(product=>(
              <ProductItem product={product}/>
            ))}
        </div>
    </>
  )
}

export default Home
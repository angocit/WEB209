import React from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './productItem'

type Props = {
  products:IProduct[]
}

const Home = ({products}: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-10 text-center">
          Danh sách sản phẩm
      </h1>
      <div className='grid grid-cols-4 gap-x-6 gap-y-10'>
          {products.map(product=>(
              <ProductItem product={product}/>
          ))}
      </div>
  </div>
  )
}

export default Home
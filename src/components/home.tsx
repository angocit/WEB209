import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './productItem'
import { ProductCT } from '../context/product'


const Home = () => {
  const {products} = useContext(ProductCT)
  return (
    <div>
      <h1 className="text-3xl font-bold py-10 text-center">
          Danh sách sản phẩm
      </h1>
      <div className='grid grid-cols-4 gap-x-6 gap-y-10'>
          {products.map((product:IProduct)=>(
              <ProductItem product={product}/>
          ))}
      </div>
  </div>
  )
}

export default Home
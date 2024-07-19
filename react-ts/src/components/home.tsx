import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './productItem'
import { productCT } from '../context/productContext'

const Home = () => {
  const {products}  = useContext(productCT)
  return (
    <>
    
      <h1 className='text-[36px] text-center'>Danh sách sản phẩm</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {products.map((product:IProduct)=>(
            <ProductItem key={product.id} product={product}/>
          ))}
      </div>
    </>
  )
}

export default Home
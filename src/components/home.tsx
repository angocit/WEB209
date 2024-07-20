import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './product/productItem'
import { ProductCT } from '../context/product'

const Home = () => {
  const {products} = useContext(ProductCT)
  return (
    <>
       <h1 className="text-3xl text-center py-10">
       Danh sách sản phẩm
        </h1>
        <div className='grid grid-cols-4 gap-6'>
            {products.map((product:IProduct)=>(
              <ProductItem product={product}/>
            ))}
        </div>
    </>
  )
}

export default Home
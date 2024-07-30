import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import ProductItem from './product/productItem'
import { ProductCT } from '../context/product'

const Home = () => {
  const {products,isLoading} = useContext(ProductCT)
  return (
    <>
       <h1 className="text-3xl text-center py-10">
       Danh sách sản phẩm
        </h1>
        {isLoading?<>Đang tải...</>:
        <div className='grid grid-cols-4 gap-6'>
            {products.map((product:IProduct)=>(
              <ProductItem key={product.id} product={product}/>
            ))}
        </div>
        }
    </>
  )
}

export default Home
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { api } from '../../../config/axios'
import { IProduct } from '../../../interface/product'
import ProductItem from '../components/productItem'
import { cartCT } from '../../../context/cartcontext'
const Home = () => {
  const {cart} = useContext(cartCT)
  const {data,isLoading,isError} = useQuery<IProduct[]>({
    queryKey:['products'],
    queryFn:async()=>{
      const {data} = await api.get('products')
      return data
    } 
  })
  if (isLoading) {
    <>LOading</>
  }
  return (
  <>{console.log(cart)} 
    <div className='grid grid-cols-4 gap-4'>
      {data?.map((product:IProduct) =>(
          <ProductItem key={product._id} product={product}/>
      ))}
    </div>
    </>
  )
}

export default Home
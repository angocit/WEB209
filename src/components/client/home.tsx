import { useQuery } from '@tanstack/react-query'
import React, { useReducer } from 'react'
import { IProduct } from '../../interface/product'
import { api } from '../../config/axios'
import ProductItem from './products/item'

const Home = () => {
  const reducer = (state:number,action:{type:string})=>{
      switch (action.type){
          case "tang":
            return state+1
          case "giam":
           return state-1
          default:
           return state
      }
  }
  const [count,dispatch] = useReducer(reducer,0)
  const {data,isLoading} = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: async ()=>{
        try {
            const {data:products} = await api.get("products")
            return products
        } catch (error) {
            console.log(error);            
        }
    }
  })
  if (isLoading){
    return <>Đang tải dữ liệu</>
  }
  return (
    <>
      <p>Giá trị hiện tại: {count}</p>

      <button onClick={()=>dispatch({type:"tang"})}>Tăng</button>
      <button  onClick={()=>dispatch({type:"giam"})}>Giảm</button>
      <h1 className='text-[1.2rem] text-center my-4'>Sản phẩm bán chạy</h1>
      <div className='grid grid-cols-4 gap-4'>
      {
        (data)&&data.map(product=>(
          <ProductItem product ={product}/>
        ))
      }
      </div>
    </>
  )
}

export default Home
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { IProduct } from '../interface/product'

const Home = () => {
  const queryclient = useQueryClient()
  const {data,isLoading} = useQuery<IProduct[]>({
    queryKey:['products'],
    queryFn: async ()=>{
        const {data} = await axios.get(`http://localhost:3000/product`)
        return data
    },
    // staleTime:Infinity // Chỉ chạy 1 lần duy nhất
    enabled:!queryclient.getQueryData(['products']) // Chỉ chạy khi chưa có dữ liệu
  })
  if (isLoading) return <>Đang tải dữ liệu</>
  return (
    <>
    <div className='max-w-7xl mx-auto'>
      <h2>Danh sách sản phẩm</h2>
      <div className='grid grid-cols-4'>
          {data&&data.map((product)=>(
            <div>
              <img src={product.image}/>
              <h3>{product.name}</h3>
            </div>
          ))}
      </div>
      </div>
    </>
  )
}

export default Home
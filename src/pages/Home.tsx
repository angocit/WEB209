import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../types/product'
import useProduct from '../hooks/producthook'

const Home = () => {
  const [data,isLoading] = useProduct<IProduct>('http://localhost:3000/products')
  if (isLoading) return <>Loading</>
  return (
    <div>
       {data&&data.map(item=>(
        <div key={item.id}>{item.name}</div>
       ))}
    </div>
  )
}

export default Home
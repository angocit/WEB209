import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../../types/product'

type Props = {}

const ListProduct = (props: Props) => {
  const {data,isLoading,isError} = useQuery<IProduct[]>({
    queryKey: ["AllProduct"],
    queryFn: async ()=>{
      const {data} = await axios.get("http://localhost:3000/products")
      return data
    }
  })
  if (isLoading) return <>Loading</>
  return (
    <div>
       {data&&data.map(item=>(
        <div key={item.id}>{item.name}</div>
       ))}
    </div>
  )
}

export default ListProduct
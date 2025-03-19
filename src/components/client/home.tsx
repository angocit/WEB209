import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { IProduct } from '../../interface/product'
import { ListData } from '../../services/data'
import ItemProduct from './product/item'

const HomeClient = () => {
    const {data,isLoading} = useQuery<IProduct[]>({
        queryKey:["products"],
        queryFn: async ()=>{
            const {data:products} = await ListData("products")
            return products
        }
    })
    if (isLoading){
        return <>Đang tải dữ liệu...</>
    }
  return (
    <div>
        <h1>Sản phẩm nổi bật</h1>
        <div className='grid grid-cols-5'>
        {
            (data)&&data.map(product=>(
                <ItemProduct product={product}/>
            ))
        }
        </div>
    </div>
  )
}

export default HomeClient
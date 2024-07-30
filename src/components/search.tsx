import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IProduct } from '../interface/product'
import api from '../config/axios'
import ProductItem from './product/productItem'

const Search = () => {
    const [products,setProduct]= useState<IProduct[]>([])
    const {search} = useLocation()
    useEffect(()=>{
       (async()=>{
        const keyword = search.split('keyword=')[1]
        // console.log(keyword[1]);    
        const {data} = await api.get('products?name_like='+keyword)    
        setProduct(data)
        })()
    },[]) 
  return (
    <div>
        <h1>Kết quả tìm kiếm</h1>
        <div className='grid grid-cols-4 gap-6'>
            {products.map((product:IProduct)=>(
              <ProductItem product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Search
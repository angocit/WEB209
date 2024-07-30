import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IProduct } from '../interface/product'
import api from '../config/axios'
import ProductItem from './product/productItem'

const Search = () => {
    const [products,setProduct]= useState<IProduct[]>([])
    let [searchParams] = useSearchParams();
    useEffect(()=>{       
       (async()=>{
        const keyword = searchParams.get('keyword') 
        console.log(keyword);
        
        const {data} = await api.get('products?name_like='+keyword)    
        setProduct(data)
        })()
    },[searchParams]) 
  return (
    <div>
        <h1>Kết quả tìm kiếm</h1>        
        <div className='grid grid-cols-4 gap-6'>
            {products.map((product:IProduct)=>(
              <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Search
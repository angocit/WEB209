import { useQuery } from '@tanstack/react-query'
import React, { useReducer, useState } from 'react'
import { IProduct } from '../../interface/product'
import { ListData } from '../../services/data'
import ItemProduct from './product/item'
import Counter from './counter/counter'

const HomeClient = () => {
    const [counter,setCounter] = useState<number>(0)
    const reducer = (state:number,action:{type:string,payload:{value:number}})=>{
        switch (action.type){
            case "tang":
                return state+action.payload.value
            case "giam":
                return state-action.payload.value
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer,0)   
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
        <h2>Khu vực hiển thị counter</h2>
        <span>Số hiện tại là: {count}</span>

        <button onClick={()=>dispatch({type:"tang",payload:{value:2}})}>Tăng giá trị</button>
        <button onClick={()=>dispatch({type:"giam",payload:{value:1}})}>Giảm giá trị</button>
        {/* <Counter counter={counter} setCounter={setCounter}/> */}
        <h2>Sản phẩm nổi bật</h2>
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
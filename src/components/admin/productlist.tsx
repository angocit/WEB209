import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { IProduct } from '../../interface/product'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const {data,isLoading} = useQuery<IProduct[]>({
        queryKey:["products"],
        queryFn:async ()=>{
            try {
                const {data:products} = await axios.get("http://localhost:4000/products")
                return products
            } catch (error) {
                return []
            }
        }
    })
    if (isLoading){
        return <>Đang tải dữ liệu</>
    }
  return (
    <div>
        <h1>Danh sách sản phẩm</h1>
        <table className='w-full [&_td]:border [&_th]:border [&_td]:p-2 [&_th]:p2 [&_th]:bg-slate-400'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th className='w-[100px]'>Ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data)&&data.map((product,index)=>(
                        <tr key={product.id}>
                            <td>{index+1}</td>
                            <td><img src={product.images} width={90}/></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={"#"}>Sửa</Link>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList
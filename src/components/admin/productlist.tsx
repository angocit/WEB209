import { useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { IProduct } from '../../interface/product'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { api } from '../../config/axios'

const ProductList = () => {
    const {data,isLoading} = useQuery<IProduct[]>({
        queryKey:["products"],
        queryFn:async ()=>{
            try {
                const {data:products} = await api.get("products")
                return products
            } catch (error) {
                return []
            }
        }
    })
    const queryclient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async(id:number)=>{
            try {
                await axios.delete(`http://localhost:4000/products/${id}`)
            } catch (error) {
                console.log(error);                
            }
        },
        onSuccess:()=>{
            alert("Xóa thành công")
            queryclient.invalidateQueries({queryKey:["products"]})
        }        
    })
    if (isLoading){
        return <>Đang tải dữ liệu</>
    }
   
const DelProduct = (id:number)=>{
    if (confirm("Bạn chắc chứ?")){
        mutation.mutate(id)
    }
}
  return (
    <div>
        <h1 className='text-[2rem] text-center mb-5'>Danh sách sản phẩm</h1>
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
                                <button onClick={()=>DelProduct(product.id)}>Xóa</button>
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
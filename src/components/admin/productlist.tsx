import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const {data,isLoading} = useQuery({ 
        queryKey: ['products'], 
        queryFn: async ()=>{
            try {
                const {data} = await axios.get("http://localhost:3000/products")
                return data
            } catch (error) {
                console.log(error);
                
            }
        } 
    })
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async(id:number)=>{
            try {
                await axios.delete(`http://localhost:3000/products/${id}`)
            } catch (error) {
                console.log(error);                
            }
        },
        onSuccess:()=>{
            alert("Xóa thành công")
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })
    const DeleteProduct = (id:number)=>{
        if (confirm("Bạn chắc chứ")){
            mutation.mutate(id)
        }
    }
  return (
    <div className='bg-white px-4 py-2'>
        <h1 className='text-[24px] text-center'>Danh sách sản phẩm</h1>
        {(isLoading)?<div>Đang tải</div>:
        <table className='w-full'>
            <thead>
            <tr>
                <th>STT</th>
                <th>Ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Thao tác</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((product:any,index:any)=>(
                        <tr key={product.id}>
                            <td>{index+1}</td>
                            <td>{product.image}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/dashboard/product-edit/${product.id}`}>Sửa</Link>
                                <button onClick={()=>DeleteProduct(product.id)}>Xóa</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        }
    </div>
  )
}

export default ProductList
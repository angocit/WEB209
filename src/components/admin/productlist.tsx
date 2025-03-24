import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListData } from '../../services/data'
import { IProduct } from '../../interface/product'
import { Table } from 'antd'

const ProductList = () => {
    const {data,isLoading} = useQuery<IProduct[]>({ 
        queryKey: ['products'], 
        queryFn: async ()=>{
            try {
                const {data} = await ListData("products")
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
    const columns = [
        {
          title: 'STT',
          key: 'stt',
          render: (_:any,item:IProduct,index:any)=>index+1
        },
        {
          title: 'Ảnh sản phẩm',
          dataIndex: 'image',
          key: 'image',
          render: (image:string)=><img src={image} width={90}/>
        },
        {
          title: 'Tên sản phẩm',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Thao tác',
            key: 'action',
        }
      ];
  return (
    <div className='bg-white px-4 py-2'>
        <h1 className='text-[24px] text-center'>Danh sách sản phẩm</h1>
        {(isLoading)?<div>Đang tải</div>:
        <>  {
            (data)&&<Table dataSource={data} columns={columns} />
            }
        </>
        }
    </div>
  )
}

export default ProductList
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../../interface/product'
import { Button, Table } from 'antd'

const Products = () => {
  const {data,isLoading} = useQuery<IProduct[]>({
    queryKey:['products'],
    queryFn: async()=>{
      try {
        const {data} = await axios.get(`http://localhost:3000/product`)
        return data
      } catch (error) {
          throw error
      }
    },
    staleTime: Infinity,
  })
  const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
    render: (_:any,__:any,index:number)=>index+1
  },
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'image',
    key: 'image',
    render:(image:string)=>(
      <img width={90} src={image}/>
    )
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
    title: 'Action',
    dataIndex: 'id',
    key: 'id',
    render: (id:number)=>(
      <>
      <Button color="primary" variant="solid">
            Sửa
          </Button>
          <Button color="danger" variant="solid">
            Xóa
          </Button>
        </>
    )
  },
];
if (isLoading) return <>Đang tải...</>
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {data&&<Table rowKey="id" dataSource={data} columns={columns} />}
    </div>
  )
}

export default Products
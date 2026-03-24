import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../../interface/product'
import { Button, message, Popconfirm, Table } from 'antd'
import { useNavigate } from 'react-router-dom'

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
  const queryclient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (value:number)=>{
        try {
            await axios.delete(`http://localhost:3000/product/${value}`)
            return value
        } catch (error) {
          throw error
        }
    },
    onSuccess:(value:number)=>{
      message.success("Xóa thành công")
      // if (queryclient.getQueryData(["products"])){
      //   queryclient.setQueryData(["products"],(olddata:IProduct[])=>{
      //     return olddata.filter(item=>item.id!=value)
      //   })
      // }
      queryclient.getQueryData(["products"])&&
      queryclient.setQueryData(["products"],(olddata:IProduct[])=>olddata.filter(item=>item.id!=value))
    },
    onError:()=>{
      message.error("Xóa thất bại")
    }
  })
  const navigate = useNavigate()
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
      <div className='flex gap-2'>
      <Button color="primary" variant="solid" onClick={()=>navigate(`/admin/products/edit/${id}`)}>
            Sửa
        </Button>
         <Popconfirm
        title="Xóa sản phẩm"
        description="Bạn thực sự muốn xóa"
        onConfirm={()=>onDelete(id)}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <Button danger>Xóa</Button>
      </Popconfirm>
        </div>
    )
  },
];
const onDelete = (id:number)=>{
  console.log(id);  
  mutation.mutate(id)
}
if (isLoading) return <>Đang tải...</>
  return (
    <div>
      <h1 className='text-center text-4xl mb-5'>Danh sách sản phẩm</h1>
      {data&&<Table rowKey="id" dataSource={data} columns={columns} />}
    </div>
  )
}

export default Products
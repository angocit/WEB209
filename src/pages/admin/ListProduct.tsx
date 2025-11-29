import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../../types/product'
import { Button, message, Popconfirm, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
type Props = {}

const ListProduct = (props: Props) => {
    const queryclient = useQueryClient()
    const navigate = useNavigate()
  const {data,isLoading,isError} = useQuery<IProduct[]>({
    queryKey: ["AllProduct"],
    queryFn: async ()=>{
      const {data} = await axios.get("http://localhost:3000/products")
      return data
    },
    // enabled: !queryclient.getQueryData(["AllProduct"])
     staleTime:Infinity
  })
  const mutation = useMutation({
    mutationFn: async(id:number)=>{
        await axios.delete(`http://localhost:3000/products/${id}`)
        return id
    },
    onSuccess: (id)=>{
      message.success("Xóa thành công")
      queryclient.setQueryData(["AllProduct"],(products:any)=>{
                return products.filter((product:IProduct)=>product.id!=id)
            })
    },
    onError:()=>{
      message.error("Xóa thất bại")
    }
  })
  const handleDelete =(id:number)=>{
      // alert(id)
      mutation.mutate(id)
  }
  if (isLoading) return <>Loading</>
const columns = [
    {
        title: 'No.',
        dataIndex: 'key',
        key: 'key',
        render:(_:any,__:any,index:number)=>index+1
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (url:string)=><img width={90} src={url}/>
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: (id:number)=>(
          <div className='flex gap-2'>
          <Button color="primary" variant="solid" onClick={()=>navigate(`/admin/products/${id}`)}>
            Sửa
          </Button>          
          <Popconfirm
        title="Xóa sản phẩm"
        description="Bạn thực sự muốn xóa?"
        onConfirm={()=>handleDelete(id)}
        okText="Yes"
        cancelText="No"
      >
        <Button color="danger" variant="solid">
            Xóa
          </Button>
      </Popconfirm> 
      </div>     
        )
    },
    ];
  return (
    <div>
       <Table rowKey="id" dataSource={data??[]} columns={columns} />;
    </div>
  )
}

export default ListProduct
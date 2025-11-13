import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import type { IProduct } from '../../types/product'
import { Table } from 'antd';
type Props = {}

const ListProduct = (props: Props) => {
    const queryclient = useQueryClient()
  const {data,isLoading,isError} = useQuery<IProduct[]>({
    queryKey: ["AllProduct"],
    queryFn: async ()=>{
      const {data} = await axios.get("http://localhost:3000/products")
      return data
    },
    // enabled: !queryclient.getQueryData(["AllProduct"])
     staleTime:Infinity
  })
  if (isLoading) return <>Loading</>
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    ];
  return (
    <div>
       <Table dataSource={data??[]} columns={columns} />;
    </div>
  )
}

export default ListProduct